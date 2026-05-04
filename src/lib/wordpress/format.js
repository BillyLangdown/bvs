export function decodeHtmlEntities(input) {
  const s = String(input || "");
  const named = s
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", "\"")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
  return named.replace(/&#(\d+);/g, (_, num) => {
    const code = Number(num);
    if (!Number.isFinite(code)) return _;
    try {
      return String.fromCodePoint(code);
    } catch {
      return _;
    }
  });
}

export function stripShortcodes(html) {
  if (!html) return "";
  // Remove Divi/ET builder shortcodes commonly found in Woo descriptions.
  return String(html)
    .replace(/\[\/?et_pb[^\]]*\]/gi, "")
    .replace(/\[\/?\/?et_[^\]]*\]/gi, "")
    // Generic fallback for other shortcodes: [something ...]
    .replace(/\[[a-z0-9_-]+[^\]]*\]/gi, "");
}

export function cleanWooHtml(html) {
  // Keep markup but remove shortcode noise.
  return stripShortcodes(html);
}

export function cleanWpHtml(html) {
  // WordPress pages on this site may include Divi/ET shortcodes too.
  const cleaned = stripShortcodes(html)
    // Remove empty paragraphs left behind by shortcode stripping
    .replace(/<p>\s*<\/p>/gi, "")
    .replace(/<p>\s*&nbsp;\s*<\/p>/gi, "")
    .trim();

  return cleaned;
}

export function extractDiviHero(html) {
  const s = String(html || "");
  // Divi stores a hero background image in shortcode attributes:
  // background_image="https://..."
  const m =
    s.match(/background_image=&#8221;([^&#]+)&#8221;/i) ||
    s.match(/background_image="([^"]+)"/i);
  const url = m?.[1] ? decodeHtmlEntities(m[1]) : null;

  // Also try to find the first H1 for the hero title.
  const h1 = s.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = h1?.[1]
    ? stripTags(decodeHtmlEntities(h1[1])).trim()
    : null;

  return { imageUrl: url || null, title: title || null };
}

function stripTags(input) {
  return String(input || "").replace(/<[^>]*>/g, " ");
}

