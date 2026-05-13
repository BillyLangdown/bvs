import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Concorde Simulator — Ventilation Survey & Works | BVS Case Study",
  description:
    "BVS carried out a ventilation survey and subsequent works on the Concorde simulator — a unique heritage environment requiring careful handling and specialist knowledge of the existing installation.",
};

export default function ConcrodeSimulatorVentilation() {
  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl py-14 sm:py-20">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-[11px] text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/case-studies" className="hover:text-slate-600 transition-colors">Case Studies</Link>
            <span>›</span>
            <span className="text-slate-600">Concorde Simulator — Ventilation Survey & Works</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Museum & Heritage · Ventilation Survey
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-slate-900 sm:text-4xl">
            Concorde Simulator<br />Ventilation Survey<br />&amp; Works
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* PROJECT OVERVIEW */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The Concorde simulator is a unique heritage installation requiring carefully managed ventilation
            to maintain appropriate conditions for both the exhibit and visitors. The project required BVS
            to survey the existing ventilation arrangement serving the simulator, assess its condition and
            performance, and carry out the necessary remedial works — all within a sensitive museum
            environment.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Site photo
          </div>

          {/* WHAT WE DID */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">Ventilation Survey</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                BVS engineers conducted a detailed survey of the ventilation installation associated with
                the Concorde simulator, documenting the existing system layout, assessing component
                condition, and identifying areas requiring attention.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Remedial Works</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Following the survey, BVS carried out the recommended remedial works — coordinated around
                the museum's public opening hours to avoid disruption to visitors and to respect the
                sensitivity of the heritage environment.
              </p>
            </div>
          </div>

          {/* THE RESULTS */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The survey and subsequent works ensured the ventilation system serving the Concorde simulator
            is operating correctly, maintaining appropriate environmental conditions for the exhibit and
            visitor comfort.
          </p>

          {/* CTA */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Ventilation Survey Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Ventilation survey needed on a specialist or heritage site?</p>
              <p className="mt-1 text-xs text-white/45">We respond within one working day.</p>
            </div>
            <div className="px-6 py-6">
              <QuickQuoteForm />
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link href="/case-studies" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 hover:text-[#297858] transition-colors">
              ← Back to Case Studies
            </Link>
          </div>

        </div>
      </Container>
    </div>
  );
}
