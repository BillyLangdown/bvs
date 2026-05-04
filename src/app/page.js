import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getCaseStudies } from "@/lib/wordpress/api";

/* ── DATA ───────────────────────────────────────────────────────────── */

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

            {/* Accreditation badges */}
            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
              {accreditationLogos.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  height={26}
                  width={52}
                  unoptimized
                  className="h-4 w-auto object-contain"
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
      <section className="border-b border-slate-100 bg-white py-7 sm:py-10">
  <Container>
    <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
      Trusted by leading UK organisations
    </p>

    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-6 place-items-center">
      {clientLogos.map((logo) => (
        <Image
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          height={60}
          width={120}
          unoptimized
          className="h-10 w-auto object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
          style={{ height: "60px", width: "auto", maxWidth: "120px" }}
        />
      ))}
    </div>
  </Container>
</section>

      {/* ── 3. SERVICES ──────────────────────────────────────────────── */}
      <section id="services" className="bg-surface-2 py-20">
        <Container>
          <ScrollReveal className="mb-12">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">What we do</p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              Our Services
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
            <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
              All works managed in-house from survey to handover. No subcontractor chains — one team, full accountability.
            </p>
          </ScrollReveal>

          {/* Featured: EC Fan + Coil */}
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
                  <div className="flex flex-1 flex-col p-5 sm:p-7">
                    <h3 className="text-base font-extrabold uppercase tracking-wide text-slate-900 group-hover:text-slate-700">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm font-bold text-emerald-700">{s.outcome}</p>
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">{s.context}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors group-hover:text-emerald-600">
                      Find out more <ArrowIcon />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Other services */}
          <div className="mt-4 border-t border-slate-200 pt-6">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Also</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.filter((s) => !s.highlight).map((s) => (
                <ScrollReveal key={s.title}>
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-slate-300 hover:shadow-md"
                  >
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

      {/* ── 4. RECENT WORK ───────────────────────────────────────────── */}
      <section className="bg-surface-2 py-20">
        <Container>
          <ScrollReveal className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">Evidence of Work</p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
                Recent Projects
              </h2>
              <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
            </div>
            <Link href="/case-studies" className="shrink-0 text-xs font-semibold text-slate-500 underline underline-offset-4 hover:text-emerald-700">
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
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">
          Free Download
        </p>
        <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
          AHU Specialists<br />Brochure
        </h2>
        <div className="mt-4 h-[3px] w-10 bg-emerald-500" />
        <p className="mt-6 max-w-lg text-[15px] leading-7 text-white/65">
          Our brochure includes information and details on the wide range of AHU Refurbishment
          benefits and how our team provides detailed surveys and guidance based on the condition
          of your AHUs.
        </p>
        <ul className="mt-6 flex flex-col gap-2.5">
          {[
            "AHU refurbishment options & benefits explained",
            "What to expect from a BVS condition survey",
            "Energy saving & compliance guidance",
          ].map((point) => (
            <li key={point} className="flex items-center gap-2.5 text-sm text-white/55">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            href="/bvs-brochure.png"
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
          src="/bvs-brochure.png"
          alt="BVS AHU Specialists Brochure"
          width={800}
          height={438}
          unoptimized
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

      {/* ── 7. FINAL CTA ─────────────────────────────────────────────── */}
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

      {/* ── 8. ACCREDITATIONS ────────────────────────────────────────── */}
      <section className="border-t border-slate-200 bg-white py-8">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Accredited &amp; Approved
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {accreditationLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex h-10 items-center justify-center rounded bg-white px-3 shadow-sm ring-1 ring-slate-100"
                  title={logo.alt}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    height={28}
                    width={72}
                    unoptimized
                    className="h-7 w-auto object-contain"
                    style={{ maxHeight: "28px", width: "auto", maxWidth: "72px" }}
                  />
                </div>
              ))}
            </div>
            <p className="hidden text-xs text-slate-400 sm:block">
              Gas Safe · Constructionline Gold · SafeContractor
            </p>
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const isWp = !!item.id;
          return (
            <Link
              key={isWp ? item.id : item.type + i}
              href={isWp ? `/case-studies/${item.slug}` : "/case-studies"}
              className="group flex flex-col overflow-hidden bg-white shadow-sm transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
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
                  <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none font-display text-7xl font-extrabold text-white/5">
                    {isWp ? "CS" : item.type?.split(" ")[0]}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                  <span className="bg-emerald-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
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
                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-emerald-700">
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

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0 text-emerald-700" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
