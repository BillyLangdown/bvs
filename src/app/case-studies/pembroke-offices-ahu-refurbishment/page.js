import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Pembroke Offices — AHU Refurbishment | BVS Case Study",
  description:
    "Post front-of-house renovation, BVS refurbished the AHUs at Pembroke Offices — reverse cycle coil, three Ziehl EC fans, 84kW heater batteries, casing repairs, and improved filtration.",
};

export default function PembrokeOfficesAHURefurbishmentCaseStudy() {
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
            <span className="text-slate-600">Pembroke Offices — AHU Refurbishment</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Commercial · AHU Refurbishment
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-slate-900 sm:text-4xl">
            Pembroke Offices<br />AHU Refurbishment
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* ── PROJECT OVERVIEW ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Following comprehensive front-of-house renovations at Pembroke Offices — a flexible open-plan office facility with strong connectivity to London — the client required HVAC system upgrades to match the modernised building and ensure optimal air quality for tenants. The aging AHUs needed a full refurbishment to bring performance in line with the upgraded surroundings.
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
            Multiple deteriorated coils (frost, heating, run-around, and cooling) required replacement. AHU casing showed rusted areas needing treatment. The supply fan and motor systems were outdated, filter monitoring was inadequate, and there were potential freeze risks to the system during winter months.
          </p>

          {/* ── WHAT WE DID ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-[15px] leading-7 text-slate-700">
            <li>• <span className="font-semibold text-slate-900">Reverse Cycle Coil Replacement:</span> Removed all AHU-mounted coils and installed a new reverse cycle unit, consolidating multiple functions into a single efficient component.</li>
            <li>• <span className="font-semibold text-slate-900">AHU Casing Repairs:</span> Internal patching and treatment of rusted areas with red oxide primer to halt further deterioration.</li>
            <li>• <span className="font-semibold text-slate-900">Heater Battery Installation:</span> Two 42kW Electric Heater Batteries installed, providing 84kW total heating capacity, including ductwork fabrication and metalwork.</li>
            <li>• <span className="font-semibold text-slate-900">Filter & Damper Upgrades:</span> New filter bulkhead added to prevent freeze risk; inlet damper installed to enable better filter status monitoring and reduce maintenance costs.</li>
            <li>• <span className="font-semibold text-slate-900">EC Fan Replacement:</span> Belt-driven fan assembly removed and replaced with a new bulkhead housing three Ziehl EC fans, wired to isolator switch and potentiometer controls.</li>
          </ul>

          {/* ── THE RESULTS ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The refurbished AHUs deliver enhanced efficiency and improved tenant comfort, with modern heating capacity (84kW), improved filtration monitoring, eliminated freeze risk, and EC fans reducing energy consumption versus the previous belt-driven configuration. System performance now matches the standard of the recently renovated facility.
          </p>

          {/* ── CTA ── */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Refurbishment Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Planning an AHU refurbishment?</p>
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
