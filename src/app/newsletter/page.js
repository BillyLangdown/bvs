import { Container } from "@/components/site/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Newsletter Signup",
  description:
    "Get AHU maintenance tips, EC fan upgrade guidance, and ventilation sector updates from the BVS engineering team, straight to your inbox.",
  path: "/newsletter",
});

export default function NewsletterPage() {
  return (
    <Container className="py-14">
      <div className="mx-auto grid max-w-2xl gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Newsletter</h1>
          <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            Get occasional updates on products and new case studies.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <NewsletterForm source="newsletter_page" />
        </div>
      </div>
    </Container>
  );
}

