import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Leisure Centre Dorset — Swimming Pool AHU EC Fan Upgrade | BVS Case Study",
  description:
    "BVS replaced failed belt-driven fans on a Dorset leisure centre's swimming pool AHU with two Ziehl-Abegg GR561-ZID EC fans — restoring airflow, humidity control, and protecting the building fabric.",
};

export default function LeisureCentreDorsetECFanUpgradeCaseStudy() {
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
            <span className="text-slate-600">Leisure Centre Dorset — Swimming Pool EC Fan Upgrade</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Leisure · EC Fan Upgrade
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-slate-900 sm:text-4xl">
            Leisure Centre<br />Dorset<br />Swimming Pool EC Fan Upgrade
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* ── PROJECT OVERVIEW ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            A swimming pool leisure centre in Dorset required urgent intervention on the AHU serving its pool hall. The system had deteriorated severely, to the point where minimal airflow was reaching the pool and there was no effective humidity or temperature control — placing the building fabric at serious long-term risk.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Site photo
          </div>

          {/* ── THE CHALLENGE ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            The Challenge
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-[15px] leading-7 text-slate-700">
            <li>• Missing filters on both supply and extract sides, causing debris accumulation in heating coils and heat exchangers</li>
            <li>• Closed fresh-air and exhaust dampers, with corroded return-air plenum drawing contaminated plant-room air into the system</li>
            <li>• Leaking condensate pan creating moisture damage risk</li>
            <li>• Failed belt-driven fans with shredded belts, producing excessive noise</li>
            <li>• Minimal airflow reaching the pool hall</li>
            <li>• No humidity or temperature control, risking serious long-term structural damage to the building</li>
          </ul>

          {/* ── WHAT WE DID ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">Fan Selection</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Two Ziehl-Abegg GR561-ZID EC fans were specified, each delivering 6 m³/s airflow at up to 1,600 Pa — plotted against system resistance of 350 Pa plus internal component resistance.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Supply Fan Installation</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Existing belt-driven fans were removed. New fan bulkheads were fabricated and the two GR561-ZID EC fans installed — meeting the 6 m³/s airflow requirement at the specified system resistance.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Electrical Integration</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Power wiring and 0–10V speed-control signals were extended to external terminal boxes, enabling the client to remove the existing inverter and select either manual potentiometer control or automated speed regulation via existing or future controls.
              </p>
            </div>
          </div>

          {/* ── THE RESULTS ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The EC fan upgrade restores consistent, efficient airflow to the pool hall, maintaining humidity and temperature control to protect the building fabric. EC motor technology reduces running costs and eliminates belt noise and vibration. Maintenance requirements are significantly reduced with no belt replacements needed. The upgrade demonstrates how targeted component replacement using high-efficiency EC technology can extend AHU asset life without full system replacement.
          </p>

          {/* ── CTA ── */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">EC Fan Upgrade Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Belt-driven fans failing on your pool AHU?</p>
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
