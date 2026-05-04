import Image from "next/image";
import Link from "next/link";

const accreditationLogos = [
  { src: "/Gas_Safe_Register_logo.png", alt: "Gas Safe Registered" },
  { src: "/constructionline-gold-logo.png", alt: "Constructionline Gold" },
  { src: "/safeContractor-approved.png", alt: "SafeContractor Approved" },
];

const clientLogos = [
  { src: "/nhs-logo.png", alt: "NHS" },
  { src: "/disney-logo.png", alt: "Disney" },
  { src: "/marriott-logo (1).png", alt: "Marriott" },
  { src: "/moorfeilds-logo (2).png", alt: "Moorfields Eye Hospital" },
  { src: "/ihg-logo.png", alt: "IHG Hotels & Resorts" },
  { src: "/travelodge-logo.png", alt: "Travelodge" },
  { src: "/waitrose-logo.png", alt: "Waitrose" },
  { src: "/westfield-logo.png", alt: "Westfield" },
  { src: "/fenwick-logo.png", alt: "Fenwick" },
  { src: "/freedomleisure-logo.png", alt: "Freedom Leisure" },
  { src: "/queenmary-logo.png", alt: "Queen Mary University" },
  { src: "/alpinef1-logo.png", alt: "Alpine F1 Team" },
];
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getCaseStudies } from "@/lib/wordpress/api";

/* ── DATA ───────────────────────────────────────────────────────────── */

const services = [
  {
    title: "EC Fan Upgrades",
    outcome: "30–50% reduction in fan energy consumption",
    context: "Retrofit EC motors into your existing AHU casing. Payback typically within 2–3 years.",
    href: "/ec-fan-upgrades-and-retrofits-for-hvac",
    highlight: true,
    tag: "Most Requested",
    photo: "/ec-fan-upgrade.png",
  },
  {
    title: "Coil Replacement & Repair",
    outcome: "Full performance restored — without full AHU replacement",
    context: "We measure on-site and manufacture to fit. Minimal downtime, significant cost saving.",
    href: "/air-handling-unit-coil-replacement",
    highlight: true,
    tag: "Most Requested",
    photo: "/ahu-coil-replacement.png",
  },
  {
    title: "AHU Refurbishment",
    outcome: "Extend asset life by 10–15 years",
    context: "Survey, condition report, and full restoration. Our most requested service.",
    href: "/air-handling-unit-refurbishment",
    highlight: false,
    tag: null,
  },
  {
    title: "AHU Manufacturing",
    outcome: "Bespoke units built to your specification",
    context: "UK manufactured, delivered and installed. Any size, any configuration.",
    href: "/air-handling-unit-manufacturing",
    highlight: false,
    tag: null,
  },
  {
    title: "AHU Installation",
    outcome: "Survey to commissioning, managed in-house",
    context: "No subcontractors. One point of contact, full accountability.",
    href: "/air-handling-unit-installation",
    highlight: false,
    tag: null,
  },
  {
    title: "Controller Upgrades",
    outcome: "BMS integration, compliance, lower energy bills",
    context: "Upgrade controls for smarter operation and real-time energy monitoring.",
    href: "/air-handling-unit-controller-solutions-upgrades",
    highlight: false,
    tag: null,
  },
];

const credentials = [
  { stat: "40+", label: "Years of AHU Experience" },
  { stat: "UK Wide", label: "Nationwide Coverage" },
  { stat: "In-house", label: "No Subcontractor Chains" },
  { stat: "Gas Safe", label: "Registered & Accredited" },
];

const sectors = [
  { label: "Healthcare & NHS", desc: "HTM 03-01 compliant. Critical environments.", href: "/industries/hospital", photo: "/hospital.png" },
  { label: "Education", desc: "Around term times. CIBSE-compliant.", href: "/industries/education", photo: "/school.png" },
  { label: "Hotel & Hospitality", desc: "Out-of-hours. Minimum guest disruption.", href: "/industries/hotel", photo: "/hotel.png" },
  { label: "Defence", desc: "Security cleared. Restricted access sites.", href: "/industries/defence", photo: "/defence.jpg" },
  { label: "Leisure Centres", desc: "High-humidity. Corrosion-resistant spec.", href: "/industries/leisure-centre", photo: "/swimming-pool.png" },
  { label: "Retail & Commercial", desc: "Around trading hours. Reactive support.", href: "/industries/retail", photo: "/mall.png" },
];

const casePlaceholders = [
  {
    type: "EC Fan Upgrade",
    sector: "Leisure Centre",
    location: "Dorset",
    outcome: "Pool AHU failure caused airflow loss and uncontrolled humidity, putting the building at risk. BVS installed direct-drive EC fans, restoring full airflow (6 m³/s), stabilising humidity, cutting energy use, and eliminating belt-driven maintenance.",
    photo: "/ec-fan-before-after.png",
  },
  {
    type: "AHU Refurbishment",
    sector: "Healthcare",
    outcome: "12 hospital AHUs refurbished to full compliance — on programme, no disruption to wards.",
  },
  {
    type: "Coil Replacement",
    sector: "Hospitality",
    outcome: "Cooling coils replaced overnight at a 4-star hotel. Rooms back in service by morning.",
  },
];

