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

/* ── DATA ───────────────────────────────────────────────────────────── */

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

const scope = [
  {
    title: "Fan & Motor Replacement",
    body: "Swap failing or inefficient fans for high-efficiency EC or AC replacements — often delivering 30–50% energy savings alongside the refurbishment.",
  },
  {
    title: "Coil Replacement",
    body: "Heating, cooling, and heat recovery coils measured, manufactured or sourced, and replaced as part of the refurbishment scope.",
  },
  {
    title: "Filter Section Upgrade",
    body: "Filter housings and media upgraded to current efficiency standards — improving air quality and protecting downstream components.",
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
    body: "Service, repair, or replacement of humidifier components — from steam generators to UV systems and water treatment.",
  },
  {
    title: "Associated Pipework",
    body: "All pipework connections, thermal insulation, and pressure testing required to support the refurbished plant.",
  },
];

const steps = [
  {
    n: "01",
    title: "Site Survey",
    body: "Our engineers assess the AHU's current condition — fans, coils, filters, controls, casing, and structural frame. We record exactly what needs attention and what can be retained.",
  },
  {
    n: "02",
    title: "Specification & Quote",
    body: "A detailed refurbishment specification with itemised costings. No hidden extras — you'll know exactly what's being replaced, upgraded, or refurbished before we start.",
  },
  {
    n: "03",
    title: "Programme Planning",
    body: "We plan works around your operational hours. Most refurbishments can be staged to keep ventilation running — or completed over a planned shutdown.",
  },
  {
    n: "04",
    title: "Refurbishment Works",
    body: "Our engineers carry out all mechanical and electrical works on-site — fan replacements, coil swaps, casing repairs, controls upgrades, insulation, and pipework.",
  },
  {
    n: "05",
    title: "Testing & Commissioning",
    body: "Full system recommissioning with airflow measurement, controls testing, and performance verification against your original or improved design specification.",
  },
  {
    n: "06",
    title: "Handover",
    body: "Commissioning records, maintenance recommendations, and warranty documentation. An optional PPM contract keeps the team who knows your plant in place.",
  },
];

const reasons = [
  {
    title: "We build AHUs — so we understand them",
    body: "BVS manufactures its own air handling units. Our refurbishment engineers understand how AHUs work at a component level — not just how to swap parts out.",
  },
  {
    title: "40+ years of refurbishment experience",
    body: "We've refurbished AHUs in hospitals, hotels, offices, universities, and industrial facilities. If there's a make or model you're worried about, we've probably seen it.",
  },
  {
    title: "On-site, not off-site",
    body: "We refurbish your unit in place — no craning it out, no expensive temporary plant, no weeks without ventilation. Works happen where the AHU lives.",
  },
  {
    title: "Fully in-house team",
    body: "No subcontractors. Every engineer on your project is a BVS employee — giving you one accountable point of contact from survey to handover.",
  },
];

const faqs = [
  {
    q: "How much does AHU refurbishment cost compared to replacement?",
    a: "Typically around 30–50% of the cost of a new unit, depending on what's needed. The exact figure depends on the unit's size and condition — we'll give you a detailed, itemised quote after the survey.",
  },
  {
    q: "How long does a refurbishment take?",
    a: "Most refurbishments can be completed in 1–5 days depending on scope. We'll give you a realistic programme at the quotation stage based on the specific works required.",
  },
  {
    q: "Can you refurbish any make of AHU?",
    a: "Yes. We work across all makes and models — Daikin, Carrier, Stulz, Mitsubishi, Swegon, and many others including discontinued units. Our manufacturing capability means we can fabricate bespoke replacements when needed.",
  },
  {
    q: "Will we need to shut the building down?",
    a: "Not necessarily. Many refurbishments can be staged so at least part of the ventilation stays live. Where a full shutdown is required, we plan it around your operational hours — nights or weekends if needed.",
  },
  {
    q: "Is refurbishment worth it if the unit is old?",
    a: "Often yes — particularly where the structure and casing are sound. We'll tell you honestly if replacement is the better option. We have no incentive to push refurbishment if it's not right for your building.",
  },
  {
    q: "Can energy-saving upgrades be included?",
    a: "Absolutely. EC fan upgrades and modern controls are often incorporated into the refurbishment scope — and the energy savings can significantly offset the cost of the works.",
  },
];

