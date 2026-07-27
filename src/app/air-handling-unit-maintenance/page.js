import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { TrustedByBar } from "@/components/site/TrustedByBar";

export const metadata = pageMetadata({
  title: "AHU Maintenance | Air Handling Unit Servicing",
  description: "Planned and reactive AHU maintenance services from BVS. Keep your air handling units running efficiently with regular servicing, filter changes, and condition checks. UK nationwide.",
  path: "/air-handling-unit-maintenance",
});

const faqs = [
  {
    q: "Why is AHU maintenance important?",
    a: "Without regular maintenance, air handling units lose efficiency, consume more energy, and are more likely to fail unexpectedly. Blocked filters restrict airflow, dirty coils reduce heat transfer, and worn components put mechanical stress on the rest of the system. Routine servicing prevents avoidable breakdowns and keeps running costs in check.",
  },
  {
    q: "How often should an AHU be serviced?",
    a: "Twice a year is the standard recommendation for most commercial AHUs. High-occupancy or critical environments such as hospitals, cleanrooms, or food production facilities may require more frequent attention. We assess the appropriate schedule at first visit based on unit type, usage, and operating environment.",
  },
  {
    q: "What are the warning signs that an AHU needs attention?",
    a: "Unusual noise from the fan or motor, reduced airflow, inconsistent temperatures across zones, increased energy consumption, and condensation or moisture around the unit are all indicators that your AHU needs inspection. Catching these early is far cheaper than emergency repairs or unplanned downtime.",
  },
  {
    q: "Can you work around our operating hours?",
    a: "Yes. We programme maintenance visits around your building's operational schedule. Where access is limited, we work evenings, weekends, or in planned maintenance windows. We confirm the timing at booking to avoid disruption to your occupants.",
  },
  {
    q: "Does regular maintenance improve energy efficiency?",
    a: "Significantly. Clean coils transfer heat more effectively, clean filters reduce static pressure, and correctly aligned belts and bearings reduce motor load. Buildings with properly maintained AHUs typically see measurable reductions in energy costs compared to unmaintained systems running at degraded performance.",
  },
  {
    q: "Do you carry out reactive and emergency repairs as well as planned maintenance?",
    a: "Yes. Alongside planned maintenance contracts, BVS carry out reactive and emergency call-outs for failed or underperforming AHUs. We keep a broad stock of common components and can often carry out same-day or next-day repairs.",
  },
];

