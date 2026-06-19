import Link from "next/link";
import { Container } from "@/components/site/Container";

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

export const metadata = {
  title: "Ventilation Services",
  description:
    "Expert ventilation services from BVS - troubleshooting, validation surveys, and consultancy to keep your HVAC systems performing at their best.",
};

const services = [
  {
    href: "/air-handling-unit-troubleshooting",
    title: "Troubleshooting & Solutions",
    body: "Our engineers identify the root cause of performance issues quickly - airflow imbalance, component failure, controls faults - and restore your system with minimal disruption.",
  },
  {
    href: "/ahu-validation-ventilation-surveys",
    title: "Validation & Surveys",
    body: "Detailed condition surveys of your AHU assets with prioritised, costed recommendations. Know exactly what your plant needs and plan maintenance budgets with confidence.",
  },
];

export default function VentilationServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 py-20">
        <Container>
          {/* Mobile hero */}
          <div className="sm:hidden max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Building Ventilation Solutions
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.08] text-white">
              Ventilation services.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-emerald-500" />
            <a href="tel:01256518170" className="mt-5 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Fault diagnosis, validation surveys, and consultancy to keep your HVAC systems running.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Get a quote <ArrowIcon />
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
          {/* Desktop hero */}
          <div className="hidden sm:block max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Building Ventilation Solutions
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Ventilation services.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-emerald-500" />
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75">
              From fault diagnosis to formal validation surveys, our ventilation
              services help you maintain healthy indoor air quality, comply with
              regulations, and extend the life of your HVAC assets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                Get a quote
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-white py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Our ventilation services
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900">
              How we can help
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group border border-slate-200 bg-white p-8 transition-all duration-200 hover:border-emerald-200 hover:shadow-md"
              >
                <div className="h-[3px] w-8 bg-emerald-700 transition-all duration-300 group-hover:w-16" />
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{s.body}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Find out more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-emerald-950 py-14">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xl font-extrabold text-white">
                Speak to our ventilation team
              </p>
              <p className="mt-1 text-sm text-white/65">
                Call us on{" "}
                <a href="tel:01256518170" className="underline hover:text-white">
                  01256 518170
                </a>{" "}
                or get a quote online.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
            >
              Get a quote
            </Link>
          </div>
        </Container>
      </section>

      {/* Related */}
      <section className="bg-surface-2 py-14">
        <Container>
          <h2 className="text-xl font-extrabold text-slate-900">
            Related Services
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/solutions/ahu", label: "AHU Solutions" },
              { href: "/air-handling-unit-refurbishment", label: "AHU Refurbishment" },
              { href: "/mechanical-solutions", label: "Mechanical Solutions" },
              { href: "/case-studies", label: "Case Studies" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center justify-between border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 transition-colors hover:border-emerald-200 hover:bg-emerald-50"
              >
                {l.label}
                <span className="ml-3 shrink-0 text-emerald-700">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
