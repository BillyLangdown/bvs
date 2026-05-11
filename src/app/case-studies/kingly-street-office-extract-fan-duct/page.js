import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Kingly Street Office — Extract Fan & Duct Installation | BVS Case Study",
  description:
    "BVS supplied and installed new boiler room ventilation at a Kingly Street office block in London — supply and extract fans, new ductwork, and automatic BMS-integrated controls to BS 6644:2011.",
};

export default function KinglyStreetCaseStudy() {
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
            <span className="text-slate-600">Kingly Street Office — Extract Fan & Duct Installation</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Commercial · Fan & Duct Installation
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-slate-900 sm:text-4xl">
            Kingly Street Office<br />Extract Fan &amp; Duct<br />Installation
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* ── PROJECT OVERVIEW ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            This project involved supplying and installing new boiler room ventilation at an office block on Kingly Street, London. The installation was designed to meet the requirements of BS 6644:2011, which sets out the standards for safe ventilation of boiler plant rooms.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-slate-700">
            The aim was to improve air circulation within the boiler room, ensuring the heating systems could operate safely and efficiently, and to integrate automatic safety controls with the building&apos;s existing BMS.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Site photo — Kingly Street plant room
          </div>

          {/* ── THE PROBLEM ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            The Problem
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The boiler room at the Kingly Street office block lacked adequate mechanical ventilation. Without a properly designed supply and extract system, the plant room could not maintain the air change rates required under BS 6644:2011, creating both a performance and a safety risk for the boiler plant.
          </p>

          {/* ── WHAT WE DID ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>

          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">Boiler Inlet Supply Fan</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                A supply fan rated at 0.752 m³/s was installed at low level on the right-hand side of the plant room, positioned under the existing fresh air louvers. The fan was connected to the window louver via new ductwork terminating with a bell mouth, ensuring a consistent fresh air supply into the boiler room.
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Extract Fan</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                An extract fan rated at 0.361 m³/s was installed at high level on the left-hand side of the plant room. New ductwork connects the fan to the fresh air door louvers, extracting stale air from the room and maintaining the pressure differential required for effective ventilation.
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Electrical Integration &amp; Automatic Controls</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Both fans were wired into the existing mechanical distribution board, making use of the current electrical infrastructure. Automatic safety controls were added so that the boiler plant will shut down automatically if either fan fails to operate — a key requirement under BS 6644:2011. The controls were integrated into the building management system (BMS) to allow seamless monitoring and efficient operation.
              </p>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-48 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Fan and ductwork installation photo
          </div>

          {/* ── RESULTS ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The new ventilation system provided enhanced air circulation within the boiler room and improved safety through automatic fan-failure shutdown. Integration with the existing BMS allows ongoing monitoring of both fans without additional control infrastructure. The installation meets BS 6644:2011 and supports the safe, efficient operation of the building&apos;s heating plant.
          </p>

          {/* ── CTA ── */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Installation Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need fan or duct installation for a plant room or commercial building?</p>
              <p className="mt-1 text-xs text-white/45">We respond within one working day with practical options.</p>
            </div>
            <div className="px-6 py-6">
              <QuickQuoteForm />
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/air-handling-unit-installation"
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 hover:text-[#297858] transition-colors"
            >
              ← Back to AHU Installation
            </Link>
          </div>

        </div>
      </Container>
    </div>
  );
}
