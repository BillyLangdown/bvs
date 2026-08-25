import { cache } from "react";
import { wpFetch } from "./client";
import { storeFetch, getStoreProductBySlug } from "./store";
import { fixWpContentUrls } from "./fixWpContentUrls";

function stripHtml(html) {
  if (!html) return "";
  return String(html).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

// Decode common HTML entities so titles are safe to render as plain text
// (avoids dangerouslySetInnerHTML entity-normalisation hydration mismatches)
export function decodeHtmlEntities(str) {
  if (!str) return "";
  return String(str)
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}

// Some Divi pages end with an embedded contact form (superseded by this
// site's own quote form elsewhere on the page) — everything from the form's
// heading onward is just the form markup and its config script, nothing
// worth keeping.
// FAQ content sometimes links to the embedded form by its in-page anchor
// (e.g. "#ecfanform") — now removed along with the rest of that section, so
// point these at this site's own quote form instead of a dead link.
function fixFormAnchors(html) {
  return html.replace(/href="#\w*form"/gi, 'href="#enquire"');
}

function stripTrailingContactForm(html) {
  const idx = html.indexOf("et_pb_contact_main_title");
  if (idx === -1) return html;
  const headingStart = html.lastIndexOf("<h", idx);
  return headingStart === -1 ? html : html.slice(0, headingStart);
}

// Some FAQ answers were pasted directly from an AI chat interface, carrying
// over its own UI wrapper markup (avatar/chat-bubble divs) whose class names
// collide with this site's own Tailwind utilities and break the layout.
// Strips just the class attribute off these specific known wrapper divs
// (rather than trying to remove the divs entirely, which would need
// matching balanced closing tags around arbitrarily nested content) so
// they become inert, unstyled wrappers instead of broken layout artifacts.
function unwrapPastedChatUI(html) {
  return html
    .replace(/<div class="flex-shrink-0 flex flex-col relative items-end">/g, "<div>")
    .replace(/<div class="pt-0">/g, "<div>")
    .replace(/<div class="gizmo-bot-avatar[^"]*">/g, "<div>");
}

// Some Divi pages repeat the page title and tagline at the top of the body
// content, duplicating what the page's own hero section already shows.
// Trims everything before the first FAQ heading, if there is one.
function trimToFaqHeading(html) {
  const m = html.match(/<h[1-6][^>]*>[^<]*FAQ[^<]*<\/h[1-6]>/i);
  return m ? html.slice(m.index + m[0].length) : html;
}

// Divi builder pages/products store their real rendered HTML in a meta field
// (_et_pb_old_content) rather than the standard content.rendered, which
// stays as raw, unprocessed shortcode markup (e.g. "[et_pb_section]...").
function cleanDiviContent(rawContent) {
  return fixWpContentUrls(
    (rawContent || "")
      .replace(/\s+data-(?:start|end)="[^"]*"/g, "")
      .replace(/\[[\w/][^\]]*\]/g, "")
      .trim()
  );
}

// Pages
//
// Wrapped in React's cache() because every page under src/app/[slug]/page.js
// calls this twice per render — once from generateMetadata, once from the
// page component, with the same slug — and the HTML-cleaning below (several
// regex passes over the full Divi page content) is real CPU work that
// shouldn't run twice for the same output. cache() dedupes same-argument
// calls within a single request/render, so the second call reuses the
// first's result instead of recomputing it.
export const getPageBySlug = cache(async function getPageBySlug(slug, { revalidate = 86400 } = {}) {
  const pages = await wpFetch("pages", {
    query: { slug, _fields: "id,slug,title,content,excerpt,meta,aioseo_head_json" },
    next: { revalidate },
  });
  const page = pages?.[0] || null;
  if (!page) return null;
  // Prefer the pre-Divi content snapshot when one exists, but most Divi
  // pages were built natively and have no such snapshot — in that case
  // content.rendered is itself raw shortcode markup ("[et_pb_section]...")
  // and needs the same cleaning, not a pass-through.
  const rawContent = page.meta?._et_pb_old_content || page.content?.rendered || "";
  const cleaned = trimToFaqHeading(
    unwrapPastedChatUI(fixFormAnchors(stripTrailingContactForm(cleanDiviContent(rawContent))))
  );
  return { ...page, content: { ...page.content, rendered: cleaned } };
});

export async function getPages({ perPage = 100, revalidate = 86400 } = {}) {
  return wpFetch("pages", {
    query: { per_page: perPage, _fields: "id,slug,title,excerpt" },
    next: { revalidate },
  });
}

