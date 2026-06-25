import DOMPurify from "isomorphic-dompurify";

export function WpContent({ html, className = "" }) {
  if (!html) return null;
  const clean = DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ["target", "rel"],
  });
  return (
    <div
      className={`wp-content text-base leading-7 text-zinc-900 ${className}`}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
