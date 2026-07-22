import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "TOCA Football O2 Arena AHU Refurbishment Case Study",
  description:
    "BVS refurbished three AHUs at the TOCA Social O2 Arena, repurposing units to meet the air volume requirements for the world's first interactive football and dining experience.",
};

const workItems = [
  {
    photo: "engineers-ahu-refurbishment-o2-arena-london.jpg",
    label: "AHU Survey & Refurbishment",
    heading: "Comprehensive Survey",
    body: "A thorough survey of multiple AHUs allowed for targeted solutions, identifying specific issues such as leaking coil pipework, damaged frost coil, and corroded areas.",
    alt: "BVS engineers carrying out AHU survey and refurbishment works at the O2 Arena, London",
  },
  {
    photo: "toca-football-simulator-room-player.jpg",
    label: "TOCA Social Activity Area",
    heading: "Customised Repurposing",
    body: "The AHU refurbishment and maintenance project was tailored to TOCA Social's specific needs, ensuring the units were modified to provide the required air volume for the activity area and bar.",
    alt: "Player using the TOCA Social football simulator at the O2 Arena, London",
  },
  {
    photo: "toca-football-upper-level-venue-interior.jpg",
    label: "Venue Interior",
    heading: "Efficient and Economical Solutions",
    body: "Cost-effective refurbishment measures were implemented, including treating corrosion, replacing seals and filters, and cleaning components. Proper alignment and tensioning of fan motor drives maximised the efficiency and lifespan of the AHUs.",
    alt: "Upper level interior of TOCA Social venue at the O2 Arena, London",
  },
];

export default function TocaFootballO2AhuRefurbishment() {
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
            <span className="text-slate-600">TOCA Football O2 Arena AHU Refurbishment</span>
          </nav>

          {/* Title */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Sports &amp; Entertainment · AHU Refurbishment
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                TOCA Football<br />O2 Arena, London<br />AHU Refurbishment
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Toca-Football-O2-Arena-Case-Study-1-2.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            The Toca Project O2 Dome required refurbishment and repurposing to meet the specific needs of TOCA Social, the world&apos;s first interactive football and dining experience. The existing Air-Handling Unit (AHU) did not meet the requirements, necessitating the repurposing of the AHU to accommodate the required air volume for the activity area and bar.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-slate-700">
            The survey focused on AHU 1, 2, and 3, evaluating options for refurbishment and reinstating them to their original designs or reducing their duties while refurbishing. AHU 1 and 2 were assessed for potential refurbishment and increasing their duty to the maximum capacity, while AHU 3 required refurbishment and maintenance of its current duty.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/toca-football-o2-ahu-refurbishment/toca-football-o2-venue-interior.jpg"
              alt="TOCA Social venue interior at the O2 Arena, London"
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
            We fully refurbished all AHU units on time to the client&apos;s satisfaction, now fit for another 20-30 years of life.
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
                    src={`/case-studies/images/toca-football-o2-ahu-refurbishment/${item.photo}`}
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
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Refurbishment Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">AHU refurbishment needed at your venue?</p>
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
