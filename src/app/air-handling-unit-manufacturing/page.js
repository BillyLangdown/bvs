import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

export const metadata = {
  title: "AHU Manufacturing",
  description:
    "Bespoke air handling units designed and manufactured in the UK by BVS. When off-the-shelf doesn't fit your building, we build to your exact specification.",
};

const steps = [
  {
    n: "01",
    title: "Design Brief",
    body: "We start with your building's requirements - airflow rates, temperature conditions, space constraints, and access limitations. Nothing is assumed.",
  },
  {
    n: "02",
    title: "Engineering & Specification",
    body: "Our engineers specify every component: fan selection, coil sizing, filter efficiency, controls, casing dimensions, and material finishes.",
  },
  {
    n: "03",
    title: "Drawing Approval",
    body: "Full GA drawings and performance schedules issued for your review and approval before a single piece of metal is cut.",
  },
  {
    n: "04",
    title: "Manufacture",
    body: "Built in the UK at our facility - panels, frameworks, fan arrangements, and coil connections assembled by engineers who understand HVAC.",
  },
  {
    n: "05",
    title: "Factory Testing",
    body: "Fan performance, airflow, and controls tested at the factory before despatch. Problems are far cheaper to fix here than on-site.",
  },
  {
    n: "06",
    title: "Delivery & Installation",
    body: "We deliver and install - our manufacturing and installation teams work together, so there's no handoff risk between design, build, and fit.",
  },
];

const capabilities = [
  {
    title: "Non-Standard Dimensions",
    body: "Low-profile units for ceiling voids, extra-long sections for large plantrooms, split sections for restricted access - we build to fit your space.",
  },
  {
    title: "Bespoke Coil Configurations",
    body: "Heating, cooling, heat recovery, or combinations of all three - coils sized precisely for your duty and available services.",
  },
  {
    title: "EC Fan Arrays",
    body: "High-efficiency EC plug fan arrays for maximum energy performance and redundancy - individually matched to the unit's duty.",
  },
  {
    title: "High-Filtration Sections",
    body: "HEPA and EPA filtration configurations for cleanroom, pharmaceutical, and healthcare applications where standard filters aren't adequate.",
  },
  {
    title: "Acoustic Treatment",
    body: "Acoustic linings, attenuators, and vibration isolation for noise-sensitive environments including hotels, offices, and hospitals.",
  },
  {
    title: "Corrosion-Resistant Finishes",
    body: "Marine-grade or food-safe stainless steel construction for coastal, food production, and chemical environments.",
  },
  {
    title: "Integrated Controls",
    body: "Full DDC controls packages designed alongside the unit - not retrofitted after - with BMS connectivity and remote diagnostics.",
  },
  {
    title: "Replacement Sections",
    body: "Individual sections to replace within an existing frame - extend the life of the structure while replacing only the failing components.",
  },
];

const reasons = [
  {
    title: "40+ years of AHU manufacturing",
    body: "We've been manufacturing air handling units since the 1980s. That experience shows in the details - component selection, fabrication quality, and knowledge of what works in the real world.",
  },
  {
    title: "We also install what we build",
    body: "Because we handle installation too, our manufacturing team designs with installation in mind - access for commissioning, space for maintenance, and connections in the right places.",
  },
  {
    title: "No middlemen",
    body: "You deal directly with the engineers who design and build your unit - not a sales team quoting from a catalogue. When you have a question, the answer comes from someone who knows.",
  },
  {
    title: "Built in the UK",
    body: "Shorter lead times, easier communication, and the ability to visit the factory during manufacture if required. No customs complications, no transatlantic logistics.",
  },
];

