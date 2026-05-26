import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Car Dealership Farnborough, Heating Coil Replacement | BVS Case Study",
  description:
    "A car dealership in Farnborough required a full heating coil replacement in its AHU plant room. BVS sized, manufactured, and installed a replacement unit with full pipework and insulation to BSS6644:2011.",
};

export default function CarDealershipFarnboroughCoilReplacementCaseStudy() {
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
            <span className="text-slate-600">Car Dealership Farnborough, Heating Coil Replacement</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Automotive · Coil Replacement
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Car Dealership<br />Farnborough<br />Heating coil replacement.
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* ── PROJECT OVERVIEW ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            A car dealership facility in Farnborough required a complete heating coil replacement within the air handling unit serving the plant room. The project was undertaken to BSS6644:2011 standards, with the aim of restoring ventilation performance and safeguarding the facility's heating systems.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Site photo
          </div>

          {/* ── THE CHALLENGE ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Challenge
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The existing heating coil had deteriorated beyond repair, resulting in inadequate airflow and unreliable temperature control within the plant room. The underperforming coil required full replacement, including removal of all associated pipework, rather than repair.
          </p>

          {/* ── WHAT WE DID ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">Design & Manufacture</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                A replacement heating coil was sized and manufactured to the exact specification required for the AHU, ensuring compatibility with the existing system layout and performance requirements.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Installation</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                The new coil was installed in the AHU plant room, with all associated heating pipework plumbed and connected correctly.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Insulation & Commissioning</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Pipework insulation was fitted throughout, the old coil and pipework were fully removed, and the system was commissioned and tested to confirm performance to BSS6644:2011 standards.
              </p>
            </div>
          </div>

          {/* ── THE RESULTS ── */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            A modern, efficient heating solution was restored, providing reliable airflow and precise temperature control within the plant room. The correctly specified and installed replacement unit ensures safe, long-term operation of the dealership's heating systems.
          </p>

          {/* ── CTA ── */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Coil Replacement Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Heating or frost coil failed on your site?</p>
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
