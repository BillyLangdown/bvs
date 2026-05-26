import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { caseStudies } from "@/lib/caseStudyData";
import { CaseStudyCarousel } from "@/components/site/CaseStudyCarousel";

export const metadata = {
  title: "Defence & Government Ventilation | BVS Building Ventilation Solutions",
  description:
    "AHU refurbishment and ventilation services for defence and government facilities. Secure site experience. Programme compliance. UK nationwide.",
};

const faqs = [
  {
    q: "Do your engineers hold security clearances?",
    a: "We have engineers who have worked on sites requiring enhanced security vetting. The clearance level required depends on the specific site and access classification. We discuss this at enquiry stage and confirm capability before committing to a programme.",
  },
  {
    q: "Can you work within strict access and programme requirements?",
    a: "Yes. We are experienced working within site access protocols including escorted access, tool and material manifests, and pre-approved works programmes. Compliance with site rules is treated as a non-negotiable part of the contract.",
  },
  {
    q: "Do you work on live operational sites?",
    a: "Yes. Most defence and government sites remain operational during maintenance and refurbishment works. We plan around operational requirements, agree shutdown windows in advance, and deliver to programme without unplanned disruption.",
  },
  {
    q: "Can you manage the documentation requirements on these contracts?",
    a: "Yes. We produce the quality, technical, and commissioning documentation typically required on government and defence contracts, including as-fitted drawings, commissioning records, risk assessments, and method statements to the required standard.",
  },
  {
    q: "Do you work directly with the MoD or through prime contractors?",
    a: "Both. We work as specialist sub-contractors on managed defence contracts and directly with estates teams where that route is appropriate. We are experienced with both procurement routes.",
  },
  {
    q: "What AHU services are most relevant to defence estates?",
    a: "Refurbishment and life extension of ageing plant is the most common requirement. EC fan upgrades and controller replacements are also frequently delivered where energy reduction targets or obsolete controls are the trigger.",
  },
];

