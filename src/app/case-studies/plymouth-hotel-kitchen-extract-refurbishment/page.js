import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Plymouth Hotel Kitchen Extract Refurbishment Case Study",
  description: "A failing kitchen extract fan was causing noise and vibration in bedrooms above at a Plymouth hotel. BVS surveyed the system to DW172 standard, replaced the extract fan, and refurbished the ageing supply AHU.",
  path: "/case-studies/plymouth-hotel-kitchen-extract-refurbishment",
});

const workItems = [
  {
    photo: "kitchen-extract-supply-survey.jpg",
    label: "On-Site Survey",
    heading: "Kitchen Extract & Supply Survey",
    body: "A two-day site survey measured extract and supply air volumes against DW172 industry standards to establish true performance against design requirements.",
    alt: "Engineer surveying kitchen extract and supply system at Plymouth hotel",
  },
  {
    photo: "new-extract-fan-bulkhead-mounted.jpg",
    label: "New Extract Fan Fitted",
    heading: "Extract Fan Replacement",
    body: "A new acoustically treated, variable-speed extract fan was installed on proper anti-vibration mounts, raising extract volume to 4 m³/s and eliminating bedroom noise and vibration.",
    alt: "New variable-speed extract fan mounted on anti-vibration bulkhead at Plymouth hotel",
  },
  {
    photo: "supply-ahu-refurbishment-fan.jpg",
    label: "Supply AHU Refurbishment",
    heading: "Supply AHU Refurbishment",
    body: "Remedial works to the ageing air-handling unit, including filter and fan upgrades, coil cleaning, and condensate trap fitting, restored supply airflow and reduced corrosion risk.",
    alt: "Refurbishment works to supply AHU fan at Plymouth hotel",
  },
  {
    photo: "ductwork-silencers-balancing.jpg",
    label: "Ductwork & Silencers",
    heading: "Ductwork & Air Distribution Balancing",
    body: "Extract ductwork and silencers were cleaned and reviewed, and the kitchen's supply diffusers balanced to ensure even and effective air distribution throughout.",
    alt: "Ductwork and silencers reviewed as part of air distribution balancing at Plymouth hotel",
  },
];

export default function PlymouthHotelCaseStudy() {
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
            <span className="text-slate-600">Plymouth Hotel Kitchen Extract Refurbishment</span>
          </nav>

          {/* Title */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Hotel · Kitchen Extract
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Plymouth Hotel<br />Kitchen Extract Refurbishment
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Plymouth-Hotel-Kitchen-Extract-Case-Study.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro summary */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            A hotel in Plymouth was receiving guest complaints about noise and vibration in bedrooms above the kitchen. The kitchen extract fan was failing and ventilation performance was poor throughout the system. BVS was asked to investigate the cause, assess the full kitchen ventilation system, and recommend a fix.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/plymouth-hotel-kitchen-extract-refurbishment/ahu-interior-before-refurbishment.jpg"
              alt="Interior of ageing supply AHU prior to refurbishment at Plymouth hotel"
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
            Engineers carried out a two-day site survey, measuring extract and supply air volumes against DW172 industry standards. The extract system was found to be undersized, with grease-filled ductwork, an incorrect silencer, and a failing fan. The 40-year-old supply AHU was delivering only a quarter of its rated airflow due to clogged filters and a dirty coil. Based on these findings, the extract fan was replaced and remedial works carried out to the AHU, restoring proper airflow, removing the noise, and cutting running costs.
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
                    src={`/case-studies/images/plymouth-hotel-kitchen-extract-refurbishment/${item.photo}`}
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
            The hotel now has a fully working kitchen ventilation system. Airflow meets the correct design standard, the noise and vibration in the bedrooms above has gone, and running costs are lower thanks to the more efficient fan and AHU.
          </p>

          {/* CTA */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Kitchen Extract Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Noise, vibration, or a failing kitchen extract system?</p>
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
