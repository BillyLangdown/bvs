import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = {
  title: "AHU Installation | BVS Building Ventilation Solutions",
  description:
    "New and replacement AHU installation across the UK. Survey, specification, mechanical and electrical installation, and full commissioning managed by BVS from first site visit to handover. 40+ years experience.",
};

const clientLogos = [
  { src: "/nhs-logo.png", alt: "NHS" },
  { src: "/disney-logo.png", alt: "Disney" },
  { src: "/marriott-logo.png", alt: "Marriott Hotels" },
  { src: "/moorfields-logo.png", alt: "Moorfields Eye Hospital" },
  { src: "/ihg-logo.png", alt: "IHG Hotels & Resorts" },
  { src: "/travelodge-logo.png", alt: "Travelodge" },
  { src: "/waitrose-logo.png", alt: "Waitrose" },
  { src: "/westfield-logo.png", alt: "Westfield" },
  { src: "/fenwick-logo.png", alt: "Fenwick" },
  { src: "/freedomleisure-logo.png", alt: "Freedom Leisure" },
  { src: "/queenmary-logo.png", alt: "Queen Mary University" },
  { src: "/alpinef1-logo.png", alt: "Alpine F1 Team" },
];

const faqs = [
  {
    q: "Do you carry out design as well as installation?",
    a: "We can work from a client-issued specification or take on the full design, specification, and installation package. Both routes are common — particularly on refurbishment projects where existing equipment is being replaced.",
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
    q: "What size AHUs do you install?",
    a: "From small rooftop packaged units through to large central plant serving multiple zones. We work across commercial, healthcare, education, and industrial sectors — with experience on units from 500 l/s up to 50,000 m3/h and above.",
  },
  {
    q: "Do you commission as well as install?",
    a: "Yes. Commissioning is included within our installation scope. We carry out full airflow balancing and BMS integration testing in line with CIBSE and BSRIA guidance, and issue a complete commissioning record.",
  },
  {
    q: "Can you install units you haven't manufactured?",
    a: "Absolutely. We install AHUs from all major manufacturers and can work from client-supplied equipment. Our teams are experienced across Daikin, Nuaire, Swegon, Biddle, and numerous other makes.",
  },
];

