import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { TrustedByBar } from "@/components/site/TrustedByBar";

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
    title: "Compliance Concerns",
    body: "A unit flagged during an audit, or a system that can't evidence its performance against CIBSE or HTM 03-01 benchmarks.",
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
  "Filter inspection and replacement",
  "Coil performance check",
  "Damper operation and actuation",
  "Controls, thermostats, and sensor calibration",
  "Ductwork leak identification",
  "BMS interface and fault code review",
];

export default function TroubleshootingPage() {
  return (
    <div className="pb-20 lg:pb-0">

      {/* Hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-slate-900">
        <Image
          src="/ventilation-troubleshooting-hero.webp"
          alt="BVS engineer diagnosing a ventilation system fault on-site"
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          unoptimized
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

        <Container className="relative flex min-h-[480px] items-center pt-16 pb-28">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#297858]">
              Ventilation Solutions
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Ventilation<br />Troubleshooting
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-lg text-base leading-7 text-white/75">
              Ventilation problems affect comfort, air quality, energy costs, and compliance. Our engineers get to the root cause quickly, diagnosing faults, resolving what can be fixed on the day, and reporting everything with costed next steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Discuss the problem
                <ArrowIcon />
              </Link>
              <a
                href="tel:01256518170"
                className="inline-flex items-center gap-2 border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <PhoneIcon />
                01256 518170
              </a>
            </div>
          </div>
        </Container>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "Root Cause", label: "Not Just Symptoms" },
                { stat: "Same Visit", label: "Fixes Where Possible" },
                { stat: "Written", label: "Report Included" },
              ].map((s) => (
                <div key={s.label} className="px-2 text-center sm:px-6">
                  <p className="text-sm font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-wide text-white/55 sm:text-[10px]">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* Common symptoms */}
      <section className="bg-[#111418] py-16">
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
              From call-out to close-out
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
              What we assess on-site
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
                {["No obligation", "Response within one working day", "Speak directly with a specialist"].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckIcon />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Related services
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { href: "/solutions/ventilation/validation-surveys", label: "Validation Surveys" },
                    { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
                    { href: "/solutions/ventilation/ducting-repair-replacement", label: "Ducting Repairs" },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center justify-between border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-[#297858]/30 hover:bg-slate-50"
                    >
                      {l.label}
                      <span className="ml-3 shrink-0 text-[#297858]">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="border border-slate-200 bg-white p-8">
              <QuickQuoteForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-[#111418] py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Got a ventilation problem?
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-white/65">
                Whether it&apos;s an urgent performance issue or something that&apos;s been getting worse over time, speak to one of our engineers and we&apos;ll advise on the right course of action.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {["No obligation enquiry", "Response within one working day", "Speak directly with a specialist"].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
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
            </div>
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
