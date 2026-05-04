import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "AHU Coil Replacement & Repair",
  description:
    "Fast, accurate AHU coil replacement from BVS. We measure on-site, manufacture or source to fit, and replace - getting your ventilation system back online quickly. UK nationwide.",
};

const steps = [
  {
    n: "01",
    title: "Emergency Contact",
    body: "Call us or send an enquiry. We triage quickly - if you're dealing with a failed coil and a building offline, we prioritise accordingly.",
  },
  {
    n: "02",
    title: "Site Visit & Measurement",
    body: "An engineer visits to measure the coil in situ - connection positions, fin spacing, header configuration, and duty requirements. We take the data we need to specify a replacement.",
  },
  {
    n: "03",
    title: "Source or Manufacture",
    body: "We check our supplier network for a suitable coil. If one isn't available to the right specification, we manufacture to measure at our UK facility.",
  },
  {
    n: "04",
    title: "Replacement",
    body: "Our engineers remove the failed coil, install the replacement, make all pipe connections, and reinsulate. The unit is left clean and ready for commissioning.",
  },
  {
    n: "05",
    title: "Test & Commission",
    body: "Full pressure testing, flow balancing, and system recommissioning - with signed-off performance results before we leave site.",
  },
];

const coilTypes = [
  {
    title: "Heating Coils",
    body: "LTHW, MTHW, and steam heating coils - single and multi-row, copper tube with aluminium or copper fins.",
  },
  {
    title: "Cooling Coils",
    body: "Chilled water cooling coils, DX coils, and condensing coils for comfort cooling and process applications.",
  },
  {
    title: "Heat Recovery Coils",
    body: "Run-around coil circuits with glycol or water connections for heat recovery between supply and extract AHUs.",
  },
  {
    title: "Frost Coils & Pre-Heaters",
    body: "Low-duty preheat coils to protect downstream components from frost damage in cold climate applications.",
  },
  {
    title: "Electric Heater Batteries",
    body: "Electric heating elements for supplementary heating duties or where hot water services aren't available.",
  },
  {
    title: "Condenser & Evaporator Coils",
    body: "Refrigerant coils for DX systems - matched to the manufacturer's specification or bespoke where required.",
  },
  {
    title: "Custom Configurations",
    body: "Unusual connection positions, non-standard casings, split coils, or multi-circuit requirements - we manufacture to fit.",
  },
  {
    title: "All Makes & Models",
    body: "We've replaced coils in AHUs from every major manufacturer - including discontinued units where original coils are no longer available.",
  },
];

const reasons = [
  {
    title: "Measure-to-manufacture capability",
    body: "Because we manufacture AHUs, we can manufacture coils too. When the right coil isn't available off the shelf, we build one - to your exact measurements and duty.",
  },
  {
    title: "Fast response when you need it",
    body: "A failed coil often means a building offline. We understand the urgency and work to get you back up as quickly as possible - no weeks-long lead times if we can avoid it.",
  },
  {
    title: "Any make, any model",
    body: "We're not limited to a specific manufacturer's range. We replace coils in units from all brands - including those where original replacement parts are no longer available.",
  },
  {
    title: "One team, complete scope",
    body: "We measure, source or manufacture, deliver, and install - under one contract. You don't need to manage a coil supplier, a pipework contractor, and an installer separately.",
  },
];

const faqs = [
  {
    q: "How quickly can you replace an AHU coil?",
    a: "It depends on whether we can source a coil from stock or need to manufacture one. In some cases we can source and replace within a few days. If manufacture is required, typically 2–4 weeks. We'll give you a realistic timeline after the site visit.",
  },
  {
    q: "Can you replace a coil in any make of AHU?",
    a: "Yes. We've replaced coils in AHUs from Daikin, Carrier, Stulz, Mitsubishi, Swegon, Trane, and many others - including discontinued units where original parts are no longer manufactured.",
  },
  {
    q: "Do you repair coils, or only replace them?",
    a: "Minor coil repairs (re-expanding fins, re-brazing connections) are possible in some circumstances, but we usually recommend replacement - repaired coils rarely deliver the same long-term performance as a new one.",
  },
  {
    q: "Can you replace just the coil, or does the whole section need replacing?",
    a: "Usually just the coil. We remove the existing coil, install the replacement in the same position, and reconnect. In some cases where the coil section casing is also damaged, we'll discuss the options with you.",
  },
  {
    q: "Do you carry out the pipework connections as well?",
    a: "Yes - we handle all associated pipework reconnections, thermal insulation, and pressure testing. You don't need a separate pipework contractor.",
  },
  {
    q: "What if the coil specification is unknown?",
    a: "Our engineers can work from the original AHU data if available, or determine the correct specification from the duty requirements and system conditions. We've done this many times for legacy units where records no longer exist.",
  },
];

