import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = {
  title: "Hotel Ventilation Services | BVS Building Ventilation Solutions",
  description:
    "AHU refurbishment, EC fan upgrades, and coil replacement for hotels. Out-of-hours delivery. Minimum disruption. UK nationwide.",
};

const faqs = [
  {
    q: "Can you work while guests are in the hotel?",
    a: "Yes — this is the standard arrangement. We schedule noisy, disruptive, or access-intensive works overnight or during low-occupancy periods. Daytime works in contained plant rooms are often possible without any impact on guest areas.",
  },
  {
    q: "How do you minimise noise during works?",
    a: "Works requiring demolition, drilling, or heavy equipment are confined to agreed overnight windows. During daytime works in plant rooms, we use dustless methods and keep access routes through guest areas to a minimum.",
  },
  {
    q: "What if an AHU fails during a busy period?",
    a: "We handle reactive callouts and prioritise response for clients where loss of AHU performance directly affects guest comfort or a function space. Contact us directly to discuss what a reactive support arrangement looks like for your property.",
  },
  {
    q: "Can you work across a group of hotel properties?",
    a: "Yes. We manage multi-site programmes for hotel groups and FM companies — consistent scope, documentation standard, and delivery approach across the estate.",
  },
  {
    q: "Do EC fan upgrades make sense in hotels?",
    a: "Very often, yes. Hotel AHUs running 24 hours a day through the year accumulate significant energy consumption. EC fan upgrades typically pay back within 2–3 years through energy savings — and reduce noise at part load, which matters in guest bedroom zones.",
  },
  {
    q: "Do you handle kitchen extract and specialist AHUs?",
    a: "Yes. We work across kitchen extract, fresh air, heat recovery, and comfort ventilation AHUs within hotel properties — not just the central plant.",
  },
];

