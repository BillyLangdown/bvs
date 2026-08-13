import { Container } from "@/components/site/Container";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getPosts, stripHtml } from "@/lib/wordpress/api";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights",
  description: "Technical guidance, project thinking, and sector updates from the BVS engineering team. AHU refurbishment, EC fans, compliance, and energy efficiency.",
  path: "/our-blogs",
});

const placeholderPosts = [
  {
    slug: null,
    title: "When Does AHU Refurbishment Make More Sense Than Replacement?",
    excerpt:
      "The economics of refurbishment versus replacement are often misunderstood. The comparison is not simply cost, it involves remaining structural life, compliance requirements, energy targets, and programme constraints. We break down the decision framework we use on every survey.",
    tag: "AHU Refurbishment",
    readTime: "6 min read",
    photo: "/ahu-refurbishment-worker.webp",
    photoAlt: "BVS engineer working on AHU refurbishment on site",
  },
  {
    slug: null,
    title: "EC Fan Upgrades: What the Energy Savings Actually Look Like",
    excerpt:
      "Quoted energy savings for EC fan conversions range from 15% to 60% depending on the source. The real figure depends on the existing fan type, controls configuration, and load profile. Here is what we typically see in practice.",
    tag: "EC Fan Technology",
    readTime: "5 min read",
    photo: "/ec-fan-upgrade.webp",
    photoAlt: "EC fan installed in air handling unit during upgrade",
  },
  {
    slug: null,
    title: "HTM 03-01: What It Actually Means for AHU Works in Healthcare",
    excerpt:
      "HTM 03-01 is the NHS Health Technical Memorandum covering ventilation for healthcare premises. It is not simply a compliance checklist, it shapes how works are planned, what components are acceptable, and how commissioning is documented. A practical overview.",
    tag: "Healthcare",
    readTime: "7 min read",
    photo: "/hospital.webp",
    photoAlt: "Hospital corridor, BVS ventilation works in live clinical environments",
  },
  {
    slug: null,
    title: "The Hidden Cost of Delaying AHU Coil Replacement",
    excerpt:
      "A degraded coil does not fail cleanly, it underperforms gradually. Fouled or corroded coil surfaces reduce heat transfer efficiency, increase energy consumption, and degrade air quality before the unit visibly stops working. What the delay actually costs.",
    tag: "Coil Replacement",
    readTime: "4 min read",
    photo: "/ahu-coil-replacement.webp",
    photoAlt: "AHU coil replacement in progress on site",
  },
  {
    slug: null,
    title: "Open-Protocol Controls: Why BACnet and Modbus Matter for FM Teams",
    excerpt:
      "Proprietary controller systems tie maintenance contracts and future upgrades to a single supplier. Open-protocol systems, BACnet, Modbus, LON, give FM teams flexibility. We explain what the practical difference looks like over a 10-year horizon.",
    tag: "Controller Upgrades",
    readTime: "5 min read",
    photo: "/ahu-controller.webp",
    photoAlt: "AHU controller upgrade, modern controls panel installed in air handling unit",
  },
  {
    slug: null,
    title: "Planning AHU Works in Schools and Universities: The Academic Window",
    excerpt:
      "Education estates have a defined window for invasive plant room works: summer. Six to eight weeks, and the programme needs to account for handover before term starts. How we plan and de-risk the academic calendar constraint.",
    tag: "Education",
    readTime: "4 min read",
    photo: "/school.webp",
    photoAlt: "School building, BVS AHU works scheduled around term times",
  },
];