export default function AHUCoilReplacementPage() {
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
              AHU Coil Replacement & Repair
            </p>
            <h1 className="font-display text-5xl font-extrabold uppercase leading-none text-white sm:text-6xl">
              Coil Failed?
              <br />
              We Measure,
              <br />
              Source &amp; Replace.
            </h1>
            <div className="mt-5 h-[3px] w-16 bg-emerald-500" />
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
              A failed coil brings your whole ventilation system down. We visit, measure,
              source or manufacture a replacement, and get you back online - without the
              wait for an OEM part that may no longer exist.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                Request coil replacement
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
                <p className="font-display text-xl font-extrabold text-white">Any Make</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">All Brands & Models</p>
              </div>
              <div className="px-4 text-center">
                <p className="font-display text-xl font-extrabold text-white">Measure-Fit</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">Bespoke Manufacture</p>
              </div>
              <div className="px-4 text-center last:pr-0 sm:text-right">
                <p className="font-display text-xl font-extrabold text-white">UK Wide</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">Nationwide Response</p>
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
                The problem with coil failure
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-slate-900 sm:text-4xl">
                When a coil fails, your ventilation stops. We get it running again.
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-emerald-700" />
              <p className="mt-5 text-base leading-7 text-slate-600">
                Coil failures - whether from corrosion, mechanical damage, or age - are rarely
                planned. And when you need a replacement for a coil in a unit that&apos;s 15 years
                old, the original manufacturer may no longer stock it. That&apos;s where we come in.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We visit the site, take precise measurements, check our supplier network, and - if
                we can&apos;t find the right coil - we manufacture one. Our UK facility means we can
                build to measure without waiting on overseas suppliers or obsolete part numbers.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
                >
                  Get in touch now
                </Link>
                <a
                  href="tel:01256518170"
                  className="inline-flex items-center gap-2 border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                >
                  Call 01256 518170
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "All types", label: "Heating, cooling, heat recovery & electric" },
                { stat: "Any age", label: "Legacy units with discontinued parts" },
                { stat: "UK built", label: "Manufactured to measure at our UK facility" },
                { stat: "1 team", label: "Measurement, supply, and installation" },
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
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">From Failure to Fixed</h2>
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
              <p className="font-display text-xl font-extrabold uppercase text-white">Dealing with a failed coil right now?</p>
              <p className="mt-1 text-sm text-white/80">Call us directly - we&apos;ll triage quickly and advise on next steps.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:01256518170" className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-emerald-900 transition-colors hover:bg-emerald-50">
                Call 01256 518170
              </a>
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Send an enquiry
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── COIL TYPES ───────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">Coil types</p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">We Replace All Types of Coil</h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
          </div>

          <div className="grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {coilTypes.map((item) => (
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
            <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">When You Can&apos;t Get the Part, We Build It</h2>
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
              { href: "/air-handling-unit-manufacturing", label: "AHU Manufacturing" },
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
              <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">Tell Us About Your Coil Problem</h2>
              <div className="mt-3 h-[3px] w-12 bg-emerald-500" />
              <p className="mt-5 text-sm leading-7 text-white/70">
                Tell us the AHU make and model, the coil type, and what&apos;s happened - we&apos;ll advise on the fastest path to getting you back online.
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
              <p className="mb-6 text-sm text-slate-500">Describe your coil issue and we&apos;ll be in touch within one working day.</p>
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
