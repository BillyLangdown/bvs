import Image from "next/image";
import Link from "next/link";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { AllServicesPanel } from "@/components/ui/AllServicesPanel";
import { caseStudies } from "@/lib/caseStudyData";
import { CaseStudyCarousel } from "@/components/site/CaseStudyCarousel";

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
    context: "Improves efficiency, enables variable speed control, and reduces maintenance overhead. Typical payback 2–3 years.",
    signs: [
      "High fan energy use or failure to meet efficiency targets",
      "Lack of airflow or airflow error",
      "Noisy fans and regular maintenance",
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
    title: "AHU Manufacturing & Installation",
    plain: "Custom-built AHUs manufactured in the UK and installed under a single contract, from survey to handover.",
    outcome: "Full scope from design to handover, under one contract",
    context: "Managed delivery for new builds, full system replacements, or where off-the-shelf units do not fit.",
    signs: [
      "Non-standard size or access constraints require a custom-built unit",
      "Unit is beyond economic repair or no longer supported",
      "Full project delivery needed, survey, manufacture, and install"
    ],
    href: "/air-handling-unit-manufacturing-and-installation",
    highlight: false,
    tag: null,
    photo: "/ahu-sparks.webp",
    photoAlt: "BVS air handling unit manufacturing workshop, custom-built AHU in progress",
  },
  {
    title: "Controller Upgrades",
    plain: "Upgrade obsolete AHU controls to modern open-protocol systems with BMS integration.",
    outcome: "Restored control, fault logging, and remote monitoring",
    context: "Works with Trend, Tridium/Niagara, and all major BMS platforms. Migrate or integrate existing systems.",
    signs: [
      "Controls are outdated or failing",
      "No fault logging or BMS connection",
      "BMS integration is required"
    ],
    href: "/air-handling-unit-controller-solutions-upgrades",
    highlight: false,
    tag: null,
    photo: "/ahu-controller.webp",
    photoAlt: "AHU controller upgrade, modern controls panel installed in air handling unit",
  },
  {
    title: "Commercial Boiler Services",
    plain: "Gas Safe registered installation, servicing, and repair for commercial heating systems.",
    outcome: "Planned and reactive cover under one specialist",
    context: "For commercial heating plant alongside or independent of ventilation works.",
    signs: [
      "Boiler unreliable or requiring frequent repairs",
      "Heating not meeting demand across the building",
      "Gas Safe compliance required",
    ],
    href: "/commercial-boiler-and-heating-services",
    highlight: false,
    tag: null,
    photo: "/Commercial-Gas-Works.webp",
    photoAlt: "Commercial boiler installation and servicing by BVS",
  },
];

const additionalServices = [
  {
    title: "Validation Surveys",
    desc: "Entire system condition assessment with a full documented report of findings and proposals, covering ductwork, coils, fans, controls, and insulation repair.",
    href: "/ahu-validation-ventilation-surveys",
  },
  {
    title: "Ducting Repair & Replacement",
    desc: "Uneven airflow, pressure loss, or visible duct damage? We repair or replace ductwork sections to restore system performance.",
    href: "/solutions/ventilation/ducting-repair-replacement",
  },
  {
    title: "Troubleshooting",
    desc: "40+ years of AHU experience means we've seen it before. We diagnose the root cause and give you a clear, practical fix, from insulation repair to controls failures.",
    href: "/air-handling-unit-troubleshooting",
  },
  {
    title: "Commercial Pipework",
    desc: "Installation, maintenance, and repair of commercial pipework systems, HVAC circuits, heating mains, and associated insulation.",
    href: "/industrial-pipework-services",
  },
];

const sectors = [
  { label: "Healthcare & NHS", desc: "Active hospitals & Live clinical environments.", href: "/hospital-ventilation", photo: "/hospital.webp", photoAlt: "NHS hospital corridor, BVS ventilation works in live clinical environments" },
  { label: "Education", desc: "Around term times & your budget", href: "/education-ventilation", photo: "/school.webp", photoAlt: "School building, BVS AHU works scheduled around term times" },
  { label: "Hotels", desc: "Out-of-hours & Minimum disruption to operations.", href: "/hotel-leisure-ventilation", photo: "/hotel.webp", photoAlt: "Hotel interior, BVS ventilation services with out-of-hours delivery" },
  { label: "Defence", desc: "Security cleared & Restricted access sites.", href: "/industries/defence", photo: "/defence.webp", photoAlt: "Defence facility, BVS security-cleared engineers for restricted-access sites" },
  { label: "Leisure Centres", desc: "High-humidity & Corrosion-resistant spec.", href: "/sport-facility-ventilation", photo: "/swimming-pool.webp", photoAlt: "Swimming pool leisure centre, BVS high-humidity AHU specification" },
  { label: "Retail & Commercial", desc: "around your trading hours & operational needs", href: "/retail-ventilation", photo: "/mall.webp", photoAlt: "Shopping centre retail environment, BVS ventilation works around trading hours" },
];


