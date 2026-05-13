import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "60 Kingly Street London — Extract Fan & Duct Installation | BVS Case Study",
  description:
    "BVS designed and installed a new extract fan and ductwork system at 60 Kingly Street, London — improving mechanical ventilation extraction performance for this commercial office property.",
};

export default function KinglyStreetExtractFanDuct() {
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
            <span className="text-slate-600">60 Kingly Street — Extract Fan & Duct Installation</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Commercial · Extract Fan & Ductwork
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-slate-900 sm:text-4xl">
            60 Kingly Street<br />London<br />Extract Fan & Duct
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* PROJECT OVERVIEW */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            60 Kingly Street is a commercial office property in central London requiring a new extract fan
            and ductwork installation to improve mechanical ventilation performance. The project involved
            the design, supply, and installation of the complete extract system, coordinated to suit the
            occupied building.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Site photo
          </div>

          {/* WHAT WE DID */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">Design & Supply</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                BVS designed the new extract fan and ductwork system to suit the building's layout and
                mechanical ventilation requirements, supplying all equipment and materials required for
                the installation.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Installation</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Ductwork sections were fabricated and fitted to suit the building's constraints. The
                installation was carried out with minimal disruption to building occupants, with works
                sequenced carefully around the occupied commercial environment.
              </p>
            </div>
          </div>

          {/* THE RESULTS */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The new extract fan and ductwork installation restored effective mechanical ventilation
            extraction, improving air quality and comfort throughout the building.
          </p>

          {/* CTA */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Ventilation Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Extract fan or ductwork installation needed?</p>
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
