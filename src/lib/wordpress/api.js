import { wpFetch } from "./client";
import { storeFetch } from "./store";

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
export async function getPageBySlug(slug, { revalidate = 300 } = {}) {
  const pages = await wpFetch("pages", {
    query: { slug, _fields: "id,slug,title,content,excerpt,yoast_head_json" },
    next: { revalidate },
  });
  return pages?.[0] || null;
}

export async function getPages({ perPage = 100, revalidate = 300 } = {}) {
  return wpFetch("pages", {
    query: { per_page: perPage, _fields: "id,slug,title,excerpt" },
    next: { revalidate },
  });
}

export async function getCaseStudyPages({ perPage = 20, revalidate = 300 } = {}) {
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
export async function getPosts({ perPage = 20, revalidate = 300 } = {}) {
  return wpFetch("posts", {
    query: {
      per_page: perPage,
      _embed: "wp:featuredmedia",
    },
    next: { revalidate },
  });
}

export async function getPostBySlug(slug, { revalidate = 300 } = {}) {
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
export async function getCaseStudies({ perPage = 50, revalidate = 300 } = {}) {
  return wpFetch("case-studies", {
    query: {
      per_page: perPage,
      _fields: "id,slug,title,excerpt,featured_media,date,yoast_head_json",
    },
    next: { revalidate },
  });
}

export async function getCaseStudyBySlug(slug, { revalidate = 300 } = {}) {
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

// Products — uses WooCommerce Store API (public, no auth) which reliably
// exposes is_in_stock. Category IDs are the same term IDs as the WP taxonomy.
export async function getShopProducts({ revalidate = 300 } = {}) {
  const products = await storeFetch("products", {
    query: { per_page: 100 },
    next: { revalidate },
  });

  return (products || []).map((p) => ({
    id: p.id,
    slug: p.slug,
    title: decodeHtmlEntities(p.name || ""),
    excerpt: stripHtml(p.short_description || ""),
    link: p.permalink || "",
    categories: (p.categories || []).map((c) => c.id),
    imageUrl: p.images?.[0]?.src || null,
    inStock: p.is_in_stock === true,
  }));
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

export async function getShopProductBySlug(slug, { revalidate = 300 } = {}) {
  const items = await wpFetch("product", {
    query: {
      slug,
      _fields: "id,slug,title,excerpt,link,featured_media,product_cat,meta",
    },
    next: { revalidate },
  });

  const p = items?.[0];
  if (!p) return null;

  // Resolve featured image directly (WP doesn't embed media on this CPT)
  let imageUrl = null;
  if (p.featured_media) {
    try {
      const media = await wpFetch(`media/${p.featured_media}`, {
        query: { _fields: "id,source_url,media_details" },
        next: { revalidate },
      });
      imageUrl =
        media?.media_details?.sizes?.large?.source_url ||
        media?.media_details?.sizes?.medium?.source_url ||
        media?.source_url ||
        null;
    } catch {}
  }

  // _et_pb_old_content holds clean HTML written before the Divi builder took over
  const rawContent = p.meta?._et_pb_old_content || "";
  const content = rawContent
    .replace(/\s+data-(?:start|end)="[^"]*"/g, "")
    .replace(/\[[\w/][^\]]*\]/g, "") // strip any stray shortcodes
    .trim();

  return {
    id: p.id,
    slug: p.slug,
    title: decodeHtmlEntities(stripHtml(p.title?.rendered || "")),
    excerpt: stripHtml(p.excerpt?.rendered || ""),
    content: content || null,
    link: p.link || "",
    categories: p.product_cat || [],
    imageUrl,
  };
}

export { stripHtml };