export default function HotelPage() {
  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/hotel.webp"
          alt="Hotel interior — BVS delivers AHU works out of hours to protect guest experience"
          fill
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 via-[50%] to-black/20" />

        <Container className="relative flex min-h-[520px] items-center py-14 pb-28 sm:min-h-[580px] sm:py-20 sm:pb-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Hotels
            </p>
            <h1
              className="font-display text-2xl font-extrabold uppercase leading-[1.08] text-white sm:text-5xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Guest Comfort First.<br />Works Around You.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-white/85" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              In hotels, HVAC failure is not an engineering problem — it is a guest experience problem with immediate revenue consequences. We plan all works around occupancy, operate out of hours, and keep rooms and function spaces trading throughout.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#297858] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Speak to an engineer
                <ArrowIcon />
              </Link>
              <Link
                href="/air-handling-unit-refurbishment"
                className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                AHU refurbishment
              </Link>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "Out-of-Hours", label: "Works Capability" },
                { stat: "Guest First", label: "Planning Approach" },
                { stat: "Marriott, IHG", label: "& More" },
              ].map((s) => (
                <div key={s.label} className="px-2 text-center sm:px-6">
                  <p className="font-display text-sm font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-wide text-white/55 sm:text-[10px]">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-7 sm:py-10">
        <Container>
          <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Trusted by leading organisations
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent sm:hidden" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:hidden" />
            <div className="overflow-x-auto no-scrollbar sm:overflow-visible">
              <div className="flex sm:grid sm:grid-flow-col sm:auto-cols-max sm:justify-center gap-x-6 gap-y-5 min-w-max sm:min-w-0 pl-4 pr-10 sm:px-0">
                {[
                  { src: "/nhs-logo.webp", alt: "NHS" },
                  { src: "/disney-logo.webp", alt: "Disney" },
                  { src: "/marriott-logo.webp", alt: "Marriott Hotels" },
                  { src: "/moorfields-logo.webp", alt: "Moorfields Eye Hospital" },
                  { src: "/ihg-logo.webp", alt: "IHG Hotels & Resorts" },
                  { src: "/travelodge-logo.webp", alt: "Travelodge" },
                  { src: "/waitrose-logo.webp", alt: "Waitrose" },
                  { src: "/westfield-logo.webp", alt: "Westfield" },
                  { src: "/fenwick-logo.webp", alt: "Fenwick" },
                  { src: "/freedomleisure-logo.webp", alt: "Freedom Leisure" },
                  { src: "/queenmary-logo.webp", alt: "Queen Mary University" },
                  { src: "/alpinef1-logo.webp", alt: "Alpine F1 Team" },
                ].map((logo) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    unoptimized
                    className="h-14 w-auto object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHAT HVAC FAILURE MEANS IN HOTELS ────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                The operational reality
              </p>
              <h2 className="font-display text-2xl font-extrabold uppercase text-white sm:text-3xl">
                HVAC Failure Is<br />a Revenue Event.
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                A failed AHU in a bedroom wing means complaints, refunds, and reviews. A failed kitchen extract unit means service cannot run. An event space with inadequate ventilation means a booking that doesn&apos;t come back.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/55">
                For hotel operators, the case for proactive AHU maintenance and refurbishment is straightforward: the cost of plant failure always exceeds the cost of preventing it. The question is whether it happens on your terms or the plant&apos;s.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:text-[#1d5c42]"
                >
                  Discuss a planned programme →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: "Bedroom wings",
                    body: "Guest comfort — temperature, humidity, and noise — is directly linked to AHU performance. Failing fans and choked filters produce exactly the conditions that generate negative reviews.",
                  },
                  {
                    title: "Kitchens and F&B",
                    body: "Kitchen extract AHUs operate in the harshest environment in the building — grease, heat, and continuous operation. Failure interrupts food service with immediate revenue impact.",
                  },
                  {
                    title: "Conference and event spaces",
                    body: "Inadequate ventilation in a full conference room is immediately noticeable and directly affects the event experience. CO2 levels rise, comfort drops, and complaints follow.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-[#297858] bg-white/5 px-5 py-4">
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/55">{item.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── HOW WE WORK IN HOTELS ─────────────────────────────────────── */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Our approach
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              Works Planned Around<br />Your Occupancy.
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Every hotel property operates differently. Our programme planning starts with your occupancy calendar — not ours.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Occupancy-first scheduling",
                desc: "Works programmed around your occupancy data — high periods avoided, shutdown windows agreed with the GM and engineering teams.",
              },
              {
                title: "Overnight and out-of-hours delivery",
                desc: "Noisy or disruptive works completed overnight. Engineers mobilised, works completed, and areas reinstated before the morning shift.",
              },
              {
                title: "Access route management",
                desc: "Routes through guest areas kept to a minimum. Where access through front-of-house is unavoidable, this is agreed in advance and managed carefully.",
              },
              {
                title: "Noise and dust control",
                desc: "Dustless working methods in plant rooms. Acoustic hoarding where required. No power tools in areas adjacent to guest bedrooms during quiet hours.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-[#297858] bg-white p-5">
                <p className="text-sm font-bold text-slate-900">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── RELEVANT SERVICES ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              What we deliver in hotels
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900 sm:text-3xl">
              Services for Hotels
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/air-handling-unit-refurbishment",
                label: "AHU Refurbishment",
                desc: "Extend service life of hotel plant. Condition survey and costed options before any commitment to works.",
              },
              {
                href: "/ec-fan-upgrades-and-retrofits-for-hvac",
                label: "EC Fan Upgrades",
                desc: "Quieter, more efficient fans for bedroom zones. 30–50% energy savings — significant for properties with high fan energy consumption.",
              },
              {
                href: "/air-handling-unit-coil-replacement",
                label: "Coil Replacement",
                desc: "Restore heating and cooling capacity. Includes kitchen extract coils — measured, sourced, and replaced within the existing unit.",
              },
              {
                href: "/air-handling-unit-controller-solutions-upgrades",
                label: "Controller Upgrades",
                desc: "Demand-controlled ventilation for function spaces. BMS integration with fault logging and remote monitoring.",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col gap-3 border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-[#297858] hover:bg-slate-50"
              >
                <p className="text-sm font-bold text-slate-900 group-hover:text-[#297858]">{s.label}</p>
                <p className="text-xs leading-5 text-slate-500">{s.desc}</p>
                <span className="mt-auto text-xs font-semibold text-[#297858] transition-all group-hover:translate-x-1">
                  Find out more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} />

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                Speak to an engineer
              </p>
              <h2 className="font-display text-3xl font-extrabold uppercase text-white sm:text-4xl">
                Discuss Your<br />Hotel Property
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                Tell us about the property, the plant, and any occupancy constraints. We&apos;ll confirm what&apos;s achievable and what an out-of-hours programme looks like for your site.
              </p>
              <div className="mt-7 space-y-3 border-l border-white/10 pl-5">
                <p className="text-sm text-white/60">Occupancy-first programme planning</p>
                <p className="text-sm text-white/60">Overnight and out-of-hours delivery as standard</p>
                <p className="text-sm text-white/60">Hotels and serviced apartments</p>
                <p className="text-sm text-white/60">Direct response from engineers, not sales handlers</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6">
                <a href="tel:01256518170" className="inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
                  <PhoneIcon /> 01256 518170
                </a>
                <a href="mailto:info@bvs-ltd.co.uk" className="inline-flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white">
                  <MailIcon /> info@bvs-ltd.co.uk
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="relative overflow-hidden border border-slate-100 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#297858]" />
                  <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-slate-900" />
                </div>
                <div className="relative">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#297858]">Enquiry</p>
                  <div className="mt-3 h-[2px] w-10 bg-[#297858]" />
                  <p className="mt-5 text-sm leading-6 text-slate-500">
                    Tell us the property type, the plant condition, and any upcoming works window. We&apos;ll respond within one working day.
                  </p>
                  <div className="mt-7">
                    <QuickQuoteForm />
                  </div>
                  <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                      Engineering response within 24 working hours
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                      No obligation — practical advice from the first call
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