const sectors = [
  { label: "Healthcare & NHS", desc: "HTM 03-01 compliant works. Critical environments managed without disruption to clinical operations.", href: "/industries/hospital" },
  { label: "Hotel & Hospitality", desc: "Out-of-hours programmes to maintain guest comfort and comply with ventilation requirements.", href: "/industries/hotel" },
  { label: "Education", desc: "Works planned around term times. Compliant with CIBSE guidance for educational buildings.", href: "/industries/education" },
  { label: "Defence & Government", desc: "Security-cleared engineers. Experience on restricted access and MoD sites.", href: "/industries/defence" },
  { label: "Leisure & Aquatic", desc: "High-humidity environments. Corrosion-resistant specification for pool halls and leisure centres.", href: "/industries/leisure-centre" },
  { label: "Retail & Commercial", desc: "Works scheduled around trading hours. Reactive support available when needed.", href: "/industries/retail" },
];

/* ── PAGE ───────────────────────────────────────────────────────────── */

export default function AHURefurbishmentPage() {
  return (
    <div>

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/belt-driven-fan.png"
          alt="belt driven fan replacement"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-500/30" />

        <Container className="relative flex min-h-[580px] items-end py-20 pb-28">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              AHU Refurbishment
            </p>
            <h1 className="font-display text-5xl font-extrabold uppercase leading-none text-white sm:text-6xl">
              Extend Your AHU&apos;s Life.<br />Not Your Budget.
            </h1>
            <div className="mt-5 h-[3px] w-16 bg-emerald-500" />
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
              Refurbishing your existing air handling unit typically costs 30–50% of full
              replacement — and adds 10–15 years of reliable service life. We survey, specify,
              and execute on-site with minimal disruption.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Discuss your project
                <ArrowIcon />
              </Link>
              <a
                href="tel:01256518170"
                className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <PhoneIconSm />
                01256 518170
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
                { stat: "UK Wide", label: "Nationwide Coverage" },
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

      {/* ── 2. TRUST BAR ─────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-7 sm:py-10">
        <Container>
          <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Trusted by leading UK organisations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-10 sm:gap-y-6">
            {clientLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                height={60}
                width={120}
                unoptimized
                className="h-8 w-auto object-contain sm:h-10"
                style={{ height: "60px", width: "auto", maxWidth: "120px" }}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. IS THIS FOR YOU? ──────────────────────────────────────── */}
      <section className="bg-[#111418] py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">
                Sound familiar?
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
                Is Your AHU Underperforming?
              </h2>
              <div className="mt-4 h-[3px] w-10 bg-emerald-500" />
              <p className="mt-5 text-sm leading-7 text-white/60">
                Most AHUs don&apos;t fail suddenly — they degrade gradually. If any of these sound familiar,
                a refurbishment survey is the right next step.
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
              <ul className="flex flex-col divide-y divide-white/10">
                {[
                  { signal: "Increased energy bills", detail: "Ageing fans and worn components reduce efficiency over time." },
                  { signal: "Reduced airflow or poor air quality", detail: "Blocked coils, failed dampers, or worn fan blades restrict performance." },
                  { signal: "Frequent breakdowns or reactive repairs", detail: "A symptom of multiple components reaching end of life simultaneously." },
                  { signal: "Noise, vibration, or odour issues", detail: "Often caused by failing bearings, worn belts, or deteriorating insulation." },
                  { signal: "Compliance or HTM concerns", detail: "Older units may no longer meet current ventilation standards or regulations." },
                ].map((item) => (
                  <li key={item.signal} className="flex items-start gap-4 py-4">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    <span>
                      <span className="block text-sm font-semibold text-white">{item.signal}</span>
                      <span className="mt-0.5 block text-xs leading-5 text-white/50">{item.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 4. OVERVIEW ──────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                The case for refurbishment
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-slate-900 sm:text-4xl">
                Better Performance.<br />Without the Cost of Replacement.
              </h2>
              <div className="mt-4 h-[3px] w-12 bg-emerald-700" />
              <p className="mt-6 text-[15px] leading-7 text-slate-600">
                Most AHUs have a service life of 20–25 years — but ageing components, failing fans,
                corroded coils, and obsolete controls drag performance down long before the unit
                is truly end-of-life.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                Refurbishment restores your AHU to specification without the capital cost or
                programme disruption of a full replacement. We survey your unit, tell you exactly
                what it needs, and execute all works on-site — one contract, one accountable team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                >
                  Request a survey
                  <ArrowIcon />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:shadow-sm"
                >
                  See our work
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "30–50%", label: "Typical cost saving vs. full replacement" },
                  { stat: "10–15+", label: "Years of additional service life" },
                  { stat: "1–5 days", label: "Typical on-site refurbishment time" },
                  { stat: "Any make", label: "We refurbish all brands and models" },
                ].map((item) => (
                  <div key={item.label} className="border border-slate-100 bg-surface-2 p-6">
                    <p className="font-display text-3xl font-extrabold text-[#297858]">{item.stat}</p>
                    <p className="mt-2 text-xs font-medium leading-5 text-slate-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 5. WHAT'S INCLUDED ───────────────────────────────────────── */}
      <section className="bg-surface-2 py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              What&apos;s included
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              Refurbishment Scope
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
              Every refurbishment is different — we specify exactly what your unit needs. Common elements include:
            </p>
          </ScrollReveal>

          <div className="grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {scope.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 30}>
                <div className="bg-white p-6 h-full">
                  <div className="h-[3px] w-6 bg-emerald-700" />
                  <h3 className="mt-4 text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. FEATURED KEY COMPONENTS ───────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Key components
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              High-Impact Upgrades Within Refurbishment
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              Two elements of refurbishment consistently deliver the most measurable return —
              EC fan upgrades and coil replacement. Both can be included within your refurbishment
              scope, or specified as standalone works.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "EC Fan Upgrades",
                tag: "30–50% Energy Saving",
                outcome: "Retrofit high-efficiency EC motors into your existing AHU casing — without replacing the whole unit.",
                points: [
                  "Direct replacement of belt-drive or AC fans",
                  "Payback typically within 2–3 years",
                  "Quieter operation, reduced maintenance",
                  "BMS integration available",
                ],
                photo: "/ec-fan-upgrade.png",
                href: "/ec-fan-upgrades-and-retrofits-for-hvac",
              },
              {
                title: "Coil Replacement",
                tag: "Performance Restored",
                outcome: "Restore full heating, cooling, or heat recovery performance without a full AHU replacement.",
                points: [
                  "Measured and manufactured on-site",
                  "All coil types — LPHW, CHW, DX, run-around",
                  "Minimal downtime",
                  "Significant cost saving vs. new unit",
                ],
                photo: "/ahu-coil-replacement.png",
                href: "/air-handling-unit-coil-replacement",
              },
            ].map((s) => (
              <ScrollReveal key={s.title}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
                >
                  <div className="relative h-52 overflow-hidden bg-slate-900">
                    <Image
                      src={s.photo}
                      alt={s.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                        {s.tag}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-base font-extrabold uppercase tracking-wide text-slate-900 group-hover:text-slate-700">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-emerald-700">{s.outcome}</p>
                    <ul className="mt-4 flex flex-1 flex-col gap-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-slate-500">
                          <span className="h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors group-hover:text-emerald-600">
                      Find out more <ArrowIcon />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. PROCESS ───────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-20">
        <Container>
          <ScrollReveal className="mb-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              How it works
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              Our Refurbishment Process
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
              Every refurbishment starts with a thorough site survey — so there are no surprises
              when the work begins.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 40}>
                <div className="h-full bg-white p-8">
                  <span className="font-display text-5xl font-extrabold leading-none text-emerald-700/20">
                    {step.n}
                  </span>
                  <div className="mt-1 h-[2px] w-8 bg-emerald-700" />
                  <h3 className="mt-4 font-display text-base font-bold uppercase text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{step.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 8. CASE STUDY ────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <ScrollReveal>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">
              Case Study
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
              NHS Hospital — 12 AHU Refurbishment
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-emerald-500" />
          </ScrollReveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr_1fr]">
            {[
              {
                label: "The Problem",
                body: "12 ageing AHUs across a hospital estate were showing signs of deterioration — reduced airflow, failing components, and concerns around HTM 03-01 compliance. Full replacement was cost-prohibitive and would have required significant programme disruption to clinical areas.",
              },
              {
                label: "Our Approach",
                body: "BVS carried out condition surveys on all 12 units, providing a prioritised refurbishment programme. Works were sequenced around ward occupancy and executed in-house — including EC fan upgrades, coil replacements, controls modernisation, and casing repairs. No subcontractors. No disruption to clinical operations.",
              },
              {
                label: "The Outcome",
                body: "All 12 AHUs returned to full HTM 03-01 compliance. Airflow and air quality restored across all clinical areas. Energy costs reduced through EC fan upgrades. Full commissioning records and maintenance documentation provided at handover. Project delivered on programme.",
              },
            ].map((block) => (
              <ScrollReveal key={block.label}>
                <div className="border border-white/10 bg-white/5 p-7 h-full">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                    {block.label}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/70">{block.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              View all case studies
              <ArrowIcon />
            </Link>
            <p className="text-xs text-white/35">NHS, Disney, Marriott, Alpine F1 and more</p>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── 9. WHY BVS ───────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Why choose BVS
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              We Build AHUs — So We Know How to Fix Them
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 50}>
                <div className="border border-slate-100 bg-surface-2 p-7 h-full">
                  <div className="h-[3px] w-8 bg-emerald-700" />
                  <h3 className="mt-4 font-display text-base font-bold uppercase text-slate-900">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{r.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 10. SECTORS ──────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-16">
        <Container>
          <ScrollReveal className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">Industries</p>
              <h2 className="font-display text-xl font-extrabold uppercase text-slate-900">
                Sectors We Work In
              </h2>
            </div>
            <Link href="/industries" className="shrink-0 text-xs font-semibold text-emerald-700 hover:underline">
              View all →
            </Link>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 40}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-slate-300 hover:shadow-lg"
                >
                  <div className="mb-3 h-[3px] w-6 bg-slate-200 transition-all duration-300 group-hover:w-10 group-hover:bg-emerald-600" />
                  <p className="font-display text-sm font-extrabold uppercase text-slate-900 group-hover:text-slate-700">
                    {s.label}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{s.desc}</p>
                  <p className="mt-4 text-xs font-semibold text-emerald-700 transition-colors group-hover:text-emerald-600">
                    Learn more →
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 11. FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Common questions
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
          </ScrollReveal>

          <div className="grid gap-5 lg:grid-cols-2">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 30}>
                <div className="border-l-2 border-emerald-700 bg-surface-2 p-6 h-full">
                  <h3 className="text-sm font-bold text-slate-900">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 12. FINAL CTA + FORM ─────────────────────────────────────── */}
      <section className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Get in touch
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
                Ready to Discuss Your AHU?
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-emerald-500" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                Tell us about your unit — make, model, age, and what you&apos;re experiencing.
                We&apos;ll respond within one working day with honest advice and a quotation
                when you&apos;re ready.
              </p>

              <ul className="mt-7 flex flex-col gap-3">
                {[
                  "No obligation enquiry",
                  "Response within one working day",
                  "Speak directly with an AHU specialist",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-white/60">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="tel:01256518170"
                  className="inline-flex items-center gap-3 text-sm text-white/70 hover:text-white"
                >
                  <PhoneIcon />
                  01256 518170
                </a>
                <a
                  href="mailto:info@bvs-ltd.co.uk"
                  className="inline-flex items-center gap-3 text-sm text-white/70 hover:text-white"
                >
                  <MailIcon />
                  info@bvs-ltd.co.uk
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="bg-white p-8">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                  Quick enquiry
                </p>
                <p className="mb-6 text-sm text-slate-500">
                  Describe your AHU and we&apos;ll be in touch within one working day.
                </p>
                <QuickQuoteForm />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 13. RELATED SERVICES ─────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
            Related Services
          </p>
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
                <span className="ml-3 shrink-0 text-emerald-700 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
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
