import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = {
  title: "AHU Refurbishment | BVS Building Ventilation Solutions",
  description:
    "Restore and extend your air handling unit's life by 10–20 years at around 40% of replacement cost. BVS survey, specify, and refurbish on-site. UK nationwide.",
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
  {
    q: "How much does refurbishment cost compared to replacement?",
    a: "Typically around 40% of a new unit. We provide a fixed-price, itemised quote after the survey — no commitment required before that.",
  },
  {
    q: "How long does refurbishment take?",
    a: "This ranges from a few days to several weeks depending on the scope and size of the unit. We provide a clear programme at quotation stage.",
  },
  {
    q: "Will our operations need to stop?",
    a: "Often not. Many refurbishments are staged so ventilation stays live. Where a shutdown is unavoidable, we programme it around your operational hours.",
  },
  {
    q: "How many years does it add to the unit's life?",
    a: "Typically 10–20 years, confirmed at survey stage. If refurbishment isn't economically sound, we'll tell you honestly.",
  },
  {
    q: "Can refurbishment support Part L or net zero targets?",
    a: "Yes. EC fan conversion, heat recovery, and controls integration can all be incorporated. Where the scope of works supports it, we work to HTM 03-01 benchmarks on healthcare sites — we'll confirm what's achievable at survey stage.",
  },
  {
    q: "What maintenance is needed after refurbishment?",
    a: "Regular filter changes and system inspections are essential to maintain the performance gains achieved during refurbishment. BVS offer planned maintenance contracts.",
  },
  {
    q: "When is replacement the better option?",
    a: "When the structural frame is beyond economic repair. We assess this honestly — there is no incentive for us to favour one route over the other.",
  },
];

