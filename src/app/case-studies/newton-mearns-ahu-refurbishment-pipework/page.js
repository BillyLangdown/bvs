import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Newton Mearns Glasgow, Shopping Centre AHU Refurbishment & Gas Pipework | BVS Case Study",
  description:
    "BVS refurbished three weatherproof AHUs at Newton Mearns Shopping Centre and replaced a deteriorated mild-steel gas distribution network with 316-grade stainless steel pipework to IGEM UP 1 and 2.",
};

export default function NewtonMearnsAHURefurbishmentPipeworkCaseStudy() {
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
            <span className="text-slate-600">Newton Mearns Glasgow, AHU Refurbishment & Pipework</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Commercial · AHU Refurbishment & Pipework
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Newton Mearns<br />Shopping Centre<br />AHU Refurbishment
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* ── PROJECT OVERVIEW ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Three existing weatherproof Air Handling Units serving the main mall areas of Newton Mearns Shopping Centre in Glasgow required a comprehensive refurbishment. Rather than pursuing costly full replacement, the client sought a modernisation approach to extend equipment lifespan, improve operational reliability, and bring the gas distribution infrastructure up to current safety standards, all while maintaining uninterrupted operation of the live shopping centre.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Site photo
          </div>

          {/* ── THE CHALLENGE ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Challenge
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-[15px] leading-7 text-slate-700">
            <li>• Deteriorated mild-steel gas distribution pipework, vulnerable to corrosion and no longer compliant</li>
            <li>• Seized and non-functional damper controls</li>
            <li>• Corroded AHU doors with evidence of water ingress and compromised sealing</li>
            <li>• Obsolete belt-driven fan technology, inefficient and unreliable</li>
            <li>• Direct-fired gas burners non-compliant with current safety standards</li>
            <li>• Degraded internal and external surfaces with extensive corrosion</li>
            <li>• Outdated filtration systems requiring upgrade</li>
          </ul>

          {/* ── WHAT WE DID ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">AHU Component Upgrades</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                High-efficiency backward-curved supply fans and EC extract fan walls installed. Direct-fired burners replaced with modern, fully-modulating units meeting current gas safety codes. Panel and bag filter assemblies upgraded to AF101 Type AP and AB85 specification. Corroded doors, catches, access components, and lighting renewed.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Gas Distribution Replacement</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Entire mild-steel gas distribution network removed and replaced with 316-grade stainless-steel pressed-joint pipework, with isolation valves and Big Foot support systems throughout. Strength testing, purging, and tightness testing carried out to IGEM UP 1 and 2 standards. Custom bridge scaffolding fabricated to safely route new pipework over the shopping centre's glazed roof structure.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Controls Integration</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                New burners and EC fans integrated with the existing Trend BMS. Modulation, speed control, and synchronisation verified through full commissioning before handover.
              </p>
            </div>
          </div>

          {/* ── THE RESULTS ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The refurbishment delivers an estimated 10–15 year operational life extension across all three AHUs, without the cost or disruption of full unit replacement. EC fan technology reduces electrical consumption. The 316-grade stainless-steel gas distribution network achieves full code compliance and long-term corrosion resistance. The entire project was coordinated to maintain safe, uninterrupted occupancy throughout the live shopping centre.
          </p>

          {/* ── CTA ── */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Refurbishment Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Complex AHU refurbishment or gas pipework project?</p>
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
