import { notFound } from "next/navigation";
import { Container } from "@/components/site/Container";
import { WpContent } from "@/components/content/WpContent";
import { getCaseStudyBySlug, getCaseStudies } from "@/lib/wordpress/api";

export async function generateStaticParams() {
  try {
    const items = await getCaseStudies({ perPage: 50, revalidate: 3600 });
    return items.map((cs) => ({ slug: cs.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug).catch(() => null);
  if (!cs) return {};
  return {
    title: cs.title?.rendered || "Case study",
    description: stripHtml(cs.excerpt?.rendered) || "Case study",
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug).catch(() => null);
  if (!cs) notFound();

  return (
    <Container className="py-14">
      <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <h1 className="text-3xl font-semibold tracking-tight">
          {cs.title?.rendered}
        </h1>
        <div className="mt-6">
          <WpContent html={cs.content?.rendered} />
        </div>
      </article>
    </Container>
  );
}

function stripHtml(html) {
  if (!html) return "";
  return String(html).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

