import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { TrustedByBar } from "@/components/site/TrustedByBar";

export const metadata = {
  title: "Ducting Repair & Replacement | BVS",
  description: "Commercial ductwork repair, relining, and replacement across the UK. BVS manage the full scope from survey to reinstatement, minimum disruption, compliant finish.",
};

const scope = [
  "Ductwork survey and condition assessment",
  "Leakage testing to BS EN 12237",
  "Internal duct lining and relining",
  "Failed section removal and replacement",
  "Flexible ductwork connections",
  "Fire damper access and reinstatement",
  "Insulation and vapour barrier application",
  "Full reinstatement and sign-off documentation",
];

const reasons = [
  {
    title: "Leaking Ductwork Wastes Energy",
    body: "Even small duct leaks cause significant energy waste, heated or cooled air failing to reach its destination. We identify and seal leakage points to restore system efficiency.",
  },
  {
    title: "Compliance Standards Are Specific",
    body: "Ductwork must meet leakage class requirements under BS EN 12237. We carry out leakage testing and provide documented evidence of compliance.",
  },
  {
    title: "Minimum Disruption Approach",
    body: "We plan all ducting works around your operational schedule. Night shifts, phased programmes, and temporary containment, whatever is needed to keep your building running.",
  },
  {
    title: "Full Scope Capability",
    body: "From a single failed section to a complete reline of a multi-storey riser, we manage the full scope, survey, specification, and delivery co-ordinated by BVS.",
  },
];

export default function DuctingRepairPage() {
  return (
    <div className="pb-20 lg:pb-0">

      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/ahu-duct-installation.webp"
          alt="Commercial ductwork installation and repair by BVS engineers"
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          unoptimized
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 via-[35%] to-transparent" />

        <Container className="relative flex min-h-[620px] items-center py-14 pb-28 sm:min-h-[600px] sm:py-20 sm:pb-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              Ventilation Solutions
            </p>
            <h1 className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-6xl">
              Ducting Repair<br />&amp; Replacement
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white">
              Failed or leaking ductwork reduces system performance, wastes energy, and can create compliance issues. We survey, repair, reline, or replace, with full documentation and minimum disruption.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Discuss your project
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
                { stat: "BS EN 12237", label: "Leakage Testing Standard" },
                { stat: "UK Wide", label: "Nationwide Coverage" },
                { stat: "40+", label: "Years Experience" },
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

      {/* Why it matters */}
      <section id="overview" className="bg-[#111418] py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
              Why it matters
            </p>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              The case for action
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="border-l-2 border-[#297858] pl-5">
                <h3 className="text-sm font-bold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{r.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Scope */}
      <section className="bg-surface-2 py-16">
        <Container>
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
              Scope of work
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              What we do
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {scope.map((item) => (
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

      {/* Trust bar */}
      <TrustedByBar />

      {/* Marriott case study */}
      <section className="relative overflow-hidden bg-[#111418] py-20 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="/hotel.webp"
            alt="Marriott Forest of Arden swimming pool, BVS ductwork troubleshooting"
            fill
            className="object-cover opacity-80 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111418] via-[#111418]/50 to-[#111418]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(17,20,24,0.2),rgba(17,20,24,0.85))]" />
        </div>

        <Container className="relative">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
            Case study
          </p>

          <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-4xl">
            Marriott Forest of Arden<br />
            Swimming Pool AHU
          </h2>

          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">
            The AHU serving the hotel&apos;s swimming pool was designed to maintain 31°C, but had only ever reached 24°C. BVS validated the system, identified leaking 30-year-old ductwork, inadequate diffuser velocities, and AHU configuration issues, then delivered a full remediation scope to restore design performance.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-2xl">
            {[
              { stat: "31°C", label: "Design target temp" },
              { stat: "24°C", label: "Achieved before survey" },
              { stat: "30 yrs", label: "Age of ductwork" },
              { stat: "4 Areas", label: "Issues identified & resolved" },
            ].map((item) => (
              <div key={item.label} className="border border-white/15 bg-white/10 px-4 py-5 backdrop-blur-sm">
                <p className="text-2xl font-extrabold text-[#297858]">{item.stat}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-white/50">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/case-studies/marriott-forest-of-arden-pool-ventilation"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] transition hover:text-white"
            >
              See full case study →
            </Link>
            <Link
              href="/case-studies"
              className="text-sm font-semibold text-white/60 transition hover:text-white"
            >
              All case studies →
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA + form */}
      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
                Get in touch
              </p>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Discuss your ductwork project
              </h2>
              <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Tell us about your site and what you need. We&apos;ll come back within one working day with an honest assessment.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {["No obligation", "Honest assessment, no obligation", "Response within one working day"].map((p) => (
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
              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Related services
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { href: "/solutions/ventilation/validation-surveys", label: "Validation Surveys" },
                    { href: "/solutions/ventilation/troubleshooting", label: "Troubleshooting" },
                    { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center justify-between border border-slate-200 bg-surface-2 px-4 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-[#297858]/30 hover:bg-slate-50"
                    >
                      {l.label}
                      <span className="ml-3 shrink-0 text-[#297858]">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="border border-slate-200 bg-surface-2 p-8">
              <QuickQuoteForm />
            </div>
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
