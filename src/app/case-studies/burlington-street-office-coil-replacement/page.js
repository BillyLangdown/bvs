import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Burlington Street Office Coil Replacement Case Study",
  description:
    "BVS designed, manufactured, and installed a replacement frost coil at the Burlington Street Office, splitting the coil into two sections to overcome plantroom access constraints.",
};

const workItems = [
  {
    photo: "heavily-corroded-coil-before-replacement.jpg",
    label: "Design & Manufacture",
    heading: "Size Up, Design & Manufacture Frost Coil",
    body: "The damaged frost coil was surveyed and sized, then a custom replacement was designed and manufactured to match the original specification.",
    alt: "Heavily corroded frost coil inside AHU at Burlington Street Office prior to replacement",
  },
  {
    photo: "engineer-working-on-corroded-coil.jpg",
    label: "Removal",
    heading: "Uninstall Frost Coil & Remove Associated Pipework",
    body: "The existing failed coil was carefully uninstalled from the plantroom and its associated pipework removed, preparing the space for the new installation.",
    alt: "BVS engineer working on corroded coil and pipework removal at Burlington Street Office",
  },
  {
    photo: "engineer-inspecting-ahu-interior.jpg",
    label: "Installation",
    heading: "Install Coil In Two Sections",
    body: "To overcome access constraints within the plantroom and stay within budget, the new coil was split into two sections, allowing it to be manoeuvred into position without compromising functionality.",
    alt: "Engineer inspecting AHU interior during two-section coil installation at Burlington Street Office",
  },
  {
    photo: "new-coil-installed-ahu.jpg",
    label: "Commissioning",
    heading: "Connect, Commission, Test & Tidy",
    body: "The coil was connected to the associated pipework, commissioned, and tested to confirm correct operation before the site was cleaned and handed back.",
    alt: "New frost coil installed and connected inside AHU at Burlington Street Office, London",
  },
];

export default function BurlingtonStreetCoilReplacement() {
  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto max-w-4xl py-14 sm:py-20">

          <nav className="mb-8 flex items-center gap-2 text-[11px] text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/case-studies" className="hover:text-slate-600 transition-colors">Case Studies</Link>
            <span>›</span>
            <span className="text-slate-600">Burlington Street Office Coil Replacement</span>
          </nav>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Commercial · Coil Replacement
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Burlington Street Office<br />Coil Replacement
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Burlington-Street-Office-Coil-Replacement-Case-Study.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            The frost coil at the Burlington Street Office was severely damaged, requiring BVS to design, manufacture, and install a new one. To overcome access constraints and stay within budget, the coil was split into two sections, allowing for easier installation and connection in the plantroom without compromising functionality.
          </p>

          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/burlington-street-office-coil-replacement/burlington-street-london-office-building.jpg"
              alt="Burlington Street Office building, London where BVS carried out AHU frost coil replacement"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The existing frost coil had sustained severe damage and required a full replacement. Access to the plantroom presented a significant constraint, ruling out a single-piece installation. BVS designed a solution that split the coil into two sections to allow installation within the available space, while maintaining full performance.
          </p>

          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {workItems.map((item) => (
              <div key={item.photo} className="overflow-hidden border border-slate-100">
                <div className="relative h-72 bg-slate-100">
                  <Image
                    src={`/case-studies/images/burlington-street-office-coil-replacement/${item.photo}`}
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
              <p className="mt-1 text-base font-bold text-white">Need a frost coil or AHU coil replaced at your site?</p>
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
