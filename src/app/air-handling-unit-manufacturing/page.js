import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = {
  title: "AHU Manufacturing | BVS Building Ventilation Solutions",
  description:
    "Bespoke air handling unit manufacturing from our UK facility. Custom AHUs designed to specification — any size, any configuration, 6–14 week lead time. 40+ years manufacturing experience.",
};

/* ── DATA ─────────────────────────────────────────────────────────────── */

const clientLogos = [
  { src: "/nhs-logo.png", alt: "NHS" },
  { src: "/disney-logo.png", alt: "Disney" },
  { src: "/marriott-logo.png", alt: "Marriott Hotels" },
  { src: "/moorfields-logo.png", alt: "Moorfields Eye Hospital" },
  { src: "/ihg-logo.png", alt: "IHG Hotels & Resorts" },
  { src: "/travelodge-logo.png", alt: "Travelodge" },
  { src: "/waitrose-logo.png", alt: "Waitrose" },
  { src: "/alpinef1-logo.png", alt: "Alpine F1 Team" },
];

const steps = [
  {
    n: "01",
    title: "Design Brief",
    body: "We work from a client-provided specification or develop the design brief ourselves based on the site survey, airflow requirements, and any space or access constraints.",
    points: [
      "Airflow, pressure, thermal, and acoustic requirements defined",
      "Space envelope, access, and structural constraints recorded",
      "Controls interface and BMS integration requirements agreed",
    ],
  },
  {
    n: "02",
    title: "Engineering & Drawing Approval",
    body: "Our in-house engineering team produce a full set of manufacturing drawings and a performance schedule for client review and approval before build commences.",
    points: [
      "General arrangement and detail drawings produced",
      "Performance schedule issued with fan, coil, and filter data",
      "Drawing approval and sign-off before manufacture starts",
    ],
  },
  {
    n: "03",
    title: "Manufacture & Factory Test",
    body: "Units are built in our UK facility and factory-tested before despatch — fan performance, electrical continuity, and build quality checked against the approved specification.",
    points: [
      "Built in our UK manufacturing facility",
      "Fan performance and electrical continuity factory-tested",
      "Pre-delivery inspection available for client or third-party witness",
    ],
  },
  {
    n: "04",
    title: "Delivery & Installation",
    body: "Units are delivered to site on a confirmed programme. Where installation is within our scope, our engineering teams take it from delivery through to commissioned handover.",
    points: [
      "Delivery programme agreed and confirmed prior to despatch",
      "Installation and commissioning available within same contract",
      "Handover documentation and O&M manuals issued",
    ],
  },
];

const faqs = [
  {
    q: "What is the typical lead time for a bespoke AHU?",
    a: "For most bespoke units, lead time is 6–14 weeks from drawing approval to delivery. This varies depending on complexity, size, and whether specialist components such as heat recovery or DX coils are included. We confirm lead time at quotation stage.",
  },
  {
    q: "Can you manufacture a replacement for an obsolete AHU?",
    a: "Yes. We regularly manufacture direct replacements for units where the original manufacturer is no longer trading or no longer supports the product. We measure the existing unit on site and design the replacement to fit the same footprint where possible.",
  },
  {
    q: "What size AHUs do you manufacture?",
    a: "From small packaged units handling 500 l/s to large central plant in excess of 50,000 m3/h. We manufacture across commercial, healthcare, education, laboratory, and industrial sectors.",
  },
  {
    q: "Do you manufacture to HTM 03-01 for healthcare?",
    a: "Yes. We have experience manufacturing AHUs for NHS and private healthcare facilities to HTM 03-01 requirements, including theatre-grade filtration, validated airflow performance, and the documentation requirements for clinical environments.",
  },
  {
    q: "Can you supply fan, coil, and controls as part of the AHU?",
    a: "Yes. We supply complete units including fans, heating and cooling coils, filters, dampers, and controls panels. The degree of integration depends on the project requirements — we can supply a full packaged unit or a mechanical-only casing.",
  },
  {
    q: "Do you offer installation as well as manufacture?",
    a: "Yes. We can provide the full scope from manufacture through to mechanical and electrical installation and commissioning — under a single contract. This is the most common arrangement for replacement projects where the existing AHU is being removed.",
  },
];

/* ── PAGE ─────────────────────────────────────────────────────────────── */