export default function AHUInstallationPage() {
  return (
    <div>

  {/* ── HERO ───────────────────────────────────────────── */}
<section className="relative min-h-[620px] overflow-hidden bg-[#111418]">
  <Image
    src="/ahu-installation.png"
    alt="BVS engineers installing an air handling unit in a commercial plant room"
    fill
    priority
    className="object-cover object-center"
    sizes="100vw"
  />

  {/* Overlays */}
  <div className="absolute inset-0 bg-black/45 sm:hidden" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/65 via-[42%] to-black/15" />

  <Container className="relative flex min-h-[620px] items-center py-20">
    <div className="max-w-xl">

      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
        AHU Installation
      </p>

      <h1
        className="font-display text-4xl font-extrabold leading-[0.98] text-white sm:text-5xl uppercase lg:text-6xl"
        style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
      >
        New & Replacement Installation
      </h1>

      <div className="mt-5 h-[3px] w-12 bg-[#297858]" />

      <p
        className="mt-6 max-w-lg text-[15px] leading-7 text-white/72 sm:text-base"
        style={{ textShadow: "0 1px 10px rgba(0,0,0,0.4)" }}
      >
        From initial site survey and specification through to mechanical installation,
        electrical connection, and full airflow commissioning — managed by BVS
        from first site visit through to handover.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">

        <a
          href="#survey"
          className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1f5e45]"
        >
          Request a site survey
        </a>

        <a
          href="#services"
          className="inline-flex items-center gap-2 border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/5"
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-[1px]"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>

      </div>
    </div>
  </Container>
</section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-7 sm:py-10">
        <Container>
          <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Trusted by leading organisations
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent sm:hidden" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:hidden" />
            <div className="overflow-x-auto no-scrollbar sm:overflow-visible">
              <div className="flex sm:grid sm:grid-flow-col sm:auto-cols-max sm:justify-center gap-x-6 gap-y-5 min-w-max sm:min-w-0 pl-4 pr-10 sm:px-0">
                {clientLogos.map((logo) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    unoptimized
                    className="h-14 w-auto object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. PROBLEM ── 3 pain points ─────────────────────────────────── */}
      <section className="bg-[#111418] py-14 sm:py-16">
  <Container>
    <ScrollReveal className="mb-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        What goes wrong
      </p>

      <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
        Where AHU Installation
        <br />
        Goes Wrong
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="grid gap-4 sm:grid-cols-3">
      {[
        {
          n: "01",
          heading: "Split Contractor Risk",
          body:
            "Mechanical, electrical, and controls split between contractors often leads to coordination issues at commissioning.",
        },
        {
          n: "02",
          heading: "Programme Overruns",
          body:
            "Poor access planning in live buildings causes shutdowns to extend beyond agreed windows and disrupt operations.",
        },
        {
          n: "03",
          heading: "Incorrect AHU Specification",
          body:
            "Underspecified or unchecked AHUs often only fail once the building is in use, leading to costly rectification work.",
        },
      ].map((item) => (
        <ScrollReveal key={item.n} className="h-full">
          <div className="flex h-full flex-col border-l-2 border-[#297858]/30 bg-white/5 p-6">
            
            <span className="font-display text-3xl font-extrabold text-white">
              {item.n}
            </span>

            <h3 className="mt-3 font-display text-sm font-extrabold uppercase text-white">
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

      {/* ── 3. SOLUTION ── full scope phase grid ────────────────────────── */}
      <section className="bg-[#f7f6f5] py-16 sm:py-20">
  <Container>

    {/* HEADER */}
    <ScrollReveal className="mb-10">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        The solution
      </p>

      <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-slate-900 sm:text-3xl">
        Full Installation Scope —<br />Included as Standard
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />

      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
        Every stage of the installation is managed by BVS. Survey, specification, mechanical, electrical, commissioning, and handover — co-ordinated under one contract with a single point of accountability.
      </p>
    </ScrollReveal>

    {/* GRID */}
    <div className="space-y-10">

      {["Before we start", "During installation", "At completion"].map((group) => (
        <div key={group}>

          {/* GROUP LABEL */}
          <div className="mb-4 flex items-center gap-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              {group}
            </p>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* CARDS */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                group: "Before we start",
                title: "Site survey",
                detail: "We inspect the system and confirm exactly what is required",
                icon: "search",
              },
              {
                group: "Before we start",
                title: "Specification",
                detail: "Clear scope agreed before any work begins",
                icon: "document",
              },
              {
                group: "Before we start",
                title: "Planning",
                detail: "Programme set around site access and operations",
                icon: "calendar",
              },
              {
                group: "Before we start",
                title: "Access setup",
                detail: "Cranage and temporary access arranged where needed",
                icon: "structure",
              },

              {
                group: "During installation",
                title: "Mechanical works",
                detail: "Unit install, fixings and duct connections",
                icon: "wrench",
              },
              {
                group: "During installation",
                title: "Pipework",
                detail: "Heating, cooling and drainage connected",
                icon: "pipe",
              },
              {
                group: "During installation",
                title: "Electrical works",
                detail: "Power and controls installed and tested",
                icon: "bolt",
              },

              {
                group: "At completion",
                title: "Commissioning",
                detail: "System tested and airflow balanced",
                icon: "gauge",
              },
              {
                group: "At completion",
                title: "Controls setup",
                detail: "BMS systems configured and verified",
                icon: "cpu",
              },
              {
                group: "At completion",
                title: "Handover pack",
                detail: "All documentation and records issued",
                icon: "file",
              },
            ]
              .filter((item) => item.group === group)
              .map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 25}>

                  <div className="h-full border border-slate-200 bg-white p-5 flex gap-4">

                    {/* ICON */}
                    <div className="shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center bg-[#297858]/10 text-[#297858]">
                        <ServiceIcon type={item.icon} />
                      </div>
                    </div>

                    {/* TEXT */}
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {item.title}
                      </p>

                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {item.detail}
                      </p>
                    </div>

                  </div>

                </ScrollReveal>
              ))}

          </div>
        </div>
      ))}

    </div>

  </Container>
