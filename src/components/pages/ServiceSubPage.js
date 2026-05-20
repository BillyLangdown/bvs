import Link from "next/link";
import { Container } from "@/components/site/Container";
import { TrustBar } from "@/components/site/TrustBar";
import { ClientBar } from "@/components/site/ClientBar";

export function ServiceSubPage({
  title,
  tagline,
  intro,
  features = [],
  featuresTitle = "What we offer",
  cta = { href: "/contact", label: "Get a quote" },
  relatedLinks = [],
}) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 py-20">
        <Container>
          <div className="max-w-3xl">
            {tagline && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                {tagline}
              </p>
            )}
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              {title}
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-emerald-500" />
            {intro && (
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/75">
                {intro}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                {cta.label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />
      <ClientBar />

      {/* Features */}
      {features.length > 0 && (
        <section className="bg-white py-16">
          <Container>
            <div className="mb-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Building Ventilation Solutions
              </p>
              <h2 className="text-2xl font-extrabold text-slate-900">
                {featuresTitle}
              </h2>
              <div className="mt-2 h-[3px] w-10 bg-emerald-700" />
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="border-t-2 border-emerald-700 pt-5">
                  <h3 className="text-sm font-bold tracking-wide text-slate-900">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{f.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA strip */}
      <section className="bg-emerald-950 py-14">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xl font-extrabold text-white">
                Ready to get started?
              </p>
              <p className="mt-1 text-sm text-white/65">
                Call us on{" "}
                <a href="tel:01256518170" className="underline hover:text-white">
                  01256 518170
                </a>{" "}
                or request a quote online.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
            >
              Get a quote
            </Link>
          </div>
        </Container>
      </section>

      {/* Related services */}
      {relatedLinks.length > 0 && (
        <section className="bg-surface-2 py-14">
          <Container>
            <h2 className="text-xl font-extrabold text-slate-900">
              Related Services
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="flex items-center justify-between border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 transition-colors hover:border-emerald-200 hover:bg-emerald-50"
                >
                  {l.label}
                  <span className="ml-3 shrink-0 text-emerald-700">→</span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
