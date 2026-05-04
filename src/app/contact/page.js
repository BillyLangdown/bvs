import { Container } from "@/components/site/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Contact BVS",
};

export default function ContactPage() {
  return (
    <Container className="py-14">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            Send us a message and we’ll respond as soon as possible.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}

