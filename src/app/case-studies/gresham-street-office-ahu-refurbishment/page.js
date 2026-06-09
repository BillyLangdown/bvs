import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Gresham Street Office AHU Refurbishment | BVS Case Study",
  description:
    "BVS refurbished the AHU at a Gresham Street office in London, replacing frost coil, cooling coil, heating coil, filters, fan assembly, and inverter to meet reduced air volume requirements.",
};

const workItems = [
  {
    photo: "existing-ahu-coil-filter-before-refurbishment.jpg",
    label: "Before Refurbishment",
    heading: "Frost Coil & Cooling Coil",
    body: "The existing frost coil, which had become inefficient and outdated, was carefully removed and replaced with a new, high-performance unit. The existing cooling coil was replaced with a new coil designed to handle the revised air volume requirements more effectively.",
    alt: "Existing AHU coil and filter assembly before refurbishment at Gresham Street office",
  },
  {
    photo: "new-ec-fan-installed-ziehl-abegg.jpg",
    label: "EC Fan Upgrade",
    heading: "Fan Assembly & Inverter",
    body: "The belt-driven fan assembly, which was outdated and less efficient, was removed and replaced with a new fan assembly designed for better performance at reduced air volumes. The old inverter was replaced with a modern unit that supports the new system configuration.",
    alt: "New Ziehl-Abegg EC fan installed in AHU at Gresham Street office during refurbishment",
  },
  {
    photo: "new-filters-and-coil-installed.jpg",
    label: "New Filters Installed",
    heading: "Filters & Filter Frames",
    body: "Both panel and bag-type filters were removed and replaced with new filters designed for improved air quality and system efficiency. The frames holding the old filters were also removed as they no longer supported the new filter configurations. New ones were added.",
    alt: "New panel filters and rigid filters installed in refurbished AHU at Gresham Street office",
  },
];

export default function GreshamStreetAHURefurbishmentCaseStudy() {
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
            <span className="text-slate-600">Gresham Street Office AHU Refurbishment</span>
          </nav>

          {/* Title */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Commercial · AHU Refurbishment
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Gresham Street Office<br />AHU Refurbishment
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Gresham-Street-Office-AHU-Refurbishment-Case-Study.pdf"
              download
              className="shrink-0 inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            The existing air handling unit (AHU) required refurbishment to enhance operational efficiency and adapt to new air volume requirements. The project aimed to replace internal components of the AHU with newly selected ones designed for reduced air volume operation, ensuring improved performance and energy efficiency.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/gresham-street-office-ahu-refurbishment/gresham-street-london-office-building.jpg"
              alt="Gresham Street commercial office building in London"
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
            The old heating coil was removed to be substituted with a more efficient model, ensuring optimal heating performance in line with the new specifications.
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
                    src={`/case-studies/images/gresham-street-office-ahu-refurbishment/${item.photo}`}
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

          {/* Outcome */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Project Outcome
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The refurbishment resulted in a significantly upgraded AHU, tailored to operate efficiently at the reduced air volume specified. The new components not only improved system performance but also enhanced energy efficiency, leading to reduced operational costs and improved indoor air quality. The project demonstrated BVS engineers&apos; capability in managing complex AHU refurbishments, ensuring a seamless transition to upgraded technology while maintaining site safety and compliance with disposal regulations.
          </p>

          {/* CTA */}
          <div className="mt-14 border border-slate-200">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Refurbishment Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">AHU components reaching end of life?</p>
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
