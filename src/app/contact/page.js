import { Container } from "@/components/site/Container";
import { ContactPageForm } from "@/components/forms/ContactPageForm";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | BVS Building Ventilation Solutions",
  description:
    "Speak directly with an AHU specialist. Tell us about your project and we'll respond with practical options within one working day.",
};

export default function ContactPage() {
  return (
    <div>

    {/* HERO */}
    <section className="relative overflow-hidden bg-[#111418]">
  
      {/* Background image */}
      <div className="absolute inset-0">
  <Image
    src="/person-working.webp"
    alt="BVS engineer working on ventilation equipment"
    fill
    sizes="100vw"
    priority
    placeholder="blur"
    blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
    className="object-cover"
  />

  {/* Directional overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#111418]/92 via-[#111418]/70 to-transparent" />
</div>
  
      <Container className="relative z-10 py-16 sm:py-24">
  
        <div className="max-w-xl">
  
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
            Contact BVS
          </p>
  
          <h1 className="text-3xl font-extrabold leading-[1.02] text-white sm:text-5xl">
            Speak directly with an AHU specialist.
          </h1>
  
          <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
  
          <p className="mt-6 text-[15px] leading-7 text-white/80">
            Technical support, quotations, upgrades, replacements, and AHU project enquiries across the UK.
          </p>
  
          {/* Quick actions */}
         
          {/* Fast contact */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">

            <a
              href="tel:01256518170"
              className="flex items-start gap-4 border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#297858]/15 text-[#297858]">
                <PhoneIcon />
              </span>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Call us
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  01256 518170
                </p>

                <p className="mt-1 text-xs text-white/50">
                  Mon–Fri · 8am–5pm
                </p>
              </div>
            </a>

            <a
              href="mailto:info@bvs-ltd.co.uk"
              className="flex items-start gap-4 border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#297858]/15 text-[#297858]">
                <EmailIcon />
              </span>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Email us
                </p>

                <p className="mt-1 text-base font-bold text-white break-all">
                  info@bvs-ltd.co.uk
                </p>

                <p className="mt-1 text-xs text-white/50">
                  Technical responses within one working day
                </p>
              </div>
            </a>

          </div>
  
          {/* reassurance */}
          <div className="mt-8 border-l-2 border-[#297858] pl-5">
            <p className="text-sm leading-6 text-white/70">
              Your enquiry goes directly to our technical team, not a sales call centre.
            </p>
          </div>
  
        </div>
      </Container>
    </section>
  
    {/* FORM SECTION */}
    <section className="bg-[#f7f6f5] py-14 sm:py-20">
  
      <Container>
  
        <div className="mx-auto max-w-5xl overflow-hidden border border-slate-200 bg-white shadow-sm">
  
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
  
            {/* LEFT PANEL */}
            <div className="bg-[#111418] px-8 py-10 text-white">
  
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                Send an enquiry
              </p>
  
              <h2 className="mt-3 text-2xl font-extrabold leading-tight">
                Tell Us About
                <br />
                Your Project
              </h2>
  
              <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
  
              <div className="mt-8 space-y-6">
  
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Phone
                  </p>
  
                  <a
                    href="tel:01256518170"
                    className="mt-1 block text-lg font-bold text-white"
                  >
                    01256 518170
                  </a>
                </div>
  
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Email
                  </p>
  
                  <a
                    href="mailto:info@bvs-ltd.co.uk"
                    className="mt-1 block text-sm font-semibold text-white"
                  >
                    info@bvs-ltd.co.uk
                  </a>
                </div>
  
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Response Time
                  </p>
  
                  <p className="mt-1 text-sm text-white/70">
                    Typically within one working day
                  </p>
                  
                </div>
  
              </div>
            </div>
  
            {/* FORM */}
            <div className="p-6 sm:p-8">
              <ContactPageForm />
            </div>
  
          </div>
  
        </div>
  
      </Container>
    </section>
    <div className="bg-[#f7f6f5]">


</div>
  
  </div>
  

  
  );
}

/* ── ICONS ───────────────────────────────────────────────────────────── */

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 8l9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C8.7 2 6 4.7 6 8c0 4.5 6 13 6 13s6-8.5 6-13c0-3.3-2.7-6-6-6Z" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
