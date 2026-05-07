import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = {
  title: "AHU Coil Replacement | BVS Building Ventilation Solutions",
  description:
    "Measure-to-fit AHU coil replacement for any make or model. Heating, cooling, heat recovery, and frost coils sourced or manufactured and installed across the UK.",
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
    title: "Site Visit & Measurement",
    body: "We attend site to record the existing coil dimensions, connection sizes, tube and fin arrangement, and flow rates — ensuring the replacement is specified to match performance, not just physical size.",
    points: [
      "Coil face dimensions and casing clearances measured on site",
      "Connection sizes, flow rates, and entering conditions recorded",
      "Tube and fin pitch, row depth, and material spec confirmed",
    ],
  },
  {
    n: "02",
    title: "Source or Manufacture",
    body: "Where a direct replacement is available, we source it. Where it is not — or where the original spec can be improved — we manufacture to order from our network of UK coil suppliers.",
    points: [
      "Direct manufacturer sourcing for standard coil sizes",
      "Bespoke coil manufacture for non-standard or obsolete units",
      "Performance matching verified against original duty data",
    ],
  },
  {
    n: "03",
    title: "Replacement Works",
    body: "The old coil is removed and the replacement fitted, including all pipework connections, pressure testing, and insulation — within the original AHU casing.",
    points: [
      "Old coil removed and casing cleaned and inspected",
      "New coil fitted with pipework connections and pressure tested",
      "Insulation, lagging, and access panel reinstatement completed",
    ],
  },
  {
    n: "04",
    title: "Test & Commission",
    body: "Flow rates are set and verified, controls are checked, and the AHU is returned to service with performance confirmed against the original or improved specification.",
    points: [
      "Flow rates balanced and verified against design",
      "Controls integration and valve operation checked",
      "Handover record and performance confirmation issued",
    ],
  },
];

const faqs = [
  {
    q: "Can you replace coils in any AHU make or model?",
    a: "Yes. We work with all makes and models — including obsolete units where the original manufacturer no longer supports the equipment. Provided we can measure the existing coil, we can source or manufacture a replacement.",
  },
  {
    q: "How long does a coil replacement take?",
    a: "For a straightforward single-coil replacement in an accessible unit, typically one to two days on site. Larger or more complex units with multiple coils, poor access, or requiring bespoke manufacture will take longer — we confirm programme at quotation stage.",
  },
  {
    q: "What coil types do you replace?",
    a: "Heating coils (LTHW and steam), chilled water cooling coils, DX coils, heat recovery coils, and frost coils. If it sits inside an AHU and transfers heat, we can replace it.",
  },
  {
    q: "Do you manufacture coils, or just source them?",
    a: "Both. For standard sizes we source from UK suppliers with short lead times. For non-standard, obsolete, or performance-critical applications, we have coils manufactured to exact specification.",
  },
  {
    q: "Can a coil failure be treated as an emergency?",
    a: "We handle emergency coil replacements where the AHU is out of service or environmental control is compromised. Lead time depends on coil type and whether a standard or bespoke coil is required — contact us directly to discuss urgency.",
  },
  {
    q: "What causes coil failure?",
    a: "Corrosion from aggressive water chemistry or condensate, physical damage from debris ingestion, frost damage from failed freeze protection, and age-related tube erosion are the most common causes. We inspect and advise at survey stage.",
  },
];

/* ── PAGE ─────────────────────────────────────────────────────────────── */

