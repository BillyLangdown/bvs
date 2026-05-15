import Link from "next/link";
import { Container } from "@/components/site/Container";
import { TrustBar } from "@/components/site/TrustBar";
import { ClientBar } from "@/components/site/ClientBar";

export const metadata = {
  title: "AHU Solutions",
  description:
    "Complete air handling unit solutions from BVS - refurbishment, manufacturing, installation, coil replacement, EC fan upgrades, and controller solutions. 40+ years experience, UK nationwide.",
};

const services = [
  {
    href: "/air-handling-unit-refurbishment",
    title: "AHU Refurbishment",
    body: "Extend the life of your existing AHU by 10–15+ years at a fraction of replacement cost. We survey, specify, and refurbish on-site with minimal disruption.",
  },
  {
    href: "/air-handling-unit-manufacturing",
    title: "AHU Manufacturing",
    body: "Custom-built air handling units in the UK to your exact specification. Off-the-shelf doesn't fit every building - we design and manufacture what you actually need.",
  },
  {
    href: "/air-handling-unit-coil-replacement",
    title: "Coil Replacement & Repair",
    body: "A failed coil brings your whole ventilation system down. We measure, manufacture or source, and replace - getting you back online as quickly as possible.",
  },
  {
    href: "/air-handling-unit-installation",
    title: "Installation & Contracting",
    body: "End-to-end AHU installation from survey to signed handover. We manage mechanical, electrical, and controls as one accountable team.",
  },
  {
    href: "/ec-fan-upgrades-and-retrofits-for-hvac",
    title: "EC Fan Upgrades",
    body: "Replace old AC induction motors with energy-efficient EC fans. Typical energy savings of 30–50%, with payback often under 3 years.",
  },
  {
    href: "/air-handling-unit-controller-solutions-upgrades",
    title: "Controller Solutions",
    body: "Modernise ageing AHU controls for better energy performance, fault detection, and BMS integration. Systems that pay for themselves.",
  },
];

export default function AhuSolutionsPage() {
  return (
    <div>
      <section className="bg-slate-900 py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Building Ventilation Solutions
            </p>
            <h1 className="font-display text-4xl font-extrabold uppercase leading-none text-white sm:text-5xl">
              AHU Solutions
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-emerald-500" />
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
              From emergency coil replacements to custom new-build installations, we cover
              the full spectrum of air handling unit services. One team, 40+ years of expertise,
              nationwide coverage.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500">
                Let&apos;s talk
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <a href="tel:01256518170" className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Call 01256 518170
              </a>
            </div>
            <p className="mt-4 text-xs text-white/40">No obligation · Budget flexible · Response within 24 hours</p>
          </div>
        </Container>
      </section>

      <TrustBar />
      <ClientBar />

      <section className="bg-white py-16">
        <Container>
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">Our services</p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">What We Do</h2>
            <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group border border-slate-200 bg-white p-8 transition-all duration-200 hover:border-emerald-200 hover:shadow-md">
                <div className="h-[3px] w-8 bg-emerald-700 transition-all duration-300 group-hover:w-16" />
                <h3 className="mt-5 font-display text-base font-bold uppercase text-slate-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{s.body}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">Find out more →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-emerald-950 py-14">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-extrabold uppercase text-white">Not sure which service you need?</p>
              <p className="mt-1 text-sm text-white/65">Tell us about your AHU and we&apos;ll tell you the most cost-effective solution - honestly.</p>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500">Let&apos;s talk</Link>
          </div>
        </Container>
      </section>

      <section className="bg-surface-2 py-14">
        <Container>
          <h2 className="font-display text-xl font-extrabold uppercase text-slate-900">Related Services</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/solutions/ventilation", label: "Ventilation Services" },
              { href: "/solutions/mechanical", label: "Mechanical Solutions" },
              { href: "/case-studies", label: "Case Studies" },
              { href: "/contact", label: "Contact Us" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="flex items-center justify-between border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 transition-colors hover:border-emerald-200 hover:bg-emerald-50">
                {l.label}<span className="ml-3 shrink-0 text-emerald-700">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
