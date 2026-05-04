import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "AHU Refurbishment",
  description:
    "Extend your air handling unit's life by 10–15 years at around 40% of replacement cost. BVS survey, specify, and refurbish on-site with minimal disruption. UK nationwide.",
};

const steps = [
  {
    n: "01",
    title: "Site Survey",
    body: "Our engineers visit to assess the AHU's current condition - fans, coils, filters, controls, casing, and structural frame. We record exactly what needs attention and what can be retained.",
  },
  {
    n: "02",
    title: "Specification & Quote",
    body: "A detailed refurbishment specification with itemised costings. No hidden extras - you'll know exactly what's being replaced, upgraded, or refurbished before we start.",
  },
  {
    n: "03",
    title: "Programme Planning",
    body: "We plan the works around your operational hours. Most refurbishments can be staged to keep your building's ventilation running throughout - or completed over a planned shutdown.",
  },
  {
    n: "04",
    title: "Refurbishment Works",
    body: "Our engineers carry out all mechanical and electrical works on-site - fan replacements, coil swaps, casing repairs, controls upgrades, insulation, and associated pipework.",
  },
  {
    n: "05",
    title: "Testing & Commissioning",
    body: "Full system recommissioning with airflow measurement, controls testing, and performance verification against your original (or improved) design specification.",
  },
  {
    n: "06",
    title: "Handover",
    body: "Commissioning records, maintenance recommendations, and warranty documentation. An optional PPM contract means the team who knows your plant keeps it running.",
  },
];

const scope = [
  {
    title: "Fan & Motor Replacement",
    body: "Swap failing or inefficient fans for high-efficiency EC or AC replacements - often delivering 30–50% energy savings alongside the refurbishment.",
  },
  {
    title: "Coil Replacement",
    body: "Heating, cooling, and heat recovery coils measured, manufactured or sourced, and replaced as part of the refurbishment scope.",
  },
  {
    title: "Filter Section Upgrade",
    body: "Filter housings and media upgraded to current efficiency standards - improving air quality and protecting downstream components.",
  },
  {
    title: "Casing & Insulation",
    body: "Repairs to corroded or damaged casing panels, replacement of failed insulation, and resealing of joints to stop thermal bridging and condensation.",
  },
  {
    title: "Controls Modernisation",
    body: "Replacement of obsolete controls with modern DDC systems including BMS integration, remote monitoring, and fault diagnostics.",
  },
  {
    title: "Damper & Actuator Works",
    body: "Inspection and replacement of damper blades, actuators, and linkages that are worn, seized, or failing.",
  },
  {
    title: "Humidifier Systems",
    body: "Service, repair, or replacement of humidifier components - from steam generators to UV systems and water treatment.",
  },
  {
    title: "Associated Pipework",
    body: "All pipework connections, thermal insulation, and pressure testing required to support the refurbished plant.",
  },
];

const reasons = [
  {
    title: "We manufacture - so we understand the equipment",
    body: "BVS builds its own air handling units. That means our refurbishment engineers understand how AHUs work at a component level - not just how to swap parts out.",
  },
  {
    title: "40+ years of refurbishment experience",
    body: "We've refurbished AHUs in hospitals, hotels, offices, universities, and industrial facilities. If there's a make or model you're worried about, we've probably seen it.",
  },
  {
    title: "On-site, not off-site",
    body: "We refurbish your unit in place - no craning it out, no expensive hire of temporary plant, no weeks without ventilation. Works happen where the AHU lives.",
  },
  {
    title: "Extend life by 10–15+ years",
    body: "A properly executed refurbishment will add 10–15 years of reliable service. That's often more than a decade of deferred capital expenditure.",
  },
];

const faqs = [
  {
    q: "How much does AHU refurbishment cost compared to replacement?",
    a: "Typically around 30–50% of the cost of a new unit, depending on what's needed. The exact figure depends on the unit's size and condition - we'll give you a detailed, itemised quote after the survey.",
  },
  {
    q: "How long does a refurbishment take?",
    a: "Most refurbishments can be completed in 1–5 days depending on scope. We'll give you a realistic programme at the quotation stage based on the specific works required.",
  },
  {
    q: "Can you refurbish any make of AHU?",
    a: "Yes. We work across all makes and models - Daikin, Carrier, Stulz, Mitsubishi, Swegon, and many others including discontinued units where parts are hard to source. Our manufacturing capability means we can fabricate bespoke replacements when needed.",
  },
  {
    q: "Will we need to shut the building down?",
    a: "Not necessarily. Many refurbishments can be staged so at least part of the ventilation system stays live. Where a full shutdown is required, we'll plan it around your operational hours - nights or weekends if needed.",
  },
  {
    q: "Is refurbishment worth it if the unit is old?",
    a: "Often yes - particularly where the structure and casing are sound. We'll tell you honestly if replacement is the better option. We have no incentive to push refurbishment over replacement if it's not right for your building.",
  },
  {
    q: "Can energy-saving upgrades be included?",
    a: "Absolutely. EC fan upgrades and modern controls are often incorporated into the refurbishment scope - and the energy savings can significantly offset the cost of the works.",
  },
];

