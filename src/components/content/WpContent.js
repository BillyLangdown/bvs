import sanitizeHtml from "sanitize-html";
import { fixWpContentUrls } from "@/lib/wordpress/fixWpContentUrls";

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