export default function AHUManufacturingPage() {
  return (
    <div>

      {/* ── 1. HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/ahu-manufacturing.png"
          alt="BVS air handling unit manufacturing workshop — bespoke AHU build in progress"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 via-[50%] to-black/20" />

        <Container className="relative flex min-h-[520px] items-center py-14 pb-28 sm:min-h-[580px] sm:py-20 sm:pb-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              AHU Manufacturing
            </p>
            <h1
              className="font-display text-2xl font-extrabold uppercase leading-[1.08] text-white sm:text-5xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Bespoke AHUs.<br />UK Built. Any Specification.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-white/85" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              We design and manufacture air handling units to client specification from our UK facility — custom sizes, configurations, and performance requirements. 40+ years of AHU manufacturing experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Discuss your requirements
                <ArrowIcon />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                How it works
                <ChevronDownIcon />
              </a>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "40+ Years", label: "Manufacturing Experience" },
                { stat: "6–14 Wks", label: "Typical Lead Time" },
                { stat: "UK Built", label: "In Our Own Facility" },
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

      {/* ── 2. TRUST BAR ───────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-7 sm:py-10">
        <Container>
          <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Trusted by leading UK organisations
          </p>
          <div className="overflow-x-auto no-scrollbar sm:overflow-visible">
            <div className="flex sm:grid sm:grid-flow-col sm:auto-cols-max sm:justify-center gap-x-8 min-w-max sm:min-w-0 pl-4 pr-16 sm:px-0">
              {clientLogos.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  unoptimized
                  className="h-14 w-auto shrink-0 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                />
              ))}
            </div>
          </div>
          <p className="mt-3 text-end text-[10px] text-slate-300 sm:hidden">Swipe to see more →</p>
        </Container>
      </section>

      {/* ── 3. QUICK ASSESSMENT ────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                Quick assessment
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                When Does Bespoke<br />Manufacturing Make Sense?
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                Standard catalogue units work for standard applications. When the building, the duty, or the environment is not standard, a bespoke-manufactured unit is often the only practical solution.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:text-[#1d5c42]"
                >
                  Discuss your requirements →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <ul className="flex flex-col gap-3">
                {[
                  "Replacement for an obsolete or discontinued AHU model",
                  "Non-standard dimensions required to fit an existing plant room footprint",
                  "Performance specification that catalogue units cannot meet",
                  "Healthcare, laboratory, or cleanroom application with specialist requirements",
                  "Bespoke casing material, finish, or construction required",
                  "Combined supply and installation scope under a single contract",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-l-2 border-[#297858] bg-white/5 px-4 py-3"
                  >
                    <CheckIcon className="mt-1 shrink-0" />
                    <span className="text-sm leading-6 text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── 4. THE CASE FOR BESPOKE ────────────────────────────────────── */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                The case for bespoke
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
                Catalogue Unit vs Manufactured to Specification
              </h2>
              <div className="mx-auto mt-4 h-[3px] w-10 bg-[#297858]" />
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                Standard catalogue AHUs are designed for standard applications. When your project sits outside those parameters, fitting the building around the unit creates problems that a purpose-built AHU avoids.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={80}>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">

              <div className="border border-slate-200 bg-white p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Catalogue AHU
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-500">
                  <p>Fixed size increments — rarely an exact fit</p>
                  <p>Performance compromises where duty sits between standard sizes</p>
                  <p>Limited options for specialist coils, filtration, or casings</p>
                  <p>Replacement sourcing dependent on manufacturer continuity</p>
                </div>
                <p className="mt-6 text-sm font-semibold text-slate-400">Right for standard applications — difficult for everything else</p>
              </div>

              <div className="relative overflow-hidden bg-[#111418] p-6 sm:p-8 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-[#297858]/20 to-transparent" />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#297858]">
                    BVS bespoke manufacture
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-white/80">
                    <p>Manufactured to the exact dimensions of the available space</p>
                    <p>Performance specified to the exact duty — no compromise</p>
                    <p>Any coil type, filtration grade, or casing specification</p>
                    <p>Drawings retained — replacement manufacturing possible at any future date</p>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-white">Built for the application, not adapted to fit.</p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 5. WHAT'S INCLUDED ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Manufacturing capabilities
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              What We Manufacture
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              From single-section units to large multi-zone plant, our manufacturing capability covers the full range of commercial and industrial AHU configurations.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Single and Multi-Zone AHUs", desc: "From compact single-section units serving a single zone to large modular plant handling multiple zones with independent control." },
              { title: "Heat Recovery Units", desc: "Rotary wheel, plate, and run-around coil heat recovery configurations for Part L compliance and energy cost reduction." },
              { title: "Healthcare AHUs", desc: "Theatre, isolation, and critical care units manufactured to HTM 03-01, with HEPA filtration, validated performance, and clinical-grade construction." },
              { title: "Rooftop and Packaged Plant", desc: "Weatherproof rooftop AHUs with integral controls, hinged access panels, and protective coatings for external installation." },
              { title: "Replacement and Direct-Fit Units", desc: "Replacement AHUs designed to fit the existing footprint, ductwork connections, and services positions — minimising installation scope." },
              { title: "Specialist Environments", desc: "Laboratory, cleanroom, food production, and industrial AHUs with stainless steel casings, specialist filtration, and hygienic construction." },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[#297858] bg-surface-2 p-5">
                <p className="text-sm font-bold text-slate-900">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. HOW IT WORKS ─────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-12 max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              How it works
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              Brief to Handover
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              A four-stage process from initial design brief through to factory-tested delivery and installation — with drawing approval at each key stage.
            </p>
          </ScrollReveal>

          {/* Desktop flow */}
          <div className="hidden lg:flex items-stretch">
            {steps.flatMap((step, i) => {
              const items = [
                <ScrollReveal key={step.n} delay={i * 60} className="flex-1">
                  <div className="flex h-full flex-col bg-white p-8 shadow-sm">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center bg-[#111418]">
                        <span className="font-display text-sm font-extrabold text-white">{step.n}</span>
                      </div>
                      <h3 className="font-display text-sm font-extrabold uppercase leading-snug text-slate-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500">{step.body}</p>
                    <div className="my-5 h-px w-full bg-slate-100" />
                    <ul className="space-y-2">
                      {step.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-[11px] text-slate-400">
                          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>,
              ];
              if (i < steps.length - 1) {
                items.push(
                  <div key={`arrow-${i}`} className="flex w-10 shrink-0 items-center justify-center bg-slate-100">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="#297858" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                );
              }
              return items;
            })}
          </div>

          {/* Mobile flow */}
          <div className="flex flex-col lg:hidden">
            {steps.map((step, i) => (
              <div key={step.n}>
                <ScrollReveal delay={i * 60}>
                  <div className="bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#111418]">
                        <span className="font-display text-sm font-extrabold text-white">{step.n}</span>
                      </div>
                      <h3 className="font-display text-sm font-extrabold uppercase text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-xs leading-6 text-slate-500">{step.body}</p>
                    <ul className="mt-4 space-y-2">
                      {step.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-[11px] leading-5 text-slate-400">
                          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 5v14M5 12l7 7 7-7" stroke="#297858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <ScrollReveal delay={100}>
            <div className="mt-8 grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4">
              {[
                "Drawing approval before manufacture",
                "Factory test before despatch",
                "Any size or configuration",
                "Installation available in scope",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 bg-white px-5 py-4">
                  <CheckIcon />
                  <span className="text-xs font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 7. CASE STUDY ───────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                Case study
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                NHS Hospital<br />Direct-Fit Replacement AHUs
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                A major NHS trust required replacement AHUs for a clinical wing where the original manufacturer had ceased trading. Standard catalogue units could not match the footprint or the HTM 03-01 performance requirements.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="border-l-2 border-white/15 pl-4">
                  <span className="text-sm text-white/55">Existing AHUs measured and replacement units manufactured to the same footprint</span>
                </div>
                <div className="border-l-2 border-white/15 pl-4">
                  <span className="text-sm text-white/55">HTM 03-01 performance specified and validated at commissioning</span>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/55">
                We manufactured eight replacement units to fit the existing ductwork connections and plant room dimensions exactly, avoiding structural and ductwork modification costs. All units were factory-tested and validated to HTM 03-01 on site.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm font-bold text-white">8 replacement AHUs manufactured and installed without structural modification</span>
                </div>
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm text-white/80">HTM 03-01 validated at commissioning — full clinical compliance confirmed</span>
                </div>
              </div>
              <div className="mt-7">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                >
                  View all case studies
                  <ArrowIcon />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="relative h-full min-h-[420px] overflow-hidden shadow-lg lg:min-h-[520px]">
                <Image
                  src="/ahu-manufacturing.png"
                  alt="BVS manufacturing facility — bespoke AHU under construction"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── 8. FAQ ─────────────────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} />

      {/* ── 9. FINAL CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                Speak to an engineer
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
                Discuss Your<br />Manufacturing Requirement
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                Tell us the application, the airflow duty, and any size or access constraints. We&apos;ll confirm whether bespoke manufacture is the right route and what a realistic lead time looks like.
              </p>
              <div className="mt-7 space-y-3 border-l border-white/10 pl-5">
                <p className="text-sm text-white/60">40+ years of AHU manufacturing experience</p>
                <p className="text-sm text-white/60">Any size, configuration, or performance specification</p>
                <p className="text-sm text-white/60">Healthcare, laboratory, and specialist environments covered</p>
                <p className="text-sm text-white/60">Direct response from engineers, not sales handlers</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6">
                <a
                  href="tel:01256518170"
                  className="inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <PhoneIcon />
                  01256 518170
                </a>
                <a
                  href="mailto:info@bvs-ltd.co.uk"
                  className="inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <MailIcon />
                  info@bvs-ltd.co.uk
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="relative overflow-hidden border border-slate-100 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#297858]" />
                  <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-slate-900" />
                </div>
                <div className="relative">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">Enquiry</p>
                  <div className="mt-3 h-[2px] w-10 bg-[#297858]" />
                  <p className="mt-5 text-sm leading-6 text-slate-500">
                    Send us the application details — airflow duty, space constraints, and any performance or compliance requirements. We&apos;ll respond within one working day.
                  </p>
                  <div className="mt-7">
                    <QuickQuoteForm />
                  </div>
                  <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                      Engineering response within 24 working hours
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                      Lead time and budget indication provided at first contact
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── 10. RELATED SERVICES ───────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-14">
        <Container>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
            Related services
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/air-handling-unit-installation", label: "AHU Installation" },
              { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 transition-all duration-200 hover:border-[#297858] hover:bg-slate-50"
              >
                <span className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-300 transition-colors group-hover:bg-[#297858]" />
                  {l.label}
                </span>
                <span className="text-slate-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#297858]">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}

/* ── ICONS ───────────────────────────────────────────────────────────── */

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`shrink-0 text-[#297858] ${className}`}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
