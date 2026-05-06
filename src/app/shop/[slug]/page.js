import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  getShopProductBySlug,
  getShopProducts,
  getProductCategories,
} from "@/lib/wordpress/api";
import { ProductEnquiryForm } from "@/components/forms/ProductEnquiryForm";

export const revalidate = 300;

export async function generateStaticParams() {
  try {
    const products = await getShopProducts({ revalidate: 3600 });
    return products.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getShopProductBySlug(slug).catch(() => null);
  if (!product) return { title: "Product Not Found | BVS Shop" };

  const plainTitle = decodeTitle(product.title);
  return {
    title: `${plainTitle} | BVS Shop`,
    description: product.excerpt?.slice(0, 160) || "",
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const [product, categories] = await Promise.all([
    getShopProductBySlug(slug).catch(() => null),
    getProductCategories({ revalidate: 600 }).catch(() => []),
  ]);

  if (!product) notFound();

  const categoryName =
    categories.find((c) => product.categories.includes(c.id))?.name || "";
  const plainTitle = decodeTitle(product.title);

  return (
    <div>

      {/* ── BREADCRUMB / MINI HERO ───────────────────────────────────── */}
      <section className="bg-[#111418] py-10 sm:py-14">
        <Container>
          <nav className="mb-5 flex items-center gap-1.5 text-xs text-white/40" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-white/70">Home</Link>
            <ChevronRight />
            <Link href="/shop" className="transition-colors hover:text-white/70">Shop</Link>
            {categoryName && (
              <>
                <ChevronRight />
                <span>{categoryName}</span>
              </>
            )}
          </nav>

          <div className="max-w-2xl">
            {categoryName && (
              <span className="mb-3 inline-block bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                {categoryName}
              </span>
            )}
            <h1 className="font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
              {product.title}
            </h1>
          </div>
        </Container>
      </section>

      {/* ── PRODUCT DETAIL ──────────────────────────────────────────── */}
      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[440px_1fr] lg:items-start">

            {/* Image */}
            <ScrollReveal>
              <div className="relative aspect-square overflow-hidden border border-slate-100 bg-white shadow-sm">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={plainTitle}
                    fill
                    unoptimized
                    className="object-contain p-8"
                    priority
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="font-display text-5xl font-extrabold text-slate-200">
                      BVS
                    </span>
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={80} className="flex flex-col gap-6 lg:pt-1">
              <div>
                {categoryName && (
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-700">
                    {categoryName}
                  </p>
                )}
                <h2 className="font-display text-xl font-extrabold uppercase leading-snug text-slate-900 sm:text-2xl">
                  {product.title}
                </h2>
                <div className="mt-3 h-[3px] w-8 bg-emerald-700" />
              </div>

              {product.excerpt && (
                <p className="text-[15px] leading-7 text-slate-600">
                  {product.excerpt}
                </p>
              )}

              {/* CTAs */}
              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <a
                  href="#enquire"
                  className="inline-flex items-center justify-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1d5c42]"
                >
                  Enquire About This Product
                  <ArrowDownIcon />
                </a>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 border border-slate-200 px-7 py-3.5 text-sm font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
                >
                  ← Back to Shop
                </Link>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <p className="text-xs leading-5 text-slate-400">
                  All products are available to order. Speak to an engineer about
                  pricing and lead times - we respond within one working day.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── TECHNICAL DESCRIPTION ───────────────────────────────────── */}
      {product.content && (
        <section className="bg-surface-2 py-12 sm:py-16">
          <Container>
            <ScrollReveal>
              <div className="mx-auto max-w-3xl">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-700">
                  Product Details
                </p>
                <h2 className="font-display text-xl font-extrabold uppercase text-slate-900">
                  Technical Description
                </h2>
                <div className="mt-2 h-[3px] w-8 bg-emerald-700" />
                <div
                  className="wp-content mt-8"
                  dangerouslySetInnerHTML={{ __html: product.content }}
                  suppressHydrationWarning
                />
              </div>
            </ScrollReveal>
          </Container>
        </section>
      )}

      {/* ── ENQUIRY FORM ────────────────────────────────────────────── */}
      <section id="enquire" className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_480px] lg:items-start">

            {/* Left: context */}
            <ScrollReveal>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">
                Product Enquiry
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                Enquire About<br />This Product
              </h2>
              <div className="mt-4 h-[3px] w-8 bg-emerald-500" />
              <p className="mt-5 max-w-sm text-[15px] leading-7 text-white/60">
                Fill in the form and our team will get back to you within one
                working day with pricing, availability, and any technical
                guidance you need.
              </p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {[
                  "Response within one working day",
                  "Speak directly with a technical specialist",
                  "No obligation - just practical guidance",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-white/55"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-2 text-sm">
                <a
                  href="tel:01256518170"
                  className="inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-white"
                >
                  <PhoneIcon /> 01256 518170
                </a>
                <a
                  href="mailto:info@bvs-ltd.co.uk"
                  className="inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-white"
                >
                  <EmailIcon /> info@bvs-ltd.co.uk
                </a>
              </div>
            </ScrollReveal>

            {/* Right: form panel */}
            <ScrollReveal delay={80}>
              <div className="overflow-hidden border border-white/10 bg-white">
                {/* Form header */}
                <div className="border-b border-slate-100 px-6 py-5 sm:px-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-700">
                    Send Enquiry
                  </p>
                  <p className="mt-1 text-sm font-bold leading-snug text-slate-900">
                    {product.title}
                  </p>
                </div>
                <ProductEnquiryForm
                  productSlug={product.slug}
                  productName={plainTitle}
                />
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

    </div>
  );
}

/* ── HELPERS ─────────────────────────────────────────────────────────── */

function decodeTitle(html) {
  return html
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "-")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/<[^>]*>/g, "");
}

/* ── ICONS ───────────────────────────────────────────────────────────── */

function ChevronRight() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 8l9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
