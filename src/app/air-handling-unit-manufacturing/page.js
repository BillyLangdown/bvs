import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { TrustedByBar } from "@/components/site/TrustedByBar";

export const metadata = {
  title: "AHU Manufacturing | BVS Building Ventilation Solutions",
  description:
    "Custom air handling unit manufacturing from our UK facility. Custom AHUs designed to specification, any size, any configuration, 5–7 week lead time. 40+ years manufacturing experience.",
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
    q: "What size AHUs do you manufacture?",
    a: "From small packaged units handling 500 l/s to large central plant in excess of 50,000 m3/h. We manufacture across commercial, healthcare, education, laboratory, and industrial sectors.",
  },
  {
    q: "Do you manufacture to HTM 03-01 for healthcare?",
    a: "Yes. We have experience manufacturing AHUs for NHS and private healthcare facilities to HTM 03-01 requirements, including theatre-grade filtration, validated airflow performance, and the documentation requirements for clinical environments.",
  },
  {
    q: "Can you supply fan, coil, and controls as part of the AHU?",
    a: "Yes. We supply complete units including fans, heating and cooling coils, filters, dampers, and controls panels. The degree of integration depends on the project requirements; we can supply a full packaged unit or a mechanical-only casing.",
  },
  {
    q: "Do you offer installation as well as manufacture?",
    a: "Yes. We can provide the full scope from manufacture through to mechanical and electrical installation and commissioning, under a single contract. This is the most common arrangement for replacement projects where the existing AHU is being removed.",
  },
];

