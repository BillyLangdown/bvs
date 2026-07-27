import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Concorde Simulator Ventilation Case Study",
  description: "BVS engineered a heat recovery ventilation solution for the Concorde flight simulator at Brooklands Museum, surpassing promised air volume delivery by over 50% while maintaining CO2 levels well below 800 PPM.",
  path: "/case-studies/concorde-simulator-ventilation",
});

export default function ConcrodeSimulatorVentilation() {
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
            <span className="text-slate-600">Concorde Simulator Ventilation</span>
          </nav>

          {/* Title */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Museum &amp; Heritage · Ventilation
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Concorde Simulator<br />Ventilation
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Concorde-Project-Case-Study.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            BVS faced several objectives when tasked with finding a ventilation solution for the Concorde flight simulator at Brooklands Museum. The simulator had been closed since the pandemic due to a lack of ventilation in its sealed environment, posing a risk to delicate and irreplaceable electronics. The primary objective was to engineer a ventilation system that could be implemented within the tight confines of the simulator. BVS had to design a solution that would effectively circulate fresh air while maintaining the integrity and functionality of the flight deck, instrumentation, and controls. The ventilation system needed to ensure a safe and comfortable environment for visitors, allowing them to once again experience the thrill of flying Concorde without compromising the preservation of this iconic piece of aviation history.
          </p>

          {/* Hero image */}
          <div className="mt-8 flex justify-center">
          <div className="relative h-[500px] w-full max-w-2xl overflow-hidden bg-slate-100">
     
            <Image
              src="/case-studies/images/concorde-simulator-ventilation/concorde-aircraft-cockpit-simulator.jpg"
              alt="Concorde flight simulator cockpit at Brooklands Museum where BVS installed heat recovery ventilation"
              fill
              unoptimized
              className="object-cover"
            />
          </div>  
          </div>

          {/* Solution */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Solution
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Following an extensive survey and approval of their report and ductwork routes by the sim technical team, BVS installed a comprehensive heat recovery ventilation package. BVS incorporated black-painted ductwork within the projector section and strategically positioned supply air grilles near the pilot&apos;s seat and at the engineer&apos;s console, utilising displacement ventilation for effective extraction.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-slate-700">
            An important aspect of the ventilation solution was the removal of potentially Covid-containing aerosol particles. BVS successfully implemented a system that ensured efficient ventilation and a safe environment. Not only did the ventilation system surpass the promised air volume delivery by over 50%, but it also maintained CO2 levels within the recommended range of 6-700 parts per million (PPM), well below the maximum of 800 PPM for optimal ventilation. The system achieved nearly one air change per minute, all while avoiding draughts and excessive noise.
          </p>

          {/* Challenges */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Challenges
          </h2>
          <ul className="mt-4 space-y-2 text-[15px] leading-7 text-slate-700">
            <li>Preservation of Electronics</li>
            <li>Balancing Visitor Experience &amp; Preservation</li>
            <li>Limited Space Within The Simulator</li>
          </ul>

          {/* Benefits */}
          <h2 className="mt-10 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Benefits
          </h2>
          <ul className="mt-4 space-y-2 text-[15px] leading-7 text-slate-700">
            <li>Enhanced Safety Within The Simulator</li>
            <li>Improved Visitor Experience</li>
            <li>Preservation of Aviation History</li>
          </ul>

          {/* CTA */}
          <div className="mt-14 border border-slate-200">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Specialist Ventilation Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need ventilation for a heritage or specialist environment?</p>
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
