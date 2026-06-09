import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Disney Headquarters Hammersmith AHU Validation & Survey | BVS Case Study",
  description:
    "BVS conducted a comprehensive AHU validation and ventilation survey across nine air handling units at Disney HQ in Hammersmith, assessing condition, performance, weatherproofing, and recommending refurbishment or replacement.",
};

const workItems = [
  {
    photo: "engineers-conducting-ventilation-survey-rooftop.jpg",
    label: "Equipment Condition & Refurbishment",
    heading: "AHU Condition Assessment",
    body: "The majority of the surveyed AHUs were found to be in reasonable condition and deemed suitable for refurbishment. However, upon closer inspection, certain units were identified as more suitable for replacement, and these recommendations were included in the final report.",
    alt: "Engineers conducting ventilation survey on rooftop AHU equipment at Disney HQ Hammersmith",
  },
  {
    photo: "rooftop-hvac-units-disney-headquarters.jpg",
    label: "Weatherproofing Issues",
    heading: "Roof-Related AHU Problems",
    body: "A significant problem discovered during the survey was the roof-related issues with the Weatherproof AHUs. Water leakage was observed, leading to potential damage and performance issues. Detailed recommendations were provided to address these issues and improve the weatherproofing measures for better AHU functionality.",
    alt: "Rooftop HVAC units at Disney Headquarters showing weatherproofing issues identified during survey",
  },
  {
    photo: "ahu-rooftop-equipment-disney-hq.jpg",
    label: "Comprehensive Assessment",
    heading: "Component-Level Examination",
    body: "The survey encompassed a thorough examination of various components, including supplies, dampers, filters, louvres, ductworks, motors, fans, heating coils, and other relevant aspects. Each component was inspected to ensure proper functioning, and any anomalies or deficiencies were documented. Observations such as \"Only one supply fan is running\" and \"Extract fans incorrectly labelled, do not correspond with isolators\" were made to highlight specific issues.",
    alt: "Rooftop AHU equipment at Disney HQ Hammersmith assessed during BVS ventilation survey",
  },
  {
    photo: "disney-bms-vav-controller-screen.jpg",
    label: "Troubleshooting & Performance",
    heading: "Fault Identification & System Optimisation",
    body: "The survey involved identifying underlying problems and malfunctions across all nine AHUs, including a single supply fan running on the North West Extract, incorrectly labelled extract fans, and bearings requiring repair. The survey extended beyond individual AHUs to encompass the entire building's ventilation system, ensuring all components were running efficiently and contributing to optimal overall performance.",
    alt: "Disney BMS VAV controller screen showing AHU performance data during ventilation validation",
  },
];

export default function DisneyHeadquartersVentilationSurvey() {
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
            <span className="text-slate-600">Disney Headquarters Ventilation Survey</span>
          </nav>

          {/* Title */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Commercial · AHU Validation &amp; Surveying
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Disney Headquarters<br />Hammersmith, London<br />AHU Validation &amp; Surveying
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Disney-Headquarters-Hammersmith-Case-Study-Document-A4-Portrait-4.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            The project involved conducting a comprehensive survey and validation of the air-handling equipment (AHU) at Disney HQ in Hammersmith. The building housed multiple rooms that required proper ventilation, and the survey focused on assessing the condition and performance of the nine different AHUs, which varied in age from approximately 20 to over 30 years old. These AHUs were located throughout the building, including on the rooftop and in various plant rooms.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/disney-headquarters-ventilation-survey/disney-uk-headquarters-hammersmith-london.jpg"
              alt="Disney UK Headquarters building exterior in Hammersmith, London"
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
            During the survey, the following aspects were evaluated for each AHU: unit type, required actions such as refurbishment, general condition, and recommended actions based on the findings. The objective was to provide a detailed assessment of each AHU&apos;s status and identify necessary steps to optimise their performance.
          </p>

          {/* What We Did */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Survey Findings
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {workItems.map((item) => (
              <div key={item.photo} className="overflow-hidden border border-slate-100">
                <div className="relative h-72 bg-slate-100">
                  <Image
                    src={`/case-studies/images/disney-headquarters-ventilation-survey/${item.photo}`}
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
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Survey Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need an AHU validation survey for your building?</p>
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
