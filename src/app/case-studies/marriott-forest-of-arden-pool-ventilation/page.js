import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Marriott Forest of Arden Pool Ventilation Troubleshooting Case Study",
  description:
    "BVS investigated and resolved pool hall ventilation issues at the Marriott Forest of Arden hotel, identifying AHU and ductwork faults preventing the hall from reaching its required 31°C temperature.",
};

const workItems = [
  {
    photo: "thermal-imaging-survey-pool-ventilation.jpg",
    label: "AHU Validation & Survey",
    heading: "Thermal Imaging & Performance Assessment",
    body: "The AHU, installed three years prior, was unable to achieve the required pool hall temperature of 31°C, reaching only 24°C. BVS conducted a full validation survey covering air volumes, temperatures, ductwork layout, and the air distribution system using thermal imaging to identify heat loss and airflow deficiencies.",
    alt: "Thermal imaging camera used during ventilation survey at Marriott Forest of Arden pool hall",
  },
  {
    photo: "engineer-on-ladder-pool-ceiling-ductwork.jpg",
    label: "AHU Improvements",
    heading: "Fan, Baffle & Access Modifications",
    body: "The fan was relocated on its bulkhead away from the heating coil to improve airflow. A baffle was installed after the heating coil to distribute air more evenly. The supply fan access door was swapped with the service door to improve maintenance access, and a mesh guard was fitted on the silencer inlet to prevent vermin ingress.",
    alt: "Engineer on ladder working on pool ceiling ductwork at Marriott Forest of Arden",
  },
  {
    photo: "insulated-ductwork-pool-hall-ceiling.jpg",
    label: "Ductwork Remediation",
    heading: "Ductwork Leak Repairs",
    body: "The existing galvanised ductwork, around 30 years old, showed significant leaks resulting in pressure drops and air loss. High-level slot diffusers used for air distribution were also found to be inadequate, with velocities measuring around 1m/s, insufficient for effectively moving warm air downwards.",
    alt: "Insulated ductwork installed in pool hall ceiling at Marriott Forest of Arden",
  },
  {
    photo: "marriott-pool-hall-after-ventilation-works.jpg",
    label: "Controls & Air Distribution",
    heading: "Control Panel & Diffuser Upgrades",
    body: "The keypad on the existing control panel was replaced to enable higher air volume operation. The linear slot diffusers were modified to improve velocity and directional airflow. By improving AHU performance, rectifying ductwork leaks, and enhancing air distribution, the desired pool hall temperature was achieved.",
    alt: "Marriott Forest of Arden pool hall after ventilation improvements and diffuser upgrades",
  },
];

export default function MarriottForestOfArdenPoolVentilation() {
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
            <span className="text-slate-600">Marriott Forest of Arden Pool Ventilation</span>
          </nav>

          {/* Title */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Leisure Hotel · Ventilation Troubleshooting
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Forest of Arden<br />Swimming Pool<br />Ventilation Troubleshooting
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Marriott-Hotel-Forest-of-Arden-Troubleshooting-Solutions-Case-Study-x-3-1.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            The project involved the validation and surveying of the Air-Handling Unit (AHU) serving the swimming pool hall. The AHU, installed three years ago, was responsible for supplying and extracting air to maintain a temperature of approximately 31°C. However, the client reported that the maximum temperature achieved since the installation of the AHU was only around 24°C.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-\[28rem\]">
            <Image
              src="/case-studies/images/marriott-forest-of-arden-pool-ventilation/marriott-forest-of-arden-hotel-pool.jpg"
              alt="Marriott Forest of Arden hotel indoor swimming pool hall"
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
            The investigation covered various aspects of the installation, including air volumes, temperatures, ductwork layout, and the air distribution system. The case study highlighted the issues affecting the swimming pool hall&apos;s air temperature and proposed a range of measures to address them.
          </p>

          {/* What We Did */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Issues &amp; Improvements
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {workItems.map((item) => (
              <div key={item.photo} className="overflow-hidden border border-slate-100">
                <div className="relative h-72 bg-slate-100">
                  <Image
                    src={`/case-studies/images/marriott-forest-of-arden-pool-ventilation/${item.photo}`}
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
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Pool Hall Ventilation Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Having temperature or humidity issues in a swimming pool hall?</p>
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
