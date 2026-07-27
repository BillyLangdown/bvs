import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/caseStudyData";
import { CaseStudyCarousel } from "@/components/site/CaseStudyCarousel";

export const metadata = pageMetadata({
  title: "Leisure Centre Ventilation",
  description: "AHU refurbishment, EC fan upgrades, and pool hall ventilation for leisure centres and aquatic facilities. Corrosion-resistant specification. High-humidity environments. UK nationwide.",
  path: "/sport-facility-ventilation",
});

const faqs = [
  {
    q: "Do you understand the specific requirements of pool hall ventilation?",
    a: "Yes. Pool hall AHUs operate under specific humidity, temperature, and air volume requirements that differ significantly from standard commercial HVAC. We specify and install equipment appropriate to the environment, not standard commercial units adapted to cope.",
  },
  {
    q: "What causes AHU failure faster in pool environments?",
    a: "Chloramine-laden air is highly corrosive to standard steel and aluminium components. Belt-driven fans with standard bearings fail significantly faster in pool halls than in commercial environments. Coils and casing panels are similarly at risk without appropriate material specification.",
  },
  {
    q: "Can you replace a failed AHU in a pool hall without closing the facility?",
    a: "In most cases, yes. Pool halls have defined maintenance windows, typically overnight or early morning. We plan works to fit those windows and assess temporary ventilation requirements before any shutdown is agreed.",
  },
  {
    q: "Are EC fans suitable for pool hall environments?",
    a: "Yes, and they are particularly beneficial in leisure centres. EC fans operating at variable speed in humid environments outperform belt-driven fans on reliability and energy performance. The absence of belts removes a significant source of maintenance in a corrosive environment.",
  },
  {
    q: "Can you source corrosion-resistant components for pool AHUs?",
    a: "Yes. We source and specify epoxy-coated coils, stainless steel casings, and corrosion-resistant fan assemblies appropriate for pool environments. This is a standard part of our specification process for these buildings.",
  },
  {
    q: "Do you work with local authority leisure operators?",
    a: "Yes. Many leisure centres are local authority operated or managed under PFI/FM contracts. We work within public sector procurement frameworks and understand the approval processes and documentation requirements involved.",
  },
];

