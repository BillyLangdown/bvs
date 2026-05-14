import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
function Zap({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Wrench({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ClipboardCheck({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 14 2 2 4-4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const metadata = {
  title: "EC Fan Upgrades & Retrofits for Existing AHUs | BVS",
  description:
    "EC fan retrofits for existing air handling units. Reduce energy consumption, improve reliability, and support decarbonisation targets — without full AHU replacement.",
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
    q: "Can EC fans be retrofitted into any existing AHU?",
    a: "In the vast majority of cases, yes. EC plug fans can replace belt-drive or direct-drive AC fan sets in most AHU configurations. We confirm suitability at the audit stage before any commitment is made.",
  },
  {
    q: "Does the AHU casing need to be replaced?",
    a: "No. The retrofit upgrades the fan set within the existing AHU casing. The unit remains in place and the existing ductwork connections and services stay intact — which is what makes it a cost-effective alternative to full replacement.",
  },
  {
    q: "How much energy can an EC fan retrofit save?",
    a: "EC motors are significantly more efficient than AC induction motors, particularly at part load. The actual saving depends on your current motor type and operating hours — we model this against your consumption before you commit to any works.",
  },
  {
    q: "Do EC fan retrofits support Part L compliance?",
    a: "Yes. EC fan upgrades generate measurable, documentable kWh savings that directly support Part L compliance and count towards ESOS audit requirements. We provide the energy documentation needed at handover.",
  },
  {
    q: "How disruptive is the installation?",
    a: "A single fan set replacement typically takes one day on site. Where multiple sets are being upgraded, we stagger works to keep ventilation running throughout, or complete during a planned shutdown.",
  },
  {
    q: "What controls integration do EC fans require?",
    a: "Most EC fans accept a 0–10V or Modbus control signal and integrate directly with building management systems. Where existing controls need upgrading to take advantage of EC capability, we include that within the same scope of works.",
  },
  {
    q: "Do you work on single units or multi-site programmes?",
    a: "Both. We handle single-unit upgrades and phased multi-site rollouts. Where a portfolio of buildings is involved, we provide consistent energy modelling, reporting, and documentation across the estate.",
  },
];

export default function ECFanUpgradesPage() {
  return (
    <div>

      {/* ── 1. HERO ── matches homepage structure ─────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
      <Image
  src="/fan-attached-to-bulkhead.png"
  alt="EC fan unit installed in an existing air handling unit"
  fill
  priority
  className="object-cover object-center"

  sizes="100vw"
/>
        {/* Mobile: solid dark so text is always legible */}
        <div className="absolute inset-0 bg-black/60 sm:hidden" />
        {/* Desktop: left-to-right gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 via-[35%] to-transparent" />

        <Container className="relative flex min-h-[620px] items-center py-14 pb-28 sm:min-h-[600px] sm:py-20 sm:pb-20">
          <div className="max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              EC Fan Upgrades & Retrofits
            </p>
            <h1
              className="font-display text-3xl font-extrabold uppercase leading-[1.08] text-white sm:text-4xl lg:text-6xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
             Lower energy, better reliability.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p
              className="mt-5 max-w-xl text-[15px] leading-7 text-white"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              EC fan retrofits upgrade the existing fan set within your current AHU casing, improving efficiency, reliability, and control without the cost or disruption of full unit replacement. A direct route to reducing your AHU energy consumption and supporting your decarbonisation and net zero targets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#upgrade"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
               Discuss Your Upgrade
                <ArrowIcon />
              </a>
              <a
  href="#next-section"
  className="inline-flex items-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
>
  Learn more
  <ArrowDownIcon />
</a>
            </div>
          </div>
        </Container>

        {/* Stats strip — same position as homepage */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "40+", label: "Years Experience" },
                { stat: "Nationwide", label: "UK Coverage" },
                { stat: "All Makes", label: "& Configurations" },
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

      {/* ── TRUST BAR ── identical to homepage ───────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-7 sm:py-10">
        <Container>
          <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Trusted by leading organisations
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent sm:hidden" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:hidden" />
            <div className="overflow-x-auto no-scrollbar sm:overflow-visible">
              <div className="flex min-w-max gap-x-6 gap-y-5 pl-4 pr-10 sm:auto-cols-max sm:grid sm:min-w-0 sm:grid-flow-col sm:justify-center sm:px-0">
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
          </div>
        </Container>
      </section>

      {/* ── 2. PROBLEM ── surface-2 ──────────────────────────────────────── */}
 

<section className="bg-[#f7f6f5] py-14 sm:py-18">
  <Container>
    <ScrollReveal className="mb-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        Common upgrade drivers
      </p>

      <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
        Why Facilities Teams
        <br />
        Upgrade Fan Sets
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="grid gap-4 sm:grid-cols-3">
      {[
        {
          n: "01",
          icon: Zap,
          heading: "High Energy Use",
          body:
            "Older AC fan motors consume significantly more energy than modern EC systems.",
        },
        {
          n: "02",
          icon: Wrench,
          heading: "Ongoing Maintenance",
          body:
            "Belt-driven fan sets require regular servicing and can cause airflow loss when components fail.",
        },
        {
          n: "03",
          icon: ClipboardCheck,
          heading: "Efficiency Targets",
          body:
            "EC fan upgrades support compliance and help reduce operational energy use.",
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <ScrollReveal key={item.n} className="h-full">
            <div className="relative h-full overflow-hidden border border-slate-200 bg-white p-6">
              
              <span className="absolute right-5 top-4 font-display text-4xl font-extrabold text-[#297858]/10">
                {item.n}
              </span>
        
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#297858]/10">
                <Icon className="h-5 w-5 text-[#297858]" strokeWidth={2.2} />
              </div>
        
              <h3 className="mt-5 font-display text-sm font-extrabold uppercase text-slate-900">
                {item.heading}
              </h3>
        
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.body}
              </p>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  </Container>
</section>

      {/* ── 3. SOLUTION ── dark, card-based comparison ───────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
  <Container>
    <ScrollReveal className="mb-8 max-w-2xl">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        AC vs EC technology
      </p>

      <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
        How EC Technology
        <br />
        Compares
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="overflow-hidden border border-white/10 bg-white/[0.03]">
      
      {/* Header */}
      <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-white/10">
        
        <div className="border-r border-white/10 px-4 py-3" />

        <div className="border-r border-white/10 px-4 py-3">
          <p className="text-left text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
            AC
          </p>
        </div>

        <div className="px-4 py-3">
          <p className="text-left text-[10px] font-bold uppercase tracking-[0.18em] text-[#8fd1b5]">
            EC
          </p>
        </div>
      </div>

      {[
        {
          label: "Efficiency",
          ac: "Lower",
          ec: "Higher",
        },
        {
          label: "Maintenance",
          ac: "High",
          ec: "Low",
        },
        {
          label: "Speed Control",
          ac: "External drive",
          ec: "Integrated",
        },
        {
          label: "BMS Integration",
          ac: "Additional hardware",
          ec: "Native",
        },
        {
          label: "Diagnostics",
          ac: "Limited",
          ec: "Built-in",
        },
        {
          label: "Energy Use",
          ac: "Higher",
          ec: "Lower",
        },
      ].map((row, i, arr) => (
        <div
          key={row.label}
          className={`grid grid-cols-[1.2fr_1fr_1fr] ${
            i !== arr.length - 1 ? "border-b border-white/10" : ""
          }`}
        >
          {/* Label */}
          <div className="border-r border-white/10 px-4 py-4">
            <p className="text-xs font-medium text-white">
              {row.label}
            </p>
          </div>

          {/* AC */}
          <div className="border-r border-white/10 px-4 py-4">
            <p className="text-left text-xs text-white/35">
              {row.ac}
            </p>
          </div>

          {/* EC */}
          <div className="px-4 py-4">
            <p className="text-left text-xs font-medium text-[#8fd1b5]">
              {row.ec}
            </p>
          </div>
        </div>
      ))}
    </div>
  </Container>
</section>

      {/* ── 4. BENEFITS ── white ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
  <Container>
    <ScrollReveal className="mb-10">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        What the upgrade delivers
      </p>

      <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
        Typical Outcomes
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {[
        {
          heading: "Lower Energy Use",
          detail:
            "Higher efficiency EC motors reduce energy consumption. Savings can be modelled against existing systems before upgrade.",
        },
        {
          heading: "Higher Reliability",
          detail:
            "No belts or pulleys. Fewer moving parts means fewer failures and lower maintenance.",
        },
        {
          heading: "Better Control",
          detail:
            "Direct BMS or 0–10V control gives accurate speed adjustment and improved part-load efficiency.",
        },
        {
          heading: "Longer Asset Life",
          detail:
            "Retrofit EC upgrades extend AHU life without replacing the full unit or casing.",
        },
        {
          heading: "Redundancy",
          detail:
            "Dual fan configurations available where system requirements demand a backup option.",
        },
      ].map((item, i) => (
        <ScrollReveal key={item.heading} delay={i * 60}>
          <div className="h-full border-t-2 border-[#297858] bg-[#f7f6f5] p-5">
            <h3 className="font-display text-sm font-extrabold uppercase text-slate-900">
              {item.heading}
            </h3>

            <div className="my-3 h-px bg-slate-200" />

            <p className="text-xs leading-5 text-slate-500">
              {item.detail}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>

    <div className="mt-6 grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4">
      {[
        "Part L compliance support",
        "ESOS reporting ready",
        "No AHU replacement needed",
        "Works across all systems",
      ].map((item) => (
        <div
          key={item}
          className="flex items-center gap-2.5 bg-white px-5 py-4"
        >
          <CheckIcon />
          <span className="text-xs font-semibold text-slate-700">
            {item}
          </span>
        </div>
      ))}
    </div>
  </Container>
</section>

      {/* ── 5. SOCIAL PROOF ── dark ───────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                Project example
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                Leisure Centre<br />EC Fan Retrofit
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                Failed belt-driven fans in a pool hall AHU caused complete airflow loss and uncontrolled humidity. The belt drive arrangement was beyond economic repair. Rather than replacing the AHU, BVS removed the existing fan set, installed EC plug fans within the original casing, and restored full airflow within two days.
              </p>
              <div className="mt-6 space-y-3">
                <div className="border-l-2 border-[#297858] pl-4">
                  <p className="text-sm leading-6 text-white/65">
                    Full airflow and humidity control restored. Ongoing belt maintenance overhead eliminated. AHU casing and ductwork connections untouched.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
  <Link
    href="/case-studies/leisure-centre-ec-fan-retrofit"
    className="inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
  >
    Read full case study
  </Link>

  <Link
    href="/case-studies"
    className="text-sm font-semibold text-white/60 transition-colors hover:text-white"
  >
    View all case studies →
  </Link>
</div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="relative min-h-[300px] overflow-hidden lg:min-h-[420px]">
                <Image
                  src="/swimming-pool.png"
                  alt="Leisure centre — EC fan retrofit restored full airflow and humidity control"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 6. HOW IT WORKS ── surface-2 ─────────────────────────────────── */}
      <section className="bg-[#f7f6f5] py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              How it works
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              From inital appointment to<br />Return to Service
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                title: "Discuss Your Upgrade",
                body: "We analyse your AHU fan sets, record motor type and current power draw, and model projected energy savings with a payback assessment per unit.",
                points: ["Motor type and consumption recorded", "Energy model produced", "Recommendations from our experts"],
              },
              {
                n: "02",
                title: "Fan Selection",
                body: "EC fans are selected to match the existing airflow duty, static pressure, and speed range. Controls integration is specified at the same time.",
                points: ["Matched to existing duty", "Ziehl-Abegg, ebm-papst, Systemair", "BMS interface specified"],
              },
              {
                n: "03",
                title: "Installation",
                body: "The existing fan and motor assembly is removed and the EC unit installed — mechanical fixings, electrical supply, and controls wiring all included.",
                points: ["Existing fan set fully removed", "Electrical and controls wired", "Overnight or phased working available"],
              },
              {
                n: "04",
                title: "Commissioning",
                body: "Airflow is commissioned, speed and BMS integration verified, and performance confirmed against the projected model before handover.",
                points: ["Airflow and speed verified", "BMS integration tested", "ESOS documentation issued"],
              },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 60}>
                <div className="border border-slate-200 bg-white p-5">
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

      {/* ── 7. OFFER ── dark ─────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-14 sm:py-16">
        <Container>
          <ScrollReveal>
            <div className="border border-[#297858]/40 bg-[#297858]/10 p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                    No commitment required
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                  Upgrade Assessment
                  </h2>
                  <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
                  <p className="mt-4 text-sm leading-6 text-white/60">
                  Before any works are proposed, we assess your existing fan sets and recommend an upgrade solution suited to your system, operational requirements, and long-term performance goals.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {[
                      "Energy-saving guidance and recommendations from AHU specialists",
                      "Retrofit suitability confirmed on site",
                      "Part L and ESOS compliance documentation at handover",
                      "No obligation to proceed",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/65">
                        <CheckIcon className="mt-0.5 shrink-0 text-[#297858]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3 lg:min-w-[190px]">
                  <a
                    href="#audit"
                    className="inline-flex items-center justify-center bg-[#297858] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                  >
                    Book an appointment
                  </a>
                  <a
                    href="tel:01256518170"
                    className="inline-flex items-center justify-center gap-2 border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                  >
                    <PhoneIcon /> 01256 518170
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 8. FINAL CTA ── white ────────────────────────────────────────── */}
      <section id="upgrade" className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Speak to an engineer
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-slate-900 sm:text-4xl">
                Get in touch
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Tell us how many fan sets, the current motor type, and typical operating hours. We&apos;ll produce an energy model showing projected savings and payback before any commitment to works.
              </p>
              <div className="mt-6 space-y-3 border-l-2 border-slate-200 pl-5">
  
  {[
    "Upgrade proposal tailored to your system",
    "All major AHU makes and configurations covered",
    "Direct response from engineers, not a sales team",
  ].map((item) => (
    <div key={item} className="flex items-start gap-2.5">
      <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
      
      <p className="text-sm leading-6 text-slate-500">
        {item}
      </p>
    </div>
  ))}

</div>
              <div className="mt-7 flex flex-col gap-3 border-t border-slate-100 pt-6">
                <a href="tel:01256518170" className="inline-flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-slate-900">
                  <PhoneIcon /> 01256 518170
                </a>
                <a href="mailto:info@bvs-ltd.co.uk" className="inline-flex items-center gap-3 text-sm text-slate-500 transition-colors hover:text-slate-900">
                  <MailIcon /> info@bvs-ltd.co.uk
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="border border-slate-200 bg-[#f7f6f5] p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
                  Enquiry
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Send us the AHU details - number of fans, motor type, and operating schedule. We&apos;ll respond with a practical energy model within one working day.
                </p>
                <div className="mt-6"><QuickQuoteForm /></div>
                <div className="mt-5 flex flex-col gap-2 border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Engineering response within 24 working hours
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Discuss you Project - no commitment required
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 9. FAQ ── surface-2 ───────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} />

      {/* ── RELATED SERVICES ── white ────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related services</p>
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

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