export async function getCaseStudyPages({ perPage = 20, revalidate = 86400 } = {}) {
  // Case studies on this site are implemented as pages (often with slug ending in -case-study).
  const pages = await wpFetch("pages", {
    query: {
      search: "case study",
      per_page: perPage,
      _embed: 1,
      _fields: "id,slug,title,excerpt,featured_media,_embedded",
    },
    next: { revalidate },
  });

  return (pages || []).filter((p) => {
    const slug = String(p?.slug || "");
    const title = String(p?.title?.rendered || "");
    return slug.includes("case-study") || title.toLowerCase().includes("case study");
  });
}

// Posts
//
// _fields is deliberately restricted here (unlike a bare listing request)
// because this is used to build post listings (blog index, sitemap,
// generateStaticParams) that only ever read slug/title/excerpt/featured
// image — without it, WordPress returns full content.rendered (the entire
// article body) for every post in the list, which made a 30-post request
// ~1.5MB and pushed it close to the fetch timeout on cold builds. _links and
// _embedded must stay in the list even though nothing reads them directly:
// dropping them makes WordPress strip the _embed data (the featured image)
// out of the response entirely.
export async function getPosts({ perPage = 20, revalidate = 86400 } = {}) {
  return wpFetch("posts", {
    query: {
      per_page: perPage,
      _embed: "wp:featuredmedia",
      _fields: "id,slug,title,excerpt,_links,_embedded,aioseo_head_json",
    },
    next: { revalidate },
  });
}

// Wrapped in cache() for the same reason as getPageBySlug above — the blog
// post route calls this twice per render (generateMetadata + page
// component) with the same slug.
export const getPostBySlug = cache(async function getPostBySlug(slug, { revalidate = 86400 } = {}) {
  const items = await wpFetch("posts", {
    query: {
      slug,
      _embed: "wp:featuredmedia",
      _fields: "id,slug,title,content,excerpt,date,_links,_embedded,aioseo_head_json",
    },
    next: { revalidate },
  });
  return items?.[0] || null;
});

// Case studies (expects a WP custom post type registered as "case-studies")
export async function getCaseStudies({ perPage = 50, revalidate = 86400 } = {}) {
  return wpFetch("case-studies", {
    query: {
      per_page: perPage,
      _fields: "id,slug,title,excerpt,featured_media,date,aioseo_head_json",
    },
    next: { revalidate },
  });
}

export async function getCaseStudyBySlug(slug, { revalidate = 86400 } = {}) {
  const items = await wpFetch("case-studies", {
    query: {
      slug,
      _fields:
        "id,slug,title,content,excerpt,featured_media,date,aioseo_head_json",
    },
    next: { revalidate },
  });
  return items?.[0] || null;
}

export async function getShopProducts({ revalidate = 86400 } = {}) {
  const [storeProducts, wpProducts] = await Promise.all([
    storeFetch("products", {
      query: { per_page: 100 },
      next: { revalidate },
    }),
    wpFetch("product", {
      query: { per_page: 100, _fields: "id,slug,product_badge" },
      next: { revalidate },
    }).catch(() => []),
  ]);

  // Build a slug→badge map from WP products (only populated after functions.php snippet added)
  const badgeBySlug = {};
  for (const wp of wpProducts || []) {
    if (wp.product_badge) badgeBySlug[wp.slug] = wp.product_badge;
  }

  return (storeProducts || []).map((p) => {
    const badge = badgeBySlug[p.slug] || null;
    return {
      id: p.id,
      slug: p.slug,
      title: decodeHtmlEntities(p.name || ""),
      excerpt: stripHtml(p.short_description || ""),
      link: p.permalink || "",
      categories: (p.categories || []).map((c) => c.id),
      imageUrl: p.images?.[0]?.src || null,
      stockBadge: badge || null,
      stockClass: badge ? badge.toLowerCase().replace(/\s+/g, "-") : null,
    };
  });
}

export async function getProductCategories({ revalidate = 86400 } = {}) {
  try {
    const cats = await wpFetch("product_cat", {
      query: { per_page: 100, _fields: "id,name,slug,count" },
      next: { revalidate },
    });
    return (cats || [])
      .filter((c) => c.slug !== "uncategorized" && c.count > 0)
      .map((c) => ({ ...c, name: decodeHtmlEntities(c.name) }));
  } catch {
    return [];
  }
}

