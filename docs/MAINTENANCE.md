## Maintenance guide

### High-level architecture

- **Routes/pages**: `src/app/**`
- **Reusable components**: `src/components/**`
  - Site shell: `src/components/site/**`
  - Forms: `src/components/forms/**`
- **WordPress integration**: `src/lib/wordpress/**`
  - `client.js`: fetch wrapper (timeout + typed error + env-driven base URL)
  - `api.js`: “business-friendly” fetch functions used by pages
- **Server-side form endpoints**: `src/app/api/**`

This separation is intentional: most changes stay localized and are easy for AI tools to reason about.

### Environment variables

Copy `.env.example` to `.env.local`.

- **`WP_API_BASE` (required)**: `https://your-site.com/wp-json/wp/v2`
- **`WP_BASE_URL` (recommended)**: `https://your-site.com`
  - Used for `metadataBase`
  - Used to allow remote images from your WP host in `next.config.mjs`
- **`NEWSLETTER_WEBHOOK_URL` (optional)**:
  - If set, `POST /api/newsletter` forwards `{ email, source }` to this URL
- **`FORMS_WEBHOOK_URL` (optional)**:
  - If set, `POST /api/contact` and `POST /api/enquiry` forward JSON payloads here

### WordPress content model expectations

This front-end assumes two custom post types exist:

- `products`
- `case-studies`

If your CPT slugs differ, update:

- `src/lib/wordpress/api.js` (endpoint names)
- `src/app/products/**` and `src/app/case-studies/**` (routes/labels, if desired)

### Forms

Forms are handled via Next route handlers:

- **Newsletter**: `src/app/api/newsletter/route.js`
- **Contact**: `src/app/api/contact/route.js`
- **Product enquiry**: `src/app/api/enquiry/route.js`

Default behavior (no env vars) is to accept submissions and respond `{ ok: true }`.
In production you should set `FORMS_WEBHOOK_URL` / `NEWSLETTER_WEBHOOK_URL` to actually deliver messages.

### SEO

- Per-page metadata lives alongside routes (e.g. `src/app/products/[slug]/page.js`)
- This setup is ready for you to add:
  - OpenGraph images
  - JSON-LD structured data components
  - A `sitemap.xml` route

### Image optimization strategy

- Use `next/image` for local/static assets.
- For WordPress-hosted images, ensure `WP_BASE_URL` is set so `next.config.mjs` can allow the host.
- When you start rendering WP media, consider using `_embed` in WP REST and map media URLs to `next/image`.

### Common changes

#### Add a new WordPress content type

1) Add functions in `src/lib/wordpress/api.js`
2) Add index route `src/app/<type>/page.js`
3) Add detail route `src/app/<type>/[slug]/page.js`
4) Add links to navigation if needed (`src/components/site/Navigation.js`)

#### Change API base / staging vs production

Set different `.env.local` values per environment, or configure your deployment platform’s env vars.

