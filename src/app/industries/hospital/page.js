import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { TrustedByBar } from "@/components/site/TrustedByBar";

export const metadata = {
  title: "Healthcare & NHS Ventilation | BVS Building Ventilation Solutions",
  description:
    "AHU refurbishment, EC fan upgrades, and validation surveys for NHS and private healthcare. Live clinical environments managed as standard. UK nationwide.",
};

const faqs = [
  {
    q: "Can you work in live clinical environments?",
    a: "Yes. The majority of our healthcare work takes place in occupied buildings. We plan all works with phased shutdown windows, temporary ventilation where required, and infection control measures appropriate to the clinical environment.",
  },
  {
    q: "Do you understand clinical ventilation requirements?",
    a: "We have worked in NHS and private healthcare environments for over 40 years. We are familiar with the ventilation requirements for different clinical settings: theatres, wards, isolation rooms, and critical care. We commission and document works to the standards appropriate for each area.",
  },
  {
    q: "Can you validate AHU performance?",
    a: "We carry out airflow validation surveys that confirm performance against the relevant parameters for the clinical environment: air change rates, pressure differentials, filter conditions, and temperature. We produce a formal report suitable for estates records.",
  },
  {
    q: "How do you manage infection control during works?",
    a: "We follow site-specific infection control protocols including dustless working, appropriate PPE, and co-ordination with IPC teams on site. Access to sensitive areas is agreed with the estates team before works begin.",
  },
  {
    q: "Can you replace AHUs without shutting down a ward or theatre?",
    a: "In most cases, yes. We manage phased works so ventilation continues during replacement, using temporary supply arrangements where necessary. Where a planned shutdown is unavoidable, we work within agreed maintenance windows.",
  },
  {
    q: "Do you work with NHS Trusts directly or through main contractors?",
    a: "Both. We work as specialist sub-contractors on major refurbishment programmes and directly with NHS estates teams on planned maintenance and lifecycle replacement projects.",
  },
];

