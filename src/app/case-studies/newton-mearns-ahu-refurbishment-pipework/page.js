import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Newton Mearns AHU Refurbishment & Pipework Replacement | BVS Case Study",
  description:
    "BVS carried out a comprehensive refurbishment of three weatherproof AHUs at Newton Mearns Shopping Centre, replacing fans, gas burners, filters, and the full gas distribution pipework to extend service life by 10-15 years.",
};

const workItems = [
  {
    photo: "new-ec-fans-installed-ahu.jpg",
    label: "Fan Upgrade",
    heading: "Belt-Driven Fan & EC Fan Replacement",
    body: "Existing belt-driven fans were replaced with modern equivalent units to enhance reliability and maintain system performance. On one AHU, the belt-driven fan was replaced with a high-efficiency EC fan to improve performance and reduce energy consumption.",
    alt: "New EC fan installed inside AHU at Newton Mearns Shopping Centre rooftop",
  },
  {
    photo: "new-pipework-actuators-valves-installed.jpg",
    label: "Gas Burner Upgrade",
    heading: "Gas Burner Replacement & Controls Integration",
    body: "Existing gas burners were removed and replaced with fully modulating models compliant with current gas safety standards, integrated into the existing Trend control system. Commissioning verified full modulation, speed control, and operational synchronisation.",
    alt: "New gas burner, actuators, and valves installed on AHU at Newton Mearns, Glasgow",
  },
  {
    photo: "new-blue-filters-ahu-after.jpg",
    label: "Filter Upgrades",
    heading: "Panel & Bag Filter Upgrades",
    body: "Panel and bag filters were upgraded to AF101 Type AP and AB85 Type respectively, improving air quality, filtration efficiency, and overall system performance across all three units.",
    alt: "New blue panel filters installed in AHU at Newton Mearns Shopping Centre",
  },
  {
    photo: "crane-lifting-ahu-equipment-rooftop.jpg",
    label: "Gas Pipework",
    heading: "Gas Distribution Pipework Replacement",
    body: "The existing mild-steel gas distribution network was replaced with new 316-grade stainless-steel pipework with pressed joints, isolation valves, and Big Foot support systems. A bridge scaffold was manufactured and craned over the shopping centre's glass structure outside of normal working hours, coordinated with the crane team to ensure safety.",
    alt: "Crane lifting bridge scaffold over Newton Mearns Shopping Centre glass roof for gas pipework installation",
  },
];

export default function NewtonMearnsAhuRefurbishmentPipework() {
  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto max-w-4xl py-14 sm:py-20">

          <nav className="mb-8 flex items-center gap-2 text-[11px] text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/case-studies" className="hover:text-slate-600 transition-colors">Case Studies</Link>
            <span>›</span>
            <span className="text-slate-600">Newton Mearns AHU Refurbishment &amp; Pipework Replacement</span>
          </nav>

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Retail · AHU Refurbishment &amp; Pipework
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Newton Mearns, Glasgow<br />AHU Refurbishment &amp;<br />Pipework Replacement
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/The-Avenue-Newton-Mearns-AHU-Refurbishment-Pipework-Replacement-Case-Study.pdf"
              download
              className="shrink-0 inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            Located within the Newton Mearns Shopping Centre, BVS focused on the comprehensive refurbishment of three existing weatherproof Air Handling Units (AHUs) that provide tempered air to the main shopping mall areas. The client required a cost-effective, energy-efficient refurbishment that would extend the operational life of the AHUs while improving performance reliability. BVS was commissioned to undertake a full refurbishment designed to modernise and futureproof the plant without the disruption or high cost of complete replacement.
          </p>

          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/newton-mearns-ahu-refurbishment-pipework/newton-mearns-shopping-centre-interior.jpg"
              alt="Interior of Newton Mearns Shopping Centre, Glasgow where BVS refurbished three rooftop AHUs"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            By retaining the existing AHU housings and structure, BVS delivered an environmentally responsible solution that reduced waste and embodied carbon while ensuring improved energy efficiency, reduced maintenance demands, and a projected service life extension of 10-15 years. The works were carefully coordinated to minimise disruption to daily shopping centre operations, maintaining safe and continuous occupancy throughout the refurbishment process.
          </p>

          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {workItems.map((item) => (
              <div key={item.photo} className="overflow-hidden border border-slate-100">
                <div className="relative h-72 bg-slate-100">
                  <Image
                    src={`/case-studies/images/newton-mearns-ahu-refurbishment-pipework/${item.photo}`}
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

          <div className="mt-14 border border-slate-200">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Refurbishment Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need AHU refurbishment or pipework replacement at a retail or commercial site?</p>
              <p className="mt-1 text-xs text-white/45">We respond within one working day.</p>
            </div>
            <div className="px-6 py-6">
              <QuickQuoteForm />
            </div>
          </div>

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