export default function DefencePage() {
  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] w-full overflow-hidden bg-slate-900">
        <Image
          src="/defence.webp"
          alt="Defence facility, BVS delivers ventilation services on secure government and MoD sites"
          fill
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 via-[50%] to-black/30" />

        <Container className="relative flex min-h-[520px] items-center py-14 pb-28 sm:min-h-[580px] sm:py-20 sm:pb-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Defence &amp; Government
            </p>
            <h1
              className="text-2xl font-extrabold leading-[1.08] text-white sm:text-5xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Specialists for secure & government sites.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 text-[15px] leading-7 text-white/85" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              Defence and government facilities operate within access protocols, security requirements, and programme obligations that most contractors are not equipped to meet. We are. Experienced on secure sites, working within the rules, to programme.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Get in touch
                <ArrowIcon />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Services
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3v10M3 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-2 divide-x divide-white/15 py-2 sm:grid-cols-4 sm:py-3">
              {[
                { stat: "VIVO", label: "Approved" },
                { stat: "Secure Site", label: "Access Experience" },
                { stat: "Programme", label: "Compliance" },
                { stat: "UK Nationwide", label: "Coverage" },
              ].map((s) => (
                <div key={s.label} className="px-2 text-center sm:px-6">
                  <p className="text-sm font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-wide text-white/55 sm:text-[10px]">{s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      {/* ── THE OPERATING ENVIRONMENT ─────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                The operating environment
              </p>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                What Makes Defence<br />Estates Different.
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-white/55">
                Security vetting, escorted access, tool manifests, and pre-approved method statements are standard requirements on defence and government sites. These are not obstacles, they are the baseline expectation.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/55">
                Operational continuity is non-negotiable. Works cannot run over programme without site management approval. Unplanned disruption is not acceptable. The contractor that works on these sites understands this from the outset.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:text-[#1d5c42]"
                >
                  Discuss your requirements →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <ul className="flex flex-col gap-3">
                {[
                  "Security vetting requirements confirmed and met before site attendance",
                  "Works programmes submitted and approved in advance, no ad hoc access",
                  "Tool and material manifests produced for each site visit",
                  "Escorted access procedures followed without exception",
                  "Risk assessments and method statements to the required format and standard",
                  "Site-specific rules briefed and signed off before works commence",
                ].map((item) => (
                  <li key={item} className="flex gap-3 border-l-2 border-[#297858] bg-white/5 px-4 py-3">
                    <CheckIcon className="mt-1 shrink-0" />
                    <span className="text-sm leading-6 text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── VIVO APPROVED ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                Approved status
              </p>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                VIVO Approved<br />Contractor
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-7 text-slate-500">
                BVS holds approved contractor status with VIVO, the organisation responsible for managing and maintaining the UK&apos;s defence housing and built estate on behalf of the Ministry of Defence.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                VIVO approval means BVS has been vetted, assessed, and authorised to deliver mechanical services on MOD-managed estates. This removes a significant barrier to mobilisation and confirms we meet the compliance and quality standards required to work on these sites.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="flex flex-col gap-3">
                {[
                  "Vetted and authorised to work on MOD-managed estates",
                  "Compliance and quality standards assessed and confirmed",
                  "Faster mobilisation on VIVO-managed contracts",
                  "Experience across defence housing and operational estates",
                ].map((item) => (
                  <div key={item} className="flex gap-3 border-l-2 border-[#297858] bg-[#f7f6f5] px-4 py-3">
                    <CheckIcon className="mt-1 shrink-0" />
                    <span className="text-sm leading-6 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── INFRASTRUCTURE CHALLENGES ─────────────────────────────────── */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                The infrastructure challenge
              </p>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Ageing MoD Plant<br />in Demanding Environments.
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-6 text-sm leading-6 text-slate-500">
                Much of the UK defence estate was built in the post-war period and expanded through the 1970s and 1980s. Mechanical plant in many of these buildings is well past its design life but continues to operate due to budget cycles, procurement timelines, and operational continuity requirements.
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-500">
                Refurbishment and life extension, rather than full replacement, is often the most practical option. It avoids lengthy procurement programmes, reduces plant room disruption, and can significantly extend useful asset life.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: "Life extension over replacement",
                    body: "Where plant is structurally sound, targeted refurbishment, new fans, coils, and controls within the existing casing, can add 10–15 years at a fraction of full replacement cost.",
                  },
                  {
                    title: "Obsolete controls replacement",
                    body: "Standalone controllers with no BMS connection are common in older defence buildings. Modern open-protocol replacements add monitoring, fault logging, and energy visibility without major plant works.",
                  },
                  {
                    title: "EC fan upgrades",
                    body: "Belt-driven fans running at fixed speed are a standard finding. EC retrofits reduce energy consumption and eliminate the maintenance overhead of belts and pulleys, within the original AHU casing.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border border-slate-200 bg-white p-5">
                    <p className="text-sm font-bold text-slate-900">{item.title}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{item.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── RELEVANT SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="bg-white py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              What we deliver on defence estates
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Services for Defence &amp; Government
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/air-handling-unit-refurbishment",
                label: "AHU Refurbishment",
                desc: "Life extension of existing plant. Condition surveys with costed options, no commitment required before survey.",
              },
              {
                href: "/air-handling-unit-manufactoring-and-installation",
                label: "AHU Manufacturing & Installation",
                desc: "Made-to-specification replacement AHUs where like-for-like sourcing is not possible.",
              },
              {
                href: "/ec-fan-upgrades-and-retrofits-for-hvac",
                label: "EC Fan Upgrades",
                desc: "Replace belt-driven fans within existing casings. Energy savings and maintenance reduction.",
              },
              {
                href: "/air-handling-unit-controller-solutions-upgrades",
                label: "Controller Upgrades",
                desc: "Replace obsolete standalone controls with open-protocol BMS-integrated systems.",
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

      {/* ── OUR PROJECTS ─────────────────────────────────────────────── */}
      <section id="our-projects" className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-8">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">Our projects</p>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Case Studies</h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>
          <CaseStudyCarousel studies={caseStudies} />
        </Container>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} theme="dark" />

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                Get in touch
              </p>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Discuss Your<br />Defence Estate
              </h2>
              <div className="mt-3 h-[3px] w-12 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-white/65">
                Tell us about the site, the plant, and any access or clearance requirements. We&apos;ll confirm our capability and what the practical approach looks like before any visit is arranged.
              </p>
              <div className="mt-7 space-y-3 border-l border-white/10 pl-5">
                <p className="text-sm text-white/60">Secure site access experience as standard</p>
                <p className="text-sm text-white/60">Programme compliance, works delivered within agreed windows</p>
                <p className="text-sm text-white/60">Full documentation to the required standard</p>
                <p className="text-sm text-white/60">Direct response, not sales handlers</p>
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
                    Tell us about the site and the requirement. We treat all enquiries from defence and government estates with appropriate confidentiality.
                  </p>
                  <div className="mt-7">
                    <QuickQuoteForm />
                  </div>
                  <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                      Response within 24 hours
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#297858]" />
                      All enquiries treated in confidence
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
function CheckIcon({ className = "" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`shrink-0 text-[#297858] ${className}`}>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
