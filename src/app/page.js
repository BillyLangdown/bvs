import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getCaseStudies } from "@/lib/wordpress/api";

/* ── DATA ───────────────────────────────────────────────────────────── */

const accreditationLogos = [
  { src: "/gas-safe-register-logo.webp", alt: "Gas Safe Registered" },
  { src: "/constructionline-gold-logo.webp", alt: "Constructionline Gold Member" },
  { src: "/safe-contractor-logo.webp", alt: "SafeContractor Approved Contractor" },
];

const clientLogos = [
  { src: "/nhs-logo.webp", alt: "NHS" },
  { src: "/disney-logo.webp", alt: "Disney" },
  { src: "/marriott-logo.webp", alt: "Marriott Hotels" },
  { src: "/moorfields-logo.webp", alt: "Moorfields Eye Hospital" },
  { src: "/ihg-logo.webp", alt: "IHG Hotels & Resorts" },
  { src: "/travelodge-logo.webp", alt: "Travelodge" },
  { src: "/waitrose-logo.webp", alt: "Waitrose" },
  { src: "/westfield-logo.webp", alt: "Westfield" },
  { src: "/fenwick-logo.webp", alt: "Fenwick" },
  { src: "/freedomleisure-logo.webp", alt: "Freedom Leisure" },
  { src: "/queenmary-logo.webp", alt: "Queen Mary University" },
  { src: "/alpinef1-logo.webp", alt: "Alpine F1 Team" },
];

const services = [
  {
    title: "EC Fan Upgrades",
    plain: "Retrofit EC fans into existing AHU casings without structural modification.",
    outcome: "Reduce fan energy use by 30–50%",
    context: "Improves efficiency, enables variable speed control, and supports Part L compliance. Typical payback 2–3 years.",
    signs: [
      "High fan energy use or failure to meet efficiency targets",
      "Constant-speed or belt-driven motors still in operation",
      "No variable speed control on current system",
      "No redundancy or backup fan option in current configuration"
    ],
    href: "/ec-fan-upgrades-and-retrofits-for-hvac",
    highlight: true,
    tag: "Most Requested",
    photo: "/ec-fan-upgrade.webp",
    photoAlt: "EC fan retrofit installed in existing AHU casing",
  },
  {
    title: "Coil Replacement",
    plain: "On-site measurement and direct replacement of heating, cooling, or heat recovery coils.",
    outcome: "Restore full heating and cooling performance",
    context: "Manufactured to exact dimensions with staged replacement available to maintain system operation.",
    signs: [
      "Air temperatures not reaching design levels",
      "Leaks, corrosion, or scaling on coil faces",
      "Reduced heating or cooling capacity",
      "Burst or fractured coil requiring urgent replacement"
    ],
    href: "/air-handling-unit-coil-replacement",
    highlight: true,
    tag: "Most Requested",
    photo: "/ahu-coil-replacement.webp",
    photoAlt: "Replacement coil being fitted into air handling unit on-site",
  },
  {
    title: "AHU Refurbishment",
    plain: "On-site refurbishment improving performance without full system replacement.",
    outcome: "Extend asset life and reduce replacement cost",
    context: "Supports efficiency improvements, compliance targets, and decarbonisation goals.",
    signs: [
      "Unit is ageing or underperforming",
      "Replacement has been quoted but structure is sound",
      "Airflow, heating, or cooling is inconsistent"
    ],
    href: "/air-handling-unit-refurbishment",
    highlight: false,
    tag: null,
    photo: "/ahu-refurbishment-worker.webp",
    photoAlt: "BVS engineer refurbishing an air handling unit on-site",
  },
  {
    title: "AHU Manufacturing",
    plain: "Custom-built air handling units for replacement or new installation.",
    outcome: "New units built to specification for performance and compliance",
    context: "Full replacement solution when existing systems are beyond repair or no longer suitable.",
    signs: [
      "Unit is beyond economic repair",
      "Non-standard size or specification required",
      "New build or system replacement project"
    ],
    href: "/air-handling-unit-manufacturing",
    highlight: false,
    tag: null,
    photo: "/ahu-manufacturing2.webp",
    photoAlt: "Custom AHU being manufactured in the BVS workshop",
  },
  {
    title: "AHU Installation",
    plain: "Complete supply and installation of air handling systems from survey to commissioning.",
    outcome: "Single point delivery from design through to handover",
    context: "Managed installation for new builds, upgrades, or full system replacement projects.",
    signs: [
      "New or replacement system required",
      "Full project delivery needed",
      "No existing installation contractor in place"
    ],
    href: "/air-handling-unit-installation",
    highlight: false,
    tag: null,
    photo: "/ahu-installation.webp",
    photoAlt: "Air handling unit being installed on a commercial site",
  },
  {
    title: "Controller Upgrades",
    plain: "Upgrade obsolete AHU controls to modern energy-efficient systems.",
    outcome: "Improved efficiency, control, and compliance capability",
    context: "Supports energy reduction targets and integration with modern building management systems.",
    signs: [
      "Controls are outdated or failing",
      "Energy usage is not optimised",
      "BMS integration is required"
    ],
    href: "/air-handling-unit-controller-solutions-upgrades",
    highlight: false,
    tag: null,
    photo: "/ahu-controller.webp",
    photoAlt: "AHU controller upgrade — modern controls panel installed in air handling unit",
  },
];