export default function AHUMaintenancePage() {
  return (
    <div>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src="/plant-room.webp"
            alt="Commercial plant room with air handling units requiring maintenance"
            fill
            priority
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 sm:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 via-[35%] to-transparent" />
        </div>

        <Container className="relative z-10 flex min-h-[620px] items-center py-14 pb-16 sm:min-h-[600px] sm:py-20 sm:pb-20">
          {/* Mobile */}
          <div className="sm:hidden max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              AHU Maintenance
            </p>
            <h1
              className="font-display text-3xl font-extrabold leading-[1.08] text-white"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Keep your AHUs<br />running at their best.
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
              Planned servicing, reactive repairs, and condition monitoring for commercial air handling units.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Book a maintenance visit
                <ArrowIcon />
              </Link>
            </div>
          </div>
          {/* Desktop */}
          <div className="hidden sm:block max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              AHU Maintenance
            </p>
            <p
              className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-6xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Keep your AHUs<br />running at their best.
            </p>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p
              className="mt-5 max-w-xl text-[15px] leading-7 text-white"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Planned servicing, reactive repairs, and condition monitoring for commercial air handling units. BVS cover all makes and models, UK nationwide.
            </p>
            <a href="tel:01256518170" className="mt-6 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Book a maintenance visit
                <ArrowIcon />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "40+", label: "Years Experience" },
                { stat: "All Brands", label: "Covered" },
                { stat: "UK Wide", label: "Coverage" },
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

      {/* ── WHY MAINTENANCE MATTERS ────────────────────────────────────── */}
      <section className="bg-[#f5f7f6] py-14 sm:py-16">
        <Container>

          <ScrollReveal className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Why it matters
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              The Cost of Neglected AHUs
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                n: "01",
                heading: "Higher Energy Bills",
                body: "Dirty coils and blocked filters force the system to work harder to deliver the same output, consuming significantly more energy in the process.",
              },
              {
                n: "02",
                heading: "Unexpected Breakdowns",
                body: "Worn bearings, degraded belts, and seized components fail without warning. Reactive repairs are more expensive and cause building disruption at the worst times.",
              },
              {
                n: "03",
                heading: "Poor Air Quality",
                body: "Saturated filters, contaminated heat exchangers, and damaged seals allow unfiltered air into the building, affecting occupant health and compliance.",
              },
              {
                n: "04",
                heading: "Shortened Asset Life",
                body: "Unmaintained units deteriorate faster. Components that could last years are damaged by the knock-on effects of other failing parts running unchecked.",
              },
              {
                n: "05",
                heading: "Compliance Risk",
                body: "Many commercial and critical environments require documented evidence of regular AHU maintenance. Gaps in service records can create legal and insurance exposure.",
              },
              {
                n: "06",
                heading: "Expensive Emergency Repairs",
                body: "Emergency call-outs, specialist parts procurement, and out-of-hours labour all cost significantly more than planned visits. Prevention is cheaper than cure.",
              },
            ].map((item) => (
              <ScrollReveal key={item.n} className="h-full">
                <div className="relative flex h-full flex-col overflow-hidden border border-slate-200 bg-white p-6">
                  <span className="absolute right-5 top-4 text-4xl font-extrabold text-[#297858]/10">
                    {item.n}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    {item.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </Container>
      </section>

      {/* ── WHAT WE CHECK ─────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <ScrollReveal>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                What we cover
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                A Thorough Service Visit
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Every BVS maintenance visit follows a structured inspection and service routine, covering the full unit from fan to filters. We document condition findings and flag any remedial work required.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Filter inspection, cleaning, and replacement",
                  "Coil inspection and cleaning",
                  "Fan, belt, and bearing condition check",
                  "Heat recovery and heat exchanger inspection",
                  "Drain pan and condensate system check",
                  "Damper and actuator operation check",
                  "Controls and sensor verification",
                  "Structural inspection: seals, panels, and access doors",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="relative h-[460px] overflow-hidden border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/two-workers.webp"
                  alt="BVS engineers carrying out AHU maintenance inspection on site"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── HOW WE WORK ───────────────────────────────────────────────── */}
      <section className="bg-[#f5f7f6] py-14 sm:py-16">
        <Container>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">

            <div className="relative max-w-lg">

              <ScrollReveal className="mb-6">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                  Our process
                </p>
                <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                  From First Visit to Ongoing Contract
                </h2>
              </ScrollReveal>

              <div
                className="absolute left-[15px] top-20 bottom-6 w-px bg-slate-200"
                aria-hidden="true"
              />

              <div className="space-y-6">
                {[
                  {
                    n: "01",
                    title: "Initial Assessment",
                    body: "We visit site, inspect the unit, and confirm the appropriate maintenance schedule and scope for your environment and occupancy type.",
                  },
                  {
                    n: "02",
                    title: "Scheduled Service Visits",
                    body: "Visits are booked in advance and programmed around your building's operating hours. We carry common parts and filters to resolve minor issues on the day.",
                  },
                  {
                    n: "03",
                    title: "Condition Report",
                    body: "After every visit you receive a written report covering what was done, any findings, and recommendations for remedial work with indicative costs.",
                  },
                  {
                    n: "04",
                    title: "Ongoing Support",
                    body: "BVS are available for reactive call-outs between scheduled visits if issues arise. One point of contact who knows your plant.",
                  },
                ].map((step, i) => (
                  <ScrollReveal key={step.n} delay={i * 60}>
                    <div className="flex gap-5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#111418] text-xs font-extrabold text-white">
                        {step.n}
                      </div>
                      <div className="pt-0.5">
                        <p className="text-sm font-bold text-slate-900">{step.title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{step.body}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

            </div>

            <ScrollReveal delay={120}>
              <div className="relative h-[420px] overflow-hidden border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/person-working.webp"
                  alt="BVS engineer carrying out AHU service works"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

          </div>

        </Container>
      </section>

      {/* ── FINAL CTA + FORM ───────────────────────────────────────────── */}
      <section className="bg-[#f7f6f5] py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Get in touch
              </p>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Book an AHU<br />Maintenance Visit
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Tell us the make, model, and last service date. We respond within one working day with a practical assessment and pricing.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "All makes and models covered",
                  "Planned and reactive maintenance available",
                  "Works programmed around your operating hours",
                  "Full condition report after every visit",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckIcon /> {item}
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
                <QuickQuoteForm defaultService="AHU Maintenance" />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <FAQAccordion faqs={faqs} theme="dark" />

      {/* ── RELATED SERVICES ───────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-[#f5f7f6] py-12">
        <Container>
          <div className="mt-0 border-t-0">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related services</p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
                { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
                { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
                { href: "/air-handling-unit-troubleshooting", label: "Ventilation Troubleshooting" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex items-center justify-between border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-[#297858] hover:text-[#297858]"
                >
                  {l.label}
                  <span className="text-slate-300 group-hover:translate-x-1 group-hover:text-[#297858] transition-transform">→</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-[#297858]">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
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
