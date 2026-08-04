import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { WpContent } from "@/components/content/WpContent";
import { getCaseStudyBySlug, getCaseStudies } from "@/lib/wordpress/api";
import { allCaseStudies } from "@/lib/allCaseStudiesData";
import { pageMetadata, truncateDescription, breadcrumbJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  const localSlugs = allCaseStudies.map((cs) => ({ slug: cs.slug }));
  try {
    const wpItems = await getCaseStudies({ perPage: 50, revalidate: 86400 });
    const wpSlugs = wpItems.map((cs) => ({ slug: cs.slug }));
    const merged = [...localSlugs];
    for (const wp of wpSlugs) {
      if (!merged.find((s) => s.slug === wp.slug)) merged.push(wp);
    }
    return merged;
  } catch {
    return localSlugs;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const local = allCaseStudies.find((cs) => cs.slug === slug);
  if (!local) return {};
  return pageMetadata({
    title: `${local.title} Case Study`,
    description: truncateDescription(local.summary),
    path: `/case-studies/${slug}`,
    image: local.image,
    imageAlt: local.title,
  });
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;

  const local = allCaseStudies.find((cs) => cs.slug === slug);
  if (!local) notFound();

  // WordPress provides the article body — fail gracefully if unavailable
  const wp = await getCaseStudyBySlug(slug).catch(() => null);
  const wpBody = wp?.content?.rendered || null;

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: local.title, path: `/case-studies/${slug}` },
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbItems)) }}
      />

      {/* HERO */}
      <section className="relative h-64 overflow-hidden bg-[#111418] sm:h-80">
        <Image
          src={local.image}
          alt={local.title}
          fill
          unoptimized
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <Container className="relative flex h-full flex-col justify-end pb-8 sm:pb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            {local.sector}{local.location ? ` · ${local.location}` : ""}
          </p>
          <h1 className="mt-2 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            {local.title}
          </h1>
          {local.tags?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {local.tags.map((t) => (
                <span
                  key={t}
                  className="bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* CONTENT */}
      <section className="bg-[#f7f6f5] py-12">
        <Container>
          <div className="max-w-3xl">

            <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
              <Link
                href="/case-studies"
                className="text-xs font-semibold text-slate-400 hover:text-[#297858] transition-colors"
              >
                ← All case studies
              </Link>
              {local.pdfUrl && (
                <a
                  href={local.pdfUrl}
                  download
                  className="inline-flex shrink-0 items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Download PDF
                </a>
              )}
            </div>

            <p className="mb-8 text-base leading-7 text-slate-600">{local.summary}</p>

            {local.relevantIf?.length > 0 && (
              <div className="mb-8 border border-slate-200 bg-white p-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Relevant if your project involves:
                </p>
                <ul className="space-y-2">
                  {local.relevantIf.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm leading-5 text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-[#297858]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {wpBody && (
              <div className="mb-8 border border-slate-200 bg-white p-6 sm:p-8">
                <WpContent html={wpBody} />
              </div>
            )}

            {local.pdfUrl && (
              <div className="border-t border-slate-200 pt-8">
                <a
                  href={local.pdfUrl}
                  download
                  className="inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Download case study PDF
                </a>
              </div>
            )}

          </div>
        </Container>
      </section>
    </div>
  );
}