export default function HospitalPage() {
  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/hospital.webp"
          alt="NHS hospital corridor — BVS works in live clinical environments"
          fill
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 via-[50%] to-black/20" />

        <Container className="relative flex min-h-[520px] items-center py-14 pb-28 sm:min-h-[580px] sm:py-20 sm:pb-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Healthcare &amp; NHS
            </p>
            <h1
              className="font-display text-2xl font-extrabold uppercase leading-[1.08] text-white sm:text-5xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Ventilation Works in<br />Live Clinical Environments
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-white/85" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              Healthcare ventilation operates under some of the most demanding conditions in the built environment. We understand clinical environments, how to work in live hospitals, and what it means when AHU plant fails.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Get in touch
                <ArrowIcon />
              </Link>
              <Link
                href="/air-handling-unit-refurbishment"
                className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                AHU refurbishment
              </Link>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "Clinical", label: "Environment Experience" },
                { stat: "24/7", label: "Live Site Capability" },
                { stat: "NHS & Private", label: "Healthcare Experience" },
              ].map((s) => (
                <div key={s.label} className="px-2 text-center sm:px-6">
                  <p className="font-display text-sm font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-wide text-white/55 sm:text-[10px]">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      <TrustedByBar />

      {/* ── THE CLINICAL ENVIRONMENT ──────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                The clinical environment
              </p>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Clinical Environments<br />Demand Different.
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                When AHU plant fails in a hospital, the consequences are immediate and clinical. A failed theatre circuit means a cancelled list. A loss of negative pressure in an isolation room creates an infection risk. Inadequate air change rates on a ward are a patient safety issue.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/55">
                AHU plant in clinical areas must deliver validated performance, correct air change rates, pressure relationships, filtration grade, and temperature control, and maintain that performance reliably between planned maintenance intervals.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:text-[#1d5c42]"
                >
                  Discuss your estate →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="flex flex-col gap-4">
                {[
                  {
                    label: "Theatres & Clean Rooms",
                    body: "Positive pressure, HEPA H14 filtration, 20+ air changes per hour. Any AHU failure in a theatre circuit creates an immediate clinical risk and planned list cancellation.",
                  },
                  {
                    label: "Isolation Rooms",
                    body: "Negative pressure relative to adjacent spaces, sealed ductwork transitions, and independent exhaust. Systems require regular pressure verification.",
                  },
                  {
                    label: "General Wards & Departments",
                    body: "Comfort ventilation with documented air change rates, humidity control, and temperature compliance. Older wards are frequently running on AHUs installed in the original build.",
                  },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-[#297858] bg-white/5 px-5 py-4">
                    <p className="text-sm font-bold text-white">{item.label}</p>
                    <p className="mt-1 text-xs leading-5 text-white/55">{item.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── THE AGEING ESTATE ─────────────────────────────────────────── */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              What we find on site
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              The Reality of Ageing<br />NHS Plant
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Much of the UK NHS estate was built between 1960 and 1990. The AHU plant installed in those buildings was designed for a 20–25 year life. Many are still running. When we arrive on site, we typically encounter the same issues across trusts.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Belt-driven fans past service life",
                desc: "Running at fixed speed regardless of demand. Bearing wear, belt slip, and increasing energy consumption, with no variable speed capability.",
              },
              {
                title: "Filter banks overdue for replacement",
                desc: "Pressure drop across filter sections rising above permissible limits. In clinical areas, this directly affects declared air change rates.",
              },
              {
                title: "Coils corroded or fouled",
                desc: "Water chemistry treatment failures, aggressive condensate, or frost damage leading to loss of heating or cooling capacity.",
              },
              {
                title: "No commissioning records",
                desc: "Original handover documentation lost or never produced. Estates teams cannot confirm current performance against the design specification.",
              },
              {
                title: "Obsolete controls and no BMS",
                desc: "Standalone controllers with no fault logging, no alarms, and no connection to building management systems. Problems go undetected.",
              },
              {
                title: "Insulation and ductwork deterioration",
                desc: "Deteriorating duct insulation creating condensation risk and potential for mould growth, particularly in older plant rooms.",
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

      {/* ── HOW WE WORK IN CLINICAL ENVIRONMENTS ─────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                Our approach
              </p>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Planned Around<br />Clinical Operations.
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                Healthcare projects are different from commercial refurbishments. The operational environment, the compliance obligations, and the consequences of disruption require a different kind of contractor, one that plans works around the hospital, not the other way around.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/55">
                Our engineers have worked in NHS environments for 40+ years. We understand how estates co-ordinators work, what IPC teams need to know, and why documentation matters as much as the works themselves.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Phased shutdown windows",
                    desc: "Works are sequenced so ventilation is never fully lost. Planned downtime agreed with estates and clinical teams in advance.",
                  },
                  {
                    title: "Temporary ventilation",
                    desc: "Where shutdown of a clinical circuit is unavoidable, temporary supply is assessed and arranged before works commence.",
                  },
                  {
                    title: "Infection control co-ordination",
                    desc: "Dustless working methods, sealed access routes, and co-ordination with IPC leads before any access to sensitive areas.",
                  },
                  {
                    title: "Post-works validation",
                    desc: "Airflow performance confirmed and documented on completion. Full commissioning record issued for estates files.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white/5 p-5">
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/55">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── RELEVANT SERVICES ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              What we deliver in healthcare
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Services for NHS &amp; Private Healthcare
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/air-handling-unit-refurbishment",
                label: "AHU Refurbishment",
                desc: "Extend the service life of clinical AHUs. Condition survey with costed options before any commitment to works.",
              },
              {
                href: "/ec-fan-upgrades-and-retrofits-for-hvac",
                label: "EC Fan Upgrades",
                desc: "Replace belt-driven fans with EC direct-drive within existing AHU casings. Energy savings and reduced maintenance overhead.",
              },
              {
                href: "/air-handling-unit-coil-replacement",
                label: "Coil Replacement",
                desc: "Restore heating and cooling performance. Any make or model, measured on site and replaced within the existing casing.",
              },
              {
                href: "/air-handling-unit-controller-solutions-upgrades",
                label: "Controller Upgrades",
                desc: "Replace obsolete controls with open-protocol BMS-integrated systems. Fault logging and remote monitoring enabled.",
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

      {/* ── CASE STUDY ────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                Case study
              </p>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                NHS Hospital<br />12-AHU Programme
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                A district general hospital required a phased replacement programme for 12 AHUs across critical wards, theatres, and department areas. Original plant was over 30 years old and several units had lost measurable performance.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="border-l-2 border-white/15 pl-4">
                  <span className="text-sm text-white/55">Programme delivered over 18 months around live clinical operations</span>
                </div>
                <div className="border-l-2 border-white/15 pl-4">
                  <span className="text-sm text-white/55">Performance validation carried out on completion of each unit</span>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/55">
                Each AHU was replaced within an agreed shutdown window, with temporary ventilation in place for critical areas. Full commissioning records and as-fitted drawings were issued for the estates compliance file on each unit.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm font-bold text-white">Zero unplanned clinical service interruptions across the programme</span>
                </div>
                <div className="border-l-2 border-[#297858] pl-4">
                  <span className="text-sm text-white/80">Full commissioning documentation issued for all 12 units</span>
                </div>
              </div>
              <div className="mt-7">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                >
                  View all case studies
                  <ArrowIcon />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="relative h-full min-h-[420px] overflow-hidden shadow-lg lg:min-h-[520px]">
                <Image
                  src="/hospital.webp"
                  alt="NHS hospital plant room, BVS AHU replacement programme in a live clinical environment"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
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
                Discuss Your<br />Healthcare Estate
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                Tell us about your estate, the age and condition of the plant, and any compliance concerns. We&apos;ll confirm what the practical options are and how we can work around your clinical operations.
              </p>
              <div className="mt-7 space-y-3 border-l border-white/10 pl-5">
                <p className="text-sm text-white/60">Validation and documentation as standard on all clinical works</p>
                <p className="text-sm text-white/60">Live clinical environments managed routinely</p>
                <p className="text-sm text-white/60">NHS Trusts, private healthcare, and specialist facilities</p>
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
                    Tell us about your healthcare estate, plant age, compliance concerns, or a specific project requirement. We&apos;ll respond within one working day.
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
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-[#297858]">
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
