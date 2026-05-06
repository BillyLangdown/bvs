import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = {
  title: "AHU Refurbishment | BVS Building Ventilation Solutions",
  description:
    "Extend your air handling unit's life by 10–15 years at around 40% of replacement cost. BVS survey, specify, and refurbish on-site with minimal disruption. UK nationwide.",
};

/* ── DATA ─────────────────────────────────────────────────────────────── */

const clientLogos = [
  { src: "/nhs-logo.png", alt: "NHS" },
  { src: "/disney-logo.png", alt: "Disney" },
  { src: "/marriott-logo.png", alt: "Marriott Hotels" },
  { src: "/moorfields-logo.png", alt: "Moorfields Eye Hospital" },
  { src: "/ihg-logo.png", alt: "IHG Hotels & Resorts" },
  { src: "/travelodge-logo.png", alt: "Travelodge" },
  { src: "/waitrose-logo.png", alt: "Waitrose" },
  { src: "/alpinef1-logo.png", alt: "Alpine F1 Team" },
];

const scopeGroups = [
  {
    category: "Fans & Drive",
    items: [
      { title: "Fan & Motor Replacement", body: "EC direct-drive or EC plug fans replacing belt-drive or failing motor arrangements. Variable speed control and reduced maintenance requirement." },
      { title: "Damper & Actuator Works", body: "Worn or seized damper blades, actuators, and linkages replaced. Full actuator stroke testing and recommissioning." },
    ],
  },
  {
    category: "Thermal Performance",
    items: [
      { title: "Coil Replacement", body: "Heating, cooling, and heat recovery coils measured, manufactured, and fitted in-situ. Gas burner to DX coil conversions also undertaken." },
      { title: "Humidifier Systems", body: "Steam generators, UV systems, and water treatment serviced or replaced to restore humidity control and air quality." },
    ],
  },
  {
    category: "Enclosure & Filtration",
    items: [
      { title: "Casing & Insulation", body: "Corroded panels, failed insulation, and unsealed joints repaired or replaced. Tested for thermal performance and airtightness." },
      { title: "Filter Section Upgrade", body: "Filter housings and filter media upgraded to current efficiency classifications. Improved filtration without airflow restriction." },
    ],
  },
  {
    category: "Controls & Services",
    items: [
      { title: "Controls Modernisation", body: "Obsolete controls replaced with modern DDC systems, with BMS integration and fault diagnostics included as standard." },
      { title: "Pipework & Commissioning", body: "All associated pipework, insulation, and pressure testing completed. Full recommissioning to design specification with documentation." },
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Site Survey & Condition Assessment",
    body: "We inspect the AHU on site to understand condition, performance, and refurbishment potential.",
    points: [
      "Inspect fans, coils, controls, casing",
      "Identify failure points and inefficiencies",
      "Confirm refurbishment viability"
    ]
  },
  {
    n: "02",
    title: "Technical Specification",
    body: "We define a clear scope of works based on site condition and performance requirements.",
    points: [
      "Component-level scope defined",
      "Energy and compliance requirements included",
      "Fixed, agreed specification before works begin"
    ]
  },
  {
    n: "03",
    title: "On-Site Refurbishment Works",
    body: "Our engineers carry out all works on site using a structured, phased approach.",
    points: [
      "EC fan, coil, and component upgrades",
      "Minimal disruption to building operations",
      "All works delivered by in-house team"
    ]
  },
  {
    n: "04",
    title: "Testing & Handover",
    body: "We test, balance, and commission the system to ensure full operational performance.",
    points: [
      "System performance verification",
      "Compliance and efficiency checks",
      "Full handover documentation provided"
    ]
  }
];

const faqs = [
  {
    q: "How much does refurbishment cost compared to replacement?",
    a: "Typically 30 to 50% of the cost of a new unit. The exact figure depends on size and condition. We provide a fixed-price, itemised quote following the survey so you have a clear cost basis before committing.",
  },
  {
    q: "Will operations need to stop during the works?",
    a: "Not necessarily. Many refurbishments are staged so ventilation remains live throughout. Where a shutdown is unavoidable, we programme it around your operational hours, including nights or weekends.",
  },
  {
    q: "How many years does refurbishment add to the unit's lifespan?",
    a: "Typically 10 to 15 years, depending on the structural condition and scope of works. We confirm this at survey stage. If refurbishment is not economically sound, we will tell you.",
  },
  {
    q: "Can refurbishment support Part L compliance or net zero commitments?",
    a: "Yes. Works are specified to meet current Part L efficiency standards where applicable. EC fan conversion, heat recovery coil installation, and controls integration can all be incorporated into the refurbishment scope to support decarbonisation targets. For healthcare sites, HTM 03-01 compliance is confirmed at specification stage.",
  },
  {
    q: "When would replacement be the better option?",
    a: "When the structural frame or core casing is beyond economic repair. We assess this at survey stage and provide an honest recommendation. There is no commercial incentive for us to favour one route over the other.",
  },
];

/* ── PAGE ─────────────────────────────────────────────────────────────── */

export default function AHURefurbishmentPage() {
  return (
    <div>

      {/* ── 1. HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/ahu-refurbishment-hero.png"
          alt="Belt-driven fan inside an ageing air handling unit prior to BVS refurbishment works"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 via-[50%] to-black/20" />

        <Container className="relative flex min-h-[520px] items-center py-14 pb-28 sm:min-h-[600px] sm:py-20 sm:pb-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              AHU Refurbishment
            </p>
            <h1
              className="font-display text-2xl font-extrabold uppercase leading-[1.08] text-white sm:text-5xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Extend Asset Life & <br />Avoid Replacement Cost.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-white/85" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              Survey, specification, and all works delivered on-site by a specialist engineering team. Fixed price, itemised scope, minimal disruption to your operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Request a survey
                <ArrowIcon />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                How it works
                <ChevronDownIcon />
              </a>
            </div>
          </div>
        </Container>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "Cost-Effective", label: "Alternative" },
                { stat: "10–15 Yrs", label: "Asset Life Extended" },
                { stat: "Trusted", label: "AHU Engineers" },
              ].map((s) => (
                <div key={s.label} className="px-2 text-center sm:px-6">
                  <p className="font-display text-sm font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-wide text-white/55 sm:text-[10px]">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-7 sm:py-10">
        <Container>
          <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Trusted by leading UK organisations
          </p>
          <div className="overflow-x-auto no-scrollbar sm:overflow-visible">
            <div className="flex sm:grid sm:grid-flow-col sm:auto-cols-max sm:justify-center gap-x-8 min-w-max sm:min-w-0 pl-4 pr-16 sm:px-0">
              {clientLogos.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  unoptimized
                  className="h-14 w-auto shrink-0 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                />
              ))}
            </div>
          </div>
          <p className="mt-3 text-end text-[10px] text-slate-300 sm:hidden">
            Swipe to see more →
          </p>
        </Container>
      </section>

      {/* ── 2. QUICK ASSESSMENT ────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start">

            {/* LEFT */}
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                Quick assessment
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                Is Refurbishment<br />Right for Your AHU?
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                Refurbishment is typically suitable when the structural frame is sound but performance, efficiency, or compliance is the issue.
                If several of the points below apply, a condition survey is the next step.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:text-[#1d5c42]"
                >
                  Book a condition survey →
                </Link>
              </div>
            </ScrollReveal>

            {/* RIGHT */}
            <ScrollReveal delay={80}>
              <ul className="flex flex-col gap-3">
                {[
                  "Structurally sound but failing performance or efficiency targets",
                  "Rising energy use due to fan, coil, or controls issues",
                  "Visible wear, corrosion, or recurring component failure",
                  "Non-compliance with HTM 03-01, Part L, or decarbonisation targets",
                  "Replacement has been quoted but frame remains viable",
                  "Transitioning from gas heating to DX or heat pump systems",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-l-2 border-[#297858] bg-white/5 px-4 py-3"
                  >
                    <CheckIcon className="mt-1 shrink-0" />
                    <span className="text-sm text-white/80 leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── 3. THE CASE FOR REFURBISHMENT ─────────────────────────────── */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                The case for refurbishment
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
                A Practical Alternative to Full Replacement
              </h2>
              <div className="mx-auto mt-4 h-[3px] w-10 bg-[#297858]" />
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                In most cases, full replacement is not the only option. Refurbishment restores performance by replacing only what has failed, keeping the structural system in place.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={80}>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">

              {/* Full replacement */}
              <div className="border border-slate-200 bg-white p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Full replacement
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-500">
                  <p>High capital cost</p>
                  <p>Major disruption to operations</p>
                  <p>Full removal and installation required</p>
                  <p>Long lead times</p>
                </div>
                <p className="mt-6 text-sm font-semibold text-slate-400">Often more than required</p>
              </div>

              {/* Refurbishment */}
              <div className="relative overflow-hidden bg-[#111418] p-6 sm:p-8 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-[#297858]/20 to-transparent" />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#297858]">
                    Refurbishment
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-white/80">
                    <p>Lower cost</p>
                    <p>On-site delivery, minimal disruption</p>
                    <p>Existing system retained</p>
                    <p>Faster turnaround</p>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-white">Targeted, Efficient, Sustainable.</p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 4. WHAT'S INCLUDED ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              What is AHU refurbishment
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              Engineering Inspection &amp; Component Renewal
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              AHU refurbishment is a technical inspection-led process where engineers assess and upgrade key system components to restore performance, efficiency, and reliability.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Fans", desc: "Assess motor condition, efficiency, and airflow performance. Upgrade to EC where required." },
              { title: "Coils", desc: "Inspect heating and cooling performance, corrosion, leaks, and heat transfer efficiency." },
              { title: "Controls", desc: "Evaluate BMS integration, sequencing, and energy efficiency performance." },
              { title: "Dampers", desc: "Check operation, sealing, and airflow control accuracy." },
              { title: "Filters & Seals", desc: "Assess filtration condition, air leakage, and system integrity." },
              { title: "Casing & Corrosion", desc: "Inspect structural integrity, corrosion damage, and long-term durability." },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[#297858] bg-surface-2 p-5">
                <p className="text-sm font-bold text-slate-900">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. HOW IT WORKS ─────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-12 max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              How it works
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              From Survey to Handover
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              A fixed four-step process delivered by the same engineering team throughout, from first inspection through to final sign-off.
            </p>
          </ScrollReveal>

    {/* DESKTOP FLOW */}
    <div className="hidden lg:flex items-stretch">

      {steps.flatMap((step, i) => {
        const items = [
          <ScrollReveal key={step.n} delay={i * 60} className="flex-1">
            <div className="flex h-full flex-col bg-white p-8 shadow-sm">

              {/* STEP HEADER */}
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center bg-[#111418]">
                  <span className="font-display text-sm font-extrabold text-white">
                    {step.n}
                  </span>
                </div>

                <h3 className="font-display text-sm font-extrabold uppercase text-slate-900 leading-snug">
                  {step.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-xs text-slate-500">
                {step.body}
              </p>

              {/* DIVIDER */}
              <div className="my-5 h-px w-full bg-slate-100" />

              {/* BULLETS */}
              <ul className="space-y-2">
                {step.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[11px]  text-slate-400">
                    <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

            </div>
          </ScrollReveal>,
        ];

        if (i < steps.length - 1) {
          items.push(
            <div
              key={`arrow-${i}`}
              className="flex w-10 shrink-0 items-center justify-center bg-slate-100"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="#297858"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          );
        }

        return items;
      })}

    </div>

    {/* MOBILE FLOW */}
    <div className="flex flex-col lg:hidden">

      {steps.map((step, i) => (
        <div key={step.n}>

          <ScrollReveal delay={i * 60}>
            <div className="bg-white p-6 shadow-sm">

              {/* HEADER */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#111418]">
                  <span className="font-display text-sm font-extrabold text-white">
                    {step.n}
                  </span>
                </div>

                <h3 className="font-display text-sm font-extrabold uppercase text-slate-900">
                  {step.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-xs leading-6 text-slate-500">
                {step.body}
              </p>

              {/* BULLETS */}
              <ul className="mt-4 space-y-2">
                {step.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[11px] leading-5 text-slate-400">
                    <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

            </div>
          </ScrollReveal>

          {i < steps.length - 1 && (
            <div className="flex justify-center py-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 5v14M5 12l7 7 7-7"
                  stroke="#297858"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}

        </div>
      ))}

    </div>

          <ScrollReveal delay={100}>
            <div className="mt-8 grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4">
              {[
                "Phased delivery available",
                "Out-of-hours and weekend works",
                "No temporary plant required",
                "HTM 03-01 and Part L capable",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 bg-white px-5 py-4">
                  <CheckIcon />
                  <span className="text-xs font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 6. CASE STUDY ───────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-start">

            {/* LEFT */}
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                Case study
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                NHS Hospital<br />12 AHU Programme
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                12 ageing hospital AHUs required full performance recovery across a live NHS environment with strict operational constraints and no tolerance for downtime.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="border-l-2 border-white/15 pl-4">
                  <span className="text-sm text-white/55">Live clinical environment, no ward shutdowns permitted</span>
                </div>
                <div className="border-l-2 border-white/15 pl-4">
                  <span className="text-sm text-white/55">Works sequenced around occupancy and operational schedules</span>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/55">
                Delivered through EC fan upgrades, coil replacements, and controls modernisation across all 12 units without disrupting hospital operations.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm font-bold text-white">100% HTM 03-01 compliance restored across all units</span>
                </div>
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm text-white/80">Delivered on programme with zero disruption to clinical operations</span>
                </div>
              </div>
              <div className="mt-7">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                >
                  View all case studies
                  <ArrowIcon />
                </Link>
              </div>
            </ScrollReveal>

            {/* RIGHT IMAGE */}
            <ScrollReveal delay={80}>
              <div className="relative h-full min-h-[420px] overflow-hidden shadow-lg lg:min-h-[520px]">
                <Image
                  src="/hospital.png"
                  alt="NHS hospital corridor — BVS refurbished 12 AHUs across this live clinical site with zero service disruption"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── 7. FAQ ─────────────────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} />

      {/* ── 8. FINAL CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* LEFT */}
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                Speak to an engineer
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
                Request a<br />Refurbishment Survey
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                Send us your AHU details and we&apos;ll assess whether refurbishment is viable, what scope is required, and expected performance gains.
              </p>
              <div className="mt-7 space-y-3 border-l border-white/10 pl-5">
                <p className="text-sm text-white/60">40+ years engineering experience across NHS, FM and commercial estates</p>
                <p className="text-sm text-white/60">Manufacturer-level understanding of AHU systems and components</p>
                <p className="text-sm text-white/60">Cost-led approach: refurbish where viable, replace only when required</p>
                <p className="text-sm text-white/60">Direct response from engineers, not sales handlers</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6">
                <a
                  href="tel:01256518170"
                  className="inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <PhoneIcon />
                  01256 518170
                </a>
                <a
                  href="mailto:info@bvs-ltd.co.uk"
                  className="inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <MailIcon />
                  info@bvs-ltd.co.uk
                </a>
              </div>
            </ScrollReveal>

            {/* RIGHT: FORM */}
            <ScrollReveal delay={80}>
              <div className="relative overflow-hidden border border-slate-100 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#297858]" />
                  <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-slate-900" />
                </div>
                <div className="relative">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">Enquiry</p>
                  <div className="mt-3 h-[2px] w-10 bg-[#297858]" />
                  <p className="mt-5 text-sm leading-6 text-slate-500">
                    Send us the make, model, age and issue you&apos;re experiencing. Our engineering team will respond with a practical refurbishment view within one working day.
                  </p>
                  <div className="mt-7">
                    <QuickQuoteForm />
                  </div>
                  <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                      Engineering response within 24 working hours
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                      Technical review by AHU specialists (not sales team)
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── 9. RELATED SERVICES ────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-14">
        <Container>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
            Related services
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
              { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
              { href: "/air-handling-unit-manufacturing", label: "AHU Manufacturing" },
              { href: "/air-handling-unit-controller-solutions-upgrades", label: "Controller Upgrades" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 transition-all duration-200 hover:border-[#297858] hover:bg-slate-50"
              >
                <span className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-300 transition-colors group-hover:bg-[#297858]" />
                  {l.label}
                </span>
                <span className="text-slate-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#297858]">
                  →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}

/* ── ICONS ───────────────────────────────────────────────────────────── */

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`shrink-0 text-[#297858] ${className}`}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
