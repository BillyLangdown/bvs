import { Container } from "@/components/site/Container";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getPosts, stripHtml } from "@/lib/wordpress/api";

export const metadata = {
  title: "Insights | BVS Building Ventilation Solutions",
  description:
    "Technical guidance, project thinking, and sector updates from the BVS engineering team. AHU refurbishment, EC fans, compliance, and energy efficiency.",
};

const placeholderPosts = [
  {
    slug: null,
    title: "When Does AHU Refurbishment Make More Sense Than Replacement?",
    excerpt:
      "The economics of refurbishment versus replacement are often misunderstood. The comparison is not simply cost — it involves remaining structural life, compliance requirements, energy targets, and programme constraints. We break down the decision framework we use on every survey.",
    tag: "AHU Refurbishment",
    readTime: "6 min read",
  },
  {
    slug: null,
    title: "EC Fan Upgrades: What the Energy Savings Actually Look Like",
    excerpt:
      "Quoted energy savings for EC fan conversions range from 15% to 60% depending on the source. The real figure depends on the existing fan type, controls configuration, and load profile. Here is what we typically see in practice.",
    tag: "EC Fan Technology",
    readTime: "5 min read",
  },
  {
    slug: null,
    title: "HTM 03-01: What It Actually Means for AHU Works in Healthcare",
    excerpt:
      "HTM 03-01 is the NHS Health Technical Memorandum covering ventilation for healthcare premises. It is not simply a compliance checklist — it shapes how works are planned, what components are acceptable, and how commissioning is documented. A practical overview.",
    tag: "Healthcare",
    readTime: "7 min read",
  },
  {
    slug: null,
    title: "The Hidden Cost of Delaying AHU Coil Replacement",
    excerpt:
      "A degraded coil does not fail cleanly — it underperforms gradually. Fouled or corroded coil surfaces reduce heat transfer efficiency, increase energy consumption, and degrade air quality before the unit visibly stops working. What the delay actually costs.",
    tag: "Coil Replacement",
    readTime: "4 min read",
  },
  {
    slug: null,
    title: "Open-Protocol Controls: Why BACnet and Modbus Matter for FM Teams",
    excerpt:
      "Proprietary controller systems tie maintenance contracts and future upgrades to a single supplier. Open-protocol systems — BACnet, Modbus, LON — give FM teams flexibility. We explain what the practical difference looks like over a 10-year horizon.",
    tag: "Controller Upgrades",
    readTime: "5 min read",
  },
  {
    slug: null,
    title: "Planning AHU Works in Schools and Universities: The Academic Window",
    excerpt:
      "Education estates have a defined window for invasive plant room works: summer. Six to eight weeks, and the programme needs to account for handover before term starts. How we plan and de-risk the academic calendar constraint.",
    tag: "Education",
    readTime: "4 min read",
  },
];

export default async function BlogsPage() {
  let posts = [];

  try {
    posts = await getPosts({ perPage: 30, revalidate: 300 });
  } catch {
    // WordPress not configured — placeholder posts shown below
  }

  const hasWordPressContent = posts?.length > 0;

  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              Insights
            </p>
            <h1 className="font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
              Engineering Thinking.<br />Written Down.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/65">
              Technical guidance on AHU refurbishment, EC fan performance, compliance, energy, and sector-specific delivery constraints. Practical, not promotional.
            </p>
          </div>
        </Container>
      </section>

      {/* ── POSTS ─────────────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-14 sm:py-20">
        <Container>
          {hasWordPressContent ? (
            <>
              {/* Featured first post */}
              <ScrollReveal className="mb-10">
                <Link
                  href={`/blogs/${posts[0].slug}`}
                  className="group block border border-slate-200 bg-white p-8 transition-all duration-200 hover:border-[#297858] hover:shadow-md"
                >
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#297858]">
                    Latest
                  </p>
                  <h2 className="font-display text-xl font-extrabold uppercase leading-snug text-slate-900 group-hover:text-[#297858] sm:text-2xl">
                    {posts[0].title?.rendered}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                    {stripHtml(posts[0].excerpt?.rendered).slice(0, 280)}
                    {stripHtml(posts[0].excerpt?.rendered).length > 280 ? "…" : ""}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#297858] transition-all group-hover:gap-3">
                    Read article →
                  </span>
                </Link>
              </ScrollReveal>

              {/* Remaining posts grid */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {posts.slice(1).map((p, i) => (
                  <ScrollReveal key={p.id} delay={i * 60}>
                    <Link
                      href={`/blogs/${p.slug}`}
                      className="group flex flex-col border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-[#297858] hover:shadow-md"
                    >
                      <h2 className="font-display text-sm font-extrabold uppercase leading-snug text-slate-900 group-hover:text-[#297858]">
                        {p.title?.rendered}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-slate-500 line-clamp-3">
                        {stripHtml(p.excerpt?.rendered).slice(0, 160)}
                        {stripHtml(p.excerpt?.rendered).length > 160 ? "…" : ""}
                      </p>
                      <span className="mt-4 text-xs font-semibold text-[#297858] transition-all group-hover:translate-x-1">
                        Read →
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
                  Coming soon
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold uppercase text-slate-900">
                  Articles In Progress
                </h2>
                <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  The topics below are being written up. If any of these are relevant to a decision you are working through, get in touch and we can discuss the specifics directly.
                </p>
              </ScrollReveal>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {placeholderPosts.map((p, i) => (
                  <ScrollReveal key={p.title} delay={i * 60}>
                    <div className="flex flex-col border border-slate-200 bg-white p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="bg-surface-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                          {p.tag}
                        </span>
                        <span className="text-[10px] text-slate-400">{p.readTime}</span>
                      </div>
                      <h2 className="font-display text-sm font-extrabold uppercase leading-snug text-slate-900">
                        {p.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-slate-500">{p.excerpt}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      {/* ── NEWSLETTER / CONTACT STRIP ────────────────────────────────── */}
      <section className="bg-[#111418] py-12">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-extrabold uppercase text-white">
                Have a specific technical question?
              </h2>
              <p className="mt-1 text-sm text-white/55">
                If you need guidance on a particular situation — compliance, refurbishment vs replacement, energy targets — we are happy to discuss it directly.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              Ask a question →
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
}
