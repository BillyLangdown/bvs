import { wpFetch } from "./client";

function stripHtml(html) {
  if (!html) return "";
  return String(html).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
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

// Products (expects a WP custom post type registered as "products")
export async function getProducts({ perPage = 50, revalidate = 300 } = {}) {
  return wpFetch("products", {
    query: {
      per_page: perPage,
      _fields: "id,slug,title,excerpt,featured_media,yoast_head_json",
    },
    next: { revalidate },
  });
}

export async function getProductBySlug(slug, { revalidate = 300 } = {}) {
  const items = await wpFetch("products", {
    query: {
      slug,
      _fields: "id,slug,title,content,excerpt,featured_media,yoast_head_json",
    },
    next: { revalidate },
  });
  return items?.[0] || null;
}

export { stripHtml };

