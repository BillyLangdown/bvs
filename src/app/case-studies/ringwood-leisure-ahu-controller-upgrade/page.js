import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "Ringwood Leisure AHU Controls Refurbishment | BVS Case Study",
  description:
    "BVS saved a leisure centre from a £100,000 AHU replacement by refurbishing the control systems instead. New Trend controllers, sensors, and full commissioning restored reliable automated operation.",
};

export default function RingwoodLeisureCaseStudy() {
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
            <span className="text-slate-600">Ringwood Leisure AHU Controls</span>
          </nav>

          {/* Title */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case Study · Leisure · AHU Controls
              </p>
              <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                Ringwood Leisure<br />AHU Controls Refurbishment
              </h1>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            </div>
            <a
              href="/case-studies/Case-Study-Ringwood-Leisure-AHU-Controls.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              Download PDF
            </a>
          </div>

          {/* Intro */}
          <p className="mt-8 text-[15px] leading-7 text-slate-700">
            One of our clients had been advised by others that the only way to resolve their ventilation issues was to replace their air handling units entirely, at a cost of over <strong>£100,000</strong>. After carrying out our own detailed survey, we identified that the AHUs themselves were structurally sound and that the real issue lay within the outdated and failing control systems. Instead of recommending a costly full replacement, we proposed a controls refurbishment, removing the existing controls, installing new Trend controllers, and upgrading key components. This approach delivered a fully operational, reliable, and automated system at a fraction of the cost, avoiding unnecessary capital expenditure and extending the life of the existing AHUs.
          </p>

          {/* Hero image */}
          <div className="mt-8 relative h-96 overflow-hidden bg-slate-100 sm:h-[28rem]">
            <Image
              src="/case-studies/images/ringwood-leisure-ahu-controller-upgrade/ringwood-leisure-centre-exterior.jpg"
              alt="Ringwood leisure centre exterior"
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
            The existing control systems on both AHUs had deteriorated to the point where reliable automated operation was no longer possible. By focusing on the controls rather than the units themselves, we restored full functionality and extended the life of the existing AHUs.
          </p>

          {/* What We Did */}
          <h2 className="mt-12 text-xs font-extrabold tracking-[0.2em] text-[#297858]">
            What We Did
          </h2>

          <ul className="mt-6 space-y-4 text-[15px] leading-7 text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Removal &amp; Replacement:</span> Stripped out the existing control system and supplied and installed new Trend controllers on both units.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Rewiring &amp; Testing:</span> Rewired components within the AHUs, thoroughly tested the system, and ensured full operational performance.
            </li>
          </ul>

          <div className="mt-8 flex justify-center">
          <div className="relative h-[500px] w-full max-w-2xl overflow-hidden bg-slate-100">
            <Image
              src="/case-studies/images/ringwood-leisure-ahu-controller-upgrade/trend-iq411-controller-upgrade.jpg"
              alt="New Trend IQ411 controller installed as part of AHU controls upgrade at Ringwood Leisure"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          </div>

          <ul className="mt-8 space-y-4 text-[15px] leading-7 text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Upgraded Components:</span> Installed a new supply air temperature sensor, fresh air temperature sensor, extract temperature sensor with 24v transformer, air prove switch, and IQ4 View display.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Commissioning:</span> Completed full testing, commissioning, and left the system running reliably.
            </li>
          </ul>

          <div className="mt-8 flex justify-center">
  <div className="relative h-[500px] w-full max-w-2xl overflow-hidden bg-slate-100">
    <Image
      src="/case-studies/images/ringwood-leisure-ahu-controller-upgrade/trend-iq-view4-controller-installed.jpg"
      alt="Trend IQ View 4 display installed as part of AHU controls upgrade at Ringwood Leisure"
      fill
      unoptimized
      className="object-cover"
    />
  </div>
</div>

          {/* CTA */}
          <div className="mt-14 border border-slate-200">
            <div className="bg-[#111418] px-6 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">AHU Controls Enquiry</p>
              <p className="mt-1 text-base font-bold text-white">Need AHU controls refurbished or upgraded?</p>
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
