import { NextResponse } from "next/server";

// Query params we intentionally let through (marketing/ad tracking).
// Everything else gets stripped via redirect — no page reads searchParams
// for rendering, so unknown params only exist to spam the crawl budget
// with duplicate-content URLs (e.g. bvs-ltd.co.uk/?e=...&channel=...&name=...).
const ALLOWED_PARAMS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "msclkid",
]);

export default function proxy(request) {
  const { searchParams } = request.nextUrl;
  const hasDisallowedParam = [...searchParams.keys()].some(
    (key) => !ALLOWED_PARAMS.has(key)
  );

  if (!hasDisallowedParam) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  for (const key of [...searchParams.keys()]) {
    if (!ALLOWED_PARAMS.has(key)) {
      url.searchParams.delete(key);
    }
  }

  return NextResponse.redirect(url, 308);
}

export const config = {
  // Skip API routes, Next internals, and any request for a static file
  // (anything with a dot in the last path segment).
  matcher: ["/((?!api/|_next/static|_next/image|.*\\..*).*)"],
};
