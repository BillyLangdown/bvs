import Link from "next/link";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
  title: "Careers | BVS Building Ventilation Solutions",
  description:
    "Engineering roles at BVS. We work on air handling units across healthcare, hotels, defence, education, and leisure sites throughout the UK. In-house team. Technical work.",
};

const whyBVS = [
  {
    title: "Technical Depth",
    body: "The work is not generic maintenance. It is AHU refurbishment, EC fan conversion, bespoke coil manufacture, controls integration, and commissioning. The scope requires real engineering knowledge and builds it.",
  },
  {
    title: "Varied Sites",
    body: "One week might be a live NHS hospital. The next, a secure government facility or a hotel pool plant room. The environments change. The engineering problems change. It is not repetitive work.",
  },
  {
    title: "One Team",
    body: "We do not sub-contract the delivery. The engineer who surveys a unit is often the same person who carries out the works. That means direct ownership of quality and outcome — not handoffs.",
  },
  {
    title: "Established, Not Corporate",
    body: "40 years in business. Small enough that decisions are made quickly and the people doing the work are known to the people directing it. Large enough to handle complex programmes across multiple sites.",
  },
];

const roleTypes = [
  {
    area: "Field Engineering",
    description:
      "On-site AHU works: refurbishment, EC fan installation, coil replacement, and associated mechanical works. Experience with plant room environments, HVAC equipment, and in-situ installation is relevant.",
    relevant: ["AHU / HVAC engineering background", "Mechanical installation experience", "Plant room familiarity", "Willingness to travel for site-based work"],
  },
  {
    area: "Controls & Commissioning",
    description:
      "AHU controller replacement, DDC panel build and installation, BMS integration, and full commissioning. Experience with BACnet, Modbus, or Trend preferred. Electrical or controls background.",
    relevant: ["DDC / BMS controls experience", "Electrical installation or panel-build background", "Commissioning experience", "Open-protocol protocols: BACnet, Modbus, LON"],
  },
  {
    area: "Estimating & Technical Sales",
    description:
      "Scope interpretation, specification writing, and client-facing technical discussions. Strong HVAC background required — this is not a pure sales role. Client confidence comes from technical credibility.",
    relevant: ["HVAC technical knowledge", "Scope writing and cost estimation", "Ability to interpret survey findings", "Client-facing communication"],
  },
  {
    area: "Survey & Assessment",
    description:
      "On-site AHU condition surveys, performance assessments, and refurbishment feasibility evaluation. The findings directly drive the scope of works, so accuracy and thoroughness matter.",
    relevant: ["AHU and ventilation equipment knowledge", "Site assessment and reporting experience", "Understanding of refurbishment viability factors", "Clean driving licence"],
  },
];

const hiringSteps = [
  {
    n: "01",
    title: "Send Your CV",
    body: "Email your CV with a brief note on your background and what kind of role you are looking for. No covering letter required — keep it direct.",
  },
  {
    n: "02",
    title: "Initial Conversation",
    body: "If there is a match — current vacancy or planned hire — we will arrange a call or meeting to understand your background and discuss the role in more detail.",
  },
  {
    n: "03",
    title: "Site or Technical Discussion",
    body: "Depending on the role, we may arrange a site visit or a more detailed technical discussion to confirm fit on both sides. No formal assessment centre.",
  },
];

export default function CareersPage() {
  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              Careers
            </p>
            <h1 className="font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
              Engineering Work.<br />Real Sites.<br />One Team.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/65">
              BVS is a specialist air handling unit contractor. We survey, refurbish, upgrade, and install ventilation plant across some of the most demanding building environments in the UK. If that kind of work interests you, we want to hear from you.
            </p>
          </div>
        </Container>
      </section>

      {/* ── WHY BVS ───────────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Working Here
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-slate-900 sm:text-3xl">
              What It Actually<br />Looks Like
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {whyBVS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 70}>
                <div className="border border-slate-200 bg-white p-6">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="h-1 w-6 bg-[#297858]" />
                    <h3 className="font-display text-sm font-extrabold uppercase text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-500">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── ROLE TYPES ────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <ScrollReveal className="mb-10 max-w-2xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Types of Role
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
              Where We Hire
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 text-sm leading-6 text-white/55">
              We do not always have live vacancies in every area. But if your background matches one of these, it is worth sending a speculative application. We maintain a list of strong candidates for when roles arise.
            </p>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {roleTypes.map((role, i) => (
              <ScrollReveal key={role.area} delay={i * 70}>
                <div className="border border-white/10 bg-white/5 p-6">
                  <h3 className="font-display text-base font-extrabold uppercase text-[#297858]">
                    {role.area}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{role.description}</p>
                  <ul className="mt-4 space-y-2">
                    {role.relevant.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-xs text-white/45">
                        <div className="mt-1.5 h-1 w-3 shrink-0 bg-[#297858]" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CURRENT VACANCIES ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-18">
        <Container>
          <ScrollReveal className="mb-8 max-w-2xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Vacancies
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase leading-tight text-slate-900 sm:text-3xl">
              Current Openings
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <div className="border border-dashed border-slate-300 bg-surface-2 p-8 sm:p-10">
              <p className="font-display text-base font-extrabold uppercase text-slate-700">
                No vacancies currently listed
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                We do not always advertise roles publicly. If your background is relevant — field engineering, controls, estimating, or survey — send us your CV speculatively. When something comes up, we go to our list of known candidates first.
              </p>
              <Link
                href="mailto:info@bvs.co.uk"
                className="mt-6 inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
              >
                Send a speculative CV →
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── HOW WE HIRE ───────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-14 sm:py-16">
        <Container>
          <ScrollReveal className="mb-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Process
            </p>
            <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">
              How We Hire
            </h2>
            <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {hiringSteps.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 80}>
                <div className="flex gap-5">
                  <p className="font-display text-3xl font-extrabold text-[#297858] opacity-50 shrink-0">
                    {step.n}
                  </p>
                  <div>
                    <h3 className="font-display text-sm font-extrabold uppercase text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{step.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-12">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-extrabold uppercase text-white">
                Think you&apos;d be a good fit?
              </h2>
              <p className="mt-1 text-sm text-white/55">
                Send your CV and a brief note on your background. We will be in touch if there is a match — current or future.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              Get in touch →
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
}
