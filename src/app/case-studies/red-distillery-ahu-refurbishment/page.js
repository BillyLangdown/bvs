import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Red English Group Distillery — AHU Refurbishment | BVS Case Study",
  description:
    "BVS refurbished the AHU at Red English Group's distillery facility — restoring reliable ventilation performance in an active production environment.",
};

export default function RedDistilleryAhuRefurbishment() {
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
            <span className="text-slate-600">Red English Group Distillery — AHU Refurbishment</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Manufacturing · AHU Refurbishment
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-slate-900 sm:text-4xl">
            Red English Group<br />Distillery<br />AHU Refurbishment
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* PROJECT OVERVIEW */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The Red English Group distillery required an AHU refurbishment to restore reliable ventilation
            performance within its production facility. Distillery environments present specific HVAC
            challenges — including temperature and humidity demands tied to production processes — making
            reliable air handling critical to both building performance and operational output. The existing
            AHU required a targeted internal refurbishment to address component deterioration and restore
            designed system performance.
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
              <p className="font-semibold text-slate-900">AHU Condition Assessment</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                BVS assessed the existing AHU condition and defined the scope of refurbishment works
                required to restore designed performance — identifying worn components, fan condition,
                and filtration requirements.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Internal Refurbishment & Recommissioning</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                BVS carried out a targeted internal refurbishment including component replacement, fan
                and filtration upgrades, and full recommissioning of the unit. Works were planned to
                integrate with the distillery's production schedule to minimise disruption to operations.
              </p>
            </div>
          </div>

          {/* THE RESULTS */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The refurbished AHU restored reliable ventilation performance within the production facility,
            ensuring consistent environmental conditions for the distillery's operations.
          </p>

          {/* CTA */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Refurbishment Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">AHU refurbishment needed at a production or manufacturing site?</p>
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
