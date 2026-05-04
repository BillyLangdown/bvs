import { Container } from "@/components/site/Container";
import Link from "next/link";
import { getPosts, stripHtml } from "@/lib/wordpress/api";

export const metadata = {
  title: "Our Blogs",
  description: "Blog",
};

export default async function BlogsPage() {
  let posts = [];
  let error = null;

  try {
    posts = await getPosts({ perPage: 30, revalidate: 300 });
  } catch (e) {
    error = e;
  }

  return (
    <Container className="py-14">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">
          Our Blogs
        </h1>
        <p className="mt-3 text-sm leading-7 text-zinc-700">
          Latest posts from WordPress.
        </p>

        {error ? (
          <div className="mt-8 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            Couldn’t load posts. Check <code>WP_API_BASE</code>.
          </div>
        ) : null}

        <div className="mt-10 grid gap-4">
          {posts?.length ? (
            posts.map((p) => (
              <Link
                key={p.id}
                href={`/blogs/${p.slug}`}
                className="border border-zinc-200 bg-white p-5 hover:bg-zinc-50"
              >
                <h2 className="text-base font-extrabold text-emerald-900">
                  {p.title?.rendered}
                </h2>
                <p className="mt-2 text-sm leading-7 text-zinc-700">
                  {stripHtml(p.excerpt?.rendered).slice(0, 220)}
                  {stripHtml(p.excerpt?.rendered).length > 220 ? "…" : ""}
                </p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-600">
                  Read more
                </p>
              </Link>
            ))
          ) : (
            <div className="border border-dashed border-zinc-200 bg-zinc-50 p-8 text-sm text-zinc-700">
              No posts found.
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

