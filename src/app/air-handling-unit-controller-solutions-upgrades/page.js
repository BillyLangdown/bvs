import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = {
  title: "AHU Controller Solutions & Upgrades | BVS Building Ventilation Solutions",
  description:
    "AHU controls assessment, panel build, and commissioning across the UK. BMS-ready, open protocol, and energy reduction programmes for single units and multi-site estates.",
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
    title: "Controls Assessment",
    body: "We survey the existing controls installation — hardware condition, sequence of operation, BMS integration, and energy performance — and identify what an upgrade would achieve.",
    points: [
      "Existing controller, sensors, and actuators assessed",
      "Sequence of operation reviewed against current requirements",
      "Energy savings modelled from proposed upgrade specification",
    ],
  },
  {
    n: "02",
    title: "Specification & Panel Build",
    body: "A controls specification is produced and agreed, new panels are built and tested off-site, and a commissioning programme is agreed before works begin on site.",
    points: [
      "Full controls specification issued for approval",
      "Panels built, wired, and factory-tested before site delivery",
      "Commissioning programme agreed around site occupation",
    ],
  },
  {
    n: "03",
    title: "Installation & Wiring",
    body: "Existing controls are removed and new panels, sensors, actuators, and field wiring installed by our directly employed engineering teams — to a planned programme with minimum disruption.",
    points: [
      "Old controls removed and new panel installed and connected",
      "Sensors, actuators, and field devices wired and labelled",
      "Electrical certification and containment completed",
    ],
  },
  {
    n: "04",
    title: "Commissioning & Handover",
    body: "Sequences are loaded, tested, and tuned. BMS integration is confirmed, energy performance is verified, and full handover documentation is issued.",
    points: [
      "Control sequences tested against approved specification",
      "BMS integration confirmed and I/O verified",
      "Handover documentation, O&M manuals, and energy baseline issued",
    ],
  },
];

const faqs = [
  {
    q: "What energy savings can a controls upgrade deliver?",
    a: "Typically 15–30% reduction in AHU energy consumption through improved sequences, demand-controlled ventilation, and optimised setpoints. The actual saving depends on the existing controls state — we model this at assessment stage.",
  },
  {
    q: "Can you integrate with any BMS?",
    a: "We work with all major BMS platforms using open protocols including BACnet, Modbus, and LON. Where a proprietary system is in use, we confirm integration capability at assessment stage.",
  },
  {
    q: "Do you work on single AHUs or multi-site programmes?",
    a: "Both. We handle single-unit upgrades and phased multi-site programmes. For estates with multiple buildings, we provide consistent reporting, documentation, and a co-ordinated delivery programme.",
  },
  {
    q: "Can you upgrade controls without replacing the AHU?",
    a: "Yes — and this is often the most cost-effective approach. A controls upgrade can extend the useful life of the AHU, improve energy performance, and add BMS integration without the cost of full plant replacement.",
  },
  {
    q: "What happens if the existing sequence of operation is not documented?",
    a: "We assess and document the existing operation at survey stage. Where sequences are missing or incorrect, we develop a new specification in consultation with the client and the facilities team.",
  },
  {
    q: "Do controls upgrades qualify for any incentives?",
    a: "Energy-saving controls upgrades may qualify for SALIX funding in the public sector or qualify as ESOS-reducing actions. We can provide the energy modelling and documentation needed to support an application.",
  },
];

/* ── PAGE ─────────────────────────────────────────────────────────────── */

