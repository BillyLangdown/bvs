import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "AHU Installation & Contracting",
  description:
    "Expert air handling unit installation and contracting from BVS. End-to-end project delivery - survey, specification, installation, commissioning, and handover. 40+ years experience, UK nationwide.",
};

const steps = [
  {
    n: "01",
    title: "Survey & Assessment",
    body: "We visit your site to assess existing plant, access routes, structural constraints, and project scope - giving you a clear picture before any commitment is made.",
  },
  {
    n: "02",
    title: "Specification & Pricing",
    body: "A detailed specification and transparent, itemised quote with no hidden costs. Our 40+ years of experience means we recommend the right solution - not the most expensive one.",
  },
  {
    n: "03",
    title: "Programme Planning",
    body: "We build a project programme around your operational hours. Healthcare, hospitality, and commercial sites all have different constraints - we plan meticulously around yours.",
  },
  {
    n: "04",
    title: "Installation",
    body: "Our engineers complete all associated works - mechanical pipework, ductwork connections, electrical supply, controls wiring, and plant room works - as a single coordinated team.",
  },
  {
    n: "05",
    title: "Commissioning & Testing",
    body: "Full system commissioning with witnessed testing, airflow measurement, and performance verification against your design specification before we sign anything off.",
  },
  {
    n: "06",
    title: "Handover & Support",
    body: "Comprehensive O&M documentation, commissioning certificates, and warranties. Plus the option for an ongoing maintenance contract to protect your new investment.",
  },
];

const scope = [
  {
    title: "Full AHU Replacement",
    body: "Any make or model - we survey, specify, and replace like-for-like or upgrade to improved performance and efficiency.",
  },
  {
    title: "New AHU Installation",
    body: "New builds, refurbishments, and plantroom fit-outs. We design to specification and install to programme.",
  },
  {
    title: "Associated Pipework",
    body: "LTHW, CHW, and HRW pipework connections, thermal insulation, and pressure testing as part of a complete package.",
  },
  {
    title: "Ductwork Connections",
    body: "Spigot connections, flexible connectors, attenuators, and ductwork modifications to integrate cleanly with your existing system.",
  },
  {
    title: "Electrical & Controls",
    body: "First and second-fix electrical works, panel wiring, BMS integration, and full controls commissioning.",
  },
  {
    title: "Plant Room Works",
    body: "General plantroom refurbishment including lighting, drainage, structural works, and access improvements.",
  },
  {
    title: "Commissioning",
    body: "Witnessed commissioning with all airflows balanced, controls tested, and system performance confirmed and documented.",
  },
  {
    title: "O&M Documentation",
    body: "Full handover packs including O&M manuals, commissioning certificates, Gas Safe records, and as-built drawings.",
  },
];

const reasons = [
  {
    title: "We manufacture our own AHUs",
    body: "Most contractors source units from third parties. Because BVS manufactures its own air handling units, we understand the equipment at a deeper level - and that knowledge shows in how we install it.",
  },
  {
    title: "40+ years of installation experience",
    body: "From single unit swaps to full plantroom refurbishments, we've installed HVAC plant in virtually every commercial building type across the UK.",
  },
  {
    title: "One team, complete scope",
    body: "Mechanical, electrical, controls - we coordinate every trade as a single accountable team. No finger-pointing between subcontractors.",
  },
  {
    title: "Minimal disruption as standard",
    body: "We programme works around your operational constraints - nights, weekends, phased shutdowns - to keep your building running throughout.",
  },
];

const faqs = [
  {
    q: "How long does AHU installation typically take?",
    a: "It depends on size and complexity. A single unit in an accessible plantroom can be completed in 2–3 days. Larger programmes involving multiple units, pipework, and BMS integration are typically scheduled over several weeks. We provide a realistic programme at the quotation stage.",
  },
  {
    q: "Can you work around our building's operating hours?",
    a: "Yes - this is standard practice for us. We regularly work nights and weekends in healthcare, hospitality, and commercial environments where the building cannot be taken offline during the day.",
  },
  {
    q: "Do you provide maintenance after installation?",
    a: "We offer planned preventative maintenance (PPM) contracts following installation. Having the team who installed your plant maintain it means faster response, better fault knowledge, and a single point of responsibility.",
  },
  {
    q: "Do you cover the whole UK?",
    a: "Yes. We operate nationwide from Glasgow to Gravesend and from the Gower to Great Yarmouth. There are no regional callout premiums - we quote the job wherever you are.",
  },
  {
    q: "Are your engineers Gas Safe registered?",
    a: "Yes. All gas-related works are carried out by Gas Safe registered engineers. We provide full gas safe certificates and relevant compliance documentation at handover.",
  },
  {
    q: "Do you only install BVS-manufactured AHUs?",
    a: "No. While we manufacture our own air handling units, we regularly install units from all major manufacturers. Our knowledge of the wider market means we can advise on the best unit for your application, not just ours.",
  },
];

