import { Container } from "@/components/site/Container";

export const metadata = {
  title: "Careers",
  description: "Careers",
};

export default function CareersPage() {
  return (
    <Container className="py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Careers</h1>
      <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        Placeholder page. This can later list openings pulled from WordPress or
        an ATS.
      </p>
    </Container>
  );
}

