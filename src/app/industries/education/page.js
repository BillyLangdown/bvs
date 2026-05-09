import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = {
  title: "Education Sector Ventilation | BVS Building Ventilation Solutions",
  description:
    "AHU refurbishment, EC fan upgrades, and ventilation services for schools, colleges, and universities. Delivered around academic calendars. UK nationwide.",
};

const faqs = [
  {
    q: "Can you work during term time?",
    a: "Most planned works are scheduled for school holiday periods to avoid disruption to teaching. Where works can be contained within plant rooms or non-teaching areas without creating noise or dust, limited term-time access is sometimes possible — we assess this case by case.",
  },
  {
    q: "How long does a typical school AHU refurbishment take?",
    a: "A single AHU refurbishment typically takes 3–5 days on site depending on scope. Where multiple units are being addressed, we programme works to make best use of the available holiday window — summer being the most common.",
  },
  {
    q: "Do you work in schools with children on site?",
    a: "Where works are required during term time, we follow safeguarding protocols appropriate to the site — including enhanced DBS checks for engineers where required. All access is managed through the site's visitor procedures.",
  },
  {
    q: "How do you approach budget constraints typical in education?",
    a: "We always present refurbishment and life extension alongside any replacement option. For education estates, this is usually the more practical route — restoring performance and extending asset life at significantly lower cost than full plant replacement.",
  },
  {
    q: "Can you survey the full estate and provide a prioritised programme?",
    a: "Yes. We carry out condition surveys across multiple buildings and produce a prioritised programme report — rating units by condition, compliance risk, and energy performance — which supports capital planning and budget bids.",
  },
  {
    q: "What age of buildings do you work in?",
    a: "We work across all building ages — from 1960s system-built schools through to newer academy builds. Older building stock typically has AHUs approaching or past their original design life, which is where prioritised refurbishment programmes deliver the most value.",
  },
];

