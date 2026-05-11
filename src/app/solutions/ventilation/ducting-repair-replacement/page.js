import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Ducting Repair & Replacement",
  description: "Commercial ductwork repair, relining, and replacement across the UK. BVS manage the full scope from survey to reinstatement - minimum disruption, compliant finish.",
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
    body: "Even small duct leaks can cause significant energy waste - heated or cooled air failing to reach its destination. We identify and seal leakage points to restore system efficiency.",
  },
  {
    title: "Compliance Standards Are Specific",
    body: "Ductwork must meet leakage class requirements under BS EN 12237. We carry out leakage testing and provide documented evidence of compliance.",
  },
  {
    title: "Minimum Disruption Approach",
    body: "We plan all ducting works around your operational schedule. Night shifts, phased programmes, and temporary containment - whatever is needed to keep your building running.",
  },
  {
    title: "Full Scope Capability",
    body: "From a single failed section to a complete reline of a multi-storey riser, we manage the full scope — survey, specification, and delivery co-ordinated by BVS.",
  },
];

export default function DuctingRepairPage() {
  return (
    <div className="pb-20 lg:pb-0">

      {/* Hero */}
      <section className="bg-slate-900 py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Ventilation Solutions
            </p>
            <h1 className="font-display text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
              Ducting Repair &amp; Replacement
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-emerald-500" />
            <p className="mt-5 max-w-lg text-base leading-7 text-white/70">
              Failed or leaking ductwork reduces system performance, wastes energy, and can create compliance issues.
              We survey, repair, reline, or replace - with full documentation and minimum disruption.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
              >
                Discuss your project →
              </Link>
              <a
                href="tel:01256518170"
                className="inline-flex items-center gap-2 border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Call 01256 518170
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-100 bg-white py-8">
        <Container>
          <div className="grid grid-cols-3 gap-4 divide-x divide-slate-100">
            {[
              { stat: "BS EN 12237", label: "Leakage Testing Standard" },
              { stat: "UK Wide", label: "Nationwide Coverage" },
              { stat: "40+ Years", label: "Ductwork Experience" },
            ].map((s) => (
              <div key={s.label} className="px-6 text-center first:pl-0 last:pr-0">
                <p className="font-display text-xl font-extrabold text-emerald-800">{s.stat}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Scope */}
      <section className="bg-surface-2 py-14">
        <Container>
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-700">Scope of work</p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">What we do</h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {scope.map((item) => (
              <div key={item} className="flex items-start gap-3 border border-slate-200 bg-white p-4">
                <span className="mt-0.5 shrink-0 text-emerald-700">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why it matters */}
      <section className="bg-white py-14">
        <Container>
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-700">Why it matters</p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">The case for action</h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="border-l-2 border-emerald-700 pl-5">
                <h3 className="text-sm font-bold text-slate-900">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{r.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote form */}
      <section className="bg-surface-2 py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-700">Get in touch</p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">Discuss your ductwork project</h2>
              <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Tell us about your site and what you need. We&apos;ll come back within one working day with an honest assessment.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {["No obligation", "Speak directly with a specialist", "Response within one working day"].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-emerald-700">
                      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-white p-8">
              <QuickQuoteForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
