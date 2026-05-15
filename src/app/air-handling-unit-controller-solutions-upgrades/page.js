import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = {
  title: "AHU Controller Solutions & Upgrades | BVS Building Ventilation Solutions",
  description:
    "Independent AHU controller supply, installation, and commissioning across the UK. Fault-finding, BMS integration, PCB replacements, and Trend controls — no manufacturer tie-in.",
};

const clientLogos = [
  { src: "/nhs-logo.webp", alt: "NHS" },
  { src: "/disney-logo.webp", alt: "Disney" },
  { src: "/marriott-logo.webp", alt: "Marriott Hotels" },
  { src: "/moorfields-logo.webp", alt: "Moorfields Eye Hospital" },
  { src: "/ihg-logo.webp", alt: "IHG Hotels & Resorts" },
  { src: "/travelodge-logo.webp", alt: "Travelodge" },
  { src: "/waitrose-logo.webp", alt: "Waitrose" },
  { src: "/westfield-logo.webp", alt: "Westfield" },
  { src: "/fenwick-logo.webp", alt: "Fenwick" },
  { src: "/freedomleisure-logo.webp", alt: "Freedom Leisure" },
  { src: "/queenmary-logo.webp", alt: "Queen Mary University" },
  { src: "/alpinef1-logo.webp", alt: "Alpine F1 Team" },
];

const faqs = [
  {
    q: "Does this integrate with any brand of AHU?",
    a: "Yes. Our control solutions are designed to integrate with AHUs from any manufacturer. Because we operate independently, we can work across multiple brands and tailor the setup to suit your specific system.",
  },
  {
    q: "Why should I choose an independent service instead of the manufacturer?",
    a: "Manufacturers often only supply controllers if they also carry out the installation, which limits flexibility and increases costs. We provide a fully independent service — freedom of choice, reduced downtime, and cost-effective solutions without being tied to one supplier.",
  },
  {
    q: "Can you replace outdated or faulty controllers?",
    a: "Absolutely. We specialise in upgrading and replacing obsolete or faulty controllers with modern alternatives that improve efficiency, reliability, and ease of use.",
  },
  {
    q: "Do you offer BMS integration?",
    a: "Yes. We can install and commission AHU controls into existing building management systems, including Trend and other leading platforms, to give you centralised monitoring and control.",
  },
  {
    q: "What energy savings can a controls upgrade deliver?",
    a: "Typically 15–30% reduction in AHU energy consumption through improved sequences, demand-controlled ventilation, and optimised setpoints. The actual saving depends on the existing controls state — we model this at assessment stage.",
  },
  {
    q: "Can you upgrade controls without replacing the AHU?",
    a: "Yes — and this is often the most cost-effective approach. A controls upgrade can extend the useful life of the AHU, improve energy performance, and add BMS integration without the cost of full plant replacement.",
  },
];

