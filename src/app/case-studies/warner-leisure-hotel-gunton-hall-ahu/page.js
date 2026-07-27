import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Warner Leisure Hotel Gunton Hall AHU Manufacturing Case Study",
  description: "BVS designed, manufactured, and installed a bespoke pool hall AHU at Warner Leisure Hotel Gunton Hall, replacing an end-of-life unit with a tailor-made, corrosion-resistant unit fitted with a plate heat exchanger and Trend controls.",
  path: "/case-studies/warner-leisure-hotel-gunton-hall-ahu",
});

const workItems = [
  {
    photo: "gunton-hall-hotel-swimming-pool.jpg",
    label: "Design Phase",
    heading: "Design & AHU Specification",
    body: "The new AHU incorporated a high-efficiency plate heat exchanger to recover the maximum energy possible from the exhausted air and remove moisture at all times of the year. To save additional energy during low occupancy periods, the unit includes both temperature and humidity sensors and also a recirculation damper so that air can be returned directly when the humidity is low, thus enhancing energy saving potential.",
    alt: "Gunton Hall indoor swimming pool hall served by the new bespoke AHU",
  },
  {
    photo: "old-ahu-before-replacement-gunton-hall.jpg",
    label: "Manufacturing",
    heading: "Tailor-Made AHU Construction",
    body: "Because of the limited space requirements available in the existing plantroom, the new AHU had to be tailor-made so as to fit, particularly as it was larger than the original. The unit also had to be manufactured to be highly resistant against corrosion and so was manufactured from plastic coated galvanised steel panels, all double-skinned and insulated within a 50mm aluminium frame.",
    alt: "Previous end-of-life AHU at Gunton Hall prior to replacement",
  },
  {
    photo: "new-ahu-installed-gunton-hall-loft.jpg",
    label: "Installation & Commissioning",
    heading: "Flatpack Build, Ductwork & Controls",
    body: "Because of the reduced access into the plantroom, the unit had to be provided in flatpack form. The new unit panels were moved into the plantroom where our engineers then re-built it. The connections onto the existing ductwork had to be modified and new lagging fitted. The LPHW heating pipework had to be re-routed and re-connected with a new 3-port control valve. The unit was fitted and pre-wired with an on-board Trend control panel, commissioned, and air volumes measured and set to the increased volume.",
    alt: "Newly installed bespoke AHU assembled in the Gunton Hall plantroom loft",
  },
];

export default function WarnerGuntonHallAhu() {
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
            <span className="text-slate-600">Warner Leisure Hotel Gunton Hall AHU Manufacturing</span>
          </nav>

          {/* Title */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Leisure Hotel · AHU Manufacturing
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Warner Leisure Hotel<br />Gunton Hall<br />AHU Manufacturing
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Warner-Leisure-Hotel-Gunton-Hall-Case-Study-.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            Warner Hotel Group are famous for their resort hotels located across the UK. Each is located in a beautiful setting and includes full leisure facilities for guests, usually with a full size indoor swimming pool. To maintain a pool hall at the correct temperature and humidity requires an air-handling unit (AHU) specifically designed for the size of pool and its surroundings. The existing AHU at Gunton Hall had come to the end of its useful life and needed replacing, so we were approached to investigate the existing set-up and then design, manufacture, and install a new air handling unit complete with fitted controls.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/warner-leisure-hotel-gunton-hall-ahu/warner-leisure-hotel-gunton-hall-entrance.jpg"
              alt="Warner Leisure Hotel Gunton Hall entrance exterior"
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
            In reviewing the existing AHU against our design criteria, it was felt that the air volumes needed to be increased, particularly to cope with the fully glazed structure of the pool hall itself and reduce condensation on the glazing. So the new AHU was designed to provide additional air to meet this need.
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
                    src={`/case-studies/images/warner-leisure-hotel-gunton-hall-ahu/${item.photo}`}
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
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Pool Hall AHU Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need a bespoke AHU designed for a swimming pool or leisure facility?</p>
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
