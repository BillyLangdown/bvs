import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { TrustedByBar } from "@/components/site/TrustedByBar";
import { caseStudies } from "@/lib/caseStudyData";
import { CaseStudyCarousel } from "@/components/site/CaseStudyCarousel";

export const metadata = {
  title: "AHU Manufacturing & Installation | BVS Building Ventilation Solutions",
  description:
    "Custom air handling unit manufacturing and end-to-end installation from our UK facility. Survey, design, manufacture, install, and commission under one contract. 40+ years experience.",
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
    a: "Yes. This is the most common arrangement, particularly on replacement projects. We manage survey, specification, manufacture, delivery, installation, commissioning, and handover under one contract with a single point of accountability.",
  },
  {
    q: "Can you install AHUs in live occupied buildings?",
    a: "Yes. The majority of our installation work takes place in live buildings. We programme works to minimise disruption, use phased shutdowns where needed, and carry out noisy or disruptive tasks outside of core hours.",
  },
  {
    q: "Do you handle access and cranage?",
    a: "We manage the full installation including crane hire, temporary works, and access platforms where needed. This is co-ordinated through our project management team and included within the works programme.",
  },
  {
    q: "Do you manufacture to HTM 03-01 for healthcare?",
    a: "Yes. We have experience manufacturing AHUs for NHS and private healthcare facilities to HTM 03-01 requirements, including theatre-grade filtration, validated airflow performance, and the documentation requirements for clinical environments.",
  },
  {
    q: "What size AHUs do you manufacture and install?",
    a: "From small packaged units handling 500 l/s to large central plant in excess of 50,000 m3/h. We work across commercial, healthcare, education, laboratory, and industrial sectors.",
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
        <div className="absolute inset-0 bg-black/60 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 via-[35%] to-transparent" />

        <Container className="relative flex min-h-[620px] items-center py-14 pb-28 sm:min-h-[600px] sm:py-20 sm:pb-20">
          {/* Mobile hero */}
          <div className="sm:hidden max-w-3xl text-center">
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
            <div className="mt-4 mx-auto h-[3px] w-14 bg-[#297858]" />
            <p
              className="mt-5 max-w-xl text-sm leading-6 text-white"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Custom air handling units manufactured at our UK facility and installed end-to-end under a single contract.
            </p>
            <a href="tel:01256518170" className="mt-6 inline-flex items-center justify-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
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
              Custom air handling units manufactured at our UK facility and installed end-to-end under a single contract. Survey, design, manufacture, install, and commission.
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
                { stat: "One", label: "Contract, Full Scope" },
              ].map((s) => (
                <div key={s.label} className="px-2 text-center sm:px-6">
                  <p className="font-display text-sm font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-wide text-white/55 sm:text-[10px]">{s.label}</p>
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
                body: "Mechanical, electrical, and controls split between contractors causes co-ordination failures and programme overruns at commissioning.",
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
                title: "Install & Commission",
                body: "Full mechanical, electrical, and controls installation managed under one contract. Airflow commissioning and handover pack included as standard.",
                points: [
                  "Mechanical fixings, ductwork, and pipework installed",
                  "Electrical supply and controls wired and tested",
                  "Airflow commissioning and full handover pack issued",
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
              The specification below reflects our standard manufacturing capability. Most requirements fall within it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <div className="overflow-x-auto mb-10">
              <table className="w-full border-collapse text-sm">
                <tbody>
                  {[
                    { spec: "Airflow range", value: "500 l/s to 50,000+ m³/h" },
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
                detail: "Manufacture, delivery, installation and commissioning under one contract.",
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

      {/* ── HOW IT WORKS ── 4-step process ───────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Build &amp; installation process
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              From Brief to<br />Commissioned Unit
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-3 text-sm text-slate-500">
              The same sequence on every project. Every unit ships with factory test records and drawing pack.
            </p>
          </ScrollReveal>

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-0 lg:grid-cols-4">
              {[
                {
                  n: "01",
                  title: "Design Brief",
                  body: "Specification defined from site survey, performance requirements, and access constraints.",
                  points: [
                    "Airflow + thermal requirements agreed",
                    "Space and access constraints captured",
                    "Controls and BMS integration defined",
                  ],
                },
                {
                  n: "02",
                  title: "Engineering & Approval",
                  body: "Drawings produced and signed off before manufacture begins.",
                  points: [
                    "GA drawings issued",
                    "Performance schedule confirmed",
                    "Client approval before build",
                  ],
                },
                {
                  n: "03",
                  title: "Manufacture & Test",
                  body: "Built in UK facility and factory tested before dispatch.",
                  points: [
                    "In-house manufacture",
                    "Fan and electrical testing",
                    "Pre-delivery inspection available",
                  ],
                },
                {
                  n: "04",
                  title: "Install & Commission",
                  body: "Delivered, installed, and commissioned to full handover.",
                  points: [
                    "Mechanical and electrical install",
                    "Airflow commissioning",
                    "O&M documentation supplied",
                  ],
                },
              ].map((step, i) => (
                <ScrollReveal key={step.n} delay={i * 70}>
                  <div className="flex h-full flex-col border-r border-slate-200 p-6 last:border-r-0">
                    <div className="mb-4 flex h-8 w-8 items-center justify-center bg-[#111418]">
                      <span className="text-xs font-bold text-white">{step.n}</span>
                    </div>
                    <h3 className="text-sm font-bold uppercase text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-xs text-slate-500">{step.body}</p>
                    <ul className="mt-4 space-y-1.5">
                      {step.points.map((p) => (
                        <li key={p} className="flex gap-2 text-[10px] text-slate-400">
                          <span className="mt-1 h-1 w-2 shrink-0 bg-[#297858]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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

      {/* ── OFFER ── no-obligation review ─────────────────────────────── */}
      <section className="bg-[#f7f6f5] py-14">
        <Container>
          <ScrollReveal>
            <div className="border-2 border-[#297858] bg-white p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                    No-obligation offer
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    Design Brief Review<br />&amp; Feasibility Assessment
                  </h2>
                  <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Before any commitment, we review your airflow requirements, space constraints, and sector context, and produce a practical feasibility assessment with indicative lead time and budget.
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
                </div>
                <div className="flex flex-col gap-3 lg:min-w-[200px]">
                  <a
                    href="#brief"
                    className="inline-flex items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-8 py-4 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
                  >
                    Submit your brief
                  </a>
                  <a
                    href="tel:01256518170"
                    className="inline-flex items-center justify-center gap-2 border border-slate-300 px-8 py-4 text-sm font-semibold text-slate-900 transition-colors hover:border-[#297858]"
                  >
                    <PhoneIcon /> 01256 518170
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── FINAL CTA ── dark section with form ──────────────────────── */}
      <section id="brief" className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Get in touch
              </p>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Discuss Your<br />Manufacturing Brief
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/60">
                Tell us the airflow requirements, available space envelope, any access constraints, and the sector. We&apos;ll provide a practical view on feasibility and lead time before you commit to anything.
              </p>
              <div className="mt-6 space-y-2.5 border-l border-white/10 pl-5">
                <p className="text-sm text-white/50">40+ years manufacturing experience, not a recent addition to the service range</p>
                <p className="text-sm text-white/50">UK facility, accessible for client or third-party pre-delivery inspection</p>
                <p className="text-sm text-white/50">Full scope: manufacture, installation, commissioning, documentation</p>
              </div>
              <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6">
                <a href="tel:01256518170" className="inline-flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white">
                  <PhoneIcon /> 01256 518170
                </a>
                <a href="mailto:info@bvs-ltd.co.uk" className="inline-flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white">
                  <MailIcon /> info@bvs-ltd.co.uk
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="border border-slate-200 bg-white p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
                  Enquiry
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Send us your airflow requirements, space constraints, and sector. We&apos;ll respond with a practical view on specification and lead time within 24 hours.
                </p>
                <div className="mt-6"><QuickQuoteForm defaultService="AHU Manufacturing & Installation" /></div>
                <div className="mt-5 flex flex-col gap-2 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Response within 24 hours
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Lead time and feasibility confirmed at quotation stage
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
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
