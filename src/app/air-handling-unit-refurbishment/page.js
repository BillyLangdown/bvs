import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "AHU Refurbishment | BVS Building Ventilation Solutions",
  description:
    "Extend your air handling unit's life by 10–15 years at around 40% of replacement cost. BVS survey, specify, and refurbish on-site with minimal disruption. UK nationwide.",
};

/* ── DATA ─────────────────────────────────────────────────────────────── */

const clientLogos = [
  { src: "/nhs-logo.png", alt: "NHS" },
  { src: "/disney-logo.png", alt: "Disney" },
  { src: "/marriott-logo (1).png", alt: "Marriott" },
  { src: "/moorfeilds-logo (2).png", alt: "Moorfields Eye Hospital" },
  { src: "/ihg-logo.png", alt: "IHG Hotels & Resorts" },
  { src: "/travelodge-logo.png", alt: "Travelodge" },
  { src: "/waitrose-logo.png", alt: "Waitrose" },
  { src: "/alpinef1-logo.png", alt: "Alpine F1 Team" },
];

const scopeGroups = [
  {
    category: "Fans & Drive",
    items: [
      { title: "Fan & Motor Replacement", body: "EC or AC motors replacing belt-drive or failing fans." },
      { title: "Damper & Actuator Works", body: "Worn or seized damper blades, actuators, and linkages replaced." },
    ],
  },
  {
    category: "Thermal Performance",
    items: [
      { title: "Coil Replacement", body: "Heating, cooling, and heat recovery coils measured, manufactured, and fitted in-situ." },
      { title: "Humidifier Systems", body: "Steam generators, UV systems, and water treatment serviced or replaced." },
    ],
  },
  {
    category: "Enclosure & Filtration",
    items: [
      { title: "Casing & Insulation", body: "Corroded panels, failed insulation, and unsealed joints repaired or replaced." },
      { title: "Filter Section Upgrade", body: "Filter housings and media upgraded to current efficiency standards." },
    ],
  },
  {
    category: "Controls & Services",
    items: [
      { title: "Controls Modernisation", body: "Obsolete controls replaced with modern DDC systems — BMS integration and fault diagnostics." },
      { title: "Pipework & Commissioning", body: "All associated pipework, insulation, pressure testing, and full recommissioning." },
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Survey & Assessment",
    body: "On-site inspection of every component. You receive a condition report and prioritised findings before anything is agreed.",
  },
  {
    n: "02",
    title: "Specification & Planning",
    body: "Fixed-price, itemised scope. Works programmed around your operational hours — nights or weekends where required.",
  },
  {
    n: "03",
    title: "On-Site Refurbishment",
    body: "All mechanical and electrical works carried out in-situ by our own engineers. No craning out. No subcontractors.",
  },
  {
    n: "04",
    title: "Testing & Handover",
    body: "Full recommissioning against design specification. Commissioning records, O&M documentation, and warranty included.",
  },
];

const faqs = [
  {
    q: "How much does refurbishment cost compared to replacement?",
    a: "Typically 30–50% of the cost of a new unit. The exact figure depends on size and condition — we give you a fixed-price, itemised quote after the survey.",
  },
  {
    q: "Will we need to shut the building down?",
    a: "Not necessarily. Many refurbishments are staged so ventilation stays live throughout. Where a shutdown is required, we schedule it around your operational hours.",
  },
  {
    q: "How many years does refurbishment add to my AHU's lifespan?",
    a: "Typically 10–15 years, depending on structural condition and scope. We'll confirm this at survey stage — we won't refurbish a unit that isn't worth it.",
  },
  {
    q: "When would you recommend replacement instead?",
    a: "When the structural frame or core components are beyond economic repair. We'll tell you honestly — we have no incentive to push refurbishment where replacement is the right call.",
  },
];

/* ── PAGE ─────────────────────────────────────────────────────────────── */

export default function AHURefurbishmentPage() {
  return (
    <div>

      {/* ── 1. HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/belt-driven-fan.png"
          alt="AHU refurbishment in progress"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 via-[45%] to-transparent" />

        <Container className="relative flex min-h-[520px] items-center py-14 pb-28 sm:min-h-[600px] sm:py-20 sm:pb-20">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              AHU Refurbishment
            </p>
            <h1
              className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-5xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Extend Asset Life and <br />Avoid Replacement Cost.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-white/85" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              We survey, specify, and carry out all works on-site — one in-house team, fixed price, minimal disruption.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Request a refurbishment survey
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

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-3">
              {[
                { stat: "30–50%", label: "Of Replacement Cost" },
                { stat: "10–15 Yrs", label: "Extended Service Life" },
                { stat: "UK Wide", label: "In-House, Nationwide" },
              ].map((s) => (
                <div key={s.label} className="px-3 text-center sm:px-6">
                  <p className="font-display text-base font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wide text-white/55 sm:text-[11px]">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-7 sm:py-10">
        <Container>
          <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Trusted by leading UK organisations
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 place-items-center">
            {clientLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                height={60}
                width={120}
                unoptimized
                className="h-10 w-auto object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                style={{ height: "60px", width: "auto", maxWidth: "120px" }}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ── 2. QUICK ASSESSMENT ────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                Quick assessment
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                Is Refurbishment<br />Right for Your AHU?
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                Refurbishment is typically suitable when the unit&apos;s structure is sound but performance has declined.
                If one or more of the following applies, a condition survey is the right next step.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                >
                  Book a free survey
                  <ArrowIcon />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <ul className="flex flex-col gap-3">
                {[
                  "Your unit is structurally sound but underperforming",
                  "Energy costs are rising without a clear cause",
                  "There is visible wear, corrosion, or component failure",
                  "Full replacement is not in budget or not yet justified",
                ].map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-[#297858] bg-white/5 px-5 py-4"
                  >
                    <span className="text-sm font-semibold text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── 3. THE CASE FOR REFURBISHMENT ─────────────────────────────── */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                The case for refurbishment
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-slate-900 sm:text-3xl">
                A Practical Alternative<br />to Full Replacement
              </h2>
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-slate-500">
                Most AHUs degrade gradually. The structure and casing often outlast the components inside them. Refurbishment replaces what&apos;s failing and restores full performance — without the disruption or cost of a new unit.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="grid grid-cols-2 gap-px bg-slate-200">
                {[
                  { label: "30–50% of replacement cost", sub: "Typical saving vs. a new unit" },
                  { label: "10–15 years extended lifespan", sub: "With appropriate scope of works" },
                  { label: "On-site delivery", sub: "No craning out, no temporary plant" },
                  { label: "Minimal disruption", sub: "Planned around your operations" },
                ].map((item) => (
                  <div key={item.label} className="bg-white p-6">
                    <p className="text-sm font-bold text-slate-900">{item.label}</p>
                    <p className="mt-1 text-xs text-slate-400">{item.sub}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 4. WHAT'S INCLUDED ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Scope of works
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              What&apos;s Included
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
              Every refurbishment is specified to the unit&apos;s individual needs. Typical scope includes:
            </p>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {scopeGroups.map((group, gi) => (
              <ScrollReveal key={group.category} delay={gi * 60}>
                <div className="h-full border border-slate-100 bg-surface-2 p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">{group.category}</p>
                  <div className="mt-3 h-[2px] w-8 bg-[#297858]" />
                  <ul className="mt-5 flex flex-col gap-4">
                    {group.items.map((item) => (
                      <li key={item.title}>
                        <p className="text-sm font-bold text-slate-900">{item.title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{item.body}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. HOW IT WORKS ─────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              How it works
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              From Survey to Handover
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
              A fixed four-step process with one in-house team throughout. No handoffs, no subcontractors, no surprises.
            </p>
          </ScrollReveal>

          {/* Desktop: horizontal flow with arrow connectors */}
          <div className="hidden lg:flex items-stretch">
            {steps.flatMap((step, i) => {
              const items = [
                <ScrollReveal key={step.n} delay={i * 60} className="flex-1">
                  <div className="flex h-full flex-col bg-white p-7 shadow-sm">
                    <div className="mb-5 flex h-10 w-10 items-center justify-center bg-[#111418]">
                      <span className="font-display text-sm font-extrabold text-white">{step.n}</span>
                    </div>
                    <h3 className="font-display text-sm font-extrabold uppercase text-slate-900">{step.title}</h3>
                    <p className="mt-3 flex-1 text-xs leading-6 text-slate-500">{step.body}</p>
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

          {/* Mobile/tablet: vertical stack with down arrows */}
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

          {/* Risk assurances strip */}
          <ScrollReveal delay={100}>
            <div className="mt-5 grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4">
              {[
                "Phased delivery available",
                "Out-of-hours work",
                "No temporary plant",
                "HTM 03-01 capable",
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

      {/* ── 6. CASE STUDY ───────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                Case study
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                NHS Hospital —<br />12 AHU Programme
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />

              <div className="mt-6 flex flex-col gap-3">
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm font-bold text-white">100% HTM 03-01 compliance restored across all 12 units.</span>
                </div>
                <div className="border-l-2 border-white/15 pl-4">
                  <span className="text-sm text-white/55">Delivered on programme. Zero disruption to clinical operations.</span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/55">
                12 ageing hospital AHUs refurbished in-situ — EC fan upgrades, coil replacements, and controls modernisation — sequenced around ward occupancy. No ward closures, no subcontractors.
              </p>

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

            <Image
              src="/hospital.png"
              alt="Hospital"
              width={600}
              height={400}
            />
          </div>
        </Container>
      </section>

      {/* ── 7. FAQ ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">Common questions</p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">Frequently Asked Questions</h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-5 lg:grid-cols-2">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 30}>
                <div className="h-full border-l-2 border-[#297858] bg-surface-2 p-6">
                  <h3 className="text-sm font-bold text-slate-900">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 8. FINAL CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">Speak to an engineer</p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
                Request a<br />Refurbishment Survey
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                Tell us about your unit — make, model, age, and what you&apos;re experiencing. We respond within one working day.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {[
                  "We manufacture AHUs — we understand them at component level",
                  "40+ years across NHS, hotels, defence, and commercial sites",
                  "No subcontractors — one accountable in-house team",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-white/60">
                    <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <a href="tel:01256518170" className="inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
                  <PhoneIcon />
                  01256 518170
                </a>
                <a href="mailto:info@bvs-ltd.co.uk" className="inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
                  <MailIcon />
                  info@bvs-ltd.co.uk
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="bg-white p-8">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">Quick enquiry</p>
                <p className="mb-6 text-sm text-slate-500">Describe your AHU and we&apos;ll be in touch within one working day.</p>
                <QuickQuoteForm />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 9. RELATED SERVICES ────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related Services</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
              { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
              { href: "/air-handling-unit-manufacturing", label: "AHU Manufacturing" },
              { href: "/air-handling-unit-controller-solutions-upgrades", label: "Controller Solutions" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
              >
                {l.label}
                <span className="ml-3 shrink-0 text-[#297858] transition-transform duration-200 group-hover:translate-x-0.5">→</span>
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

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-[#297858]">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIconSm() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
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
