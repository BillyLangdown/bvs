import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { TrustedByBar } from "@/components/site/TrustedByBar";
import { caseStudies } from "@/lib/caseStudyData";
import { CaseStudyCarousel } from "@/components/site/CaseStudyCarousel";

export const metadata = {
  title: "Ventilation Troubleshooting | BVS",
  description:
    "Expert diagnosis and resolution of ventilation system problems. BVS identify root causes quickly and restore full performance, with a written report included.",
};

const symptoms = [
  {
    title: "Poor or Uneven Airflow",
    body: "Zones receiving too little fresh air, or significant imbalance between supply and extract volumes across the building.",
  },
  {
    title: "Temperature Not Reaching Setpoint",
    body: "Heating or cooling failing to deliver required temperatures, often a coil performance, valve, or controls issue.",
  },
  {
    title: "Unusual Noise or Vibration",
    body: "Fan bearing wear, belt slippage, loose components, or duct resonance can all cause noise and vibration that signals an underlying problem.",
  },
  {
    title: "Problem You Can't Diagnose",
    body: "Intermittent faults, noise with no obvious cause, or a system that's had repairs but keeps failing. 40+ years of site experience means we've seen most of it before.",
  },
];

const process = [
  {
    step: "01",
    title: "On-Site Diagnosis",
    body: "Our engineers assess the full system, fans, coils, filters, dampers, controls, ductwork, and sensors. We identify root causes, not just symptoms.",
  },
  {
    step: "02",
    title: "Remediation Where Possible",
    body: "Where the fault and site conditions allow, we carry out fixes on the same visit, filter replacements, belt adjustments, sensor recalibration, airflow rebalancing. Not every issue can be resolved immediately, but we aim to action what we can and report clearly on what remains.",
  },
  {
    step: "03",
    title: "Written Report & Next Steps",
    body: "A clear, costed report outlining what was found, what was actioned, and any further remedial works required, with priority ratings and indicative costs.",
  },
];

const checks = [
  "Airflow measurement and rebalancing",
  "Fan and motor condition assessment",
  "Controls, thermostats, and sensor calibration",
  "BMS interface and fault code review",
  "Filter inspection and replacement",
  "Coil performance check",
  "Damper operation and actuation",
  "Ductwork leak identification",
];

export default function TroubleshootingPage() {
  return (
    <div className="pb-20 lg:pb-0">

      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/ventilation-troubleshooting-hero.webp"
          alt="BVS engineer diagnosing a ventilation system fault on-site"
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          unoptimized
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 via-[35%] to-transparent" />

        <Container className="relative flex min-h-[620px] items-center py-14 pb-28 sm:min-h-[600px] sm:py-20 sm:pb-20">
          {/* Mobile hero */}
          <div className="sm:hidden max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              Ventilation Troubleshooting
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.08] text-white">
              Ventilation<br />troubleshooting.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <a href="tel:01256518170" className="mt-5 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <p className="mt-3 text-sm leading-6 text-white">
              We diagnose the root cause quickly, fix what we can on the day, and report everything with costed next steps.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Discuss the problem <ArrowIcon />
              </Link>
              <a
                href="#overview"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Learn more <ArrowDownIcon />
              </a>
            </div>
          </div>
          {/* Desktop hero */}
          <div className="hidden sm:block max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              Ventilation Troubleshooting
            </p>
            <h1 className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-6xl">
              Ventilation<br />troubleshooting.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white">
              Ventilation problems affect comfort, air quality, and energy costs. Our engineers get to the root cause quickly, diagnosing faults, resolving what can be fixed on the day, and reporting everything with costed next steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Discuss the problem
                <ArrowIcon />
              </Link>
              <a
                href="#overview"
                className="inline-flex items-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Learn more
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
                { stat: "24hr", label: "Response" },
                { stat: "All Makes", label: "& Models" },
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

      {/* Common symptoms */}
      <section id="overview" className="bg-[#111418] py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
              Common problems
            </p>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Recognise any of these?
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {symptoms.map((s) => (
              <div key={s.title} className="border-l-2 border-[#297858] pl-5">
                <h3 className="text-sm font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-surface-2 py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
              How we work
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Survey to solutions
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {process.map((p) => (
              <div key={p.step} className="bg-white border border-slate-200 p-6">
                <p className="text-3xl font-extrabold text-slate-100">{p.step}</p>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-slate-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we check */}
      <section className="bg-white py-16">
        <Container>
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
              Diagnostic scope
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              What we can assess on site
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {checks.map((item) => (
              <div key={item} className="flex items-start gap-3 border border-slate-200 bg-surface-2 p-4">
                <span className="mt-0.5 shrink-0 text-[#297858]">
                  <CheckIcon />
                </span>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Director quote */}
      <section className="bg-[#111418] py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 h-[3px] w-10 bg-[#297858]" />
            <blockquote className="text-xl font-extrabold leading-snug text-white sm:text-2xl">
              &ldquo;There&apos;s nothing we haven&apos;t seen in 40+ years. Whatever the system, whatever the problem, we&apos;ll get to the bottom of it.&rdquo;
            </blockquote>
            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/40">
              BVS Director
            </p>
          </div>
        </Container>
      </section>

      {/* Case studies */}
      {(() => {
        const studies = caseStudies.filter((s) => s.services.includes("troubleshooting"));
        if (!studies.length) return null;
        return (
          <section className="bg-[#0b0d10] py-14 sm:py-20">
            <Container>
              <div className="mb-8">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                  Our projects
                </p>
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Complex jobs we&apos;ve resolved
                </h2>
                <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              </div>
              <CaseStudyCarousel
                studies={studies}
                intro="Ventilation faults and system failures diagnosed and resolved across commercial and critical environments."
              />
            </Container>
          </section>
        );
      })()}

      {/* Trust bar */}
      <TrustedByBar />

      {/* CTA + form */}
      <section className="bg-surface-2 py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
                Get in touch
              </p>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Tell us what&apos;s happening
              </h2>
              <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Describe the symptoms, noise, temperature, airflow, or compliance, and we&apos;ll respond within one working day with an honest assessment of next steps.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {["No obligation", "Response within one working day", "Honest assessment, no obligation"].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckIcon />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border border-[#297858]/20 bg-[#297858]/5 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#297858]">Call us directly</p>
                <a href="tel:01256518170" className="mt-3 flex items-center gap-3 text-2xl font-extrabold text-slate-900 transition-colors hover:text-[#297858]">
                  <PhoneIcon /> 01256 518170
                </a>
              </div>
            </div>
            <div className="border border-slate-200 bg-white p-8">
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#297858]">Enquiry</p>
              <p className="mb-5 text-xs text-slate-500">We will aim to respond within 24 hours</p>
              <QuickQuoteForm defaultService="Ventilation Troubleshooting" />
            </div>
          </div>
        </Container>
      </section>

      {/* ── RELATED SERVICES ─────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related services</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/ahu-validation-ventilation-surveys", label: "Validation Surveys" },
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/solutions/ventilation/ducting-repair-replacement", label: "Ducting Repair & Replacement" },
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
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

function ArrowDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
