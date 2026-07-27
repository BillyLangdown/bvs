import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kingly Street Office Extract Fan & Duct Installation Case Study",
  description: "BVS installed new boiler room ventilation at a Kingly Street office plant room, fitting a 0.752 m³/s supply fan and 0.361 m³/s extract fan with BMS-integrated automatic controls.",
  path: "/case-studies/kingly-street-extract-fan-duct",
});

export default function KinglyStreetExtractFanDuct() {
  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto max-w-4xl py-14 sm:py-20">

          <nav className="mb-8 flex items-center gap-2 text-[11px] text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/case-studies" className="hover:text-slate-600 transition-colors">Case Studies</Link>
            <span>›</span>
            <span className="text-slate-600">Kingly Street Office Extract Fan &amp; Duct Installation</span>
          </nav>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Commercial · Plant Room Ventilation
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Kingly Street Office<br />Extract Fan &amp; Duct Installation
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Kingly-Street-Office-Extract-Fan-Duct-Case-Study.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            BVS supplied and installed new boiler room ventilation in the plant room at the Kingly Street Office, London. Two fans were installed and connected to new ductwork, with both units wired into the existing mechanical distribution board and integrated into the building management system with automatic boiler shutdown controls.
          </p>

          <div className="mt-8 relative h-72 overflow-hidden bg-slate-100 sm:h-80">
            <Image
              src="/case-studies/images/kingly-street-extract-fan-duct/existing-ductwork-colour-coded-pipework.jpg"
              alt="Plant room ductwork and colour-coded pipework at Kingly Street Office, London"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The project involved the supply and installation of new boiler room ventilation at the Kingly Street office plant room. A boiler inlet supply fan and an extract fan were installed, each connected via new ductwork to the room&apos;s fresh air louvers. Both fans were wired into the existing mechanical distribution board and fitted with automatic controls integrated into the BMS.
          </p>

          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>

          <ul className="mt-6 space-y-4 text-[15px] leading-7 text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Boiler Inlet Supply Fan:</span>{" "}
              A fan rated at 0.752 m&sup3;/s was installed at a low level on the right-hand side of the plant room. Positioned under the existing fresh air louvers, the fan was connected to the window louver via new ductwork, which terminates with a bell mouth, ensuring consistent fresh air supply into the room.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Extract Fan:</span>{" "}
              The extract fan, rated at 0.361 m&sup3;/s, was installed at high level on the left-hand side of the plant room. The new ductwork connects this fan to the fresh air door louvers, effectively extracting air from the room and ensuring proper ventilation.
            </li>
          </ul>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="relative h-80 overflow-hidden bg-slate-100">
              <Image
                src="/case-studies/images/kingly-street-extract-fan-duct/inline-centrifugal-extract-fan-installed.jpg"
                alt="Inline centrifugal extract fan installed in plant room at Kingly Street Office"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="relative h-80 overflow-hidden bg-slate-100">
              <Image
                src="/case-studies/images/kingly-street-extract-fan-duct/new-extract-fan-ductwork-installation.jpg"
                alt="New extract fan and ductwork installation in Kingly Street Office plant room"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          <ul className="mt-6 space-y-4 text-[15px] leading-7 text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Electrical Integration and Controls:</span>{" "}
              Both fans were wired into the existing mechanical distribution board to utilise the current electrical infrastructure. Automatic controls were added to ensure the boiler(s) will automatically shut down if either fan fails to operate. These controls were integrated into the building management system (BMS) to provide seamless monitoring and efficient operation.
            </li>
          </ul>

          <div className="mt-14 border border-slate-200">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Plant Room Ventilation Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need boiler room or plant room ventilation installed?</p>
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
