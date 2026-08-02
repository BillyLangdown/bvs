import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { TrustedByBar } from "@/components/site/TrustedByBar";
import { caseStudies } from "@/lib/caseStudyData";
import { CaseStudyCarousel } from "@/components/site/CaseStudyCarousel";
import { getShopProducts, getProductCategories } from "@/lib/wordpress/api";

function Zap({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Wrench({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ClipboardCheck({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 14 2 2 4-4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CloseIcon({ className = "" }) {  return (    <svg      width="14"      height="14"      viewBox="0 0 24 24"      fill="none"      className={className}      aria-hidden="true"    >      <path        d="M6 6l12 12M18 6L6 18"        stroke="currentColor"        strokeWidth="2"        strokeLinecap="round"      />    </svg>  );}

export const metadata = pageMetadata({
  title: "EC Fan Upgrades & Retrofits for Existing AHUs",
  description: "EC fan retrofits for existing air handling units. Reduce energy consumption, improve reliability, and support decarbonisation targets, without full AHU replacement.",
  path: "/ec-fan-upgrades-and-retrofits-for-hvac",
});



const faqs = [
  {
    q: "Can EC fans be retrofitted into any existing AHU?",
    a: "In the vast majority of cases, yes. EC plug fans can replace belt-drive or direct-drive AC fan sets in most AHU configurations. We confirm suitability at the audit stage before any commitment is made.",
  },
  {
    q: "Does the AHU casing need to be replaced?",
    a: "No. The retrofit upgrades the fan set within the existing AHU casing. The unit remains in place and the existing ductwork connections and services stay intact, which is what makes it a cost-effective alternative to full replacement.",
  },
  {
    q: "How much energy can an EC fan retrofit save?",
    a: "EC motors are significantly more efficient than AC induction motors, particularly at part load. The actual saving depends on your current motor type and operating hours. We model this against your consumption before you commit to any works.",
  },
  {
    q: "How disruptive is the installation?",
    a: "A single fan set replacement typically takes one day on site. Where multiple sets are being upgraded, we stagger works to keep ventilation running throughout, or complete during a planned shutdown.",
  },
  {
    q: "What controls integration do EC fans require?",
    a: "We can connect to a manual potentiometer for simple speed control, or we supply a 0–10V wire that can be configured for BMS integration. BMS connection to be made by others.",
  },
];

export default async function ECFanUpgradesPage() {
  const studies = caseStudies.filter((s) => s.services.includes("ec-fan"));

  const FEATURED_MODELS = ["GR35I-ZID", "GR45I-ZID", "GR501-ZID", "GR50I-ZID", "GR561-ZID", "GR56I-ZID"];

  let ecFanProducts = [];
  try {
    const [products, categories] = await Promise.all([
      getShopProducts({ revalidate: 86400 }),
      getProductCategories({ revalidate: 86400 }),
    ]);
    const ecCatIds = new Set(
      categories
        .filter((c) => c.name.toLowerCase().includes("ec fan"))
        .map((c) => c.id)
    );
    const allEcProducts = products.filter((p) =>
      p.categories.some((id) => ecCatIds.has(id))
    );
    const featured = allEcProducts.filter((p) =>
      FEATURED_MODELS.some((m) => p.title.toUpperCase().includes(m.toUpperCase()))
    );
    ecFanProducts = featured.length > 0 ? featured.slice(0, 4) : allEcProducts.slice(0, 4);
  } catch {
    // WordPress unavailable — section hidden gracefully
  }
  return (
    <div>

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/fan-attached-to-bulkhead.webp"
          alt="EC fan unit installed in an existing air handling unit"
          fill
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 via-[35%] to-transparent" />

        <Container className="relative flex min-h-[620px] items-center py-14 pb-16 sm:min-h-[600px] sm:py-20 sm:pb-20">
          {/* Mobile hero */}
          <div className="sm:hidden max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              EC Fan Upgrades &amp; Retrofits
            </p>
            <h1
              className="font-display text-3xl font-extrabold leading-[1.08] text-white"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Lower energy use<br />and better reliability.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <a href="tel:01256518170" className="mt-5 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <p
              className="mt-3 max-w-xl text-sm leading-6 text-white"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              EC fan retrofits improve efficiency, reliability, and control without full unit replacement.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#upgrade"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Discuss Your Upgrade
                <ArrowIcon />
              </a>
              <a
                href="#our-projects"
                className="inline-flex w-full items-center justify-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Our Projects
                <ArrowDownIcon />
              </a>
            </div>
          </div>
          {/* Desktop hero */}
          <div className="hidden sm:block max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              EC Fan Upgrades &amp; Retrofits
            </p>
            <p
              className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-6xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Lower energy use<br />and better reliability.
            </p>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p
              className="mt-5 max-w-xl text-[15px] leading-7 text-white"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              EC fan retrofits upgrade existing AHU fan systems to improve efficiency, reliability, and control without full unit replacement, reducing energy use and carbon output.
            </p>
            <a href="tel:01256518170" className="mt-6 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#upgrade"
                className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Discuss Your Upgrade
                <ArrowIcon />
              </a>
              <a
                href="#our-projects"
                className="inline-flex items-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Our Projects
                <ArrowDownIcon />
              </a>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "40+", label: "Years Experience" },
                { stat: "Nationwide", label: "Coverage" },
                { stat: "All Makes", label: "Covered" },
              ].map((s) => (
                <div key={s.label} className="px-2 text-center sm:px-6">
                  <p className="font-display text-sm font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-wide text-white/55 sm:text-[10px]">{s.label === "Years Experience" ? <><span className="sm:hidden">Yrs Experience</span><span className="hidden sm:block">Years Experience</span></> : s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      <TrustedByBar />

      {/* ── 2. PROBLEM ── surface-2 ──────────────────────────────────────── */}
 

<section className="bg-[#f7f6f5] py-14 sm:py-18">
  <Container>
    <ScrollReveal className="mb-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        What the upgrade delivers
      </p>

      <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
        Why Upgrade
        <br />
        to EC Fans
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {[
        {
          heading: "Lower Energy Use",
          body: "Higher efficiency EC motors reduce energy consumption. Savings can be modelled against existing systems before upgrade.",
        },
        {
          heading: "Higher Reliability",
          body: "No belts or pulleys. Fewer moving parts means fewer failures and lower maintenance.",
        },
        {
          heading: "Better Control",
          body: "Direct BMS or 0–10V control gives accurate speed adjustment and improved part-load efficiency.",
        },
        {
          heading: "Longer Asset Life",
          body: "Retrofit EC upgrades extend AHU life without replacing the full unit or casing.",
        },
        {
          heading: "Redundancy",
          body: "Dual fan configurations available where system requirements demand a backup option.",
        },
      ].map((item, i) => (
        <ScrollReveal key={item.heading} delay={i * 60} className="h-full">
          <div className="h-full border-t-2 border-[#297858] bg-white p-5">
            <h3 className="text-sm font-extrabold text-slate-900">{item.heading}</h3>
            <div className="my-3 h-px bg-slate-200" />
            <p className="text-xs leading-5 text-slate-500">{item.body}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </Container>
</section>

      {/* ── 3. COMPARISON ── dark ────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
  <Container>

    {/* Section header */}
    <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        EC vs AC
      </p>

      <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
        How EC Technology Compares
      </h2>

      <div className="mx-auto mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="grid gap-6 lg:grid-cols-2">

      {/* Comparison table */}
      <ScrollReveal className="h-full">
        <div className="flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.03]">

          {/* Table header */}
          <div className="grid grid-cols-[1fr_90px_90px] border-b border-white/10 bg-white/[0.02]">
            <div className="px-5 py-3" />

            <div className="flex items-center justify-center border-l border-white/10 px-3 py-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                AC
              </p>
            </div>

            <div className="flex items-center justify-center border-l border-white/10 px-3 py-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#8fd1b5]">
                EC
              </p>
            </div>
          </div>

          {[
            {
              label: "Energy efficiency",
              ac: false,
              ec: true,
            },
            {
              label: "Low maintenance",
              ac: false,
              ec: true,
            },
            {
              label: "Variable speed control",
              ac: false,
              ec: true,
            },
            {
              label: "BMS integration",
              ac: false,
              ec: true,
            },
            {
              label: "Built-in diagnostics",
              ac: false,
              ec: true,
            },
            {
              label: "Lower running costs",
              ac: false,
              ec: true,
            },
          ].map((row, i, arr) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1fr_90px_90px] ${
                i !== arr.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <div className="border-r border-white/10 px-5 py-4">
                <p className="text-sm text-white/80">{row.label}</p>
              </div>

              <div className="flex items-center justify-center border-r border-white/10 py-4">
                {row.ac ? (
                  <CheckIcon className="text-white/40" />
                ) : (
                  <CloseIcon className="text-white/20" />
                )}
              </div>

              <div className="flex items-center justify-center py-4">
                {row.ec ? (
                  <CheckIcon className="text-[#297858]" />
                ) : (
                  <CloseIcon className="text-white/20" />
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Energy bar chart */}
<ScrollReveal delay={80} className="h-full">
  <div className="flex h-full flex-col border border-white/10 bg-white/[0.03] p-8">

    <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
      Typical Energy Use
    </p>

    {/* Vertical bars — bottom-aligned */}
    <div className="mt-6 flex flex-1 items-end justify-center gap-10">

      {/* AC Fan */}
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm font-extrabold text-white/40">100%</p>
        <div className="h-40 w-20 bg-white/20" />
        <p className="text-[9px] font-bold uppercase tracking-widest text-white/30">AC Fan</p>
      </div>

      {/* EC Upgrade */}
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm font-extrabold text-[#8fd1b5]">~60%</p>
        <div className="h-24 w-20 bg-[#297858]" />
        <p className="text-[9px] font-bold uppercase tracking-widest text-[#8fd1b5]">EC Upgrade</p>
      </div>

    </div>

    <div className="mt-6 border-t border-white/10 pt-5">
      <p className="text-center text-xs leading-6 text-white/40">
        Typical savings based on continuously operated commercial AHUs.
      </p>
    </div>

  </div>
</ScrollReveal>

    </div>
  </Container>
</section>


      {/* ── 6. HOW IT WORKS ── surface-2 ─────────────────────────────────── */}
      <section className="bg-[#f7f6f5] py-16 sm:py-20">
  <Container>
    <ScrollReveal className="mb-10">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        How it works
      </p>
      <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
        From initial appointment to<br />restored operations
      </h2>
      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
      {[
        {
          n: "01",
          title: "Discuss your requirements",
          body: "Talk through your system setup, existing fan types, and targets. We confirm feasibility and what an upgrade could deliver before any site visit.",
          points: ["Feasibility confirmed upfront", "Energy saving potential discussed", "No commitment required"],
        },
        {
          n: "02",
          title: "Site survey",
          body: "We visit site to audit your existing fan sets, record motor type and current power draw, and produce an energy model with projected savings and payback assessment.",
          points: ["Motor type and consumption recorded", "Energy model produced", "Recommendations from our engineers"],
        },
        {
          n: "03",
          title: "Fan selection",
          body: "EC fans are selected to match the existing airflow duty, static pressure, and speed range. Controls integration is specified at the same time.",
          points: ["Matched to existing duty", "Ziehl-Abegg, ebm-papst, Systemair", "BMS interface specified"],
        },
        {
          n: "04",
          title: "Installation",
          body: "The existing fan and motor assembly is removed and the EC unit installed. Electrical supply, controls wiring, commissioning, and airflow verification all included.",
          points: ["Existing fan set fully removed", "Electrical and controls wired", "Airflow and speed verified on completion"],
        },
      ].map((step, i) => (
        <ScrollReveal key={step.n} delay={i * 60} className="h-full">
          <div className="h-full flex flex-col border border-slate-200 bg-white p-5">
            <span className="text-4xl font-extrabold text-[#297858]/15">
              {step.n}
            </span>

            <h3 className="mt-2 text-sm font-extrabold text-slate-900">
              {step.title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500 flex-1">
              {step.body}
            </p>

            <ul className="mt-3 space-y-1.5">
              {step.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[11px] text-slate-400">
                  <span className="mt-1.5 h-1 w-1.5 shrink-0 bg-[#297858]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </Container>
</section>

      {/* ── EC FAN PRODUCTS ── shop showcase ─────────────────────────── */}
      {ecFanProducts.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <ScrollReveal className="mb-10">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                From the shop
              </p>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                EC Fans Available to Order
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                Units we supply for retrofit projects. Need help selecting the right fan for your system? Our engineers can advise before you order.
              </p>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ecFanProducts.map((product, i) => (
                <ScrollReveal key={product.id} delay={i * 60}>
                  <Link
                    href={`/shop/${product.slug}`}
                    className="group flex flex-col border border-slate-200 bg-white transition-all hover:border-[#297858] hover:shadow-sm"
                  >
                    <div className="relative aspect-square overflow-hidden bg-slate-50">
                      {product.imageUrl ? (
                        <Image
                          src={product.imageUrl}
                          alt={product.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="text-[10px] uppercase tracking-widest text-slate-300">No image</span>
                        </div>
                      )}
                      {product.stockBadge && (
                        <span className="absolute left-3 top-3 bg-[#297858] px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white">
                          {product.stockBadge}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <p className="text-xs font-semibold leading-5 text-slate-900 group-hover:text-[#297858]">
                        {product.title}
                      </p>
                      {product.excerpt && (
                        <p className="mt-1.5 line-clamp-2 text-[11px] leading-4 text-slate-400">
                          {product.excerpt}
                        </p>
                      )}
                      <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#297858]">
                        View product
                        <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-[#297858] hover:text-[#297858]"
              >
                View all shop products
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* ── OUR PROJECTS ── case study carousel ───────────────────────── */}
      <section id="our-projects" className="bg-[#111418] py-14 sm:py-20">
        <Container>
          <ScrollReveal className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Our Projects
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              Work We&apos;ve Delivered
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>
          <CaseStudyCarousel
            studies={studies}
            intro="EC retrofits across swimming pools, hospitals, and commercial buildings."
          />
        </Container>
      </section>

      {/* ── 8. FINAL CTA ── white ────────────────────────────────────────── */}
      <section id="upgrade" className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Get in touch
              </p>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Get an Upgrade<br />Proposal
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Tell us how many fan sets, the current motor type, and typical operating hours. We&apos;ll produce an energy model showing projected savings and payback before any commitment to works.
              </p>
              <div className="mt-6 space-y-3 border-l-2 border-slate-200 pl-5">
  
  {[
    "Upgrade proposal tailored to your system",
    "All major AHU makes and configurations covered",
    "Direct response, not a sales team",
  ].map((item) => (
    <div key={item} className="flex items-start gap-2.5">
      <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
      
      <p className="text-sm leading-6 text-slate-500">
        {item}
      </p>
    </div>
  ))}

</div>
              <div className="mt-6 border border-[#297858]/20 bg-[#297858]/5 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#297858]">Call us directly</p>
                <a href="tel:01256518170" className="mt-3 flex items-center gap-3 text-2xl font-extrabold text-slate-900 transition-colors hover:text-[#297858]">
                  <PhoneIcon /> 01256 518170
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="border border-slate-200 bg-white p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
                  Enquiry
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Send us the AHU details - number of fans, motor type, and operating schedule. We&apos;ll respond with a practical energy model within 24 hours.
                </p>
                <div className="mt-6"><QuickQuoteForm defaultService="EC Fan Upgrades" /></div>
                <div className="mt-5 flex flex-col gap-2 border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Response within 24 hours
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Discuss your project - no commitment required
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 9. FAQ ── surface-2 ───────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <FAQAccordion faqs={faqs} theme="dark" />

      {/* ── RELATED SERVICES ── white ────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related services</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/air-handling-unit-controller-solutions-upgrades", label: "Controller Upgrades" },
              { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
              { href: "/air-handling-unit-manufacturing-and-installation", label: "AHU Manufacturing & Installation" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 transition-all hover:border-[#297858] hover:bg-slate-50"
              >
                <span className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-300 transition-colors group-hover:bg-[#297858]" />
                  {l.label}
                </span>
                <span className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#297858]">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
function CheckIcon({ className = "" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`text-[#297858] ${className}`}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

