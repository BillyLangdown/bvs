// Old WP content (posts, product descriptions) still links to media on the
// primary domain (https://www.bvs-ltd.co.uk/wp-content/...), which is blocked
// by Vercel's default bot protection. The real WordPress media lives on the
// headless CMS subdomain, so point wp-content URLs there instead.
export function fixWpContentUrls(html) {
  if (!html) return html;
  return html.replace(
    /https?:\/\/(?:www\.)?bvs-ltd\.co\.uk\/wp-content\//g,
    "https://cms.bvs-ltd.co.uk/wp-content/"
  );
}
