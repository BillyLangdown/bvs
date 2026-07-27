import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TrustedByBar } from "@/components/site/TrustedByBar";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description: "BVS has been refurbishing, upgrading, and maintaining air handling units across the UK for over 40 years. Engineering-led. In-house delivery. Every sector.",
  path: "/about-us",
});

const values = [
  {
    title: "Engineering Honest",
    body: "We assess every unit on its own merits. If refurbishment is not the right answer, we say so. There is no commercial pressure to favour one route over another.",
  },
  {
    title: "One Team",
    body: "Survey, specification, manufacture where required, installation, commissioning, managed by BVS from first visit to handover. One point of contact and one point of accountability throughout.",
  },
  {
    title: "Programme Discipline",
    body: "Healthcare estates, live hotels, academic windows, secure sites, we plan around the constraints that matter to our clients and we deliver to the agreed programme.",
  },
  {
    title: "Direct & Responsive",
    body: "Quick replies. We answer the phone. Whether you are an M&E contractor working to a programme or an estates manager dealing with an urgent failure, you speak to someone who knows the job.",
  },
];

const services = [
  {
    title: "AHU Refurbishment",
    href: "/air-handling-unit-refurbishment",
    body: "Extending equipment life by 10–15 years at a fraction of replacement cost. Fan, coil, controls, casing, complete or partial scope.",
  },
  {
    title: "EC Fan Upgrades",
    href: "/ec-fan-upgrades-and-retrofits-for-hvac",
    body: "Replacing belt-drive fans with EC direct-drive. Proven energy reduction, reduced maintenance, BMS-compatible variable speed control.",
  },
  {
    title: "AHU Manufacturing & Installation",
    href: "/air-handling-unit-manufacturing-and-installation",
    body: "Custom-built AHUs where catalogue products cannot meet the requirement, manufactured in the UK and installed by the same team, survey through to commissioning.",
  },
  {
    title: "Coil Replacement",
    href: "/air-handling-unit-coil-replacement",
    body: "Any make, any age. Coils measured on site, sourced or manufactured, and replaced in situ. Heating, cooling, and heat recovery.",
  },
  {
    title: "Controller Upgrades",
    href: "/air-handling-unit-controller-solutions-upgrades",
    body: "Replacing obsolete controls with open-protocol DDC systems. BMS integration, remote monitoring, and energy reporting as standard.",
  },
];

const sectors = [
  "Healthcare & NHS",
  "Defence & Government",
  "Education",
  "Hotels",
  "Leisure Centres",
  "Retail & Commercial",
];

