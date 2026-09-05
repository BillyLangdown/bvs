// Product categories that have a dedicated, content-rich landing page (see
// src/app/ec-fan-shop, axial-fan-shop, electric-heater-battery-shop, and
// heating-cooling-coils) instead of relying on the generic
// /shop/category/[slug] template. Keeping this mapping in one place lets the
// shop nav, the sitemap, and the /shop/category redirects in next.config.mjs
// all agree on which categories route to their bespoke page rather than the
// generated one — the two used to coexist as near-duplicate content with the
// generated page getting the internal links and sitemap entry instead of the
// richer bespoke one.
//
// next.config.mjs can't import this directly (it runs as a separate ESM
// module before Next's bundler resolves .js imports), so its redirect rules
// for these slugs are kept in sync with this map by hand.
export const BESPOKE_CATEGORY_PATHS = {
  "ec-fans": "/ec-fan-shop",
  "axial-fans": "/axial-fan-shop",
  "heating-cooling-coils": "/heating-cooling-coils",
  "electric-heater-battery": "/electric-heater-battery-shop",
};
