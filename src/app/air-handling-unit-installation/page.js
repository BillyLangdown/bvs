import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = {
  title: "AHU Installation | BVS Building Ventilation Solutions",
  description:
    "Professional air handling unit installation across the UK. Survey, specification, installation, and commissioning — one team from start to finish. 40+ years experience.",
};

const clientLogos = [
  { src: "/nhs-logo.png", alt: "NHS" },
  { src: "/disney-logo.png", alt: "Disney" },
  { src: "/marriott-logo.png", alt: "Marriott Hotels" },
  { src: "/moorfields-logo.png", alt: "Moorfields Eye Hospital" },
  { src: "/ihg-logo.png", alt: "IHG Hotels & Resorts" },
  { src: "/travelodge-logo.png", alt: "Travelodge" },
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
        Keeping systems clean,
        efficient and reliable
      </h1>

      <div className="mt-5 h-[3px] w-12 bg-[#297858]" />

      <p
        className="mt-6 max-w-lg text-[15px] leading-7 text-white/72 sm:text-base"
        style={{ textShadow: "0 1px 10px rgba(0,0,0,0.4)" }}
      >
        Survey, specification, mechanical and electrical installation,
        and full airflow commissioning from one experienced engineering
        team. Trusted across healthcare, commercial and industrial environments.
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

      {/* ── 2. PROBLEM ── 3 pain points ─────────────────────────────────── */}
      <section className="bg-[#111418] py-14 sm:py-16">
  <Container>
    <ScrollReveal className="mb-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        What goes wrong
      </p>

      <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
        Why AHU Installation<br />Gets Complicated
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="grid gap-4 sm:grid-cols-3">
      {[
        {
          n: "01",
          heading: "Gaps in Scope",
          body:
            "Separate contractors often create coordination issues during installation and commissioning.",
        },
        {
          n: "02",
          heading: "Site Disruption",
          body:
            "Poor planning can lead to shutdowns, access problems, and disruption to occupied buildings.",
        },
        {
          n: "03",
          heading: "Wrong Specification",
          body:
            "Incorrect specifications or overlooked services routes can cause major commissioning issues.",
        },
      ].map((item) => (
        <ScrollReveal key={item.n} className="h-full">
          <div className="flex h-full flex-col border-l-2 border-[#297858]/30 bg-white/5 p-6">
            <span className="font-display text-3xl font-extrabold text-[#297858]/20">
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
          <ScrollReveal className="mb-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              The solution
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-slate-900 sm:text-3xl">
              One Scope.<br />No Grey Areas.
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Every element below is included in our scope — managed by the same team, not handed off between contractors.
            </p>
          </ScrollReveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { phase: "Pre-Works", title: "Site Survey", detail: "Access, structural loadings, ductwork connections, services routes" },
              { phase: "Pre-Works", title: "Specification", detail: "Full technical spec and scope issued for client approval" },
              { phase: "Pre-Works", title: "Programme", detail: "Phased installation programme agreed around site occupation" },
              { phase: "Pre-Works", title: "Temporary Works", detail: "Cranage, access platforms, scaffolding co-ordinated" },
              { phase: "Installation", title: "Mechanical Works", detail: "Unit positioning, structural fixing, ductwork connections" },
              { phase: "Installation", title: "Pipework", detail: "Heating, cooling, and drain connections made and tested" },
              { phase: "Installation", title: "Electrical Works", detail: "Power supply, controls wiring, sensor installation" },
              { phase: "Completion", title: "Commissioning", detail: "Full airflow balancing to CIBSE/BSRIA guidance" },
              { phase: "Completion", title: "BMS Integration", detail: "Controls sequences tested and verified against specification" },
              { phase: "Completion", title: "Documentation", detail: "O&M manuals, as-fitted drawings, commissioning record" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 35}>
                <div className="flex flex-col border border-slate-200 bg-white p-5">
                  <span className={`mb-2 self-start px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] ${
                    item.phase === "Pre-Works"
                      ? "bg-slate-100 text-slate-500"
                      : item.phase === "Installation"
                      ? "bg-amber-50 text-amber-700"
                      : "bg-[#297858]/10 text-[#297858]"
                  }`}>
                    {item.phase}
                  </span>
                  <p className="text-sm font-bold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{item.detail}</p>
                </div>
              </ScrollReveal>
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
              The BVS Installation<br />Difference
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "40+", label: "Years AHU experience", detail: "Four decades installing and commissioning air handling units across every major sector and site type in the UK." },
              { stat: "100%", label: "In-house delivery", detail: "Directly employed engineers — no subcontracted trades, no responsibility gaps, single point of accountability throughout." },
              { stat: "Live", label: "Sites — no problem", detail: "The majority of our installation work takes place in occupied buildings. We plan around site constraints before the first van arrives." },
              { stat: "Full", label: "Documentation included", detail: "O&M manuals, as-fitted drawings, commissioning records, and compliance documentation issued at handover. Not on request." },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 60}>
                <div className="flex flex-col border-t-2 border-[#297858] bg-[#f7f6f5] p-6">
                  <p className="font-display text-4xl font-extrabold text-slate-900">{item.stat}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#297858]">{item.label}</p>
                  <div className="my-3 h-px bg-slate-200" />
                  <p className="text-xs leading-5 text-slate-500">{item.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. SOCIAL PROOF ── NHS case study with stats ────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                Case study
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                NHS Hospital<br />12-Unit AHU Programme
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                A programme of 12 AHU installations across a live NHS hospital site. Each unit required careful access planning, sequenced installation around clinical occupancy, and full HTM 03-01 compliance documentation.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { stat: "12", label: "AHUs installed" },
                  { stat: "Zero", label: "Ward disruptions" },
                  { stat: "On", label: "Programme delivery" },
                  { stat: "HTM", label: "03-01 compliant" },
                ].map((s) => (
                  <div key={s.label} className="border border-white/10 bg-white/5 p-4">
                    <p className="font-display text-2xl font-extrabold text-[#297858]">{s.stat}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/30">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-l-2 border-[#297858] pl-4">
                <p className="text-sm leading-6 text-white/65">
                  Delivered on programme with zero disruption to clinical operations. Full O&M documentation, as-fitted drawings, and commissioning records issued at handover.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] transition-colors hover:text-white">
                  View all case studies →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="relative min-h-[360px] overflow-hidden lg:min-h-[480px]">
                <Image
                  src="/hospital.png"
                  alt="NHS hospital — BVS installed 12 AHUs in this live clinical environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
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
                body: "Our directly employed engineering teams manage the full installation — mechanical, electrical, and controls — to a co-ordinated programme with minimum disruption.",
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
                    Free Site Survey &<br />Programme Assessment
                  </h2>
                  <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Before any commitment, we visit site, assess access constraints, review ductwork and services connections, and produce a practical programme assessment — at no cost.
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
                    Book your free survey
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
                <p className="text-sm text-white/50">Full scope delivered by directly employed engineering teams</p>
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
