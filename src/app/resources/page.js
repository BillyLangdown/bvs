import { Container } from "@/components/site/Container";

export const metadata = {
  title: "HVAC Resources",
  description: "Resources",
};

export default function ResourcesPage() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl font-semibold tracking-tight">HVAC Resources</h1>
      <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        Placeholder page for downloadable resources and articles.
      </p>
    </Container>
  );
}