export default async function BlogsPage() {
  let posts = [];

  try {
    posts = await getPosts({ perPage: 30, revalidate: 86400 });
  } catch {
    // WordPress not configured, placeholder posts shown below
  }

  const cleanPosts = (posts || []).filter((p) => {
    const title = stripHtml(p.title?.rendered || "").trim();
    const excerpt = p.excerpt?.rendered || "";
    if (!title) return false;
    if (excerpt.includes("et_pb_") || excerpt.includes("[et_pb")) return false;
    return true;
  });

  const hasWordPressContent = cleanPosts.length > 0;

  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#111418] py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/london-aerial.webp"
            alt="Engineering workshop insights and AHU technical documentation"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111418]/75 via-[#111418]/50 to-[#111418]/20" />
        </div>

        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              Blogs
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Practical AHU guidance.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/75">
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
              {(() => {
                const featuredImg =
                  cleanPosts[0]._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.large?.source_url ||
                  cleanPosts[0]._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  cleanPosts[0].aioseo_head_json?.og_image?.[0]?.url ||
                  null;
                return (
                  <ScrollReveal className="mb-10">
                    <Link
                      href={`/blogs/${cleanPosts[0].slug}`}
                      className="group block overflow-hidden border border-slate-200 bg-white transition-all duration-200 hover:border-[#297858] hover:shadow-md"
                    >
                      <div className="relative h-64 w-full sm:h-80 bg-slate-100">
                        {featuredImg ? (
                          <Image
                            src={featuredImg}
                            alt={stripHtml(cleanPosts[0].title?.rendered || "")}
                            fill
                            unoptimized
                            sizes="100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <Image src="/bvs-logo.webp" alt="BVS Building Ventilation Solutions" width={120} height={65} className="h-12 w-auto opacity-30" />
                          </div>
                        )}
                      </div>
                      <div className="p-8">
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#297858]">
                          Latest
                        </p>
                        <h2 className="text-xl font-extrabold leading-snug text-slate-900 group-hover:text-[#297858] sm:text-2xl">
                          {cleanPosts[0].title?.rendered}
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                          {stripHtml(cleanPosts[0].excerpt?.rendered).slice(0, 280)}
                          {stripHtml(cleanPosts[0].excerpt?.rendered).length > 280 ? "…" : ""}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#297858] transition-all group-hover:gap-3">
                          Read article →
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })()}

              {/* Remaining posts grid */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cleanPosts.slice(1).map((p, i) => {
                  const img =
                    p._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.medium_large?.source_url ||
                    p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    p.aioseo_head_json?.og_image?.[0]?.url ||
                    null;
                  return (
                    <ScrollReveal key={p.id} delay={i * 60}>
                      <Link
                        href={`/blogs/${p.slug}`}
                        className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-200 hover:border-[#297858] hover:shadow-md"
                      >
                        <div className="relative h-44 w-full shrink-0 bg-slate-100">
                          {img ? (
                            <Image
                              src={img}
                              alt={stripHtml(p.title?.rendered || "")}
                              fill
                              unoptimized
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center">
                              <Image src="/bvs-logo.webp" alt="BVS Building Ventilation Solutions" width={120} height={65} className="h-10 w-auto opacity-30" />
                            </div>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <h2 className="text-sm font-extrabold leading-snug text-slate-900 group-hover:text-[#297858]">
                            {p.title?.rendered}
                          </h2>
                          <p className="mt-3 text-sm leading-6 text-slate-500 line-clamp-3">
                            {stripHtml(p.excerpt?.rendered).slice(0, 160)}
                            {stripHtml(p.excerpt?.rendered).length > 160 ? "…" : ""}
                          </p>
                          <span className="mt-auto pt-4 text-xs font-semibold text-[#297858] transition-all group-hover:translate-x-1">
                            Read →
                          </span>
                        </div>
                      </Link>
                    </ScrollReveal>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <ScrollReveal className="mb-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                  Coming soon
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
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
                    <div className="flex flex-col overflow-hidden border border-slate-200 bg-white">
                      <div className="relative h-44 w-full shrink-0">
                        <Image
                          src={p.photo}
                          alt={p.photoAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="bg-surface-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                            {p.tag}
                          </span>
                          <span className="text-[10px] text-slate-400">{p.readTime}</span>
                        </div>
                        <h2 className="text-sm font-extrabold leading-snug text-slate-900">
                          {p.title}
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-slate-500">{p.excerpt}</p>
                      </div>
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
              <h2 className="text-xl font-extrabold text-white">
                Have a specific technical question?
              </h2>
              <p className="mt-1 text-sm text-white/55">
                If you need guidance on a particular situation, compliance, refurbishment vs replacement, energy targets, we are happy to discuss it directly.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-6 py-3 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
            >
              Ask a question →
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
}
