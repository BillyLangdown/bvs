import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "NHS Hammersmith & Fulham AHU Refurbishment | BVS Case Study",
  description:
    "BVS carried out a targeted AHU refurbishment at NHS West London Hospital, extending the life of the unit through new components, corrosion treatment, fan repairs, and fresh air damper replacement.",
};

export default function NHSHammersmithCaseStudy() {
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
            <span className="text-slate-600">NHS Hammersmith &amp; Fulham AHU Refurbishment</span>
          </nav>

          {/* Title */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Healthcare · AHU Refurbishment
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                NHS Hammersmith &amp; Fulham<br />AHU Refurbishment
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/NHS-Hammersmith-Fulham-AHU-Refurbishment-Case-Study.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            The NHS West London Hospital recently undertook a refurbishment project for its Air Handling Unit (AHU). The existing AHU, although well-maintained, showed signs of aging and required updates to extend its operational life and improve efficiency. The main objectives of the refurbishment were to economically extend the life of the AHU and associated equipment, ensure effective supply and extract air systems in the hospital&apos;s corridors and communal areas, and address specific maintenance issues to enhance overall performance and reliability.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-\[28rem\]">
            <Image
              src="/case-studies/images/nhs-hammersmith-ahu-refurbishment/nhs-hammersmith-hospital-building-exterior.jpg"
              alt="NHS Hammersmith and Fulham hospital building exterior"
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
            The refurbishment focused on a series of targeted interventions to the main supply and extract AHU serving the hospital&apos;s corridors and communal areas. Rather than a full replacement, the scope of work addressed specific areas of concern to maximise the operational life of the existing unit.
          </p>

          {/* What We Did */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>

          <div className="mt-10 relative h-80 overflow-hidden bg-slate-100 sm:h-96">
            <Image
              src="/case-studies/images/nhs-hammersmith-ahu-refurbishment/ahu-before-refurbishment-nhs-hammersmith.jpg"
              alt="AHU internal components before refurbishment at NHS West London Hospital"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <ul className="mt-10 space-y-4 text-[15px] leading-7 text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Light Refurbishment:</span> Minor repairs to the main supply and extract AHU.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Bathroom Extract Twin Fan Repairs:</span> New motor and belts and twin fan automatic change over system repair.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Surface Corrosion Treatment:</span> Addressed corrosion to prevent further damage.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Fresh Air Inlet Damper Replacement:</span> Improved air quality and efficiency.
            </li>
            <li>
              <span className="font-semibold text-slate-900">New Components:</span> Installed new drivebelts and filters, cleaned coil faces, lubricated parts, reset catches, and replaced door seals.
            </li>
          </ul>

          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            The refurbishment successfully extended the life of the AHU, improved air quality, and enhanced the efficiency of the air supply and extract systems in the hospital. The targeted repairs and updates have ensured that the AHU can continue to operate reliably, providing a safe and comfortable environment for patients and staff.
          </p>

          {/* CTA */}
          <div className="mt-14 border border-slate-200">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Healthcare AHU Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Working on a healthcare or NHS ventilation project?</p>
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
