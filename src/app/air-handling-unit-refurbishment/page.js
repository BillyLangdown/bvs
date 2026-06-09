import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { TrustedByBar } from "@/components/site/TrustedByBar";
import { caseStudies } from "@/lib/caseStudyData";
import { CaseStudyCarousel } from "@/components/site/CaseStudyCarousel";

export const metadata = {
  title: "AHU Refurbishment | BVS Building Ventilation Solutions",
  description:
    "Restore and extend your air handling unit's life by 10–20 years at around 40% of replacement cost. BVS survey, specify, and refurbish on-site. UK nationwide.",
};

const faqs = [
  {
    q: "How much does refurbishment cost compared to replacement?",
    a: "Typically around 40% of a new unit. We provide a fixed-price, itemised quote after the survey. No commitment required before that.",
  },
  {
    q: "How long does refurbishment take?",
    a: "This ranges from a few days to several weeks depending on the scope and size of the unit. We provide a clear programme at quotation stage.",
  },
  {
    q: "Will our operations need to stop?",
    a: "Often not. Many refurbishments are staged so ventilation stays live. Where a shutdown is unavoidable, we programme it around your operational hours.",
  },
  {
    q: "How many years does it add to the unit's life?",
    a: "Typically 10–20+ years, confirmed at survey stage. If refurbishment isn't economically sound, we'll tell you honestly.",
  },
  {
    q: "Can refurbishment support Part L or net zero targets?",
    a: "Yes. EC fan conversion, heat recovery, and controls integration can all be incorporated. Where the scope of works supports it, we work to HTM 03-01 benchmarks on healthcare sites. We'll confirm what's achievable at survey stage.",
  },
  {
    q: "What maintenance is needed after refurbishment?",
    a: "Regular filter changes and system inspections are essential to maintain the performance gains achieved during refurbishment.",
  },
  {
    q: "When is replacement the better option?",
    a: "When the structural frame is beyond economic repair. We assess this honestly: there is no incentive for us to favour one route over the other.",
  },
];

