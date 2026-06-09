import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Leisure Centre Dorset EC Fan Upgrade | BVS Case Study",
  description:
    "BVS upgraded a failing swimming pool AHU at a Dorset leisure centre, replacing belt-driven fans with Ziehl-Abegg GR561-ZID EC fans to restore airflow, humidity control, and protect the building fabric.",
};

const workItems = [
  {
    photo: "old-belt-driven-fan-before-ec-upgrade.jpg",
    label: "Before: Belt-Driven Fan",
    heading: "New EC Fan Selection",
    body: "Specified two Ziehl-Abegg 451 EC fans, each capable of delivering the required 6 m³/s airflow at up to 1,600 Pa, plotted on the fan curve for optimal performance.",
    alt: "Old belt-driven supply fan before EC fan upgrade at Dorset leisure centre swimming pool AHU",
  },
  {
    photo: "new-ec-fans-installed-pool-ahu.jpg",
    label: "After: EC Fans Installed",
    heading: "Supply Fan Replacement",
    body: "Installed the directly driven EC fans to meet the plated air volume of 6 m³/s against 350 Pa plus internal component resistance, including the newly added low-grade heating coil.",
    alt: "New Ziehl-Abegg EC fans installed in swimming pool AHU at Dorset leisure centre",
  },
  {
    photo: "leisure-centre-swimming-pool-dorset.jpg",
    label: "Dorset Leisure Centre",
    heading: "Electrical Integration",
    body: "Extended power wiring and 0-10 V speed-control signals to external terminal boxes, allowing the client to remove the existing inverter and choose either manual potentiometer control or automated speed regulation via existing or future controls.",
    alt: "Indoor swimming pool at Dorset leisure centre served by the refurbished AHU",
  },
];

export default function LeisureCentreDorsetCaseStudy() {
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
            <span className="text-slate-600">Leisure Centre Dorset EC Fan Upgrade</span>
          </nav>

          {/* Title */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Leisure · EC Fan Upgrade
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Leisure Centre, Dorset<br />EC Fan Upgrade
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Case-Study-Leisure-Centre-Dorset-EC-Fan-Upgrade.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            When BVS first inspected the swimming-pool air-handling unit (AHU), it was clear the system was no longer protecting either the building fabric or the comfort of pool users. Filters were missing on both supply and extract sides, allowing debris to clog the heating coil and plate heat exchanger. Fresh-air and exhaust dampers were closed, the return-air plenum was corroded and drawing plant-room air, and the condensate pan was leaking badly. Supply and extract fans had shredded belts and produced excessive noise, and almost no airflow reached the pool hall.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-slate-700">
            As a result, humidity and temperature control were virtually non-existent; any warmth came only from the pool&apos;s thermal mass, risking serious long-term damage to the building. Since that initial visit, a temporary bearing repair kept the extract fan running, but a permanent solution was essential. After a detailed site survey and airflow measurements, BVS designed a targeted upgrade to restore proper ventilation, improve energy efficiency, and safeguard the structure.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/leisure-centre-dorset-ec-fan-upgrade/leisure-centre-pool-water-park-dorset.jpg"
              alt="Water park and leisure pool at Dorset leisure centre where BVS carried out EC fan upgrade"
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
            We removed the existing belt-driven supply fan, fabricated and installed new fan bulkheads, fitted two GR561-ZID EC fans for supply, then completed the wiring and carried out full testing.
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
                    src={`/case-studies/images/leisure-centre-dorset-ec-fan-upgrade/${item.photo}`}
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
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The upgraded EC fan system now delivers consistent, efficient airflow to the pool hall, restoring humidity and temperature control and protecting the building fabric. With high-efficiency, low-maintenance EC technology and simplified controls, the facility benefits from lower running costs, quieter operation, and reliable long-term performance, without the need for a full AHU replacement.
          </p>

          {/* CTA */}
          <div className="mt-14 border border-slate-200">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">EC Fan Upgrade Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need EC fans on your pool or leisure AHU?</p>
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
