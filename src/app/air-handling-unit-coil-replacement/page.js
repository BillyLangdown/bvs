import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { TrustedByBar } from "@/components/site/TrustedByBar";
import { caseStudies } from "@/lib/caseStudyData";
import { CaseStudyCarousel } from "@/components/site/CaseStudyCarousel";
export const metadata = pageMetadata({
  title: "AHU Coil Replacement",
  description: "Measure-to-fit AHU coil replacement for any make or model. Heating, cooling, heat recovery, and frost coils sourced or manufactured and installed across the UK.",
  path: "/air-handling-unit-coil-replacement",
});

const faqs = [
  {
    q: "Can you replace coils in any AHU make or model?",
    a: "Yes. We work with all makes and models, including obsolete units where the original manufacturer no longer supports the equipment. Provided we can measure the existing coil, we can manufacture a bespoke replacement to exact specification.",
  },
  {
    q: "How long does a coil replacement take?",
    a: "For a straightforward single-coil replacement in an accessible unit, typically one to two days on site. Larger or more complex units with multiple coils, poor access, or requiring custom manufacture will take longer. We confirm programme at quotation stage.",
  },
  {
    q: "What coil types do you replace?",
    a: "Heating coils (LTHW/LPHW and steam), chilled water cooling coils, DX coils, heat recovery coils, frost coils, and run-around coils. If it sits inside an AHU and transfers heat, we can replace it.",
  },
  {
    q: "Can a coil failure be treated as an emergency?",
    a: "We handle emergency coil replacements where the AHU is out of service or environmental control is compromised. Lead time depends on coil type and complexity. Contact us directly to discuss urgency.",
  },
  {
    q: "What causes coil failure?",
    a: "Corrosion from aggressive water chemistry or condensate, physical damage from debris ingestion, frost damage from failed freeze protection, and age-related tube erosion are the most common causes. We inspect and advise at survey stage.",
  },
];

