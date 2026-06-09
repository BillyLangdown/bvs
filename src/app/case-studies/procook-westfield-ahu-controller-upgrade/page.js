import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "ProCook Westfield AHU Controls Upgrade | BVS Case Study",
  description:
    "BVS restored ventilation at ProCook's Westfield store by replacing a failed supply fan motor and outdated controls with a new Trend BMS controller, delivering full automation and smart scheduling.",
};

const workItems = [
  {
    photo: "old-electrical-control-panel-before-upgrade.jpg",
    label: "Restored Airflow",
    heading: "New 1.1kW Supply Fan Motor",
    body: "The existing air conditioning ventilation system had become non-operational due to a failed 1.1kW supply fan motor and outdated controls. A new 1.1kW supply fan motor was installed with belts and pulleys to restore airflow to the store.",
    alt: "Old electrical control panel at ProCook Westfield prior to AHU controls upgrade",
  },
  {
    photo: "new-controller-panel-installed-wired.jpg",
    label: "Modernised Controls",
    heading: "Trend BMS Controller Installation",
    body: "The outdated controls were replaced with a Trend BMS controller for full automation and easy scheduling. The original thermostat was also poorly located, preventing accurate temperature regulation across the shop floor, so a new space temperature sensor was fitted in the shop floor area to deliver reliable temperature readings.",
    alt: "New Trend BMS controller panel installed and wired at ProCook Westfield",
  },
  {
    photo: "new-trend-controller-installed-ahu.jpg",
    label: "Optimised Climate Control",
    heading: "Chilled Water & LPHW Coil Integration",
    body: "Both chilled water and LPHW coils were enabled to regulate temperature effectively throughout the store, restoring the system's ability to deliver effective comfort cooling and heating.",
    alt: "New Trend controller installed in AHU at ProCook Westfield for climate control",
  },
  {
    photo: "ahu-controller-commissioned-running.jpg",
    label: "Smart Scheduling",
    heading: "Commissioning & Store Hours Programming",
    body: "The Trend controller was programmed in line with store opening hours, with a manual override for out-of-hours use. Following the upgrade, the ventilation system is now fully functional, energy-efficient, and requires minimal user input, providing ProCook with a reliable and automated solution aligned with their day-to-day operations.",
    alt: "AHU controller commissioned and running at ProCook Westfield store",
  },
];

export default function ProcookWestfieldAhuControllerUpgrade() {
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
            <span className="text-slate-600">ProCook Westfield AHU Controls Upgrade</span>
          </nav>

          {/* Title */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Retail · AHU Controls
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                ProCook, Westfield<br />AHU Controls Upgrade
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Case-Study-Procook-Westfield-AHU-Controls-5.pdf"
              download
              className="shrink-0 inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            At ProCook&apos;s Westfield store, the existing air conditioning ventilation system had become non-operational due to a failed 1.1kW supply fan motor and outdated controls. The original thermostat was also poorly located, preventing accurate temperature regulation across the shop floor. As a result, the system could no longer deliver effective comfort cooling or heating, creating operational challenges for the store.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/procook-westfield-ahu-controller-upgrade/procook-westfield-london-store-exterior.jpg"
              alt="ProCook store at Westfield London where BVS carried out AHU controls upgrade"
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
            Following the upgrade, the ventilation system is now fully functional, energy-efficient, and requires minimal user input, providing ProCook with a reliable and automated solution aligned with their day-to-day operations.
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
                    src={`/case-studies/images/procook-westfield-ahu-controller-upgrade/${item.photo}`}
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
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Controls Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need an AHU controls upgrade or BMS installation for your site?</p>
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
