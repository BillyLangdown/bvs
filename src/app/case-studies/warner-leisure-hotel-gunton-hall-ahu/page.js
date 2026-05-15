import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Warner Leisure Hotel Gunton Hall — AHU Manufacturing | BVS Case Study",
  description:
    "BVS designed, manufactured, and installed a custom-built replacement AHU for Warner Leisure Hotel's Gunton Hall swimming pool — tailor-made for a constrained plantroom, delivered in flatpack, and commissioned with a Trend controls panel.",
};

export default function GuntonHallAHUCaseStudy() {
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
            <span className="text-slate-600">Warner Leisure Hotel Gunton Hall — AHU Manufacturing</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Hotel · AHU Manufacturing
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-slate-900 sm:text-4xl">
            Warner Leisure Hotel<br />Gunton Hall<br />AHU Manufacturing
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* ── PROJECT OVERVIEW ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Warner Hotel Group are famous for their resort hotels located across the UK. Each is located in a beautiful
            setting &amp; includes full leisure facilities for guests &amp; usually with a full size indoor swimming pool.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-slate-700">
            To maintain a pool hall at the correct temperature &amp; humidity requires an air-handling unit (AHU)
            specifically designed for the size of pool &amp; its surroundings.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-slate-700">
            The existing AHU at Gunton Hall had come to the end of its useful life &amp; needed replacing &amp; so we were
            approached to investigate the existing set-up &amp; then design, manufacture &amp; install a new air handling
            unit complete with fitted controls.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Gunton Hall site photo
          </div>

          {/* ── AHU DESIGN CRITERIA ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            AHU Design Criteria
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            In reviewing the existing AHU against our design criteria, it was felt that the air volumes need to be
            increased, particularly to cope with the fully glazed structure of the pool hall itself &amp; reduce
            condensation on the glazing. So the new AHU was designed to provide additional air to meet this need.
          </p>

          {/* ── WHAT WE DID ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>

          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">Design Phase</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                The new AHU incorporated a high-efficiency plate heat exchanger to recover the maximum energy possible
                from the exhausted air &amp; remove moisture at all times of the year. To save additional energy during
                low occupancy periods, the unit includes both temperature &amp; humidity sensors &amp; also a
                recirculation damper so that air can be returned directly when the humidity is low, thus enhancing
                energy saving potential.
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Manufacturing</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Because of the limited space requirements available in the existing plantroom, the new AHU had to be
                tailor-made so as to fit, particularly as it was larger than the original. The unit also had to be
                manufactured to be highly resistant against corrosion &amp; so was manufactured from plastic coated
                galvanised steel panels. All double-skinned &amp; insulated within a 50mm aluminium frame.
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Installation</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Because of the reduced access into the plantroom, the unit had to be provided in flatpack form. The new
                unit panels were moved into the plantroom where our engineers then re-built it. The connections onto the
                existing ductwork had to be modified &amp; our engineers undertook this, as well as fitting new lagging.
                In addition the LPHW heating pipework had to be re-routed &amp; re-connected with a new 3-port control
                valve by our engineers.
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Commissioning</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                The unit was fitted &amp; pre-wired with an on-board Trend control panel &amp; following installation,
                our engineers then commissioned both the unit &amp; controls, measured the air volumes &amp; set to the
                increased volume &amp; left the unit running to the client&apos;s satisfaction.
              </p>
            </div>
          </div>

          {/* Before/after photo placeholders */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex h-48 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
              Previous AHU
            </div>
            <div className="flex h-48 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
              Newly installed AHU
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Manufacturing Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need a custom-built or replacement AHU?</p>
              <p className="mt-1 text-xs text-white/45">We respond within one working day with practical options.</p>
            </div>
            <div className="px-6 py-6">
              <QuickQuoteForm />
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/air-handling-unit-manufacturing"
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 hover:text-[#297858] transition-colors"
            >
              ← Back to AHU Manufacturing
            </Link>
          </div>

        </div>
      </Container>
    </div>
  );
}
