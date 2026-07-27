import Link from "next/link";
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
            <span>/</span>
            <Link href="/shop" className="transition-colors hover:text-white/70">
              Shop
            </Link>
            <span>/</span>
            <span className="text-white/80">{category.name}</span>
          </nav>
        </Container>
      </section>

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="bg-[#111418] pb-10 pt-6 sm:pb-14">
        <Container>
          <ScrollReveal>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
              Shop
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              {category.name}
            </h1>
            <p className="mt-4 max-w-lg text-[15px] leading-7 text-white/65">
              Sourced and supplied by BVS engineers for commercial and industrial HVAC
              applications.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── PRODUCTS ────────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-14 sm:py-20">
        <Container>
          <ShopGrid products={shopProducts} categories={shopCategories} initialCategory={category.id} />
        </Container>
      </section>
    </div>
  );
}