/* ── PAGE ───────────────────────────────────────────────────────────── */

export const metadata = {
  title: {
    absolute: "BVS | AHU Specialists | Building Ventilation Solutions",
  },
  description:
    "AHU refurbishment, EC fan upgrades, coil replacement, new installation, and controls. 40+ years experience. Trusted by NHS, Disney, and Marriott. UK nationwide.",
  openGraph: {
    title: "BVS | AHU Specialists | Building Ventilation Solutions",
    description:
      "AHU refurbishment, EC fan upgrades, coil replacement, new installation, and controls. 40+ years experience. Trusted by NHS, Disney, and Marriott. UK nationwide.",
    url: "https://www.bvs-ltd.co.uk",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BVS Building Ventilation Solutions",
  url: "https://www.bvs-ltd.co.uk",
  logo: "https://www.bvs-ltd.co.uk/bvs-logo.webp",
  telephone: "01256518170",
  email: "info@bvs-ltd.co.uk",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  description:
    "AHU refurbishment, EC fan upgrades, coil replacement, new installation, and controls. 40+ years experience. UK nationwide.",
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/london-hero.webp"
          alt="London rooftop skyline with industrial ventilation equipment"
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          className="object-cover object-[65%_15%] sm:object-[40%_55%]"
        />
        {/* Mobile: solid dark base so text is always legible */}
        <div className="absolute inset-0 bg-black/25 sm:hidden" />
        {/* Desktop: left-to-right gradient, fades to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 via-[45%] to-transparent" />

        <Container className="relative flex min-h-[620px] items-center py-14 pb-24 sm:min-h-[600px] sm:py-20 sm:pb-32">
        {/* Mobile hero */}
        <div className="sm:hidden max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-5 w-px bg-white/30" />
              <span className="text-[12px] uppercase tracking-[0.2em] text-white/70 whitespace-nowrap">
                Building Ventilation Solutions
              </span>
            </div>
            <h1
              className="text-3xl font-extrabold leading-[1.08] text-white"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Complete solutions for all your air handling and ventilation needs.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <a href="tel:01256518170" className="mt-5 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <p className="mt-3 text-sm leading-6 text-white" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              Over 40 years practical experience of commercial ventilation projects. In depth knowledge to offer you the most economical solution no matter how complex.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact#enquiry"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Discuss your project
                <ArrowIcon />
              </Link>
              <a
                href="#services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Our Services
                <ArrowDownIcon />
              </a>
            </div>
          </div>
        {/* Desktop hero */}
        <div className="hidden sm:block max-w-3xl lg:max-w-5xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-5 w-px bg-white/30" />
              <span className="text-[13px] uppercase tracking-[0.2em] text-white/70 whitespace-nowrap">
                Building Ventilation Solutions
              </span>
            </div>
            <h1
              className="text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-6xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Complete solutions for all your air handling and ventilation needs.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-white" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              Over 40 years practical experience of commercial ventilation projects. <br/> In depth knowledge to offer you the most economical solution no matter how complex.
            </p>
            <a href="tel:01256518170" className="mt-6 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact#enquiry"
                className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Discuss your project
                <ArrowIcon />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-xs bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Our Services
                <ArrowDownIcon />
              </a>
            </div>
          </div>
        </Container>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "40+", label: "Years Experience" },
                { stat: "Nationwide", label: "Coverage" },
                { stat: "24-hr", label: "Response" },
              ].map((s) => (
                <div key={s.label} className="px-2 text-center sm:px-6">
                  <p className="text-sm font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-wide text-white/55 sm:text-[10px]">{s.label === "Years Experience" ? <><span className="sm:hidden">Yrs Experience</span><span className="hidden sm:block">Years Experience</span></> : s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* ── 2. TRUST BAR ─────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-7 sm:py-10">
        <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
          Trusted by leading organisations
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />
          <InfiniteMarquee>
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                unoptimized
                className="h-11 w-auto shrink-0 object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
            ))}
          </InfiniteMarquee>
        </div>
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

  <ScrollReveal className="mb-14">
  <div className="max-w-6xl mx-auto">
    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#297858]">
      What we do
    </p>

    <h2 className="text-2xl font-extrabold tracking-tight text-[#111418] sm:text-3xl mt-2">
      Our Services
    </h2>

    <div className="mt-4 h-[3px] w-12 bg-[#297858]" />

    <div className="mt-6 max-w-xl">
      <p className="text-sm leading-7 text-slate-600">
        AHU specialists covering refurbishment, EC fan upgrades, coil replacement, new installation, controls, and decarbonisation support.
      </p>

      <p className="mt-3 text-xs leading-6 text-slate-500">
        Not sure which service applies, or need something not listed here?{" "}
        <Link
          href="/contact#enquiry"
          className="font-semibold text-[#297858] transition-colors hover:text-[#1d5c42]"
        >
          Speak to our team →
        </Link>
      </p>
    </div>
  </div>
