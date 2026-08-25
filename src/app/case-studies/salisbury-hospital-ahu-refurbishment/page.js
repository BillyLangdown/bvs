import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Salisbury Hospital AHU Refurbishment Case Study",
  description: "BVS upgraded the supply and extract AHUs at Salisbury Hospital, new EC plug fans, frost and heating coils, and refurbished internals raised airflow from 1.1 to 1.7 m³/s and improved energy efficiency.",
  path: "/case-studies/salisbury-hospital-ahu-refurbishment",
  image: "/case-studies/images/salisbury-hospital-ahu-refurbishment/ahu-unit-after-refurbishment.jpg",
  imageAlt: "Salisbury Hospital AHU Refurbishment",
});

const workItems = [
  {
    photo: "new-ec-plug-fan-installed.jpg",
    label: "New EC Fan – Supply AHU",
    heading: "Supply AHU EC Fan Installation",
    body: "The original belt-driven fans were removed and replaced with high-efficiency EC plug fans, increasing the supply air volume from 1.1 m³/s to 1.7 m³/s.",
    alt: "New high-efficiency EC plug fan installed in the supply AHU during refurbishment at Salisbury Hospital",
  },
  {
    photo: "new-ec-fan-extract-ahu.jpg",
    label: "New EC Fan – Extract AHU",
    heading: "Extract AHU Fan Replacement",
    body: "The extract AHU received the same EC fan upgrade as the supply side, fitted within a protective guard inside the existing casework.",
    alt: "New EC fan fitted in the extract AHU during the refurbishment at Salisbury Hospital",
  },
  {
    photo: "new-lphw-coils-installed.jpg",
    label: "New Frost & Heating Coils",
    heading: "LPHW Coil Replacement",
    body: "The existing LPHW coils were removed and replaced with new frost and main heating coils, along with new pipework and service panels.",
    alt: "New LPHW frost and heating coils installed in AHU at Salisbury Hospital",
  },
  {
    photo: "new-stainless-steel-filter-sliders.jpg",
    label: "New Filter Sliders Fitted",
    heading: "Cleaning & Final Testing",
    body: "Internal components were cleaned and refurbished, new stainless steel filter sliders were installed, and both units were run and tested ahead of handover.",
    alt: "New stainless steel filter sliders fitted in AHU at Salisbury Hospital",
  },
];

export default function SalisburyHospitalCaseStudy() {
  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto max-w-4xl py-14 sm:py-20">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-[11px] text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/case-studies" className="hover:text-slate-600 transition-colors">Case Studies</Link>
            <span>›</span>
            <span className="text-slate-600">Salisbury Hospital AHU Refurbishment</span>
          </nav>

          {/* Title */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Healthcare · AHU Refurbishment
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Salisbury Hospital<br />AHU Refurbishment
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Salisbury-Hospital-AHU-Refurbishment-Case-Study.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro summary */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            At Salisbury Hospital, the supply and extract AHUs serving the site were around ten years old and still running on their original belt-driven fans and ageing LPHW coils. The hospital wanted to increase the supply air volume from 1.1 m&sup3;/s to 1.7 m&sup3;/s to improve ventilation, but the existing equipment could not support the increase without an upgrade. BVS surveyed both units and put forward a solution to deliver the higher airflow, improve energy efficiency, and extend the working life of the AHUs.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/salisbury-hospital-ahu-refurbishment/ahu-filters-before-refurbishment.jpg"
              alt="Dirty AHU filter panel removed prior to the AHU refurbishment at Salisbury Hospital"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          {/* Project Overview */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            A full technical survey of both the supply and extract AHUs was carried out before a comprehensive upgrade was proposed. The original belt-driven fans were removed and replaced with high-efficiency EC plug fans, and the AHU casework was modified with new bulkheads installed to suit. The existing LPHW coils were also replaced with new frost and main heating coils, sized to the increased air volume, along with new pipework and service panels. Internal components were then cleaned and refurbished, new stainless steel filter sliders fitted, and both units fully tested before handover.
          </p>

          {/* What We Did */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {workItems.map((item) => (
              <div key={item.photo} className="overflow-hidden border border-slate-100">
                <div className="relative h-72 bg-slate-100">
                  <Image
                    src={`/case-studies/images/salisbury-hospital-ahu-refurbishment/${item.photo}`}
                    alt={item.alt}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#111418]/80 px-3 py-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#297858]">{item.label}</span>
                  </div>
                </div>
                <div className="px-4 py-4">
                  <p className="font-semibold text-slate-900 text-sm">{item.heading}</p>
                  <p className="mt-1 text-[14px] leading-6 text-slate-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <p className="mt-10 text-[15px] leading-7 text-slate-700">
            Both the supply and extract AHUs at Salisbury Hospital were successfully upgraded and returned to reliable working order. The new EC plug fans increased the supply air volume to 1.7 m&sup3;/s, and the new LPHW coils and refurbished internal components improved performance and reliability. With new stainless steel filter sliders fitted and a full clean-down completed, the hospital now has a more energy-efficient ventilation system built to support its needs for years to come.
          </p>

          {/* CTA */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Healthcare AHU Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need higher airflow from an ageing AHU?</p>
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
