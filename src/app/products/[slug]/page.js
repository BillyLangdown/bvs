import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { ProductEnquiryForm } from "@/components/forms/ProductEnquiryForm";
import { WpContent } from "@/components/content/WpContent";
import { getStoreProductBySlug, getStoreProducts } from "@/lib/wordpress/store";
import { stripHtml } from "@/lib/wordpress/api";
import { cleanWooHtml, decodeHtmlEntities } from "@/lib/wordpress/format";

export async function generateStaticParams() {
  try {
    const products = await getStoreProducts({ perPage: 50, revalidate: 3600 });
    return products.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getStoreProductBySlug(slug).catch(() => null);
  if (!product) return {};
  return {
    title: product.name || "Product",
    description: stripHtml(product.short_description) || "Product details",
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getStoreProductBySlug(slug).catch(() => null);
  if (!product) notFound();

  const primaryImage = product.images?.[0]?.src || null;
  const price =
    product.prices?.currency_symbol +
    formatMinorUnits(product.prices?.price, product.prices?.currency_minor_unit);

  return (
    <section className="bg-zinc-100 py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <article className="bg-white shadow-sm">
            <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
              <div className="relative aspect-square w-full bg-zinc-100">
                {primaryImage ? (
                  <Image
                    src={primaryImage}
                    alt={decodeHtmlEntities(product.images?.[0]?.alt || product.name)}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                ) : null}
              </div>

              <div>
                <div className="h-[3px] w-8 bg-emerald-900" />
                <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-emerald-900">
                  {decodeHtmlEntities(product.name)}
                </h1>
                <p className="mt-3 text-base font-semibold text-zinc-900">
                  {price}
                </p>
                <p className="mt-0.5 text-xs text-zinc-500">Price excluding VAT</p>

                {product.short_description ? (
                  <div className="mt-4 text-sm leading-7 text-zinc-700">
                    <WpContent html={cleanWooHtml(product.short_description)} />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="border-t border-zinc-200 p-6 md:p-10">
              <h2 className="text-sm font-extrabold uppercase tracking-[0.22em] text-zinc-900">
                Description
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-800">
                <WpContent html={cleanWooHtml(product.description)} />
              </div>
            </div>
          </article>

          <aside className="bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-lg font-extrabold tracking-tight text-zinc-900">
              Product enquiry
            </h2>
            <p className="mt-2 text-sm leading-7 text-zinc-700">
              Tell us what you need and we’ll follow up.
            </p>
            <div className="mt-4">
              <ProductEnquiryForm productSlug={product.slug} />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function formatMinorUnits(value, minorUnit = 2) {
  const raw = Number(value);
  if (!Number.isFinite(raw)) return "";
  const div = 10 ** Number(minorUnit || 0);
  return (raw / div).toFixed(Number(minorUnit || 0));
}

