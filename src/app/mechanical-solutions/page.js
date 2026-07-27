import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { TrustedByBar } from "@/components/site/TrustedByBar";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Mechanical Solutions | Commercial Mechanical Services",
  description: "Commercial mechanical solutions from BVS - mechanical & electrical works, industrial pipework, and commercial boiler & heating services. Gas Safe registered. UK nationwide.",
  path: "/mechanical-solutions",
});

const services = [
  {
    href: "/solutions/mechanical/mechanical-electrical",
    title: "Mechanical & Electrical",
    body: "Full M&E works to support HVAC installations and commercial building projects - from controls wiring and power supplies to full project management and commissioning.",
    icon: BoltIcon,
  },
  {
    href: "/industrial-pipework-services",
    title: "Industrial Pipework",
    body: "Installation, modification, and maintenance of commercial and industrial pipework systems for heating, cooling, and HVAC applications.",
    icon: PipeIcon,
  },
  {
    href: "/commercial-boiler-and-heating-services",
    title: "Commercial Boiler & Heating",
    body: "Gas Safe registered installation, servicing, and repair of commercial boilers and heating systems - keeping your building warm and your energy costs down.",
    icon: FlameIcon,
  },
];

export default function MechanicalSolutionsPage() {
  return (
    <div>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src="/Commercial-Gas-Works.webp"
            alt="BVS mechanical engineer carrying out commercial gas and heating works"
            fill
            priority
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 sm:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 via-[35%] to-transparent" />
        </div>

        <Container className="relative z-10 flex min-h-[620px] items-center py-14 pb-16 sm:min-h-[600px] sm:py-20 sm:pb-20">
          {/* Mobile */}
          <div className="sm:hidden max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Building Ventilation Solutions
            </p>
            <h1
              className="font-display text-3xl font-extrabold leading-[1.08] text-white"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Commercial mechanical<br />solutions.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <a href="tel:01256518170" className="mt-5 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <p
              className="mt-3 max-w-xl text-sm leading-6 text-white"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              M&E works, industrial pipework, and commercial boiler and heating services for commercial buildings across the UK.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Get a quote
                <ArrowIcon />
              </Link>
            </div>
          </div>
          {/* Desktop */}
          <div className="hidden sm:block max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Building Ventilation Solutions
            </p>
            <p
              className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-6xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Commercial mechanical<br />solutions.
            </p>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p
              className="mt-5 max-w-xl text-[15px] leading-7 text-white"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Our mechanical team delivers the full range of services needed to keep commercial buildings running - from associated M&E works on HVAC projects to pipework, boilers, and heating systems.
            </p>
            <a href="tel:01256518170" className="mt-6 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Get a quote
                <ArrowIcon />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "Gas Safe", label: "Registered" },
                { stat: "40+", label: "Years Experience" },
                { stat: "UK Wide", label: "Coverage" },
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

      <TrustedByBar />

      {/* ── SERVICES ───────────────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container>

          <ScrollReveal className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Our mechanical services
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              What We Offer
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
              BVS deliver the mechanical services that sit alongside and support HVAC installations in commercial buildings. Gas Safe registered and experienced across all types of commercial plant.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <ScrollReveal key={s.href} delay={i * 60}>
                  <Link
                    href={s.href}
                    className="group flex h-full flex-col border border-slate-200 bg-white p-8 transition-all duration-200 hover:border-[#297858]/30 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#297858]/10 text-[#297858]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-5 h-[3px] w-8 bg-[#297858] transition-all duration-300 group-hover:w-16" />
                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 flex-1">{s.body}</p>
                    <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#297858]">
                      Find out more →
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── WHY BVS ────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f7f6] py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <ScrollReveal delay={80}>
              <div className="relative h-[440px] overflow-hidden border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/ahu-installation.webp"
                  alt="BVS mechanical engineers installing commercial HVAC equipment"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                Why choose BVS
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Mechanical Works Done Right
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Our mechanical team works closely alongside BVS HVAC engineers, which means M&E, pipework, and heating works are coordinated as part of the broader building services project - not subcontracted out and left to self-manage.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                All gas works are carried out by Gas Safe registered engineers. Pipework is installed to commercial and industrial standards with full pressure testing and commissioning documentation.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Gas Safe registered engineers",
                  "Commercial and industrial pipework experience",
                  "Full project management and commissioning",
                  "Works coordinated with AHU and HVAC projects",
                  "Nationwide coverage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── CTA + FORM ─────────────────────────────────────────────────── */}
      <section className="bg-[#f7f6f5] py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Get in touch
              </p>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Talk to Our<br />Mechanical Team
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Tell us what you need and we will come back with a practical assessment and quote within one working day.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "M&E, pipework, and heating all in-house",
                  "Gas Safe registered for all gas works",
                  "Coordinated with HVAC projects",
                  "Fixed-price quotes, no hidden costs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckIcon /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border border-[#297858]/20 bg-[#297858]/5 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#297858]">Call us directly</p>
                <a href="tel:01256518170" className="mt-3 flex items-center gap-3 text-2xl font-extrabold text-slate-900 transition-colors hover:text-[#297858]">
                  <PhoneIcon /> 01256 518170
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="border border-slate-200 bg-white p-7">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#297858]">Enquiry</p>
                <p className="mb-5 text-xs text-slate-500">We will aim to respond within 24 hours</p>
                <QuickQuoteForm defaultService="Mechanical Solutions" />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── RELATED ────────────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-[#f5f7f6] py-12">
        <Container>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related services</p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/air-handling-unit-manufacturing-and-installation", label: "AHU Manufacturing & Installation" },
              { href: "/air-handling-unit-maintenance", label: "AHU Maintenance" },
              { href: "/case-studies", label: "Case Studies" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-[#297858] hover:text-[#297858]"
              >
                {l.label}
                <span className="text-slate-300 group-hover:translate-x-1 group-hover:text-[#297858] transition-transform">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

    </div>
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
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
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
function BoltIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PipeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function FlameIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2c0 6-6 8-6 14a6 6 0 0 0 12 0c0-3-2-5-2-8 0 0-1 2-2 3 0-4-2-9-2-9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
