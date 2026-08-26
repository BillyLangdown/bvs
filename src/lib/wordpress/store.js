import { getWpConfig, resilientJsonRequest, WpConfigError } from "./client";

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

  // Shares the same concurrency-limited, retrying transport as wpFetch —
  // this hits the same physical WordPress host, just a different API
  // surface (WooCommerce's Store API instead of core WP REST), so it needs
  // the same protection against overloading that host's resource limits.
  return resilientJsonRequest(url, {
    headers: { Accept: "application/json" },
    next,
    errorMessage: "WooCommerce Store API request failed",
  });
}

export async function getStoreProductBySlug(slug, { revalidate = 86400 } = {}) {
  const items = await storeFetch("products", {
    query: { slug, per_page: 1 },
    next: { revalidate },
  });
  return items?.[0] || null;
}

