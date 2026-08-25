import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "East London Academy AHU Refurbishment Case Study",
  description: "Both Theatre and Drama AHUs at an East London academy had sat non-operational for years. BVS refurbished the mechanical cores, keeping the sound casings, at a fraction of the cost of full replacement.",
  path: "/case-studies/east-london-academy-ahu-refurbishment",
});

const workItems = [
  {
    photo: "gas-pipework-decommissioning.jpg",
    label: "Gas Pipework Removed",
    heading: "Gas Burner Decommissioning & Removal",
    body: "The redundant gas burner assemblies were safely isolated, purged and removed from both AHUs, clearing the way for the new refrigeration-based heating system.",
    alt: "Redundant gas pipework removed during AHU refurbishment at East London academy",
  },
  {
    photo: "original-fan-assembly-before-ec-replacement.jpg",
    label: "Original Fan Assembly",
    heading: "EC Fan Replacement",
    body: "New high-efficiency EC fans were installed in place of the original assemblies, each sized to its unit's exact duty for better efficiency and control.",
    alt: "Original fan assembly prior to EC fan replacement at East London academy AHU",
  },
  {
    photo: "new-dx-coils-condensers.jpg",
    label: "New DX Coils Installed",
    heading: "New DX Coils & Condensers",
    body: "New DX heating coils and roof-mounted condensers were craned into position and connected via a fully insulated refrigeration pipework network.",
    alt: "New DX heating coils installed in AHU at East London academy",
  },
  {
    photo: "new-trend-iq4-controls.jpg",
    label: "New Trend IQ4 Panel",
    heading: "New Trend IQ4 Controls",
    body: "A modern Trend IQ4 controls platform was installed across both units, replacing outdated, unsupported controls with a fully supported, future-proofed system.",
    alt: "New Trend IQ4 controls platform installed at East London academy AHU",
  },
];

export default function EastLondonAcademyCaseStudy() {
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
            <span className="text-slate-600">East London Academy AHU Refurbishment</span>
          </nav>

          {/* Title */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Education · AHU Refurbishment
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                East London Academy<br />AHU Refurbishment
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/East-London-Academy-AHU-Refurbishment-Case-Study.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro summary */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            At an academy in East London, the Theatre and Drama air-handling units had sat non-operational for many years, leaving both spaces without heating, cooling or fresh air ventilation. BVS was asked to attend site, assess the condition of both units, and identify the cause of the failure. The survey found the AHU casings were still structurally sound, but the core mechanical components, including the gas burners, original fan assemblies and roof-mounted compressors, were obsolete or beyond economical repair. The Theatre unit&apos;s internal layout was also configured inefficiently for heat recovery. BVS was asked to put forward a solution that restored reliable operation without the cost and disruption of a full AHU replacement.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/east-london-academy-ahu-refurbishment/ahu-non-operational-before-refurbishment.jpg"
              alt="Non-operational Theatre AHU prior to refurbishment at East London academy"
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
            Rather than recommend a full replacement, BVS proposed a comprehensive refurbishment of both AHUs, keeping the sound casings while replacing the mechanical core. The works included decommissioning and removing the redundant gas pipework and burner assemblies. The original fans were replaced with high-efficiency EC units, new DX heating coils and roof-mounted condensers were installed, and the Theatre AHU&apos;s internal layout was reconfigured for correct energy recovery. A new Trend IQ4 controls platform was fitted across both units, delivering a fully refurbished, energy-efficient system at a fraction of the cost, lead time and disruption of full replacement.
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
                    src={`/case-studies/images/east-london-academy-ahu-refurbishment/${item.photo}`}
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

          {/* Results */}
          <p className="mt-10 text-[15px] leading-7 text-slate-700">
            Both AHUs had been non-operational for years but are now fully refurbished and back in reliable working order. New EC fans, DX coils, refrigeration systems and Trend IQ4 controls were installed and commissioned across both units, restoring heating, cooling and fresh air to the Theatre and Drama spaces for the first time in a long while. The project was delivered on programme, giving the academy a modern, energy-efficient system built to last, at a fraction of the cost of full replacement.
          </p>

          {/* CTA */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Education AHU Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">AHU non-operational or beyond economical repair?</p>
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
