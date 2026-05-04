import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ContactPageForm } from "@/components/forms/ContactPageForm";

export const metadata = {
  title: "Contact Us | BVS Building Ventilation Solutions",
  description:
    "Speak directly with an AHU specialist. Tell us about your project and we'll respond with practical options within one working day — no obligation, no sales pitch.",
};

/* ── DATA ───────────────────────────────────────────────────────────── */

const trustLogos = [
  { src: "/nhs-logo.png", alt: "NHS" },
  { src: "/disney-logo.png", alt: "Disney" },
  { src: "/marriott-logo (1).png", alt: "Marriott" },
  { src: "/ihg-logo.png", alt: "IHG Hotels & Resorts" },
  { src: "/waitrose-logo.png", alt: "Waitrose" },
  { src: "/alpinef1-logo.png", alt: "Alpine F1 Team" },
];

const steps = [
  {
    number: "01",
    title: "Submit your enquiry",
    body: "Use the form or call us directly. Takes under 2 minutes. No lengthy specification needed — just tell us what you're working on.",
  },
  {
    number: "02",
    title: "An engineer reviews it",
    body: "Your enquiry goes to our technical team — not a call centre or sales department. We look at the specifics before responding.",
  },
  {
    number: "03",
    title: "Practical response within one day",
    body: "We'll come back with options and logical next steps. No hard sell. If a site survey makes sense, we'll say so and arrange it.",
  },
];

const objections = [
  { q: "Will I be chased by a sales team?", a: "No. We're engineers, not a sales organisation. You'll hear back from someone technical." },
  { q: "Do you work nationwide?", a: "Yes — we cover the whole of the UK. Based in Hampshire but regularly on-site from Scotland to the South West." },
  { q: "What if my project is small?", a: "We handle single-unit refurbishments and multi-site programmes alike. All enquiries are treated the same way." },
];