/* ── PAGE ───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div>

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/ahu-hero-temp.png"
          alt="London skyline - BVS covers nationwide"
          fill
          priority
          className="object-cover"
        />
        {/* Mobile: solid dark base so text is always legible */}
        <div className="absolute inset-0 bg-black/55 sm:hidden" />
        {/* Desktop: left-to-right gradient, fades to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 via-[45%] to-transparent" />

        <Container className="relative flex min-h-[520px] items-center py-14 pb-28 sm:min-h-[600px] sm:py-20 sm:pb-20">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Building Ventilation Solutions
            </p>
            <h1
              className="font-display text-4xl font-extrabold uppercase leading-[1.08] text-white sm:text-5xl lg:text-6xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Commercial Ventilation<br />
              Experts
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-emerald-500" />
            <p className="mt-5 text-[15px] leading-7 text-white" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
             From EC fan upgrades to coil replacement and full AHU installation. <br /> Trusted by NHS, Disney and Marriott. Nationwide, fully in-house.
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
                href="/case-studies"
                className="inline-flex items-center gap-2 border border-white/40 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Explore our work
                <ArrowIcon />
              </Link>
            </div>

            {/* Accreditation badges — inline, below CTAs */}
            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
              
              {accreditationLogos.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  height={26}
                  width={52}
                  unoptimized
                  className="h-4 w-auto object-contain  "
                  style={{ height: "46px", width: "auto", maxWidth: "52px" }}
                />
              ))}
            </div>
          </div>
        </Container>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-3">
              {[
                { stat: "40+", label: "Years Experience" },
                { stat: "Nationwide", label: "UK Coverage" },
                { stat: "In-house", label: "No Subcontractors" },
              ].map((s) => (
                <div key={s.label} className="px-3 text-center sm:px-6">
                  <p className="font-display text-base font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wide text-white/55 sm:text-[11px]">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* ── 2. TRUST BAR ─────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-6 sm:py-9">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8 justify-items-center sm:justify-start">
            <p className="shrink-0 text-xs font-bold uppercase tracking-[0.25em] text-slate-700">
              Trusted by
            </p>
            <div className="h-px w-full bg-slate-100 sm:hidden justify-center" />
            <div className="flex flex-wrap items-center gap-5 sm:gap-7">
              {clientLogos.slice(0, 8).map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  height={60}
                  width={110}
                  unoptimized
                  className="h-7 w-auto object-contain sm:h-9"
                  style={{ height: "60px", width: "auto" }}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>



      {/* ── 4. SERVICES ──────────────────────────────────────────────── */}
      <section id="services" className="bg-surface-2 py-20">
        <Container>
          <ScrollReveal className="mb-12">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">What we do</p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              Our Services
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
              All works managed in-house from survey to handover. No subcontractor chains — one team, full accountability.
            </p>
          </ScrollReveal>

          {/* ── Featured: EC Fan + Coil ─────────────────────────────── */}
          <div className="grid gap-5 sm:grid-cols-2">
            {services.filter((s) => s.highlight).map((s) => (
              <ScrollReveal key={s.title}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
                >
                  <div className="relative h-52 overflow-hidden bg-slate-900">
                    <Image
                      src={s.photo}
                      alt={s.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        {s.tag}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-7">
                    <h3 className="text-base font-extrabold uppercase tracking-wide text-slate-900 group-hover:text-slate-700">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm font-bold text-emerald-700">{s.outcome}</p>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">{s.context}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors group-hover:text-emerald-600">
                      Find out more <ArrowIcon />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* ── Other services ──────────────────────────────────────── */}
          <div className="mt-4 border-t border-slate-200 pt-6">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Also</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.filter((s) => !s.highlight).map((s) => (
                <ScrollReveal key={s.title}>
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-slate-300 hover:shadow-md"
                  >
                    {s.tag && (
                      <span className="mb-2 self-start bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                        {s.tag}
                      </span>
                    )}
                    <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900 group-hover:text-slate-700">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 flex-1 text-xs leading-5 text-slate-500">{s.outcome}</p>
                    <p className="mt-3 text-xs font-semibold text-emerald-700">Find out more →</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal className="mt-6 text-center">
            <Link
              href="/solutions/ventilation"
              className="text-xs font-semibold text-slate-400 underline underline-offset-2 hover:text-emerald-700"
            >
              Also: Validation surveys · Ducting repair · Boiler &amp; pipework services
            </Link>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 5. CLIENT LOGOS ──────────────────────────────────────────── */}
      <section className="border-y border-slate-100 bg-white py-12">
  <Container>
    <p className="mb-8 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
      Trusted by leading UK organisations
    </p>

    <div className="grid grid-cols-4 sm:grid-cols-6 gap-x-6 gap-y-6">
      {clientLogos.map((logo) => (
        <div key={logo.alt} className="flex h-16 items-center justify-center">
          <Image
            src={logo.src}
            alt={logo.alt}
            height={56}
            width={140}
            unoptimized
            className="max-h-14 w-auto object-contain opacity-80 transition-opacity duration-200 hover:opacity-100"
            style={{ maxHeight: "56px", width: "auto" }}
          />
        </div>
      ))}
    </div>
  </Container>
</section>

      {/* ── 6. PROOF ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start">

            {/* Accreditations + context */}
            <ScrollReveal>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Accreditations
              </p>
              <p className="mb-6 text-sm leading-6 text-slate-500">
                Gas Safe registered, Constructionline Gold, and SafeContractor approved.
                All works carried out in-house — no subcontractor chains.
              </p>
              <div className="flex flex-col gap-3">
                {accreditationLogos.map((logo) => (
                  <div key={logo.alt} className="flex items-center gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <div className="flex h-10 w-20 shrink-0 items-center justify-center rounded bg-white p-1.5 shadow-sm ring-1 ring-slate-100">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        height={28}
                        width={64}
                        unoptimized
                        className="max-h-7 w-auto object-contain"
                        style={{ maxHeight: "28px", width: "auto" }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{logo.alt}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-6">
                <p className="text-xs text-slate-400">
                  40+ years of AHU expertise. Nationwide coverage. NHS, hospitality, defence,
                  education and retail sectors.
                </p>
              </div>
            </ScrollReveal>

            {/* Case studies */}
            <CaseStudiesBlock />
          </div>
        </Container>
      </section>

      {/* ── 7. SECTORS ───────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-16">
        <Container>
          <ScrollReveal className="mb-7 flex items-baseline justify-between gap-4">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">Industries</p>
              <h2 className="font-display text-xl font-extrabold uppercase text-slate-900">Sectors We Work In</h2>
            </div>
            <Link href="/industries" className="shrink-0 text-xs font-semibold text-emerald-700 hover:underline">
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
                        alt={s.label}
                        fill
                        unoptimized
                        className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    {!s.photo && <div className="mb-3 h-[3px] w-6 bg-slate-200 transition-all duration-300 group-hover:w-10 group-hover:bg-emerald-600" />}
                    <p className="font-display text-base font-extrabold uppercase text-slate-900 group-hover:text-slate-700">
                      {s.label}
                    </p>
                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{s.desc}</p>
                    <p className="mt-4 text-xs font-semibold text-emerald-700 transition-colors group-hover:text-emerald-600">
                      Learn more →
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <ScrollReveal>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                Ready to discuss your project?
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-white/65">
                Whether it&apos;s a survey, refurbishment, emergency coil replacement, or a full installation —
                we respond quickly and manage the entire scope in-house.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {["No obligation enquiry", "Response within one working day", "Speak directly with a specialist"].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
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
    // WordPress not configured — use placeholders
  }

  const items = caseStudies.length ? caseStudies.slice(0, 3) : casePlaceholders;

  return (
    <ScrollReveal delay={80}>
      <div className="mb-5 flex items-baseline justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">Recent work</p>
        <Link href="/case-studies" className="text-xs font-semibold text-emerald-700 hover:underline">
          View all →
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        {items.map((item, i) => {
          const isWp = !!item.id;
          return (
            <Link
              key={isWp ? item.id : item.type + i}
              href={isWp ? `/case-studies/${item.slug}` : "/case-studies"}
              className="group flex flex-col overflow-hidden border border-slate-100 bg-white transition-all duration-200 hover:border-slate-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            >
              <div className="relative flex h-36 items-end overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-4">
                {item.photo && (
                  <Image
                    src={item.photo}
                    alt={item.type}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                {!item.photo && (
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none font-display text-6xl font-extrabold text-white/5">
                    {isWp ? "CS" : item.type?.split(" ")[0]}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="relative flex flex-wrap gap-1.5">
                  <span className="bg-emerald-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                    {isWp ? "Case Study" : item.type}
                  </span>
                  {item.sector && (
                    <span className="border border-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/60">
                      {item.sector}
                    </span>
                  )}
                  {item.location && (
                    <span className="px-2 py-0.5 text-[10px] text-white/40">
                      {item.location}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 p-5">
                <p className="text-sm leading-6 text-slate-600 group-hover:text-slate-800">
                  {isWp ? item.title?.rendered : item.outcome}
                </p>
                <p className="text-xs font-semibold text-emerald-700">Read more →</p>
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

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0 text-emerald-700" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