export default function AHURefurbishmentPage() {
  return (
    <div>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#111418]">
        <div className="absolute inset-0">
          <Image
            src="/ahu-refurbishment-worker.png"
            alt="BVS engineer carrying out air handling unit refurbishment works on site"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#111418]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        </div>

        <Container className="relative z-10 flex min-h-[520px] items-end py-14 pb-20 sm:min-h-[620px] sm:py-20 sm:pb-24">
          <div className="max-w-3xl">

            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#297858]"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              AHU Refurbishment
            </p>

            <h1
              className="font-display text-4xl font-extrabold uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.55)" }}
            >
              Restore & Extend<br />Your Air Handling Units
            </h1>

            <div className="mt-5 h-[3px] w-14 bg-[#297858]" />

            <p
              className="mt-6 max-w-2xl text-[15px] leading-7 text-white/80"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
            >
              Extend your AHU&apos;s life by 10–20 years at around 40% of full replacement cost. BVS survey, specify, and refurbish on-site — with minimum disruption to your operations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Book a condition survey
              </Link>

              <a
                href="#what-is-refurbishment"
                className="inline-flex items-center gap-2 border border-white/20 bg-black/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Learn more
                <ArrowDownIcon />
              </a>
            </div>

          </div>
        </Container>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-7 sm:py-10">
        <Container>
          <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Trusted by leading organisations
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

      {/* ── SIGNS YOUR AHU NEEDS REFURBISHMENT ────────────────────────── */}
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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                n: "01",
                heading: "Reduced Efficiency",
                body: "The unit is no longer delivering the airflow or temperature conditions required by the building design.",
              },
              {
                n: "02",
                heading: "Failure to Meet Design Requirements",
                body: "Changing building use, occupancy, or regulation means the existing unit configuration can no longer comply.",
              },
              {
                n: "03",
                heading: "Excessive Noise",
                body: "Worn bearings, degraded fan blades, or loose components cause operational noise that was not present originally.",
              },
              {
                n: "04",
                heading: "Temperature Problems",
                body: "Inconsistent heating or cooling across zones points to coil degradation, control failures, or heat exchanger fouling.",
              },
              {
                n: "05",
                heading: "Corrosion from Water Ingress",
                body: "Condensation or drainage issues cause internal corrosion affecting structural integrity and air quality.",
              },
              {
                n: "06",
                heading: "Poor Indoor Air Quality",
                body: "Filter bypass, damaged seals, or degraded heat recovery reduces ventilation effectiveness and IAQ compliance.",
              },
            ].map((item) => (
              <ScrollReveal key={item.n} className="h-full">
                <div className="relative flex h-full flex-col overflow-hidden border border-slate-200 bg-white p-6">
                  <span className="absolute right-5 top-4 font-display text-4xl font-extrabold text-[#297858]/10">
                    {item.n}
                  </span>
                  <h3 className="font-display text-sm font-extrabold uppercase text-slate-900">
                    {item.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </Container>
      </section>

      {/* ── WHAT IS AHU REFURBISHMENT ──────────────────────────────────── */}
      <section id="what-is-refurbishment" className="bg-white py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <ScrollReveal>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                What it involves
              </p>
              <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
                What Is AHU Refurbishment?
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-slate-600">
                AHU refurbishment is a precise process aimed at restoring optimal functionality and efficiency. It is a comprehensive process involving thorough inspection and strategic component upgrades — not a blanket overhaul.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Our engineers carry out a detailed assessment of every major component before any works are specified or authorised:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Fans, coils, filters, and dampers",
                  "Heat recovery and heat exchangers",
                  "Unit corrosion and structural condition",
                  "AHU controls and automation interfaces",
                  "Access doors, panels, and seals",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-6 text-slate-500">
                Only failed or degraded components are replaced. The structural frame, casing, and duct connections are retained wherever viable — keeping costs down and works in-situ.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { stat: "40%", label: "of replacement cost, typically" },
                  { stat: "10–20", label: "additional years of asset life" },
                  { stat: "40+", label: "years of AHU experience" },
                  { stat: "0", label: "disruption preferred — phased works" },
                ].map((item) => (
                  <div key={item.label} className="border border-slate-200 bg-white p-5">
                    <p className="font-display text-3xl font-extrabold text-[#297858]">{item.stat}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── SOLUTION ───────────────────────────────────────────────────── */}
      <section className="bg-[#0f1216] py-14 sm:py-16">
        <Container>

          <ScrollReveal className="mb-8">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Our approach
            </p>
            <h2 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">
              Component-Level Assessment. No Unnecessary Spend.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/65">
              In most cases the existing air handling unit is structurally sound. We assess condition at component level to determine what can be retained, what needs replacing, and how performance is restored — without unnecessary full replacement or disruption.
            </p>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Retain structure",
                body: "Casing, frames, and duct connections are assessed to confirm what can safely remain in service, keeping costs and footprint intact.",
              },
              {
                title: "Targeted replacement",
                body: "Only failed or degraded components — coils, fans, controls, seals — are replaced individually, not wholesale.",
              },
              {
                title: "In-situ restoration",
                body: "Works are completed within the existing unit footprint to minimise downtime, plant room access requirements, and operational disruption.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="group relative h-full border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-[#297858]/40 transition group-hover:bg-[#297858]/70" />
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  <p className="mt-2 text-xs leading-6 text-white/65">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </Container>
      </section>

      {/* ── COMPARISON TABLE ───────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container>

          <ScrollReveal className="mb-8 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Make the right call
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              Refurbish vs Replace
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Both are valid routes. The right choice depends on the condition of your plant, your programme, and your budget — every project is different, and we assess each one on its own merits.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-hidden border border-slate-200 bg-white">

              <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-slate-200 bg-[#f5f7f6]">
                <div className="border-r border-slate-200 px-4 py-3" />
                <div className="border-r border-slate-200 px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#297858]">
                    Refurbishment
                  </p>
                </div>
                <div className="px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                    Full Replacement
                  </p>
                </div>
              </div>

              {[
                { label: "Disruption", refurb: "Generally lower — works carried out in-situ", replace: "Generally higher — full plant change-out" },
                { label: "Life extension", refurb: "Significant, depending on scope", replace: "Full new asset life from new" },
                { label: "Compliance", refurb: "Upgrades can be incorporated", replace: "Fresh compliance baseline from new" },
                { label: "Right when", refurb: "Frame is structurally sound", replace: "Frame is beyond repair or end of life" },
                { label: "Consider if", refurb: "Budget or programme is constrained", replace: "Full performance reset is the goal" },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1.4fr_1fr_1fr] ${i !== arr.length - 1 ? "border-b border-slate-200" : ""}`}
                >
                  <div className="border-r border-slate-200 px-4 py-4">
                    <p className="text-xs font-medium text-slate-700">{row.label}</p>
                  </div>
                  <div className="border-r border-slate-200 px-4 py-4">
                    <p className="text-xs font-medium text-[#297858]">{row.refurb}</p>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-medium text-slate-600">{row.replace}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <p className="mt-4 text-xs text-slate-500">
            Every project varies —{" "}
            <Link href="/contact" className="font-semibold text-[#297858] underline underline-offset-2 hover:text-[#1d5c42]">
              speak to our team
            </Link>{" "}
            and we&apos;ll give you an honest assessment of which route makes sense for your site. No commitment required.
          </p>

        </Container>
      </section>

      {/* ── KEY BENEFITS ───────────────────────────────────────────────── */}
      <section className="bg-[#f5f7f6] py-14 sm:py-16">
        <Container>

          <ScrollReveal className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Why refurbish
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              The Case for Refurbishment
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
              In most cases the existing AHU casing and frame are structurally sound. A targeted refurbishment restores full performance, integrates modern efficiency improvements, and avoids the cost and disruption of full replacement.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: CostIcon,
                title: "Cost Effective",
                body: "The cost to refurbish in-situ is typically around 40% of that of replacing with a new air handling unit — substantial capital savings.",
              },
              {
                icon: LeafIcon,
                title: "Energy Saving Upgrades",
                body: "Modern heat recovery controls and high-efficiency EC fans can be incorporated or retrofitted into the existing unit during refurbishment.",
              },
              {
                icon: ShieldIcon,
                title: "Industry Standard Compliant",
                body: "Systems can be modified to meet current building requirements including HTM 03-01 for healthcare and Part L energy regulations.",
              },
              {
                icon: BellIcon,
                title: "Minimum Disruption",
                body: "AHU refurbishment typically causes little or no disruption to client premises. Works are phased around operational requirements.",
              },
              {
                icon: ClockIcon,
                title: "Extended Asset Life",
                body: "This approach effectively extends the unit's working life by another 10–20 years — deferring the capital cost of full replacement.",
              },
              {
                icon: BoltIcon,
                title: "Enhanced Performance",
                body: "Latest energy-efficient technology including direct drive plug fans and high-efficiency motors restores and improves original design performance.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 60}>
                  <div className="flex h-full flex-col border border-slate-200 bg-white p-6 transition hover:border-[#297858]/30 hover:shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#297858]/10 text-[#297858]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-sm font-extrabold uppercase text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.body}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </Container>
      </section>

      {/* ── INDUSTRIES SERVED ──────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container>

          <ScrollReveal className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Sectors
            </p>
            <h2 className="mt-2 font-display text-xl font-extrabold uppercase text-slate-900 sm:text-2xl">
              Industries We Serve
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="flex flex-wrap gap-2">
            {[
              "Healthcare & Hospitals",
              "Hotels & Leisure",
              "Commercial Offices",
              "Retail & Shopping Centres",
              "Gyms & Sports Facilities",
              "Educational Buildings",
              "Manufacturing & Industrial",
              "Swimming Pools",
              "Commercial Kitchens",
            ].map((sector) => (
              <span
                key={sector}
                className="border border-slate-200 bg-[#f5f7f6] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600"
              >
                {sector}
              </span>
            ))}
          </div>

        </Container>
      </section>

      {/* ── CASE STUDY ─────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-14 sm:py-16">
        <Container>

          <ScrollReveal className="mb-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Case study
            </p>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">

            <ScrollReveal>
              <h2 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">
                NHS Hammersmith & Fulham
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/70">
                BVS were appointed to refurbish multiple air handling units across an operational NHS site. Full replacement had been quoted by others. Following BVS&apos;s condition survey, it was confirmed that refurbishment was viable — restoring units to full compliance while maintaining clinical ventilation throughout.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/55">
                Works were completed in phases around ward operations with zero unplanned downtime. HTM 03-01 compliance confirmed on handover.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/case-studies/nhs-hammersmith-ahu-refurbishment"
                  className="inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                >
                  Read case study →
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View all case studies
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/hospital.png"
                  alt="NHS hospital site where BVS carried out AHU refurbishment works"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {[
                  { label: "Sector", value: "Healthcare / NHS" },
                  { label: "Outcome", value: "Full refurbishment" },
                  { label: "Downtime", value: "Zero unplanned" },
                  { label: "Compliance", value: "HTM 03-01" },
                ].map((item) => (
                  <div key={item.label} className="border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>

        </Container>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-[#f5f7f6] py-14 sm:py-16">
        <Container>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">

            <div className="relative max-w-lg">

              <ScrollReveal className="mb-6">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                  The process
                </p>
                <h2 className="font-display text-xl font-extrabold uppercase text-slate-900 sm:text-2xl">
                  Survey to Handover — Four Steps
                </h2>
              </ScrollReveal>

              <div
                className="absolute left-[15px] top-20 bottom-6 w-px bg-slate-200"
                aria-hidden="true"
              />

              <div className="space-y-6">
                {[
                  {
                    n: "01",
                    title: "Site Survey",
                    body: "On-site inspection by a BVS engineer confirms condition, refurbishment viability, and scope requirements — with an honest assessment.",
                  },
                  {
                    n: "02",
                    title: "Specification & Quote",
                    body: "Fixed, component-level scope produced and agreed before any works are authorised. No surprises.",
                  },
                  {
                    n: "03",
                    title: "Refurbishment Works",
                    body: "In-situ delivery by our engineers, phased to keep ventilation live where possible and programmed around your operations.",
                  },
                  {
                    n: "04",
                    title: "Test & Handover",
                    body: "Full commissioning, performance verification, and documentation package on completion.",
                  },
                ].map((step, i) => (
                  <ScrollReveal key={step.n} delay={i * 60}>
                    <div className="flex gap-5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#111418] text-xs font-extrabold text-white">
                        {step.n}
                      </div>
                      <div className="pt-0.5">
                        <p className="text-sm font-bold text-slate-900">{step.title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{step.body}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

            </div>

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

      {/* ── OFFER BOX ──────────────────────────────────────────────────── */}
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
                {[
                  "On-site condition survey by an experienced engineer",
                  "Fixed-price, itemised scope — no surprises",
                  "Works programmed around your operations",
                  "40+ years experience across all sectors",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckIcon /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                >
                  Book a survey →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── FINAL CTA + FORM ───────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                Ready to Restore<br />Your AHU?
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-4 text-sm leading-6 text-white/55">
                Tell us the make, model, and the issue you&apos;re experiencing. We respond within one working day with a practical assessment.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <a href="tel:01256518170" className="inline-flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors">
                  <PhoneIcon /> 01256 518170
                </a>
                <a href="mailto:info@bvs-ltd.co.uk" className="inline-flex items-center gap-3 text-sm text-white/55 hover:text-white transition-colors">
                  <MailIcon /> info@bvs-ltd.co.uk
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="bg-white p-7 shadow-lg">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#297858]">Enquiry</p>
                <p className="mb-5 text-xs text-slate-500">Engineering response within one working day</p>
                <QuickQuoteForm />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} />

      {/* ── RELATED ────────────────────────────────────────────────────── */}
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
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-[#297858] hover:text-[#297858]"
              >
                {l.label}
                <span className="text-slate-300 group-hover:translate-x-1 group-hover:text-[#297858] transition-transform">→</span>
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
function CostIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v1m0 8v1M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-1 2-2.5 2.5S9.5 13 9.5 14.5a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function LeafIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M17 8C8 10 5.9 16.17 3.82 19.42A1 1 0 0 0 5 21C9 21 15 19 17 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 8c1-2.5 1-5 0-7-4 2-7 6-6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ShieldIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3 4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BellIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ClockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BoltIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