/* ── PAGE ───────────────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <div>

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#111418] pb-0 pt-14 sm:pt-20">
        <Container>
          <div className="pb-12 sm:pb-16 max-w-2xl">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">
              Contact BVS
            </p>
            <h1 className="font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              Speak Directly<br />With a Specialist
            </h1>
            <div className="mt-4 h-[3px] w-10 bg-emerald-500" />
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-white/65">
              We don&apos;t pass you to a call centre. Your enquiry goes straight to our technical team — and we&apos;ll respond with practical options, not a sales pitch.
            </p>

            {/* Contact methods */}
            <div className="mt-8 flex flex-wrap gap-6">
              <a
                href="tel:01256518170"
                className="group inline-flex items-center gap-3 transition-colors hover:text-emerald-400"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/8 text-emerald-400 ring-1 ring-white/10 transition-colors group-hover:bg-emerald-500/20">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-white/40">Call us</span>
                  <span className="text-[15px] font-bold text-white group-hover:text-emerald-400 transition-colors">01256 518170</span>
                </span>
              </a>
              <a
                href="mailto:info@bvs-ltd.co.uk"
                className="group inline-flex items-center gap-3 transition-colors hover:text-emerald-400"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/8 text-emerald-400 ring-1 ring-white/10 transition-colors group-hover:bg-emerald-500/20">
                  <EmailIcon />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-white/40">Email us</span>
                  <span className="text-[15px] font-bold text-white group-hover:text-emerald-400 transition-colors">info@bvs-ltd.co.uk</span>
                </span>
              </a>
            </div>
          </div>
        </Container>

        {/* Stats strip */}
        <div className="border-t border-white/10 bg-black/30">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/10 py-3">
              {[
                { stat: "< 1 day", label: "Response Time" },
                { stat: "40+", label: "Years Experience" },
                { stat: "Nationwide", label: "UK Coverage" },
              ].map((s) => (
                <div key={s.label} className="px-3 text-center sm:px-6">
                  <p className="font-display text-base font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wide text-white/50 sm:text-[11px]">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* ── 2. TRUST + FORM ─────────────────────────────────────────── */}
      <section className="bg-surface-2 py-14 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_520px] lg:items-start">

            {/* Left: trust column */}
            <div className="flex flex-col gap-12">

              {/* Process steps */}
              <ScrollReveal>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-700">How it works</p>
                <h2 className="font-display text-xl font-extrabold uppercase text-slate-900 sm:text-2xl">
                  What happens after you reach out
                </h2>
                <div className="mt-2 h-[3px] w-8 bg-emerald-700" />

                <div className="mt-8 flex flex-col">
                  {steps.map((step, i) => (
                    <div key={step.number} className="relative flex gap-5 pb-8 last:pb-0">
                      {i < steps.length - 1 && (
                        <div className="absolute left-5 top-10 bottom-0 w-px bg-slate-200" />
                      )}
                      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center bg-[#111418]">
                        <span className="font-display text-[11px] font-extrabold text-emerald-400">{step.number}</span>
                      </div>
                      <div className="pt-2">
                        <p className="text-sm font-bold text-slate-900">{step.title}</p>
                        <p className="mt-1.5 text-sm leading-6 text-slate-500">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Common objections */}
              <ScrollReveal>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Common questions</p>
                <div className="flex flex-col gap-3">
                  {objections.map((o) => (
                    <div key={o.q} className="border-l-2 border-emerald-700 bg-white px-5 py-4">
                      <p className="text-sm font-bold text-slate-900">{o.q}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">{o.a}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Trust logos */}
              <ScrollReveal>
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Trusted by leading UK organisations
                </p>
                <div className="grid grid-cols-3 gap-x-6 gap-y-5">
                  {trustLogos.map((logo) => (
                    <Image
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      height={48}
                      width={100}
                      unoptimized
                      className="h-9 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                      style={{ maxHeight: "36px", width: "auto", maxWidth: "100px" }}
                    />
                  ))}
                </div>
              </ScrollReveal>

              {/* Contact details */}
              <ScrollReveal>
                <div className="border border-slate-200 bg-white">
                  <div className="border-b border-slate-100 px-6 py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Contact Details</p>
                  </div>
                  <div className="flex flex-col divide-y divide-slate-100">
                    {[
                      {
                        icon: <PhoneIcon />,
                        label: "Phone",
                        content: <a href="tel:01256518170" className="text-sm font-bold text-slate-900 hover:text-emerald-700">01256 518170</a>,
                      },
                      {
                        icon: <EmailIcon />,
                        label: "Email",
                        content: <a href="mailto:info@bvs-ltd.co.uk" className="text-sm font-bold text-slate-900 hover:text-emerald-700">info@bvs-ltd.co.uk</a>,
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
                        label: "Office hours",
                        content: (
                          <>
                            <p className="text-sm font-bold text-slate-900">Mon–Fri: 8am – 5pm</p>
                            <p className="text-xs text-slate-500">Out of hours? Leave a message — we&apos;ll call back.</p>
                          </>
                        ),
                      },
                    ].map((row) => (
                      <div key={row.label} className="flex items-start gap-4 px-6 py-4">
                        <span className="mt-0.5 shrink-0 text-emerald-700">{row.icon}</span>
                        <div>
                          <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400">{row.label}</p>
                          {row.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* Right: Form panel (sticky on desktop) */}
            <ScrollReveal delay={80} className="lg:sticky lg:top-24">
              <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">

                {/* Panel header */}
                <div className="bg-[#111418] px-6 py-5 sm:px-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                    Send an Enquiry
                  </p>
                  <p className="mt-1 text-base font-bold text-white">
                    Tell us about your project
                  </p>
                  <p className="mt-1 text-xs text-white/45">
                    We&apos;ll respond within one working day with practical options.
                  </p>
                </div>

                <ContactPageForm />

              </div>

              {/* Below-form reassurance */}
              <div className="mt-4 flex items-start gap-3 px-1">
                <span className="mt-0.5 shrink-0 text-emerald-700">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3 4 7v6c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-xs leading-5 text-slate-500">
                  Your information is never shared with third parties.
                  We&apos;re Gas Safe registered, Constructionline Gold, and SafeContractor approved.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── 3. FINAL PUSH — for anyone still hesitating ─────────────── */}
      <section className="bg-[#111418] py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <ScrollReveal>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">Not sure yet?</p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                Just pick up the phone
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-white/60">
                Even a 5-minute call can confirm whether we&apos;re the right fit. No commitment needed — we&apos;re straightforward people and you&apos;ll know where you stand.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <a
                href="tel:01256518170"
                className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                <PhoneIcon />
                01256 518170
              </a>
            </ScrollReveal>
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
