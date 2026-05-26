import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Toca Interactive Football O2 Arena, AHU Refurbishment | BVS Case Study",
  description:
    "BVS carried out an AHU refurbishment at the Toca Interactive Football facility at the O2 Arena, maintaining performance in a high-footfall sports entertainment environment.",
};

export default function TocaFootballO2AhuRefurbishment() {
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
            <span className="text-slate-600">Toca Interactive Football O2 Arena, AHU Refurbishment</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Sports & Entertainment · AHU Refurbishment
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Toca Interactive<br />Football O2 Arena<br />AHU refurbishment.
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* PROJECT OVERVIEW */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The Toca Interactive Football facility at the O2 Arena in London is a high-footfall sports and entertainment
            venue requiring reliable, efficient HVAC systems to maintain comfortable conditions for players and visitors.
            The existing air handling unit required refurbishment to restore performance and extend its operational life.
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
              <p className="font-semibold text-slate-900">AHU Assessment & Refurbishment</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                BVS conducted a full assessment of the existing AHU and carried out a targeted internal refurbishment,
                replacing worn components and upgrading the fan and filtration systems to restore designed airflow and
                improve energy efficiency.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Programme Coordination</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Work was carefully coordinated around the venue's operational programme to minimise disruption to the
                facility and its visitors throughout the refurbishment process.
              </p>
            </div>
          </div>

          {/* THE RESULTS */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The refurbished AHU restored reliable ventilation performance to the venue, extending the asset's
            operational life and improving energy efficiency, avoiding the cost and disruption of full unit replacement.
          </p>

          {/* CTA */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Refurbishment Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">AHU refurbishment needed at your venue?</p>
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
