import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "AHU Controller Solutions & Upgrades",
  description:
    "Modernise ageing AHU controls for better energy performance, fault detection, and BMS integration. BVS controller solutions pay for themselves. UK nationwide.",
};

const steps = [
  {
    n: "01",
    title: "Controls Assessment",
    body: "We survey your existing control system - controller type, sensor condition, actuator performance, BMS connectivity, and any known faults or limitations.",
  },
  {
    n: "02",
    title: "Specification",
    body: "A new controls specification is produced covering the replacement controller, sensors, actuators, I/O requirements, sequence of operation, and BMS interface.",
  },
  {
    n: "03",
    title: "Programme & Pricing",
    body: "We quote the full scope including panel build, installation, commissioning, and any associated electrical works - with a clear programme that minimises disruption.",
  },
  {
    n: "04",
    title: "Panel Build & Installation",
    body: "New control panels built to our specification, installed alongside the AHU with all field wiring, sensor installation, and actuator connections completed by our engineers.",
  },
  {
    n: "05",
    title: "Commissioning & BMS Integration",
    body: "Full system commissioning with sequence testing, setpoint configuration, alarm setup, and BMS integration verified. Engineers don't sign off until everything works.",
  },
  {
    n: "06",
    title: "Handover & Training",
    body: "O&M documentation, as-wired drawings, and operator training provided. Your facilities team will know exactly how the new system works and what to expect from it.",
  },
];

const capabilities = [
  {
    title: "DDC Controller Replacement",
    body: "Modern direct digital controllers replacing obsolete pneumatic, electronic, or proprietary controllers - often with better functionality at lower cost.",
  },
  {
    title: "BMS Integration",
    body: "Native BACnet, Modbus, or BACIP integration with your building management system - enabling centralised monitoring, scheduling, and energy management.",
  },
  {
    title: "Sequence of Operation Optimisation",
    body: "Review and improvement of heating, cooling, economiser, and ventilation sequences to reduce energy waste while maintaining comfort conditions.",
  },
  {
    title: "Sensor Replacement",
    body: "Temperature, humidity, CO2, pressure, and airflow sensors replaced for improved accuracy and reliability - critical for demand-controlled ventilation.",
  },
  {
    title: "Actuator & Damper Works",
    body: "Replacement of failed or sticky actuators and damper blades - ensuring the control system's outputs are actually achieved in the air stream.",
  },
  {
    title: "Fault Detection & Diagnostics",
    body: "Modern controllers include built-in fault detection - alerting your team to sensor failures, actuator problems, and performance deviations before they become costly breakdowns.",
  },
  {
    title: "Demand-Controlled Ventilation",
    body: "CO2-based demand control reduces ventilation rates (and energy use) during periods of low occupancy - often the single biggest operational saving available.",
  },
  {
    title: "Remote Monitoring",
    body: "Web-based or BMS-connected remote access to unit status, setpoints, alarms, and energy data - visible on desktop, tablet, or phone.",
  },
];

const reasons = [
  {
    title: "Controls and mechanical in one team",
    body: "Most controls contractors don't touch the mechanical side, and mechanical contractors don't touch controls. We do both - which means the sequence of operation is specified with real knowledge of the plant it controls.",
  },
  {
    title: "Energy savings that pay for the upgrade",
    body: "Optimised sequences, demand-controlled ventilation, and accurate sensors typically reduce AHU energy consumption by 15–30%. The upgrade often pays for itself within 2–4 years.",
  },
  {
    title: "Open protocols, no proprietary lock-in",
    body: "We specify open BACnet or Modbus controllers - not proprietary systems that lock you into one supplier for life. You can change maintenance providers or integrate with any BMS.",
  },
  {
    title: "40+ years of AHU knowledge",
    body: "Understanding the right controls sequence for a given AHU type comes from understanding how air handling units actually work. That's 40 years of accumulated knowledge applied to every controls project we do.",
  },
];

