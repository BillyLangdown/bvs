import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = {
  title: "EC Fan Upgrades & Retrofits | BVS Building Ventilation Solutions",
  description:
    "Replace AC induction fans with EC technology. Typical energy savings of 30–50% with payback under 3 years. BVS survey, specify, and install across the UK.",
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
    title: "Fan Audit & Energy Analysis",
    body: "We survey your AHU fans, record motor type and power draw, and model the energy savings from EC replacement with a clear payback projection.",
    points: [
      "Motor type, age, and power consumption recorded",
      "Before-and-after energy model produced",
      "Payback period calculated per unit",
    ],
  },
  {
    n: "02",
    title: "Fan Selection & Specification",
    body: "EC fans are selected to match the existing duty — airflow, static pressure, and speed — with controls integration specified at the same time.",
    points: [
      "Performance matched to existing duty",
      "Ziehl-Abegg, ebm-papst, Systemair selection",
      "BMS interface and control signal specified",
    ],
  },
  {
    n: "03",
    title: "Installation Works",
    body: "Our engineers remove the existing fan and motor assembly and install the new EC unit, including mechanical fixings, electrical supply, and controls wiring.",
    points: [
      "Fan and motor assembly fully replaced",
      "Electrical supply and controls wired",
      "Out-of-hours or phased installation available",
    ],
  },
  {
    n: "04",
    title: "Commissioning & Handover",
    body: "Full airflow commissioning with speed verification, BMS integration testing, and confirmed energy performance before sign-off.",
    points: [
      "Airflow and speed verified against design",
      "BMS integration tested and confirmed",
      "Handover documentation and energy sign-off",
    ],
  },
];

const faqs = [
  {
    q: "How much can I save by upgrading to EC fans?",
    a: "Typically 30–50% on fan energy. For AHUs running 24 hours a day, this translates to significant annual savings. We model this precisely based on your current consumption before you commit.",
  },
  {
    q: "Can EC fans be fitted to any AHU?",
    a: "In the vast majority of cases, yes. EC plug fans can replace belt-drive or direct-drive AC fan sets in most AHU configurations. We confirm suitability at the audit stage.",
  },
  {
    q: "Do EC fan upgrades qualify for any funding or incentives?",
    a: "Energy efficiency upgrades may qualify for Enhanced Capital Allowances or SALIX funding in the public sector. We can provide the documentation needed to support a funding application.",
  },
  {
    q: "How disruptive is the installation?",
    a: "A single fan set typically takes one day to replace. Where multiple sets are being upgraded, we stagger works to keep ventilation running throughout, or complete over a planned shutdown.",
  },
  {
    q: "Do you upgrade single fans or multiple units across a portfolio?",
    a: "Both. We work on single-unit upgrades and multi-site rollouts. Where a portfolio of buildings is involved, we phase the programme and provide consistent reporting across the estate.",
  },
  {
    q: "What controls do EC fans need?",
    a: "Most EC fans accept a 0–10V or Modbus control signal and integrate directly with building management systems. Where existing controls need upgrading to use EC capability, we handle that too.",
  },
];

/* ── PAGE ─────────────────────────────────────────────────────────────── */

