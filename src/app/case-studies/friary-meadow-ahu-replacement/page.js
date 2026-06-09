import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Friary Meadows Kitchen AHU Refurbishment | BVS Case Study",
  description:
    "BVS resolved overheating and noise issues at Friary Meadows Retirement Village by surveying a poorly designed make-up air system and implementing retrofit solutions that improved kitchen extraction and reduced noise.",
};

export default function FriaryMeadowAhuReplacement() {
  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto max-w-4xl py-14 sm:py-20">

          <nav className="mb-8 flex items-center gap-2 text-[11px] text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/case-studies" className="hover:text-slate-600 transition-colors">Case Studies</Link>
            <span>›</span>
            <span className="text-slate-600">Friary Meadows Kitchen AHU Refurbishment</span>
          </nav>

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Retirement Village · Kitchen AHU Refurbishment
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Friary Meadows<br />Kitchen AHU Refurbishment
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Friary-Meadow-Retirement-Village-Case-Study.pdf"
              download
              className="shrink-0 inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            BVS faced several objectives when resolving the ventilation issues at Friary Meadow, the luxury retirement development in Hampshire. The primary challenge was to address the overheating and noise problems caused by a poorly designed make-up air system. BVS conducted an in-depth survey and quickly identified the root causes of the issues, which included insufficient airflow to the kitchen canopy and draughts from the restaurant.
          </p>

          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/friary-meadow-ahu-replacement/friary-meadow-care-home-aerial-view.jpg"
              alt="Aerial view of Friary Meadows Retirement Village in Hampshire where BVS carried out kitchen AHU refurbishment"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            With the objective of improving the kitchen conditions, BVS provided a detailed report that was approved by Oak Retirement Ltd, the managing agent. BVS then swiftly implemented retrofit solutions that resulted in immediate improvements, including a significant reduction in kitchen heat, enhanced extraction from the canopy, and reduced noise levels.
          </p>

          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <ul className="mt-4 space-y-4 text-[15px] leading-7 text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Survey &amp; Diagnosis:</span>{" "}
              BVS conducted an in-depth survey of the existing make-up air system, identifying insufficient airflow to the kitchen canopy and draughts from the restaurant as the root causes of the overheating and noise issues.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Detailed Report &amp; Approval:</span>{" "}
              A detailed report outlining the findings and recommended retrofit solutions was provided to Oak Retirement Ltd, the managing agent, and subsequently approved.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Retrofit Implementation:</span>{" "}
              BVS swiftly implemented the approved retrofit solutions, delivering a significant reduction in kitchen heat, enhanced extraction from the canopy, and reduced noise levels.
            </li>
          </ul>

          

          <div className="mt-14 border border-slate-200">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Kitchen AHU Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need kitchen ventilation or AHU refurbishment works?</p>
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
