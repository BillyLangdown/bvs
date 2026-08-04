import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { wpFetch } from "@/lib/wordpress/client";

// Runs on a schedule (see vercel.json) to catch product changes that can't
// reach us via webhook: WooCommerce's native webhook delivery depends on
// WP-Cron, which isn't reliably running on this host, and there's no
// hosting access to fix that at the source. Blog posts don't need this,
// their webhook (WP Webhooks) fires synchronously within the same request
// that saves the post, no cron dependency at all.
//
// Looks back further than the cron interval so a slow or occasionally
// missed run can't let a change slip through the gap between checks.
const LOOKBACK_MINUTES = 45;

export async function GET(request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    // Temporary diagnostic: cron-job.org keeps sending a header that fails
    // this check for a reason not yet identified. Logs to Vercel (visible
    // via `vercel logs` regardless of what cron-job.org's own UI shows) and
    // reports back (without leaking the real secret) whether a header
    // arrived at all, its length, and a masked preview. Remove once resolved.
    console.log("[cron-auth-fail]", {
      headerReceived: authHeader !== null,
      headerLength: authHeader?.length ?? 0,
      headerPreview: authHeader ? JSON.stringify(authHeader) : null,
      userAgent: request.headers.get("user-agent"),
    });
    return NextResponse.json(
      {
        error: "Unauthorized",
        debug: {
          headerReceived: authHeader !== null,
          headerLength: authHeader?.length ?? 0,
          headerPreview: authHeader
            ? `${authHeader.slice(0, 10)}...${authHeader.slice(-4)}`
            : null,
          expectedLength: `Bearer ${process.env.CRON_SECRET}`.length,
          secretConfigured: Boolean(process.env.CRON_SECRET),
        },
      },
      { status: 401 }
    );
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