const additionalServices = [
  {
    title: "Validation Surveys",
    desc: "HTM 03-01 audits, Part L compliance checks, and system condition assessments. Full documented report with prioritised findings.",
    href: "/solutions/ventilation/validation-surveys",
  },
  {
    title: "Ducting Repair & Replacement",
    desc: "Uneven airflow, pressure loss, or visible duct damage? We repair or replace ductwork sections with minimal disruption to operations.",
    href: "/solutions/ventilation/ducting-repair-replacement",
  },
  {
    title: "Troubleshooting",
    desc: "Ventilation performance or compliance issues that need diagnosing. We identify root causes and provide a clear remedial plan.",
    href: "/solutions/ventilation/troubleshooting",
  },
  {
    title: "Commercial Boiler Services",
    desc: "Gas Safe registered boiler installation, servicing, and repair. Planned and reactive cover for commercial heating systems.",
    href: "/solutions/mechanical/commercial-boiler-heating",
  },
  {
    title: "Commercial Pipework",
    desc: "Installation, maintenance, and repair of commercial pipework systems — HVAC circuits, heating mains, and associated insulation.",
    href: "/solutions/mechanical/industrial-pipework",
  },
];

const sectors = [
  { label: "Healthcare & NHS", desc: "HTM 03-01 compliant. Critical environments.", href: "/industries/hospital", photo: "/hospital.webp", photoAlt: "NHS hospital corridor — BVS ventilation works in live clinical environments" },
  { label: "Education", desc: "Around term times. CIBSE-compliant.", href: "/industries/education", photo: "/school.webp", photoAlt: "School building — BVS AHU works scheduled around term times" },
  { label: "Hotels", desc: "Out-of-hours. Minimum disruption to operations.", href: "/industries/hotel", photo: "/hotel.webp", photoAlt: "Hotel interior — BVS ventilation services with out-of-hours delivery" },
  { label: "Defence", desc: "Security cleared. Restricted access sites.", href: "/industries/defence", photo: "/defence.webp", photoAlt: "Defence facility — BVS security-cleared engineers for restricted-access sites" },
  { label: "Leisure Centres", desc: "High-humidity. Corrosion-resistant spec.", href: "/industries/leisure-centre", photo: "/swimming-pool.webp", photoAlt: "Swimming pool leisure centre — BVS high-humidity AHU specification" },
  { label: "Retail & Commercial", desc: "Around trading hours. Reactive support.", href: "/industries/retail", photo: "/mall.webp", photoAlt: "Shopping centre retail environment — BVS ventilation works around trading hours" },
];

