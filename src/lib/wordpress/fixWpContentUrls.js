// Old WP content (posts, product descriptions) still links to media on the
// primary domain (https://www.bvs-ltd.co.uk/wp-content/...), which is blocked
// by Vercel's default bot protection. The real WordPress media lives on the
// headless CMS subdomain, so point wp-content URLs there instead — except for
// paths we've since migrated to live locally (see next.config.mjs), which
// force back to www so visitors and Google both use the same-domain copy
// instead of hotlinking the CMS's own rate-limited/inconsistently-blocked host.
const LOCAL_WP_CONTENT_PATHS = new Set([
  "/wp-content/uploads/2025/02/GR50I-116904.A01.pdf",
  "/wp-content/uploads/2025/02/GR56I-116908.A01.pdf",
]);

export function fixWpContentUrls(html) {
  if (!html) return html;
  return html.replace(
    /https?:\/\/(?:www\.|cms\.)?bvs-ltd\.co\.uk(\/wp-content\/[^"'\s)]*)/g,
    (match, path) => {
      const cleanPath = path.split(/[?#]/)[0];
      return LOCAL_WP_CONTENT_PATHS.has(cleanPath)
        ? `https://www.bvs-ltd.co.uk${path}`
        : `https://cms.bvs-ltd.co.uk${path}`;
    }
  );
}