export default function EducationPage() {
  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/school.png"
          alt="School building — BVS delivers AHU refurbishment and ventilation works around academic calendars"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 via-[50%] to-black/20" />

        <Container className="relative flex min-h-[520px] items-center py-14 pb-28 sm:min-h-[580px] sm:py-20 sm:pb-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Education
            </p>
            <h1
              className="font-display text-2xl font-extrabold uppercase leading-[1.08] text-white sm:text-5xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Around Term Time.<br />Within Budget.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-white/85" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              Educational buildings demand a specific kind of planning. Works must fit the academic calendar, respect safeguarding obligations, and deliver value in a sector where capital budgets are always under pressure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Speak to an engineer
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
                { stat: "Holiday Window", label: "Delivery Programme" },
                { stat: "Budget Aware", label: "Lifecycle Approach" },
                { stat: "UK Nationwide", label: "Any Estate Type" },
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

      {/* ── THE ACADEMIC CONSTRAINT ───────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                The key constraint
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                The Academic Calendar<br />Runs the Programme.
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                In education, the project window is fixed by the school year, not by contractor availability. The summer holidays — six weeks in most cases — are the primary delivery window for disruptive or noisy works. Easter and half-term windows allow limited access for smaller-scope tasks.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/55">
                This means programme planning matters more in education than almost any other sector. Delays cannot run into term time. Mobilisation, material lead times, and access arrangements all need to be in place before the holiday window opens.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:text-[#1d5c42]"
                >
                  Plan your summer programme →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="flex flex-col gap-4">
                {[
                  {
                    period: "Summer (6 weeks)",
                    desc: "The primary window for AHU refurbishment, fan replacement, coil works, and controls upgrades. Full plant room access with no occupancy constraints.",
                    color: "border-[#297858]",
                  },
                  {
                    period: "Easter & Half-Term",
                    desc: "Suitable for condition surveys, smaller-scope works, and preparation activities that don't create noise or dust in teaching areas.",
                    color: "border-white/20",
                  },
                  {
                    period: "Term Time",
                    desc: "Limited to non-disruptive survey work and pre-works activities in contained plant areas only — subject to agreement with the estates team.",
                    color: "border-white/10",
                  },
                ].map((item) => (
                  <div key={item.period} className={`border-l-2 ${item.color} bg-white/5 px-5 py-4`}>
                    <p className="text-sm font-bold text-white">{item.period}</p>
                    <p className="mt-1 text-xs leading-5 text-white/55">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── THE BUDGET AND LIFECYCLE QUESTION ─────────────────────────── */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                The lifecycle question
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
                Refurbish or Replace?
              </h2>
              <div className="mx-auto mt-4 h-[3px] w-10 bg-[#297858]" />
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                In education, the answer is almost always refurbish first. Capital budgets are under sustained pressure, procurement cycles are long, and a well-specified refurbishment can deliver another 10–15 years of reliable service at a fraction of full replacement cost.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={80}>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">

              <div className="border border-slate-200 bg-white p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Full AHU replacement
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-500">
                  <p>Long procurement lead times — often 3–6 months</p>
                  <p>High capital cost — difficult to justify in education budgets</p>
                  <p>Plant room access and structural works frequently required</p>
                  <p>Decommissioning, disposal, and installation costs on top</p>
                </div>
                <p className="mt-6 text-sm font-semibold text-slate-400">Often the right solution — but not always the only one</p>
              </div>

              <div className="relative overflow-hidden bg-[#111418] p-6 sm:p-8 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-[#297858]/20 to-transparent" />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#297858]">
                    Targeted refurbishment
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-white/80">
                    <p>New fans, coils, and controls within the existing casing</p>
                    <p>Delivered within the summer holiday window</p>
                    <p>Significantly lower capital cost — supportable within estate budgets</p>
                    <p>10–15 year life extension on plant that is structurally sound</p>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-white">More deliverable. More affordable. Appropriate for most education estates.</p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── COMMON CHALLENGES ─────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                What we find on site
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                Common Problems in<br />Education Building Stock.
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                Educational buildings, particularly those from the 1960s–1990s building programmes, share common AHU problems. Awareness of what to look for makes survey visits more productive and helps prioritise the estate efficiently.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <ul className="flex flex-col gap-3">
                {[
                  "Fixed-speed belt-driven fans running continuously without demand control",
                  "No BMS integration — AHUs running on timeclock only",
                  "Filter sections overdue for replacement — increasing pressure drop",
                  "Coils fouled or corroded — reduced heating and cooling capacity",
                  "Controls obsolete with no fault logging or remote monitoring",
                  "No commissioning records on file — performance unverified for years",
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

      {/* ── RELEVANT SERVICES ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              What we deliver in education
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              Services for Schools &amp; Universities
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/air-handling-unit-refurbishment",
                label: "AHU Refurbishment",
                desc: "Condition survey and costed refurbishment options. Extend asset life within the summer holiday programme.",
              },
              {
                href: "/ec-fan-upgrades-and-retrofits-for-hvac",
                label: "EC Fan Upgrades",
                desc: "Replace belt-driven fans with EC technology. 30–50% energy savings — significant for education energy budgets.",
              },
              {
                href: "/air-handling-unit-coil-replacement",
                label: "Coil Replacement",
                desc: "Restore heating and cooling performance. Sourced or manufactured to fit the existing AHU casing.",
              },
              {
                href: "/air-handling-unit-controller-solutions-upgrades",
                label: "Controller Upgrades",
                desc: "Replace obsolete controls. Add BMS integration, demand-controlled ventilation, and energy monitoring.",
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

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} />

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                Speak to an engineer
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
                Plan Your<br />Summer Programme
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                The earlier we talk, the more useful we can be. Tell us about your estate — building ages, known AHU issues, and any compliance or energy targets — and we&apos;ll help you develop a practical programme.
              </p>
              <div className="mt-7 space-y-3 border-l border-white/10 pl-5">
                <p className="text-sm text-white/60">Holiday window delivery — programme planned around your calendar</p>
                <p className="text-sm text-white/60">Condition surveys to support capital planning and budget bids</p>
                <p className="text-sm text-white/60">Schools, colleges, universities, and specialist estates</p>
                <p className="text-sm text-white/60">Direct response from engineers, not sales handlers</p>
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
                    Tell us about your estate, the size of the programme, and when you need works completed. We&apos;ll respond within one working day.
                  </p>
                  <div className="mt-7">
                    <QuickQuoteForm />
                  </div>
                  <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                      Engineering response within 24 working hours
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                      No obligation — free condition survey available
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
