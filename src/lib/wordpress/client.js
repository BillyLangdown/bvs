const DEFAULT_TIMEOUT_MS = 12_000;

function isWpDebugEnabled() {
  return process.env.DEBUG_WP === "1" || process.env.DEBUG_WP === "true";
}

function debugLog(...args) {
  if (!isWpDebugEnabled()) return;
  // Server-side log (shows in terminal running `npm run dev`)
  // Avoid logging secrets (auth header).
  console.log("[wp]", ...args);
}

function joinUrl(base, path) {
  const b = String(base || "").replace(/\/+$/, "");
  const p = String(path || "").replace(/^\/+/, "");
  return `${b}/${p}`;
}

async function fetchWithTimeout(url, init, timeoutMs = DEFAULT_TIMEOUT_MS) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { ...init, signal: controller.signal });
    return res;
  } finally {
    clearTimeout(t);
  }
}

export class WordpressApiError extends Error {
  constructor(message, { status, url, body } = {}) {
    super(message);
    this.name = "WordpressApiError";
    this.status = status;
    this.url = url;
    this.body = body;
  }
}

export function getWpConfig() {
  const apiBase = process.env.WP_API_BASE;
  const baseUrl = process.env.WP_BASE_URL;
  const authHeader = process.env.WP_AUTH_HEADER;

  if (!apiBase) {
    debugLog("Missing WP_API_BASE env var");
    throw new Error(
      "Missing WP_API_BASE. Set it in your environment (see .env.example).",
    );
  }

  debugLog("Config", {
    WP_API_BASE: apiBase,
    WP_BASE_URL: baseUrl || null,
    WP_AUTH_HEADER: authHeader ? "[set]" : "[not set]",
  });

  return { apiBase, baseUrl, authHeader };
}

export async function wpFetch(path, { query, init, next, timeoutMs } = {}) {
  const { apiBase, authHeader } = getWpConfig();

  const url = new URL(joinUrl(apiBase, path));
  if (query) {
    Object.entries(query).forEach(([k, v]) => {
      if (v === undefined || v === null || v === "") return;
      url.searchParams.set(k, String(v));
    });
  }

  const headers = new Headers(init?.headers || {});
  headers.set("Accept", "application/json");
  if (authHeader) headers.set("Authorization", authHeader);

  debugLog("Request", {
    url: url.toString(),
    method: init?.method || "GET",
    revalidate: next?.revalidate ?? null,
  });

  const res = await fetchWithTimeout(
    url.toString(),
    {
      ...init,
      headers,
      next,
    },
    timeoutMs,
  );

  const contentType = res.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");
  const body = isJson ? await res.json().catch(() => null) : await res.text();

  if (!res.ok) {
    debugLog("Response error", {
      status: res.status,
      url: url.toString(),
      bodyPreview:
        typeof body === "string" ? body.slice(0, 200) : JSON.stringify(body)?.slice(0, 200),
    });
    throw new WordpressApiError("WordPress API request failed", {
      status: res.status,
      url: url.toString(),
      body,
    });
  }

  debugLog("Response ok", { status: res.status, url: url.toString() });
  return body;
}

