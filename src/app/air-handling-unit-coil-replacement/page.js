import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
export const metadata = {
  title: "AHU Coil Replacement | BVS Building Ventilation Solutions",
  description:
    "Measure-to-fit AHU coil replacement for any make or model. Heating, cooling, heat recovery, and frost coils sourced or manufactured and installed across the UK.",
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
    q: "Can you replace coils in any AHU make or model?",
    a: "Yes. We work with all makes and models — including obsolete units where the original manufacturer no longer supports the equipment. Provided we can measure the existing coil, we can source or manufacture a replacement.",
  },
  {
    q: "How long does a coil replacement take?",
    a: "For a straightforward single-coil replacement in an accessible unit, typically one to two days on site. Larger or more complex units with multiple coils, poor access, or requiring bespoke manufacture will take longer — we confirm programme at quotation stage.",
  },
  {
    q: "What coil types do you replace?",
    a: "Heating coils (LTHW and steam), chilled water cooling coils, DX coils, heat recovery coils, and frost coils. If it sits inside an AHU and transfers heat, we can replace it.",
  },
  {
    q: "Do you manufacture coils, or just source them?",
    a: "Both. For standard sizes we source from UK suppliers with short lead times. For non-standard, obsolete, or performance-critical applications, we have coils manufactured to exact specification.",
  },
  {
    q: "Can a coil failure be treated as an emergency?",
    a: "We handle emergency coil replacements where the AHU is out of service or environmental control is compromised. Lead time depends on coil type and whether a standard or bespoke coil is required — contact us directly to discuss urgency.",
  },
  {
    q: "What causes coil failure?",
    a: "Corrosion from aggressive water chemistry or condensate, physical damage from debris ingestion, frost damage from failed freeze protection, and age-related tube erosion are the most common causes. We inspect and advise at survey stage.",
  },
];

