import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Friary Meadow Retirement Village — AHU Replacement | BVS Case Study",
  description:
    "BVS designed and installed a replacement AHU at Friary Meadow Retirement Village — delivering reliable ventilation for a sensitive residential care environment with minimum disruption to residents.",
};

export default function FriaryMeadowAhuReplacement() {
  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl py-14 sm:py-20">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-[11px] text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/case-studies" className="hover:text-slate-600 transition-colors">Case Studies</Link>
            <span>›</span>
            <span className="text-slate-600">Friary Meadow Retirement Village — AHU Replacement</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Residential Care · AHU Replacement
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-slate-900 sm:text-4xl">
            Friary Meadow<br />Retirement Village<br />AHU Replacement
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* PROJECT OVERVIEW */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Friary Meadow Retirement Village required a replacement air handling unit to maintain reliable
            ventilation throughout the residential facility. Retirement villages and care environments
            present particular challenges — disruption must be minimised and air quality maintained at all
            times for the comfort and health of residents. The existing AHU had reached the end of its
            operational life and required full replacement.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Site photo
          </div>

          {/* WHAT WE DID */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">Assessment & Design</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                BVS assessed the existing installation and designed a replacement AHU to meet the required
                performance specification — ensuring the new unit would deliver the ventilation performance
                needed for the residential environment.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Supply, Installation & Commissioning</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                BVS managed the full supply and installation process. Works were carefully planned and
                sequenced to avoid disruption to residents, with commissioning and handover completed to
                the client's satisfaction.
              </p>
            </div>
          </div>

          {/* THE RESULTS */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The replacement AHU restored reliable, efficient ventilation to the facility, ensuring
            continued occupant comfort and air quality throughout Friary Meadow Retirement Village.
          </p>

          {/* CTA */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Replacement Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">AHU replacement needed at a care or residential site?</p>
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
