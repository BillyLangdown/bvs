import Link from "next/link";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getCaseStudies } from "@/lib/wordpress/api";

export const metadata = {
  title: "Case Studies | BVS Building Ventilation Solutions",
  description:
    "Real projects from BVS. AHU refurbishment, EC fan upgrades, coil replacement, and controller programmes across healthcare, hospitality, education, and more.",
};

const placeholderStudies = [
  {
    slug: null,
    sector: "Healthcare",
    title: "NHS Trust — 12-AHU Programme, Live Hospital Estate",
    summary:
      "Full AHU refurbishment programme across a live clinical facility. EC fan conversion, coil replacement, and controls upgrade phased around ward operations and infection-control requirements.",
    tags: ["AHU Refurbishment", "EC Fan Upgrade", "NHS"],
  },
  {
    slug: null,
    sector: "Hospitality",
    title: "Central London Hotel — Emergency Coil Replacement",
    summary:
      "Manufacturer discontinued. Coil measured on site, manufactured to match original specification, and replaced within a 4-day window to avoid revenue impact. Unit back to full operation.",
    tags: ["Coil Replacement", "Hotel"],
  },
  {
    slug: null,
    sector: "Commercial",
    title: "FM Portfolio — 14-Site Controls Programme",
    summary:
      "Obsolete AHU controllers replaced across a 14-site commercial FM portfolio. Open-protocol DDC panels installed with BMS integration. Average 22% energy reduction recorded post-commissioning.",
    tags: ["Controller Upgrade", "Multi-Site"],
  },
  {
    slug: null,
    sector: "Healthcare",
    title: "NHS Trust — Direct-Fit AHU Manufacturing, 8 Units",
    summary:
      "Original manufacturer discontinued the unit range. BVS manufactured 8 direct-fit replacements to match existing apertures and performance data, avoiding structural modifications.",
    tags: ["AHU Manufacturing", "NHS"],
  },
  {
    slug: null,
    sector: "Education",
    title: "University Campus — Summer Window EC Fan Retrofit",
    summary:
      "EC fan upgrades across six AHUs on a university campus, delivered within a six-week summer window. Full commissioning and BMS integration completed before term start.",
    tags: ["EC Fan Upgrade", "Education"],
  },
  {
    slug: null,
    sector: "Leisure",
    title: "Leisure Centre — Pool Hall AHU Refurbishment",
    summary:
      "High-humidity pool hall environment requiring corrosion-resistant specification throughout. EC fan conversion, coated coils, and stainless fixings specified for longevity in aggressive air quality conditions.",
    tags: ["AHU Refurbishment", "Leisure"],
  },
];

const sectorColours = {
  Healthcare: "bg-blue-50 text-blue-700",
  Hospitality: "bg-amber-50 text-amber-700",
  Commercial: "bg-slate-100 text-slate-700",
  Education: "bg-purple-50 text-purple-700",
  Leisure: "bg-teal-50 text-teal-700",
};

export default async function CaseStudiesPage() {
  let items = [];

  try {
    items = await getCaseStudies({ perPage: 100, revalidate: 300 });
  } catch {
    // WordPress not configured — placeholder studies are shown below
  }

  const hasWordPressContent = items?.length > 0;

  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              Case Studies
            </p>
            <h1 className="font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
              Real Projects.<br />Specific Problems.<br />Documented Results.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/65">
              Every project here is a real job — a specific building, a specific constraint, a specific outcome. We publish these because the detail matters more than the headline.
            </p>
          </div>
        </Container>
      </section>

      {/* ── CASE STUDIES GRID ─────────────────────────────────────────── */}
      <section className="bg-surface-2 py-14 sm:py-20">
        <Container>

          {hasWordPressContent ? (
            <>
              <ScrollReveal className="mb-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                  Recent work
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-slate-900">
                  Project Archive
                </h2>
                <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
              </ScrollReveal>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((cs, i) => (
                  <ScrollReveal key={cs.id} delay={i * 60}>
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="group flex flex-col border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-[#297858] hover:shadow-md"
                    >
                      <h2 className="font-display text-sm font-extrabold uppercase leading-snug text-slate-900 group-hover:text-[#297858]">
                        {cs.title?.rendered}
                      </h2>
                      <span className="mt-4 text-xs font-semibold text-[#297858] transition-all group-hover:translate-x-1">
                        Read case study →
                      </span>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </>
          ) : (
            <>
              <ScrollReveal className="mb-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                  Example work
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-slate-900">
                  The Kind of Work We Do
                </h2>
                <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  These are representative examples of the projects we undertake. For documented case studies and references for specific sectors, please get in touch directly.
                </p>
              </ScrollReveal>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {placeholderStudies.map((cs, i) => (
                  <ScrollReveal key={cs.title} delay={i * 60}>
                    <div className="flex flex-col border border-slate-200 bg-white p-6">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <span className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] ${sectorColours[cs.sector] ?? "bg-slate-100 text-slate-600"}`}>
                          {cs.sector}
                        </span>
                      </div>
                      <h2 className="font-display text-sm font-extrabold uppercase leading-snug text-slate-900">
                        {cs.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-slate-500">{cs.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cs.tags.map((t) => (
                          <span key={t} className="bg-surface-2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      {/* ── WHY CASE STUDIES MATTER ───────────────────────────────────── */}
      <section className="bg-[#111418] py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                heading: "Sector References",
                body: "If you need a reference from a specific sector — NHS, defence, education, hotel — we can provide direct client references for projects in that environment. Ask when you enquire.",
              },
              {
                heading: "No Two Projects Are the Same",
                body: "The constraints vary. The equipment varies. The access windows vary. We document what was done and why — not to promote ourselves, but because it helps clients understand what a realistic scope looks like.",
              },
              {
                heading: "We'll Tell You What Didn't Work Too",
                body: "Honest project documentation means including the complications. We are not interested in presenting a curated highlight reel. Clients making investment decisions deserve accurate information.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.heading} delay={i * 80}>
                <div className="border-l-2 border-[#297858] pl-5">
                  <h3 className="font-display text-sm font-extrabold uppercase text-white">
                    {item.heading}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-12">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-extrabold uppercase text-slate-900">
                Looking for a reference in your sector?
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                We can put you in contact with clients who have commissioned similar works. Get in touch to ask.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              Request a reference →
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
}
