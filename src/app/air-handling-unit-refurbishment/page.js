import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = {
  title: "AHU Refurbishment | BVS Building Ventilation Solutions",
  description:
    "Extend your air handling unit's life by 10–15 years at 30–50% of replacement cost. BVS survey, specify, and refurbish on-site. UK nationwide.",
};

const clientLogos = [
  { src: "/nhs-logo.png", alt: "NHS" },
  { src: "/disney-logo.png", alt: "Disney" },
  { src: "/marriott-logo.png", alt: "Marriott Hotels" },
  { src: "/moorfields-logo.png", alt: "Moorfields Eye Hospital" },
  { src: "/ihg-logo.png", alt: "IHG Hotels & Resorts" },
  { src: "/travelodge-logo.png", alt: "Travelodge" },
  { src: "/waitrose-logo.png", alt: "Waitrose" },
  { src: "/westfield-logo.png", alt: "Westfield" },
  { src: "/fenwick-logo.png", alt: "Fenwick" },
  { src: "/freedomleisure-logo.png", alt: "Freedom Leisure" },
  { src: "/queenmary-logo.png", alt: "Queen Mary University" },
  { src: "/alpinef1-logo.png", alt: "Alpine F1 Team" },
];

const faqs = [
  { q: "How much does refurbishment cost vs replacement?", a: "Typically 30–50% of a new unit. We provide a fixed-price, itemised quote after the survey — no commitment required before that." },
  { q: "Will operations need to stop?", a: "Often not. Many refurbishments are staged so ventilation stays live. Where a shutdown is unavoidable, we programme it around your operational hours." },
  { q: "How many years does it add?", a: "Typically 10–15 years, confirmed at survey stage. If refurbishment isn't economically sound, we'll tell you." },
  { q: "Can it support Part L or net zero targets?", a: "Yes. EC fan conversion, heat recovery, and controls integration can all be incorporated. HTM 03-01 compliance confirmed for healthcare sites." },
  { q: "When is replacement the better option?", a: "When the structural frame is beyond economic repair. We assess this honestly — there's no incentive for us to favour one route over the other." },
];

