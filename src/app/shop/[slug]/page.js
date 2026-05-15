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
        <span className="mb-3 inline-block bg-[#297858] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          {categoryName}
        </span>
      )}

      <h1 className="font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
        {product.title}
      </h1>

      <div className="mt-3 h-[3px] w-8 bg-[#297858]" />
    </div>
  </Container>
</section>

{/* ── PRODUCT DETAIL ──────────────────────────────────────────── */}
<section className="bg-white py-12 sm:py-16">
  <Container>
    <div className="grid gap-10 lg:grid-cols-[440px_1fr] lg:items-start">

      {/* IMAGE */}
      <ScrollReveal>
        <div className="relative aspect-square overflow-hidden border border-slate-100 bg-white shadow-sm">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={plainTitle}
              fill
              sizes="100vw"
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

      {/* INFO */}
      <ScrollReveal delay={80} className="flex flex-col gap-6">

        <div>
          {categoryName && (
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              {categoryName}
            </p>
          )}

          <h2 className="font-display text-xl font-extrabold uppercase leading-snug text-slate-900 sm:text-2xl">
            Overview
          </h2>

          <div className="mt-3 h-[3px] w-8 bg-[#297858]" />
        </div>
        {/* ── TECHNICAL DESCRIPTION ───────────────────────────────────── */}
{product.content && (
  <section className="bg-surface-2 py-12 sm:py-16">
    <Container>
      <ScrollReveal>
        <div className="mx-auto max-w-3xl">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
            Product Details
          </p>

          <h2 className="font-display text-xl font-extrabold uppercase text-slate-900">
            Technical Specification
          </h2>

          <div className="mt-2 h-[3px] w-8 bg-[#297858]" />

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

        {/* ACTIONS */}
        <div className="flex flex-col gap-3 sm:flex-row">
  <a
    href="#enquire"
    className="group inline-flex items-center justify-center gap-2 bg-[#297858] px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-[#1d5c42] hover:shadow-md active:scale-[0.99]"
  >
    Enquire About This Product
    <span className="transition-transform duration-200 group-hover:translate-y-0.5">
      ↓
    </span>
  </a>

  <Link
    href="/shop"
    className="inline-flex items-center justify-center gap-2 border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-slate-600 shadow-sm transition-all duration-200 hover:border-slate-300 hover:text-slate-900 hover:shadow-md active:scale-[0.99]"
  >
    ← Back to Shop
  </Link>
</div>

        <div className="border-t border-slate-100 pt-4">
          <p className="text-xs leading-5 text-slate-400">
            Speak to an engineer about pricing, availability and lead times. We respond within one working day.
          </p>
        </div>

      </ScrollReveal>

    </div>
  </Container>
</section>



      {/* ── ENQUIRY FORM ────────────────────────────────────────────── */}
      <section id="enquire" className="bg-[#111418] py-16 sm:py-20">
        <Container>

          {/* Section header + contact — full width strip above the form */}
          <ScrollReveal>
            <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                  Product Enquiry
                </p>
                <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                  Enquire About This Product
                </h2>
                <div className="mt-4 h-[3px] w-8 bg-[#297858]" />
              </div>
              <div className="flex flex-col gap-2 text-sm sm:items-end">
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
            </div>
          </ScrollReveal>

          {/* Form panel — full width with info sidebar */}
          <ScrollReveal delay={60}>
            <div className="overflow-hidden border border-white/10 bg-white">

              {/* Form header bar */}
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 sm:px-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                    Send Enquiry
                  </p>
                  <p className="mt-0.5 text-sm font-bold leading-snug text-slate-900">
                    {product.title}
                  </p>
                </div>
                <ul className="hidden flex-col gap-1.5 text-right sm:flex">
                  {[
                    "Response within one working day",
                    "Speak directly with a technical specialist",
                    "No obligation",
                  ].map((item) => (
                    <li key={item} className="flex items-center justify-end gap-2 text-[11px] text-slate-400">
                      <span>{item}</span>
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[#297858]" />
                    </li>
                  ))}
                </ul>
              </div>

              <ProductEnquiryForm
                productSlug={product.slug}
                productName={plainTitle}
                categoryName={categoryName}
              />
            </div>
          </ScrollReveal>

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
