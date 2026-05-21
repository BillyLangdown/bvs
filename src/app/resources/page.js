import Link from "next/link";
import { Container } from "@/components/site/Container";
import Image from "next/image";

export const metadata = {
  title: "HVAC Resources | BVS Building Ventilation Solutions",
  description:
    "Technical articles and guides on air volume calculation, humidity, and cooling and heating loads from the BVS engineering team.",
};

const articles = [
  {
    title: "Understanding Air Volume Calculation for Optimal Indoor Air Quality",
    excerpt:
      "Calculating the appropriate air volume is crucial for maintaining optimal indoor air quality. Proper ventilation ensures the removal of pollutants and replenishes the space with fresh air, contributing to a healthy and comfortable environment.",
    href: "https://www.bvs-ltd.co.uk/2023/06/14/understanding-air-volume-calculation-for-optimal-indoor-air-quality/",
  },
  {
    title: "Understanding Humidity Calculation for Optimal Indoor Conditions",
    excerpt:
      "Maintaining proper humidity levels is crucial for indoor comfort and various applications. During the winter months, heating air with low moisture content can cause dryness, understanding the calculation helps you specify and maintain the right conditions.",
    href: "https://www.bvs-ltd.co.uk/2023/06/14/understanding-humidity-calculation-for-optimal-indoor-conditions/",
  },
  {
    title: "Understanding Cooling & Heating Loads",
    excerpt:
      "When considering cooling loads, a general guideline is to allocate 120–160 watts per square metre, taking into account factors such as solar gain, people, and lighting. Alternatively, you can estimate the cooling requirement at 1 kilowatt per occupant.",
    href: "https://www.bvs-ltd.co.uk/2023/06/14/understanding-cooling-heating-loads/",
  },
];

export default function ResourcesPage() {
  return (
    <div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#111418] py-16 sm:py-20">

{/* Background Image */}
<div className="absolute inset-0">
  <Image
    src="/aerial-buildings.webp"
    alt="Aerial view of buildings and HVAC environments"
    fill
    sizes="100vw"
    priority
    placeholder="blur"
    blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
    className="object-cover object-center"
  />
  
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-[#111418]/40" />
  
  {/* Subtle gradient for depth */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#111418]/90 via-[#111418]/70 to-transparent" />
</div>

{/* Content */}
<Container className="relative">
  <div className="max-w-3xl">
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
      HVAC Resources
    </p>

    <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
      Technical Articles<br />& Guides
    </h1>

    <div className="mt-4 h-[3px] w-14 bg-[#297858]" />

    <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/65">
      Practical technical reading from the BVS engineering team, covering ventilation fundamentals, load calculations, and indoor environment management.
    </p>
  </div>
</Container>

</section>

      {/* Articles */}
      <section className="bg-surface-2 py-14 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <a
                key={article.title}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col border border-slate-200 bg-white p-6 transition-all hover:border-[#297858]/40 hover:shadow-sm"
              >
                <h2 className="text-sm font-extrabold leading-snug text-slate-900 group-hover:text-[#297858] transition-colors">
                  {article.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                  {article.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#297858] transition-all group-hover:gap-2.5">
                  Read article →
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#111418] py-12">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-white">
                Got a technical question?
              </h2>
              <p className="mt-1 text-sm text-white/55">
                If you are working through a specific ventilation or HVAC problem, the team are happy to help directly.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              Get in touch →
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
}
