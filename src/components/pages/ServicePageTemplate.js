import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { WpContent } from "@/components/content/WpContent";
import { getPageBySlug, getCaseStudyPages } from "@/lib/wordpress/api";
import { cleanWpHtml, extractDiviHero } from "@/lib/wordpress/format";

export async function ServicePageTemplate({
  slug,
  subtitle,
  cta,
  benefitsTitle = "Benefits",
  benefits = [],
  showRelatedCaseStudies = true,
}) {
  const page = await getPageBySlug(slug).catch(() => null);
  const hero = extractDiviHero(page?.content?.rendered);

  const title = hero.title || page?.title?.rendered || toTitle(slug);
  const heroImage = hero.imageUrl || null;

  const related = showRelatedCaseStudies
    ? await getCaseStudyPages({ perPage: 6, revalidate: 600 }).catch(() => [])
    : [];

  return (
    <div>
      <section className="relative min-h-[520px] w-full overflow-hidden bg-zinc-900">
        {heroImage ? (
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : null}
        <div className="absolute inset-0 bg-black/50" />

        <Container className="relative flex min-h-[520px] items-center py-16">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-4 text-sm font-semibold tracking-wide text-white/90">
                {subtitle}
              </p>
            ) : null}
            {cta?.href && cta?.label ? (
              <div className="mt-8">
                <Link
                  href={cta.href}
                  className="inline-flex h-10 items-center justify-center bg-emerald-700 px-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-emerald-600"
                >
                  {cta.label}
                </Link>
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      {benefits?.length ? (
        <section className="bg-white py-16">
          <Container>
            <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900">
                  {title}
                  <br />
                  {benefitsTitle}
                </h2>

                <div className="mt-8 grid gap-7 sm:grid-cols-2">
                  {benefits.map((b) => (
                    <div key={b.title} className="min-w-0">
                      <p className="text-sm font-extrabold text-zinc-900">
                        {b.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-700">
                        {b.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100">
                {heroImage ? (
                  <Image
                    src={heroImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                ) : null}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-white py-14">
        <Container>
          <div className="mx-auto max-w-5xl">
            {page?.content?.rendered ? (
              <WpContent html={cleanWpHtml(page.content.rendered)} />
            ) : (
              <div className="border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
                Couldn’t load WordPress content for <code>{slug}</code>.
              </div>
            )}
          </div>
        </Container>
      </section>

      {showRelatedCaseStudies && related?.length ? (
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
                        <span className="mt-4 inline-flex h-9 items-center justify-center bg-emerald-700 px-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-emerald-600">
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

function toTitle(slug) {
  return String(slug || "")
    .split("-")
    .filter(Boolean)
    .map((w) => w[0]?.toUpperCase() + w.slice(1))
    .join(" ");
}

