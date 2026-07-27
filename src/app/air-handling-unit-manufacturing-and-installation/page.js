import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqJsonLd } from "@/lib/seo";
import { TrustedByBar } from "@/components/site/TrustedByBar";
import { caseStudies } from "@/lib/caseStudyData";
import { CaseStudyCarousel } from "@/components/site/CaseStudyCarousel";

export const metadata = {
  title: "AHU Manufacturing & Installation",
  description:
    "Custom air handling unit manufacturing and end-to-end installation from our UK facility. Survey, design, manufacture, and install under one contract. 40+ years experience.",
};

const faqs = [
  {
    q: "What is the typical lead time for a custom-built AHU?",
    a: "For most custom-built units, lead time is 5–7 weeks from drawing approval to delivery. This varies depending on complexity, size, and whether specialist components such as heat recovery or DX coils are included. We confirm lead time at quotation stage.",
  },
  {
    q: "Can you manufacture a replacement for an obsolete AHU?",
    a: "Yes. We regularly manufacture direct replacements for units where the original manufacturer is no longer trading or no longer supports the product. We measure the existing unit on site and design the replacement to fit the same footprint where possible.",
  },
  {
    q: "Can you manage the full scope from manufacture through to installation?",
    a: "Yes. This is the most common arrangement, particularly on replacement projects. We manage survey, specification, manufacture, delivery, installation, and handover under one contract with a single point of accountability.",
  },
  {
    q: "Can you install AHUs in live occupied buildings?",
    a: "Yes. The majority of our installation work takes place in live buildings. We programme works to minimise disruption, use phased shutdowns where needed, and carry out noisy or disruptive tasks outside of core hours.",
  },
  {
    q: "Do you handle access and cranage?",
    a: "Yes. We work alongside your lifting company to plan and co-ordinate access, cranage, and temporary works. Our project management team handles all programme co-ordination. Where a specialist lifting contractor is not already in place, we can advise on suitable options.",
  },
  {
    q: "Do you manufacture to HTM 03-01 for healthcare?",
    a: "Yes. We have experience manufacturing AHUs for NHS and private healthcare facilities to HTM 03-01 requirements, including theatre-grade filtration, validated airflow performance, and the documentation requirements for clinical environments.",
  },
  {
    q: "What size AHUs do you manufacture and install?",
    a: "We manufacture across a wide range of sizes for commercial, healthcare, education, laboratory, and industrial sectors. Speak to the team about your specific requirements.",
  },
];

