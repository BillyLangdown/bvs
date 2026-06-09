import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Car Dealership Farnborough Frost Coil Replacement | BVS Case Study",
  description:
    "BVS designed, manufactured, and installed a replacement frost coil for an AHU at a car dealership in Farnborough, including removal of the existing coil, new pipework, insulation, and commissioning.",
};

const workItems = [
  {
    photo: "fouled-coil-ahu-before-farnborough.jpg",
    label: "Survey & Design",
    heading: "Size Up, Design & Manufacture Frost Coil",
    body: "The existing frost coil was surveyed and sized. A custom replacement was then designed and manufactured to the required specification.",
    alt: "Fouled and degraded AHU frost coil before replacement at Farnborough car dealership",
  },
  {
    photo: "degraded-cooling-coil-before-replacement.jpg",
    label: "Removal",
    heading: "Uninstall Heating Coil & Attached Pipework",
    body: "The existing heating coil and its attached pipework were carefully removed from the AHU, preparing the unit for the new installation.",
    alt: "Degraded frost coil removed from AHU at Farnborough car dealership prior to replacement",
  },
  {
    photo: "new-cooling-coil-delivered-on-site.jpg",
    label: "Installation",
    heading: "Install Replacement Heating Coil",
    body: "The new replacement heating coil was installed in the AHU, restoring full heating capacity to the air handling unit.",
    alt: "New frost coil delivered and installed on site at Farnborough car dealership AHU",
  },
  {
    photo: "bmw-dealership-showroom-interior.jpg",
    label: "Pipework & Commissioning",
    heading: "Plumb Up, Insulate & Commission",
    body: "Associated heating coil pipework was connected and plumbed up, pipework insulation was installed, and the system was commissioned and tested.",
    alt: "BMW car dealership showroom interior at Farnborough where BVS completed AHU coil replacement works",
  },
];

export default function CarDealershipFarnboroughCoilReplacement() {
  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto max-w-4xl py-14 sm:py-20">

          <nav className="mb-8 flex items-center gap-2 text-[11px] text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/case-studies" className="hover:text-slate-600 transition-colors">Case Studies</Link>
            <span>›</span>
            <span className="text-slate-600">Car Dealership Farnborough Frost Coil Replacement</span>
          </nav>

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Automotive · Coil Replacement
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Car Dealership, Farnborough<br />Frost Coil Replacement
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Car-Dealership-Coil-Replacement-Case-Study.pdf"
              download
              className="shrink-0 inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            BVS carried out a full frost coil replacement on the Air Handling Unit at a car dealership in Farnborough. The project covered the survey and manufacture of a custom replacement coil, removal of the existing unit and pipework, installation of the new coil, pipework connections, insulation, and final commissioning.
          </p>

          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/car-dealership-farnborough-coil-replacement/bmw-mini-dealership-farnborough-exterior.jpg"
              alt="BMW and MINI car dealership exterior in Farnborough where BVS replaced the AHU frost coil"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The AHU at the Farnborough car dealership required a full frost coil replacement. BVS managed the complete scope of works from initial survey and coil manufacture through to removal of the old unit, new coil installation, pipework connections, insulation, and commissioning.
          </p>

          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {workItems.map((item) => (
              <div key={item.photo} className="overflow-hidden border border-slate-100">
                <div className="relative h-72 bg-slate-100">
                  <Image
                    src={`/case-studies/images/car-dealership-farnborough-coil-replacement/${item.photo}`}
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

          <div className="mt-14 border border-slate-200">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Coil Replacement Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need an AHU coil replaced at your site?</p>
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
