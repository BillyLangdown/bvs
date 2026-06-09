import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Bath Private Hospital AHU Refurbishment | BVS Case Study",
  description:
    "BVS refurbished an AHU supplying operating theatres at a private hospital in Bath. EC fans, a custom cubic heat exchanger, and new fan bulkheads delivered significant energy savings with minimal clinical disruption.",
};

const workItems = [
  {
    photo: "old-belt-drive-fan-removal.jpg",
    label: "Removing Previous Fans",
    heading: "Removal of Existing AHU Components",
    body: "All outdated internal components were carefully stripped out to prepare the unit for refurbishment.",
    alt: "Old belt-drive fan being removed from operating theatre AHU at Bath private hospital",
  },
  {
    photo: "ahu-interior-metalwork-refurbishment.jpg",
    label: "Modifying AHU Layout",
    heading: "AHU Modifications for New System",
    body: "The existing AHU layout was reconfigured, including the fabrication of new fan bulkheads and structural metalwork, to accommodate modernised components.",
    alt: "New fan bulkheads and structural metalwork fabricated inside operating theatre AHU, Bath",
  },
  {
    photo: "new-ec-fans-installed-ziehl-abegg.jpg",
    label: "New EC Extract Fan Wall",
    heading: "Install New Supply & Extract EC Fans",
    body: "High-efficiency EC fans were installed on both the supply and extract sides, significantly improving airflow control and energy performance.",
    alt: "New Ziehl-Abegg EC supply and extract fans installed in operating theatre AHU at Bath private hospital",
  },
  {
    photo: "custom-heat-exchanger-installed.jpg",
    label: "New Heat Exchanger Cube",
    heading: "Supply & Installation of Heat Exchanger",
    body: "A new cubic heat exchanger was designed, manufactured, and installed to enhance heat recovery efficiency within the system.",
    alt: "Custom cubic heat exchanger installed in AHU to maximise heat recovery at Bath private hospital",
  },
];

export default function BathPrivateHospitalCaseStudy() {
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
            <span className="text-slate-600">Bath Private Hospital AHU Refurbishment</span>
          </nav>

          {/* Title */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Healthcare · AHU Refurbishment
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Bath Private Hospital<br />AHU Refurbishment
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Bath-Private-Hospital-AHU-Refurbishment-Case-Study.pdf"
              download
              className="shrink-0 inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro summary */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            As part of a critical upgrade at a private hospital in Bath, the existing air handling unit (AHU) underwent a full internal refurbishment to improve performance and energy efficiency. The project began with the safe removal of outdated components, followed by modifications to the AHU structure, including the fabrication of new fan bulkheads to support modern equipment. High-efficiency EC supply and extract fans were then installed to enhance airflow control. A custom cubic heat exchanger was manufactured and fitted to optimise heat recovery. The project concluded with full commissioning, system testing, and site cleanup, ensuring the AHU was ready for reliable and efficient operation.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/bath-private-hospital-ahu-refurbishment/Sulis-Hospital-Bath.png"
              alt="Air handling unit casing exterior at Bath private hospital prior to internal refurbishment"
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
            This upgrade formed a key part of the hospital&apos;s long-term strategy to reduce its carbon footprint while maintaining high standards of indoor air quality for patients and staff. The installation of EC fan technology and a high-performance heat exchanger not only delivers significant energy savings but also supports improved system reliability with reduced maintenance demands. The collaborative effort between on-site engineers and the BVS team ensured that all works were delivered on time and with minimal disruption to the hospital&apos;s day-to-day operations.
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
                    src={`/case-studies/images/bath-private-hospital-ahu-refurbishment/${item.photo}`}
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

          {/* CTA */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Healthcare AHU Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Working on a clinical or healthcare AHU project?</p>
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
