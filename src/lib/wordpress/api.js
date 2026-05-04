import { wpFetch } from "./client";

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
      _fields: "id,slug,title,excerpt,date,yoast_head_json",
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

// Products (WooCommerce custom post type exposed via WP REST API)
export async function getShopProducts({ revalidate = 300 } = {}) {
  const products = await wpFetch("product", {
    query: {
      per_page: 100,
      _fields: "id,slug,title,excerpt,link,featured_media,product_cat",
    },
    next: { revalidate },
  });

  // Collect unique media IDs and batch-resolve them (WP REST API doesn't
  // embed featured media for this custom post type via ?_embed)
  const mediaIds = [
    ...new Set((products || []).map((p) => p.featured_media).filter(Boolean)),
  ];

  let mediaMap = {};
  if (mediaIds.length) {
    try {
      const mediaItems = await wpFetch("media", {
        query: {
          include: mediaIds.join(","),
          per_page: 100,
          _fields: "id,source_url,media_details",
        },
        next: { revalidate },
      });
      mediaMap = Object.fromEntries(
        (mediaItems || []).map((m) => [
          m.id,
          m.media_details?.sizes?.large?.source_url ||
            m.media_details?.sizes?.medium?.source_url ||
            m.source_url,
        ]),
      );
    } catch {
      // media resolution failed — products will render without images
    }
  }

  return (products || []).map((p) => ({
    id: p.id,
    slug: p.slug,
    title: decodeHtmlEntities(stripHtml(p.title?.rendered || "")),
    excerpt: stripHtml(p.excerpt?.rendered || ""),
    link: p.link || "",
    categories: p.product_cat || [],
    imageUrl: mediaMap[p.featured_media] || null,
  }));
}

export async function getProductCategories({ revalidate = 600 } = {}) {
  try {
    const cats = await wpFetch("product_cat", {
      query: { per_page: 100, _fields: "id,name,slug,count" },
      next: { revalidate },
    });
    return (cats || []).filter((c) => c.slug !== "uncategorized" && c.count > 0);
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

