import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// Called whenever a post, product, or page is published or updated, so pages
// only regenerate when content actually changes instead of on a timer.
//
// Designed to work with WordPress webhook plugins that use a fixed target
// URL and send WordPress's own post data as the request body (e.g. WP
// Webhooks), not just tools that let you build a custom URL with
// placeholders. So: secret and type are read from the URL query string
// (fixed, set once when you configure the webhook), and slug is read from
// the body, trying several common WordPress field names since different
// plugins/versions use different ones.
const PATHS_BY_TYPE = {
  post: (slug) => [`/our-blogs/${slug}`, "/our-blogs", "/sitemap.xml"],
  product: (slug) => [`/shop/${slug}`, "/shop", "/sitemap.xml"],
  page: (slug) => [`/${slug}`],
};

const SLUG_FIELD_CANDIDATES = ["slug", "post_slug", "post_name", "name"];

// WordPress's own post_type values (post/page/product) map directly onto
// our PATHS_BY_TYPE keys, so a plugin that sends the raw post object
// (e.g. WP Webhooks: { post: { post_type, post_name, ... } }) needs no
// translation, just picking the field out.
const NESTED_POST_FIELD_CANDIDATES = ["post", "post_data", "data"];

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 20;
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (requestLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);

  if (requestLog.size > 500) {
    const oldestKey = requestLog.keys().next().value;
    requestLog.delete(oldestKey);
  }

  return recent.length > RATE_LIMIT_MAX;
}

function getClientIp(request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

// Handles JSON, form-urlencoded, and multipart bodies, since different
// webhook plugins/settings send different content types.
async function parseBody(request) {
  const contentType = request.headers.get("content-type") || "";
  try {
    if (contentType.includes("application/json")) {
      return (await request.json()) || {};
    }
    if (contentType.includes("multipart/form-data") || contentType.includes("x-www-form-urlencoded")) {
      const form = await request.formData();
      return Object.fromEntries(form.entries());
    }
    const text = await request.text();
    if (!text) return {};
    try {
      return JSON.parse(text);
    } catch {
      return Object.fromEntries(new URLSearchParams(text));
    }
  } catch {
    return {};
  }
}

// Finds the nested WordPress post object, if the payload wraps it
// (e.g. WP Webhooks sends { post: { post_name, post_type, ... } }).
function findNestedPost(body) {
  for (const key of NESTED_POST_FIELD_CANDIDATES) {
    if (body?.[key] && typeof body[key] === "object") return body[key];
  }
  return null;
}

function findSlug(body) {
  for (const key of SLUG_FIELD_CANDIDATES) {
    if (body?.[key]) return body[key];
  }
  const nested = findNestedPost(body);
  if (nested?.post_name) return nested.post_name;
  return null;
}

function findType(body) {
  const nested = findNestedPost(body);
  if (nested?.post_type && PATHS_BY_TYPE[nested.post_type]) return nested.post_type;
  return null;
}

function revalidate(type, slug) {
  const buildPaths = PATHS_BY_TYPE[type];
  if (!buildPaths) {
    return NextResponse.json({ error: "type must be one of post/product/page" }, { status: 400 });
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
  if (params.get("secret") !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const type = params.get("type") || "post";
  const slug = params.get("slug");
  if (!slug) {
    return NextResponse.json({ error: "slug is required" }, { status: 400 });
  }

  return revalidate(type, slug);
}

export async function POST(request) {
  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const params = request.nextUrl.searchParams;
  const body = await parseBody(request);

  const secret = params.get("secret") ?? body?.secret;
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const type = params.get("type") || body?.type || findType(body) || "post";
  const slug = params.get("slug") || findSlug(body);

  if (!slug) {
    // Diagnostic response: shows exactly what fields were received, so a
    // webhook plugin's "send demo/test" feature can be used to find the
    // real field name for the slug instead of guessing.
    return NextResponse.json(
      {
        error: "Could not find a slug field in the request body",
        receivedFields: Object.keys(body || {}),
        receivedBody: body,
      },
      { status: 400 }
    );
  }

  return revalidate(type, slug);
}