export default function AHURefurbishmentPage() {
  return (
    <div>

  {/* ── HERO ─────────────────────────────────────────────────────────── */}
<section className="relative overflow-hidden bg-[#111418]">

{/* Background image */}
<div className="absolute inset-0">
  <Image
    src="/ec-fan-upgrades.png"
    alt="EC fan retrofit inside an existing air handling unit"
    fill
    priority
    className="object-cover object-center"
    sizes="100vw"
  />

  {/* overlays */}
  <div className="absolute inset-0 bg-[#111418]/55" />

  {/* fade into next section */}
 
</div>

<Container className="relative z-10 flex min-h-[520px] items-end py-14 pb-20 sm:min-h-[620px] sm:py-20 sm:pb-24">
  <div className="max-w-3xl">

    <p
      className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55"
      style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
    >
      EC Fan Upgrades & Retrofits
    </p>

    <h1
      className="font-display text-4xl font-extrabold uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl"
      style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}
    >
      Upgrade Existing AHUs
      <br />
      With Modern EC Fans
    </h1>

    <div className="mt-5 h-[3px] w-14 bg-[#297858]" />

    <p
      className="mt-6 max-w-2xl text-[15px] leading-7 text-white/80"
      style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
    >
      Extend AHU life by 10–15 years at typically 30–50% of full replacement cost. Existing systems surveyed, specified, and returned to service — with net zero and decarbonisation improvements included where required.
    </p>

    <div className="mt-8 flex flex-wrap gap-3">
      <a
        href="#audit"
        className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
      >
        Request an energy audit
      </a>

      <a
        href="#how-it-works"
        className="inline-flex items-center gap-2 border border-white/20 bg-black/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
      >
        How it works
        <ArrowDownIcon className="h-4 w-4" />
      </a>
    </div>
  </div>
</Container>
</section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-7 sm:py-10">
        <Container>
          <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Trusted by leading UK organisations
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent sm:hidden" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:hidden" />
            <div className="overflow-x-auto no-scrollbar sm:overflow-visible">
              <div className="flex sm:grid sm:grid-flow-col sm:auto-cols-max sm:justify-center gap-x-6 gap-y-5 min-w-max sm:min-w-0 pl-4 pr-10 sm:px-0">
                {clientLogos.map((logo) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    unoptimized
                    className="h-14 w-auto object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROVEN ON CRITICAL SITES ─────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-white py-8">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
              Proven on critical sites
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-600">
              {["NHS Hammersmith & Fulham", "Moorfields Eye Hospital", "Warner Leisure Hotels", "Disney"].map((name) => (
                <span key={name} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. PROBLEM ──────────────────────────────────────────────────── */}
{/* ── SIGNS SECTION ─────────────────────────────────────────────── */}
<section className="bg-[#f5f7f6] py-14 sm:py-16">
  <Container>

    <ScrollReveal className="mb-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        Common indicators
      </p>

      <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
        Signs Your AHU Needs Attention
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="grid gap-4 sm:grid-cols-3">

      {[
        {
          n: "01",
          icon: Zap,
          heading: "High Energy Consumption",
          body:
            "Older AC fan systems often consume significantly more power than modern EC upgrades.",
        },
        {
          n: "02",
          icon: Wrench,
          heading: "Frequent Maintenance",
          body:
            "Belt-driven systems require ongoing servicing and can suffer airflow issues when components wear.",
        },
        {
          n: "03",
          icon: ClipboardCheck,
          heading: "Efficiency Targets",
          body:
            "EC fan retrofits help support energy reduction and decarbonisation objectives.",
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <ScrollReveal key={item.n} className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden border border-slate-200 bg-white p-6">

              {/* watermark number */}
              <span className="absolute right-5 top-4 font-display text-4xl font-extrabold text-[#297858]/10">
                {item.n}
              </span>

              {/* icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#297858]/10 text-[#297858]">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </div>

              {/* heading */}
              <h3 className="mt-5 font-display text-sm font-extrabold uppercase text-slate-900">
                {item.heading}
              </h3>

              {/* body */}
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.body}
              </p>

            </div>
          </ScrollReveal>
        );
      })}

    </div>
  </Container>
</section>

      {/* ── 3. SOLUTION ─────────────────────────────────────────────────── */}
      <section className="bg-[#0f1216] py-14 sm:py-16">
  <Container>

    {/* HEADER */}
    <ScrollReveal className="mb-8">

      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        The solution
      </p>

      <p className="max-w-lg text-sm leading-6 text-white/65">
        In most cases the existing air handling unit is structurally sound. We assess condition at component level to determine what can be retained, what needs replacing, and how performance is restored without unnecessary full unit replacement or disruption.
      </p>

    </ScrollReveal>

    {/* VISUAL PRINCIPLES */}
    <div className="grid gap-5 sm:grid-cols-3">

      {[
        {
          title: "Retain structure",
          body:
            "Casing, frames and duct connections are assessed to confirm what can safely remain in service.",
        },
        {
          title: "Targeted replacement",
          body:
            "Only failed or degraded components such as coils, fans and controls are replaced individually.",
        },
        {
          title: "In-situ restoration",
          body:
            "Works are completed within the existing unit footprint to minimise downtime and disruption.",
        },
      ].map((item, i) => (
        <ScrollReveal key={item.title} delay={i * 60}>

          <div className="group relative h-full border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">

            {/* ACCENT LINE */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-[#297858]/40 transition group-hover:bg-[#297858]/70" />

            {/* TITLE */}
            <p className="text-sm font-bold text-white">
              {item.title}
            </p>

            {/* BODY */}
            <p className="mt-2 text-xs leading-6 text-white/65">
              {item.body}
            </p>

          </div>

        </ScrollReveal>
      ))}

    </div>

  </Container>
</section>

  {/* ── 6. HOW IT WORKS ─────────────────────────────────────────────── */}
  <section id="how-it-works" className="bg-surface-2 py-14 sm:py-16">
  <Container>

    <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">

      {/* LEFT SIDE */}
      <div className="relative max-w-lg">

        {/* HEADER (now visually tied to timeline) */}
        <ScrollReveal className="mb-6">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
            The process
          </p>

          <h2 className="font-display text-xl font-extrabold uppercase text-slate-900 sm:text-2xl">
            Survey to Handover — Four Steps
          </h2>
        </ScrollReveal>

        {/* vertical line starts closer to header */}
        <div
          className="absolute left-[15px] top-20 bottom-6 w-px bg-slate-200"
          aria-hidden="true"
        />

        <div className="space-y-6">

          {[
            {
              n: "01",
              title: "Site Survey",
              body:
                "On-site inspection confirms condition, viability, and scope requirements.",
            },
            {
              n: "02",
              title: "Specification",
              body:
                "Fixed, component-level scope produced and agreed before any works are authorised.",
            },
            {
              n: "03",
              title: "Refurbishment Works",
              body:
                "In-situ delivery by our engineers, phased to keep ventilation live where possible.",
            },
            {
              n: "04",
              title: "Test & Handover",
              body:
                "Full commissioning, performance verification, and documentation package.",
            },
          ].map((step, i) => (
            <ScrollReveal key={step.n} delay={i * 60}>
              <div className="flex gap-5">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#111418] text-xs font-extrabold text-white">
                  {step.n}
                </div>

                <div className="pt-0.5">
                  <p className="text-sm font-bold text-slate-900">
                    {step.title}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {step.body}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}

        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <ScrollReveal delay={120}>
        <div className="relative h-[420px] overflow-hidden border border-slate-200 bg-white shadow-sm">

          <Image
            src="/ahu-refurbishment-worker.png"
            alt="BVS engineer carrying out AHU refurbishment works"
            fill
            className="object-cover"
          />

        </div>
      </ScrollReveal>

    </div>

  </Container>
</section>

      {/* ── 7. OFFER ────────────────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <Container>
          <ScrollReveal>
            <div className="border border-[#297858]/30 bg-[#297858]/5 p-6 sm:p-8">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">How to start</p>
              <h2 className="font-display text-xl font-extrabold uppercase text-slate-900 sm:text-2xl">
                Book a Condition Survey
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
                A BVS engineer visits site, inspects the AHU, and confirms whether refurbishment is viable — with an honest recommendation. No commitment required.
              </p>
              <ul className="mt-5 space-y-2">
                {["On-site condition survey", "Fixed-price, itemised scope — no surprises", "Works programmed around your operations", "40+ years experience across all sectors"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckIcon /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]">
                  Book a survey →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 8. FINAL CTA ────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                Ready to Restore<br />Your AHU?
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-4 text-sm leading-6 text-white/55">
                Tell us the make, model, and the issue you're experiencing. We respond within one working day with a practical assessment.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <a href="tel:01256518170" className="inline-flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors"><PhoneIcon /> 01256 518170</a>
                <a href="mailto:info@bvs-ltd.co.uk" className="inline-flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors"><MailIcon /> info@bvs-ltd.co.uk</a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="bg-white p-7 shadow-lg">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#297858]">Enquiry</p>
                <p className="mb-5 text-xs text-slate-500">Engineering response within 24 working hours</p>
                <QuickQuoteForm />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 9. FAQ ──────────────────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} />

      {/* ── RELATED ─────────────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related services</p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
              { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
              { href: "/air-handling-unit-manufacturing", label: "AHU Manufacturing" },
              { href: "/air-handling-unit-controller-solutions-upgrades", label: "Controller Upgrades" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="group flex items-center justify-between border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-[#297858] hover:text-[#297858]">
                {l.label} <span className="text-slate-300 group-hover:translate-x-1 group-hover:text-[#297858] transition-transform">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-[#297858]">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
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