export default function ECFanUpgradesPage() {
  return (
    <div>

      {/* ── 1. HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/ec-fan-upgrade.png"
          alt="EC fan installed in an air handling unit replacing AC belt-driven motor"
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
              EC Fan Upgrades &amp; Retrofits
            </p>
            <h1
              className="font-display text-2xl font-extrabold uppercase leading-[1.08] text-white sm:text-5xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Replace Old Fans.<br />Save 30–50% On Energy.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-white/85" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              Upgrading from AC induction to EC fan technology is one of the most cost-effective energy improvements available for commercial HVAC. Survey, specification, installation, and commissioning — one team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Request a fan audit
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
                { stat: "30–50%", label: "Typical Energy Saving" },
                { stat: "Under 3 Yrs", label: "Typical Payback" },
                { stat: "Any AHU", label: "Make or Model" },
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
                Are Your Fans<br />Costing You Too Much?
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                AC induction fans are a measurable, fixable drain on energy budgets. If any of the points below apply, an EC fan audit is the practical next step.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:text-[#1d5c42]"
                >
                  Request a fan audit →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <ul className="flex flex-col gap-3">
                {[
                  "Fan energy consumption is above benchmark or unexpectedly rising",
                  "Belt-driven fans requiring frequent belt and bearing replacement",
                  "No variable speed control — fans running at full speed continuously",
                  "Noise levels at part load are too high for the environment",
                  "BMS integration or demand-controlled ventilation is being planned",
                  "Energy reduction targets, Part L compliance, or ESOS audits required",
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

      {/* ── 4. THE CASE FOR EC ─────────────────────────────────────────── */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                The case for EC technology
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
                AC Induction vs EC Direct Drive
              </h2>
              <div className="mx-auto mt-4 h-[3px] w-10 bg-[#297858]" />
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                The performance gap between AC induction and EC technology is measurable and consistent. In an AHU that runs 24 hours a day, the energy difference is significant.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={80}>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">

              <div className="border border-slate-200 bg-white p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  AC Induction (existing fans)
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-500">
                  <p>40–60% motor efficiency range</p>
                  <p>Belt and pulley maintenance required</p>
                  <p>Costly AC drives needed for variable speed</p>
                  <p>No built-in fault diagnostics</p>
                </div>
                <p className="mt-6 text-sm font-semibold text-slate-400">Ageing technology at increasing running cost</p>
              </div>

              <div className="relative overflow-hidden bg-[#111418] p-6 sm:p-8 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-[#297858]/20 to-transparent" />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#297858]">
                    EC Direct Drive (upgraded fans)
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-white/80">
                    <p>70–90% efficiency across the operating range</p>
                    <p>No belts — bearing life extended, maintenance reduced</p>
                    <p>Integral speed control via 0–10V or Modbus signal</p>
                    <p>Built-in diagnostics and BMS integration</p>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-white">Lower energy. Lower maintenance. Better control.</p>
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
              Why EC fans deliver
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              Benefits of EC Fan Technology
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              EC fans offer measurable improvements across energy, maintenance, control, and acoustic performance — all within the existing AHU casing.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "30–50% Energy Savings", desc: "EC motors deliver efficiencies of 70–90% versus 40–60% for AC induction — savings that compound across every hour of operation." },
              { title: "Payback Under 3 Years", desc: "Most upgrades pay for themselves through energy savings within 2–3 years, often faster where units run continuously or energy costs are high." },
              { title: "Precise Speed Control", desc: "EC fans respond smoothly to 0–10V or Modbus signals — no performance steps, no separate AC drive required." },
              { title: "Reduced Noise at Part Load", desc: "EC fans run quieter at reduced speeds, improving acoustic conditions in offices, hotels, and healthcare environments." },
              { title: "Lower Maintenance Overhead", desc: "No belts, no pulleys, no separate drive unit to service. Bearing life is typically longer and fault diagnostics are often built in." },
              { title: "Direct BMS Integration", desc: "Native integration with BMS platforms removes the need for a separate AC drive and simplifies the controls architecture." },
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
              From Audit to Commission
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              A four-step process from initial energy audit through to verified commissioning — delivered by the same engineering team throughout.
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
                "Energy model provided before commitment",
                "Works staged to keep ventilation live",
                "All makes and AHU configurations",
                "ESOS-qualifying documentation included",
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
                Leisure Centre<br />EC Fan Upgrade
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                AHU failure caused total airflow loss and uncontrolled humidity across a pool hall. Belt-driven fans had failed and the drive arrangement was beyond economic repair.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="border-l-2 border-white/15 pl-4">
                  <span className="text-sm text-white/55">High-humidity pool environment with strict airflow requirements</span>
                </div>
                <div className="border-l-2 border-white/15 pl-4">
                  <span className="text-sm text-white/55">Existing belt drive arrangement removed and EC plug fans installed</span>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/55">
                Direct-drive EC fans restored full airflow to 6 m/s, stabilised pool hall humidity, and eliminated the belt-driven maintenance overhead — including quarterly belt changes and bearing replacements.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm font-bold text-white">Full airflow restored and humidity stabilised within 2 days</span>
                </div>
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm text-white/80">Ongoing belt maintenance overhead eliminated entirely</span>
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
                  src="/swimming-pool.png"
                  alt="Leisure centre swimming pool — EC fan upgrade restored full airflow and humidity control"
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
                Request a<br />Fan Audit
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                Tell us how many fans, the current motor type, and typical operating hours. We&apos;ll model the energy savings and show you what payback looks like before you commit.
              </p>
              <div className="mt-7 space-y-3 border-l border-white/10 pl-5">
                <p className="text-sm text-white/60">40+ years of AHU and fan engineering experience</p>
                <p className="text-sm text-white/60">Manufacturer-agnostic — we select on performance, not supplier</p>
                <p className="text-sm text-white/60">Energy model provided before any commitment to works</p>
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
                    Send us your AHU details — number of fans, motor type, and operating schedule. We&apos;ll respond with a practical energy model within one working day.
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
                      Energy model included before any commitment
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
              { href: "/air-handling-unit-controller-solutions-upgrades", label: "Controller Upgrades" },
              { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
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
