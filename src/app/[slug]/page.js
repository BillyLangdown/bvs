import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { WpContent } from "@/components/content/WpContent";
import { getCaseStudyPages, getPageBySlug, getPages, stripHtml } from "@/lib/wordpress/api";
import { cleanWpHtml, extractDiviHero } from "@/lib/wordpress/format";
import { pageMetadata, truncateDescription, authoredTitle } from "@/lib/seo";

export async function generateStaticParams() {
  try {
    const pages = await getPages({ perPage: 100, revalidate: 86400 });
    // Avoid generating for known app routes (they exist as explicit routes).
    const reserved = new Set([
      "blogs",
      "case-studies",
      "products",
      "contact",
      "newsletter",
      "get-a-quote",
      "shop",
      "about",
      "resources",
      "careers",
      "solutions",
      "api",
    ]);
    return pages
      .filter((p) => p?.slug && !reserved.has(p.slug))
      .map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = await getPageBySlug(slug).catch(() => null);
  if (!page) return {};
  // AIOSEO-authored title/description take priority when present. Note:
  // aioseo_head_json.canonical_url is deliberately never used here, since it
  // points at the CMS hostname rather than the primary domain.
  const seo = page.aioseo_head_json || {};
  const fallbackTitle = page.title?.rendered || "Page";
  // authoredTitle() bypasses the root layout's "%s | BVS" template — AIOSEO
  // titles are complete SERP titles already, often already branded, so
  // applying the template on top would double up the brand suffix.
  const authored = authoredTitle(seo.title);
  const title = authored || fallbackTitle;
  const titleText = authored ? seo.title : fallbackTitle;
  const excerpt = stripHtml(page.excerpt?.rendered || "") || stripHtml(page.content?.rendered || "");
  return pageMetadata({
    title,
    description:
      seo.description ||
      truncateDescription(excerpt) ||
      `${titleText} | BVS Building Ventilation Solutions.`,
    path: `/${slug}`,
  });
}

export default async function WordpressPageBySlug({ params }) {
  const { slug } = await params;
  const page = await getPageBySlug(slug).catch(() => null);
  if (!page) notFound();

  const hero = extractDiviHero(page.content?.rendered);
  const title = hero.title || page.title?.rendered;
  const showRelated =
    slug?.startsWith("air-handling-unit-") ||
    slug?.includes("ventilation") ||
    slug?.includes("mechanical");

  const related = showRelated
    ? await getCaseStudyPages({ perPage: 6, revalidate: 86400 }).catch(() => [])
    : [];

  return (
    <div>
      {hero.imageUrl ? (
        <section className="relative min-h-[420px] w-full overflow-hidden bg-zinc-900">
          <Image
            src={hero.imageUrl}
            alt={title}
            fill
            priority
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
          <Container className="relative flex min-h-[420px] items-end py-16">
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              {title}
            </h1>
          </Container>
        </section>
      ) : null}

      <section className="bg-white py-14">
        <Container>
          <div className="mx-auto max-w-5xl bg-white">
            {!hero.imageUrl ? (
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">
                {title}
              </h1>
            ) : null}
            <div className={hero.imageUrl ? "" : "mt-6"}>
              <WpContent html={cleanWpHtml(page.content?.rendered)} />
            </div>
          </div>
        </Container>
      </section>

      {showRelated && related?.length ? (
        <section className="bg-white pb-16">
          <Container>
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-3xl font-extrabold tracking-tight text-zinc-900">
                Related Case Studies
              </h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {related.slice(0, 2).map((cs) => {
                  const media = cs?._embedded?.["wp:featuredmedia"]?.[0];
                  const img = media?.source_url || null;
                  return (
                    <a
                      key={cs.id}
                      href={`/${cs.slug}`}
                      className="overflow-hidden bg-white shadow-sm"
                    >
                      <div className="relative aspect-[16/10] w-full bg-zinc-100">
                        {img ? (
                          <Image
                            src={img}
                            alt={cs.title?.rendered || "Case study"}
                            fill
                            className="object-cover"
                            sizes="(min-width: 768px) 50vw, 100vw"
                          />
                        ) : null}
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-extrabold tracking-tight text-zinc-900">
                          {cs.title?.rendered}
                        </h3>
                        <span className="mt-4 inline-flex h-9 items-center justify-center bg-emerald-900 px-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                          View Case Study →
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      ) : null}
    </div>
  );
}

