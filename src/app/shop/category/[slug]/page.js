import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getShopProducts, getProductCategories } from "@/lib/wordpress/api";
import { ShopGrid } from "@/components/shop/ShopGrid";
import { pageMetadata, truncateDescription, breadcrumbJsonLd } from "@/lib/seo";

export const revalidate = 3600;

async function getCategoryData(slug) {
  const [products, categories] = await Promise.all([
    getShopProducts({ revalidate: 3600 }).catch(() => []),
    getProductCategories({ revalidate: 600 }).catch(() => []),
  ]);

  const filterCategoryIds = new Set(
    categories.filter((c) => c.name.toLowerCase().includes("filter")).map((c) => c.id),
  );
  const shopCategories = categories.filter((c) => !filterCategoryIds.has(c.id));
  const shopProducts = products.filter((p) => !p.categories.some((id) => filterCategoryIds.has(id)));

  const category = shopCategories.find((c) => c.slug === slug);
  return { category, shopProducts, shopCategories };
}

export async function generateStaticParams() {
  try {
    const categories = await getProductCategories({ revalidate: 600 });
    return categories
      .filter((c) => !c.name.toLowerCase().includes("filter"))
      .map((c) => ({ slug: c.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { category, shopProducts } = await getCategoryData(slug);
  if (!category) return { title: "Category Not Found" };

  const productCount = shopProducts.filter((p) => p.categories.includes(category.id)).length;
  return pageMetadata({
    title: `${category.name} | Shop`,
    description: truncateDescription(
      `Browse ${category.name} from BVS. ${productCount} product${productCount === 1 ? "" : "s"} in stock, sourced and supplied for commercial and industrial HVAC applications.`,
    ),
    path: `/shop/category/${slug}`,
  });
}

export default async function ShopCategoryPage({ params }) {
  const { slug } = await params;
  const { category, shopProducts, shopCategories } = await getCategoryData(slug);

  if (!category) notFound();

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: category.name, path: `/shop/category/${slug}` },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbItems)) }}
      />

      {/* ── HERO (identical structure to /shop, so both pages share the same
           layout height and scroll position — only the heading, description,
           and pre-selected category differ) ─────────────────────────────── */}
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
            <div className="pb-12 sm:pb-14 max-w-2xl">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Shop
              </p>
              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {category.name}
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-white/65">
                Sourced and supplied by BVS engineers for commercial and industrial HVAC
                applications.
              </p>
              <p className="mt-4 text-sm text-white/40">
                Need help specifying the right component?{" "}
                <Link href="/contact" className="text-[#297858] underline-offset-2 hover:underline">
                  Ask the team.
                </Link>
              </p>
            </div>
          </Container>

          {/* Stats strip */}
          <div className="border-t border-white/10 bg-black/30">
            <Container>
              <div className="grid grid-cols-3 divide-x divide-white/10 py-3">
                {[
                  { stat: "UK", label: "Delivery" },
                  { stat: "Fast", label: "Dispatch" },
                  { stat: "Expert", label: "Sourcing" },
                ].map((s) => (
                  <div key={s.label} className="px-3 text-center sm:px-6">
                    <p className="text-base font-extrabold text-white sm:text-lg">{s.stat}</p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-wide text-white/50">{s.label}</p>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ────────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-14 sm:py-20">
        <Container>

          {/* Section intro (mirrors /shop's intro block so the grid below
               starts at the same vertical offset on both pages) */}
          <ScrollReveal className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
              Components &amp; Parts
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
              {category.name}
            </h2>

            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />

            <div className="mt-5 rounded-lg border border-[#297858]/20 bg-[#297858]/5 p-4">
              <p className="text-sm leading-6 text-slate-600">
                Need help sourcing the right component? Ask the team.
              </p>

              <Link
                href="/contact"
                className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#297858] transition-colors hover:text-[#1d5c42]"
              >
                Get in touch
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </ScrollReveal>

          <ShopGrid products={shopProducts} categories={shopCategories} initialCategory={category.id} />
        </Container>
      </section>
    </div>
  );
}
