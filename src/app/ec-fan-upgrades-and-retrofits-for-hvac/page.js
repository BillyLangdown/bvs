import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "EC Fan Upgrades & Retrofits for HVAC",
  description:
    "Replace old AC induction fans with energy-efficient EC motors. Typical savings of 30–50% with payback often under 3 years. BVS survey, specify, and install across the UK.",
};

const steps = [
  {
    n: "01",
    title: "Fan Audit",
    body: "We survey your AHU fans - recording motor type, power consumption, current energy cost, and the number of fan sets requiring upgrade.",
  },
  {
    n: "02",
    title: "Energy & Payback Analysis",
    body: "We model the energy savings from EC replacement against your current consumption, producing a clear payback projection and ROI calculation.",
  },
  {
    n: "03",
    title: "Fan Selection & Specification",
    body: "EC fans are selected to match the existing duty - airflow, static pressure, and speed - with controls integration specified at the same time.",
  },
  {
    n: "04",
    title: "Installation",
    body: "Our engineers remove the existing fan and motor assembly and install the new EC unit - including all mechanical connections, electrical supply, and controls wiring.",
  },
  {
    n: "05",
    title: "Commissioning",
    body: "Full airflow commissioning with speed verification, BMS integration testing, and performance sign-off. Actual energy consumption is confirmed post-installation.",
  },
];

const benefits = [
  {
    title: "30–50% Energy Savings",
    body: "EC (electronically commutated) motors are typically 30–50% more efficient than the AC induction motors found in older AHUs - with savings that compound across every hour of operation.",
  },
  {
    title: "Payback Under 3 Years",
    body: "Most EC fan upgrades pay for themselves through energy savings within 2–3 years - often faster where units run continuously or energy costs are high.",
  },
  {
    title: "Better Speed Control",
    body: "EC fans respond precisely to control signals - modulating smoothly from minimum to maximum without the performance steps and losses of AC drives.",
  },
  {
    title: "Reduced Noise",
    body: "EC fans run more quietly at part load, reducing acoustic impact in noise-sensitive environments such as offices, hotels, and healthcare facilities.",
  },
  {
    title: "Lower Maintenance",
    body: "EC motors have fewer moving parts and no separate drive to service. Bearing life is typically longer, and fault diagnostics are often built in.",
  },
  {
    title: "Simpler Controls Integration",
    body: "EC fans communicate directly with BMS via 0–10V or Modbus signals - removing the need for a separate AC drive and simplifying controls architecture.",
  },
];

const reasons = [
  {
    title: "We understand the full system",
    body: "EC fan upgrades need to be specified in the context of the AHU's duty, controls, and ductwork. Because we build and refurbish AHUs, we specify the right fan for the whole system - not just the motor.",
  },
  {
    title: "Manufacturer-agnostic selection",
    body: "We work with EC fans from all major suppliers - Ziehl-Abegg, ebm-papst, Systemair, and others. We specify on performance and cost, not supplier relationships.",
  },
  {
    title: "Full installation scope",
    body: "We handle mechanical installation, electrical supply, controls wiring, BMS integration, and commissioning under one contract. No managing separate trades.",
  },
  {
    title: "Energy modelling included",
    body: "We provide a clear before-and-after energy model with payback projections - so you can build the business case internally before committing to the works.",
  },
];

const faqs = [
  {
    q: "How much can I save by upgrading to EC fans?",
    a: "Typically 30–50% on fan energy, which for AHUs running 24/7 translates to significant annual savings. We'll model this precisely based on your current consumption before you commit.",
  },
  {
    q: "Can EC fans be fitted to any AHU?",
    a: "In the vast majority of cases, yes. EC plug fans can replace belt-drive or direct-drive AC fan sets in most AHU configurations. We assess suitability at the audit stage.",
  },
  {
    q: "Do EC fan upgrades qualify for any funding or incentives?",
    a: "Energy efficiency upgrades may qualify for Enhanced Capital Allowances or SALIX funding in the public sector. We can provide the documentation needed to support a funding application.",
  },
  {
    q: "How disruptive is the installation?",
    a: "A single fan set typically takes one day to replace. Where multiple sets are being upgraded, we can stagger the works to keep ventilation running throughout - or complete over a planned shutdown.",
  },
  {
    q: "Do you upgrade single fans or multiple units?",
    a: "Both. We work on single-unit upgrades and multi-site rollouts. Where a portfolio of buildings is involved, we can phase the programme and provide consistent reporting across the estate.",
  },
  {
    q: "What controls do EC fans need?",
    a: "Most EC fans accept a 0–10V or Modbus control signal and integrate directly with building management systems. Where existing controls need upgrading to take advantage of EC capability, we handle that too.",
  },
];