</section>

      {/* ── 4. BENEFITS ── 4 outcome cards ──────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
  <Container>
    <ScrollReveal className="mb-10">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        What you get
      </p>

      <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
        The BVS Installation
        <br />
        Difference
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          stat: "40+",
          label: "Years experience",
          detail:
            "Four decades delivering AHU installs and commissioning across healthcare, education, hotels, and commercial sites.",
        },
        {
          stat: "Single",
          label: "Point of contact",
          detail:
            "One team manages survey, installation, and commissioning under a single contract and accountable lead.",
        },
        {
          stat: "Live",
          label: "Occupied buildings",
          detail:
            "Most work is delivered in operational environments with planned shutdowns and phased installation strategies.",
        },
        {
          stat: "Full",
          label: "Handover pack",
          detail:
            "Complete documentation including O&M manuals, drawings, test sheets, and commissioning records at handover.",
        },
      ].map((item, i) => (
        <ScrollReveal key={item.label} delay={i * 60}>
          <div className="flex h-full flex-col border-t-2 border-[#297858] bg-[#f7f6f5] p-6">
            
            <p className="font-display text-4xl font-extrabold text-slate-900">
              {item.stat}
            </p>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#297858]">
              {item.label}
            </p>

            <div className="my-3 h-px bg-slate-200" />

            <p className="text-xs leading-5 text-slate-500">
              {item.detail}
            </p>

          </div>
        </ScrollReveal>
      ))}
    </div>
  </Container>
</section>

      {/* ── 5. SOCIAL PROOF ── NHS case study with stats ────────────────── */}
      <section className="relative overflow-hidden bg-[#111418] py-16 sm:py-20">

{/* Background image */}
<div className="absolute inset-0">
  <Image
    src="/ahu-duct-installation.png"
    alt="AHU installation in commercial plant room"
    fill
    unoptimized
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/35" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#111418]/80 via-[#111418]/60 to-[#111418]/20" />
</div>

<Container className="relative z-10">

  <ScrollReveal className="max-w-3xl">
    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
      Case Study · London · Commercial Office
    </p>

    <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl leading-tight">
      Boiler Room Ventilation Installation
    </h2>

    <div className="mt-3 h-[3px] w-10 bg-[#297858]" />

    <p className="mt-6 text-sm leading-7 text-white/85">
      A central London office required compliant boiler room ventilation to meet BS 6644, where no existing mechanical ventilation was in place.
    </p>

    <p className="mt-4 text-sm leading-7 text-white/75">
      BVS designed and installed a supply and extract system, integrated with existing power and BMS controls, including fail-safe boiler shutdown protection.
    </p>

    {/* Key facts panel */}
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {[
        "Supply fan: 0.752 m³/s (low level intake)",
        "Extract fan: 0.361 m³/s (high level discharge)",
        "Connected to existing electrical distribution board",
        "BMS integration with automatic boiler shutdown",
        "Fully compliant with BS 6644:2011",
      ].map((point) => (
        <div
          key={point}
          className="flex items-start gap-2.5 rounded-md bg-black/20 p-3 backdrop-blur-sm"
        >
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
          <p className="text-xs leading-5 text-white/80">{point}</p>
        </div>
      ))}
    </div>

    {/* CTAs */}
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <Link
        href="/case-studies/kingly-street-office-extract-fan-duct"
        className="inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1d5c42]"
      >
        View full case study
      </Link>

      <Link
        href="/case-studies"
        className="text-sm font-semibold text-white/60 hover:text-white"
      >
        More case studies →
      </Link>
    </div>

  </ScrollReveal>
