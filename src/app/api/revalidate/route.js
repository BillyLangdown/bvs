import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// Called whenever a post, product, or page is published or updated, so pages
// only regenerate when content actually changes instead of on a timer.
//
// Supports two ways in, so it works with almost any WordPress webhook tool:
//  - GET  /api/revalidate?secret=...&slug=...&type=post   (paste one URL into
//    a no-code webhook plugin, no custom body needed. type defaults to "post"
//    since that's the main use case, so a blog-only setup can just use
//    ?secret=...&slug=...)
//  - POST /api/revalidate  with a JSON body { secret, type, slug }
const PATHS_BY_TYPE = {
  post: (slug) => [`/our-blogs/${slug}`, "/our-blogs", "/sitemap.xml"],
  product: (slug) => [`/shop/${slug}`, "/shop", "/sitemap.xml"],
  page: (slug) => [`/${slug}`],
};

// In-memory rate limit: not distributed across regions/cold starts like a
// real Firewall rule would be, but blunts a basic flood at zero cost. No
// Vercel Firewall custom rules on the current plan, so this is the fallback.
// Legitimate traffic here is a single WordPress site's webhook, so the limit
// is generous but well below anything a real editor would ever trigger.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 20;
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (requestLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);

  // Bound memory: an in-memory Map on a long-lived warm instance could
  // otherwise grow unbounded under a distributed flood from many IPs.
  if (requestLog.size > 500) {
    const oldestKey = requestLog.keys().next().value;
    requestLog.delete(oldestKey);
  }

  return recent.length > RATE_LIMIT_MAX;
}

function getClientIp(request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function doRevalidate({ secret, type, slug }) {
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const buildPaths = PATHS_BY_TYPE[type];
  if (!buildPaths || !slug) {
    return NextResponse.json(
      { error: "type must be one of post/product/page, and slug is required" },
      { status: 400 }
    );
  }

  const paths = buildPaths(slug);
  paths.forEach((path) => revalidatePath(path));

  return NextResponse.json({ revalidated: true, paths });
}

export async function GET(request) {
  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }
  const params = request.nextUrl.searchParams;
  return doRevalidate({
    secret: params.get("secret"),
    type: params.get("type") || "post",
    slug: params.get("slug"),
  });
}

export async function POST(request) {
  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }
  const body = await request.json().catch(() => null);
  return doRevalidate({
    secret: body?.secret,
    type: body?.type,
    slug: body?.slug,
  });
}