export default function ECFanUpgradesPage() {
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
              EC Fan Upgrades & Retrofits
            </p>
            <h1 className="font-display text-5xl font-extrabold uppercase leading-none text-white sm:text-6xl">
              Replace Old Fans.
              <br />
              Save 30–50%
              <br />
              On Energy.
            </h1>
            <div className="mt-5 h-[3px] w-16 bg-emerald-500" />
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
              Upgrading from AC induction to EC fan technology is one of the most cost-effective
              energy improvements available for commercial HVAC systems. We survey, specify,
              install, and commission - with payback typically under 3 years.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                Get an energy audit
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

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/50 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-4">
              <div className="px-4 text-center first:pl-0 sm:text-left">
                <p className="font-display text-xl font-extrabold text-white">30–50%</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">Typical Energy Savings</p>
              </div>
              <div className="px-4 text-center">
                <p className="font-display text-xl font-extrabold text-white">&lt;3 Years</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">Typical Payback Period</p>
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
                The case for EC
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-slate-900 sm:text-4xl">
                Old AC fans are costing you money every hour they run.
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-emerald-700" />
              <p className="mt-5 text-base leading-7 text-slate-600">
                AC induction fan motors - the type found in most AHUs installed before 2015 -
                are significantly less efficient than modern EC technology, particularly when
                running at part load. In an AHU that operates 24 hours a day, the difference
                in energy cost is substantial.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                EC (electronically commutated) motors use permanent magnet technology and
                integral electronics to deliver precise speed control and efficiencies typically
                70–90% across the operating range - compared to 40–60% for AC induction.
                The result is lower energy bills, quieter operation, and a fan that integrates
                seamlessly with modern BMS.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
                >
                  Request an audit
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
                { stat: "30–50%", label: "Typical reduction in fan energy consumption" },
                { stat: "2–3 yrs", label: "Typical payback period through energy savings" },
                { stat: "Any AHU", label: "Compatible with virtually all AHU types" },
                { stat: "BMS ready", label: "Direct integration with building management systems" },
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
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">How it works</p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">Our EC Upgrade Process</h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="bg-white p-8">
                <span className="font-display text-5xl font-extrabold leading-none text-emerald-700/20">{step.n}</span>
                <div className="mt-1 h-[2px] w-8 bg-emerald-700" />
                <h3 className="mt-4 font-display text-base font-bold uppercase text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── MID CTA ──────────────────────────────────────────────────── */}
      <section className="bg-emerald-700 py-10">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-extrabold uppercase text-white">Want to know your payback period?</p>
              <p className="mt-1 text-sm text-white/80">We provide a free energy model before you commit to anything.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-emerald-900 transition-colors hover:bg-emerald-50">
                Request an audit
              </Link>
              <a href="tel:01256518170" className="inline-flex items-center gap-2 border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Call 01256 518170
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">Why EC?</p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">Benefits of EC Fan Technology</h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
          </div>

          <div className="grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
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
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">Why choose BVS</p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">System-Level Thinking - Not Just a Fan Swap</h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-500" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="border border-white/10 bg-white/5 p-7">
                <div className="h-[3px] w-8 bg-emerald-500" />
                <h3 className="mt-4 font-display text-base font-bold uppercase text-white">{r.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{r.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">Common questions</p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">Frequently Asked Questions</h2>
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
          <h2 className="font-display text-lg font-extrabold uppercase text-slate-900">Related Services</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/air-handling-unit-controller-solutions-upgrades", label: "Controller Solutions" },
              { href: "/solutions/ventilation/validation-surveys", label: "AHU Surveys" },
              { href: "/air-handling-unit-installation", label: "AHU Installation" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="flex items-center justify-between border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 transition-colors hover:border-emerald-200 hover:bg-emerald-50">
                {l.label}<span className="ml-3 shrink-0 text-emerald-700">→</span>
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
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">Get in touch</p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">Ready to Cut Your Fan Energy Costs?</h2>
              <div className="mt-3 h-[3px] w-12 bg-emerald-500" />
              <p className="mt-5 text-sm leading-7 text-white/70">
                Tell us about your AHUs - how many fans, current motor type, and operating hours. We&apos;ll model the savings and tell you what payback looks like.
              </p>
              <div className="mt-8 grid gap-4">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <span className="shrink-0 text-emerald-500"><PhoneIcon /></span>
                  <a href="tel:01256518170" className="underline hover:text-white">01256 518170</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <span className="shrink-0 text-emerald-500"><MailIcon /></span>
                  <a href="mailto:info@bvs-ltd.co.uk" className="underline hover:text-white">info@bvs-ltd.co.uk</a>
                </div>
              </div>
            </div>
            <div className="bg-white p-8">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">Quick enquiry</p>
              <p className="mb-6 text-sm text-slate-500">Describe your fans and we&apos;ll be in touch within one working day.</p>
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