export default function AHUManufacturingInstallationPage() {
  const studies = caseStudies.filter((s) => s.services.includes("manufacturing"));
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/ahu-sparks.webp"
          alt="BVS air handling unit manufacturing and installation, custom-built AHU in progress"
          fill
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          className="object-cover object-center scale-[1.02]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/10 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 via-[35%] to-transparent" />

        <Container className="relative flex min-h-[620px] items-center py-14 pb-16 sm:min-h-[600px] sm:py-20 sm:pb-28">
          {/* Mobile hero */}
          <div className="sm:hidden max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              AHU Manufacturing &amp; Installation
            </p>
            <h1
              className="font-display text-3xl font-extrabold leading-[1.08] text-white"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Manufacturing &amp; installation,<br />under one contract.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <a href="tel:01256518170" className="mt-5 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <p
              className="mt-3 max-w-xl text-sm leading-6 text-white"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Custom air handling units manufactured at our UK facility and installed end-to-end under a single contract.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#brief"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Discuss Your Requirements
                <ArrowIcon />
              </a>
              <a
                href="#our-projects"
                className="inline-flex w-full items-center justify-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Our Projects
                <ArrowDownIcon />
              </a>
            </div>
          </div>
          {/* Desktop hero */}
          <div className="hidden sm:block max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              AHU Manufacturing &amp; Installation
            </p>
            <h1
              className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-6xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Manufacturing &amp; installation,<br />under one contract.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p
              className="mt-5 max-w-xl text-[15px] leading-7 text-white"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Custom air handling units manufactured at our UK facility and installed end-to-end under a single contract. Survey, design, manufacture, and install.
            </p>
            <a href="tel:01256518170" className="mt-6 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#brief"
                className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Discuss Your Requirements
                <ArrowIcon />
              </a>
              <a
                href="#our-projects"
                className="inline-flex items-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Our Projects
                <ArrowDownIcon />
              </a>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "40+", label: "Years Experience" },
                { stat: "UK", label: "Manufactured" },
                { stat: "One", label: "Contract" },
              ].map((s) => (
                <div key={s.label} className="px-2 text-center sm:px-6">
                  <p className="font-display text-sm font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-wide text-white/55 sm:text-[10px]">{s.label === "Years Experience" ? <><span className="sm:hidden">Yrs Experience</span><span className="hidden sm:block">Years Experience</span></> : s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      <TrustedByBar />

      {/* ── PROBLEM ── 3 pain point cards ─────────────────────────────── */}
      <section id="next-section" className="bg-[#0e1115] py-14 sm:py-16">
        <Container>
          <ScrollReveal className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Where projects run into trouble
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              The Problems We Solve
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                n: "01",
                heading: "Restricted Plant Access",
                body: "Space or access constraints prevent a standard unit being installed, nothing in the catalogue fits the building.",
              },
              {
                n: "02",
                heading: "Obsolete Equipment",
                body: "The original unit is discontinued or no longer supported. No like-for-like exists. A made-to-measure replacement is the only option.",
              },
              {
                n: "03",
                heading: "Split Contractor Risk",
                body: "Mechanical, electrical, and controls split between contractors causes co-ordination failures and programme overruns on site.",
              },
            ].map((item) => (
              <ScrollReveal key={item.n}>
                <div className="border-l-2 border-[#297858]/30 bg-white/5 p-6">
                  <span className="text-3xl font-extrabold text-[#297858]/25">
                    {item.n}
                  </span>
                  <h3 className="mt-3 text-sm font-extrabold text-white">
                    {item.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SOLUTION ── 3 step cards ──────────────────────────────────── */}
      <section className="bg-[#f7f6f5] py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              The solution
            </p>
            <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
              Survey, Build and Install.
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Every project follows the same sequence. One team accountable from site visit to handover.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                n: "01",
                title: "Survey & Brief",
                body: "We visit site to record space constraints, access routes, existing services, and thermal requirements, before specification or cost is agreed.",
                points: [
                  "Airflow and thermal requirements agreed",
                  "Space and access constraints captured on site",
                  "Controls integration and programme requirements defined",
                ],
              },
              {
                n: "02",
                title: "Design & Manufacture",
                body: "Unit is engineered to exact specification and manufactured at our UK facility. Client approval on drawings before build begins.",
                points: [
                  "GA drawings and performance schedule issued for approval",
                  "Built in our UK facility, client inspection available",
                  "Factory tested before despatch with records issued",
                ],
              },
              {
                n: "03",
                title: "Installation",
                body: "Full mechanical, electrical, and controls installation managed under one contract. Airflow verification and handover pack included as standard.",
                points: [
                  "Mechanical fixings, ductwork, and pipework installed",
                  "Electrical supply and controls wired and tested",
                  "Airflow verification and full handover pack issued",
                ],
              },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 60}>
                <div className="flex h-full flex-col border border-slate-200 bg-white p-6">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center bg-[#111418]">
                    <span className="text-xs font-bold text-white">{step.n}</span>
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{step.body}</p>
                  <ul className="mt-4 space-y-2">
                    {step.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="mt-1 h-1 w-2 shrink-0 bg-[#297858]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── MANUFACTURING CAPABILITY ──────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Manufacturing capability
            </p>
            <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              What We Can Build
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-7 text-white/50">
              The specification below reflects our standard manufacturing capability.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <div className="overflow-x-auto mb-10">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {[
                    { spec: "Airflow", value: "Any airflow to suit your requirements" },
                    { spec: "Casing configurations", value: "Horizontal, vertical, modular, split-casing" },
                    { spec: "Thermal sections", value: "LTHW/MTHW/HTHW heating, chilled water, DX, heat recovery, frost protection" },
                    { spec: "Fan types", value: "EC plug fans, EC axial fans, backward-curved centrifugal" },
                    { spec: "Filtration grades", value: "G4 through to HEPA H14, including HTM 03-01 theatre grade" },
                    { spec: "Controls options", value: "Mechanical-only or complete DDC panel, BACnet/Modbus/LON BMS integration" },
                    { spec: "Materials", value: "Galvanised steel standard; stainless steel, coated aluminium, marine grade available" },
                    { spec: "Lead time", value: "5–7 weeks from drawing approval to delivery" },
                  ].map((row, i) => (
                    <tr key={row.spec} className={i % 2 === 0 ? "bg-white/5" : "bg-white/[0.03]"}>
                      <td className="w-44 border border-white/10 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white/45">
                        {row.spec}
                      </td>
                      <td className="border border-white/10 px-5 py-3.5 text-xs leading-5 text-white/70">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {[
              {
                stat: "40+",
                label: "Years manufacturing",
                detail: "Four decades of AHU design and manufacture from our UK facility.",
              },
              {
                stat: "UK",
                label: "Manufactured",
                detail: "All units built in the UK with client inspection available pre-despatch.",
              },
              {
                stat: "Full",
                label: "Scope available",
                detail: "Manufacture, delivery, and installation under one contract.",
              },
              {
                stat: "Factory",
                label: "Tested every unit",
                detail: "Performance and electrical checks completed before despatch with records issued.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 60} className="h-full">
                <div className="h-full flex flex-col border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-extrabold text-[#297858]">
                    {item.stat}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    {item.label}
                  </p>
                  <div className="my-3 h-px bg-white/10" />
                  <p className="text-xs leading-5 text-white/50">
                    {item.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
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
            intro="Made-to-specification AHU projects where standard catalogue units couldn't meet the requirement."
          />
        </Container>
      </section>

      {/* ── FINAL CTA ── light section with form ──────────────────────── */}
      <section id="brief" className="bg-[#f7f6f5] py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Get in touch
              </p>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Discuss Your<br />Manufacturing Brief
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Tell us the airflow requirements, available space, any access constraints, and sector. We respond within one working day with a practical view on feasibility and lead time.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Feasibility confirmed against space and performance requirements",
                  "Indicative lead time and budget range provided",
                  "Specification options discussed, full packaged or mechanical only",
                  "Access and installation programme assessed",
                  "No obligation to proceed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckIcon className="mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border border-[#297858]/20 bg-[#297858]/5 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#297858]">Call us directly</p>
                <a href="tel:01256518170" className="mt-3 flex items-center gap-3 text-2xl font-extrabold text-slate-900 transition-colors hover:text-[#297858]">
                  <PhoneIcon /> 01256 518170
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="border border-slate-200 bg-white p-7">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#297858]">Enquiry</p>
                <p className="mb-5 text-xs text-slate-500">We will aim to respond within 24 hours</p>
                <QuickQuoteForm defaultService="AHU Manufacturing & Installation" />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <FAQAccordion faqs={faqs} />

      {/* ── RELATED SERVICES ─────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related services</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
              { href: "/air-handling-unit-controller-solutions-upgrades", label: "Controller Upgrades" },
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
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
      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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
