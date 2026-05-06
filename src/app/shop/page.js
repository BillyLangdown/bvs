import Link from "next/link";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getShopProducts, getProductCategories } from "@/lib/wordpress/api";
import { ShopGrid } from "@/components/shop/ShopGrid";

export const metadata = {
  title: "Shop - HVAC Components & Parts | BVS Building Ventilation Solutions",
  description:
    "EC fans, filters, heating & cooling coils, and heater batteries. HVAC components sourced and supplied by BVS for commercial and industrial applications.",
};

export default async function ShopPage() {
  let products = [];
  let categories = [];

  try {
    [products, categories] = await Promise.all([
      getShopProducts({ revalidate: 300 }),
      getProductCategories({ revalidate: 600 }),
    ]);
  } catch {
    // WordPress unavailable - renders empty state
  }

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] pb-0 pt-14 sm:pt-16">
        <Container>
          <div className="pb-12 sm:pb-14 max-w-2xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">
              Shop
            </p>
            <h1 className="font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
              HVAC Components<br />&amp; Parts
            </h1>
            <div className="mt-4 h-[3px] w-10 bg-emerald-500" />
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-white/65">
              EC fans, filters, heating &amp; cooling coils, and heater batteries - sourced by our engineers for commercial and industrial HVAC applications.
            </p>
            <p className="mt-4 text-sm text-white/40">
              All products link through to our main store. Need help specifying the right component?{" "}
              <Link href="/contact" className="text-emerald-400 underline-offset-2 hover:underline">
                Ask an engineer.
              </Link>
            </p>
          </div>
        </Container>

        {/* Stats strip */}
        <div className="border-t border-white/10 bg-black/30">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/10 py-3">
              {[
                { stat: String(products.length || "-"), label: "Products" },
                { stat: String(categories.length || "-"), label: "Categories" },
                { stat: "UK", label: "Dispatch" },
              ].map((s) => (
                <div key={s.label} className="px-3 text-center sm:px-6">
                  <p className="font-display text-base font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wide text-white/50 sm:text-[11px]">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-14 sm:py-20">
        <Container>
          {products.length > 0 ? (
            <ShopGrid products={products} categories={categories} />
          ) : (
            <div className="py-20 text-center">
              <p className="text-sm text-slate-500">
                Products are currently unavailable. Please{" "}
                <Link href="/contact" className="text-emerald-700 underline underline-offset-2">
                  contact us
                </Link>{" "}
                to enquire about parts and components.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <ScrollReveal>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">
                Need something specific?
              </p>
              <h2 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">
                Can&apos;t find what you&apos;re looking for?
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-6 text-white/55">
                We source and supply a wide range of HVAC components beyond what&apos;s listed here. If you need a specific part, model, or bespoke component - speak to our team.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={80} className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1d5c42]"
              >
                Enquire About Parts
              </Link>
              <a
                href="tel:01256518170"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/8"
              >
                01256 518170
              </a>
            </ScrollReveal>
          </div>
        </Container>
      </section>

    </div>
  );
}