const casePlaceholders = [
  {
    type: "EC Fan Upgrade",
    sector: "Leisure Centre",
    outcome: "Dorset leisure centre AHU was suffering fan failures and uncontrolled humidity across the pool hall. BVS retrofitted direct-drive EC fans, restoring full airflow and eliminating belt-driven maintenance overhead.",
    photo: "/dorset-leisure-centre-case-study.webp",
    photoAlt: "Dorset leisure centre AHU — EC fan upgrade carried out by BVS",
    href: "/case-studies/leisure-centre-dorset-ec-fan-upgrade",
  },
  {
    type: "AHU Refurbishment",
    sector: "Healthcare",
    outcome: "NHS Hammersmith & Fulham AHUs refurbished to full specification — covering fan repairs, corrosion treatment, damper replacement, and new components, completed without disruption to clinical services.",
    photo: "/nhs-hammersmith-fulham-case-study.webp",
    photoAlt: "NHS Hammersmith & Fulham — AHU refurbishment carried out by BVS",
    href: "/case-studies/nhs-hammersmith-ahu-refurbishment",
  },
  {
    type: "AHU Manufacturing",
    sector: "Hotel",
    outcome: "Warner Leisure Hotel's Gunton Hall required a bespoke replacement AHU for their swimming pool — tailor-made for a constrained plantroom, delivered in flatpack, and commissioned with a Trend controls panel.",
    photo: "/warner-hotel-gunton-case-study.webp",
    photoAlt: "Warner Leisure Hotel Gunton Hall — bespoke AHU manufactured and installed by BVS",
    href: "/case-studies/warner-leisure-hotel-gunton-hall-ahu",
  },
];

/* ── PAGE ───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div>

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/ahu-manufacturing2.webp"
          alt="BVS air handling unit manufacturing workshop"
          fill
          priority
          className="object-cover object-[65%_15%] sm:object-[40%_55%]"
        />
        {/* Mobile: solid dark base so text is always legible */}
        <div className="absolute inset-0 bg-black/55 sm:hidden" />
        {/* Desktop: left-to-right gradient, fades to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 via-[45%] to-transparent" />

        <Container className="relative flex min-h-[620px] items-center py-14 pb-28 sm:min-h-[600px] sm:py-20 sm:pb-20">
        <div className="max-w-3xl lg:max-w-5xl">
            {/* Stacked text */}


           
            <div className="flex items-center gap-4 mb-6">

{/* Divider */}
<div className="hidden sm:block h-15 w-px bg-white/30" />

{/* Stacked brand text */}
<span className="hidden sm:flex flex-col text-[18px] leading-[1.1] uppercase tracking-[0.15em] text-white">
  <span>Building</span>
  <span>Ventilation</span>
  <span>Solutions</span>
</span>

</div>
          
            <h1
              className="font-display text-3xl font-extrabold uppercase leading-[1.08] text-white sm:text-4xl lg:text-6xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
           Better Airflow,<br/> Lower Energy Costs.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-white" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              AHU refurbishment, EC fan upgrades, coil replacement, new installation, and controls. <br/>
              Trusted by NHS, Disney, and Marriott. Serving HVAC contractors, M&amp;E consultants, and estates teams UK-wide.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Discuss your project
                <ArrowIcon />
               
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Our Services
                <ArrowDownIcon />
              </Link>
            </div>
          </div>
        </Container>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "40+", label: "Years Experience" },
                { stat: "Nationwide", label: "UK Coverage" },
                { stat: "24-hr", label: "Response Time" },
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

      {/* ── 2. TRUST BAR ─────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-7 sm:py-10">
  <Container>

    <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
      Trusted by leading organisations
    </p>

    {/* LOGOS */}
    <div className="relative">
      {/* fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent sm:hidden" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent sm:hidden" />

      <div className="overflow-x-auto no-scrollbar sm:overflow-visible">
        <div className="flex sm:grid sm:grid-cols-6 lg:grid-cols-12 gap-x-8 gap-y-6 min-w-max sm:min-w-0 px-4 sm:px-0">

          {clientLogos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              unoptimized
              className="h-12 w-auto object-contain mx-auto opacity-90 transition-opacity duration-300 hover:opacity-100 shrink-0"
            />
          ))}

        </div>
      </div>
    </div>

{/* SCROLL HINT BELOW */}
<div className="mt-4 flex items-center justify-center gap-2 text-slate-400 sm:hidden">

  <span className="text-[10px] font-semibold uppercase tracking-wider opacity-70">
    swipe to view more
  </span>

  <svg
    className="h-4 w-4 animate-pulse"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 6l6 6-6 6" />
  </svg>