const faqs = [
  {
    q: "My AHU controls are old but still working - should I upgrade?",
    a: "Often yes. Ageing controllers typically run fixed schedules with poor setpoint accuracy, wasting energy 24 hours a day. The upgrade cost is usually recovered within 2–4 years through energy savings alone.",
  },
  {
    q: "Can you integrate with our existing BMS?",
    a: "In the vast majority of cases, yes. We specify BACnet and Modbus controllers that integrate with all major BMS platforms - Trend, Siemens, Honeywell, Schneider, and others.",
  },
  {
    q: "Do you do the electrical works as well?",
    a: "Yes. We handle panel builds, field wiring, sensor installation, and actuator connections under one contract. You don't need a separate electrical contractor.",
  },
  {
    q: "How long does a controls upgrade take?",
    a: "A single AHU controls replacement typically takes 2–5 days. More complex projects with multiple units or extensive BMS integration take longer - we'll programme accurately at the quotation stage.",
  },
  {
    q: "Will the AHU need to go offline during the upgrade?",
    a: "Yes, but we minimise the outage. We pre-build panels off-site and prepare the installation so the offline period is as short as possible - often just 1–2 days for the final changeover.",
  },
  {
    q: "Can you upgrade just the controls without touching the mechanical plant?",
    a: "Yes. Controls upgrades are often done as a standalone project. However, we'll always flag if we identify mechanical issues during the assessment - it's usually worth addressing them at the same time.",
  },
];

export default function ControllerSolutionsPage() {
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
              AHU Controller Solutions & Upgrades
            </p>
            <h1 className="font-display text-5xl font-extrabold uppercase leading-none text-white sm:text-6xl">
              Modern Controls.
              <br />
              Better Performance.
              <br />
              Lower Bills.
            </h1>
            <div className="mt-5 h-[3px] w-16 bg-emerald-500" />
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
              Ageing AHU controls waste energy, generate unnecessary callouts, and give you
              no visibility into how your plant is performing. We replace obsolete controllers
              with modern DDC systems that integrate with your BMS and pay for themselves.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                Discuss a controls upgrade
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
                <p className="font-display text-xl font-extrabold text-white">15–30%</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">Typical Energy Reduction</p>
              </div>
              <div className="px-4 text-center">
                <p className="font-display text-xl font-extrabold text-white">BMS Ready</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">Open Protocol Integration</p>
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
                The controls problem
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-slate-900 sm:text-4xl">
                Your AHU is only as good as the controls running it.
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-emerald-700" />
              <p className="mt-5 text-base leading-7 text-slate-600">
                An AHU with excellent mechanical plant but poor controls will still run
                inefficiently - heating and cooling simultaneously, running at full speed
                when the building is empty, and giving your facilities team no warning
                before a fault becomes a failure.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Modern DDC controllers change all of that. Accurate sensing, optimised
                sequences, demand-controlled ventilation, fault detection, and full BMS
                integration turn your AHU from a passive piece of plant into an actively
                managed energy asset.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
                >
                  Request a controls assessment
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
                { stat: "15–30%", label: "Typical energy reduction from controls optimisation" },
                { stat: "2–4 yrs", label: "Typical payback period through savings" },
                { stat: "Open", label: "BACnet & Modbus - no proprietary lock-in" },
                { stat: "Visible", label: "Remote monitoring and fault detection included" },
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
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">Our Controls Upgrade Process</h2>
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
              <p className="font-display text-xl font-extrabold uppercase text-white">Controls issues costing you callouts?</p>
              <p className="mt-1 text-sm text-white/80">We assess your system and tell you honestly what needs to change - and what doesn&apos;t.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-emerald-900 transition-colors hover:bg-emerald-50">
                Book an assessment
              </Link>
              <a href="tel:01256518170" className="inline-flex items-center gap-2 border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Call 01256 518170
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CAPABILITIES ─────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">What we deliver</p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">Controls Capabilities</h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
          </div>

          <div className="grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
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
            <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">Controls Engineers Who Understand the Plant</h2>
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

          <div className="mt-12 border-t border-white/10 pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">Trusted by</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {["NHS", "Marriott", "Disney", "Warner Bros", "Alpine F1", "Queen Mary", "Brooklands"].map((c) => (
                <span key={c} className="border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/70">{c}</span>
              ))}
            </div>
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
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/solutions/ventilation/validation-surveys", label: "AHU Surveys" },
              { href: "/solutions/mechanical/mechanical-electrical", label: "M&E Solutions" },
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
              <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">Discuss Your AHU Controls</h2>
              <div className="mt-3 h-[3px] w-12 bg-emerald-500" />
              <p className="mt-5 text-sm leading-7 text-white/70">
                Tell us about your existing control system - make, age, what&apos;s not working, and what BMS you have. We&apos;ll advise on the best path forward.
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
              <p className="mb-6 text-sm text-slate-500">Describe your controls issue and we&apos;ll be in touch within one working day.</p>
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
