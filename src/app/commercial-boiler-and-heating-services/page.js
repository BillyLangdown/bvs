import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { TrustedByBar } from "@/components/site/TrustedByBar";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Commercial Boiler & Heating Services",
  description: "Commercial boiler installation, servicing, and repair from BVS. Gas Safe registered engineers covering businesses across the UK.",
  path: "/commercial-boiler-and-heating-services",
});

const scope = [
  "Commercial boiler installation",
  "Boiler servicing & maintenance contracts",
  "Emergency boiler repair",
  "Heating system design & heat loss calculations",
  "Energy efficiency upgrades",
  "Cascade and modular system installation",
  "Flue and combustion analysis",
  "Gas Safe certification and documentation",
  "Installation of gas fired & electric water heaters",
  "Installation of plate heat exchangers (PHEs)",
  "Installation of new heating pumps",
  "Alterations to heating pipe pumps",
  "Installation of new clarifiers",
];

const reasons = [
  {
    title: "Ageing Plant Costs More to Run",
    body: "Older commercial boilers often operate well below their rated efficiency. Replacing or upgrading ageing plant delivers measurable reductions in gas consumption and ongoing maintenance costs.",
  },
  {
    title: "Compliance Isn't Optional",
    body: "All gas works must be carried out by Gas Safe registered engineers. We provide full certification, landlord gas safety records, and compliance documentation for every job.",
  },
  {
    title: "Breakdowns Disrupt Operations",
    body: "A failed commercial boiler during winter can shut down a building in hours. Scheduled servicing contracts reduce the risk of unexpected breakdowns and keep your system running reliably.",
  },
  {
    title: "Right-Sized Plant Matters",
    body: "Oversized or undersized boilers run inefficiently and wear faster. We carry out heat loss calculations and system design to ensure correctly sized plant for your building's requirements.",
  },
];

const features = [
  {
    title: "Commercial Boiler Installation",
    body: "Supply and installation of commercial condensing boilers, cascade systems, and associated plant for new builds and refurbishments.",
  },
  {
    title: "Boiler Servicing & Maintenance",
    body: "Scheduled servicing contracts to keep boilers operating at peak efficiency, reduce breakdowns, and maintain Gas Safe compliance.",
  },
  {
    title: "Emergency Boiler Repair",
    body: "Fast response to boiler breakdowns to minimise disruption. We aim to resolve issues on the first visit where parts are available and the fault permits.",
  },
  {
    title: "Heating System Design",
    body: "Heat loss calculations and system design for new installations, ensuring correctly sized plant for your building's requirements.",
  },
  {
    title: "Energy Efficiency Upgrades",
    body: "Replacement of ageing inefficient boilers with modern high-efficiency plant, with ROI analysis and energy cost savings projections where applicable.*",
  },
  {
    title: "Gas Safe Certification",
    body: "All gas works are carried out by Gas Safe registered engineers with full certification, landlord gas safety records, and compliance documentation.",
  },
];

export default function CommercialBoilerHeatingPage() {
  return (
    <div className="pb-20 lg:pb-0">

      {/* Hero */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/Commercial-Gas-Works.webp"
          alt="Commercial boiler and heating plant room serviced by BVS engineers"
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          unoptimized
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 via-[35%] to-transparent" />

        <Container className="relative flex min-h-[620px] items-center py-14 pb-28 sm:min-h-[600px] sm:py-20 sm:pb-20">
          {/* Mobile hero */}
          <div className="sm:hidden max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              Mechanical Solutions
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.08] text-white">
              Commercial boiler<br />&amp; heating.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <a href="tel:01256518170" className="mt-5 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <p className="mt-3 text-sm leading-6 text-white">
              Gas Safe registered installation, servicing, and repair of commercial boilers and heating plant across the UK.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Discuss your project <ArrowIcon />
              </Link>
              <a
                href="#overview"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Learn more <ArrowDownIcon />
              </a>
            </div>
          </div>
          {/* Desktop hero */}
          <div className="hidden sm:block max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              Mechanical Solutions
            </p>
            <h1 className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-6xl">
              Commercial boiler<br />&amp; heating.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white">
              Keeping your building warm and your energy bills in check starts with a well-maintained commercial heating system. Our Gas Safe registered engineers install, service, and repair commercial boilers and heating plant across the UK.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
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
                { stat: "Gas Safe", label: "Registered" },
                { stat: "UK Wide", label: "Coverage" },
                { stat: "40+", label: "Years Experience" },
              ].map((s) => (
                <div key={s.label} className="px-2 text-center sm:px-6">
                  <p className="text-sm font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-wide text-white/55 sm:text-[10px]">{s.label === "Years Experience" ? <><span className="sm:hidden">Yrs Experience</span><span className="hidden sm:block">Years Experience</span></> : s.label}</p>
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

      {/* Heating services */}
      <section className="bg-white py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
              Heating services
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
          <p className="mt-6 text-xs text-slate-400">* ROI analysis and energy cost savings projections are provided where sufficient data on the existing system is available to model against. We will confirm at assessment stage what we can produce for your specific project.</p>
        </Container>
      </section>

      {/* Cold Water & Pumping Systems */}
      <section className="bg-[#111418] py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
              Additional services
            </p>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Cold Water & Pumping Systems
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
              Alongside boiler and heating work, we install and service cold water booster sets and heating pumps across commercial sites.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Cold Water Booster Sets",
                body: "Install or service a new cold water booster set to maintain consistent pressure across your building. We also service and maintain your existing cold water booster set.",
              },
              {
                title: "Heating Pump Installation",
                body: "Supply and installation of new heating pumps to support primary and secondary heating circuits across commercial and industrial sites.",
              },
              {
                title: "Pump Servicing & Alterations",
                body: "Service, repair, and alteration of existing heating pumps. We can reconfigure, upgrade, or replace pumps to suit changed system requirements.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[#297858] pl-5">
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{item.body}</p>
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
                Discuss your heating project
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
            </div>
            <div className="border border-slate-200 bg-white p-8">
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#297858]">Enquiry</p>
              <p className="mb-5 text-xs text-slate-500">We will aim to respond within 24 hours</p>
              <QuickQuoteForm />
            </div>
          </div>
        </Container>
      </section>

      {/* ── RELATED SERVICES ─────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related services</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/industrial-pipework-services", label: "Commercial Pipework" },
              { href: "/solutions/mechanical/mechanical-electrical", label: "Mechanical & Electrical" },
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
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