export default function ControllerUpgradesPage() {
  return (
    <div>

      {/* ── 1. HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/ahu-controls.png"
          alt="AHU controller panel installation showing wired controls and BMS integration"
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
              AHU Controller Solutions &amp; Upgrades
            </p>
            <h1
              className="font-display text-2xl font-extrabold uppercase leading-[1.08] text-white sm:text-5xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Controls That Work.<br />Energy That Falls.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-white/85" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              Obsolete controls, poor sequences, and missing BMS integration are a consistent source of energy waste. We assess, specify, build, install, and commission AHU controls — across single units and multi-site estates.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Request a controls assessment
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
                { stat: "15–30%", label: "Typical Energy Reduction" },
                { stat: "BMS Ready", label: "Open Protocol" },
                { stat: "Open Protocol", label: "BACnet, Modbus, LON" },
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
                Are Your Controls<br />Costing You?
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                Poor controls are one of the most common causes of AHU energy waste — and one of the most cost-effective to fix. If any of the following apply, a controls assessment is the right starting point.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:text-[#1d5c42]"
                >
                  Request an assessment →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <ul className="flex flex-col gap-3">
                {[
                  "AHU running at full speed regardless of load or occupancy",
                  "No BMS integration — controls are standalone and unmonitored",
                  "Sequences of operation are undocumented or unknown",
                  "Existing controller hardware is obsolete or no longer supported",
                  "Energy bills are higher than expected with no clear explanation",
                  "Energy reduction targets, ESOS audits, or Part L compliance required",
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

      {/* ── 4. THE CASE FOR CONTROLS ───────────────────────────────────── */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                The case for controls
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
                Obsolete Controls vs Modern Open Protocol
              </h2>
              <div className="mx-auto mt-4 h-[3px] w-10 bg-[#297858]" />
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                Ageing AHU controls are not just a maintenance risk. They are an active source of energy waste, poor environmental performance, and increasing fault rate. The performance gap between old and new is measurable.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={80}>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">

              <div className="border border-slate-200 bg-white p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Obsolete AHU controls
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-500">
                  <p>Fixed-speed operation regardless of demand</p>
                  <p>No BMS visibility — faults go undetected</p>
                  <p>Sequences drift over time without documentation</p>
                  <p>Spare parts unavailable or costly to source</p>
                </div>
                <p className="mt-6 text-sm font-semibold text-slate-400">Energy waste, reliability risk, and zero visibility</p>
              </div>

              <div className="relative overflow-hidden bg-[#111418] p-6 sm:p-8 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-[#297858]/20 to-transparent" />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#297858]">
                    Modern BVS controls upgrade
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-white/80">
                    <p>Demand-controlled ventilation via VAV or DCV strategies</p>
                    <p>Full BMS integration with open protocol (BACnet, Modbus)</p>
                    <p>Documented sequences, maintained and updateable</p>
                    <p>Alarms, fault logging, and remote monitoring enabled</p>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-white">Lower energy. Better reliability. Full visibility.</p>
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
              A complete controls upgrade service — from assessment and specification through to commissioned installation and documented handover.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Controls Assessment", desc: "Survey of existing hardware, sequences, and BMS integration. Energy model produced showing savings from proposed upgrade." },
              { title: "Specification & Panel Build", desc: "Full controls specification agreed with client. Panels built, wired, and factory-tested before site delivery." },
              { title: "Field Device Installation", desc: "Sensors, actuators, damper actuators, and valve actuators installed and wired to new panel — all labelled to agreed documentation standard." },
              { title: "Sequence Programming", desc: "Control sequences programmed to the approved specification — optimised for energy, comfort, and demand-controlled ventilation where applicable." },
              { title: "BMS Integration", desc: "Open protocol integration with BMS — BACnet, Modbus, or LON. I/O mapping, alarm configuration, and graphics points verified at commissioning." },
              { title: "Documentation & Handover", desc: "As-built wiring diagrams, I/O schedule, sequence of operations, commissioning record, and O&M documentation issued at handover." },
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
              Assessment to Handover
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              A four-stage process from controls assessment through to commissioned handover — with panel build and factory testing before a single cable is touched on site.
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
                "Energy model before commitment",
                "Panels factory-tested before site",
                "Open protocol BMS integration",
                "Full as-built documentation issued",
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
                Multi-Site FM<br />Controls Programme
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                A facilities management contractor engaged us to deliver a controls upgrade programme across 14 commercial properties. Existing AHU controllers were obsolete, undocumented, and running without BMS visibility.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="border-l-2 border-white/15 pl-4">
                  <span className="text-sm text-white/55">All 14 sites assessed, specified, and programmed to a consistent standard</span>
                </div>
                <div className="border-l-2 border-white/15 pl-4">
                  <span className="text-sm text-white/55">Open protocol BACnet integration enabled centralised BMS monitoring across the estate</span>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/55">
                We delivered the full programme over 8 months — assessment, panel build, installation, commissioning, and BMS graphics — to a consistent standard across all sites. Energy baselines were established at each site and post-upgrade consumption tracked by the FM client.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm font-bold text-white">14 sites upgraded with full BMS integration — 22% average energy reduction</span>
                </div>
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm text-white/80">Consistent documentation standard across the estate — single point of reference for FM team</span>
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
                  src="/commercial-office.png"
                  alt="Commercial office building — multi-site FM controls upgrade programme"
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
                Request a<br />Controls Assessment
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                Tell us the number of AHUs, the existing controls setup, and any BMS or energy reduction requirements. We&apos;ll model the savings and set out what an upgrade programme looks like.
              </p>
              <div className="mt-7 space-y-3 border-l border-white/10 pl-5">
                <p className="text-sm text-white/60">Single unit upgrades and multi-site programmes</p>
                <p className="text-sm text-white/60">Open protocol BMS integration — BACnet, Modbus, LON</p>
                <p className="text-sm text-white/60">Energy model provided before commitment to works</p>
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
                    Send us the number of AHUs, current controls setup, and any BMS or energy targets. We&apos;ll respond with a practical assessment approach within one working day.
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
                      Energy model included — no obligation to proceed
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
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
              { href: "/air-handling-unit-installation", label: "AHU Installation" },
              { href: "/air-handling-unit-manufacturing", label: "AHU Manufacturing" },
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
