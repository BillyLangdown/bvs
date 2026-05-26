import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/site/Container";

export const metadata = {
  title: "Industries We Serve | BVS Building Ventilation Solutions",
  description:
    "BVS delivers AHU refurbishment, EC fan upgrades, and ventilation services across healthcare, defence, education, hotels, leisure, and retail. 40+ years experience.",
};

const sectors = [
  {
    slug: "hospital",
    label: "Healthcare & NHS",
    summary: "Clinical environment experience. Critical environments. Live site works managed as standard.",
    photo: "/hospital.webp",
    photoAlt: "NHS hospital corridor, BVS ventilation services for healthcare environments",
  },
  {
    slug: "defence",
    label: "Defence & Government",
    summary: "Secure site experience. Programme compliance. Access and vetting requirements met.",
    photo: "/defence.webp",
    photoAlt: "Defence facility, BVS ventilation on secure government and MoD sites",
  },
  {
    slug: "education",
    label: "Education",
    summary: "Holiday window delivery. Budget-conscious lifecycle approach. Any estate type.",
    photo: "/school.webp",
    photoAlt: "School building, BVS AHU works scheduled around academic calendars",
  },
  {
    slug: "hotel",
    label: "Hotels",
    summary: "Out-of-hours works. Minimum disruption. Marriott, IHG, and more.",
    photo: "/hotel.webp",
    photoAlt: "Hotel interior, BVS delivers AHU works out of hours",
  },
  {
    slug: "leisure-centre",
    label: "Leisure Centres",
    summary: "Pool hall specialist. Corrosion-resistant specification. High-humidity environments.",
    photo: "/swimming-pool.webp",
    photoAlt: "Leisure centre swimming pool, BVS pool hall AHU specialist",
  },
  {
    slug: "retail",
    label: "Retail & Commercial",
    summary: "Around trading hours. EPC and energy reduction support. Multi-site portfolio delivery.",
    photo: "/mall.webp",
    photoAlt: "Shopping centre, BVS AHU works delivered around retail trading hours",
  },
];

export default function IndustriesPage() {
  return (
    <div>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              Industries
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              40+ years of experience<br />across every sector.
            </h1>
            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/65">
              The engineering is consistent. The approach adapts. Healthcare means live clinical environments and careful documentation. Defence means security compliance and programme rigour. Education means the summer window. We&apos;ve worked in all of them.
            </p>
          </div>
        </Container>
      </section>

      {/* ── SECTOR GRID ───────────────────────────────────────────────── */}
      <section className="bg-surface-2 py-14 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <Link
                key={s.slug}
                href={`/industries/${s.slug}`}
                className="group flex flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-200 hover:border-[#297858] hover:shadow-md"
              >
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <Image
                    src={s.photo}
                    alt={s.photoAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/30" />
                </div>
                <div className="flex flex-col gap-3 p-5">
                  <h2 className="text-base font-extrabold text-slate-900 group-hover:text-[#297858]">
                    {s.label}
                  </h2>
                  <p className="text-sm leading-6 text-slate-500">{s.summary}</p>
                  <span className="mt-auto text-xs font-semibold text-[#297858] transition-all group-hover:translate-x-1">
                    View sector →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
      <section className="bg-[#111418] py-12">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-white">
                Don&apos;t see your sector?
              </h2>
              <p className="mt-1 text-sm text-white/55">
                We work across many more building types. Get in touch and we&apos;ll discuss your requirements.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-6 py-3 text-sm font-semibold text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a]"
            >
              Discuss your project →
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
}
