import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = {
  title: "AHU Installation | BVS Building Ventilation Solutions",
  description:
    "Professional air handling unit installation across the UK. Survey, specification, installation, and commissioning — one team from start to finish. 40+ years experience.",
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

const steps = [
  {
    n: "01",
    title: "Site Survey & Assessment",
    body: "We visit site to record access constraints, existing ductwork connections, structural loadings, and services routes — before a line is drawn or a price is agreed.",
    points: [
      "Access routes, plant room dimensions, and lifting constraints recorded",
      "Existing ductwork, pipework, and electrical connections surveyed",
      "Structural loading and fixing arrangements confirmed",
    ],
  },
  {
    n: "02",
    title: "Specification & Programme",
    body: "Using survey data, we produce a full specification, scope of works, and installation programme — including any temporary ventilation requirements during the works.",
    points: [
      "Detailed scope and specification issued for approval",
      "Phased programme agreed around site occupation",
      "Temporary ventilation arrangements confirmed where needed",
    ],
  },
  {
    n: "03",
    title: "Installation Works",
    body: "Our directly employed engineering teams manage the full installation — mechanical, electrical, and controls — to a co-ordinated programme with minimum disruption.",
    points: [
      "Mechanical fixings, ductwork connections, and pipework completed",
      "Electrical supply and controls wiring installed and tested",
      "Out-of-hours and phased installation available",
    ],
  },
  {
    n: "04",
    title: "Commissioning & Handover",
    body: "Full airflow commissioning in line with CIBSE and BSRIA guidance, with O&M documentation, as-fitted drawings, and a complete handover pack.",
    points: [
      "Airflow volumes verified against design specification",
      "BMS integration and controls sequences tested",
      "O&M documentation and as-fitted drawings issued",
    ],
  },
];

const faqs = [
  {
    q: "Do you carry out design as well as installation?",
    a: "We can work from a client-issued specification or take on the full design, specification, and installation package. Both routes are common — particularly on refurbishment projects where existing equipment is being replaced.",
  },
  {
    q: "Can you install AHUs in live occupied buildings?",
    a: "Yes. The majority of our installation work takes place in live buildings. We programme works to minimise disruption, use phased shutdowns where needed, and carry out noisy or disruptive tasks outside of core hours.",
  },
  {
    q: "Do you handle access and cranage?",
    a: "We manage the full installation including crane hire, temporary works, and access platforms where needed. This is co-ordinated through our project management team and included within the works programme.",
  },
  {
    q: "What size AHUs do you install?",
    a: "From small rooftop packaged units through to large central plant serving multiple zones. We work across commercial, healthcare, education, and industrial sectors — with experience on units from 500 l/s up to 50,000 m3/h and above.",
  },
  {
    q: "Do you commission as well as install?",
    a: "Yes. Commissioning is included within our installation scope. We carry out full airflow balancing and BMS integration testing in line with CIBSE and BSRIA guidance, and issue a complete commissioning record.",
  },
  {
    q: "Can you install units you haven't manufactured?",
    a: "Absolutely. We install AHUs from all major manufacturers and can work from client-supplied equipment. Our teams are experienced across Daikin, Nuaire, Swegon, Biddle, and numerous other makes.",
  },
];

/* ── PAGE ─────────────────────────────────────────────────────────────── */

export default function AHUInstallationPage() {
  return (
    <div>

      {/* ── 1. HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/hero.webp"
          alt="BVS engineers installing an air handling unit in a commercial plant room"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 via-[50%] to-black/20" />

        <Container className="relative flex min-h-[520px] items-center py-14 pb-28 sm:min-h-[580px] sm:py-20 sm:pb-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              AHU Installation
            </p>
            <h1
              className="font-display text-2xl font-extrabold uppercase leading-[1.08] text-white sm:text-5xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              AHU Installation.<br />One Team. Full Scope.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-white/85" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              Survey, specification, mechanical and electrical installation, and full airflow commissioning — delivered by one engineering team with 40+ years of AHU experience across the UK.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Discuss your installation
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

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "40+ Years", label: "AHU Experience" },
                { stat: "UK Nationwide", label: "Coverage" },
                { stat: "One Team", label: "Full Scope" },
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

      {/* ── 2. TRUST BAR ───────────────────────────────────────────────── */}
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
          <p className="mt-3 text-end text-[10px] text-slate-300 sm:hidden">Swipe to see more →</p>
        </Container>
      </section>

      {/* ── 3. QUICK ASSESSMENT ────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                Quick assessment
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                Does Your Project<br />Need a Specialist?
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                AHU installation requires co-ordination across mechanical, electrical, and controls disciplines. If any of the following apply, a specialist team will reduce risk and programme time.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:text-[#1d5c42]"
                >
                  Discuss your project →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <ul className="flex flex-col gap-3">
                {[
                  "New AHU plant requiring full mechanical, electrical, and controls installation",
                  "Replacement of existing equipment with access or structural constraints",
                  "Live occupied site requiring phased or out-of-hours working",
                  "Healthcare, cleanroom, or other specialist ventilation environments",
                  "Design-and-build requirement where specification is not yet complete",
                  "Programme includes commissioning, BMS integration, or validation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-l-2 border-[#297858] bg-white/5 px-4 py-3"
                  >
                    <CheckIcon className="mt-1 shrink-0" />
                    <span className="text-sm leading-6 text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── 4. THE CASE FOR BVS ────────────────────────────────────────── */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                The case for a specialist
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
                Generalist M&amp;E vs AHU Specialist
              </h2>
              <div className="mx-auto mt-4 h-[3px] w-10 bg-[#297858]" />
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                AHU installation is more than lifting equipment into position. Controls integration, airflow commissioning, and access engineering require a team that does this every day.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={80}>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">

              <div className="border border-slate-200 bg-white p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Generalist M&amp;E contractor
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-500">
                  <p>AHU commissioning sub-contracted separately</p>
                  <p>Controls integration managed as an afterthought</p>
                  <p>Access engineering solutions created on site</p>
                  <p>Programme risk from unfamiliar equipment types</p>
                </div>
                <p className="mt-6 text-sm font-semibold text-slate-400">Multiple interfaces and increased programme risk</p>
              </div>

              <div className="relative overflow-hidden bg-[#111418] p-6 sm:p-8 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-[#297858]/20 to-transparent" />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#297858]">
                    BVS AHU installation
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-white/80">
                    <p>Mechanical, electrical, and commissioning — one team</p>
                    <p>Controls integration designed from the outset</p>
                    <p>Access engineering planned at survey stage</p>
                    <p>40+ years experience across all AHU types and configurations</p>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-white">One contract. One programme. One point of responsibility.</p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 5. WHAT'S INCLUDED ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Scope of works
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              What&apos;s Included
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Our installation scope covers the full range of works required to bring a new or replacement AHU into service — mechanical, electrical, controls, and commissioning.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Mechanical Installation", desc: "AHU positioning, anti-vibration mounting, ductwork connections, pipework connections for coils, and all associated mechanical works." },
              { title: "Electrical Installation", desc: "Supply and distribution cabling, motor wiring, controls panels, and all electrical containment from isolator to unit." },
              { title: "Controls & BMS Integration", desc: "Controls wiring, I/O connections to BMS, sequence of operation programming, and integration testing with the wider building controls system." },
              { title: "Access & Cranage", desc: "Crane hire, temporary works, access platforms, and structural co-ordination — managed within the project programme." },
              { title: "Airflow Commissioning", desc: "Full airflow balancing to CIBSE and BSRIA standards, supply and extract volume verification, and zone-by-zone balancing where required." },
              { title: "O&M Documentation", desc: "Operation and maintenance manuals, as-fitted drawings, commissioning records, and handover documentation issued at practical completion." },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[#297858] bg-surface-2 p-5">
                <p className="text-sm font-bold text-slate-900">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. HOW IT WORKS ─────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-12 max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              How it works
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              Survey to Handover
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              A four-stage process from initial site survey through to commissioned handover — managed by the same engineering team throughout.
            </p>
          </ScrollReveal>

          {/* Desktop flow */}
          <div className="hidden lg:flex items-stretch">
            {steps.flatMap((step, i) => {
              const items = [
                <ScrollReveal key={step.n} delay={i * 60} className="flex-1">
                  <div className="flex h-full flex-col bg-white p-8 shadow-sm">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center bg-[#111418]">
                        <span className="font-display text-sm font-extrabold text-white">{step.n}</span>
                      </div>
                      <h3 className="font-display text-sm font-extrabold uppercase leading-snug text-slate-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500">{step.body}</p>
                    <div className="my-5 h-px w-full bg-slate-100" />
                    <ul className="space-y-2">
                      {step.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-[11px] text-slate-400">
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
                  <div key={`arrow-${i}`} className="flex w-10 shrink-0 items-center justify-center bg-slate-100">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="#297858" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                );
              }
              return items;
            })}
          </div>

          {/* Mobile flow */}
          <div className="flex flex-col lg:hidden">
            {steps.map((step, i) => (
              <div key={step.n}>
                <ScrollReveal delay={i * 60}>
                  <div className="bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#111418]">
                        <span className="font-display text-sm font-extrabold text-white">{step.n}</span>
                      </div>
                      <h3 className="font-display text-sm font-extrabold uppercase text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-xs leading-6 text-slate-500">{step.body}</p>
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
                      <path d="M12 5v14M5 12l7 7 7-7" stroke="#297858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <ScrollReveal delay={100}>
            <div className="mt-8 grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4">
              {[
                "Works programmed around site occupation",
                "Live-building installations managed routinely",
                "All AHU makes and configurations",
                "Full commissioning documentation issued",
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

      {/* ── 7. CASE STUDY ───────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                Case study
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                NHS Hospital<br />AHU Installation Programme
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                A district general hospital required replacement of ageing central plant serving critical wards, theatres, and department areas. Continuous ventilation was non-negotiable throughout.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="border-l-2 border-white/15 pl-4">
                  <span className="text-sm text-white/55">Phased programme delivered over 18 months to maintain live ventilation</span>
                </div>
                <div className="border-l-2 border-white/15 pl-4">
                  <span className="text-sm text-white/55">HTM 03-01 compliance confirmed at commissioning for all clinical areas</span>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/55">
                Each AHU was replaced within a planned shutdown window, with temporary ventilation in place for critical areas. All units were commissioned to HTM 03-01 standards and handed over with full validation documentation.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm font-bold text-white">12 AHUs replaced with zero unplanned service interruptions</span>
                </div>
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm text-white/80">Full HTM 03-01 validation documentation issued at handover</span>
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

            <ScrollReveal delay={80}>
              <div className="relative h-full min-h-[420px] overflow-hidden shadow-lg lg:min-h-[520px]">
                <Image
                  src="/hospital.png"
                  alt="NHS hospital plant room with newly installed air handling units"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── 8. FAQ ─────────────────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} />

      {/* ── 9. FINAL CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                Speak to an engineer
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
                Discuss Your<br />Installation Project
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                Tell us about the site, the equipment, and any access or programme constraints. We&apos;ll confirm whether we can help and what a practical approach looks like.
              </p>
              <div className="mt-7 space-y-3 border-l border-white/10 pl-5">
                <p className="text-sm text-white/60">40+ years of AHU installation experience</p>
                <p className="text-sm text-white/60">Mechanical, electrical, and commissioning — one team</p>
                <p className="text-sm text-white/60">Live buildings, healthcare, and complex access managed routinely</p>
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
                    Send us the key details — site location, equipment type, and any programme or access constraints. We&apos;ll respond within one working day.
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
                      No obligation — practical advice from the first call
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── 10. RELATED SERVICES ───────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-14">
        <Container>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
            Related services
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/air-handling-unit-manufacturing", label: "AHU Manufacturing" },
              { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
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
                <span className="text-slate-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#297858]">→</span>
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