// Wrapped in cache() for the same reason as getPageBySlug above — the
// product page route calls this twice per render (generateMetadata + page
// component) with the same slug, and this function does several network
// calls plus cleanDiviContent() on the product body each time.
export const getShopProductBySlug = cache(async function getShopProductBySlug(slug, { revalidate = 86400 } = {}) {
  // WP REST API product CPT is a supplementary source (title/excerpt/badge) that may
  // require auth or not be publicly registered on this install. Any failure here —
  // auth, network, timeout — just means "no WP data", never a reason to treat the
  // product as missing, so it's always safe to swallow.
  //
  // The Store API below is the authoritative source for whether the product exists.
  // Its failures are intentionally NOT swallowed: if it throws (network error, timeout,
  // rate limit) rather than resolving to "no match", that error propagates out of this
  // function so an ISR revalidation fails loudly instead of silently returning null.
  // A silent null here reads as "product doesn't exist" to the page component below,
  // which overwrites a perfectly good cached page with a false 404 that only heals on
  // the next revalidation window. Letting the fetch failure throw instead means Next.js
  // keeps serving the last good cached page and retries later.
  const [wpItems, storeProduct] = await Promise.all([
    wpFetch("product", {
      query: {
        slug,
        _fields: "id,slug,title,excerpt,link,featured_media,product_cat,meta,product_badge",
      },
      next: { revalidate },
    }).catch(() => []),
    getStoreProductBySlug(slug, { revalidate }),
  ]);

  const p = wpItems?.[0] ?? null;

  // Must have at least one data source
  if (!p && !storeProduct) return null;

  // Resolve featured image — prefer WP media API, fall back to Store API image
  let imageUrl = storeProduct?.images?.[0]?.src || null;
  if (p?.featured_media) {
    try {
      const media = await wpFetch(`media/${p.featured_media}`, {
        query: { _fields: "id,source_url,media_details" },
        next: { revalidate },
      });
      imageUrl =
        media?.media_details?.sizes?.large?.source_url ||
        media?.media_details?.sizes?.medium?.source_url ||
        media?.source_url ||
        imageUrl;
    } catch {}
  }

  const content = cleanDiviContent(p?.meta?._et_pb_old_content);

  // Extract brand — prefer the dedicated brands taxonomy returned by the Store API,
  // fall back to a WC attribute named "brand" / taxonomy "pa_brand". Custom-built items
  // (e.g. coils built to spec) have no third-party manufacturer, so fall back to "BVS"
  // rather than leaving brand empty — BVS is the genuine maker/supplier of those, and
  // Google's Merchant listings check flags products with no brand/gtin as missing a
  // global identifier.
  const attributes = storeProduct?.attributes || [];
  const brand =
    storeProduct?.brands?.[0]?.name ||
    attributes.find((a) => a.name?.toLowerCase() === "brand" || a.taxonomy === "pa_brand")
      ?.terms?.[0]?.name ||
    "BVS";

  // Format price from prices object (minor units) — avoids HTML entity issues in price_html.
  // A raw price of "0" means WooCommerce has no fixed price set (custom/quote-only items
  // like made-to-spec coils), not a genuine £0 product, so it's treated the same as no
  // price at all rather than surfaced as £0.00 in the UI or, worse, in Product schema
  // (which was leaking price: "0.00" into structured data before this fix).
  const pricesObj = storeProduct?.prices;
  const rawPrice = pricesObj?.price ? parseInt(pricesObj.price, 10) : 0;
  const priceAmount = rawPrice > 0
    ? rawPrice / Math.pow(10, pricesObj.currency_minor_unit ?? 2)
    : null;
  const priceDisplay = priceAmount !== null
    ? `${pricesObj.currency_prefix || "£"}${priceAmount.toLocaleString("en-GB", {
        minimumFractionDigits: pricesObj.currency_minor_unit ?? 2,
        maximumFractionDigits: pricesObj.currency_minor_unit ?? 2,
      })}`
    : null;

  const wpTitle = p ? stripHtml(p.title?.rendered || "") : "";
  const wpExcerpt = p ? (p.excerpt?.rendered || "") : "";

  return {
    id: p?.id ?? storeProduct?.id,
    slug: p?.slug ?? storeProduct?.slug ?? slug,
    title: decodeHtmlEntities(wpTitle || storeProduct?.name || ""),
    excerpt: stripHtml(wpExcerpt || storeProduct?.short_description || ""),
    content: content || null,
    link: p?.link || storeProduct?.permalink || "",
    categories: p?.product_cat || [],
    imageUrl,
    images: (storeProduct?.images || []).map((img) => ({
      src: img.src,
      thumbnail: img.thumbnail || img.src,
      alt: img.alt || "",
    })),
    // WooCommerce Store API fields
    price: priceDisplay,
    priceAmount,
    priceCurrency: pricesObj?.currency_code || "GBP",
    sku: storeProduct?.sku || null,
    weight: storeProduct?.weight || null,
    dimensions: storeProduct?.dimensions || null,
    tags: (storeProduct?.tags || []).map((t) => t.name),
    brand,
    attributes: attributes.map((a) => ({
      name: a.name,
      terms: (a.terms || []).map((t) => t.name),
    })),
    // Stock: YITH product_badge is the sole source of truth. No fallback.
    stockBadge: p?.product_badge || null,
    stockClass: p?.product_badge
      ? p.product_badge.toLowerCase().replace(/\s+/g, "-")
      : null,
  };
});

export { stripHtml };

