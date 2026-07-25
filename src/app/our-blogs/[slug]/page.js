import { notFound } from "next/navigation";
import { Container } from "@/components/site/Container";
import { WpContent } from "@/components/content/WpContent";
import { getPostBySlug, getPosts, stripHtml } from "@/lib/wordpress/api";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const posts = await getPosts({ perPage: 100, revalidate: 3600 });
    return posts.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) return {};
  return {
    title: post.title?.rendered || "Post",
    description: stripHtml(post.excerpt?.rendered) || "Blog post",
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  if (!post) notFound();

  return (
    <Container className="py-14">
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

