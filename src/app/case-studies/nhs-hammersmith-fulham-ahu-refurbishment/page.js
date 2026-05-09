import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "AHU Refurbishment — NHS Hammersmith & Fulham | BVS Case Study",
  description:
    "BVS refurbished the air handling unit at NHS West London Hospital — extending operational life, improving air quality, and restoring reliable ventilation to hospital corridors and communal areas without full replacement.",
};

const works = [
  {
    label: "Light Refurbishment",
    body: "Minor repairs to the main supply and extract AHU.",
  },
  {
    label: "Bathroom Extract Twin Fan Repairs",
    body: "New motor and belts and twin fan automatic change over system repair.",
  },
  {
    label: "Surface Corrosion Treatment",
    body: "Addressed corrosion to prevent further damage.",
  },
  {
    label: "Fresh Air Inlet Damper Replacement",
    body: "Improved air quality and efficiency.",
  },
  {
    label: "New Components",
    body: "Installed new drivebelts and filters, cleaned coil faces, lubricated parts, reset catches, and possibly replaced door seals.",
  },
];

export default function NHSHammersmithAHUCaseStudy() {
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
            <span className="text-slate-600">NHS Hammersmith &amp; Fulham — AHU Refurbishment</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Healthcare · NHS
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-slate-900 sm:text-4xl">
            AHU Refurbishment —<br />NHS Hammersmith<br />&amp; Fulham
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* ── THE PROBLEM ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            The Problem
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The NHS West London Hospital recently undertook a refurbishment project for its Air Handling Unit (AHU).
            The existing AHU, although well-maintained, showed signs of aging and required updates to extend its
            operational life and improve efficiency. The main objectives of the refurbishment were to: economically
            extend the life of the AHU and associated equipment; ensure effective supply and extract air systems in
            the hospital&apos;s corridors and communal areas; and address specific maintenance issues to enhance overall
            performance and reliability.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Site photo
          </div>

          {/* ── WHAT WE DID ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>
          <div className="mt-4 flex flex-col gap-5">
            {works.map((w) => (
              <div key={w.label}>
                <p className="font-semibold text-slate-900">{w.label}</p>
                <p className="mt-1 text-[15px] leading-7 text-slate-700">{w.body}</p>
              </div>
            ))}
          </div>

          {/* Before/after photo placeholders */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex h-48 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
              Before
            </div>
            <div className="flex h-48 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
              After
            </div>
          </div>

          {/* ── THE RESULTS ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The refurbishment successfully extended the life of the AHU, improved air quality, and enhanced the
            efficiency of the air supply and extract systems in the hospital. The targeted repairs and updates have
            ensured that the AHU can continue to operate reliably, providing a safe and comfortable environment for
            patients and staff.
          </p>

          {/* ── CTA ── */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Refurbishment Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Similar unit on your site?</p>
              <p className="mt-1 text-xs text-white/45">We respond within one working day with practical options.</p>
            </div>
            <div className="px-6 py-6">
              <QuickQuoteForm />
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/air-handling-unit-refurbishment"
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 hover:text-[#297858] transition-colors"
            >
              ← Back to AHU Refurbishment
            </Link>
          </div>

        </div>
      </Container>
    </div>
  );
}
