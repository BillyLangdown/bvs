import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "RED Distillery AHU Refurbishment Case Study",
  description: "BVS designed and installed a new extract ventilation system at RED Distillery for AU Vodka, including spiral ductwork, fire dampers, and an extract fan achieving 6 air changes per hour.",
  path: "/case-studies/red-distillery-ahu-refurbishment",
});

const workItems = [
  {
    photo: "real-english-drinks-group-building-exterior.jpg",
    label: "RED Distillery",
    heading: "Extract System Design",
    body: "The design of the extract system ensured that the distillery area achieved the required air changes per hour, maintaining proper ventilation and air quality.",
    alt: "Real English Drinks Group distillery building exterior",
  },
  {
    photo: "distillery-production-floor-interior.jpg",
    label: "Production Floor",
    heading: "System Components",
    body: "The project involved the installation of spiral ductwork, fire dampers, and an extract fan, ensuring efficient and effective ventilation within the distillery area.",
    alt: "RED Distillery production floor interior showing the active manufacturing environment",
  },
  {
    photo: "new-ductwork-installed-distillery-ceiling.jpg",
    label: "New Ductwork Installed",
    heading: "Speed Controller Installation",
    body: "The proposal included the option to provide and install a speed controller for the extract fan, offering control over the air extraction process.",
    alt: "New spiral ductwork installed in the distillery ceiling as part of the extract ventilation system",
  },
];

export default function RedDistilleryAhuRefurbishment() {
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
            <span className="text-slate-600">RED Distillery AHU Refurbishment</span>
          </nav>

          {/* Title */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Manufacturing · AHU Refurbishment
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                AU Vodka / RED Distillery<br />AHU Manufacturing, Refurbishment &amp; Installation
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Red-Distillery-Case-Study-2.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            The project focused on the refurbishment of the ventilation system at RED Distillery, with a specific emphasis on the extract ventilation for the distillery area. The scope of work included the design and installation of a new extract system, spiral ductwork, fire dampers, and an extract fan. The system was designed to achieve 6 air changes per hour within the distillery area.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-slate-700">
            The AHU refurbishment and installation of the ventilation system at RED Distillery aimed to enhance air quality and maintain optimal working conditions within the distillery area. The project encompassed design, installation, and commissioning, ensuring compliance with regulations and client requirements.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/red-distillery-ahu-refurbishment/au-vodka-real-english-drinks-group-product.jpg"
              alt="AU Vodka premium drinks product by Real English Drinks Group"
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
            The project had a tight completion deadline due to the Christmas shutdown. To meet the schedule, it was necessary to order materials by a specific date to ensure their availability. The project adhered to building regulations, client requirements, and recommendations, and emphasised the importance of health and safety compliance, including the provision of method statements, risk assessments, and appropriate personal protective equipment.
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
                    src={`/case-studies/images/red-distillery-ahu-refurbishment/${item.photo}`}
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
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Extract Ventilation Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need extract ventilation designed for a production or manufacturing site?</p>
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
