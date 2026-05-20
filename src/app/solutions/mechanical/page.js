import Link from "next/link";
import { Container } from "@/components/site/Container";

export const metadata = {
  title: "Mechanical Solutions",
  description:
    "Commercial mechanical solutions from BVS - mechanical & electrical works, industrial pipework, and commercial boiler & heating services across the UK.",
};

const services = [
  {
    href: "/solutions/mechanical/mechanical-electrical",
    title: "Mechanical & Electrical Solutions",
    body: "Full M&E works to support HVAC installations and commercial building projects - from controls wiring and power supplies to full project management and commissioning.",
  },
  {
    href: "/solutions/mechanical/industrial-pipework",
    title: "Industrial Pipework",
    body: "Installation, modification, and maintenance of commercial and industrial pipework systems for heating, cooling, and HVAC applications.",
  },
  {
    href: "/solutions/mechanical/commercial-boiler-heating",
    title: "Commercial Boiler & Heating",
    body: "Gas Safe registered installation, servicing, and repair of commercial boilers and heating systems - keeping your building warm and your energy costs down.",
  },
];

export default function MechanicalSolutionsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Building Ventilation Solutions
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Mechanical Solutions
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-emerald-500" />
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75">
              Our mechanical team delivers the full range of services needed to
              keep commercial buildings running - from associated M&E works on
              HVAC projects to pipework, boilers, and heating systems.
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
              Our mechanical services
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900">
              What we offer
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
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
                Talk to our mechanical team
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
              { href: "/solutions/ventilation", label: "Ventilation Services" },
              { href: "/air-handling-unit-manufactoring-and-installation", label: "AHU Manufacturing & Installation" },
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
