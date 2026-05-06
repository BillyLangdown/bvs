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
    plain: "Replace old inefficient fan motors with modern energy-saving ones - fitted into your existing unit.",
    outcome: "30–50% reduction in fan energy consumption",
    context: "Retrofit EC motors into your existing AHU casing. Payback typically within 2–3 years.",
    signs: ["Energy bills keep climbing with no explanation", "Fans running loud or at full speed constantly", "Old belt-driven motors due for replacement"],
    href: "/ec-fan-upgrades-and-retrofits-for-hvac",
    highlight: true,
    tag: "Most Requested",
    photo: "/ec-fan-upgrade.png",
  },
  {
    title: "Coil Replacement & Repair",
    plain: "Replace the heat exchanger inside your unit so it heats or cools properly again.",
    outcome: "Full performance restored - without full AHU replacement",
    context: "We measure on-site and manufacture to fit. Minimal downtime, significant cost saving.",
    signs: ["Rooms not reaching the right temperature", "Visible leaks, corrosion, or scale on the unit", "Heating or cooling capacity has noticeably dropped"],
    href: "/air-handling-unit-coil-replacement",
    highlight: true,
    tag: "Most Requested",
    photo: "/ahu-coil-replacement.png",
  },
  {
    title: "AHU Refurbishment",
    plain: "A full overhaul of your ventilation unit - restoring it instead of replacing it.",
    outcome: "Extend asset life by 10–15 years",
    context: "Survey, condition report, and full restoration. Often a fraction of the cost of replacement.",
    signs: ["Unit is ageing, noisy, or breaking down frequently", "You've been quoted for a full replacement", "Poor air quality or damaged filter housing"],
    href: "/air-handling-unit-refurbishment",
    highlight: false,
    tag: null,
  },
  {
    title: "AHU Manufacturing",
    plain: "We design and build a brand new ventilation unit made specifically for your building.",
    outcome: "Bespoke units built to your exact specification",
    context: "UK manufactured, delivered and installed. Any size, any configuration.",
    signs: ["Your unit is beyond economic repair", "You need a non-standard size or layout", "Extending a building or replacing obsolete equipment"],
    href: "/air-handling-unit-manufacturing",
    highlight: false,
    tag: null,
  },
  {
    title: "AHU Installation",
    plain: "We manage everything - survey, supply, installation, and commissioning - under one roof.",
    outcome: "Survey to commissioning, fully managed in-house",
    context: "No subcontractors. One point of contact, full accountability.",
    signs: ["Installing new or replacement ventilation equipment", "Need a single contractor for the whole project", "New build, extension, or major refurbishment"],
    href: "/air-handling-unit-installation",
    highlight: false,
    tag: null,
  },
  {
    title: "Controller Upgrades",
    plain: "Upgrade the controls so your system runs smarter, integrates with your building, and wastes less energy.",
    outcome: "Lower energy bills, BMS integration, compliance",
    context: "Upgrade controls for smarter scheduling and real-time energy monitoring.",
    signs: ["Can't connect to your building management system", "Energy wasted from poor or outdated scheduling", "Controls are obsolete, failing, or non-compliant"],
    href: "/air-handling-unit-controller-solutions-upgrades",
    highlight: false,
    tag: null,
  },
];

