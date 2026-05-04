## BVS Front-End (Next.js + WordPress)

Modern React/Next.js front-end in **JavaScript**, backed by the **WordPress REST API**, with:

- **WordPress API integration layer** in `src/lib/wordpress/`
- **Case study pages**: `src/app/case-studies/`
- **Products + product enquiry form**: `src/app/products/` + `src/components/forms/ProductEnquiryForm.js`
- **Contact form**: `src/app/contact/` + `src/components/forms/ContactForm.js`
- **Newsletter integration**: `src/app/newsletter/` + `src/app/api/newsletter/route.js`
- **Responsive layout** via Tailwind

This repo is intentionally **modular and AI-friendly** so Cursor/Claude can modify it safely.

## Getting Started

### 1) Install

```bash
npm install
```

### 2) Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Required:

- `WP_API_BASE`: e.g. `https://your-site.com/wp-json/wp/v2`
- `WP_BASE_URL`: e.g. `https://your-site.com` (used for metadata + image host)

Optional:

- `WP_AUTH_HEADER`: if you later add authenticated write endpoints
- `NEWSLETTER_WEBHOOK_URL`: where to send newsletter signups (JSON POST)
- `FORMS_WEBHOOK_URL`: where to send contact/enquiry submissions (JSON POST)

### 3) Run dev server

```bash
npm run dev
```

Open `http://localhost:3000`.

## WordPress integration expectations

This front-end expects these WordPress REST endpoints to exist:

- **Case studies**: `case-studies` (custom post type)
- **Products**: `products` (custom post type)

If those CPTs are named differently in your WordPress install, update `src/lib/wordpress/api.js`.

## Docs

- Maintenance notes: `docs/MAINTENANCE.md`

## Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```