function Factory({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 21V10l7 3V10l7 3V6h4v15H3z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Ruler({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 7l14-4 4 14-14 4L3 7z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M7 9l6-2m-4 6l6-2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

function TrendingDown({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 7l7 7 4-4 7 7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 17v-4h-4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CoilReplacementPage() {
  const studies = caseStudies.filter((s) => s.services.includes("coil"));
  return (
    <div>

    {/* ── 1. HERO ── improved mobile readability + simpler capability signals ───────── */}
<section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">

{/* Background image */}
<div className="absolute inset-0">
  <Image
    src="/ahu-coil-replacement.webp"
    alt="AHU coil replacement"
    fill
    sizes="100vw"
    priority
    placeholder="blur"
    blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
     className="object-cover object-center blur-[0.8px]"
  />

  <div className="absolute  inset-0 bg-gradient-to-r from-black/85 via-black/60 via-[35%] to-transparent" />
</div>

<Container className="relative z-10 flex min-h-[620px] items-center py-14 pb-16 sm:min-h-[600px] sm:py-20 sm:pb-20">
  {/* Mobile hero */}
  <div className="sm:hidden max-w-3xl">
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
      AHU Coil Replacement
    </p>

    <h1 className="font-display text-3xl font-extrabold leading-[1.08] text-white">
      Coils matched <br/> to your system.
    </h1>

    <div className="mt-5 h-[3px] w-14 bg-[#297858]" />

    <a href="tel:01256518170" className="mt-5 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
      <PhoneIcon />
      01256 518170
    </a>
    <p className="mt-3 max-w-xl text-sm leading-6 text-white">
      Replacement coils measured on site and manufactured to your AHU's exact specification.
    </p>
    <div className="mt-6 flex flex-col gap-3">
      <a
        href="#enquire"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
      >
        Discuss your replacement options
        <ArrowIcon />
      </a>
      <a
        href="#our-projects"
        className="inline-flex w-full items-center justify-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
      >
        Our Projects
        <ArrowDownIcon className="h-4 w-4" />
      </a>
    </div>
  </div>
  {/* Desktop hero */}
  <div className="hidden sm:block max-w-3xl">
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
      AHU Coil Replacement
    </p>

    <p className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-6xl">
      Coils matched <br/> to your system.
    </p>

    <div className="mt-5 h-[3px] w-14 bg-[#297858]" />

    <p className="mt-6 max-w-xl text-[15px] leading-7 text-white">
      Replacement coils measured on site and manufactured to your AHU's exact specification. Any make, any model, including obsolete units where the original manufacturer no longer supports the equipment.
    </p>
    <a href="tel:01256518170" className="mt-6 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
      <PhoneIcon />
      01256 518170
    </a>
    <div className="mt-4 flex flex-wrap gap-3">
      <a
        href="#enquire"
        className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
      >
        Discuss your replacement options
        <ArrowIcon />
      </a>

      <a
        href="#our-projects"
        className="inline-flex items-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
      >
        Our Projects
        <ArrowDownIcon className="h-4 w-4" />
      </a>
    </div>
  </div>
</Container>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "Custom Built", label: "Coils" },
                { stat: "All Makes", label: "& Models" },
                { stat: "40+", label: "Years Experience" },
              ].map((s) => (
                <div key={s.label} className="px-2 text-center sm:px-6">
                  <p className="text-sm font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-wide text-white/55 sm:text-[10px]">{s.label === "Years Experience" ? <><span className="sm:hidden">Yrs Experience</span><span className="hidden sm:block">Years Experience</span></> : s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
</section>


<TrustedByBar />

      {/* ── 2. PROBLEM ── 3 pain points ─────────────────────────────────── */}
      <section className="bg-[#0e1115] py-14 sm:py-16" id="problem">
  <Container>
    <ScrollReveal className="mb-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        When it needs attention
      </p>

      <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
        Common Signs You Have a<br />Problem With Your Coil
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="grid gap-4 sm:grid-cols-3">
      {[
        {
          heading: "Air temperature inconsistencies",
          body: "Failure to reach design temperatures, or inconsistent air conditions across a zone, is often a sign of coil fouling, partial blockage, or internal degradation.",
        },
        {
          heading: "Visible leaking or corrosion on coil faces",
          body: "Corrosion, water staining, or active leaks on coil headers or tube connections indicate the coil is at or beyond end of life.",
        },
        {
          heading: "Reduced system performance or unexplained energy increase",
          body: "Gradual fouling of coil surfaces increases thermal resistance and reduces heat transfer efficiency, resulting in higher energy use before any visible sign of failure.",
        },
      ].map((item) => (
        <ScrollReveal key={item.heading} className="h-full">
          <div className="h-full border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-4 h-[3px] w-8 bg-[#297858]" />
            <h3 className="text-sm font-extrabold text-white">{item.heading}</h3>
            <p className="mt-2 text-sm leading-6 text-white/60">{item.body}</p>
          </div>
        </ScrollReveal>
      ))}
    </div> 
  </Container>
</section>

{/* ── 3. SOLUTION ── Measure → Source/Build → Fit flow ────────────── */}
<section className="bg-[#f5f7f6] py-16 sm:py-20">
  <Container>
    <ScrollReveal className="mb-10">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        How we solve it
      </p>

      <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
        Measure, Supply, Fit.
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="grid gap-5 sm:grid-cols-3">
      {[
        {
          step: "01",
          icon: Ruler,
          heading: "On-Site Survey",
          body:
            "Existing coils are surveyed on site, including dimensions, pipework positions, casing clearances, and operating conditions.",
          points: [
            "Dimensions recorded on site",
            "Performance requirements assessed",
            "Access constraints reviewed",
          ],
        },
        {
          step: "02",
          icon: Factory,
          heading: "Supply",
          body:
            "All replacement coils are manufactured to the exact dimensions and performance specification of your AHU. Every coil is built to fit your system.",
          points: [
            "Manufactured to exact site dimensions",
            "Duty and performance matched to your system",
            "Lead time confirmed at quotation stage",
          ],
        },
        {
          step: "03",
          icon: Wrench,
          heading: "Installation & Testing",
          body:
            "Replacement coils are fitted, pressure tested, insulated, and returned to service with performance checks completed.",
          points: [
            "Pipework connected and tested",
            "Insulation reinstated",
            "System performance verified",
          ],
        },
      ].map((item, i) => {
        const Icon = item.icon;

        return (
          <ScrollReveal key={item.step} delay={i * 80} className="h-full">
            <div className="flex h-full flex-col border border-slate-200 bg-white p-7 shadow-sm">

              {/* top row */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#297858]/10 text-[#297858]">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>

                <span className="text-4xl font-extrabold text-[#297858]/10">
                  {item.step}
                </span>
              </div>

              {/* heading */}
              <h3 className="mt-5 text-base font-extrabold text-slate-900">
                {item.heading}
              </h3>

              {/* body */}
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.body}
              </p>

              {/* points */}
              <ul className="mt-5 space-y-3">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-slate-500"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  </Container>
</section>

      {/* ── 4. BENEFITS ── coil types + 4 capability cards ───────────────── */}
      <section className="bg-white py-16 sm:py-20">
  <Container>

    <ScrollReveal className="mb-10">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        What we replace
      </p>
      <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
        Every Coil Type Covered
      </h2>
      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    {/* Coil types - improved mobile layout */}
    <div className="mb-12">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {[
          "Steam Heating",
          "Chilled Water",
          "DX Refrigerant",
          "Heat Recovery",
          "Frost Coil",
          "LTHW / LPHW",
          "Run-Around",
        ].map((type) => (
          <div
            key={type}
            className="flex items-center gap-2 border border-slate-200 bg-white px-3 py-3"
          >
            <div className="h-1.5 w-1.5 flex-shrink-0 bg-[#297858]" />
            <span className="text-xs font-semibold leading-5 text-slate-700">
              {type}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* capability blocks */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          label: "Any manufacturer",
          detail:
            "All makes and models, including obsolete and discontinued units where parts are no longer available from the OEM.",
        },
        {
          label: "Made to measure",
          detail:
            "Every coil manufactured to exact specification from site measurements, matched to your system's dimensions and duty.",
        },
        {
          label: "Emergency turnaround",
          detail:
            "For AHUs out of service, we prioritise survey, procurement, and installation.",
        },
        {
          label: "Full installation scope",
          detail:
            "Removal, fitting, pipework, testing, insulation reinstatement, and verification included.",
        },
      ].map((item, i) => (
        <ScrollReveal key={item.label} delay={i * 60}>
          <div className="border-t-2 border-[#297858] bg-white p-5">
            <p className="text-sm font-extrabold text-slate-900">
              {item.label}
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              {item.detail}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>

  </Container>
</section> 

      {/* ── FREEZE DAMAGE ── winter health check CTA ─────────────────── */}
      <section className="bg-[#f7f6f5] py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                A common cause of failure
              </p>
              <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
                Frost damage from<br />control failure
              </h2>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-slate-600">
                The most common cause of coil damage is freezing due to control failure. When frost protection controls fail or are incorrectly set, chilled water and LTHW coils can sustain serious internal damage that is not always visible until the system is returned to service.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                In addition to replacing a damaged coil, we can inspect and modify the controls that allowed the freeze to occur, reducing the risk of a repeat failure.
              </p>
              <div className="mt-8 border border-[#297858]/20 bg-[#297858]/5 p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#297858]">Book a winter health check</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Before temperatures drop, we can inspect your coil condition and frost protection controls and advise on any remedial work needed.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="#enquire"
                    className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-6 py-3 text-sm font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] transition-all hover:from-[#1e5038] hover:to-[#133f2a]"
                  >
                    Book a winter health check
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href="tel:01256518170"
                    className="inline-flex items-center gap-2 border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-[#297858] hover:text-[#297858]"
                  >
                    <PhoneIcon />
                    01256 518170
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="grid gap-4">
                {[
                  {
                    heading: "Failed frost protection",
                    body: "Frost stats and freeze protection controls that are incorrectly set, faulty, or bypassed are the most frequent cause of coil freeze damage in commercial AHUs.",
                  },
                  {
                    heading: "Split tubes and header damage",
                    body: "Expanding ice causes tube splits and header cracks. The damage often goes undetected until the coil leaks on restart, by which point the AHU section and insulation are also affected.",
                  },
                  {
                    heading: "Controls inspection included",
                    body: "When we replace a freeze-damaged coil, we can also inspect and modify the controls that led to the failure, not just replace the coil itself.",
                  },
                ].map((item, i) => (
                  <div key={item.heading} className="border-l-2 border-[#297858] bg-white p-5 pl-6 shadow-sm">
                    <h3 className="text-sm font-extrabold text-slate-900">{item.heading}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{item.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── OUR PROJECTS ── case study carousel ───────────────────────── */}
      <section id="our-projects" className="bg-[#111418] py-14 sm:py-20">
        <Container>
          <ScrollReveal className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Our Projects
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              Work We&apos;ve Delivered
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>
          <CaseStudyCarousel
            studies={studies}
            intro="Coil replacements across commercial offices, pharmaceutical production, and automotive facilities."
          />
        </Container>
      </section>

      {/* ── 7. ENQUIRY FORM ─────────────────────────────────────────────── */}
      <section id="enquire" className="bg-[#f7f6f5] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Get in touch
              </p>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Discuss Your<br />Coil Replacement
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Before any commitment, we attend site, measure the existing coil, and produce a full specification and quote with sourcing and manufacture options.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Existing coil measured and specified on site",
                  "Sourcing and manufacture options with lead times",
                  "Any make, any model, including obsolete units",
                  "Emergency cases handled, call us directly",
                  "No obligation to proceed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckIcon className="mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border border-[#297858]/20 bg-[#297858]/5 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#297858]">For urgent enquiries</p>
                <a href="tel:01256518170" className="mt-3 flex items-center gap-3 text-2xl font-extrabold text-slate-900 transition-colors hover:text-[#297858]">
                  <PhoneIcon /> 01256 518170
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="border border-slate-200 bg-white p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
                  Enquiry
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Tell us the AHU make, approximate coil dimensions, and coil type if known. We&apos;ll respond with a practical view and lead time within 24 hours.
                </p>
                <div className="mt-6"><QuickQuoteForm defaultService="Coil Replacement" /></div>
                <div className="mt-5 flex flex-col gap-2 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Response within 24 hours
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Emergency: call directly for fastest response
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 8. FAQ ───────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <FAQAccordion faqs={faqs} theme="dark" />

      {/* ── RELATED SERVICES ─────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related services</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/air-handling-unit-manufacturing-and-installation", label: "AHU Manufacturing & Installation" },
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
              { href: "/air-handling-unit-controller-solutions-upgrades", label: "Controller Upgrades" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 transition-all hover:border-[#297858] hover:bg-slate-50"
              >
                <span className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-300 transition-colors group-hover:bg-[#297858]" />
                  {l.label}
                </span>
                <span className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#297858]">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`text-[#297858] ${className}`}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Wrench({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
