import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/site/Container";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { sectorData } from "../_sectorData";

export async function generateStaticParams() {
  return Object.keys(sectorData).map((sector) => ({ sector }));
}

export async function generateMetadata({ params }) {
  const { sector } = await params;
  const data = sectorData[sector];
  if (!data) return {};
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function IndustrySectorPage({ params }) {
  const { sector } = await params;
  const data = sectorData[sector];
  if (!data) notFound();

  return (
    <div className="pb-20 lg:pb-0">

      {/* Hero */}
      <section className="bg-slate-900 py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Industries - {data.title}
            </p>
            <h1 className="font-display text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
              {data.headline}
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-emerald-500" />
            <p className="mt-5 max-w-lg text-base leading-7 text-white/70">
              {data.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
              >
                Discuss your project →
              </Link>
              <a
                href="tel:01256518170"
                className="inline-flex items-center gap-2 border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Call 01256 518170
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Services + form */}
      <section className="bg-surface-2 py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-700">What we deliver</p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">
                Services for {data.title}
              </h2>
              <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
              <ul className="mt-7 flex flex-col gap-3">
                {data.services.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-emerald-700">
                      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-slate-700">{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-l-2 border-emerald-700 pl-5">
                <p className="text-sm leading-6 text-slate-600">{data.clients}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/air-handling-unit-refurbishment"
                  className="border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                >
                  AHU Refurbishment
                </Link>
                <Link
                  href="/ec-fan-upgrades-and-retrofits-for-hvac"
                  className="border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                >
                  EC Fan Upgrades
                </Link>
                <Link
                  href="/air-handling-unit-coil-replacement"
                  className="border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                >
                  Coil Replacement
                </Link>
              </div>
            </div>

            <div className="border border-slate-200 bg-white p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-700">Get in touch</p>
              <h3 className="mb-5 font-display text-lg font-extrabold uppercase text-slate-900">
                Discuss your {data.title} project
              </h3>
              <QuickQuoteForm />
              <ul className="mt-5 flex flex-col gap-1.5">
                {["No obligation", "Response within one working day", "Speak directly with a specialist"].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-1 w-1 rounded-full bg-emerald-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA strip */}
      <section className="bg-emerald-900 py-10">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-extrabold uppercase text-white">
                40+ years of HVAC expertise
              </h2>
              <p className="mt-1 text-sm text-white/60">
                Trusted by NHS Trusts, Marriott, Disney, and more across the UK.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="shrink-0 inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              View case studies →
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
