import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pharmaceutical Manufacturers AHU Heating Coil Replacement Case Study",
  description: "BVS replaced the heating coil on an AHU at a pharmaceutical manufacturing facility, including removal of water from the flooded unit, coil uninstallation, new coil installation, pipework connections, insulation, and commissioning.",
  path: "/case-studies/pharmaceutical-lab-coil-replacement",
});

const workItems = [
  {
    photo: "flooded-ahu-interior-before-coil-replacement.jpg",
    label: "Water Removal",
    heading: "Remove Water From AHU",
    body: "Before any coil work could begin, standing water was removed from the flooded AHU interior to make the unit safe for access and the subsequent replacement works.",
    alt: "Standing water inside flooded AHU interior at pharmaceutical manufacturing facility before coil replacement",
  },
  {
    photo: "engineer-inspecting-coil-pharmaceutical-lab.jpg",
    label: "Coil Replacement",
    heading: "Uninstall & Mechanically Install Replacement Heating Coil",
    body: "The existing heating coil and its attached pipework were removed. The new replacement heating coil was then mechanically installed in the AHU.",
    alt: "BVS engineer inspecting and replacing heating coil inside large AHU at pharmaceutical lab",
  },
  {
    photo: "new-coil-installed-pharmaceutical-lab.jpg",
    label: "Pipework & Commissioning",
    heading: "Plumb Up, Insulate & Commission",
    body: "Associated heating coil pipework was plumbed up and connected, pipework insulation was installed, and the system was commissioned and tested.",
    alt: "New heating coil installed with pipework and insulation complete in pharmaceutical facility AHU",
  },
];

export default function PharmaceuticalLabCoilReplacement() {
  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto max-w-4xl py-14 sm:py-20">

          <nav className="mb-8 flex items-center gap-2 text-[11px] text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/case-studies" className="hover:text-slate-600 transition-colors">Case Studies</Link>
            <span>›</span>
            <span className="text-slate-600">Pharmaceutical Manufacturers AHU Heating Coil Replacement</span>
          </nav>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Pharmaceutical · Coil Replacement
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Pharmaceutical Manufacturers<br />AHU Heating Coil Replacement
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Case-Study-Pharmaceutical-Manufacturers.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            BVS carried out a full heating coil replacement on the Air Handling Unit at a pharmaceutical manufacturing facility. The AHU had taken in water, requiring the unit to be drained before works could begin. The project covered water removal, uninstallation of the existing coil and pipework, mechanical installation of the replacement coil, new pipework connections, insulation, and final commissioning.
          </p>

          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/pharmaceutical-lab-coil-replacement/large-ahu-belt-drive-fan-pharmaceutical-lab.jpg"
              alt="Large belt-drive fan AHU at pharmaceutical manufacturing facility where BVS replaced the heating coil"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The AHU at the pharmaceutical facility required a complete heating coil replacement. Water present inside the unit had to be removed before access was possible. BVS managed the full scope of works from drainage and coil removal through to new coil installation, pipework, insulation, and commissioning.
          </p>

          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {workItems.map((item) => (
              <div key={item.photo} className="overflow-hidden border border-slate-100">
                <div className="relative h-72 bg-slate-100">
                  <Image
                    src={`/case-studies/images/pharmaceutical-lab-coil-replacement/${item.photo}`}
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
              <p className="mt-1 text-base font-bold text-white">Need an AHU heating coil replaced at your facility?</p>
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