export default function AHUInstallationPage() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/hero.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/30" />

        <Container className="relative flex min-h-[600px] items-end py-20 pb-28">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              AHU Installation & Contracting
            </p>
            <h1 className="font-display text-5xl font-extrabold uppercase leading-none text-white sm:text-6xl">
              Complete HVAC
              <br />
              Installation,
              <br />
              Start to Finish
            </h1>
            <div className="mt-5 h-[3px] w-16 bg-emerald-500" />
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
              From initial site survey to signed handover documentation - our engineers
              manage every stage of your AHU installation so your team doesn&apos;t have to.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                Book a site survey
                <ArrowIcon />
              </Link>
              <a
                href="tel:01256518170"
                className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <PhoneIconSm />
                Call 01256 518170
              </a>
            </div>
          </div>
        </Container>

        {/* Trust strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/50 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-4">
              <div className="px-4 text-center first:pl-0 sm:text-left">
                <p className="font-display text-xl font-extrabold text-white">40+</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">Years Experience</p>
              </div>
              <div className="px-4 text-center">
                <p className="font-display text-xl font-extrabold text-white">UK Wide</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">Nationwide Coverage</p>
              </div>
              <div className="px-4 text-center last:pr-0 sm:text-right">
                <p className="font-display text-xl font-extrabold text-white">Gas Safe</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">Registered Engineers</p>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                End-to-end project delivery
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-slate-900 sm:text-4xl">
                Replacing a failing AHU or planning a new installation?
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-emerald-700" />
              <p className="mt-5 text-base leading-7 text-slate-600">
                Whether you&apos;re replacing end-of-life plant, fitting out a new plantroom, or
                upgrading to more energy-efficient equipment - BVS manages the entire
                project from first visit to final sign-off.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Our engineers work on live commercial, healthcare, and hospitality sites
                daily. We coordinate every trade - mechanical, electrical, controls - as
                a single accountable team. No managing multiple contractors, no grey areas
                on responsibility.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
                >
                  Request a quote
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                >
                  See our work
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "40+", label: "Years of HVAC installation experience" },
                { stat: "UK", label: "Nationwide - no regional premiums" },
                { stat: "NHS", label: "Healthcare, hospitality & major brands" },
                { stat: "1 team", label: "Mechanical, electrical & controls" },
              ].map((item) => (
                <div key={item.label} className="border border-slate-100 bg-surface-2 p-6">
                  <p className="font-display text-3xl font-extrabold text-emerald-800">{item.stat}</p>
                  <p className="mt-2 text-xs font-medium leading-5 text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-16">
        <Container>
          <div className="mb-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              How it works
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">
              Our Installation Process
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
              No surprises. Every project follows the same clear, structured process -
              so you always know what&apos;s happening and what comes next.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="bg-white p-8">
                <span className="font-display text-5xl font-extrabold text-emerald-700/20 leading-none">
                  {step.n}
                </span>
                <div className="mt-1 h-[2px] w-8 bg-emerald-700" />
                <h3 className="mt-4 font-display text-base font-bold uppercase text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── MID-PAGE CTA ─────────────────────────────────────────────── */}
      <section className="bg-emerald-700 py-10">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-extrabold uppercase text-white">
                Ready to get a price?
              </p>
              <p className="mt-1 text-sm text-white/80">
                Describe your project - we&apos;ll respond within one working day with practical advice and a quote.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-emerald-900 transition-colors hover:bg-emerald-50"
              >
                Request a quote
              </Link>
              <a
                href="tel:01256518170"
                className="inline-flex items-center gap-2 border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Call 01256 518170
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SCOPE ────────────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              One team, complete scope
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">
              What&apos;s Included
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
              We handle every element of the installation under one contract - so you&apos;re not
              managing separate mechanical, electrical, and controls contractors. One team.
              One point of accountability.
            </p>
          </div>

          <div className="grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {scope.map((item) => (
              <div key={item.title} className="bg-white p-6">
                <div className="h-[3px] w-6 bg-emerald-700" />
                <h3 className="mt-4 text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHY BVS ──────────────────────────────────────────────────── */}
      <section className="bg-emerald-950 py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Why choose BVS
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
              We&apos;re not just installers - we build AHUs too
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-500" />
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70">
              Most installation contractors source units from third parties and fit them.
              Because BVS manufactures its own air handling units, we understand the equipment
              at a component level - and that knowledge shows in every installation we do.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="border border-white/10 bg-white/5 p-7">
                <div className="h-[3px] w-8 bg-emerald-500" />
                <h3 className="mt-4 font-display text-base font-bold uppercase text-white">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{r.body}</p>
              </div>
            ))}
          </div>

          {/* Clients */}
          <div className="mt-12 border-t border-white/10 pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              Trusted by
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {["NHS", "Marriott", "Disney", "Warner Bros", "Alpine F1", "Queen Mary", "Brooklands"].map((c) => (
                <span
                  key={c}
                  className="border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTORS ──────────────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Sectors we serve
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">
                We Work Across All Commercial Sectors
              </h2>
              <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
              <p className="mt-4 text-sm leading-6 text-slate-600">
                From NHS hospitals where ventilation is life-critical, to hotels where guest
                comfort is paramount, to offices where energy efficiency drives the brief - we
                have deep experience in every sector and understand the different constraints
                each one brings.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                "Healthcare & NHS",
                "Hotels & Hospitality",
                "Commercial Offices",
                "Education",
                "Industrial & Manufacturing",
                "Retail & Leisure",
              ].map((s) => (
                <div
                  key={s}
                  className="border border-slate-200 px-4 py-4 text-sm font-semibold text-slate-700"
                >
                  <div className="mb-2 h-[2px] w-5 bg-emerald-700" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Common questions
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-l-2 border-emerald-700 bg-white p-6">
                <h3 className="text-sm font-bold text-slate-900">{faq.q}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── RELATED SERVICES ─────────────────────────────────────────── */}
      <section className="bg-white py-12">
        <Container>
          <h2 className="font-display text-lg font-extrabold uppercase text-slate-900">
            Related Services
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/air-handling-unit-manufacturing", label: "AHU Manufacturing" },
              { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center justify-between border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 transition-colors hover:border-emerald-200 hover:bg-emerald-50"
              >
                {l.label}
                <span className="ml-3 shrink-0 text-emerald-700">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA / FORM ─────────────────────────────────────────── */}
      <section className="bg-slate-900 py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Get in touch
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
                Ready to Discuss Your Project?
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-emerald-500" />
              <p className="mt-5 text-sm leading-7 text-white/70">
                Tell us about your site, your existing plant, and what you need to achieve.
                We&apos;ll come back to you within one working day with practical advice -
                and a competitive quote when you&apos;re ready for one.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <span className="shrink-0 text-emerald-500"><PhoneIcon /></span>
                  <a href="tel:01256518170" className="underline hover:text-white">
                    01256 518170
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <span className="shrink-0 text-emerald-500"><MailIcon /></span>
                  <a href="mailto:info@bvs-ltd.co.uk" className="underline hover:text-white">
                    info@bvs-ltd.co.uk
                  </a>
                </div>
                <div className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-0.5 shrink-0 text-emerald-500"><PinIcon /></span>
                  <span>
                    Unit 1, The Business Centre, Morgan&apos;s Vale Rd<br />
                    Redlynch, Salisbury SP5 2HA
                  </span>
                </div>
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                  Also linked to
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
                    { href: "/solutions/ventilation/validation-surveys", label: "AHU Surveys" },
                    { href: "/solutions/mechanical/mechanical-electrical", label: "M&E Works" },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/65 transition-colors hover:border-white/30 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Quick enquiry
              </p>
              <p className="mb-6 text-sm text-slate-500">
                Describe your project and we&apos;ll be in touch within one working day.
              </p>
              <QuickQuoteForm />
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}

/* ── Icons ──────────────────────────────────────────────────────────── */

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2a7 7 0 0 1 7 7c0 4.5-7 13-7 13S5 13.5 5 9a7 7 0 0 1 7-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
