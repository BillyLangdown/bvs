import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Private Hospital Bath, Operating Theatre AHU Refurbishment | BVS Case Study",
  description:
    "BVS refurbished an AHU supplying operating theatres at a private hospital in Bath, EC fans, custom cubic heat exchanger, and new fan bulkheads delivered energy savings with minimal clinical disruption.",
};

export default function BathPrivateHospitalCaseStudy() {
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
            <span className="text-slate-600">Private Hospital Bath, Operating Theatre AHU Refurbishment</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Healthcare · AHU Refurbishment
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Private Hospital<br />Bath<br />Operating theatre AHU.
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* ── PROJECT OVERVIEW ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            A critical upgrade at a private hospital in Bath involving a complete internal refurbishment of an existing AHU supplying the operating theatres. The project formed part of the hospital's long-term strategy to reduce carbon emissions while maintaining stringent indoor air quality standards required for clinical environments.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Site photo
          </div>

          {/* ── ISSUES ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Challenge
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The original AHU had outdated internal components no longer meeting modern operational standards for a healthcare facility. The existing equipment was inefficient and required full replacement of internal elements to improve system performance, energy use, and reliability, while avoiding disruption to live theatre operations.
          </p>

          {/* ── WHAT WE DID ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">Safe Removal</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Careful extraction of outdated AHU components with full site protection to maintain clinical hygiene standards.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Structural Modifications</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Reconfigured AHU internal layout including fabrication of new fan bulkheads and metalwork to support modern EC equipment.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">EC Fan Installation</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                High-efficiency EC supply and extract fans installed on both sides of the unit, improving airflow control and reducing motor energy consumption significantly versus the previous belt-driven configuration.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Heat Recovery</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Custom cubic heat exchanger designed, manufactured, and fitted to the unit to maximise heat recovery from exhausted air, a key contributor to the carbon reduction targets.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Commissioning & Testing</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Full system commissioning, operational testing, and site cleanup completed to clinical standards before handover.
              </p>
            </div>
          </div>

          {/* ── THE RESULTS ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The EC fan technology and high-performance heat exchanger delivered significant energy savings against the previous system. Collaborative scheduling between on-site hospital staff and the BVS team ensured completion on time and with minimal disruption to the hospital's day-to-day operations. Air quality compliance with operating theatre standards was maintained throughout.
          </p>

          {/* ── CTA ── */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Healthcare AHU Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Working on a clinical or healthcare AHU project?</p>
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
