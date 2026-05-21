import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { TrustedByBar } from "@/components/site/TrustedByBar";
function Zap({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Wrench({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ClipboardCheck({ className, strokeWidth = 2 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 14 2 2 4-4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const metadata = {
  title: "EC Fan Upgrades & Retrofits for Existing AHUs | BVS",
  description:
    "EC fan retrofits for existing air handling units. Reduce energy consumption, improve reliability, and support decarbonisation targets, without full AHU replacement.",
};



const faqs = [
  {
    q: "Can EC fans be retrofitted into any existing AHU?",
    a: "In the vast majority of cases, yes. EC plug fans can replace belt-drive or direct-drive AC fan sets in most AHU configurations. We confirm suitability at the audit stage before any commitment is made.",
  },
  {
    q: "Does the AHU casing need to be replaced?",
    a: "No. The retrofit upgrades the fan set within the existing AHU casing. The unit remains in place and the existing ductwork connections and services stay intact, which is what makes it a cost-effective alternative to full replacement.",
  },
  {
    q: "How much energy can an EC fan retrofit save?",
    a: "EC motors are significantly more efficient than AC induction motors, particularly at part load. The actual saving depends on your current motor type and operating hours. We model this against your consumption before you commit to any works.",
  },
  {
    q: "How disruptive is the installation?",
    a: "A single fan set replacement typically takes one day on site. Where multiple sets are being upgraded, we stagger works to keep ventilation running throughout, or complete during a planned shutdown.",
  },
  {
    q: "What controls integration do EC fans require?",
    a: "We can connect to a manual potentiometer for simple speed control, or we supply a 0–10V wire that can be configured for BMS integration. BMS connection to be made by others.",
  },
];

export default function ECFanUpgradesPage() {
  return (
    <div>

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/fan-attached-to-bulkhead.webp"
          alt="EC fan unit installed in an existing air handling unit"
          fill
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 via-[35%] to-transparent" />

        <Container className="relative flex min-h-[620px] items-center py-14 pb-28 sm:min-h-[600px] sm:py-20 sm:pb-20">
          <div className="max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              EC Fan Upgrades &amp; Retrofits
            </p>
            <h1
              className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-6xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Lower Energy Use<br />and Better Reliability
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p
              className="mt-5 max-w-xl text-[15px] leading-7 text-white"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              EC fan retrofits upgrade existing AHU fan systems to improve efficiency, reliability, and control without full unit replacement, reducing energy use and carbon output.
            </p>
            <p className="mt-6 text-sm text-white/70">
              Call us:{" "}
              <a href="tel:01256518170" className="font-semibold text-white transition-colors hover:text-white/80">01256 518170</a>
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#upgrade"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Discuss Your Upgrade
                <ArrowIcon />
              </a>
              <a
                href="#next-section"
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
                { stat: "40+", label: "Years Experience" },
                { stat: "Nationwide", label: "UK Coverage" },
                { stat: "All Makes", label: "& Configurations" },
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

      {/* ── 2. PROBLEM ── surface-2 ──────────────────────────────────────── */}
 

<section className="bg-[#f7f6f5] py-14 sm:py-18">
  <Container>
    <ScrollReveal className="mb-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        What the upgrade delivers
      </p>

      <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
        Why Upgrade
        <br />
        to EC Fans
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
    </ScrollReveal>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {[
        {
          heading: "Lower Energy Use",
          body: "Higher efficiency EC motors reduce energy consumption. Savings can be modelled against existing systems before upgrade.",
        },
        {
          heading: "Higher Reliability",
          body: "No belts or pulleys. Fewer moving parts means fewer failures and lower maintenance.",
        },
        {
          heading: "Better Control",
          body: "Direct BMS or 0–10V control gives accurate speed adjustment and improved part-load efficiency.",
        },
        {
          heading: "Longer Asset Life",
          body: "Retrofit EC upgrades extend AHU life without replacing the full unit or casing.",
        },
        {
          heading: "Redundancy",
          body: "Dual fan configurations available where system requirements demand a backup option.",
        },
      ].map((item, i) => (
        <ScrollReveal key={item.heading} delay={i * 60} className="h-full">
          <div className="h-full border-t-2 border-[#297858] bg-white p-5">
            <h3 className="text-sm font-extrabold text-slate-900">{item.heading}</h3>
            <div className="my-3 h-px bg-slate-200" />
            <p className="text-xs leading-5 text-slate-500">{item.body}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </Container>
</section>

      {/* ── 3. SOLUTION ── dark, card-based comparison ───────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
  <Container>
    <ScrollReveal className="max-w-3xl">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
        EC Fan Upgrades
      </p>

      <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
        Why Facilities Teams Upgrade to EC Fans
      </h2>

      <div className="mt-3 h-[3px] w-10 bg-[#297858]" />

      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">
        EC fan retrofits improve airflow efficiency, reduce maintenance,
        and provide greater control compared to traditional AC fan sets.
      </p>
    </ScrollReveal>

    {/* Comparison table */}
    <div className="mt-10 overflow-hidden border border-white/10 bg-white/[0.03]">
      {/* Header */}
      <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr] border-b border-white/10 bg-white/[0.02]">
        <div className="border-r border-white/10 px-5 py-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
            Comparison
          </p>
        </div>

        <div className="border-r border-white/10 px-5 py-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
            Traditional AC
          </p>
        </div>

        <div className="px-5 py-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8fd1b5]">
            EC Fan Upgrade
          </p>
        </div>
      </div>

      {[
        {
          label: "Lower energy consumption",
          ac: false,
          ec: true,
        },
        {
          label: "Reduced maintenance requirements",
          ac: false,
          ec: true,
        },
        {
          label: "Variable speed control",
          ac: false,
          ec: true,
        },
        {
          label: "BMS compatibility",
          ac: false,
          ec: true,
        },
        {
          label: "Fault diagnostics",
          ac: false,
          ec: true,
        },
      ].map((row, i, arr) => (
        <div
          key={row.label}
          className={`grid grid-cols-[1.4fr_0.8fr_0.8fr] ${
            i !== arr.length - 1 ? "border-b border-white/10" : ""
          }`}
        >
          {/* Label */}
          <div className="border-r border-white/10 px-5 py-5">
            <p className="text-sm font-medium text-white">
              {row.label}
            </p>
          </div>

          {/* AC */}
          <div className="flex items-center justify-center border-r border-white/10 px-5 py-5">
            {row.ac ? (
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <svg
                  className="h-3.5 w-3.5 text-white/70"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.415 0l-3-3a1 1 0 111.414-1.41l2.293 2.29 6.497-6.49a1 1 0 011.411 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              <div className="h-3 w-3 rounded-full border border-white/15 bg-transparent" />
            )}
          </div>

          {/* EC */}
          <div className="flex items-center justify-center px-5 py-5">
            {row.ec ? (
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#297858]">
                <svg
                  className="h-3.5 w-3.5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.415 0l-3-3a1 1 0 111.414-1.41l2.293 2.29 6.497-6.49a1 1 0 011.411 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              <div className="h-3 w-3 rounded-full border border-white/15 bg-transparent" />
            )}
          </div>
        </div>
      ))}
    </div>

  
{/* SIMPLE ENERGY COMPARISON - TWO BARS ONLY */}
<div className="mt-8 border border-white/10 bg-white/[0.02] p-6">

  <div className="mb-6">
    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#297858]">
      Energy Consumption
    </p>
    <h3 className="mt-2 text-lg font-bold text-white">
      AC vs EC Fan Annual Energy Use
    </h3>
    <p className="mt-1 text-xs text-white/40">
      Typical AHU fan set (per year, 6,000–8,000 hrs operation)
    </p>
  </div>

  <div className="space-y-6">

    {/* AC */}
    <div>
      <div className="mb-2 flex justify-between text-xs text-white/60">
        <span>Traditional AC Fan System</span>
        <span>10,000 kWh</span>
      </div>
      <div className="h-6 w-full bg-white/10">
        <div className="h-6 w-[100%] bg-white/30" />
      </div>
    </div>

    {/* EC */}
    <div>
      <div className="mb-2 flex justify-between text-xs text-white/60">
        <span>EC Fan System</span>
        <span>5,800 kWh</span>
      </div>
      <div className="h-6 w-full bg-white/10">
        <div className="h-6 w-[58%] bg-[#297858]" />
      </div>
    </div>

  </div>

  {/* key takeaway */}
  <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/40">
    EC fan upgrades typically reduce energy consumption by ~40–45% while maintaining identical airflow performance.
  </div>

</div>
  </Container>
</section>

      {/* ── 5. SOCIAL PROOF ── dark ───────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                Project example
              </p>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Leisure Centre<br />EC Fan Retrofit
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                Failed belt-driven fans in a pool hall AHU caused complete airflow loss and uncontrolled humidity. The belt drive arrangement was beyond economic repair. Rather than replacing the AHU, BVS removed the existing fan set, installed EC plug fans within the original casing, and restored full airflow within two days.
              </p>
              <div className="mt-6 space-y-3">
                <div className="border-l-2 border-[#297858] pl-4">
                  <p className="text-sm leading-6 text-white/65">
                    Full airflow and humidity control restored. Ongoing belt maintenance overhead eliminated. AHU casing and ductwork connections untouched.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
  <Link
    href="/case-studies/leisure-centre-ec-fan-retrofit"
    className="inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
  >
    Read full case study
  </Link>

  <Link
    href="/case-studies"
    className="text-sm font-semibold text-white/60 transition-colors hover:text-white"
  >
    View all case studies →
  </Link>
</div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="relative min-h-[300px] overflow-hidden lg:min-h-[420px]">
                <Image
                  src="/swimming-pool.webp"
                  alt="Leisure centre, EC fan retrofit restored full airflow and humidity control"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 6. HOW IT WORKS ── surface-2 ─────────────────────────────────── */}
      <section className="bg-[#f7f6f5] py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              How it works
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              From inital appointment to<br />Return to Service
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                title: "Discuss your requirements",
                body: "Talk through your system setup, existing fan types, and targets. We confirm feasibility and what an upgrade could deliver before any site visit.",
                points: ["Feasibility confirmed upfront", "Energy saving potential discussed", "No commitment required"],
              },
              {
                n: "02",
                title: "Site survey",
                body: "We visit site to audit your existing fan sets, record motor type and current power draw, and produce an energy model with projected savings and payback assessment.",
                points: ["Motor type and consumption recorded", "Energy model produced", "Recommendations from our engineers"],
              },
              {
                n: "03",
                title: "Fan selection",
                body: "EC fans are selected to match the existing airflow duty, static pressure, and speed range. Controls integration is specified at the same time.",
                points: ["Matched to existing duty", "Ziehl-Abegg, ebm-papst, Systemair", "BMS interface specified"],
              },
              {
                n: "04",
                title: "Installation",
                body: "The existing fan and motor assembly is removed and the EC unit installed. Electrical supply, controls wiring, commissioning, and airflow verification all included.",
                points: ["Existing fan set fully removed", "Electrical and controls wired", "Airflow and speed verified on completion"],
              },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 60}>
                <div className="border border-slate-200 bg-white p-5">
                  <span className="text-4xl font-extrabold text-[#297858]/15">{step.n}</span>
                  <h3 className="mt-2 text-sm font-extrabold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{step.body}</p>
                  <ul className="mt-3 space-y-1.5">
                    {step.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[11px] text-slate-400">
                        <span className="mt-1.5 h-1 w-1.5 shrink-0 bg-[#297858]" />
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

      {/* ── 8. FINAL CTA ── white ────────────────────────────────────────── */}
      <section id="upgrade" className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Get in touch
              </p>
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Get an Upgrade<br />Proposal
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Tell us how many fan sets, the current motor type, and typical operating hours. We&apos;ll produce an energy model showing projected savings and payback before any commitment to works.
              </p>
              <div className="mt-6 space-y-3 border-l-2 border-slate-200 pl-5">
  
  {[
    "Upgrade proposal tailored to your system",
    "All major AHU makes and configurations covered",
    "Direct response, not a sales team",
  ].map((item) => (
    <div key={item} className="flex items-start gap-2.5">
      <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
      
      <p className="text-sm leading-6 text-slate-500">
        {item}
      </p>
    </div>
  ))}

</div>
              <div className="mt-6 border border-[#297858]/20 bg-[#297858]/5 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#297858]">Call us directly</p>
                <a href="tel:01256518170" className="mt-3 flex items-center gap-3 text-2xl font-extrabold text-slate-900 transition-colors hover:text-[#297858]">
                  <PhoneIcon /> 01256 518170
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="border border-slate-200 bg-white p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
                  Enquiry
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Send us the AHU details - number of fans, motor type, and operating schedule. We&apos;ll respond with a practical energy model within 24 hours.
                </p>
                <div className="mt-6"><QuickQuoteForm defaultService="EC Fan Upgrades" /></div>
                <div className="mt-5 flex flex-col gap-2 border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Response within 24 hours
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                    Discuss your project - no commitment required
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 9. FAQ ── surface-2 ───────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} theme="dark" />

      {/* ── RELATED SERVICES ── white ────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related services</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/air-handling-unit-controller-solutions-upgrades", label: "Controller Upgrades" },
              { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
              { href: "/air-handling-unit-manufactoring-and-installation", label: "AHU Manufacturing & Installation" },
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

