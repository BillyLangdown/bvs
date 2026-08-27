import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { WpContent } from "@/components/content/WpContent";
import { ShopGrid } from "@/components/shop/ShopGrid";
import { ProductEnquiryForm } from "@/components/forms/ProductEnquiryForm";
import { getPageBySlug, getShopProducts, getProductCategories } from "@/lib/wordpress/api";
import { breadcrumbJsonLd } from "@/lib/seo";

// Shared data-fetching for the product-category pages (coils, axial fans, EC
// fans, electric heater batteries). These were previously orphaned
// WordPress pages rendered through the generic [slug] catch-all with no
// branding. Each one follows the same shape: real off-the-shelf stock, a
// custom-quote enquiry for anything not in stock, and WP-authored FAQ
// content.
export async function getBespokeCategoryData(pageSlug, categorySlug) {
  const [page, rawProducts, rawCategories] = await Promise.all([
    getPageBySlug(pageSlug).catch(() => null),
    getShopProducts({ revalidate: 86400 }).catch(() => []),
    getProductCategories({ revalidate: 86400 }).catch(() => []),
  ]);

  // Same exclusion the real /shop/category pages apply: "filter" categories
  // are discontinued and shouldn't appear as a filter option or in listings.
  const filterCategoryIds = new Set(
    rawCategories.filter((c) => c.name.toLowerCase().includes("filter")).map((c) => c.id),
  );
  const categories = rawCategories.filter((c) => !filterCategoryIds.has(c.id));
  const products = rawProducts.filter((p) => !p.categories.some((id) => filterCategoryIds.has(id)));

  const category = categories.find((c) => c.slug === categorySlug) || null;
  return { page, products, categories, category };
}

export function BespokeCategoryPage({
  heading,
  eyebrow,
  heroDescription,
  path,
  page,
  products,
  categories,
  category,
  servicePagePath,
  servicePageLabel,
}) {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: heading, path },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbItems)) }}
      />

      {/* ── HERO (matches the /shop/category hero so this reads as part of
           the same site, not a bolted-on WordPress page) ──────────────── */}
      <section className="relative overflow-hidden bg-[#111418] pb-0 pt-14 sm:pt-16">
        <Image
          src="/crate-in-air.webp"
          alt="Crane lifting a ventilation unit against a clear blue sky"
          fill
          sizes="100vw"
          unoptimized
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111418] via-[#111418]/55 to-[#111418]/10" />
        <div className="relative">
          <Container>
            <div className="pb-10 sm:pb-12 max-w-2xl">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                {eyebrow}
              </p>
              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {heading}
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-white/65">
                {heroDescription}
              </p>
            </div>

            {/* Related links: explicit navigation to the rest of the site,
                 since this page previously had none */}
            <div className="flex flex-wrap gap-3 pb-6 sm:pb-8">
              {servicePagePath && (
                <Link
                  href={servicePagePath}
                  prefetch={false}
                  className="inline-flex items-center gap-2 rounded-xs border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {servicePageLabel} →
                </Link>
              )}
              <Link
                href="/shop"
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-xs border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Browse the full shop →
              </Link>
            </div>
          </Container>
        </div>
      </section>

      {/* ── OFF-THE-SHELF PRODUCTS (real product cards, front and centre) ── */}
      <section className="bg-white py-14 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
              Off-the-Shelf
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
              {heading} In Stock
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>
          {category ? (
            // Only this category's products/category are passed through, so
            // no filter bar is needed since the whole page is already scoped
            // to one category. Browsing everything else is what /shop is for.
            <ShopGrid
              products={products.filter((p) => p.categories.includes(category.id))}
              categories={[category]}
              initialCategory={category.id}
            />
          ) : (
            <p className="text-sm text-slate-500">No products currently listed in this category.</p>
          )}
        </Container>
      </section>

      {/* ── CUSTOM QUOTE ENQUIRY (for anything not in stock above) ──────── */}
      <section id="enquire" className="bg-surface-2 py-14 sm:py-20">
        <Container>
          <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
              Not Listed?
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
              Request a Custom Quote
            </h2>
            <div className="mx-auto mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-slate-600">
              Send us your requirements and we&apos;ll come back with a quotation, usually within
              one working day.
            </p>
          </ScrollReveal>
          <ProductEnquiryForm productName={`Custom ${heading} Enquiry`} />
        </Container>
      </section>

      {/* FAQ: WordPress-authored content, kept, just properly styled */}
      {page?.content?.rendered && (
        <section className="bg-white py-14 sm:py-20">
          <Container>
            <ScrollReveal className="mx-auto max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                FAQs
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
                Frequently Asked Questions
              </h2>
              <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
              <WpContent
                html={page.content.rendered}
                className="mt-8 [&_h1]:mt-8 [&_h1]:mb-3 [&_h1]:text-xl [&_h1]:font-extrabold [&_h1]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-slate-900 [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-slate-900 [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-base [&_h4]:font-bold [&_h4]:text-slate-900 [&_h1:first-child]:mt-0 [&_h2:first-child]:mt-0 [&_h3:first-child]:mt-0 [&_h4:first-child]:mt-0 [&_p]:mb-4 [&_p:empty]:hidden [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1.5 [&_a]:text-[#297858] [&_a]:underline [&_a]:underline-offset-2"
              />
            </ScrollReveal>
          </Container>
        </section>
      )}
    </div>
  );
}
