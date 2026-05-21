import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Pharmaceutical Manufacturer, AHU Coil Replacement | BVS Case Study",
  description:
    "BVS designed, manufactured, and installed a replacement AHU coil at a pharmaceutical manufacturing facility, meeting the strict process environment requirements of the site.",
};

export default function PharmaceuticalLabCoilReplacement() {
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
            <span className="text-slate-600">Pharmaceutical Manufacturer, AHU Coil Replacement</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Pharmaceutical · Coil Replacement
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Pharmaceutical<br />Manufacturer<br />AHU Coil Replacement
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* PROJECT OVERVIEW */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            A pharmaceutical manufacturing facility required a replacement coil for its air handling unit.
            Pharmaceutical environments demand strict control of temperature, humidity, and air quality,
            making reliable, correctly specified HVAC components critical to site operation and product
            integrity. The existing coil had reached the end of its serviceable life and required a
            like-for-like replacement to the original performance specification.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Site photo
          </div>

          {/* WHAT WE DID */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">Survey & Design</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                BVS surveyed the existing coil and AHU, capturing all relevant performance data and physical
                dimensions. A replacement coil was designed to the original performance specification,
                ensuring a like-for-like match to the AHU's designed operating parameters.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Manufacture & Installation</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                The replacement coil was manufactured to the required specification and installation was
                planned around the facility's production schedule to minimise process disruption. Full
                commissioning and performance verification were completed prior to handover.
              </p>
            </div>
          </div>

          {/* THE RESULTS */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The replacement coil restored full AHU performance within the pharmaceutical production
            environment, ensuring reliable temperature and humidity control critical to process requirements.
          </p>

          {/* CTA */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Coil Replacement Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Coil replacement needed on a critical process site?</p>
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
