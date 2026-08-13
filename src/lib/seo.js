import { decodeHtmlEntities } from "./wordpress/api";

const SITE_URL = "https://www.bvs-ltd.co.uk";

// Truncates on a word boundary near maxLen instead of cutting mid-word/mid-sentence.
export function truncateDescription(text, maxLen = 160) {
  if (!text) return "";
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= maxLen) return clean;
  const cut = clean.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLen)}…`;
}

// Standard per-page metadata: canonical (via metadataBase) + tailored OG/Twitter.
// path must start with "/". image is an absolute or metadataBase-relative URL.
// title may be a plain string (runs through the root layout's "%s | BVS"
// template) or { absolute } to bypass that template entirely.
export function pageMetadata({ title, description, path, image, imageAlt }) {
  const titleText = typeof title === "object" && title !== null ? title.absolute : title;
  const og = {
    title: titleText,
    description,
    url: path,
  };
  if (image) {
    og.images = [{ url: image, width: 1200, height: 630, alt: imageAlt || titleText }];
  }
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: og,
    twitter: image ? { card: "summary_large_image", images: [image] } : undefined,
  };
}

const BRAND_SUFFIX = /[\s\-–—|:]*(bvs|building ventilation solutions?)[\s\-–—|:]*$/i;

// AIOSEO authors complete SERP titles, but when nothing custom is set for a
// page it falls back to its own default template (post title + separator +
// site name) rather than leaving the field empty. That default output is
// longer than this site's own "%s | BVS" template with no added targeting,
// so it isn't treated as "authored" — only a title that still differs from
// the raw WordPress title once the brand suffix is stripped is genuinely
// optimised and worth using verbatim (bypassing the "%s | BVS" template,
// which it would otherwise double up with its own brand suffix). Also
// covers the degenerate case where a title is just a separator + brand name
// with nothing left after stripping.
//
// wp.title.rendered comes HTML-entity-encoded ("Heating &amp; Cooling
// Coils"); aioseo_head_json.title does not ("Heating & Cooling Coils"). Both
// sides are decoded before comparing, or every title containing an
// ampersand/entity would wrongly compare as different and ship as
// "authored" even when it's just AIOSEO's default template.
function normTitle(s) {
  return decodeHtmlEntities(s || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

export function authoredTitle(aioseoTitle, wpTitle) {
  if (!aioseoTitle) return null;
  const decoded = decodeHtmlEntities(aioseoTitle);
  const stripped = decoded.replace(BRAND_SUFFIX, "").trim();
  if (!stripped) return null;
  if (normTitle(stripped) === normTitle(wpTitle)) return null;
  return { absolute: decoded };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Google requires a Product to carry offers, review, or aggregateRating to be
// eligible for rich results. Enquire/POA products have none of those, so we
// return null rather than emit markup Google will flag as invalid.
export function productJsonLd(product, { categoryName, url } = {}) {
  if (product.priceAmount === null || product.priceAmount === undefined) {
    return null;
  }
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.excerpt || undefined,
    sku: product.sku || undefined,
    brand: product.brand ? { "@type": "Brand", name: product.brand } : undefined,
    category: categoryName || undefined,
    image: product.imageUrl ? [product.imageUrl] : undefined,
    url: url ? `${SITE_URL}${url}` : undefined,
    offers: {
      "@type": "Offer",
      price: product.priceAmount.toFixed(2),
      priceCurrency: product.priceCurrency || "GBP",
      availability:
        product.stockClass === "out-of-stock"
          ? "https://schema.org/OutOfStock"
          : "https://schema.org/InStock",
      url: url ? `${SITE_URL}${url}` : undefined,
    },
  };
}

export { SITE_URL };
