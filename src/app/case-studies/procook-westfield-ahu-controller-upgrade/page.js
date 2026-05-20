import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Procook Westfield, AHU Controller Upgrade | BVS Case Study",
  description:
    "The AHU at Procook's Westfield retail store had a failed fan motor and obsolete controls. BVS replaced the motor, installed a Trend BMS controller, and restored full climate control to the shop floor.",
};

export default function ProcookWestfieldAHUControllerUpgradeCaseStudy() {
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
            <span className="text-slate-600">Procook Westfield, AHU Controller Upgrade</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Retail · Controller Upgrade
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Procook<br />Westfield<br />AHU Controller Upgrade
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* ── PROJECT OVERVIEW ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The air handling unit at Procook's Westfield retail store had become non-functional. A combination of a failed fan motor and obsolete controls meant the system could no longer maintain effective environmental conditions across the sales floor, impacting both staff comfort and customer experience.
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
            A 1.1kW supply fan motor had failed completely, stopping adequate airflow. The existing controls were obsolete, lacking modern automation or scheduling capability. The original thermostat was poorly located, preventing accurate temperature regulation across the shop floor. With neither heating nor cooling functioning effectively, the system required urgent intervention.
          </p>

          {/* ── WHAT WE DID ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">Fan Motor Replacement</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                A new 1.1kW supply fan motor was installed with replacement belts and pulleys, restoring full airflow capacity to the unit.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Trend BMS Controller</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                The outdated control system was replaced with a Trend BMS controller, providing full automation, scheduling aligned to store operating hours, and manual override capability for after-hours requirements.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Sensor Upgrade</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                A new space temperature sensor was positioned on the shop floor for accurate, responsive temperature readings across the retail area.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Coil & System Commissioning</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Both the chilled water and LPHW coils were enabled and optimised for year-round climate control. Full system commissioning and testing completed before handover.
              </p>
            </div>
          </div>

          {/* ── THE RESULTS ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The ventilation system is now fully functional, energy-efficient, and requires minimal user input. Procook gained a reliable and automated solution aligned with their day-to-day operations, with scheduling that automatically adjusts to store hours and a properly located sensor providing accurate climate management across the entire sales floor.
          </p>

          {/* ── CTA ── */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Controls Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">AHU controls or fan motor failed?</p>
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
