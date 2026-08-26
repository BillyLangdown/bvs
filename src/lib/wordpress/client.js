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

// The CMS host (cms.bvs-ltd.co.uk) is known to be intermittently slow or
// rate-limited — a single blip here otherwise surfaces as a permanent
// failure to whichever page happened to be building or revalidating at that
// moment (see WpConfigError's callers). Retrying after a short, increasing
// delay lets a transient blip clear without giving up outright. Only
// retried for failures that look transient: network/timeout errors, and
// HTTP responses that indicate temporary trouble (403/429/5xx) rather than a
// genuine "this doesn't exist" (404) or a real client-side mistake (other 4xx).
const RETRY_DELAYS_MS = [1500, 3000, 6000];

function isRetryableStatus(status) {
  return status === 403 || status === 429 || status >= 500;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Next.js's static build spins up several page-generation workers, each
// free to fire off WordPress requests with no coordination — dozens of
// pages resolving in parallel can mean dozens of simultaneous hits to a
// modest shared-hosting WP install, which is what actually trips its
// resource limit (a single request in isolation is fine). Capping how many
// requests this process has in flight at once smooths that burst out
// without needing the host's limits raised. Each of Next's build workers is
// a separate process, so this only caps concurrency per-worker, not
// globally — still a meaningful cut versus fully unthrottled.
const MAX_CONCURRENT_REQUESTS = 4;
let activeRequests = 0;
const waiters = [];

async function acquireSlot() {
  if (activeRequests < MAX_CONCURRENT_REQUESTS) {
    activeRequests++;
    return;
  }
  await new Promise((resolve) => waiters.push(resolve));
  activeRequests++;
}

function releaseSlot() {
  activeRequests--;
  const next = waiters.shift();
  if (next) next();
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

// Thrown when required env vars aren't set at all — a permanent configuration problem
// (e.g. running locally without WP env vars), not a transient backend failure. Callers
// that need to keep building/rendering without a WP backend configured (e.g. a page
// rendered at build time with no separate params-generation safety net) can catch
// specifically this and fall back gracefully, while still letting real request
// failures (network, timeout, rate limit) propagate uncaught.
export class WpConfigError extends Error {
  constructor(message) {
    super(message);
    this.name = "WpConfigError";
  }
}

export function getWpConfig() {
  const apiBase = process.env.WP_API_BASE;
  const baseUrl = process.env.WP_BASE_URL;
  const authHeader = process.env.WP_AUTH_HEADER;

  if (!apiBase) {
    debugLog("Missing WP_API_BASE env var");
    throw new WpConfigError(
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

async function attemptJsonRequest(url, headers, init, next, timeoutMs, errorMessage) {
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
    throw new WordpressApiError(errorMessage, {
      status: res.status,
      url: url.toString(),
      body,
    });
  }

  debugLog("Response ok", { status: res.status, url: url.toString() });
  return body;
}

// Shared transport for every request this app makes to the WordPress host
// (both the core WP REST API via wpFetch, and the WooCommerce Store API via
// storeFetch in store.js) — concurrency-limited and retried in one place so
// neither caller can bypass the other's protection against overloading a
// single shared-hosting backend.
export async function resilientJsonRequest(
  url,
  { headers, init, next, timeoutMs, errorMessage = "WordPress API request failed" } = {},
) {
  debugLog("Request", {
    url: url.toString(),
    method: init?.method || "GET",
    revalidate: next?.revalidate ?? null,
  });

  await acquireSlot();
  try {
    for (let attempt = 0; ; attempt++) {
      try {
        return await attemptJsonRequest(url, headers, init, next, timeoutMs, errorMessage);
      } catch (err) {
        const isRetryableError =
          err instanceof WordpressApiError ? isRetryableStatus(err.status) : true;
        if (!isRetryableError || attempt >= RETRY_DELAYS_MS.length) throw err;

        debugLog("Retrying after transient failure", {
          url: url.toString(),
          attempt: attempt + 1,
          error: err.message,
        });
        await delay(RETRY_DELAYS_MS[attempt]);
      }
    }
  } finally {
    releaseSlot();
  }
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

  return resilientJsonRequest(url, {
    headers,
    init,
    next,
    timeoutMs,
    errorMessage: "WordPress API request failed",
  });
}

