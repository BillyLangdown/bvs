import Link from "next/link";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata = {
  title: "HVAC Resources | BVS Building Ventilation Solutions",
  description:
    "Technical guides, lifecycle checklists, compliance references, and decision frameworks for AHU refurbishment, EC fan upgrades, and ventilation maintenance. Free resources from BVS.",
};

const resourceCategories = [
  {
    category: "AHU Lifecycle & Refurbishment",
    items: [
      {
        title: "AHU Condition Assessment Guide",
        description: "What to look for when surveying an ageing air handling unit. Fan condition, coil fouling, casing integrity, controls obsolescence, and structural viability.",
        type: "Guide",
        cta: "Request guide",
      },
      {
        title: "Refurbishment vs Replacement Decision Framework",
        description: "A structured approach to evaluating whether AHU refurbishment or full replacement is the right route. Covers cost, compliance, remaining life, and programme factors.",
        type: "Checklist",
        cta: "Request checklist",
      },
      {
        title: "AHU Refurbishment Scope Planner",
        description: "Component-by-component scope planner covering fans, coils, dampers, controls, casing, and filtration. Useful for defining works ahead of a detailed survey.",
        type: "Template",
        cta: "Request template",
      },
    ],
  },
  {
    category: "EC Fan Technology",
    items: [
      {
        title: "EC Fan Retrofit Feasibility Guide",
        description: "Technical requirements for EC fan conversion: mounting configurations, motor sizing, controls wiring, BMS integration, and commissioning. Practical checklist format.",
        type: "Guide",
        cta: "Request guide",
      },
      {
        title: "EC vs Belt-Drive: Energy Comparison Framework",
        description: "How to calculate the expected energy saving from an EC conversion in a specific installation. Includes worked examples with different load profiles.",
        type: "Calculator",
        cta: "Request framework",
      },
    ],
  },
  {
    category: "Compliance & Standards",
    items: [
      {
        title: "HTM 03-01 Overview for Facilities Managers",
        description: "A practical summary of NHS Health Technical Memorandum 03-01. Covers ventilation requirements by room type, maintenance obligations, and documentation standards.",
        type: "Reference",
        cta: "Request overview",
      },
      {
        title: "Part L Compliance and AHU Works",
        description: "How Part L of the Building Regulations applies to AHU refurbishment and replacement. When compliance is triggered, what evidence is required, and how EC fan conversion contributes.",
        type: "Guide",
        cta: "Request guide",
      },
      {
        title: "ESOS and EPC: AHU Works as Compliance Evidence",
        description: "How AHU energy improvements contribute to ESOS compliance and EPC uplift. Relevant for commercial and retail estates with energy reporting obligations.",
        type: "Guide",
        cta: "Request guide",
      },
    ],
  },
  {
    category: "Maintenance & Planning",
    items: [
      {
        title: "AHU Planned Maintenance Schedule Template",
        description: "Monthly, quarterly, and annual maintenance task schedule for air handling units. Covers fans, filters, coils, dampers, controls, condensate systems, and access requirements.",
        type: "Template",
        cta: "Request template",
      },
      {
        title: "Ventilation Plant Room Audit Checklist",
        description: "A structured on-site audit checklist for ventilation plant rooms. Used by facilities managers and estates teams ahead of capital planning or contract tendering.",
        type: "Checklist",
        cta: "Request checklist",
      },
    ],
  },
];

const typeBadgeColours = {
  Guide: "bg-blue-50 text-blue-700",
  Checklist: "bg-green-50 text-green-700",
  Template: "bg-amber-50 text-amber-700",
  Reference: "bg-purple-50 text-purple-700",
  Calculator: "bg-teal-50 text-teal-700",
};

const faqs = [
  {
    q: "Are these resources free to download?",
    a: "Yes. All resources listed here are available on request at no charge. They are technical documents we have developed through our own work and are happy to share with anyone working through similar decisions.",
  },
  {
    q: "How do I request a resource?",
    a: "Use the contact form or email us directly referencing the resource you need. We will send it by email, typically within one business day.",
  },
  {
    q: "Can BVS provide site-specific guidance rather than generic documents?",
    a: "Yes. If a generic guide does not address your specific situation — a particular building type, compliance question, or equipment make — we are happy to provide more direct technical input. This can be done by email or by arranging a brief call.",
  },
  {
    q: "Can I use these resources for client presentations or tender submissions?",
    a: "Yes, with attribution. These documents are provided for use in facilities management, engineering, and procurement contexts. If you need a tailored version or a co-branded format, contact us.",
  },
  {
    q: "I have a technical question not covered here — can I still contact BVS?",
    a: "Always. Technical questions are exactly what we are set up to answer. If the question relates to a real project, we may ask whether a site visit or survey would be more useful than a remote discussion.",
  },
];

export default function ResourcesPage() {
  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              HVAC Resources
            </p>
            <h1 className="font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
              Technical Guides.<br />Checklists.<br />Decision Frameworks.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/65">
              Practical resources for facilities managers, estates teams, and engineers working on AHU refurbishment, EC fan upgrades, and ventilation compliance. All available on request.
            </p>
          </div>
        </Container>
      </section>

      {/* ── HOW TO USE THESE ──────────────────────────────────────────── */}
      <section className="bg-white py-12">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Browse the categories below",
                body: "Resources are grouped by topic area. Find the guides most relevant to your current situation.",
              },
              {
                step: "02",
                title: "Request the document",
                body: "Click the request link on any resource. We will send it by email, typically within one business day.",
              },
              {
                step: "03",
                title: "Ask if you need more",
                body: "If a generic document does not answer your specific question, we are happy to provide direct technical input.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <p className="font-display text-2xl font-extrabold text-[#297858] opacity-60 shrink-0">
                  {item.step}
                </p>
                <div>
                  <p className="font-display text-sm font-extrabold uppercase text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── RESOURCE CATEGORIES ───────────────────────────────────────── */}
      {resourceCategories.map((cat, catIndex) => (
        <section
          key={cat.category}
          className={catIndex % 2 === 0 ? "bg-surface-2 py-14 sm:py-16" : "bg-white py-14 sm:py-16"}
        >
          <Container>
            <ScrollReveal className="mb-8">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                Resource category
              </p>
              <h2 className="font-display text-xl font-extrabold uppercase text-slate-900 sm:text-2xl">
                {cat.category}
              </h2>
              <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 60}>
                  <div className="flex flex-col border border-slate-200 bg-white p-6">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${typeBadgeColours[item.type] ?? "bg-slate-100 text-slate-600"}`}>
                        {item.type}
                      </span>
                    </div>
                    <h3 className="font-display text-sm font-extrabold uppercase leading-snug text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">{item.description}</p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#297858] transition-all hover:gap-3"
                    >
                      {item.cta} →
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      ))}

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} />

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-12">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-extrabold uppercase text-white">
                Can&apos;t find what you need?
              </h2>
              <p className="mt-1 text-sm text-white/55">
                If there is a specific technical question or decision you are working through, we are happy to help directly.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#297858] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
            >
              Ask a technical question →
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
}
