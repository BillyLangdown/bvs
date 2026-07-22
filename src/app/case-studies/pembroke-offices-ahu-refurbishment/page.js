import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Pembroke Offices AHU Refurbishment Case Study",
  description:
    "BVS refurbished the rooftop AHUs at 50 Pembroke Court, replacing coils, supply fans, and electric heater batteries with new EC fans and a reverse cycle coil to improve efficiency and air quality for office tenants.",
};

const workItems = [
  {
    photo: "new-coil-installed-with-copper-pipework.jpg",
    label: "Reverse Cycle Coil Replacement",
    heading: "Full Coil Removal & Replacement",
    body: "All AHU-mounted coils, including the frost coil, heating coil, run around coil, and cooling coil, were removed. A new reverse cycle coil was installed in place of the removed coils.",
    alt: "New reverse cycle coil installed with copper pipework inside AHU at Pembroke Offices",
  },
  {
    photo: "pembroke-offices-engineer-working-on-coil.jpg",
    label: "Supply Fan & Motor Replacement",
    heading: "New Ziehl EC Fan Bulkhead",
    body: "The existing belt-driven supply fan and motor were removed. A new fan bulkhead was supplied and fitted with three Ziehl EC fans. Fan power cables were wired to an isolator switch, and the controls were wired to a potentiometer.",
    alt: "Engineer working on AHU refurbishment at Pembroke Offices rooftop plantroom",
  },
  {
    photo: "new-electric-heater-battery-installed.jpg",
    label: "Electric Heater Battery Replacement",
    heading: "84kW EHB Installation",
    body: "A new free-issued Electric Heater Battery (EHB) was installed, consisting of two 42kW EHBs to provide a total of 84kW heating capacity. All necessary metalwork to fabricate the EHB duct heater section was supplied and installed. Wiring was handled by other contractors.",
    alt: "New electric heater battery installed inside AHU duct section at Pembroke Offices",
  },
  {
    photo: "new-blue-filters-installed-ahu.jpg",
    label: "Filter Bulkhead & Inlet Damper",
    heading: "Freeze Protection & Filter Monitoring",
    body: "A new filter bulkhead was introduced to prevent any risk of freezing in the system during colder months. An inlet damper was installed for better monitoring of filter status, helping maintain air cleanliness and reducing maintenance costs.",
    alt: "New blue filters installed in AHU filter bulkhead at Pembroke Offices",
  },
];

export default function PembrokeOfficesAhuRefurbishment() {
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
            <span className="text-slate-600">Pembroke Offices AHU Refurbishment</span>
          </nav>

          {/* Title */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Commercial · AHU Refurbishment
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Pembroke Offices<br />AHU Refurbishment
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Pembroke-Offices-AHU-Refurbishment-Case-Study.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            50 Pembroke Court, located approximately 35 miles southeast of London, provides flexible open-plan office space with excellent connectivity to London stations and the Channel Ports. Following a comprehensive front-of-house refurbishment, the building required an upgrade to its AHUs to enhance the efficiency and performance of its HVAC system. The project aimed to ensure optimal air quality and comfort for its tenants, aligning with the modernised aesthetic and functionality of the newly refurbished front-of-house areas.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/pembroke-offices-ahu-refurbishment/pembroke-offices-building-exterior.jpg"
              alt="50 Pembroke Court office building exterior prior to AHU refurbishment works"
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
            This case study outlines the completed AHU refurbishment, detailing the specific upgrades and improvements made to both the supply and extract units within the rooftop plantrooms. Internal patching of the AHU casing was performed as required throughout, with any rusted areas treated with red oxide primer.
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
                    src={`/case-studies/images/pembroke-offices-ahu-refurbishment/${item.photo}`}
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
          <div className="mt-14 border border-slate-200">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Office AHU Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Planning an AHU refurbishment for a commercial office?</p>
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
