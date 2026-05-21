import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { TrustedByBar } from "@/components/site/TrustedByBar";

export const metadata = {
  title: "Commercial Pipework | BVS",
  description:
    "Commercial and industrial pipework installation, maintenance, and repair from BVS. Supporting HVAC, heating, and process pipework across the UK.",
};

const scope = [
  "HVAC chilled and hot water pipework",
  "Primary and secondary heating circuits",
  "Pipework modification and extension",
  "Hydraulic pressure testing",
  "System flushing and commissioning",
  "Thermal insulation and lagging",
  "Leak detection and repair",
  "Full documentation and handover",
];

const reasons = [
  {
    title: "Leaks Cause Costly Damage",
    body: "Even small leaks in commercial pipework can result in significant water damage, system downtime, and costly emergency repairs. Early detection and well-maintained pipework protects your building and your budget.",
  },
  {
    title: "System Changes Need Expert Execution",
    body: "Building refurbishments, new plant installations, and HVAC upgrades all require pipework modification. Poorly executed alterations create hydraulic imbalance and long-term performance problems.",
  },
  {
    title: "Insulation Protects Performance",
    body: "Thermal insulation on pipework minimises heat loss and maintains system efficiency. We apply insulation and vapour barriers to all pipework as standard.",
  },
  {
    title: "Commissioning Determines Performance",
    body: "Correctly commissioned pipework, pressure tested, flushed, and balanced, ensures your HVAC and heating systems perform as designed from day one, with full documentation to prove it.",
  },
];

const features = [
  {
    title: "HVAC Pipework",
    body: "Design and installation of chilled water, hot water, and refrigerant pipework systems to serve air handling units and FCUs across commercial buildings.",
  },
  {
    title: "Heating Systems",
    body: "Primary and secondary heating circuit installation including LTHW, MTHW, and HTW pipework for commercial heating plant.",
  },
  {
    title: "Pipework Modification & Extension",
    body: "Extension, modification, or reconfiguration of existing pipework to accommodate building changes, new plant, or system upgrades.",
  },
  {
    title: "Pressure Testing & Commissioning",
    body: "All systems are hydraulically pressure-tested and flushed before commissioning, with full documentation provided.",
  },
  {
    title: "Insulation & Lagging",
    body: "Thermal insulation and vapour barriers applied to all pipework to maintain system efficiency.",
  },
  {
    title: "Leak Detection & Repair",
    body: "Rapid identification and repair of leaks in existing systems, minimising water damage and downtime for your business.",
  },
];

export default function IndustrialPipeworkPage() {
  return (
    <div className="pb-20 lg:pb-0">

      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/industrial-pipework-hero.webp"
          alt="Commercial pipework installation by BVS engineers"
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          unoptimized
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 via-[35%] to-transparent" />

        <Container className="relative flex min-h-[620px] items-center py-14 pb-28 sm:min-h-[600px] sm:py-20 sm:pb-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              Mechanical Solutions
            </p>
            <h1 className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-6xl">
              Commercial<br />Pipework
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white">
              Reliable pipework is the backbone of any heating, cooling, or ventilation system. Our engineers install, maintain, and repair commercial and industrial pipework systems to the highest standards.
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
                href="#overview"
                className="inline-flex items-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Learn more
                <ArrowDownIcon />
              </a>
            </div>
          </div>
        </Container>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "Thermally", label: "Insulated as Standard" },
                { stat: "UK Wide", label: "Nationwide Coverage" },
                { stat: "40+", label: "Years Experience" },
              ].map((s) => (
                <div key={s.label} className="px-2 text-center sm:px-6">
                  <p className="text-sm font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-wide text-white/55 sm:text-[10px]">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* Why it matters */}
      <section id="overview" className="bg-[#111418] py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
              Why it matters
            </p>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              The case for action
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="border-l-2 border-[#297858] pl-5">
                <h3 className="text-sm font-bold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{r.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Scope */}
      <section className="bg-surface-2 py-16">
        <Container>
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
              Scope of work
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              What we do
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {scope.map((item) => (
              <div key={item} className="flex items-start gap-3 border border-slate-200 bg-white p-4">
                <span className="mt-0.5 shrink-0 text-[#297858]">
                  <CheckIcon />
                </span>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pipework services */}
      <section className="bg-white py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
              Pipework services
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              How we help
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="border-t-2 border-[#297858] pt-5">
                <h3 className="text-sm font-bold tracking-wide text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{f.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <TrustedByBar />

      {/* CTA + form */}
      <section className="bg-surface-2 py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
                Get in touch
              </p>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Discuss your pipework project
              </h2>
              <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Tell us about your site and what you need. We&apos;ll come back within one working day with an honest assessment.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {["No obligation", "Honest assessment, no obligation", "Response within one working day"].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckIcon />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border border-[#297858]/20 bg-[#297858]/5 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#297858]">Call us directly</p>
                <a href="tel:01256518170" className="mt-3 flex items-center gap-3 text-2xl font-extrabold text-slate-900 transition-colors hover:text-[#297858]">
                  <PhoneIcon /> 01256 518170
                </a>
              </div>
              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Related services
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { href: "/solutions/mechanical/commercial-boiler-heating", label: "Commercial Boiler & Heating" },
                    { href: "/solutions/mechanical/mechanical-electrical", label: "Mechanical & Electrical" },
                    { href: "/air-handling-unit-manufactoring-and-installation", label: "AHU Manufacturing & Installation" },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center justify-between border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-[#297858]/30 hover:bg-slate-50"
                    >
                      {l.label}
                      <span className="ml-3 shrink-0 text-[#297858]">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="border border-slate-200 bg-white p-8">
              <QuickQuoteForm />
            </div>
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

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