export default function AHUManufacturingPage() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/ahu-sparks.webp"
          alt="BVS air handling unit manufacturing workshopcustom-built AHU build in progress"
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
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              AHU Manufacturing
            </p>
            <h1 className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-6xl">
              Built for your project,<br />manufactured in the UK.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white">
              When the catalogue does not have what the building requires, we build it. Any size. Any specification. 40+ years of AHU manufacturing from our UK facility.
            </p>
            <p className="mt-6 text-sm text-white/70">
              Call us:{" "}
              <a href="tel:01256518170" className="font-semibold text-white transition-colors hover:text-white/80">01256 518170</a>
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#brief"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Discuss your requirements
                <ArrowIcon />
              </a>
              <a
                href="#overview"
                className="inline-flex items-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Learn more
                <ArrowDownIcon />
              </a>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "Custom Built", label: "UK Manufacture" },
                { stat: "Any Size", label: "Any Specification" },
                { stat: "40+", label: "Years Experience" },
              ].map((s) => (
                <div key={s.label} className="px-2 text-center sm:px-6">
                  <p className="text-sm font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-wide text-white/55 sm:text-[10px]">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      <TrustedByBar />

{/* ── 2. PROBLEM ── when catalogue products fail ───────────────────── */}
<section id="overview" className="bg-[#0e1115] py-14 sm:py-16">
  <Container>

    <ScrollReveal className="mb-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        When off-the-shelf isn't enough
      </p>

      <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
        Where Catalogue Units Fail
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="grid gap-4 sm:grid-cols-3">

      {[
        {
          n: "01",
          heading: "Restricted Access",
          body: "Plant space or access prevents standard unit installation.",
        },
        {
          n: "02",
          heading: "Obsolete Equipment",
          body: "Original unit is no longer supported or available.",
        },
        {
          n: "03",
          heading: "Specialist Requirements",
          body: "Performance or compliance exceeds catalogue capability.",
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

{/* ── 3. SOLUTION ── engineered response ────────────────── */}
<section className="bg-[#f7f6f5] py-16 sm:py-20">
  <Container>

    <ScrollReveal className="mb-10">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        The solution
      </p>

      <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
        How We Solve It
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    {/* NEW LAYOUT: TEXT LEFT + STACKED RESPONSES RIGHT */}
    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">

      {/* LEFT SIDE - narrative (NOT card-based) */}
      <div className="max-w-lg">

        <p className="text-sm leading-7 text-slate-600">
          Instead of replacing entire air handling systems, we approach each unit at component level. This allows us to retain structural elements, replace only what has degraded, and rebuild performance within the existing installation footprint.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          Every project is engineered around the existing plant constraints, meaning the solution is defined by what is already installed, not what is available in a catalogue.
        </p>

      </div>

      {/* RIGHT SIDE - response modules (structured, not cards) */}
      <div className="space-y-4">

        {[
          {
            title: "Measure and design to fit",
            detail: "Units are manufactured to match exact plant constraints.",
          },
          {
            title: "Component-level replacement",
            detail: "Only failed or underperforming parts are replaced individually.",
          },
          {
            title: "In-situ rebuild",
            detail: "Systems are restored within the existing unit footprint.",
          },
        ].map((item, i) => (
          <ScrollReveal key={i} delay={i * 60}>

            <div className="border border-slate-200 bg-white p-5">

              <p className="text-sm font-bold text-slate-900">
                {item.title}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.detail}
              </p>

            </div>

          </ScrollReveal>
        ))}

      </div>

    </div>

  </Container>
</section>

      {/* ── 4. BENEFITS ── capability table + 4 outcome cards ───────────── */}
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
      detail:
        "Four decades of AHU design and manufacture from our UK facility.",
    },
    {
      stat: "UK",
      label: "Manufactured",
      detail:
        "All units built in the UK with client inspection available pre-despatch.",
    },
    {
      stat: "Full",
      label: "Scope available",
      detail:
        "Manufacture, delivery, installation and commissioning under one contract.",
    },
    {
      stat: "Factory",
      label: "Tested every unit",
      detail:
        "Performance and electrical checks completed before despatch with records issued.",
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

      {/* ── 5. SOCIAL PROOF ── Warner Leisure Hotel case study ─────────── */}
      <section className="bg-[#f7f6f5] py-20 sm:py-24">
  <Container>

    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

      {/* LEFT SIDE */}
      <ScrollReveal>

        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
          Case study
        </p>

        <h2 className="mt-3 text-2xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
          Warner Leisure Hotel<br />
          Gunton Hall: Made-to-Specification AHU
        </h2>

        <div className="mt-4 h-[3px] w-10 bg-[#297858]" />

        {/* simplified narrative */}
        <div className="mt-6 space-y-2 text-sm leading-6 text-slate-600">
          <p>Replacement of end-of-life swimming pool AHU.</p>
          <p>Custom unit engineered to match restricted plantroom space.</p>
          <p>Full delivery: design, manufacture, install, commission.</p>
        </div>

        {/* IMPROVED STATS → CHIPS (not cards anymore) */}
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "Made-to-specification design",
            "Flatpack delivery",
            "Trend controls",
            "End-to-end delivery",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-600"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href="/case-studies/warner-leisure-hotel-gunton-hall-ahu"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:text-[#1d5c42]"
          >
            See full case study →
          </Link>

          <Link
            href="/case-studies"
            className="text-sm font-semibold text-slate-400 hover:text-slate-700"
          >
            All case studies →
          </Link>
        </div>

      </ScrollReveal>

      {/* RIGHT SIDE */}
      <ScrollReveal className="relative">

        <div className="relative h-[420px] overflow-hidden border border-slate-200 bg-white shadow-sm">

          <Image
            src="/gunton-hall.webp"
            alt="Gunton Hall Warner Leisure Hotelcustom-built AHU manufactured and installed by BVS"
            fill
            unoptimized
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />

          {/* softer depth instead of harsh overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

        </div>

      </ScrollReveal>

    </div>

  </Container>
</section>

      {/* ── 6. HOW IT WORKS ── 4-step build process ─────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
  <Container>
    <ScrollReveal className="mb-10">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        Build process
      </p>
      <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
        From Brief to<br />Built Unit
      </h2>
      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
      <p className="mt-3 text-sm text-slate-500">
        The same sequence on every project. Every unit ships with factory test records and drawing pack.
      </p>
    </ScrollReveal>

    {/* 🔒 THIS is the important fix */}
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-0 lg:grid-cols-4 ">
        {[
          {
            n: "01",
            title: "Design Brief",
            body: "Specification defined from site survey and performance needs.",
            points: [
              "Airflow + thermal requirements agreed",
              "Space and access constraints captured",
              "Controls and integration defined",
            ],
          },
          {
            n: "02",
            title: "Engineering & Approval",
            body: "Drawings produced and signed off before manufacture.",
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
            title: "Delivery & Install",
            body: "Delivered and installed to commissioning handover.",
            points: [
              "Scheduled delivery",
              "Install and commission",
              "O&M documentation supplied",
            ],
          },
        ].map((step, i) => (
          <ScrollReveal key={step.n} delay={i * 70}>
            <div className="flex h-full flex-col border-r border-slate-200 p-6 last:border-r-0">
              <div className="mb-4 flex h-8 w-8 items-center justify-center bg-[#111418]">
                <span className="text-xs font-bold text-white">{step.n}</span>
              </div>

              <h3 className="text-sm font-bold uppercase text-slate-900">
                {step.title}
              </h3>

              <p className="mt-2 text-xs text-slate-500">
                {step.body}
              </p>

              <ul className="mt-4 space-y-1.5">
                {step.points.map((p) => (
                  <li key={p} className="flex gap-2 text-[10px] text-slate-400">
                    <span className="mt-1 h-1 w-2 bg-[#297858]" />
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

      {/* ── 8. FINAL CTA ── form ───────────────────────────────────────── */}
      <section id="brief" className="bg-[#f7f6f5] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Get in touch
              </p>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Discuss Your<br />Manufacturing Brief
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Tell us the airflow requirements, available space envelope, any access constraints, and the sector. We&apos;ll provide a practical view on feasibility and lead time before you commit to anything.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "40+ years manufacturing experience, not a recent addition to the service range",
                  "UK facility, accessible for client or third-party pre-delivery inspection",
                  "Full scope: manufacture, installation, commissioning, documentation",
                  "No obligation to proceed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckIcon className="mt-0.5 shrink-0" />
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
              <div className="border border-slate-200 bg-white p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
                  Enquiry
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Send us your airflow requirements, space constraints, and sector. We&apos;ll respond with a practical view on specification and lead time within one working day.
                </p>
                <div className="mt-6"><QuickQuoteForm /></div>
                <div className="mt-5 flex flex-col gap-2 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Response within one working day
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

      {/* ── 9. FAQ ───────────────────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} />

      {/* ── RELATED SERVICES ─────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related services</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/air-handling-unit-installation", label: "AHU Installation" },
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
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

function ArrowDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