</div>

  </Container>
</section>

      {/* ── 3. SERVICES ──────────────────────────────────────────────── */}
      <section
  id="services"
  className="relative overflow-hidden bg-[#f5f3ef] py-20 sm:py-24"
>
  <div className="absolute inset-0 opacity-[0.03]">
    <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#297858] blur-3xl" />
    <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-[#111418] blur-3xl" />
  </div>

  <Container className="relative">

    {/* INTRO */}
    <ScrollReveal className="mb-14 max-w-2xl">
  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#297858]">
    What we do
  </p>

  <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-[#111418] sm:text-3xl">
    Our Services
  </h2>

  <div className="mt-4 h-[3px] w-12 bg-[#297858]" />

  <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">
    AHU specialists covering refurbishment, EC fan upgrades, coil replacement, new installation, controls, and decarbonisation support.
  </p>

  <p className="mt-3 text-xs leading-6 text-slate-500">
  Not sure which service applies, or need something not listed here?{" "}
  <Link
    href="/contact"
    className="font-semibold text-[#297858] transition-colors hover:text-[#1d5c42]"
  >
    Speak directly with an engineer →
  </Link>
</p>
</ScrollReveal>
    
   {/* FEATURED */}
<div className="grid gap-6 lg:grid-cols-2">
  {services.filter((s) => s.highlight).map((s) => (
    <ScrollReveal key={s.title}>
      <Link
        href={s.href}
        className="group flex h-full flex-col overflow-hidden border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)]"
      >
        {/* IMAGE */}
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src={s.photo}
            alt={s.photoAlt || s.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* TAG */}
          {s.tag && (
            <div className="absolute left-5 top-5">
              <span className="bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#111418]">
                {s.tag}
              </span>
            </div>
          )}

          {/* TITLE */}
          <div className="absolute bottom-5 left-5 right-5">
            <h3 className="font-display text-2xl font-extrabold uppercase leading-tight text-white">
              {s.title}
            </h3>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col p-6">

          {/* OUTCOME */}
          <div className="border-l-2 border-[#297858] pl-4">
            <p className="text-[10px] font-bold uppercase  text-slate-400">
              Typical outcome
            </p>

            <p className="mt-1 text-base font-semibold leading-6 text-slate-900">
              {s.outcome}
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-5 text-sm leading-5 text-slate-600">
            {s.plain}
          </p>

          {/* INDICATORS */}
          <div className="mt-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Common indicators
            </p>

            <div className="mt-3 flex flex-col gap-2">
              {s.signs.slice(0, 3).map((sign) => (
                <div
                  key={sign}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <div className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#297858]" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto pt-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] transition-all duration-200 group-hover:gap-3">
              Learn more
              <ArrowIcon />
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  ))}
</div>

{/* FULL SERVICES */}
<div className="mt-20">
  <div className="mb-8 flex items-center gap-5">
    <div className="h-px flex-1 bg-black/10" />

    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
      Full service capability
    </p>

    <div className="h-px flex-1 bg-black/10" />
  </div>

  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
    {services.filter((s) => !s.highlight).map((s, i) => (
      <ScrollReveal key={s.title} delay={i * 40}>
        <Link
          href={s.href}
          className="group flex h-full flex-col overflow-hidden border border-black/5 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
        >
          {/* IMAGE */}
          <div className="relative h-44 overflow-hidden">
            <Image
              src={s.photo}
              alt={s.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-display text-[15px] font-extrabold uppercase leading-tight text-white">
                {s.title}
              </h3>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-1 flex-col p-5">


  {/* PRIMARY OUTCOME */}
  <p className="mt-2 text-[13px] font-semibold leading-5 text-slate-800">
    {s.outcome}
  </p>

  {/* KEY SIGNALS (only first 2 for scanning) */}
  <div className="mt-3 space-y-2">
    {s.signs.slice(0, 2).map((sign) => (
      <div
        key={sign}
        className="flex items-start gap-2 text-[12.5px] leading-5 text-slate-600"
      >
        <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
        <span>{sign}</span>
      </div>
    ))}
  </div>

  {/* CTA */}
  <div className="mt-auto pt-6">
    <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] transition group-hover:gap-3">
      Learn more <ArrowIcon />
    </div>
  </div>
</div>
        </Link>
      </ScrollReveal>
    ))}
  </div>
</div>

    {/* ADDITIONAL SERVICES */}
<div className="mt-16">
  <div className="mb-6 flex items-center gap-5">
    <div className="h-px flex-1 bg-black/10" />
    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
      Additional services
    </p>
    <div className="h-px flex-1 bg-black/10" />
  </div>

  <div className="space-y-3">
    {additionalServices.map((s, i) => (
      <ScrollReveal key={s.title} delay={i * 50}>
        <details className="group border border-black/10 bg-white transition hover:border-black/20">
          <summary className="flex cursor-pointer items-center gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center border border-black/10 bg-[#f5f3ef]">
              <AdditionalServiceIcon index={i} />
            </div>

            <div className="flex-1">
              <p className="text-sm font-bold uppercase text-slate-900">
                {s.title}
              </p>
              <p className="text-xs text-slate-500">
                {s.desc}
              </p>
            </div>

            <span className="text-slate-400 transition-transform group-open:rotate-180">
              ⌄
            </span>
          </summary>

          <div className="border-t border-black/10 px-4 py-4">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                  Overview
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-600">
                  {s.desc}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                  When it applies
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-600">
                  Used in system upgrades, compliance requirements, and performance optimisation where supporting works are required alongside core AHU changes.
                </p>
              </div>
            </div>

            <div className="mt-5 border-t border-black/10 pt-4">
              <Link
                href={s.href}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#297858] hover:text-[#1d5c42]"
              >
                Learn more <ArrowIcon />
              </Link>
            </div>
          </div>
        </details>
      </ScrollReveal>
    ))}
  </div>
</div>

  </Container>
</section>
     {/* ── 8. ACCREDITATIONS ────────────────────────────────────────── */}
     <section className="border-t border-slate-200 bg-white py-12 sm:py-14">
  <Container>

    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

      {/* LEFT CONTENT */}
      <div className="max-w-xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
          Accredited &amp; Approved
        </p>

        <h2 className="mt-3 text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">
          Certified for regulated HVAC and engineering works
        </h2>

        <div className="mt-5 h-[2px] w-10 bg-[#297858]" />

        <p className="mt-5 text-sm leading-6 text-slate-500">
        Gas Safe registered, Constructionline Gold certified, and SafeContractor approved.
        </p>
      </div>

      {/* LOGOS */}
      <div className="flex flex-wrap items-center justify-start gap-x-10 gap-y-6 lg:justify-end">
        {accreditationLogos.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            height={40}
            width={120}
            unoptimized
            className="h-15 w-auto object-contain  transition-opacity duration-300 hover:opacity-100"
          />
        ))}
      </div>

    </div>

  </Container>
</section>

      {/* ── 4. RECENT WORK ───────────────────────────────────────────── */}
      <section id="our-work" className="bg-surface-2 py-20">
        <Container>
          <ScrollReveal className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">Evidence of Work</p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
                Recent Projects
              </h2>
              <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            </div>
            <Link href="/case-studies" className="shrink-0 text-xs font-semibold text-slate-500 underline underline-offset-4 hover:text-[#297858]">
              View all case studies →
            </Link>
          </ScrollReveal>
          <CaseStudiesBlock />
        </Container>
      </section>

      {/* ── 5. BROCHURE ──────────────────────────────────────────────── */}
      <section className="overflow-hidden bg-[#111418] py-16 sm:py-20">
  <Container>
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_450px]">
      <ScrollReveal>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
          Free Download
        </p>
        <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
          AHU Specialists<br />Brochure
        </h2>
        <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
        <p className="mt-6 max-w-lg text-[15px] leading-7 text-white/65">
        Download our AHU refurbishment brochure, including survey examples, upgrade options, and energy-efficiency guidance.
        </p>
        <ul className="mt-6 flex flex-col gap-2.5">
          {[
            "AHU refurbishment options and typical scope of works explained",
            "What to expect from a BVS condition survey and condition report",
            "Part L, energy efficiency, and decarbonisation guidance",
          ].map((point) => (
            <li key={point} className="flex items-center gap-2.5 text-sm text-white/55">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            href="/bvs-brochure.webp"
            download="BVS-AHU-Specialists-Brochure"
            className="inline-flex items-center gap-2.5 bg-[#297858] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1d5c42]"
          >
            <DownloadIcon />
            Download Brochure
          </a>
          <p className="text-xs text-white/30">No email required · Instant download</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={120} className="flex justify-center lg:justify-end">
        <Image
          src="/bvs-brochure.webp"
          alt="BVS AHU Specialists Brochure"
          width={800}
          height={438}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="w-full"
        />
      </ScrollReveal>
    </div>
  </Container>
</section>

      {/* ── 6. SECTORS ───────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-16">
        <Container>
          <ScrollReveal className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">Industries</p>
              <h2 className="font-display text-xl font-extrabold uppercase text-slate-900">Sectors We Work In</h2>
            </div>
            <Link href="/industries" className="shrink-0 text-xs font-semibold text-[#297858] hover:underline">
              View all →
            </Link>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 50}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-lg"
                >
                  {s.photo && (
                    <div className="relative h-40 overflow-hidden bg-slate-900">
                      <Image
                        src={s.photo}
                        alt={s.photoAlt || s.label}
                        fill
                        unoptimized
                        className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    {!s.photo && <div className="mb-3 h-[3px] w-6 bg-slate-200 transition-all duration-300 group-hover:w-10 group-hover:bg-[#297858]" />}
                    <p className="font-display text-base font-extrabold uppercase text-slate-900 group-hover:text-slate-700">
                      {s.label}
                    </p>
                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{s.desc}</p>
                    <p className="mt-4 text-xs font-semibold text-[#297858] transition-colors group-hover:text-[#1d5c42]">
                      Learn more →
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. FINAL CTA ─────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <ScrollReveal>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                Ready to discuss your project?
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-white/65">
                Whether it&apos;s a planned refurbishment programme, emergency coil replacement, urgent fan failure, or a full new installation, we respond quickly and manage the entire project directly.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {["No obligation enquiry", "Response within one working day — direct from an engineer", "Speak directly with a specialist, not a sales team"].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
                    {p}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={100} className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#297858] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1d5c42]"
              >
                Discuss your project
                <ArrowIcon />
              </Link>
              <a
                href="tel:01256518170"
                className="inline-flex items-center justify-center gap-2 border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <PhoneIcon />
                01256 518170
              </a>
            </ScrollReveal>
          </div>
        </Container>
      </section>


    </div>
  );
}

/* ── CASE STUDIES (async) ────────────────────────────────────────────── */
async function CaseStudiesBlock() {
  let caseStudies = [];
  try {
    caseStudies = await getCaseStudies({ perPage: 3, revalidate: 300 });
  } catch {
    // WordPress not configured - use placeholders
  }

  const items = caseStudies.length ? caseStudies.slice(0, 3) : casePlaceholders;

  return (
    <ScrollReveal delay={80}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const isWp = !!item.id;
          return (
            <Link
              key={isWp ? item.id : item.type + i}
              href={isWp ? `/case-studies/${item.slug}` : (item.href || "/case-studies")}
              className="group flex flex-col overflow-hidden bg-white shadow-sm transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                {item.photo && (
                  <Image
                    src={item.photo}
                    alt={item.photoAlt || item.type}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                {!item.photo && (
                  <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none font-display text-7xl font-extrabold text-white/5">
                    {isWp ? "CS" : item.type?.split(" ")[0]}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                  <span className="bg-[#297858] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    {isWp ? "Case Study" : item.type}
                  </span>
                  {item.sector && (
                    <span className="border border-white/25 bg-black/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/75">
                      {item.sector}
                    </span>
                  )}
                  {item.location && (
                    <span className="py-1 text-[10px] text-white/50">
                      {item.location}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm leading-7 text-slate-600 group-hover:text-slate-800">
                  {isWp ? item.title?.rendered : item.outcome}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#297858]">
                  Read more <ArrowIcon />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </ScrollReveal>
  );
}

/* ── ICONS ───────────────────────────────────────────────────────────── */

function ArrowIcon({ className = "" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={className} aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v13m0 0-4-4m4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceIcon({ index }) {
  const icons = [
    // Wrench - AHU Refurbishment
    <path key="w" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
    // Factory - AHU Manufacturing
    <path key="f" d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />,
    // Layers - AHU Installation
    <><polygon key="l1" points="12 2 2 7 12 12 22 7 12 2" /><polyline key="l2" points="2 17 12 22 22 17" /><polyline key="l3" points="2 12 12 17 22 12" /></>,
    // CPU - Controller Upgrades
    <><rect key="c1" x="4" y="4" width="16" height="16" rx="2" /><rect key="c2" x="9" y="9" width="6" height="6" /><line key="c3" x1="9" y1="1" x2="9" y2="4" /><line key="c4" x1="15" y1="1" x2="15" y2="4" /><line key="c5" x1="9" y1="20" x2="9" y2="23" /><line key="c6" x1="15" y1="20" x2="15" y2="23" /><line key="c7" x1="20" y1="9" x2="23" y2="9" /><line key="c8" x1="20" y1="14" x2="23" y2="14" /><line key="c9" x1="1" y1="9" x2="4" y2="9" /><line key="c10" x1="1" y1="14" x2="4" y2="14" /></>,
  ];
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
      {icons[index]}
    </svg>
  );
}

function AdditionalServiceIcon({ index }) {
  const icons = [
    // Clipboard check - Validation Surveys
    <><path key="v1" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect key="v2" x="9" y="3" width="6" height="4" rx="1" /><path key="v3" d="m9 12 2 2 4-4" /></>,
    // Git branch - Ducting Repair
    <><line key="d1" x1="6" y1="3" x2="6" y2="15" /><circle key="d2" cx="18" cy="6" r="3" /><circle key="d3" cx="6" cy="18" r="3" /><path key="d4" d="M18 9a9 9 0 0 1-9 9" /></>,
    // Search - Troubleshooting
    <><circle key="t1" cx="11" cy="11" r="8" /><path key="t2" d="m21 21-4.35-4.35" /></>,
    // Flame - Commercial Boiler Services
    <path key="b" d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />,
    // Pipe - Commercial Pipework
    <><path key="p1" d="M3 9h18v6H3z" /><path key="p2" d="M9 9V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" /><path key="p3" d="M9 15v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4" /></>,
  ];
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[index]}
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
