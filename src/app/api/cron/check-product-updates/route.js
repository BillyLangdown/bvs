import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { wpFetch } from "@/lib/wordpress/client";

// Runs hourly via an external scheduler (cron-job.org, not a Vercel Cron
// Job — there's no vercel.json in this repo) to catch product changes that
// can't reach us via webhook: WooCommerce's native webhook delivery depends
// on WP-Cron, which isn't reliably running on this host, and there's no
// hosting access to fix that at the source. Blog posts don't need this,
// their webhook (WP Webhooks) fires synchronously within the same request
// that saves the post, no cron dependency at all.
//
// Must look back further than the 60-minute run interval, or a change made
// just after one run ages out of the window before the next run's lookback
// reaches it — silently skipped forever, not just delayed. 90 minutes gives
// a comfortable overlap even if a run is occasionally slow or missed.
const LOOKBACK_MINUTES = 90;

export async function GET(request) {
  // Accepts the secret as either a Bearer header (e.g. Vercel's own Cron
  // Jobs) or a ?secret= query param — some external schedulers (cron-job.org)
  // don't reliably send custom headers, but a URL is always sent intact.
  const authHeader = request.headers.get("authorization");
  const querySecret = request.nextUrl.searchParams.get("secret");
  const authorized =
    authHeader === `Bearer ${process.env.CRON_SECRET}` || querySecret === process.env.CRON_SECRET;
  if (!authorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const since = new Date(Date.now() - LOOKBACK_MINUTES * 60_000).toISOString();

  let changed;
  try {
    changed = await wpFetch("product", {
      query: {
        modified_after: since,
        orderby: "modified",
        order: "desc",
        per_page: 100,
        _fields: "id,slug,modified",
      },
      next: { revalidate: 0 },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch recently modified products", detail: String(err?.message || err) },
      { status: 502 }
    );
  }

  if (!Array.isArray(changed) || changed.length === 0) {
    return NextResponse.json({ checkedSince: since, changedCount: 0 });
  }

  const paths = new Set(["/shop", "/sitemap.xml"]);
  for (const product of changed) {
    if (product.slug) paths.add(`/shop/${product.slug}`);
  }
  paths.forEach((path) => revalidatePath(path));

  return NextResponse.json({
    checkedSince: since,
    changedCount: changed.length,
    revalidated: [...paths],
  });
}