export default function CoilReplacementPage() {
  return (
    <div>

      {/* ── 1. HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/ahu-coil-replacement.png"
          alt="AHU heating coil being replaced inside an air handling unit casing"
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
              AHU Coil Replacement
            </p>
            <h1
              className="font-display text-2xl font-extrabold uppercase leading-[1.08] text-white sm:text-5xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Coil Failure.<br />Measured, Sourced, Replaced.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-white/85" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              We measure the existing coil on site, source or manufacture the replacement, and install it — any make, any model, any coil type. UK nationwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Get a coil replacement quote
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
                { stat: "Any Make", label: "or Model" },
                { stat: "Measure-to-Fit", label: "Every Coil" },
                { stat: "UK Nationwide", label: "Coverage" },
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
                Does Your Coil<br />Need Replacing?
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                Coil failure is not always sudden. Gradual loss of performance is common and often misdiagnosed as a controls or plant issue. If any of the following apply, a coil inspection is the logical next step.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:text-[#1d5c42]"
                >
                  Arrange an inspection →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <ul className="flex flex-col gap-3">
                {[
                  "Heating or cooling output has reduced and plant is running at capacity",
                  "Visible corrosion, fin damage, or water staining on the coil face",
                  "Pressure drop across the coil is higher than the original specification",
                  "Water chemistry treatment has lapsed or corrosion inhibitor levels are unknown",
                  "Frost damage following a freeze-stat failure or prolonged cold spell",
                  "AHU is being refurbished and the coil condition needs confirming",
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

      {/* ── 4. COIL TYPES ──────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                Coil types
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
                Sourced or Manufactured to Specification
              </h2>
              <div className="mx-auto mt-4 h-[3px] w-10 bg-[#297858]" />
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                We replace all coil types across all AHU configurations. Where a standard replacement is available, we source it quickly. Where it is not, we have it manufactured to the exact performance specification.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={80}>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">

              <div className="border border-slate-200 bg-white p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Standard sourced coils
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-500">
                  <p>LTHW and MTHW heating coils</p>
                  <p>Chilled water cooling coils</p>
                  <p>Direct expansion (DX) coils</p>
                  <p>Frost protection preheat coils</p>
                </div>
                <p className="mt-6 text-sm font-semibold text-slate-400">Available for most standard AHU sizes and configurations</p>
              </div>

              <div className="relative overflow-hidden bg-[#111418] p-6 sm:p-8 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-[#297858]/20 to-transparent" />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#297858]">
                    Bespoke manufactured coils
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-white/80">
                    <p>Non-standard face dimensions or row depths</p>
                    <p>Obsolete or discontinued AHU models</p>
                    <p>Performance-uprated replacement specifications</p>
                    <p>Stainless steel or epoxy-coated construction for aggressive environments</p>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-white">Manufactured to exact duty — not the nearest available size.</p>
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
              Scope of works
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              What&apos;s Included
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              A complete coil replacement service from initial site measurement through to pressure-tested, commissioned installation — not just a supply-only service.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Site Measurement Survey", desc: "Physical measurement of the existing coil, connection positions, flow direction, and casing clearances to ensure the replacement fits without modification." },
              { title: "Coil Sourcing or Manufacture", desc: "We source from stock or have the coil manufactured to your exact specification — whichever route gives the right product at the right lead time." },
              { title: "Removal & Disposal", desc: "The existing coil is safely removed, pipework connections are capped, and the casing is cleaned and inspected before the new coil is fitted." },
              { title: "Installation & Pipework", desc: "New coil fitted within the existing casing, pipework connections made and pressure tested, and drain tray and condensate pipework reinstated." },
              { title: "Insulation & Lagging", desc: "All pipework insulated and lagged to prevent condensation and heat loss, with access panels and covers reinstated on completion." },
              { title: "Test & Commission", desc: "Flow rates balanced and verified, controls operation confirmed, and a written performance record issued at handover." },
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
              Measure to Commission
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              A four-stage process from on-site measurement through to commissioned replacement — with no guesswork on sizing or performance.
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
                "Measured on site — not estimated",
                "Any make, model, or coil type",
                "Bespoke manufacture available",
                "Pressure tested before handover",
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
                Hotel Kitchen<br />Emergency Coil Replacement
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                A central London hotel contacted us after their kitchen extract AHU lost all cooling output mid-summer. A failed chilled water coil had caused the kitchen to exceed safe operating temperatures.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="border-l-2 border-white/15 pl-4">
                  <span className="text-sm text-white/55">Coil measured on site within 24 hours of the initial call</span>
                </div>
                <div className="border-l-2 border-white/15 pl-4">
                  <span className="text-sm text-white/55">Replacement sourced and installed within 4 working days</span>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/55">
                The original AHU manufacturer was no longer trading. We measured the coil on site, sourced a performance-matched replacement from a specialist coil supplier, and installed it with minimal disruption to hotel operations.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm font-bold text-white">Full cooling capacity restored within 4 working days</span>
                </div>
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm text-white/80">Original manufacturer obsolete — replacement sourced independently</span>
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
                  src="/hotel.png"
                  alt="Hotel building exterior — emergency coil replacement restored kitchen cooling"
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
                Get a Coil<br />Replacement Quote
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                Tell us the AHU make and model, coil type, and any performance or access constraints. We&apos;ll confirm what&apos;s required and provide a written quotation.
              </p>
              <div className="mt-7 space-y-3 border-l border-white/10 pl-5">
                <p className="text-sm text-white/60">Any make, model, or coil type — including obsolete units</p>
                <p className="text-sm text-white/60">Sourced or manufactured to exact specification</p>
                <p className="text-sm text-white/60">Emergency replacements handled where AHU is out of service</p>
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
                    Send us the AHU make, model, coil type, and site location. We&apos;ll arrange a measurement survey and return a written quotation.
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
                      Emergency enquiries handled on the same day
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
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
              { href: "/air-handling-unit-manufacturing", label: "AHU Manufacturing" },
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
