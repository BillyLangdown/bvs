import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "NHS Hammersmith & Fulham, AHU Refurbishment | BVS Case Study",
  description:
    "BVS carried out a targeted light refurbishment of AHUs at an NHS hospital in Hammersmith & Fulham, drivebelts, filters, coil cleaning, corrosion treatment, and bathroom extract fan repairs.",
};

export default function NHSHammersmithAHURefurbishmentCaseStudy() {
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
            <span className="text-slate-600">NHS Hammersmith &amp; Fulham, AHU Refurbishment</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Healthcare · AHU Refurbishment
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            NHS Hammersmith<br />&amp; Fulham<br />AHU refurbishment.
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* ── PROJECT OVERVIEW ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The NHS Trust at Hammersmith &amp; Fulham required a targeted refurbishment of its air handling unit system. While the equipment was generally well-maintained, it showed signs of age and required specific interventions to extend its operational life and maintain reliable air quality across hospital corridors and communal areas.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Site photo
          </div>

          {/* ── THE CHALLENGE ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Challenge
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Individual components had reached the point where targeted replacement or repair was needed to prevent further deterioration and maintain system reliability. Bathroom extract twin fans required motor and belt replacements, the automatic changeover system needed restoration, and the fresh air inlet damper had failed.
          </p>

          {/* ── WHAT WE DID ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-[15px] leading-7 text-slate-700">
            <li>• New drivebelts and filters installed across the AHU</li>
            <li>• Coil face cleaning carried out to restore heat transfer efficiency</li>
            <li>• Component lubrication completed as part of planned maintenance scope</li>
            <li>• Door seal replacement and catch adjustments to prevent air leakage and ingress</li>
            <li>• Surface corrosion treatment applied to halt further deterioration</li>
            <li>• Bathroom extract twin fan system repaired, new motors and belts fitted</li>
            <li>• Automatic changeover system restored to full operation</li>
            <li>• Failed fresh air inlet damper replaced</li>
          </ul>

          {/* ── THE RESULTS ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The targeted refurbishment extended the AHU's operational life without the cost or disruption of full replacement. Air quality across hospital corridors and communal spaces improved, and system reliability was restored, ensuring continued performance within an active NHS facility.
          </p>

          {/* ── CTA ── */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Healthcare AHU Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">AHU maintenance or light refurbishment needed?</p>
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