export default function ControllerUpgradesPage() {
  return (
    <div>

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[480px] overflow-hidden bg-slate-900">
        <Image
          src="/ahu-controller.webp"
          alt="AHU controller panel and building controls upgrade by BVS"
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          unoptimized
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

        <Container className="relative flex min-h-[480px] items-center py-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#297858]">
              AHU Controller Solutions & Upgrades
            </p>
            <h1 className="font-display text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
              Independent AHU<br />Controller Solutions
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-white/70">
              Unlike AHU manufacturers who only supply controllers on the condition their engineers do the work, we offer fully independent supply, installation, and commissioning. Freedom of choice. No lock-in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#assessment"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Request a controls assessment
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Learn more
                <ArrowDownIcon />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-7 sm:py-10">
        <Container>
          <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Trusted by leading organisations
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent sm:hidden" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:hidden" />
            <div className="overflow-x-auto no-scrollbar sm:overflow-visible">
              <div className="flex sm:grid sm:grid-cols-6 lg:grid-cols-12 gap-x-8 gap-y-6 min-w-max sm:min-w-0 px-4 sm:px-0">
                {clientLogos.map((logo) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    unoptimized
                    className="h-12 w-auto object-contain mx-auto opacity-90 transition-opacity duration-300 hover:opacity-100 shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROBLEM ── cost of old controls ───────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              The problem
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-slate-900 sm:text-3xl">
              What Old Controls<br />Are Doing to You
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                impact: "Energy Waste",
                badge: "Significant energy waste",
                detail: "AHUs with outdated or misconfigured controls run fans, heating, and cooling when they should not. Every hour of unnecessary operation adds to the energy bill — and goes unmeasured.",
              },
              {
                impact: "No Visibility",
                badge: "Zero monitoring or fault alerting",
                detail: "Older controllers have no network connection and no BMS integration. When something goes wrong — or performance degrades gradually — there is no alarm. The problem runs until it becomes a failure.",
              },
              {
                impact: "Parts Obsolescence",
                badge: "Components no longer manufactured",
                detail: "Proprietary controllers from discontinued ranges cannot be repaired when they fail — only replaced. The older the system, the more fragile the supply chain.",
              },
              {
                impact: "Supplier Lock-In",
                badge: "Single-supplier maintenance contract",
                detail: "Proprietary systems require the original supplier for maintenance and changes. Open-protocol controls give FM teams the freedom to choose any competent engineer.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.impact} delay={i * 60}>
                <div className="flex flex-col border-l-4 border-slate-200 bg-[#f7f6f5] p-6">
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                    <h3 className="font-display text-sm font-extrabold uppercase text-slate-900">{item.impact}</h3>
                    <span className="shrink-0 bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-500/75">{item.badge}</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-500">{item.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-14 sm:py-16">
        <Container>

          <ScrollReveal className="mb-8 max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Make the right call
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
              Controller Upgrade vs Full AHU Replacement
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-white/55">
              Both are valid routes. The right answer depends on the root cause of the problem and the condition of your plant — which is why we carry out an independent assessment before recommending either.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-hidden border border-white/10 bg-white/[0.03]">

              <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-white/10">
                <div className="border-r border-white/10 px-4 py-3" />
                <div className="border-r border-white/10 px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8fd1b5]">
                    Controller Upgrade
                  </p>
                </div>
                <div className="px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">
                    Full AHU Replacement
                  </p>
                </div>
              </div>

              {[
                { label: "AHU plant", upgrade: "Retained and extended", replace: "Removed and replaced" },
                { label: "BMS integration", upgrade: "Included on most installations", replace: "Depends on specification" },
                { label: "Energy performance", upgrade: "Improved through controls optimisation", replace: "Depends on new plant specification" },
                { label: "Right when", upgrade: "Controls are the root cause", replace: "Mechanical plant is at end of life" },
                { label: "Consider if", upgrade: "Plant is mechanically sound", replace: "Structural or mechanical failure present" },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1.4fr_1fr_1fr] ${i !== arr.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <div className="border-r border-white/10 px-4 py-4">
                    <p className="text-xs font-medium text-white">{row.label}</p>
                  </div>
                  <div className="border-r border-white/10 px-4 py-4">
                    <p className="text-xs font-medium text-[#8fd1b5]">{row.upgrade}</p>
                  </div>
                  <div className="px-4 py-4">
                    <p className="text-xs font-medium text-white/65">{row.replace}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <p className="mt-4 text-xs text-white/55">
            Every project is different —{" "}
            <Link href="/contact" className="font-semibold text-[#8fd1b5] underline underline-offset-2 hover:text-[#297858] transition-colors">
              speak to our team
            </Link>{" "}
            for an honest assessment of what&apos;s right for your site and system. No commitment required.
          </p>

        </Container>
      </section>

      {/* ── INDEPENDENT & FLEXIBLE ────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                Independent & Flexible
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-slate-900 sm:text-3xl">
                No Manufacturer Tie-In.<br />No Unnecessary Costs.
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-slate-500">
  Our AHU controller solutions offer a flexible, cost-effective alternative to manufacturer-tied services, which often require their own engineers and increase costs.
</p>

<p className="mt-4 text-sm leading-7 text-slate-500">
  We supply, install, and commission controllers across any AHU make or model, giving you full independence to choose the right solution without single-supplier restrictions.
</p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="grid gap-3">
                {[
                  { label: "Any AHU brand", detail: "We work across all makes and models. Brand-agnostic assessment, specification, and installation." },
                  { label: "Open protocol as standard", detail: "BACnet, Modbus, and LON. Any competent engineer or BMS platform can read and write the system after handover." },
                  { label: "Qualified engineers", detail: "Every project carried out by engineers with extensive experience in fault-finding, upgrades, and commissioning." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 border border-slate-200 bg-[#f7f6f5] p-5">
                    <div className="mt-1 h-2 w-2 shrink-0 bg-[#297858]" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">{item.label}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── SOLUTION ── open protocol ─────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                The solution
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
                BACnet. Modbus. LON.<br />Open Protocol, Always.
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/55">
  Open-protocol controls use standard communication languages that any qualified engineer or BMS platform can read and interact with. They integrate directly with your existing BMS regardless of manufacturer.
</p>

<p className="mt-4 text-sm leading-7 text-white/55">
  Proprietary systems lock maintenance, upgrades, and changes to a single supplier, creating long-term cost and dependency risks over the system lifecycle.
</p>

<p className="mt-4 text-sm leading-7 text-white/55">
  We standardise on open-protocol DDC controllers so every system we commission remains fully accessible to any engineer after handover.
</p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid gap-3">
                {[
                  { protocol: "BACnet", detail: "The dominant protocol for building automation. Supported by all major BMS platforms. Standard for healthcare, commercial, and public sector applications." },
                  { protocol: "Modbus", detail: "Widely used in industrial and simpler building applications. Compatible with energy meters, variable speed drives, and legacy BMS systems." },
                  { protocol: "LON (LonWorks)", detail: "Prevalent in older commercial BMS installations. We retain LON compatibility where existing infrastructure requires it." },
                ].map((item) => (
                  <div key={item.protocol} className="border border-white/10 bg-white/5 p-5">
                    <div className="mb-2">
                      <div className="inline-block bg-[#297858] px-2 py-0.5 text-[10px] font-bold text-white">{item.protocol}</div>
                    </div>
                    <p className="text-xs leading-5 text-white/50">{item.detail}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section id="services" className="bg-[#f7f6f5] py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Our services
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-slate-900 sm:text-3xl">
              AHU Controller<br />Solutions
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Save money with expert AHU controls upgrades, refurbishments, and independent commissioning.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AHU Control Fault-Finding & Diagnostics",
                detail: "Diagnosis of sensor, wiring, programming, and communication faults with fast resolution.",
              },
              {
                title: "AHU Control Upgrades & Replacements",
                detail: "Replacement of outdated control systems with modern, efficient alternatives.",
              },
              {
                title: "PCB Upgrades & Replacements",
                detail: "Supply and installation of replacement PCBs to restore full control functionality.",
              },
              {
                title: "Trend & BMS Integration",
                detail: "Integration and commissioning of AHU controls within Trend or wider BMS platforms.",
              },
              {
                title: "AHU Controller Refurbishment",
                detail: "Repair and upgrade of existing control systems to extend operational life.",
              },
              {
                title: "Energy Optimisation & Sequences",
                detail: "Optimisation of control sequences for improved energy efficiency and performance.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 50} className="h-full">
                <div className="flex h-full flex-col border-t-2 border-[#297858] bg-white p-6">
                  <h3 className="font-display text-sm font-extrabold uppercase text-slate-900">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">{item.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHAT YOU GET ── stats + equal-height cards ────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              What you get
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              The Controls Upgrade<br />Advantage
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          {/* Stats row */}
          <div className="mb-6 grid gap-px bg-slate-200 sm:grid-cols-3 items-stretch">
  {[
    {
      stat: "15–30%",
      label: "Typical AHU energy reduction",
      context:
        "Through improved sequences, demand-controlled ventilation, and setpoint optimisation",
    },
    {
      stat: "22%",
      label: "Achieved — 14-site FM programme",
      context:
        "Measured post-commissioning energy reduction versus pre-upgrade baseline across a commercial estate",
    },
    {
      stat: "100%",
      label: "BMS integration where required",
      context:
        "Open-protocol controllers installed as standard — compatible with all major BMS platforms",
    },
  ].map((item) => (
    <ScrollReveal key={item.label} className="h-full">
      <div className="flex h-full flex-col bg-[#f7f6f5] p-7">
        <p className="font-display text-4xl font-extrabold text-[#297858]">
          {item.stat}
        </p>

        <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
          {item.label}
        </p>

        <div className="my-4 h-px bg-slate-100" />

        <p className="text-xs leading-5 text-slate-700">
          {item.context}
        </p>
      </div>
    </ScrollReveal>
  ))}
</div>

          {/* Equal-height capability cards */}
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
 { label: "Open protocol DDC", detail: "BACnet, Modbus, or LON as standard with no proprietary lock-in." },
 { label: "Energy modelled upfront", detail: "Energy savings modelled before commitment so impact is known in advance." },
 { label: "Single unit to estate", detail: "Consistent process and delivery across one site or multi-site estates." },
 { label: "ESOS documentation", detail: "Energy and compliance documentation provided to support ESOS reporting." },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 60} className="h-full">
                <div className="flex h-full flex-col border-t-2 border-[#297858] bg-[#f7f6f5] p-5">
                  <p className="font-display text-sm font-extrabold uppercase text-slate-900">{item.label}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{item.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CASE STUDY ── Ringwood Leisure Centre ─────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-24">

        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/swimming-pool.webp"
            alt="Ringwood Leisure Centre — AHU controller upgrade case study"
            fill
            className="object-cover object-center"
          />
          {/* dark fade: strong on left, tapering right */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
        </div>

        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Case study · Leisure · Controller Upgrade
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
                Ringwood Leisure Centre<br />— AHU Controller Upgrade
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/70">
  Ringwood Leisure Centre was advised by another contractor that both ageing AHUs required full replacement, with a quoted programme exceeding £100,000. Our independent controls assessment identified the real issue as control system failure rather than plant failure.
</p>

<div className="mt-5 space-y-3">
  <div className="border-l-2 border-white/20 pl-4">
    <span className="text-sm text-white/60">
      Controls assessed across both AHUs before any works were agreed
    </span>
  </div>

  <div className="border-l-2 border-white/20 pl-4">
    <span className="text-sm text-white/60">
      Trend BMS controllers supplied, installed, and commissioned on both units
    </span>
  </div>

  <div className="border-l-2 border-white/20 pl-4">
    <span className="text-sm text-white/60">
      Existing AHU plant retained, avoiding full replacement
    </span>
  </div>

              </div>
              <div className="mt-5 space-y-3">
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm font-bold text-white">Full system control restored at a fraction of the £100k+ replacement cost</span>
                </div>
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm text-white/70">Both AHUs returned to full performance — no unnecessary plant replaced</span>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/case-studies/ringwood-leisure-ahu-controller-upgrade"
                  className="inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                >
                  Read the full case study →
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View all case studies
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="border border-white/15 bg-white/30 p-7 backdrop-blur-sm">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">Project summary</p>
                <div className="space-y-4">
                  {[
                    { stat: "Ringwood", label: "Leisure Centre, Hampshire" },
                    { stat: "Leisure", label: "Sector" },
                    { stat: "2", label: "AHUs — both retained, not replaced" },
                    { stat: "Trend", label: "BMS controllers — open protocol" },
                    { stat: "£100k+", label: "Replacement cost avoided" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <span className="text-xs text-white/80">{item.label}</span>
                      <span className="font-display text-base font-extrabold text-white
">{item.stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── HOW IT WORKS ── 4-step process ───────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              How it works
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
              Assessment to<br />Commissioned System
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                n: "01",
                title: "Controls Assessment",
                body: "We survey the existing controls installation — hardware condition, sequence of operation, BMS integration, and energy performance — and identify what an upgrade would achieve.",
                points: ["Existing controller, sensors, and actuators assessed", "Sequence of operation reviewed against current requirements", "Energy savings modelled from proposed upgrade specification"],
              },
              {
                n: "02",
                title: "Specification & Panel Build",
                body: "A controls specification is produced and agreed, new panels are built and tested off-site, and a commissioning programme is agreed before works begin on site.",
                points: ["Full controls specification issued for approval", "Panels built, wired, and factory-tested before delivery", "Commissioning programme agreed around site occupation"],
              },
              {
                n: "03",
                title: "Installation & Wiring",
                body: "Existing controls are removed and new panels, sensors, actuators, and field wiring installed and tested to specification.",
                points: ["Old controls removed, new panel installed and connected", "Sensors, actuators, and field devices wired and labelled", "Electrical certification and containment completed"],
              },
              {
                n: "04",
                title: "Commissioning & Handover",
                body: "Sequences are loaded, tested, and tuned. BMS integration confirmed, energy performance verified, and full handover documentation issued.",
                points: ["Control sequences tested against approved specification", "BMS integration confirmed and I/O verified", "O&M manuals, energy baseline, and ESOS documentation"],
              },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 70}>
                <div className="border border-white/10 bg-white/5 p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#297858]">
                      <span className="font-display text-sm font-extrabold text-white">{step.n}</span>
                    </div>
                    <h3 className="font-display text-sm font-extrabold uppercase text-white">{step.title}</h3>
                  </div>
                  <p className="text-xs leading-5 text-white/55">{step.body}</p>
                  <ul className="mt-4 space-y-1.5">
                    {step.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[12px] text-white/35">
                        <span className="mt-1 h-1 w-2 shrink-0 bg-[#297858]" />
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

      {/* ── OFFER ── free controls assessment ─────────────────────────── */}
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
                    Book a Free AHU<br />Controls Site Survey
                  </h2>
                  <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Book a site survey today and receive bespoke AHU controls advice and recommendations from our engineers. Before any commitment, we assess your existing controls, model the energy savings an upgrade would deliver, and confirm BMS integration capability.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {[
                      "Existing controls hardware assessed and documented",
                      "Energy savings modelled against current consumption",
                      "BMS integration compatibility confirmed",
                      "Open-protocol specification options outlined",
                      "No obligation to proceed with works",
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
                    href="#assessment"
                    className="inline-flex items-center justify-center gap-2 bg-[#297858] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                  >
                    Book an assessment
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

      {/* ── CTA + FORM ───────────────────────────────────────────────── */}
      <section id="assessment" className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Speak to an engineer
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
                Request a<br />Controls Assessment
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/60">
                Tell us about the AHU, the existing controls hardware, and what you are trying to achieve. We will model the energy savings and confirm BMS integration capability before you commit to works.
              </p>
              <div className="mt-6 space-y-2.5 border-l border-white/10 pl-5">
                <p className="text-sm text-white/50">Open-protocol DDC as standard — no proprietary lock-in</p>
                <p className="text-sm text-white/50">Energy model provided before commitment to works</p>
                <p className="text-sm text-white/50">Single units and multi-site estate programmes both handled</p>
                <p className="text-sm text-white/50">ESOS documentation and energy baselines issued at handover</p>
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
                  Tell us the AHU make, current controls hardware if known, and what you are trying to achieve. We&apos;ll respond within one working day.
                </p>
                <div className="mt-6"><QuickQuoteForm /></div>
                <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 text-[11px] text-white/35">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Engineering response within one working day
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-white/35">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Energy model and BMS compatibility confirmed
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} />

      {/* ── RELATED SERVICES ─────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related services</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
              { href: "/air-handling-unit-installation", label: "AHU Installation" },
              { href: "/air-handling-unit-manufacturing", label: "AHU Manufacturing" },
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

function ArrowDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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
