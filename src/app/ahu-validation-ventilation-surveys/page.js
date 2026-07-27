import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { TrustedByBar } from "@/components/site/TrustedByBar";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Validation Surveys",
  description: "Entire system condition assessments with a full documented report of findings and proposals. Prioritised, costed recommendations for your ventilation assets.",
  path: "/ahu-validation-ventilation-surveys",
});

const coverage = [
  "Fan condition, bearings, and motor performance",
  "Heating and cooling coil efficiency",
  "Filter condition and pressure drops",
  "Damper operation and actuator function",
  "Controls, sensors, and BMS interface",
  "Structural casing and frame integrity",
  "Airflow volumes vs. design specification",
  "Internal cleanliness and hygiene assessment",
  "Insulation condition and repair requirements",
];

const deliverables = [
  {
    title: "Photographic Condition Report",
    body: "Every finding is documented with photographs and engineer notes, giving you a clear, evidence-based record of system condition.",
  },
  {
    title: "Prioritised Recommendations",
    body: "Findings are categorised by priority so your maintenance team can act on what matters most first. We can work within your budget and timeframes.",
  },
  {
    title: "Costed Remedial Recommendations",
    body: "Where works are required, we provide indicative costs alongside the findings, so you can plan budget and programme at the same time.",
  },
];

const painPoints = [
  {
    title: "You Don't Know What You've Got",
    body: "Inherited plant rooms, incomplete maintenance records, or units that have never been formally assessed, a condition survey gives you a reliable baseline.",
  },
  {
    title: "Budget Planning Is Guesswork",
    body: "Without documented condition data, it's difficult to plan maintenance spend or justify capital requests. A survey gives you the evidence to build a credible asset programme.",
  },
  {
    title: "Everything Is Reactive",
    body: "Without a baseline condition record, every decision is reactive; you respond to failures rather than preventing them. A survey gives you the data to move from reactive to planned.",
  },
];

export default function ValidationSurveysPage() {
  return (
    <div className="pb-20 lg:pb-0">

      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/ventilation-survey-hero.webp"
          alt="BVS engineer carrying out an AHU condition survey on-site"
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          unoptimized
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-black/30 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

        <Container className="relative flex min-h-[620px] items-center py-14 pb-28 sm:min-h-[600px] sm:py-20 sm:pb-20">
          {/* Mobile hero */}
          <div className="sm:hidden max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              Validation Surveys
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.08] text-white">
              Validation surveys.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <a href="tel:01256518170" className="mt-5 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <p className="mt-3 text-sm leading-6 text-white">
              Comprehensive condition assessment with a documented report, prioritised defects, and costed recommendations.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Book a survey <ArrowIcon />
              </Link>
              <a
                href="#why-it-matters"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Learn more <ArrowDownIcon />
              </a>
            </div>
          </div>
          {/* Desktop hero */}
          <div className="hidden sm:block max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              Validation Surveys
            </p>
            <p className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Validation surveys.
            </p>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-lg text-base leading-7 text-white/75">
              An entire system condition assessment with a full documented report of findings and proposals. Know exactly what your assets need, with prioritised, costed recommendations you can act on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Book a survey
                <ArrowIcon />
              </Link>
              <a
                href="#why-it-matters"
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
                { stat: "Fully", label: "Documented" },
                { stat: "Independent", label: "Assessment" },
                { stat: "40+", label: "Years Experience" },
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

      {/* Pain points */}
      <section id="why-it-matters" className="bg-[#111418] py-14 sm:py-16">
        <Container>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
            Why it matters
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
            When a survey is the right call
          </h2>
          <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {painPoints.map((p) => (
              <div key={p.title} className="border border-white/10 bg-white/5 p-6">
                <div className="mb-4 h-[3px] w-8 bg-[#297858]" />
                <h3 className="text-sm font-extrabold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Coverage */}
      <section className="bg-[#f7f6f4] py-14 sm:py-20">
        <Container>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
            Scope of assessment
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            What surveys can include
          </h2>
          <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
            We carry out surveys across all makes and models, including fault finding, condition assessment, and performance verification. Every finding is documented and all survey work is carried out on site by our engineers.
          </p>
          <div className="mt-10 grid gap-0 border border-slate-200 bg-white sm:grid-cols-2">
            {coverage.map((item, i) => (
              <div key={item} className={`flex items-start gap-3 border-b border-slate-200 p-5 ${i % 2 === 0 ? "sm:border-r" : ""}`}>
                <span className="mt-0.5 shrink-0 text-[#297858]"><CheckIcon /></span>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="bg-white py-14 sm:py-20">
        <Container>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
            What you receive
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Survey deliverables
          </h2>
          <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
            Every survey produces a complete set of documented outputs your team can act on.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {deliverables.map((d, i) => (
              <div key={d.title} className="border border-slate-200 p-6">
                <span className="text-2xl font-extrabold text-slate-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-bold text-slate-900">{d.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{d.body}</p>
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
                Book a survey
              </h2>
              <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Tell us about your site, the number of units, and what access is available. We&apos;ll come back within one working day.
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
              <QuickQuoteForm defaultService="Validation Surveys" />
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
              { href: "/air-handling-unit-troubleshooting", label: "Ventilation Troubleshooting" },
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
              { href: "/solutions/ventilation/ducting-repair-replacement", label: "Ducting Repair & Replacement" },
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

      {/* Final CTA
      <section className="bg-[#111418] py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Ready to understand your assets?
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-white/65">
                Whether you need a single-unit assessment or a multi-site condition audit, we work to your programme and deliver a report you can act on.
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
                className="inline-flex items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
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
      </section> */}

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

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
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

function ArrowDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