const faqs = [
  {
    q: "How long does it take to manufacture a bespoke AHU?",
    a: "Typically 6–14 weeks from drawing approval to delivery, depending on complexity and current production schedule. We'll confirm lead times at the quotation stage.",
  },
  {
    q: "Can you match an existing unit's footprint exactly?",
    a: "Yes - we can manufacture to any dimensions, including units designed to slide into an existing frame or occupy a space previously held by a competitor's unit.",
  },
  {
    q: "What standards do your AHUs comply with?",
    a: "Our units are designed to comply with EN 1886 (mechanical performance), EN 13053 (classification), and CIBSE design guidance. We can design to specific project specs where required.",
  },
  {
    q: "Can you supply just the unit, without installation?",
    a: "Yes. We supply AHUs as supply-only to M&E contractors and direct clients. Where you need installation too, we can provide a turnkey package.",
  },
  {
    q: "Do you provide maintenance after manufacture?",
    a: "We offer planned preventative maintenance (PPM) contracts. Having the manufacturer maintain the unit means faster fault diagnosis and genuine parts.",
  },
  {
    q: "Can you manufacture replacement sections for an old AHU?",
    a: "Yes - we regularly manufacture individual sections (fan sections, coil sections, filter housings) to fit within an existing AHU structure. Send us drawings or we'll survey in person.",
  },
];

export default function AHUManufacturingPage() {
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
              AHU Manufacturing
            </p>
            <h1 className="font-display text-5xl font-extrabold uppercase leading-none text-white sm:text-6xl">
              Bespoke AHUs.
              <br />
              Built in the UK.
              <br />
              Built for You.
            </h1>
            <div className="mt-5 h-[3px] w-16 bg-emerald-500" />
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
              When off-the-shelf units don&apos;t fit your space, your duty, or your budget -
              we design and manufacture air handling units to your exact specification.
              No compromises.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                Discuss your specification
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
                <p className="font-display text-xl font-extrabold text-white">40+</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">Years Manufacturing</p>
              </div>
              <div className="px-4 text-center">
                <p className="font-display text-xl font-extrabold text-white">UK Built</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">Manufactured in Britain</p>
              </div>
              <div className="px-4 text-center last:pr-0 sm:text-right">
                <p className="font-display text-xl font-extrabold text-white">Bespoke</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/60">To Your Exact Spec</p>
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
                When standard units don&apos;t work
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-slate-900 sm:text-4xl">
                Every building is different. Your AHU should be too.
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-emerald-700" />
              <p className="mt-5 text-base leading-7 text-slate-600">
                Off-the-shelf air handling units are designed around the most common scenarios.
                When your plantroom has unusual dimensions, your duty requires a specific coil
                configuration, or your access routes make standard units impossible to install -
                a bespoke unit is the right answer.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We manufacture AHUs from first principles - working from your airflow requirements,
                spatial constraints, and energy targets to specify and build exactly what your
                building needs.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
                >
                  Start a conversation
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
                { stat: "Any size", label: "Non-standard dimensions and configurations" },
                { stat: "UK built", label: "Shorter lead times, easier communication" },
                { stat: "6–14 wks", label: "Typical manufacture lead time" },
                { stat: "Turnkey", label: "Manufacturing + installation in one contract" },
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
              From brief to building
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">
              Our Manufacturing Process
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
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

      {/* ── MID CTA ──────────────────────────────────────────────────── */}
      <section className="bg-emerald-700 py-10">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-extrabold uppercase text-white">
                Have an unusual or challenging specification?
              </p>
              <p className="mt-1 text-sm text-white/80">
                Tell us what you need - we&apos;ll tell you if we can build it (and we usually can).
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-emerald-900 transition-colors hover:bg-emerald-50"
              >
                Discuss your project
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

      {/* ── CAPABILITIES ─────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              What we can build
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">
              Manufacturing Capabilities
            </h2>
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
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Why choose BVS
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
              A Manufacturer Who Also Installs
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
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/air-handling-unit-installation", label: "AHU Installation" },
              { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
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
              <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">Tell Us What You Need to Build</h2>
              <div className="mt-3 h-[3px] w-12 bg-emerald-500" />
              <p className="mt-5 text-sm leading-7 text-white/70">
                Share your airflow requirements, space constraints, and timeline. We&apos;ll come back with a specification and indicative pricing - no obligation.
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
              <p className="mb-6 text-sm text-slate-500">Describe your requirements and we&apos;ll be in touch within one working day.</p>
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