export default function LeisureCentrePage() {
  const studies = caseStudies.filter((s) => s.sector.includes("Leisure") || s.sector.includes("Swimming Pool"));
  return (
    <div className="pb-20 lg:pb-0">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/swimming-pool.webp"
          alt="Leisure centre swimming pool, BVS pool hall AHU specialist with corrosion-resistant specification"
          fill
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 via-[35%] to-transparent" />

        <Container className="relative flex min-h-[620px] items-center py-14 pb-28 sm:min-h-[600px] sm:py-20 sm:pb-20">
          {/* Mobile hero */}
          <div className="sm:hidden max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              Leisure Centres &amp; Aquatic Facilities
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.08] text-white">
              Ventilation solutions<br />for pool halls.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <a href="tel:01256518170" className="mt-5 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <p className="mt-3 text-sm leading-6 text-white">
              Corrosion-resistant specification, high-humidity environment experience, and EC fan upgrades for leisure centres.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Discuss your facility <ArrowIcon />
              </Link>
              <a
                href="#services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Learn more <ArrowDownIcon />
              </a>
            </div>
          </div>
          {/* Desktop hero */}
          <div className="hidden sm:block max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              Leisure Centres &amp; Aquatic Facilities
            </p>
            <p className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-6xl">
              Ventilation solutions<br />for pool halls.
            </p>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white">
              Leisure centre ventilation, and pool hall AHUs in particular, is a specialist application. The environment accelerates component failure, demands specific material selection, and requires correct humidity control to prevent structural damage.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Discuss your facility
                <ArrowIcon />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Learn more
                <ArrowDownIcon />
              </a>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "Pool Hall", label: "Specialists" },
                { stat: "Corrosion", label: "Resistant" },
                { stat: "EC Fan", label: "Savings" },
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

      {/* ── THE POOL ENVIRONMENT ──────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                The environment
              </p>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Why Pool Halls Destroy<br />Standard HVAC Plant.
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                Pool hall air contains elevated chloramine concentrations, a by-product of chlorine disinfection and human contact. Chloramines are highly corrosive to steel, aluminium, copper, and most standard coatings. Standard commercial AHU components have a significantly shortened service life when exposed to this environment continuously.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:text-[#1d5c42]"
                >
                  Discuss your facility →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: "Humidity control",
                    body: "Pool hall AHUs must maintain precise humidity, too high causes structural damage and user discomfort; too low increases evaporation and chemical cost. Both are an AHU performance issue.",
                  },
                  {
                    title: "Air volume and distribution",
                    body: "Correct air change rates prevent chloramine build-up at breathing level. Poor distribution creates dead zones, typically identified by persistent smell or patron discomfort in specific pool positions.",
                  },
                  {
                    title: "Heat recovery",
                    body: "Pool halls have significant heat recovery potential from warm exhaust air. Run-around coil and other heat recovery configurations can substantially reduce the heating energy required to condition pool hall supply air.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-[#297858] bg-white/5 px-5 py-4">
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/55">{item.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── WHAT GOES WRONG ───────────────────────────────────────────── */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              What we find on site
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Common Failure Points<br />in Leisure Centre AHUs.
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Pool hall AHU failure rarely presents suddenly. It is usually a progressive deterioration, components failing earlier than expected, performance dropping, energy costs rising. These are the most common findings when we survey leisure centre plant.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Corroded belt-driven fans",
                desc: "Belt-driven fans fail significantly faster in pool environments. Belt slip, bearing corrosion, and pulley damage are common, combined with high maintenance frequency and unplanned shutdowns.",
              },
              {
                title: "Coil corrosion and fouling",
                desc: "Heating and heat recovery coils exposed to chloramine-laden air corrode progressively. Performance drops, energy cost rises, and eventual failure causes complete loss of humidity control.",
              },
              {
                title: "Casing and panel corrosion",
                desc: "Standard galvanised steel AHU casings corrode in pool environments. Structural integrity degrades over time, a refurbishment must address the casing as well as the components.",
              },
              {
                title: "No variable speed control",
                desc: "Pool hall AHUs should modulate speed based on humidity and occupancy. Fixed-speed operation wastes energy and is unable to respond to changing conditions, a significant operating cost issue.",
              },
              {
                title: "Humidity control drift",
                desc: "Humidity setpoints drifting over time due to degraded sensors, failed actuators, or untuned controls, leading to humidity too high for structural safety or too low for operational economy.",
              },
              {
                title: "No BMS visibility",
                desc: "Standalone controls with no fault logging mean problems go undetected until users complain or pool management observe structural symptoms, condensation, surface moisture, or persistent chloramine odour.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[#297858] bg-white p-5">
                <p className="text-sm font-bold text-slate-900">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── EC FAN OPPORTUNITY ────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                Energy opportunity
              </p>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                EC Fans Are Particularly<br />Suited to Pool Halls.
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                Leisure centre AHUs often run 16–24 hours a day. The energy consumed by fixed-speed belt-driven fans in this environment is substantial, and the energy saving from upgrading to EC direct-drive is among the most significant achievable in a building of this type.
              </p>
              <div className="mt-7">
                <Link
                  href="/ec-fan-upgrades-and-retrofits-for-hvac"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:text-[#1d5c42]"
                >
                  EC fan upgrades →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { stat: "30–50%", label: "Typical fan energy saving" },
                  { stat: "24/7", label: "Operation, savings compound daily" },
                  { stat: "No belts", label: "Removes primary maintenance burden" },
                  { stat: "Variable speed", label: "Responds to humidity demand" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 p-5 text-center">
                    <p className="text-2xl font-extrabold text-white">{item.stat}</p>
                    <p className="mt-1 text-xs text-white/55">{item.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── RELEVANT SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              What we deliver in leisure
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Services for Leisure Centres
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/air-handling-unit-refurbishment",
                label: "AHU Refurbishment",
                desc: "Full condition survey and targeted refurbishment with corrosion-resistant component specification throughout.",
              },
              {
                href: "/ec-fan-upgrades-and-retrofits-for-hvac",
                label: "EC Fan Upgrades",
                desc: "Replace belt-driven fans with EC direct-drive. Removes belts from the maintenance schedule and reduces energy consumption significantly.",
              },
              {
                href: "/air-handling-unit-coil-replacement",
                label: "Coil Replacement",
                desc: "Epoxy-coated or stainless coils specified for pool environments. Measured on site and replaced within the existing AHU casing.",
              },
              {
                href: "/air-handling-unit-controller-solutions-upgrades",
                label: "Controller Upgrades",
                desc: "Humidity-based demand control, BMS integration, and variable speed, replacing fixed-speed standalone controls.",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col gap-3 border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-[#297858] hover:bg-slate-50"
              >
                <p className="text-sm font-bold text-slate-900 group-hover:text-[#297858]">{s.label}</p>
                <p className="text-xs leading-5 text-slate-500">{s.desc}</p>
                <span className="mt-auto text-xs font-semibold text-[#297858] transition-all group-hover:translate-x-1">
                  Find out more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── OUR PROJECTS ─────────────────────────────────────────────── */}
      <section id="our-projects" className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-8">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">Our projects</p>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Case Studies</h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>
          <CaseStudyCarousel studies={studies} />
        </Container>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <FAQAccordion faqs={faqs} />

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                Get in touch
              </p>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Discuss Your<br />Leisure Facility
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                Tell us about the facility, the plant age, and any performance concerns. We&apos;ll assess whether refurbishment, EC fan upgrades, or targeted component replacement is the right approach.
              </p>
              <div className="mt-7 space-y-3 border-l border-white/10 pl-5">
                <p className="text-sm text-white/60">Pool hall and high-humidity environment experience</p>
                <p className="text-sm text-white/60">Corrosion-resistant component specification as standard</p>
                <p className="text-sm text-white/60">Local authority and private leisure operators</p>
                <p className="text-sm text-white/60">Direct response, not sales handlers</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6">
                <a href="tel:01256518170" className="inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
                  <PhoneIcon /> 01256 518170
                </a>
                <a href="mailto:info@bvs-ltd.co.uk" className="inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
                  <MailIcon /> info@bvs-ltd.co.uk
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="relative overflow-hidden border border-slate-100 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#297858]" />
                  <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-slate-900" />
                </div>
                <div className="relative">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">Enquiry</p>
                  <div className="mt-3 h-[2px] w-10 bg-[#297858]" />
                  <p className="mt-5 text-sm leading-6 text-slate-500">
                    Tell us about the facility type, AHU age, and any performance concerns. We&apos;ll respond within one working day.
                  </p>
                  <div className="mt-7">
                    <QuickQuoteForm />
                  </div>
                  <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                      Response within 24 hours
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                      No obligation, practical advice from the first call
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

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
function ArrowDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CheckIcon({ className = "" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`shrink-0 text-[#297858] ${className}`}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
