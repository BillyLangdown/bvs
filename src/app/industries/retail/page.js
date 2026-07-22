import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { caseStudies } from "@/lib/caseStudyData";
import { CaseStudyCarousel } from "@/components/site/CaseStudyCarousel";

export const metadata = {
  title: "Retail & Commercial Ventilation",
  description:
    "AHU refurbishment, EC fan upgrades, and coil replacement for retail parks, supermarkets, and commercial buildings. Planned around trading hours. UK nationwide.",
};

const faqs = [
  {
    q: "Can you work while the store or centre is trading?",
    a: "In most cases, yes. Works in contained plant rooms with no noise or dust impact on trading areas can proceed during opening hours. Works requiring access through trading areas, or that generate noise or dust, are scheduled for overnight or after closing.",
  },
  {
    q: "Can you work across multiple sites on a portfolio contract?",
    a: "Yes. We manage multi-site programmes across retail estates, with consistent scope, documentation, and delivery approach from one site to the next. This is common for facilities managers and retail property teams managing a number of assets.",
  },
  {
    q: "How do EC fan upgrades reduce operating costs in retail?",
    a: "Retail AHUs often run continuously to maintain a comfortable shopping environment. Replacing belt-driven AC fans with EC technology typically reduces fan energy consumption by 30–50%, a measurable reduction in operating cost and a direct contribution toward EPC rating improvements.",
  },
  {
    q: "Do you work in supermarkets with refrigeration plant?",
    a: "We focus on AHU and ventilation works. We do not carry out refrigeration maintenance or repair. However, we work alongside refrigeration contractors on integrated HVAC refurbishment projects where both scopes are running concurrently.",
  },
  {
    q: "Can you support an energy reduction programme?",
    a: "Yes. EC fan upgrades, controls upgrades with demand-controlled ventilation, and heat recovery modifications all deliver measurable energy reduction and contribute to EPC rating improvements. We provide energy modelling and before-and-after performance data to support these programmes.",
  },
  {
    q: "What notice do you need to organise out-of-hours access?",
    a: "This varies by landlord and tenant arrangement. We discuss access requirements at survey stage and build them into the programme. For retail parks and shopping centres with managed access, we co-ordinate directly with the estate management team.",
  },
];

export default function RetailPage() {
  const studies = caseStudies.filter((s) => s.sector.includes("Retail"));
  return (
    <div className="pb-20 lg:pb-0">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/mall.webp"
          alt="Shopping centre interior, BVS delivers AHU works around retail trading hours"
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
              Retail &amp; Commercial
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.08] text-white">
              AHU works planned around<br />your trading hours.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <a href="tel:01256518170" className="mt-5 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <p className="mt-3 text-sm leading-6 text-white">
              Out-of-hours delivery. Energy reduction and EPC improvement for retail and commercial estates.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Discuss your estate <ArrowIcon />
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
              Retail &amp; Commercial
            </p>
            <h1 className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-6xl">
              AHU works planned around<br />your trading hours.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white">
              Retail and commercial buildings operate on commercial timelines, trading hours, lease obligations, and EPC targets. AHU works have to fit around all of them. We plan around your calendar, not ours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Discuss your estate
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
                { stat: "Out-of-Hours", label: "Delivery" },
                { stat: "EPC", label: "Improvement" },
                { stat: "Nationwide", label: "Coverage" },
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

      {/* ── THE TRADING CONSTRAINT ────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                The operational constraint
              </p>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Retail Can&apos;t Close<br />for Plant Works.
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                Retail properties trade six or seven days a week. A supermarket or shopping centre closing for AHU maintenance is not an option. Works have to happen around trading hours, and in most cases, around tenant lease obligations that limit what landlords can do and when.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:text-[#1d5c42]"
                >
                  Discuss your programme →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <ul className="flex flex-col gap-3">
                {[
                  "Night works with full reinstatement before trading opens",
                  "Bank holiday and low-footfall window programming",
                  "Access through trading areas agreed in advance and managed carefully",
                  "Noise and dust contained, no impact on trading environment",
                  "Plant room works during trading hours where containment is confirmed",
                  "Co-ordination with estate management for access and permits",
                ].map((item) => (
                  <li key={item} className="flex gap-3 border-l-2 border-[#297858] bg-white/5 px-4 py-3">
                    <CheckIcon className="mt-1 shrink-0" />
                    <span className="text-sm leading-6 text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── ENERGY & COMPLIANCE PRESSURE ─────────────────────────────── */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                The energy pressure
              </p>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Rising Energy Costs<br />and EPC Pressure.
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-6 text-slate-500">
                Commercial property operators face growing pressure on energy performance. EPC ratings affect asset value and lease terms. AHU plant, particularly ageing belt-driven fan sets, is typically one of the largest energy consumers in the building. Targeted upgrades to EC fans and demand-controlled ventilation deliver measurable reduction at predictable cost.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: "EC fan upgrades",
                    body: "Replacing belt-driven fans with EC direct-drive within existing casings. 30–50% fan energy reduction, significant in buildings where AHUs run continuously during trading hours.",
                  },
                  {
                    title: "Controls and DCV",
                    body: "Demand-controlled ventilation reduces AHU energy consumption outside peak occupancy, particularly valuable in retail units with variable footfall throughout the day.",
                  },
                  {
                    title: "Energy performance documentation",
                    body: "We provide energy modelling and before-and-after performance data to support your energy reduction programme.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border border-slate-200 bg-white p-5">
                    <p className="text-sm font-bold text-slate-900">{item.title}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{item.body}</p>
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
              What we deliver in retail
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Services for Retail &amp; Commercial
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/air-handling-unit-refurbishment",
                label: "AHU Refurbishment",
                desc: "Condition survey and targeted refurbishment. Extend asset life and restore performance without full plant replacement.",
              },
              {
                href: "/ec-fan-upgrades-and-retrofits-for-hvac",
                label: "EC Fan Upgrades",
                desc: "30–50% fan energy reduction. Fitted within the existing AHU casing, minimal plant room disruption.",
              },
              {
                href: "/air-handling-unit-controller-solutions-upgrades",
                label: "Controller Upgrades",
                desc: "Demand-controlled ventilation and BMS integration. Reduces energy outside peak occupancy and adds fault monitoring across the estate.",
              },
              {
                href: "/air-handling-unit-coil-replacement",
                label: "Coil Replacement",
                desc: "Restore heating and cooling performance. Measured on site, sourced or manufactured, installed within the agreed works window.",
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
      <FAQAccordion faqs={faqs} theme="dark" />

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                Get in touch
              </p>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Discuss Your<br />Retail Estate
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                Tell us about the portfolio, the plant condition, and any access or trading hour constraints. We&apos;ll confirm what an out-of-hours programme looks like and what energy savings are achievable.
              </p>
              <div className="mt-7 space-y-3 border-l border-white/10 pl-5">
                <p className="text-sm text-white/60">Out-of-hours and overnight delivery as standard</p>
                <p className="text-sm text-white/60">Multi-site programme management for retail estates</p>
                <p className="text-sm text-white/60">Energy reduction and EPC documentation provided</p>
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
                    Tell us about the estate, the number of sites, and any programme or access constraints. We&apos;ll respond within one working day.
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