</ScrollReveal>
    
   {/* FEATURED */}
<div className="grid gap-6 lg:grid-cols-2">
  {services.filter((s) => s.highlight).map((s) => (
    <ScrollReveal key={s.title}>
      <Link
        href={s.href}
        className="group flex h-full flex-col overflow-hidden rounded-md border border-black/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)]"
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
            <h3 className="text-2xl font-extrabold leading-tight text-white">
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

    {/* ALL SERVICES (collapsible) */}
    <AllServicesPanel
      services={services.filter((s) => !s.highlight)}
      additionalServices={additionalServices}
    />

  </Container>
</section>
     {/* ── 8. ACCREDITATIONS ────────────────────────────────────────── */}
     <section className=" bg-slate-50 py-12 sm:py-14">
  <Container>

    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

      {/* LEFT CONTENT */}
      <div className="max-w-xl text-center lg:text-left">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
          Accredited &amp; Approved
        </p>

        <h2 className="mt-3 text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">
          Certified for regulated HVAC <br/> and engineering works
        </h2>

        <div className="mt-5 h-[2px] w-10 bg-[#297858] mx-auto lg:mx-0" />

        <p className="mt-5 text-sm leading-6 text-slate-500">
        Gas Safe registered, Constructionline Gold certified, and SafeContractor approved.
        </p>
      </div>

      {/* LOGOS */}
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-end">
        {accreditationLogos.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            height={40}
            width={120}
            unoptimized
            className="h-20 w-auto object-contain transition-opacity duration-300 hover:opacity-100"
          />
        ))}
      </div>

    </div>

  </Container>
</section>

      {/* ── 4. OUR PROJECTS ─────────────────────────────────────────── */}
      <section id="our-work" className="bg-[#161b22] py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-8">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">Our Projects</p>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Recent Work</h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>
          <CaseStudyCarousel studies={caseStudies} />
        </Container>
      </section>

     

      {/* ── 6. SECTORS ───────────────────────────────────────────────── */}
      <section className="bg-[#f5f3ef] py-16">
        <Container>
          <ScrollReveal className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">Industries</p>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#111418] sm:text-3xl mt-2">Sectors We Work In</h2>
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
                    <p className="text-base font-extrabold text-slate-900 group-hover:text-slate-700">
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

       {/* ── 5. BROCHURE ──────────────────────────────────────────────── */}
       <section className="overflow-hidden bg-white py-16 sm:py-20">
  <Container>
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_450px]">
      <ScrollReveal>
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
          Free Download
        </p>
        <h2 className="text-2xl font-extrabold leading-tight text-slate-800 sm:text-3xl lg:text-4xl">
          AHU Specialists<br />Brochure
        </h2>
        <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
        <p className="mt-6 max-w-lg text-[15px] leading-7 text-slate-800">
          Download our AHU brochure, covering the services we provide, sectors we work in, and a selection of previous case studies.
        </p>
        <ul className="mt-6 flex flex-col gap-2.5">
          {[
            "AHU refurbishment options and typical scope of works explained",
            "Sectors we support, including NHS, hotels, education, and defence",
            "Previous case studies from across our project portfolio",
          ].map((point) => (
            <li key={point} className="flex items-center gap-2.5 text-sm text-slate-500">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            href="/bvs-brochure.webp"
            download="BVS-AHU-Specialists-Brochure"
            className="inline-flex items-center gap-2.5 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
          >
            <DownloadIcon />
            Download Brochure
          </a>
          <p className="text-xs text-slate-500">No email required · Instant download</p>
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

      {/* ── 7. FINAL CTA ─────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <ScrollReveal>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Ready to discuss your project?
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-white/65">
                Whether it&apos;s a planned refurbishment programme, emergency coil replacement, urgent fan failure, or a full new installation, we respond quickly and manage the entire project directly.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {["No obligation enquiry", "Response within one working day", "No sales handlers, straight to the team"].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
                    {p}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={100} className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact#enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-4 text-sm font-bold tracking-wide text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
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