</Container>
</section>

      {/* ── 6. HOW IT WORKS ── 4-step programme ─────────────────────────── */}
      <section className="bg-[#f7f6f5] py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              How it works
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              The Installation<br />Programme
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="space-y-3">
            {[
              {
                n: "01",
                title: "Site Survey & Assessment",
                body: "We visit site to record access constraints, existing ductwork connections, structural loadings, and services routes — before a line is drawn or a price is agreed.",
                points: ["Access routes, plant room dimensions, lifting constraints", "Existing ductwork, pipework, and electrical connections", "Structural loading and fixing arrangements confirmed"],
              },
              {
                n: "02",
                title: "Specification & Programme",
                body: "Using survey data, we produce a full specification, scope of works, and installation programme — including any temporary ventilation requirements during the works.",
                points: ["Detailed scope and specification issued for approval", "Phased programme agreed around site occupation", "Temporary ventilation arrangements confirmed"],
              },
              {
                n: "03",
                title: "Installation Works",
                body: "Mechanical, electrical, and controls installation managed to a co-ordinated programme. Out-of-hours and phased working available to minimise disruption in occupied buildings.",
                points: ["Mechanical fixings, ductwork, and pipework completed", "Electrical supply and controls wiring installed and tested", "Out-of-hours and phased installation available"],
              },
              {
                n: "04",
                title: "Commissioning & Handover",
                body: "Full airflow commissioning in line with CIBSE and BSRIA guidance, with O&M documentation, as-fitted drawings, and a complete handover pack.",
                points: ["Airflow volumes verified against design specification", "BMS integration and controls sequences tested", "O&M documentation and as-fitted drawings issued"],
              },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 60}>
                <div className="grid gap-4 border border-slate-200 bg-white p-6 sm:grid-cols-[3rem_1fr_1fr]">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#111418]">
                    <span className="font-display text-sm font-extrabold text-white">{step.n}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-extrabold uppercase text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{step.body}</p>
                  </div>
                  <ul className="space-y-2 border-t border-slate-100 pt-3 sm:border-0 sm:border-l sm:pl-5 sm:pt-0">
                    {step.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="mt-1.5 h-1 w-2 shrink-0 bg-[#297858]" />
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

      {/* ── 7. OFFER ── free site survey ─────────────────────────────────── */}
      <section className="bg-white py-14">
        <Container>
          <ScrollReveal>
            <div className="border-2 border-[#297858] bg-white p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                    No-obligation offer
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
                    Site Survey &<br />Programme Assessment
                  </h2>
                  <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Before any commitment, we visit site, assess access constraints, review ductwork and services connections, and produce a practical programme assessment.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {[
                      "Access and lifting constraints assessed",
                      "Existing connections and services routes confirmed",
                      "Provisional programme and indicative scope produced",
                      "Works approach matched to your site occupancy",
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
                    href="#survey"
                    className="inline-flex items-center justify-center gap-2 bg-[#297858] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                  >
                    Book a survey
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

      {/* ── 8. FINAL CTA ── dark section with form ───────────────────────── */}
      <section id="survey" className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Speak to an engineer
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
                Discuss Your<br />Installation
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/60">
                Tell us about the unit, the site, and the timeline constraints. We&apos;ll provide a practical view on programme, access, and scope before any commitment.
              </p>
              <div className="mt-6 space-y-2.5 border-l border-white/10 pl-5">
                <p className="text-sm text-white/50">40+ years AHU installation experience across all sectors</p>
                <p className="text-sm text-white/50">Survey, installation, and commissioning managed under one contract</p>
                <p className="text-sm text-white/50">Programme planned around your site constraints from day one</p>
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
              <div className="border border-white/10 bg-white/5 p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
                  Enquiry
                </p>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  Tell us the AHU make and model if known, the site type, and any programme constraints. We&apos;ll respond with a practical view within one working day.
                </p>
                <div className="mt-6"><QuickQuoteForm /></div>
                <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 text-[11px] text-white/35">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Engineering response within 24 working hours
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-white/35">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Programme and access assessment included
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 9. FAQ ───────────────────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} />

      {/* ── RELATED SERVICES ─────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related services</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/air-handling-unit-manufacturing", label: "AHU Manufacturing" },
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

const ServiceIcon = ({ type }) => {
  switch (type) {
    case "search":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
          <path strokeWidth="2" d="M21 21l-4.3-4.3" />
          <circle strokeWidth="2" cx="11" cy="11" r="7" />
        </svg>
      );

    case "document":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
          <path strokeWidth="2" d="M6 2h9l5 5v15H6z" />
        </svg>
      );

    case "wrench":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
          <path strokeWidth="2" d="M21 7l-3 3-4-4 3-3a5 5 0 00-6 6l-7 7a2 2 0 002 2l7-7a5 5 0 006-6z" />
        </svg>
      );

    case "bolt":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
          <path strokeWidth="2" d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );

    case "gauge":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
          <path strokeWidth="2" d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
          <path strokeWidth="2" d="M12 12l3-2" />
        </svg>
      );

    case "file":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
          <path strokeWidth="2" d="M6 2h9l5 5v15H6z" />
        </svg>
      );

    case "calendar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
          <rect strokeWidth="2" x="3" y="4" width="18" height="18" rx="2" />
          <path strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );

    case "structure":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
          <path strokeWidth="2" d="M4 21V7l8-4 8 4v14" />
          <path strokeWidth="2" d="M9 21v-6h6v6" />
        </svg>
      );

    case "pipe":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
          <path strokeWidth="2" d="M3 12h18" />
          <path strokeWidth="2" d="M7 8v8M17 8v8" />
        </svg>
      );

    case "cpu":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
          <rect strokeWidth="2" x="7" y="7" width="10" height="10" rx="2" />
          <path strokeWidth="2" d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
        </svg>
      );

      case "commissioning":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
            <path strokeWidth="2" d="M20 6L9 17l-5-5" />
            <path strokeWidth="2" d="M4 12a8 8 0 1016 0 8 8 0 00-16 0z" />
          </svg>
        );
  }
};

