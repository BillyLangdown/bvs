import Image from "next/image";
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
      <section className="relative overflow-hidden bg-[#111418] pb-0 pt-14 sm:pt-16">
      <Image
  src="/crate-in-air.webp"
  alt="Crane lifting a ventilation unit against a clear blue sky"
  fill
  unoptimized
  priority
  className="object-cover object-[70%_center]"
/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111418] via-[#111418]/55 to-[#111418]/10" />
        <div className="relative">
          <Container>
            <div className="pb-12 sm:pb-14 max-w-2xl">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Shop
              </p>
              <h1 className="font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
                HVAC Components<br />&amp; Parts
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-white/65">
                EC fans, filters, heating &amp; cooling coils, and heater batteries — sourced by our engineers for commercial and industrial HVAC applications.
              </p>
              <p className="mt-4 text-sm text-white/40">
                Need help specifying the right component?{" "}
                <Link href="/contact" className="text-[#297858] underline-offset-2 hover:underline">
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
                  { stat: "UK", label: "Delivery" },
                  { stat: "Fast", label: "Dispatch" },
                  { stat: "Expert", label: "Sourcing" },
                ].map((s) => (
                  <div key={s.label} className="px-3 text-center sm:px-6">
                    <p className="font-display text-base font-extrabold text-white sm:text-lg">{s.stat}</p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-wide text-white/50">{s.label}</p>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-14 sm:py-20">
        <Container>

          {/* Section intro */}
          <ScrollReveal className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
              Components &amp; Parts
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-slate-900">
              All Products
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Sourced and supplied by our engineers. Can&apos;t find what you need?{" "}
              <Link href="/contact" className="text-[#297858] underline-offset-2 hover:underline">
                Get in touch.
              </Link>
            </p>
          </ScrollReveal>

          {products.length > 0 ? (
            <ShopGrid products={products} categories={categories} />
          ) : (
            <div className="py-20 text-center">
              <p className="text-sm text-slate-500">
                Products are currently unavailable. Please{" "}
                <Link href="/contact" className="text-[#297858] underline underline-offset-2">
                  contact us
                </Link>{" "}
                to enquire about parts and components.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <ScrollReveal>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Need something specific?
              </p>
              <h2 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">
                Don&apos;t see the product you&apos;re after?
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <ul className="mt-5 flex flex-col gap-2.5">
                {[
                  "We source components beyond what's listed here",
                  "Motor type, duty, casing size, and controls spec covered",
                  "Response within one working day — direct from an engineer",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/55">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={80} className="flex flex-col gap-3">
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
