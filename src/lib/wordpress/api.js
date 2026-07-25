import { wpFetch } from "./client";
import { storeFetch, getStoreProductBySlug } from "./store";

function stripHtml(html) {
  if (!html) return "";
  return String(html).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

// Decode common HTML entities so titles are safe to render as plain text
// (avoids dangerouslySetInnerHTML entity-normalisation hydration mismatches)
function decodeHtmlEntities(str) {
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

// Pages
export async function getPageBySlug(slug, { revalidate = 3600 } = {}) {
  const pages = await wpFetch("pages", {
    query: { slug, _fields: "id,slug,title,content,excerpt,yoast_head_json" },
    next: { revalidate },
  });
  return pages?.[0] || null;
}

export async function getPages({ perPage = 100, revalidate = 3600 } = {}) {
  return wpFetch("pages", {
    query: { per_page: perPage, _fields: "id,slug,title,excerpt" },
    next: { revalidate },
  });
}

export async function getCaseStudyPages({ perPage = 20, revalidate = 3600 } = {}) {
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
export async function getPosts({ perPage = 20, revalidate = 3600 } = {}) {
  return wpFetch("posts", {
    query: {
      per_page: perPage,
      _embed: "wp:featuredmedia",
    },
    next: { revalidate },
  });
}

export async function getPostBySlug(slug, { revalidate = 3600 } = {}) {
  const items = await wpFetch("posts", {
    query: {
      slug,
      _fields: "id,slug,title,content,excerpt,date,yoast_head_json",
    },
    next: { revalidate },
  });
  return items?.[0] || null;
}

// Case studies (expects a WP custom post type registered as "case-studies")
export async function getCaseStudies({ perPage = 50, revalidate = 3600 } = {}) {
  return wpFetch("case-studies", {
    query: {
      per_page: perPage,
      _fields: "id,slug,title,excerpt,featured_media,date,yoast_head_json",
    },
    next: { revalidate },
  });
}

export async function getCaseStudyBySlug(slug, { revalidate = 3600 } = {}) {
  const items = await wpFetch("case-studies", {
    query: {
      slug,
      _fields:
        "id,slug,title,content,excerpt,featured_media,date,yoast_head_json",
    },
    next: { revalidate },
  });
  return items?.[0] || null;
}

export async function getShopProducts({ revalidate = 3600 } = {}) {
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

export async function getProductCategories({ revalidate = 600 } = {}) {
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

export async function getShopProductBySlug(slug, { revalidate = 3600 } = {}) {
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

  // _et_pb_old_content holds clean HTML written before the Divi builder took over
  const rawContent = p?.meta?._et_pb_old_content || "";
  const content = rawContent
    .replace(/\s+data-(?:start|end)="[^"]*"/g, "")
    .replace(/\[[\w/][^\]]*\]/g, "")
    .trim();

  // Extract brand — prefer the dedicated brands taxonomy returned by the Store API,
  // fall back to a WC attribute named "brand" / taxonomy "pa_brand"
  const attributes = storeProduct?.attributes || [];
  const brand =
    storeProduct?.brands?.[0]?.name ||
    attributes.find((a) => a.name?.toLowerCase() === "brand" || a.taxonomy === "pa_brand")
      ?.terms?.[0]?.name ||
    null;

  // Format price from prices object (minor units) — avoids HTML entity issues in price_html
  const pricesObj = storeProduct?.prices;
  const priceDisplay = pricesObj?.price
    ? `${pricesObj.currency_prefix || "£"}${(
        parseInt(pricesObj.price, 10) /
        Math.pow(10, pricesObj.currency_minor_unit ?? 2)
      ).toLocaleString("en-GB", {
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
}

export { stripHtml };