export default function AHURefurbishmentPage() {
  const studies = caseStudies.filter((s) => s.services.includes("refurbishment"));
  return (
    <div>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src="/ahu-refurbishment-worker.webp"
            alt="BVS engineer carrying out air handling unit refurbishment works on site"
            fill
            priority
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 sm:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 via-[35%] to-transparent" />
        </div>

        <Container className="relative z-10 flex min-h-[620px] items-center py-14 pb-16 sm:min-h-[600px] sm:py-20 sm:pb-20">
          {/* Mobile hero */}
          <div className="sm:hidden max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              AHU Refurbishment
            </p>
            <h1
              className="font-display text-3xl font-extrabold leading-[1.08] text-white"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Restore &amp; extend<br />your air handling units.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <a href="tel:01256518170" className="mt-5 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <p
              className="mt-3 max-w-xl text-sm leading-6 text-white"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Extend your AHU&apos;s life by 10&ndash;20+ years at around 40% of full replacement cost.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Book a condition survey
                <ArrowIcon />
              </Link>
              <a
                href="#our-projects"
                className="inline-flex w-full items-center justify-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Our Projects
                <ArrowDownIcon />
              </a>
            </div>
          </div>
          {/* Desktop hero */}
          <div className="hidden sm:block max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/55"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              AHU Refurbishment
            </p>
            <h1
              className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-4xl lg:text-6xl"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              Restore &amp; extend<br />your air handling units.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p
              className="mt-5 max-w-xl text-[15px] leading-7 text-white"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
            >
              Extend your AHU&apos;s life by 10&ndash;20+ years at around 40% of full replacement cost. BVS survey, specify, and refurbish on-site with minimum disruption to your operations.
            </p>
            <a href="tel:01256518170" className="mt-6 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
              <PhoneIcon />
              01256 518170
            </a>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
              >
                Book a condition survey
                <ArrowIcon />
              </Link>
              <a
                href="#our-projects"
                className="inline-flex items-center gap-2 bg-black/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Our Projects
                <ArrowDownIcon />
              </a>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 backdrop-blur-sm">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-white/15 py-2 sm:py-3">
              {[
                { stat: "40+", label: "Years Experience" },
                { stat: "All Manufacturers", label: "Covered" },
                { stat: "UK Wide", label: "Coverage" },
              ].map((s) => (
                <div key={s.label} className="px-2 text-center sm:px-6">
                  <p className="text-sm font-extrabold text-white sm:text-lg">{s.stat}</p>
                  <p className="mt-0.5 text-[8px] uppercase tracking-wide text-white/55 sm:text-[10px]">{s.label === "Years Experience" ? <><span className="sm:hidden">Yrs Experience</span><span className="hidden sm:block">Years Experience</span></> : s.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>

      <TrustedByBar />

      {/* ── SIGNS YOUR AHU NEEDS REFURBISHMENT ────────────────────────── */}
      <section className="bg-[#f5f7f6] py-14 sm:py-16">
        <Container>

          <ScrollReveal className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Common indicators
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Signs Your AHU Needs Attention
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                n: "01",
                heading: "Reduced Efficiency",
                body: "The unit is no longer delivering the airflow or temperature conditions required by the building design.",
              },
              {
                n: "02",
                heading: "Failure to Meet Design Requirements",
                body: "Changing building use, occupancy, or regulation means the existing unit configuration can no longer comply.",
              },
              {
                n: "03",
                heading: "Excessive Noise",
                body: "Worn bearings, degraded fan blades, or loose components cause operational noise that was not present originally.",
              },
              {
                n: "04",
                heading: "Temperature Problems",
                body: "Inconsistent heating or cooling across zones points to coil degradation, control failures, or heat exchanger fouling.",
              },
              {
                n: "05",
                heading: "Corrosion from Water Ingress",
                body: "Condensation or drainage issues cause internal corrosion affecting structural integrity and air quality.",
              },
              {
                n: "06",
                heading: "Poor Indoor Air Quality",
                body: "Filter bypass, damaged seals, or degraded heat recovery reduces ventilation effectiveness and IAQ compliance.",
              },
            ].map((item) => (
              <ScrollReveal key={item.n} className="h-full">
                <div className="relative flex h-full flex-col overflow-hidden border border-slate-200 bg-white p-6">
                  <span className="absolute right-5 top-4 text-4xl font-extrabold text-[#297858]/10">
                    {item.n}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    {item.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </Container>
      </section>

      {/* ── WHAT IS AHU REFURBISHMENT ──────────────────────────────────── */}
      <section id="what-is-refurbishment" className="bg-white py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <ScrollReveal>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                What it involves
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                What Is AHU Refurbishment?
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-5 text-sm leading-7 text-slate-600">
                AHU refurbishment is a precise process aimed at restoring optimal functionality and efficiency. It is a comprehensive process involving thorough inspection and strategic component upgrades, not a blanket overhaul.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Our engineers carry out a detailed assessment of every major component before any works are specified or authorised:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Fans, coils, filters, and dampers",
                  "Heat recovery and heat exchangers",
                  "Unit corrosion and structural condition",
                  "AHU controls and automation interfaces",
                  "Access doors, panels, and seals",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-6 text-slate-500">
                Only failed or degraded components are replaced. The structural frame, casing, and duct connections are retained wherever viable, keeping costs down and works in-situ.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { stat: "40%", label: "of replacement cost, typically" },
                  { stat: "10–20+", label: "additional years of asset life" },
                  { stat: "40+", label: "years of AHU experience" },
                  { stat: "0", label: "disruption preferred, phased works" },
                ].map((item) => (
                  <div key={item.label} className="border border-slate-200 bg-white p-5">
                    <p className="text-3xl font-extrabold text-[#297858]">{item.stat}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </Container>
      </section>

      {/* ── KEY BENEFITS ───────────────────────────────────────────────── */}
      <section className="bg-[#f5f7f6] py-14 sm:py-16">
        <Container>

          <ScrollReveal className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Why refurbish
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              The Case for Refurbishment
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
              In most cases the existing AHU casing and frame are structurally sound. A targeted refurbishment restores full performance, integrates modern efficiency improvements, and avoids the cost and disruption of full replacement.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: CostIcon,
                title: "Cost Effective",
                body: "The cost to refurbish in-situ is typically around 40% of that of replacing with a new air handling unit, substantial capital savings.",
              },
              {
                icon: LeafIcon,
                title: "Energy Saving Upgrades",
                body: "Modern heat recovery controls and high-efficiency EC fans can be incorporated or retrofitted into the existing unit during refurbishment.",
              },
              {
                icon: ShieldIcon,
                title: "Industry Standard Compliant",
                body: "Systems can be modified to meet current building requirements including HTM 03-01 for healthcare and Part L energy regulations.",
              },
              {
                icon: BellIcon,
                title: "Minimum Disruption",
                body: "AHU refurbishment typically causes little or no disruption to client premises. Works are phased around operational requirements.",
              },
              {
                icon: ClockIcon,
                title: "Extended Asset Life",
                body: "This approach effectively extends the unit's working life by another 10–20+ years, deferring the capital cost of full replacement.",
              },
              {
                icon: BoltIcon,
                title: "Enhanced Performance",
                body: "Latest energy-efficient technology including direct drive plug fans and high-efficiency motors restores and improves original design performance.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 60}>
                  <div className="flex h-full flex-col border border-slate-200 bg-white p-6 transition hover:border-[#297858]/30 hover:shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#297858]/10 text-[#297858]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-sm font-extrabold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.body}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </Container>
      </section>

      {/* ── INDUSTRIES SERVED ──────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container>

          <ScrollReveal className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Sectors
            </p>
            <h2 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
              Industries We Serve
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>

          <div className="flex flex-wrap gap-2">
            {[
              "Healthcare & Hospitals",
              "Hotels & Leisure",
              "Commercial Offices",
              "Retail & Shopping Centres",
              "Gyms & Sports Facilities",
              "Educational Buildings",
              "Manufacturing & Industrial",
              "Swimming Pools",
              "Commercial Kitchens",
            ].map((sector) => (
              <span
                key={sector}
                className="border border-slate-200 bg-[#f5f7f6] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600"
              >
                {sector}
              </span>
            ))}
          </div>

        </Container>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-[#f5f7f6] py-14 sm:py-16">
        <Container>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">

            <div className="relative max-w-lg">

              <ScrollReveal className="mb-6">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                  The process
                </p>
                <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                  Survey to Handover, Four Steps
                </h2>
              </ScrollReveal>

              <div
                className="absolute left-[15px] top-20 bottom-6 w-px bg-slate-200"
                aria-hidden="true"
              />

              <div className="space-y-6">
                {[
                  {
                    n: "01",
                    title: "Site Survey",
                    body: "On-site inspection by a BVS engineer confirms condition, refurbishment viability, and scope requirements, with an honest assessment.",
                  },
                  {
                    n: "02",
                    title: "Specification & Quote",
                    body: "Fixed, component-level scope produced and agreed before any works are authorised. No surprises.",
                  },
                  {
                    n: "03",
                    title: "Refurbishment Works",
                    body: "In-situ delivery by our engineers, phased to keep ventilation live where possible and programmed around your operations.",
                  },
                  {
                    n: "04",
                    title: "Test & Handover",
                    body: "Full commissioning, performance verification, and documentation package on completion.",
                  },
                ].map((step, i) => (
                  <ScrollReveal key={step.n} delay={i * 60}>
                    <div className="flex gap-5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#111418] text-xs font-extrabold text-white">
                        {step.n}
                      </div>
                      <div className="pt-0.5">
                        <p className="text-sm font-bold text-slate-900">{step.title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{step.body}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

            </div>

            <ScrollReveal delay={120}>
              <div className="relative h-[420px] overflow-hidden border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/ahu-refurbishment-hero2.webp"
                  alt="BVS engineer carrying out AHU refurbishment works"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

          </div>

        </Container>
      </section>

      {/* ── OUR PROJECTS ── case study carousel ───────────────────────── */}
      <section id="our-projects" className="bg-[#111418] py-14 sm:py-20">
        <Container>
          <ScrollReveal className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Our Projects
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              Work We&apos;ve Delivered
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
          </ScrollReveal>
          <CaseStudyCarousel
            studies={studies}
            intro="NHS trusts, shopping centres, hotels, entertainment venues, and production facilities."
          />
        </Container>
      </section>

      {/* ── FINAL CTA + FORM ───────────────────────────────────────────── */}
      <section className="bg-[#f7f6f5] py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Get in touch
              </p>
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Ready to Restore<br />Your AHU?
              </h2>
              <div className="mt-3 h-[3px] w-10 bg-[#297858]" />
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Tell us the make, model, and the issue you&apos;re experiencing. We respond within one working day with a practical assessment.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "On-site condition survey by an experienced engineer",
                  "Fixed-price, itemised scope, no surprises",
                  "Works programmed around your operations",
                  "No obligation to proceed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckIcon /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border border-[#297858]/20 bg-[#297858]/5 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#297858]">Call us directly</p>
                <a href="tel:01256518170" className="mt-3 flex items-center gap-3 text-2xl font-extrabold text-slate-900 transition-colors hover:text-[#297858]">
                  <PhoneIcon /> 01256 518170
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="border border-slate-200 bg-white p-7">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#297858]">Enquiry</p>
                <p className="mb-5 text-xs text-slate-500">We will aim to respond within 24 hours</p>
                <QuickQuoteForm defaultService="AHU Refurbishment" />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <FAQAccordion faqs={faqs} theme="dark" />

      {/* ── FURTHER READING ────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-[#f5f7f6] py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Further reading</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "When Does AHU Refurbishment Make More Sense Than Replacement?",
                desc: "Cost is only part of the picture. Structural life, compliance, energy targets, and programme constraints all factor into the decision.",
              },
              {
                title: "The Hidden Cost of Delaying AHU Coil Replacement",
                desc: "A degraded coil loses performance gradually, long before it stops working. The cost shows up in energy bills and air quality first.",
              },
              {
                title: "EC Fan Upgrades: What the Energy Savings Actually Look Like",
                desc: "Quoted savings range from 15% to 60% depending on the source. We break down what the numbers look like on a real commercial job.",
              },
            ].map((post) => (
              <Link
                key={post.title}
                href="/blogs"
                className="group flex flex-col gap-2 border border-slate-200 bg-white p-5 transition-all hover:border-[#297858]/40 hover:shadow-sm"
              >
                <p className="text-sm font-bold leading-snug text-slate-900 group-hover:text-[#297858] transition-colors">{post.title}</p>
                <p className="text-xs leading-5 text-slate-500">{post.desc}</p>
                <span className="mt-auto pt-2 text-[11px] font-semibold text-[#297858]">Read more →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── RELATED ────────────────────────────────────────────────────── */}
      <section className="border-t border-slate-100 bg-white py-12">
        <Container>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">Related services</p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/ec-fan-upgrades-and-retrofits-for-hvac", label: "EC Fan Upgrades" },
              { href: "/air-handling-unit-coil-replacement", label: "Coil Replacement" },
              { href: "/air-handling-unit-manufactoring-and-installation", label: "AHU Manufacturing & Installation" },
              { href: "/air-handling-unit-controller-solutions-upgrades", label: "Controller Upgrades" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-[#297858] hover:text-[#297858]"
              >
                {l.label}
                <span className="text-slate-300 group-hover:translate-x-1 group-hover:text-[#297858] transition-transform">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-[#297858]">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CostIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v1m0 8v1M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-1 2-2.5 2.5S9.5 13 9.5 14.5a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function LeafIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M17 8C8 10 5.9 16.17 3.82 19.42A1 1 0 0 0 5 21C9 21 15 19 17 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 8c1-2.5 1-5 0-7-4 2-7 6-6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ShieldIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3 4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BellIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ClockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BoltIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
