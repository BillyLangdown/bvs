import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "EU Disney Headquarters Hammersmith, Ventilation Survey | BVS Case Study",
  description:
    "BVS conducted a full ventilation survey at the EU Disney Headquarters in Hammersmith, London, assessing AHU performance, air volumes, and system condition across the corporate campus.",
};

export default function DisneyHeadquartersVentilationSurvey() {
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
            <span className="text-slate-600">EU Disney Headquarters Hammersmith, Ventilation Survey</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Corporate · Ventilation Survey
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            EU Disney<br />Headquarters<br />Ventilation Survey
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* PROJECT OVERVIEW */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The European headquarters of Disney in Hammersmith, London required a comprehensive ventilation
            survey across its corporate campus. The survey was commissioned to provide a full picture of
            current AHU and ventilation system performance, air volumes, and equipment condition, forming
            the basis for future planned maintenance and capital investment decisions.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Site photo
          </div>

          {/* WHAT WE DID */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">Full-Site Ventilation Survey</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                BVS engineers conducted a detailed survey of the ventilation systems throughout the
                facility, assessing AHU condition, measuring air volumes, and inspecting ductwork and
                associated components across the corporate campus.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Reporting & Recommendations</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                All findings were documented in a full written survey report, including a prioritised
                schedule of recommended actions to support Disney's estates team in their planned
                maintenance and capital investment planning.
              </p>
            </div>
          </div>

          {/* THE RESULTS */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The survey provided Disney's estates team with a clear, accurate picture of the current state
            of their ventilation systems and a prioritised list of recommended actions, enabling informed
            capital planning and preventative maintenance scheduling.
          </p>

          {/* CTA */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Ventilation Survey Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need a full ventilation survey on your estate?</p>
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
