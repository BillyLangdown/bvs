import { Container } from "@/components/site/Container";
import { ContactPageForm } from "@/components/forms/ContactPageForm";

export const metadata = {
  title: "Contact Us | BVS Building Ventilation Solutions",
  description:
    "Speak directly with an AHU specialist. Tell us about your project and we'll respond with practical options within one working day.",
};

export default function ContactPage() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-14 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
              Contact BVS
            </p>
            <h1 className="font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              Speak directly<br />with a specialist
            </h1>
            <div className="mt-4 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-white/60">
              Your enquiry goes straight to our technical team — not a call centre.
              We'll come back with practical options within one working day.
            </p>

            {/* Direct contact methods */}
            <div className="mt-8 flex flex-wrap gap-6">
              <a
                href="tel:01256518170"
                className="group inline-flex items-center gap-3 hover:text-[#297858] transition-colors"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/8 text-[#297858] ring-1 ring-white/10 transition-colors group-hover:bg-[#297858]/20">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-white/40">Call us</span>
                  <span className="text-[15px] font-bold text-white group-hover:text-[#297858] transition-colors">01256 518170</span>
                </span>
              </a>
              <a
                href="mailto:info@bvs-ltd.co.uk"
                className="group inline-flex items-center gap-3 hover:text-[#297858] transition-colors"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/8 text-[#297858] ring-1 ring-white/10 transition-colors group-hover:bg-[#297858]/20">
                  <EmailIcon />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-white/40">Email us</span>
                  <span className="text-[15px] font-bold text-white group-hover:text-[#297858] transition-colors">info@bvs-ltd.co.uk</span>
                </span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FORM + DETAILS ───────────────────────────────────────────── */}
      <section className="bg-surface-2 py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_480px] lg:items-start">

            {/* Left: contact details */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Contact details
                </p>
                <div className="divide-y divide-slate-100 border border-slate-200 bg-white">
                  {[
                    {
                      icon: <PhoneIcon />,
                      label: "Phone",
                      content: (
                        <a href="tel:01256518170" className="text-sm font-bold text-slate-900 hover:text-[#297858]">
                          01256 518170
                        </a>
                      ),
                    },
                    {
                      icon: <EmailIcon />,
                      label: "Email",
                      content: (
                        <a href="mailto:info@bvs-ltd.co.uk" className="text-sm font-bold text-slate-900 hover:text-[#297858]">
                          info@bvs-ltd.co.uk
                        </a>
                      ),
                    },
                    {
                      icon: <LocationIcon />,
                      label: "Based in",
                      content: (
                        <>
                          <p className="text-sm font-bold text-slate-900">Basingstoke, Hampshire</p>
                          <p className="text-xs text-slate-500">Covering the whole of the UK</p>
                        </>
                      ),
                    },
                    {
                      icon: <ClockIcon />,
                      label: "Hours",
                      content: (
                        <>
                          <p className="text-sm font-bold text-slate-900">Mon–Fri, 8am – 5pm</p>
                          <p className="text-xs text-slate-500">Out of hours? Leave a message — we&apos;ll call back.</p>
                        </>
                      ),
                    },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-4 px-5 py-4">
                      <span className="mt-0.5 shrink-0 text-[#297858]">{row.icon}</span>
                      <div>
                        <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400">{row.label}</p>
                        {row.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simple reassurance — no fluff */}
              <div className="flex items-start gap-3 border-l-2 border-[#297858] bg-white px-5 py-4">
                <p className="text-sm leading-6 text-slate-600">
                  We&apos;re engineers, not a sales team. You&apos;ll hear back from someone technical within one working day.
                </p>
              </div>
            </div>

            {/* Right: form — sticky on desktop */}
            <div className="lg:sticky lg:top-24">
              <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">
                <div className="bg-[#111418] px-6 py-5 sm:px-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                    Send an enquiry
                  </p>
                  <p className="mt-1 text-base font-bold text-white">Tell us about your project</p>
                  <p className="mt-1 text-xs text-white/45">
                    We&apos;ll respond within one working day with practical options.
                  </p>
                </div>
                <ContactPageForm />
              </div>
            </div>

          </div>
        </Container>
      </section>

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
