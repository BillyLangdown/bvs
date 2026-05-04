import Link from "next/link";
import { Container } from "@/components/site/Container";

export const metadata = {
  title: "Industries We Serve",
  description: "BVS delivers AHU refurbishment, EC fan upgrades, and ventilation solutions across education, healthcare, defence, hospitality, leisure, and retail sectors.",
};

const sectors = [
  {
    slug: "education",
    label: "Education",
    icon: "🎓",
    summary: "Schools, colleges, and universities. Compliance-led AHU management with minimum disruption to operations.",
  },
  {
    slug: "hospital",
    label: "Hospital & Healthcare",
    icon: "🏥",
    summary: "NHS and private healthcare. Critical-environment ventilation where compliance is non-negotiable.",
  },
  {
    slug: "defence",
    label: "Defence",
    icon: "🛡️",
    summary: "Secure facilities and government estates. Experienced working within strict access and clearance requirements.",
  },
  {
    slug: "hotel",
    label: "Hotel & Hospitality",
    icon: "🏨",
    summary: "Maintaining guest comfort and air quality across hotels and hospitality venues - with minimal downtime.",
  },
  {
    slug: "leisure-centre",
    label: "Leisure Centres",
    icon: "🏊",
    summary: "High-humidity environments require specialist AHU management. We understand the demands of leisure facilities.",
  },
  {
    slug: "retail",
    label: "Retail",
    icon: "🏬",
    summary: "Commercial HVAC for retail parks, supermarkets, and shopping centres. Planned and reactive works.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="pb-20 lg:pb-0">
      <section className="bg-slate-900 py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">Industries</p>
            <h1 className="font-display text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
              Sectors We Work In
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-emerald-500" />
            <p className="mt-5 max-w-lg text-base leading-7 text-white/70">
              BVS delivers AHU refurbishment, EC fan upgrades, coil replacement, and ventilation services
              across a wide range of commercial and public sector industries.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <Link
                key={s.slug}
                href={`/industries/${s.slug}`}
                className="group flex flex-col gap-4 border border-slate-100 p-7 transition-all hover:border-emerald-300 hover:shadow-md"
              >
                <span className="text-4xl">{s.icon}</span>
                <div>
                  <h2 className="font-display text-lg font-extrabold uppercase text-slate-900 group-hover:text-emerald-800">
                    {s.label}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{s.summary}</p>
                </div>
                <p className="mt-auto text-xs font-semibold text-emerald-700">Find out more →</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-emerald-900 py-12">
        <Container>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-extrabold uppercase text-white">
                Don&apos;t see your sector?
              </h2>
              <p className="mt-1 text-sm text-white/65">
                We work across many more building types. Get in touch and we&apos;ll discuss your requirements.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-emerald-900 hover:bg-emerald-50 transition-colors"
            >
              Discuss your project →
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
