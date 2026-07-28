import sanitizeHtml from "sanitize-html";

const ALLOWED_TAGS = [
  ...sanitizeHtml.defaults.allowedTags,
  "h1", "h2", "figure", "figcaption", "span", "div", "img", "u", "s",
];

const ALLOWED_ATTRIBUTES = {
  ...sanitizeHtml.defaults.allowedAttributes,
  a: ["href", "name", "target", "rel", "title", "class"],
  img: ["src", "alt", "title", "width", "height", "loading", "class"],
  "*": ["class", "id"],
};

// Old post content still links to media on the primary domain
// (https://www.bvs-ltd.co.uk/wp-content/...), which is blocked by
// Vercel's default bot protection. The real WordPress media lives on
// the headless CMS subdomain, so point wp-content URLs there instead.
function fixWpContentUrls(html) {
  return html.replace(
    /https?:\/\/(?:www\.)?bvs-ltd\.co\.uk\/wp-content\//g,
    "https://cms.bvs-ltd.co.uk/wp-content/"
  );
}

export function WpContent({ html, className = "" }) {
  if (!html) return null;
  const clean = sanitizeHtml(fixWpContentUrls(html), {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: ALLOWED_ATTRIBUTES,
    allowedSchemes: ["http", "https", "mailto", "tel"],
  });
  return (
    <div
      className={`wp-content text-base leading-7 text-zinc-900 ${className}`}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
