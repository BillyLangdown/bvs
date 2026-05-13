import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Ringwood Leisure Centre — AHU Controller Upgrade | BVS Case Study",
  description:
    "Advised that two AHUs needed full replacement at £100k+, BVS identified the actual cause as failing controls. Trend controllers were installed on both units at a fraction of replacement cost.",
};

export default function RingwoodLeisureAHUControllerUpgradeCaseStudy() {
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
            <span className="text-slate-600">Ringwood Leisure Centre — AHU Controller Upgrade</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Leisure · Controller Upgrade
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-slate-900 sm:text-4xl">
            Ringwood Leisure<br />Centre<br />AHU Controller Upgrade
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* ── PROJECT OVERVIEW ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Ringwood Leisure facility had been advised by external consultants that a complete AHU replacement was necessary — an estimated cost of over £100,000. BVS undertook a detailed assessment and identified the actual root cause: outdated and failing control systems. The AHUs themselves remained structurally sound and did not require replacement.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Site photo
          </div>

          {/* ── THE CHALLENGE ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            The Challenge
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Both AHUs were operating poorly due to failing controls, not mechanical deterioration of the units themselves. The existing control systems lacked the automation and reliability needed to manage the facility's ventilation correctly, but this had been misidentified as a hardware failure requiring full unit replacement.
          </p>

          {/* ── WHAT WE DID ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">Control System Removal</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Existing failing controls were stripped out from both units in full.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Trend Controller Installation</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                New Trend controllers were installed on both AHUs, providing modern, reliable, and automatable control of the ventilation systems.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Sensor & Component Upgrades</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                New supply air temperature sensor, fresh air temperature sensor, extract temperature sensor with 24V transformer, and air prove switch fitted. IQ4 View display panel installed for system monitoring.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Rewiring & Commissioning</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Internal AHU components were rewired to the new control infrastructure. Full system testing and operational commissioning completed before handover.
              </p>
            </div>
          </div>

          {/* ── THE RESULTS ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Both AHUs now operate as fully functional, reliable, and automated systems — at a fraction of the cost of unnecessary replacement. The client avoided over £100,000 in capital expenditure. The Trend controllers provide a modern control platform with monitoring capability via the IQ4 View display, extending the operational life of existing assets significantly.
          </p>

          {/* ── CTA ── */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Controls Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">AHU controls failing or obsolete?</p>
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
