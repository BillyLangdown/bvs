import { getWpConfig, wpFetch, WpConfigError } from "./client";

function joinUrl(base, path) {
  const b = String(base || "").replace(/\/+$/, "");
  const p = String(path || "").replace(/^\/+/, "");
  return `${b}/${p}`;
}

export function getStoreApiBase() {
  const { baseUrl } = getWpConfig();
  if (!baseUrl) {
    throw new WpConfigError("Missing WP_BASE_URL. Set it in your environment.");
  }
  return joinUrl(baseUrl, "wp-json/wc/store/v1");
}

export async function storeFetch(path, { query, next } = {}) {
  const base = getStoreApiBase();
  const url = new URL(joinUrl(base, path));
  if (query) {
    Object.entries(query).forEach(([k, v]) => {
      if (v === undefined || v === null || v === "") return;
      url.searchParams.set(k, String(v));
    });
  }

  // Reuse wpFetch transport for timeout + optional debug logging, but pass full URL.
  // wpFetch expects a path relative to WP_API_BASE, so we call it via direct fetch if needed.
  // Easiest: use wpFetch with absolute URL by temporarily using init.url? Not supported.
  // So: just call fetch with Next caching options.
  const res = await fetch(url.toString(), {
    headers: { Accept: "application/json" },
    next,
  });
  const body = await res.json().catch(() => null);
  if (!res.ok) {
    const err = new Error("WooCommerce Store API request failed");
    err.status = res.status;
    err.url = url.toString();
    err.body = body;
    throw err;
  }
  return body;
}

export async function getStoreProductBySlug(slug, { revalidate = 3600 } = {}) {
  const items = await storeFetch("products", {
    query: { slug, per_page: 1 },
    next: { revalidate },
  });
  return items?.[0] || null;
}