export default function AboutPage() {
  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#111418] py-20 sm:py-28">

  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src="/about-us.webp"
      alt="About BVS"
      fill
      sizes="100vw"
      priority
      placeholder="blur"
      blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
      className="object-cover object-center"
    />

    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-[#111418]/50" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#111418]/80 via-[#111418]/50 to-[#111418]/30" />
  </div>

  {/* Content */}
  <Container className="relative">
    <div className="max-w-3xl">

      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
        About BVS
      </p>

      <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
        Engineering-led<br />for over 40 years.
      </h1>

      <div className="mt-5 h-[3px] w-14 bg-[#297858]" />

      <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/70">
        BVS has been working in mechanical ventilation since the 1980s. We refurbish, upgrade, install, and maintain air handling units across the UK, for hospitals, hotels, schools, leisure centres, defence facilities, and retail estates. The engineering is consistent. The approach adapts to the environment.
      </p>

    </div>
  </Container>
</section>

      {/* ── WHAT WE DO ────────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                What We Do
              </p>
              <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
                Air Handling Units,<br />the Full Scope
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-slate-600">
                We exist to solve problems with air handling equipment. That might be an AHU that is failing, one that is consuming more energy than it should, one that no longer meets compliance requirements, or one that simply needs replacing. We provide the full scope, from initial survey through to commissioning and handover.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                The reason clients come back is straightforward: BVS manages the whole job. There is no disconnect between the surveyor who assessed the unit and the engineers who install it. The specification matches the site. The programme gets kept.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We work directly with estates managers, facilities teams, and end users, and equally with HVAC contractors, M&amp;E consultants, and building services engineers who need a reliable delivery partner.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid gap-5">
                {values.map((v) => (
                  <div key={v.title} className="border border-slate-200 bg-white p-6">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="h-1 w-6 bg-[#297858]" />
                      <h3 className="text-sm font-extrabold text-slate-900">
                        {v.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-6 text-slate-500">{v.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 40 YEARS ──────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                Experience
              </p>
              <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Four Decades of<br />Engineering
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                BVS was founded in the mechanical engineering sector and has operated continuously in the air handling unit market for over 40 years. In that time the equipment has changed, EC motors, modern DDC controls, variable speed drive systems, but the core capability has not: engineering knowledge applied on site by people who understand how ventilation plant actually behaves.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/65">
                The team that surveys a unit is the same team that specifies the works and, in many cases, the same team that carries them out. That continuity matters, particularly on complex sites where the constraints are unusual and the margin for disruption is low.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "40+", label: "Years Experience" },
                  { stat: "1000s", label: "AHUs" },
                  { stat: "UK", label: "Nationwide" },
                  { stat: "6", label: "Sectors" },
                ].map((item) => (
                  <div key={item.label} className="border border-white/10 bg-white/5 p-6">
                    <p className="text-3xl font-extrabold text-[#297858]">{item.stat}</p>
                    <p className="mt-1 text-xs text-white/55">{item.label === "Years Experience" ? <><span className="sm:hidden">Yrs Experience</span><span className="hidden sm:block">Years Experience</span></> : item.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
  <Container>
    <ScrollReveal className="mb-10 max-w-2xl">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        Our Services
      </p>

      <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
        Five Services,<br />One Specialist
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />

      <p className="mt-4 text-sm leading-6 text-slate-500">
        Every service is managed by BVS, from initial survey through to commissioning and handover.
      </p>
    </ScrollReveal>

    {/* CARDS */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
      {services.map((s, i) => (
        <ScrollReveal key={s.title} delay={i * 60} className="h-full">
          <Link
            href={s.href}
            className="group flex h-full flex-col border border-slate-200 bg-surface-2 p-6 transition-all duration-200 hover:border-[#297858] hover:shadow-md"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="h-1 w-5 bg-[#297858] transition-all group-hover:w-8" />
              <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#297858]">
                {s.title}
              </h3>
            </div>

            <p className="text-sm leading-6 text-slate-500">
              {s.body}
            </p>

            <span className="mt-auto pt-6 text-xs font-semibold text-[#297858] transition-all group-hover:translate-x-1">
              Learn more →
            </span>
          </Link>
        </ScrollReveal>
      ))}
    </div>

    {/* EXTRA MESSAGE */}
    <div className="mt-10 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
        And additional specialist services available on request
      </p>
    </div>
  </Container>
</section>

      {/* ── SECTORS ───────────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                Sectors
              </p>
              <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
                Every Environment<br />Is Different.
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-slate-600">
                The engineering requirement for ventilation is broadly consistent across building types. The operational constraints are not. A hospital requires clinical-programme coordination and careful documentation. A hotel requires out-of-hours access and guest-impact planning. A leisure centre requires corrosion-resistant specification for pool hall environments.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We have worked in all of the sectors below. The experience is direct, not adjacent.
              </p>
              <Link
                href="/industries"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#297858] transition-all hover:gap-3"
              >
                View all sectors →
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 gap-3">
                {sectors.map((s) => (
                  <div key={s} className="flex items-center gap-3 border border-slate-200 bg-white p-4">
                    <div className="h-2 w-2 shrink-0 bg-[#297858]" />
                    <span className="text-sm font-semibold text-slate-700">{s}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── CLIENT LOGOS ──────────────────────────────────────────────── */}
      <TrustedByBar />

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                Work With Us
              </p>
              <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                If the Timing Is Right,<br />Let&apos;s Talk.
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                We are not a sales-led business. If you have an air handling unit that is underperforming, failing, or due for replacement, we are happy to discuss the options. No obligation. No pressure to commit before you are ready.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-6 py-3 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
                >
                  Get in touch →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  Request a quote
                </Link>
              </div>
            </div>
            <div className="border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold text-white/80">What happens next:</p>
              <ul className="mt-4 space-y-3">
                {[
                  "We review your enquiry and respond within one business day",
                  "If a site visit is appropriate, we arrange a survey to suit your programme",
                  "We provide a written, itemised scope and quotation",
                  "Works are planned and scheduled around your operational constraints",
                ].map((step) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-white/55">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#297858]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
