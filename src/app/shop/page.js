import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getShopProducts, getProductCategories } from "@/lib/wordpress/api";
import { WpConfigError } from "@/lib/wordpress/client";
import { ShopGrid } from "@/components/shop/ShopGrid";
import { CustomBuildEnquiry } from "@/components/forms/CustomBuildEnquiry";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Shop - HVAC Components & Parts",
  description: "EC fans, filters, heating & cooling coils, and heater batteries. HVAC components sourced and supplied by BVS for commercial and industrial applications.",
  path: "/shop",
});

export default async function ShopPage() {
  let products = [];
  let categories = [];

  // Only a WpConfigError (WP env vars not set at all — a permanent config problem, e.g.
  // building locally without them) falls back to an empty state here. Any other error
  // means the backend request itself failed (network, timeout, rate limit), not that
  // there are genuinely no products, so it's left to propagate uncaught. Swallowing
  // those too used to render exactly the same "products unavailable" state as a real
  // empty catalog, and that render then got cached by ISR for 5 minutes, silently
  // replacing a working product listing with a false empty state on any transient
  // backend hiccup. Letting a real failure propagate keeps Next.js serving the last
  // good cached listing instead (getProductCategories already tolerates failure
  // internally and is safe to keep swallowing, it's supplementary).
  try {
    [products, categories] = await Promise.all([
      getShopProducts({ revalidate: 3600 }),
      getProductCategories({ revalidate: 600 }),
    ]);
  } catch (err) {
    if (!(err instanceof WpConfigError)) throw err;
  }

  // Exclude air filter products — we don't surface those in the shop
  const filterCategoryIds = new Set(
    categories
      .filter((c) => c.name.toLowerCase().includes("filter"))
      .map((c) => c.id)
  );
  const shopProducts = products.filter(
    (p) => !p.categories.some((id) => filterCategoryIds.has(id))
  );
  const shopCategories = categories.filter((c) => !filterCategoryIds.has(c.id));

  const typeImages = {};
  if (shopProducts.length > 0 && shopCategories.length > 0) {
    const findImage = (keywords) => {
      const cat = shopCategories.find((c) =>
        keywords.some((k) => c.name.toLowerCase().includes(k))
      );
      return cat
        ? shopProducts.find((p) => p.categories.includes(cat.id) && p.imageUrl)?.imageUrl || null
        : null;
    };
    typeImages["ec-fan"]    = findImage(["ec fan", "ec fans"]);
    typeImages["axial-fan"] = findImage(["axial"]);
    typeImages["coil"]      = findImage(["coil"]);
    typeImages["battery"]   = findImage(["heater battery", "heater batteries", "electric heater", "battery"]);
  }

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
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
                HVAC components<br />&amp; parts.
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-white/65">
                EC fans, filters, heating &amp; cooling coils, and heater batteries, sourced by our engineers for commercial and industrial HVAC applications.
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

      {/* ── PRODUCTS ─────────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-14 sm:py-20">
        <Container>

          {/* Section intro */}
          <ScrollReveal className="mb-10">
  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
    Components &amp; Parts
  </p>

  <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
    All Products
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

          {shopProducts.length > 0 ? (
            <ShopGrid products={shopProducts} categories={shopCategories} />
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

      {/* ── CUSTOM BUILD ENQUIRY ─────────────────────────────────────── */}
      <section  id="custom-build-enquiry" className="bg-[#111418] py-14 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
              Custom Build
            </p>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Need Something Built to Specification?
            </h2>
            <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/60">
              Select the product type below and fill in your requirements. We will come
              back within one working day with a specification and price.
            </p>
          </ScrollReveal>
          <CustomBuildEnquiry typeImages={typeImages} />
        </Container>
      </section>

    </div>
  );
}
