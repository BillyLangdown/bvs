import { Container } from "@/components/site/Container";
import { WpContent } from "@/components/content/WpContent";
import { getPageBySlug, stripHtml } from "@/lib/wordpress/api";
import { cleanWpHtml } from "@/lib/wordpress/format";

export const metadata = {
  title: "About Us",
  description: "About BVS",
};

export default async function AboutPage() {
  const page = await getPageBySlug("about-us").catch(() => null);

  return (
    <Container className="py-14">
      <div className="mx-auto max-w-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">
          {page?.title?.rendered || "About Us"}
        </h1>
        {page ? (
          <div className="mt-6">
            <WpContent html={cleanWpHtml(page.content?.rendered)} />
          </div>
        ) : (
          <p className="mt-4 text-sm leading-7 text-zinc-700">
            Couldn’t load the WordPress page <code>about-us</code>. Check{" "}
            <code>WP_API_BASE</code>.
          </p>
        )}
      </div>
    </Container>
  );
}

