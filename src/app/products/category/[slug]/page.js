import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/site/Container";
import {
  getStoreCategories,
  getStoreProductsByCategorySlug,
} from "@/lib/wordpress/store";
import { decodeHtmlEntities } from "@/lib/wordpress/format";

export async function generateStaticParams() {
  try {
    const cats = await getStoreCategories({ perPage: 100, revalidate: 3600 });
    return (cats || []).map((c) => ({ slug: c.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cats = await getStoreCategories({ perPage: 100, revalidate: 3600 }).catch(
    () => [],
  );
  const cat = cats?.find((c) => c?.slug === slug);
  if (!cat) return {};
  return {
    title: cat.name,
    description: `${cat.name} products`,
  };
}

export default async function ProductCategoryPage({ params }) {
  const { slug } = await params;
  const cats = await getStoreCategories({ perPage: 100, revalidate: 3600 }).catch(
    () => [],
  );
  const cat = cats?.find((c) => c?.slug === slug);
  if (!cat) notFound();

  const products = await getStoreProductsByCategorySlug(slug, {
    perPage: 24,
    revalidate: 300,
  }).catch(() => []);

  return (
    <Container className="py-14">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">
          {decodeHtmlEntities(cat.name)}
        </h1>
        <p className="mt-3 text-sm text-zinc-700">
          Browse products in this category.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products?.length ? (
            products.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.slug}`}
                className="bg-white shadow-sm transition hover:bg-zinc-50"
              >
                <div className="relative aspect-[16/10] w-full bg-zinc-100">
                  {p.images?.[0]?.src ? (
                    <Image
                      src={p.images[0].src}
                      alt={decodeHtmlEntities(p.images[0].alt || p.name)}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  ) : null}
                </div>

                <div className="p-6">
                  <div className="h-[3px] w-8 bg-emerald-900" />
                  <h2 className="mt-4 text-base font-extrabold text-emerald-900">
                    {decodeHtmlEntities(p.name)}
                  </h2>
                  <p className="mt-2 text-sm text-zinc-700">
                    {p.prices?.currency_symbol}
                    {formatMinorUnits(
                      p.prices?.price,
                      p.prices?.currency_minor_unit,
                    )}
                  </p>
                  <span className="mt-5 inline-flex h-9 items-center justify-center bg-emerald-900 px-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                    More details
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="border border-dashed border-zinc-200 bg-zinc-50 p-8 text-sm text-zinc-700 sm:col-span-2 lg:col-span-3">
              No products found.
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

function formatMinorUnits(value, minorUnit = 2) {
  const raw = Number(value);
  if (!Number.isFinite(raw)) return "";
  const div = 10 ** Number(minorUnit || 0);
  return (raw / div).toFixed(Number(minorUnit || 0));
}