function Factory({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 21V10l7 3V10l7 3V6h4v15H3z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Ruler({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 7l14-4 4 14-14 4L3 7z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M7 9l6-2m-4 6l6-2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

function TrendingDown({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 7l7 7 4-4 7 7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 17v-4h-4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CoilReplacementPage() {
  return (
    <div>

    {/* ── 1. HERO ── improved mobile readability + simpler capability signals ───────── */}
<section className="relative overflow-hidden bg-[#111418] py-10 sm:py-16">

{/* Background image */}
<div className="absolute inset-0">
  <Image
    src="/ahu-coil-replacement.png"
    alt="AHU coil replacement"
    fill
    priority
    className="object-cover object-center"
  />

  {/* Stronger mobile readability overlay */}
  <div className="absolute inset-0 bg-[#111418]/70 sm:bg-[#111418]/55" />
</div>

<Container className="relative z-10 flex min-h-[420px] items-end pb-6 sm:pb-10">
  <div className="grid gap-10 lg:grid-cols-2 lg:items-end w-full">

    {/* Left content */}
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
        AHU Coil Replacement & Repair
      </p>

      <h1 className="font-display text-3xl font-extrabold uppercase leading-[1.05] text-white sm:text-5xl">
        Coils Matched to Your System
      </h1>

      <div className="mt-5 h-[3px] w-14 bg-[#297858]" />

      <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/70">
        Existing coils surveyed and replacement units sourced or manufactured
        to suit your AHU dimensions, performance requirements, and operating conditions.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#enquire"
          className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
        >
          Discuss your replacement options
        </a>

        <a
          href="#problem"
          className="inline-flex items-center gap-2 border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
        >
          Learn more
          <ArrowDownIcon className="h-4 w-4" />
        </a>
      </div>
    </div>

    {/* Capability signals (simplified + more scannable) */}
    <div className="grid gap-2 lg:ml-auto max-w-md">

      {[
        {
          label: "Any Make or Model",
          detail: "Works with obsolete and unsupported AHUs",
        },
        {
          label: "Site Measured",
          detail: "Designed from real system dimensions",
        },
        {
          label: "Made to Match",
          detail: "Custom replacement coil manufacturing",
        },
        {
          label: "Emergency Replacement",
          detail: "Fast turnaround for failed or leaking coils",
        },
        {
          label: "System Conversion",
          detail: "Gas / LTHW to DX coil conversions",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="flex items-start gap-3 border-l-2 border-[#297858]/60 bg-white/5 px-4 py-3 backdrop-blur-sm"
        >
          <div className="mt-[6px] h-2 w-2 flex-shrink-0 rounded-full bg-[#297858]" />

          <div>
            <p className="text-sm font-semibold text-white">
              {item.label}
            </p>

            <p className="text-xs leading-5 text-white/55">
              {item.detail}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>
</Container>
</section>


<section className="border-b border-slate-100 bg-white py-7 sm:py-10">
  <Container>
    <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
      Trusted by leading UK organisations
    </p>

    <div className="relative">
  {/* Left fade */}
  <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent sm:hidden" />

  {/* Right fade */}
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

      {/* ── 2. PROBLEM ── 3 pain points ─────────────────────────────────── */}
      <section className="bg-[#0e1115] py-14 sm:py-16" id="problem">
  <Container>
    <ScrollReveal className="mb-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        Why it's rarely straightforward
      </p>

      <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
        Common Coil Replacement Issues
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="grid gap-4 sm:grid-cols-3">
      {[
  {
    n: "01",
    icon: Factory,
    heading: "Discontinued Equipment",
    body:
      "Original manufacturers no longer support many legacy AHUs. We survey on site and match performance exactly.",
  },
  {
    n: "02",
    icon: Ruler,
    heading: "Non-Standard Sizes",
    body:
      "Coils rarely match catalogue dimensions. We manufacture to exact measurements and connection points.",
  },
  {
    n: "03",
    icon: TrendingDown,
    heading: "Performance Loss",
    body:
      "Coils degrade gradually, increasing energy use long before visible failure occurs.",
  },
].map((item) => {
        const Icon = item.icon;

        return (
          <ScrollReveal key={item.n} className="h-full">
            <div className="relative h-full overflow-hidden border border-white/10 bg-white/5 p-6 backdrop-blur-sm">

              {/* number watermark */}
              <span className="absolute right-5 top-4 font-display text-4xl font-extrabold text-white/30">
                {item.n}
              </span>

              {/* icon (your system) */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#297858]/10 text-[#297858]">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </div>

              {/* heading */}
              <h3 className="mt-5 font-display text-sm font-extrabold uppercase text-white">
                {item.heading}
              </h3>

              {/* body */}
              <p className="mt-2 text-sm leading-6 text-white/60">
                {item.body}
              </p>
            </div>
          </ScrollReveal>
        );
      })}
    </div> 
  </Container>
</section>

{/* ── 3. SOLUTION ── Measure → Source/Build → Fit flow ────────────── */}
<section className="bg-[#f5f7f6] py-16 sm:py-20">
  <Container>
    <ScrollReveal className="mb-10">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        How we solve it
      </p>

      <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-slate-900 sm:text-3xl">
        Measure, Source or Build, Fit.
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="grid gap-5 sm:grid-cols-3">
      {[
        {
          step: "01",
          icon: Ruler,
          heading: "On-Site Survey",
          body:
            "Existing coils are surveyed on site, including dimensions, pipework positions, casing clearances, and operating conditions.",
          points: [
            "Dimensions recorded on site",
            "Performance requirements assessed",
            "Access constraints reviewed",
          ],
        },
        {
          step: "02",
          icon: Factory,
          heading: "Source or Manufacture",
          body:
            "Standard coils are sourced where suitable. Non-standard or obsolete coils are manufactured to match the existing system.",
          points: [
            "Standard coils sourced quickly",
            "Custom coils built to specification",
            "Performance matched to duty",
          ],
        },
        {
          step: "03",
          icon: Wrench,
          heading: "Installation & Testing",
          body:
            "Replacement coils are fitted, pressure tested, insulated, and returned to service with performance checks completed.",
          points: [
            "Pipework connected and tested",
            "Insulation reinstated",
            "System performance verified",
          ],
        },
      ].map((item, i) => {
        const Icon = item.icon;

        return (
          <ScrollReveal key={item.step} delay={i * 80} className="h-full">
            <div className="flex h-full flex-col border border-slate-200 bg-white p-7 shadow-sm">

              {/* top row */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#297858]/10 text-[#297858]">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>

                <span className="font-display text-4xl font-extrabold text-[#297858]/10">
                  {item.step}
                </span>
              </div>

              {/* heading */}
              <h3 className="mt-5 font-display text-base font-extrabold uppercase text-slate-900">
                {item.heading}
              </h3>

              {/* body */}
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.body}
              </p>

              {/* points */}
              <ul className="mt-5 space-y-3">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-slate-500"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  </Container>
</section>

      {/* ── 4. BENEFITS ── coil types + 4 capability cards ───────────────── */}
      <section className="bg-[#f7f6f5] py-16 sm:py-20">
  <Container>

    <ScrollReveal className="mb-10">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        What we replace
      </p>
      <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
        Every Coil Type Covered
      </h2>
      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    {/* Coil types - improved mobile layout */}
    <div className="mb-12">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {[
          "LTHW Heating",
          "Steam Heating",
          "Chilled Water",
          "DX Refrigerant",
          "Heat Recovery",
          "Frost Protection",
          "Pre-Heat",
          "Run-Around",
        ].map((type) => (
          <div
            key={type}
            className="flex items-center gap-2 border border-slate-200 bg-white px-3 py-3"
          >
            <div className="h-1.5 w-1.5 flex-shrink-0 bg-[#297858]" />
            <span className="text-xs font-semibold leading-5 text-slate-700">
              {type}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* capability blocks */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          label: "Any manufacturer",
          detail:
            "All makes and models, including obsolete and discontinued units where parts are no longer available from the OEM.",
        },
        {
          label: "Bespoke manufacture",
          detail:
            "Non-standard dimensions manufactured to exact specification. Coil specified from site measurements.",
        },
        {
          label: "Emergency turnaround",
          detail:
            "For AHUs out of service, we prioritise survey, procurement, and installation.",
        },
        {
          label: "Full installation scope",
          detail:
            "Removal, fitting, pipework, testing, insulation reinstatement, and verification included.",
        },
      ].map((item, i) => (
        <ScrollReveal key={item.label} delay={i * 60}>
          <div className="border-t-2 border-[#297858] bg-white p-5">
            <p className="font-display text-sm font-extrabold uppercase text-slate-900">
              {item.label}
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              {item.detail}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>

  </Container>
</section> 

      {/* ── 5. SOCIAL PROOF ── Marriott case study, bg image ───────────── */}
      <section className="relative overflow-hidden bg-[#111418] py-20 sm:py-24">

<div className="absolute inset-0">
  <Image
    src="/hotel.png"
    alt="Marriott Forest of Arden swimming pool — BVS ventilation troubleshooting"
    fill
    className="object-cover opacity-80 scale-105"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-[#111418] via-[#111418]/50 to-[#111418]/40" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(17,20,24,0.2),rgba(17,20,24,0.85))]" />
</div>

<Container className="relative">
  <ScrollReveal>

    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
      Case study
    </p>

    <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
      Marriott Forest of Arden<br />
      Swimming Pool AHU
    </h2>

    <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">
      The AHU serving the hotel&apos;s swimming pool was designed to maintain 31°C — but had only ever reached 24°C. BVS validated the system, identified leaking 30-year-old ductwork, inadequate diffuser velocities, and AHU configuration issues, then delivered a full remediation scope to restore design performance.
    </p>

    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-2xl">
      {[
        { stat: "31°C", label: "Design target temp" },
        { stat: "24°C", label: "Achieved before survey" },
        { stat: "30 yrs", label: "Age of ductwork" },
        { stat: "4 Areas", label: "Issues identified & resolved" },
      ].map((item) => (
        <div
          key={item.label}
          className="border border-white/15 bg-white/10 px-4 py-5 backdrop-blur-sm"
        >
          <p className="font-display text-2xl font-extrabold text-[#297858]">
            {item.stat}
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-wider text-white/50">
            {item.label}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-10 flex flex-wrap items-center gap-6">
      <Link
        href="/case-studies/marriott-forest-of-arden-pool-ventilation"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] transition hover:text-white"
      >
        See full case study →
      </Link>
      <Link
        href="/case-studies"
        className="text-sm font-semibold text-white/60 transition hover:text-white"
      >
        All case studies →
      </Link>
    </div>

  </ScrollReveal>
</Container>
</section>
      {/* ── 6. HOW IT WORKS ── 4-step process ───────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              How it works
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              From Survey to<br />Return to Service
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                title: "Site Visit & Measurement",
                body: "We attend site to record existing coil dimensions, connection sizes, tube and fin arrangement, and flow rates.",
                points: ["Face dimensions and clearances measured", "Connection sizes and flow rates recorded", "Tube/fin pitch and material spec confirmed"],
              },
              {
                n: "02",
                title: "Source or Manufacture",
                body: "Where a direct replacement exists, we source it. Where not — or where performance can be improved — we manufacture to order.",
                points: ["Standard sizes sourced with short lead time", "Bespoke manufacture for non-standard units", "Performance matching verified against original duty"],
              },
              {
                n: "03",
                title: "Replacement Works",
                body: "Old coil removed, casing cleaned, replacement fitted including pipework, pressure testing, and insulation.",
                points: ["Casing cleaned and inspected", "Pipework connections made and pressure tested", "Insulation and access panels reinstated"],
              },
              {
                n: "04",
                title: "Test & Commission",
                body: "Flow rates set and verified. Controls checked. AHU returned to service with performance confirmed.",
                points: ["Flow rates balanced against design", "Controls and valve operation checked", "Handover record and performance confirmation"],
              },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 60}>
                <div className="border border-slate-200 bg-[#f7f6f5] p-5">
                  <span className="font-display text-4xl font-extrabold text-[#297858]/15">{step.n}</span>
                  <h3 className="mt-2 font-display text-sm font-extrabold uppercase text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{step.body}</p>
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

      {/* ── 7. OFFER ── free coil survey ─────────────────────────────────── */}
      <section className="bg-[#f7f6f5] py-14">
        <Container>
          <ScrollReveal>
            <div className="border-2 border-[#297858] bg-white p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                    No-obligation offer
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
                    Coil Survey &<br />Specification
                  </h2>
                  <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Before any commitment, we attend site, measure the existing coil, and produce a full specification and quote — including sourcing and manufacture options with lead times.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {[
                      "Existing coil measured and specified on site",
                      "Sourcing and manufacture options with lead times",
                      "Quotation for full replacement scope",
                      "Emergency cases handled — contact us directly",
                      "No obligation to proceed",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckIcon className="mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3 lg:min-w-[200px]">
                  <a
                    href="#enquire"
                    className="inline-flex items-center justify-center gap-2 bg-[#297858] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                  >
                    Book a survey
                  </a>
                  <a
                    href="tel:01256518170"
                    className="inline-flex items-center justify-center gap-2 border border-slate-300 px-8 py-4 text-sm font-semibold text-slate-900 transition-colors hover:border-[#297858]"
                  >
                    <PhoneIcon /> 01256 518170
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 8. FINAL CTA ── urgent tone, phone prominent ─────────────────── */}
      <section id="enquire" className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Speak to an engineer
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
                Coil Failing?<br />Call or Enquire<br />Today.
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/60">
                If your AHU is out of service or environmental control is compromised, contact us directly. We handle emergency replacements and can advise on lead time based on coil type.
              </p>

              <div className="mt-6 border border-[#297858]/30 bg-[#297858]/10 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#297858]">For urgent enquiries</p>
                <a href="tel:01256518170" className="mt-3 flex items-center gap-3 font-display text-2xl font-extrabold text-white transition-colors hover:text-[#297858]">
                  <PhoneIcon /> 01256 518170
                </a>
              </div>

              <div className="mt-5 space-y-2.5 border-l border-white/10 pl-5">
                <p className="text-sm text-white/50">Any make, any model — including obsolete and discontinued units</p>
                <p className="text-sm text-white/50">Measure-to-fit: coils specified from site measurements, not model numbers</p>
                <p className="text-sm text-white/50">Standard sourcing and bespoke manufacture available</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="border border-white/10 bg-white/5 p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
                  Enquiry
                </p>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  Tell us the AHU make, approximate coil dimensions, and coil type if known. We&apos;ll respond with a practical view and lead time within one working day.
                </p>
                <div className="mt-6"><QuickQuoteForm /></div>
                <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 text-[11px] text-white/35">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Engineering response within 24 working hours
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-white/35">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Emergency — call directly for fastest response
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 9. FAQ ───────────────────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} />

      {/* ── RELATED SERVICES ─────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related services</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/air-handling-unit-manufacturing", label: "AHU Manufacturing" },
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
              { href: "/air-handling-unit-controller-solutions-upgrades", label: "Controller Upgrades" },
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
function ArrowDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Wrench({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
