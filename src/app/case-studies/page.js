import Link from "next/link";
import { Container } from "@/components/site/Container";
import { getCaseStudies } from "@/lib/wordpress/api";

export const metadata = {
  title: "Case Studies",
  description: "Browse case studies",
};

export default async function CaseStudiesPage() {
  let items = [];
  let error = null;

  try {
    items = await getCaseStudies({ perPage: 100, revalidate: 300 });
  } catch (e) {
    error = e;
  }

  return (
    <Container className="py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Case Studies</h1>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
        Case studies are pulled from WordPress (CPT: <code>case-studies</code>).
      </p>

      {error ? (
        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-100">
          Configure WordPress to enable case studies (set <code>WP_API_BASE</code>).
        </div>
      ) : null}

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items?.length ? (
          items.map((cs) => (
            <Link
              key={cs.id}
              href={`/case-studies/${cs.slug}`}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
            >
              <h2 className="text-base font-semibold">{cs.title?.rendered}</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Read more →
              </p>
            </Link>
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-8 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 sm:col-span-2 lg:col-span-3">
            No case studies found.
          </div>
        )}
      </div>
    </Container>
  );
}

