import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Marriott Forest of Arden — Swimming Pool AHU Troubleshooting | BVS Case Study",
  description:
    "The AHU at Marriott Forest of Arden's swimming pool was designed to maintain 31°C but had only ever reached 24°C. BVS validated the system, identified ductwork leaks and AHU configuration faults, and delivered a full remediation scope.",
};

const ahuImprovements = [
  "Relocate the fan on its bulkhead away from the heating coil to improve airflow.",
  "Install a baffle after the heating coil to distribute air more evenly.",
  "Swap the supply fan access door with the service door to improve maintenance access.",
  "Fit a mesh guard on the silencer inlet to prevent vermin ingress.",
];

export default function MarriottForestOfArdenCaseStudy() {
  return (
    <div className="bg-white">
      <Container>
        <div className="mx-auto max-w-2xl py-14 sm:py-20">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-[11px] text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/case-studies" className="hover:text-slate-600 transition-colors">Case Studies</Link>
            <span>›</span>
            <span className="text-slate-600">Marriott Forest of Arden — Swimming Pool AHU</span>
          </nav>

          {/* Title */}
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Case Study · Hotel · AHU Troubleshooting
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-slate-900 sm:text-4xl">
            Forest of Arden<br />Swimming Pool<br />Ventilation Troubleshooting
          </h1>
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

          {/* ── PROJECT OVERVIEW ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            Project Overview
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The project involved the validation and surveying of the Air-Handling Unit (AHU) serving the swimming
            pool hall. The AHU, installed three years ago, was responsible for supplying and extracting air to
            maintain a temperature of approximately 31°C. However, the client reported that the maximum
            temperature achieved since the installation of the AHU was only around 24°C.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-slate-700">
            The investigation covered various aspects of the installation, including air volumes, temperatures,
            ductwork layout, and air distribution system. The case study highlighted the issues affecting the
            swimming pool hall&apos;s air temperature and proposed a range of measures to address them.
          </p>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Site photo
          </div>

          {/* ── THE ISSUES ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            Issues Found
          </h2>

          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">AHU Issues</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                The AHU, installed three years ago, was responsible for supplying and extracting air to maintain a
                temperature of approximately 31°C — but the maximum achieved was only around 24°C. Air volumes,
                temperatures, and system configuration were all assessed as part of the investigation.
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Ductwork Issues</p>
              <ul className="mt-2 flex flex-col gap-2 text-[15px] leading-7 text-slate-700">
                <li>• The existing galvanised ductwork, around 30 years old, showed significant leaks, resulting in pressure drops and air loss.</li>
                <li>• High-level slot diffusers used for air distribution were inadequate, with velocities measuring around 1m/s, insufficient for effectively moving warm air downwards.</li>
              </ul>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="mt-8 flex h-48 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
            Ductwork / thermal imaging photo
          </div>

          {/* ── WHAT WE DID ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>

          <div className="mt-4 flex flex-col gap-6">
            <div>
              <p className="font-semibold text-slate-900">AHU Improvements</p>
              <ul className="mt-2 flex flex-col gap-2 text-[15px] leading-7 text-slate-700">
                {ahuImprovements.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Control Panel Replacement</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Replace the keypad on the previous control panel to enable higher air volume operation.
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Air Distribution Enhancement</p>
              <p className="mt-1 text-[15px] leading-7 text-slate-700">
                Modify the linear slot diffusers to improve velocity and directional airflow.
              </p>
            </div>
          </div>

          {/* Before/after photo placeholders */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex h-48 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
              Before
            </div>
            <div className="flex h-48 items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400">
              After
            </div>
          </div>

          {/* ── THE RESULTS ── */}
          <h2 className="mt-12 font-display text-xs font-extrabold uppercase tracking-[0.2em] text-[#297858]">
            The Results
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            By improving the AHU performance, rectifying ductwork leaks, enhancing air distribution, and considering
            additional heating coil options, it was anticipated that the desired temperature could be achieved. These
            recommendations aimed to optimise the AHU system, ensuring a comfortable and efficient environment for
            the swimming pool hall.
          </p>

          {/* ── CTA ── */}
          <div className="mt-14 border border-slate-200 bg-surface-2">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Troubleshooting Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Similar performance issues on your site?</p>
              <p className="mt-1 text-xs text-white/45">We respond within one working day with practical options.</p>
            </div>
            <div className="px-6 py-6">
              <QuickQuoteForm />
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/air-handling-unit-coil-replacement"
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 hover:text-[#297858] transition-colors"
            >
              ← Back to Coil Replacement
            </Link>
          </div>

        </div>
      </Container>
    </div>
  );
}
