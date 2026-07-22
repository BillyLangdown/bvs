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
import { ProductGallery } from "@/components/shop/ProductGallery";
import { ProductTabs } from "@/components/shop/ProductTabs";

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
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.title} | Shop`,
    description: product.excerpt?.slice(0, 160) || "",
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const [product, allProducts, categories] = await Promise.all([
    getShopProductBySlug(slug).catch(() => null),
    getShopProducts({ revalidate: 300 }).catch(() => []),
    getProductCategories({ revalidate: 600 }).catch(() => []),
  ]);

  if (!product) notFound();

  const categoryName =
    categories.find((c) => product.categories.includes(c.id))?.name || "";

  const isCoil = categoryName.toLowerCase().includes("coil");

  const related = allProducts
    .filter(
      (p) =>
        p.slug !== slug &&
        p.categories.some((id) => product.categories.includes(id)),
    )
    .slice(0, 4);

  const stockIsOut = product.stockClass === "out-of-stock";
  const stockIsIn = product.stockClass === "in-stock";
  const hasStock = !!product.stockBadge;

  return (
    <div>

      {/* ── BREADCRUMB ──────────────────────────────────────────────── */}
      <section className="border-b border-white/10 bg-[#111418] py-8 sm:py-10">
        <Container>
          <nav
            className="flex flex-wrap items-center gap-1.5 text-xs text-white/40"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition-colors hover:text-white/70">
              Home
            </Link>
            <ChevronRight />
            <Link href="/shop" className="transition-colors hover:text-white/70">
              Shop
            </Link>
            {categoryName && (
              <>
                <ChevronRight />
                <span className="text-white/60">{categoryName}</span>
              </>
            )}
            <ChevronRight />
            <span className="line-clamp-1 text-white/80">{product.title}</span>
          </nav>
        </Container>
      </section>

      {/* ── PRODUCT DETAIL ──────────────────────────────────────────── */}
      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[460px_1fr] lg:items-start">

            {/* IMAGE GALLERY */}
            <ScrollReveal>
              <ProductGallery
                images={product.images?.length ? product.images : product.imageUrl ? [{ src: product.imageUrl, thumbnail: product.imageUrl, alt: product.title }] : []}
                title={product.title}
              />
            </ScrollReveal>

            {/* INFO */}
            <ScrollReveal delay={80}>

              {/* Category pill */}
              {categoryName && (
                <span className="mb-4 inline-block rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  {categoryName}
                </span>
              )}

              <h1 className="text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">
                {product.title}
              </h1>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />

              {/* Price */}
              {isCoil ? (
                <p className="mt-5 text-sm font-semibold text-slate-500">
                  Custom built to specification.
                </p>
              ) : product.price && (
                <div className="mt-5">
                  <p className="text-3xl font-extrabold text-slate-900">
                    {product.price}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">Price excluding VAT</p>
                </div>
              )}

              {/* Stock badge */}
              {hasStock && (
                <div className="mt-3">
                  {stockIsOut ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      Out of Stock
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[#297858]">
                      <span className="h-2 w-2 rounded-full bg-[#297858]" />
                      {stockIsIn ? "In Stock" : product.stockBadge}
                    </span>
                  )}
                </div>
              )}

              {/* Excerpt */}
              {product.excerpt && (
                <p className="mt-5 text-sm leading-6 text-slate-600">{product.excerpt}</p>
              )}

              {/* Meta rows */}
              <div className="mt-6 divide-y divide-slate-100 border-y border-slate-100">
                {product.sku && (
                  <div className="flex gap-4 py-2.5 text-sm">
                    <span className="w-24 shrink-0 font-semibold text-slate-700">SKU</span>
                    <span className="text-slate-500">{product.sku}</span>
                  </div>
                )}
                {product.brand && (
                  <div className="flex gap-4 py-2.5 text-sm">
                    <span className="w-24 shrink-0 font-semibold text-slate-700">Brand</span>
                    <span className="text-slate-500">{product.brand}</span>
                  </div>
                )}
                {categoryName && (
                  <div className="flex gap-4 py-2.5 text-sm">
                    <span className="w-24 shrink-0 font-semibold text-slate-700">Category</span>
                    <span className="text-slate-500">{categoryName}</span>
                  </div>
                )}
                {product.tags.length > 0 && (
                  <div className="flex gap-4 py-2.5 text-sm">
                    <span className="w-24 shrink-0 font-semibold text-slate-700">Tags</span>
                    <span className="text-slate-500">{product.tags.join(", ")}</span>
                  </div>
                )}
              </div>


              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#enquire"
                  className="inline-flex items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
                >
                  {isCoil ? "Request a Custom Quote" : "Enquire About This Product"}
                  <ArrowIcon />
                </a>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
                >
                  ← Back to Shop
                </Link>
              </div>

              <p className="mt-4 text-xs text-slate-400">
                {isCoil
                  ? "All coils are built to your specification. Send us the dimensions and we'll quote within one working day."
                  : "Contact us about pricing, availability, and lead times. We respond within one working day."}
              </p>

            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── PRODUCT TABS (Description / Additional Information) ─────── */}
      {(product.content || product.weight || product.dimensions || product.attributes?.length > 0) && (
        <section className="bg-surface-2 py-12 sm:py-16">
          <Container>
            <ScrollReveal>
              <div className="max-w-4xl">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                  Product Details
                </p>
                <h2 className="text-xl font-extrabold text-slate-900">
                  Technical Specification
                </h2>
                <div className="mt-2 h-[3px] w-8 bg-[#297858]" />
                <div className="mt-8">
                  <ProductTabs
                    content={product.content}
                    weight={product.weight}
                    dimensions={product.dimensions}
                    attributes={product.attributes}
                  />
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>
      )}

      {/* ── RELATED PRODUCTS ────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-surface-2 py-12 sm:py-16">
          <Container>
            <ScrollReveal className="mb-8">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                More Products
              </p>
              <h2 className="text-xl font-extrabold text-slate-900">
                {categoryName ? `More in ${categoryName}` : "Related Products"}
              </h2>
              <div className="mt-2 h-[3px] w-8 bg-[#297858]" />
            </ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => {
                const catName =
                  categories.find((c) => p.categories.includes(c.id))?.name || "";
                return (
                  <Link
                    key={p.id}
                    href={`/shop/${p.slug}`}
                    className="group flex flex-col overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden bg-white">
                      {p.imageUrl ? (
                        <Image
                          src={p.imageUrl}
                          alt={p.title}
                          fill
                          unoptimized
                          className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-slate-50">
                          <span className="text-3xl font-extrabold text-slate-200">
                            BVS
                          </span>
                        </div>
                      )}
                      {catName && (
                        <span className="absolute bottom-2 left-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white">
                          {catName}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col border-t border-slate-100 p-4">
                      <h3 className="text-sm font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#297858]">
                        {p.title}
                      </h3>
                      {p.excerpt && (
                        <p className="mt-2 flex-1 line-clamp-2 text-xs leading-5 text-slate-500">
                          {p.excerpt}
                        </p>
                      )}
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#297858] transition-transform duration-200 group-hover:translate-x-1">
                        View details <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* ── ENQUIRY FORM ────────────────────────────────────────────── */}
      <section id="enquire" className="bg-[#111418] py-16 sm:py-20">
        <Container>

          <ScrollReveal>
            <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                  Product Enquiry
                </p>
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
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

          <ScrollReveal delay={60}>
            <div className="overflow-hidden border border-white/10 bg-white">
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
                    "Technical advice included",
                    "No obligation",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-end gap-2 text-[11px] text-slate-400"
                    >
                      <span>{item}</span>
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[#297858]" />
                    </li>
                  ))}
                </ul>
              </div>
              <ProductEnquiryForm
                productSlug={product.slug}
                productName={product.title}
                categoryName={categoryName}
              />
            </div>
          </ScrollReveal>

        </Container>
      </section>

    </div>
  );
}

/* ── ICONS ───────────────────────────────────────────────────────────── */

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
