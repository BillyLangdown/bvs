import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "EC Fan Upgrade — Leisure Centre, Dorset | BVS Case Study",
  description:
    "BVS replaced belt-driven supply fans in a swimming-pool AHU with two Ziehl-Abegg GR561-ZID EC fans, restoring humidity control and cutting running costs — without a full AHU replacement.",
};

export default function LeisureCentreECFanCaseStudy() {
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
            <span className="text-slate-600">Leisure Centre — EC Fan Upgrade</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Leisure · Dorset
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-slate-900 sm:text-4xl">
            EC Fan Upgrade —<br />Leisure Centre, Dorset
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* ── THE PROBLEM ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            The Problem
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            When BVS first inspected the swimming-pool air-handling unit (AHU), it was clear the system was no longer protecting
            either the building fabric or the comfort of pool users. Filters were missing on both supply and extract sides, allowing
            debris to clog the heating coil and plate heat exchanger. Fresh-air and exhaust dampers were closed, the return-air
            plenum was corroded and drawing plant-room air, and the condensate pan was leaking badly. Supply and extract fans
            had shredded belts and produced excessive noise, and almost no airflow reached the pool hall.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-slate-700">
            As a result, humidity and temperature control were virtually non-existent—any warmth came only from the pool&apos;s thermal
            mass, risking serious long-term damage to the building. Since that initial visit, a temporary bearing repair kept the extract
            fan running, but a permanent solution was essential. After a detailed site survey and airflow measurements, BVS designed
            a targeted upgrade to restore proper ventilation, improve energy efficiency, and safeguard the structure.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Before photo
          </div>

          {/* ── WHAT WE DID ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <div className="mt-4 flex flex-col gap-5">
            <div>
              <p className="font-semibold text-slate-900">New EC Fan Selection</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Specified two Ziehl-Abegg 451 EC fans, each capable of delivering the required 6 m³/s airflow at up to 1,600 Pa,
                plotted on the fan curve for optimal performance.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Supply Fan Replacement</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Installed the directly driven EC fans to meet the plated air volume of 6 m³/s against 350 Pa plus internal
                component resistance, including the newly added low-grade heating coil.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Electrical Integration</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Extended power wiring and 0–10 V speed-control signals to external terminal boxes, allowing the client to remove
                the existing inverter and choose either manual potentiometer control or automated speed regulation via existing
                or future controls.
              </p>
            </div>
          </div>

          {/* ── HOW WE DID IT ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            How We Did It
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            We removed the existing belt-driven supply fan, fabricated and installed new fan bulkheads,
            fitted two GR561-ZID EC fans for supply, then completed the wiring and carried out full testing.
          </p>

          {/* Before/after photo placeholders */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex h-48 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
              Before
            </div>
            <div className="flex h-48 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
              After
            </div>
          </div>

          {/* ── THE RESULTS ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The upgraded EC fan system now delivers consistent, efficient airflow to the pool hall, restoring
            humidity and temperature control and protecting the building fabric. With high-efficiency, low-maintenance
            EC technology and simplified controls, the facility benefits from lower running costs, quieter operation,
            and reliable long-term performance — without the need for a full AHU replacement.
          </p>

          {/* After photo */}
          <div className="mt-6 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            After photo
          </div>

          {/* ── CTA ── */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">EC Fan Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Similar problem with your AHU?</p>
              <p className="mt-1 text-xs text-white/45">We respond within one working day with practical options.</p>
            </div>
            <div className="px-6 py-6">
              <QuickQuoteForm />
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/ec-fan-upgrades-and-retrofits-for-hvac"
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 hover:text-[#297858] transition-colors"
            >
              ← Back to EC Fan Upgrades
            </Link>
          </div>

        </div>
      </Container>
    </div>
  );
}