const additionalServices = [
  {
    title: "Validation Surveys",
    desc: "Due for a compliance check or HTM audit? We inspect your system, document its condition, and provide a full report.",
    href: "/solutions/ventilation",
  },
  {
    title: "Ducting Repair",
    desc: "Uneven airflow, strange noises, or visible duct damage? We repair or replace the channels that move air around your building.",
    href: "/solutions/ventilation",
  },
  {
    title: "Boiler & Pipework",
    desc: "Gas Safe registered. Boiler servicing, installation, and pipework - handled by the same team as your ventilation.",
    href: "/solutions/ventilation",
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
    outcome: "12 hospital AHUs refurbished to full compliance - on programme, no disruption to wards.",
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
          src="/AHU-manufacturing.png"
          alt="London skyline - BVS covers nationwide"
          fill
          priority
          className="object-cover object-[10%_15%]"
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
              className="font-display text-3xl font-extrabold uppercase leading-[1.08] text-white sm:text-5xl lg:text-6xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
           Better Airflow,<br/> Lower Energy Costs.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-white" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
            From EC fan upgrades and coil replacement to full AHU installation, refurbishment, and repair.<br />
              Trusted by NHS, Disney and Marriott. Nationwide, fully in-house.
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
                Our Serivces
                <ArrowIcon />
              </Link>
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
      <section id="services" className="bg-[#111418] py-20">
        <Container>
          <ScrollReveal className="mb-12">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">What we do</p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
              Our Services
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-3 max-w-lg text-sm leading-7 text-white/55">
              All works managed in-house from survey to handover. No subcontractor chains — one team, full accountability.
            </p>
            <p className="mt-3 text-xs text-white/35">
              Not sure which service applies? Each one below lists the signs to look for — or{" "}
              <Link href="/contact" className="font-semibold text-white/55 underline-offset-2 hover:text-white hover:underline">
                speak to an engineer and we&apos;ll advise →
              </Link>
            </p>
          </ScrollReveal>

          {/* Featured: EC Fan + Coil */}
          <div className="grid gap-5 sm:grid-cols-2">
            {services.filter((s) => s.highlight).map((s) => (
              <ScrollReveal key={s.title}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col overflow-hidden rounded-t-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.38)] transition-all duration-200 hover:shadow-[0_20px_56px_rgba(0,0,0,0.5)]"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-200">
                    <Image src={s.photo} alt={s.title} fill unoptimized className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[#297858] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">{s.tag}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-7">
                    <h3 className="text-base font-extrabold uppercase tracking-wide text-slate-900 group-hover:text-slate-700">{s.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{s.plain}</p>
                    <p className="mt-3 text-sm font-bold text-[#297858]">{s.outcome}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{s.context}</p>
                    <div className="mt-4 flex-1 border-t border-slate-100 pt-4">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">Common signs:</p>
                      <ul className="flex flex-col gap-1.5">
                        {s.signs.map((sign) => (
                          <li key={sign} className="flex items-start gap-2 text-xs leading-5 text-slate-400">
                            <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
                            {sign}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#297858] transition-colors group-hover:text-[#1d5c42]">
                      Find out more <ArrowIcon />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Core services */}
          <div className="mt-10">
            <div className="mb-5 flex items-center gap-4">
              <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Full service capability</p>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.filter((s) => !s.highlight).map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 60}>
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col rounded-t-lg border-l-4 border-l-[#297858] bg-white shadow-[0_4px_28px_rgba(0,0,0,0.32)] transition-all duration-200 hover:border-l-[#1d5c42] hover:shadow-[0_10px_44px_rgba(0,0,0,0.5)]"
                  >
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <h3 className="text-sm font-extrabold uppercase tracking-wide text-slate-900 group-hover:text-slate-700">{s.title}</h3>
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#297858]/10 text-[#297858] transition-colors group-hover:bg-[#297858]/20">
                          <ServiceIcon index={i} />
                        </div>
                      </div>
                      <p className="text-xs leading-5 text-slate-500">{s.plain}</p>
                      <p className="mt-3 text-[13px] font-bold leading-5 text-[#297858]">{s.outcome}</p>
                      <ul className="mt-3 flex flex-1 flex-col gap-1.5">
                        {s.signs.slice(0, 2).map((sign) => (
                          <li key={sign} className="flex items-start gap-1.5 text-[11px] leading-4 text-slate-400">
                            <span className="mt-[4px] h-1 w-1 shrink-0 rounded-full bg-[#297858]" />
                            {sign}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-slate-400 transition-colors group-hover:text-[#297858]">
                        Find out more <ArrowIcon />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Additional services */}
          <div className="mt-8">
            <div className="mb-5 flex items-center gap-4">
              <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Additional services</p>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {additionalServices.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 60} className="h-full">
                  <Link
                    href={s.href}
                    className="group flex h-full items-center gap-4 border border-slate-200 bg-white p-4 transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#111418] text-white/60 transition-colors group-hover:bg-[#1d5c42] group-hover:text-white">
                      <AdditionalServiceIcon index={i} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-slate-900 group-hover:text-slate-700">{s.title}</p>
                      <p className="mt-0.5 text-xs leading-4 text-slate-400">{s.desc}</p>
                    </div>
                    <ArrowIcon className="shrink-0 text-slate-300 transition-colors group-hover:text-[#297858]" />
                  </Link>
                </ScrollReveal>
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
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
          Free Download
        </p>
        <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
          AHU Specialists<br />Brochure
        </h2>
        <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
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
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
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
                Whether it&apos;s a survey, refurbishment, emergency coil replacement, or a full installation -
                we respond quickly and manage the entire scope in-house.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {["No obligation enquiry", "Response within one working day", "Speak directly with a specialist"].map((p) => (
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
    // Flame - Boiler & Pipework
    <path key="b" d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />,
  ];
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[index]}
    </svg>
  );
}
