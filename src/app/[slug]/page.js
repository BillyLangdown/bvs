import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import { WpContent } from "@/components/content/WpContent";
import { getCaseStudyPages, getPageBySlug, getPages, stripHtml } from "@/lib/wordpress/api";
import { cleanWpHtml, extractDiviHero } from "@/lib/wordpress/format";

export async function generateStaticParams() {
  try {
    const pages = await getPages({ perPage: 100, revalidate: 3600 });
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
  return {
    title: page.title?.rendered || "Page",
    description: stripHtml(page.excerpt?.rendered) || "Page",
  };
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
    ? await getCaseStudyPages({ perPage: 6, revalidate: 600 }).catch(() => [])
    : [];

  return (
    <div>
      {hero.imageUrl ? (
        <section className="relative min-h-[420px] w-full overflow-hidden bg-zinc-900">
          <Image
            src={hero.imageUrl}
            alt=""
            fill
            priority
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
                            alt=""
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

