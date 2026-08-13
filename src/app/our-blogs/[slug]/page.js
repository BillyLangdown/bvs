import { notFound } from "next/navigation";
import { Container } from "@/components/site/Container";
import { WpContent } from "@/components/content/WpContent";
import { getPostBySlug, getPosts, stripHtml, decodeHtmlEntities } from "@/lib/wordpress/api";
import { pageMetadata, truncateDescription, breadcrumbJsonLd, authoredTitle } from "@/lib/seo";

export const revalidate = 86400;

export async function generateStaticParams() {
  try {
    const posts = await getPosts({ perPage: 100, revalidate: 86400 });
    return posts.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

function featuredImage(post) {
  return post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) return {};
  // AIOSEO-authored title/description take priority when present — falls
  // back to the post title / an auto-generated excerpt otherwise. Note:
  // aioseo_head_json.canonical_url is deliberately never used here, since it
  // points at the CMS hostname rather than the primary domain.
  const seo = post.aioseo_head_json || {};
  const fallbackTitle = decodeHtmlEntities(post.title?.rendered || "Post");
  // authoredTitle() bypasses the root layout's "%s | BVS" template — AIOSEO
  // titles are complete SERP titles already, often already branded, so
  // applying the template on top would double up the brand suffix.
  const authored = authoredTitle(seo.title, post.title?.rendered);
  const title = authored || fallbackTitle;
  const titleText = authored ? authored.absolute : fallbackTitle;
  return pageMetadata({
    title,
    description:
      seo.description ||
      truncateDescription(stripHtml(post.excerpt?.rendered || "")) ||
      `${titleText} | BVS Insights.`,
    path: `/our-blogs/${slug}`,
    image: featuredImage(post),
    imageAlt: titleText,
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) notFound();

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/our-blogs" },
    { name: post.title?.rendered || "Post", path: `/our-blogs/${slug}` },
  ];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title?.rendered,
    datePublished: post.date,
    dateModified: post.date,
    image: featuredImage(post) ? [featuredImage(post)] : undefined,
    author: { "@type": "Organization", name: "BVS Building Ventilation Solutions" },
    publisher: {
      "@type": "Organization",
      name: "BVS Building Ventilation Solutions",
      logo: { "@type": "ImageObject", url: "https://www.bvs-ltd.co.uk/bvs-logo.webp" },
    },
  };

  return (
    <Container className="py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="mx-auto max-w-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">
          {post.title?.rendered}
        </h1>
        <div className="mt-6">
          <WpContent html={post.content?.rendered} className="text-zinc-800" />
        </div>
      </div>
    </Container>
  );
}

