import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "10 Gresham Street London, AHU Refurbishment | BVS Case Study",
  description:
    "The AHU at a Gresham Street commercial office in London required full internal refurbishment to meet reduced air volume requirements. BVS replaced all major components and upgraded to a modern inverter and fan assembly.",
};

export default function GreshamStreetAHURefurbishmentCaseStudy() {
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
            <span className="text-slate-600">10 Gresham Street, AHU Refurbishment</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Commercial · AHU Refurbishment
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            10 Gresham Street<br />London<br />AHU refurbishment.
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* ── PROJECT OVERVIEW ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            A commercial air handling unit at a Gresham Street office in London required modernisation to meet new, reduced air volume requirements. All internal components had reached the end of their useful life and were unsuitable for the revised operational specification, requiring a full internal refurbishment.
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
            The existing AHU had multiple failing components: a deteriorated frost coil, obsolete panel and bag-type filters with incompatible frames, an aging cooling coil unable to handle revised volumes, a worn belt-driven fan assembly poorly suited to lower flow rates, an outdated inverter lacking modern configuration support, and an inefficient heating coil below current standards.
          </p>

          {/* ── WHAT WE DID ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Full internal component replacement scoped to the reduced air volume requirements:
          </p>
          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">Coil Replacement</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Frost coil replaced with a high-performance unit; cooling coil replaced with a modern coil specified for the revised air volumes; heating coil replaced with a more efficient model.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Filtration Upgrade</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Panel and bag-type filters and their frames replaced with improved alternatives specified for enhanced air quality and compatibility with the new configuration.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Fan & Drive Upgrade</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Belt-driven fan assembly removed and replaced with an upgraded design optimised for reduced air volume operation, paired with a modern inverter supporting the new system configuration.
              </p>
            </div>
          </div>

          {/* ── THE RESULTS ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The refurbished AHU now operates efficiently within the reduced air volume specification. System performance, energy efficiency, and indoor air quality have all improved, and the updated equipment reduces operational costs compared to the previous configuration.
          </p>

          {/* ── CTA ── */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Refurbishment Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">AHU components reaching end of life?</p>
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
