import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Ventilation Validation Surveys | BVS",
  description:
    "AHU condition surveys and validation reports from BVS. Know exactly what your ventilation assets need — with prioritised, costed recommendations.",
};

const clientLogos = [
  { src: "/nhs-logo.webp", alt: "NHS" },
  { src: "/disney-logo.webp", alt: "Disney" },
  { src: "/marriott-logo.webp", alt: "Marriott Hotels" },
  { src: "/moorfields-logo.webp", alt: "Moorfields Eye Hospital" },
  { src: "/ihg-logo.webp", alt: "IHG Hotels & Resorts" },
  { src: "/travelodge-logo.webp", alt: "Travelodge" },
  { src: "/waitrose-logo.webp", alt: "Waitrose" },
  { src: "/westfield-logo.webp", alt: "Westfield" },
  { src: "/fenwick-logo.webp", alt: "Fenwick" },
  { src: "/freedomleisure-logo.webp", alt: "Freedom Leisure" },
  { src: "/queenmary-logo.webp", alt: "Queen Mary University" },
  { src: "/alpinef1-logo.webp", alt: "Alpine F1 Team" },
];

const coverage = [
  "Fan condition, bearings, and motor performance",
  "Heating and cooling coil efficiency",
  "Filter condition and pressure drops",
  "Damper operation and actuator function",
  "Controls, sensors, and BMS interface",
  "Structural casing and frame integrity",
  "Airflow volumes vs. design specification",
  "Internal cleanliness and hygiene assessment",
];

const deliverables = [
  {
    title: "Photographic Condition Report",
    body: "Every finding is documented with photographs and engineer notes, giving you a clear, evidence-based record of system condition.",
  },
  {
    title: "Priority-Rated Defect Register",
    body: "Defects are categorised by severity — immediate, short-term, and planned — so your maintenance team can act on what matters first.",
  },
  {
    title: "Costed Remedial Recommendations",
    body: "Where works are required, we provide indicative costs alongside the findings, so you can plan budget and programme at the same time.",
  },
  {
    title: "Compliance Reference Points",
    body: "Surveys are carried out against CIBSE, HTM 03-01, and Part L benchmarks where relevant, providing a reference point for audits and planned maintenance.",
  },
];

const painPoints = [
  {
    title: "You Don't Know What You've Got",
    body: "Inherited plant rooms, incomplete maintenance records, or units that have never been formally assessed — a condition survey gives you a reliable baseline.",
  },
  {
    title: "Budget Planning Is Guesswork",
    body: "Without documented condition data, it's difficult to plan maintenance spend or justify capital requests. A survey gives you the evidence to build a credible asset programme.",
  },
  {
    title: "Compliance Questions Are Coming",
    body: "HTM 03-01, CIBSE guidance, and Part L all reference ventilation performance standards. A validation survey provides documented evidence that your systems are meeting — or working towards — those requirements.",
  },
];

export default function ValidationSurveysPage() {
  return (
    <div className="pb-20 lg:pb-0">

      {/* Hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-slate-900">
        <Image
          src="/ventilation-survey-hero.webp"
          alt="BVS engineer carrying out an AHU condition survey on-site"
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

        <Container className="relative flex min-h-[480px] items-center pt-16 pb-28">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#297858]">
              Ventilation Solutions
            </p>
            <h1 className="font-display text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
              Ventilation<br />Surveys
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-lg text-base leading-7 text-white/75">
              Air handling units are significant capital assets. Our validation surveys give you a clear, independent picture of system condition — with prioritised, costed recommendations so you can plan with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Book a survey
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
                { stat: "HTM 03-01", label: "Compliance Reference" },
                { stat: "CIBSE", label: "Aligned Methodology" },
                { stat: "40+", label: "Years Experience" },
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

      {/* Pain points */}
      <section className="bg-[#111418] py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
              Why it matters
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
              What a survey solves
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {painPoints.map((p) => (
              <div key={p.title} className="border-l-2 border-[#297858] pl-5">
                <h3 className="text-sm font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Coverage */}
      <section className="bg-surface-2 py-16">
        <Container>
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
              Scope of assessment
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              What every survey covers
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {coverage.map((item) => (
              <div key={item} className="flex items-start gap-3 border border-slate-200 bg-white p-4">
                <span className="mt-0.5 shrink-0 text-[#297858]">
                  <CheckIcon />
                </span>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="bg-white py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
              What you receive
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              Survey deliverables
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {deliverables.map((d) => (
              <div key={d.title} className="border-t-2 border-[#297858] pt-5">
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-slate-900">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{d.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <section className="border-b border-slate-100 bg-white py-7 sm:py-10">
        <Container>
          <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Trusted by leading organisations
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent sm:hidden" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent sm:hidden" />
            <div className="overflow-x-auto no-scrollbar sm:overflow-visible">
              <div className="flex sm:grid sm:grid-flow-col sm:auto-cols-max sm:justify-center gap-x-6 gap-y-5 min-w-max sm:min-w-0 px-4 sm:px-0">
                {clientLogos.map((logo) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    unoptimized
                    className="h-14 w-auto object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 sm:hidden">
            <span className="text-[10px] font-semibold uppercase tracking-wider opacity-70">swipe to view more</span>
            <svg className="h-4 w-4 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 6l6 6-6 6" />
            </svg>
          </div>
        </Container>
      </section>

      {/* CTA + form */}
      <section className="bg-surface-2 py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
                Get in touch
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">
                Book a survey
              </h2>
              <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Tell us about your site, the number of units, and what access is available. We&apos;ll come back within one working day.
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
                    { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
                    { href: "/solutions/ventilation/troubleshooting", label: "Troubleshooting" },
                    { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
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

      {/* Final CTA
      <section className="bg-[#111418] py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
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
