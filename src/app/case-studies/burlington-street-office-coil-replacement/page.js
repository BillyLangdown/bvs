import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Burlington Street Office, Frost Coil Replacement | BVS Case Study",
  description:
    "The frost coil at a Burlington Street commercial office suffered severe damage. BVS designed, manufactured, and installed a split-section replacement to overcome plantroom access constraints.",
};

export default function BurlingtonStreetCoilReplacementCaseStudy() {
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
            <span className="text-slate-600">Burlington Street Office, Frost Coil Replacement</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Commercial · Coil Replacement
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Burlington Street<br />Office<br />Frost Coil Replacement
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* ── PROJECT OVERVIEW ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The frost coil serving an air handling unit at a commercial office on Burlington Street had suffered severe deterioration and required complete replacement. Significant access constraints into the plantroom presented an installation challenge that required an innovative approach to deliver within budget and programme.
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
            The original frost coil had failed beyond repair, compromising the AHU's ability to protect downstream components during cold weather. Beyond the coil condition itself, the restricted plantroom access made conventional replacement impractical, a standard single-piece coil could not be brought into the space.
          </p>

          {/* ── WHAT WE DID ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">Design & Manufacture</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                BVS sized and designed a replacement frost coil to the original specification, manufactured to match the AHU's performance requirements.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Split-Section Installation</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                To overcome the access constraint, the replacement coil was manufactured in two sections. Both sections were moved into the plantroom separately and connected in position, maintaining full performance without compromising the unit's functionality or requiring structural modifications to the plantroom.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Pipework & Commissioning</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Associated heating coil pipework was connected and the full system commissioned and tested to confirm performance before handover.
              </p>
            </div>
          </div>

          {/* ── THE RESULTS ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            A modern, efficient frost coil system was successfully installed within the constrained plantroom environment, restoring full AHU protection and improving temperature control throughout the facility. The split-section approach avoided any structural works and kept the project within programme.
          </p>

          {/* ── CTA ── */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Coil Replacement Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Coil failed or beyond repair on your site?</p>
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
