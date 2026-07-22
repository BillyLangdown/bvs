import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Blackfriars Office Bloom Development AHU Manufacturing Case Study",
  description:
    "BVS designed, manufactured, and installed two bespoke air handling units for the Dorset Rise Bloom office development at Blackfriars, London - including crane lifts, road closures, and full ductwork integration.",
};

const slug = "blackfriars-office-bloom-development-ahu-manufacturing";
const imgBase = `/case-studies/images/${slug}`;

const workItems = [
  {
    photo: "blackfriars-ahu1-crane-lift.jpg",
    label: "AHU1 Being Lifted Up",
    heading: "Crane Lift & Installation",
    body: "The most critical phase of the project involved the crane lift and installation of the AHUs. Our skilled technicians and rigging experts executed the lift with precision, carefully placing the units in their designated locations within the office block. This phase was executed in compliance with all safety protocols and industry standards.",
    alt: "AHU1 being lifted by crane into position at Blackfriars Bloom office development, London",
  },
  {
    photo: "blackfriars-ahu-section-lift.jpg",
    label: "AHU Successfully Installed",
    heading: "Unit Placed Into Position",
    body: "With road closures in place along the London high street, timing was critical. Our team coordinated with other contractors on-site to ensure the crane operation ran to schedule, placing each unit in its designated location without delay or additional cost to the client.",
    alt: "AHU section being crane lifted into position at Blackfriars, viewed from inside the office building",
  },
  {
    photo: "blackfriars-ahu-installed-rooftop.jpg",
    label: "Installed on Rooftop",
    heading: "AHUs Installed on Roof",
    body: "With both units successfully craned into position, BVS engineers completed all mechanical connections and prepared the units for ductwork integration. The custom dimensions ensured the units sat correctly within the designated plant area without modification to the building structure.",
    alt: "Installed AHU casing on Blackfriars office rooftop with ductwork connections being made",
  },
  {
    photo: "blackfriars-ductwork-rooftop.jpg",
    label: "Ductwork Being Connected",
    heading: "Ductwork Integration",
    body: "Following the successful installation, our team seamlessly integrated the newly installed AHUs into the existing ductwork system. This ensured the efficient distribution of conditioned air throughout the building, maintaining optimal air quality and temperature control.",
    alt: "BVS engineers connecting ductwork to the installed AHUs on the Blackfriars office rooftop",
  },
];

export default function BlackfriarsAHUCaseStudy() {
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
            <span className="text-slate-600">Blackfriars Office Bloom Development AHU Manufacturing</span>
          </nav>

          {/* Title */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Commercial Offices · AHU Manufacturing & Installation
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Blackfriars Office Bloom<br />Development AHU Manufacturing
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="https://www.bvs-ltd.co.uk/wp-content/uploads/2023/10/Blackfriars-Office-Bloom-Development-Case-Study.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Download PDF
            </a>
          </div>

          {/* Intro */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            Situated in the heart of London, Dorset Rise, a newly constructed office block got in contact with us to assist them in designing, manufacturing, and installing two cutting-edge Air-Handling Units (AHUs) tailored specifically to meet the unique demands of this prestigious office space.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-slate-700">
            This project demanded meticulous planning that spanned several months, with each phase carefully orchestrated to mitigate the risk of any errors or setbacks. Precision was our guiding principle throughout, ensuring that every aspect was flawlessly executed.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src={`${imgBase}/blackfriars-ahu-street-crane.jpg`}
              alt="BVS engineers guiding custom-built AHU being craned into position on London street at Blackfriars Bloom office development"
              fill
              unoptimized
              className="object-cover object-[center_65%]"
            />
          </div>

          {/* Project Overview */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Based on the gathered measurements and requirements, our engineering team designed two custom Air-Handling Units meticulously engineered to meet the exact specifications outlined during the assessment phase. Special attention was given to energy efficiency, noise reduction, and compliance with relevant regulations.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-slate-700">
            Operating under the constraints of a stringent timeline, necessitated by planned road closures along the bustling London high street, we were acutely aware of the imperative to adhere to schedules and avoid any additional costs for our client. Prior to installation, we developed a detailed installation plan to ensure minimal disruption to the ongoing construction activities at Dorset Rise. This included scheduling crane lifts, coordinating with other contractors on-site, and planning for the safe and efficient installation of the AHUs.
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
                    src={`${imgBase}/${item.photo}`}
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

          {/* Outcome */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Project Outcome
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Both AHUs were successfully designed, manufactured, crane-lifted into position, and commissioned on schedule. By managing every phase in-house from design through to ductwork integration, BVS maintained programme certainty throughout a complex, time-critical operation in central London. The completed installation delivers reliable, energy-efficient ventilation for the Dorset Rise office development, with the building receiving fully commissioned air handling systems tailored to its exact specification.
          </p>

          {/* CTA */}
          <div className="mt-14 border border-slate-200">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Manufacturing Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need a custom AHU designed and built?</p>
              <p className="mt-1 text-xs text-white/45">We respond within one working day.</p>
            </div>
            <div className="px-6 py-6">
              <QuickQuoteForm defaultService="AHU Manufacturing & Installation" />
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link href="/case-studies" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 hover:text-[#297858] transition-colors">
              Back to Case Studies
            </Link>
          </div>

        </div>
      </Container>
    </div>
  );
}
