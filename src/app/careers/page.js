import Link from "next/link";
import { Container } from "@/components/site/Container";
import { CareersForm } from "@/components/forms/CareersForm";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers",
  description: "Join BVS, a fast-growing HVAC specialist driven by practical problem-solving. Send your CV and cover letter to be considered for current and future roles.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#111418]">
  {/* Background Image */}
  <Image
    src="/two-workers.webp"
    alt="BVS engineers working inside an air handling unit"
    fill
    priority
    className="object-cover object-center"
    sizes="100vw"
  />

  {/* Overlays */}
  <div className="absolute inset-0 bg-black/35" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/15" />

  <Container className="relative py-16 sm:py-20">
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
        Careers
      </p>

      <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
        Opportunities at
    
       BVS.
      </h1>

      <div className="mt-4 h-[3px] w-14 bg-[#297858]" />

      <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/65">
        We are a fast-growing business driven by practical problem-solving to support our customers.
        If you think you have something to offer, we want to hear from you.
      </p>
    </div>
  </Container>
</section>

      {/* Apply section */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">

            {/* Left col */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">
                Get in touch
              </p>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Send Us Your CV
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-slate-600">
                We don&apos;t always advertise vacancies publicly. If your background is relevant to what we do, send your CV and a brief cover letter and we&apos;ll be in touch if there&apos;s a fit, current or future.
              </p>

              

              <div className="mt-10 border-t border-slate-200 pt-8">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Contact directly
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:01256518170"
                    className="inline-flex items-center gap-3 text-sm font-semibold text-slate-700 transition-colors hover:text-[#297858]"
                  >
                    <PhoneIcon />
                    01256 518170
                  </a>
                  <a
                    href="mailto:alex@bvs-ltd.co.uk"
                    className="inline-flex items-center gap-3 text-sm font-semibold text-slate-700 transition-colors hover:text-[#297858]"
                  >
                    <MailIcon />
                    alex@bvs-ltd.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Right col, form */}
            <div className="border border-slate-200 bg-white p-8">
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#297858]">
                Application
              </p>
              <p className="mb-6 text-xs text-slate-500">
                Fill in the form below and attach your CV or cover letter. You can also feel free to email us directly at{" "}
                <a href="mailto:info@bvs-ltd.co.uk" className="font-semibold text-[#297858] hover:underline">info@bvs-ltd.co.uk</a>.
              </p>
              <CareersForm />
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-[#297858]">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-[#297858]">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