export default function AHURefurbishmentPage() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/hero.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/30" />

        <Container className="relative flex min-h-[580px] items-end py-20 pb-28">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              AHU Refurbishment
            </p>
            <h1 className="font-display text-5xl font-extrabold uppercase leading-none text-white sm:text-6xl">
              Extend Your AHU&apos;s Life.
              <br />
              Not Your Budget.
            </h1>
            <div className="mt-5 h-[3px] w-16 bg-emerald-500" />
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
              Refurbishing your existing air handling unit typically costs 30–50% of full
              replacement - and adds 10–15 years of reliable service life. We survey, specify,
              and execute on-site with minimal disruption.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                Get a refurbishment quote
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
                <p className="font-display text-xl font-extrabold text-white">40%</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">Of Replacement Cost</p>
              </div>
              <div className="px-4 text-center">
                <p className="font-display text-xl font-extrabold text-white">10–15 Yrs</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">Extended Service Life</p>
              </div>
              <div className="px-4 text-center last:pr-0 sm:text-right">
                <p className="font-display text-xl font-extrabold text-white">UK Wide</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">Nationwide Coverage</p>
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
                The case for refurbishment
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-slate-900 sm:text-4xl">
                Is your AHU ageing - but not yet ready to be replaced?
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-emerald-700" />
              <p className="mt-5 text-base leading-7 text-slate-600">
                Most AHUs have a service life of 20–25 years - but ageing components, failing fans,
                corroded coils, and obsolete controls drag performance down long before the unit
                is truly end-of-life. Refurbishment restores performance without the cost and
                disruption of full replacement.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We survey your unit, tell you exactly what it needs, and execute the works on-site.
                Everything from EC fan upgrades and coil replacements to controls modernisation and
                casing repairs - under one contract, with one accountable team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
                >
                  Request a survey
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
                { stat: "30–50%", label: "Typical cost saving vs. full replacement" },
                { stat: "10–15+", label: "Years of additional service life" },
                { stat: "1–5 days", label: "Typical on-site refurbishment time" },
                { stat: "Any make", label: "We refurbish all brands and models" },
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
              Our Refurbishment Process
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
              Every refurbishment starts with a thorough site survey - so there are no surprises
              when the work begins.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="bg-white p-8">
                <span className="font-display text-5xl font-extrabold leading-none text-emerald-700/20">
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
                Not sure if refurbishment is right for your AHU?
              </p>
              <p className="mt-1 text-sm text-white/80">
                We&apos;ll survey it and give you an honest assessment - with costs for both refurbishment and replacement.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-emerald-900 transition-colors hover:bg-emerald-50"
              >
                Book a survey
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
              What&apos;s included
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">
              Refurbishment Scope
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
              Every refurbishment is different - we specify exactly what&apos;s needed for your
              unit. Common elements include:
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
              We Build AHUs - So We Know How to Fix Them
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-500" />
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

      {/* ── RELATED ──────────────────────────────────────────────────── */}
      <section className="bg-white py-12">
        <Container>
          <h2 className="font-display text-lg font-extrabold uppercase text-slate-900">
            Related Services
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/air-handling-unit-manufacturing", label: "AHU Manufacturing" },
              { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
              { href: "/air-handling-unit-controller-solutions-upgrades", label: "Controller Solutions" },
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
                Ready to Discuss Your AHU?
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-emerald-500" />
              <p className="mt-5 text-sm leading-7 text-white/70">
                Tell us about your unit - make, model, age, and what you&apos;re experiencing.
                We&apos;ll come back to you within one working day with honest advice and a
                quotation when you&apos;re ready.
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
              </div>
            </div>

            <div className="bg-white p-8">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Quick enquiry
              </p>
              <p className="mb-6 text-sm text-slate-500">
                Describe your AHU and we&apos;ll be in touch within one working day.
              </p>
              <QuickQuoteForm />
            </div>
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
