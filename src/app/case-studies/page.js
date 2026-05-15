import Image from "next/image";
import { Container } from "@/components/site/Container";
import CaseStudiesGrid from "./CaseStudiesGrid";

export const metadata = {
  title: "Case Studies | BVS Building Ventilation Solutions",
  description:
    "Real projects from BVS. AHU refurbishment, EC fan upgrades, coil replacement, and controller programmes across healthcare, hotels, education, and more.",
};

const caseStudies = [
  {
    slug: "bath-private-hospital-ahu-refurbishment",
    sector: "Healthcare",
    title: "Private Hospital Bath — Operating Theatre AHU Refurbishment",
    summary:
      "BVS refurbished an AHU supplying operating theatres at a private hospital in Bath — EC fans, custom cubic heat exchanger, and new fan bulkheads delivered energy savings with minimal clinical disruption.",
    tags: ["AHU Refurbishment", "EC Fan", "Healthcare"],
    image: "/private-hospital-bath-case-study.webp",
  },
  {
    slug: "nhs-hammersmith-ahu-refurbishment",
    sector: "Healthcare",
    title: "NHS Hammersmith & Fulham — AHU Refurbishment",
    summary:
      "BVS carried out a targeted light refurbishment of AHUs at an NHS hospital in Hammersmith & Fulham — drivebelts, filters, coil cleaning, corrosion treatment, and bathroom extract fan repairs.",
    tags: ["AHU Refurbishment", "NHS", "Healthcare"],
    image: "/nhs-hammersmith-fulham-case-study.webp",
  },
  {
    slug: "friary-meadow-ahu-replacement",
    sector: "Healthcare",
    title: "Friary Meadow Retirement Village — AHU Replacement",
    summary:
      "BVS designed and installed a replacement AHU at Friary Meadow Retirement Village — delivering reliable ventilation for a sensitive residential care environment with minimum disruption to residents.",
    tags: ["AHU Replacement", "Residential Care"],
    image: "/friary-meadow-case-study.webp",
  },
  {
    slug: "warner-leisure-hotel-gunton-hall-ahu",
    sector: "Hotel",
    title: "Warner Leisure Hotel Gunton Hall — AHU Manufacturing",
    summary:
      "BVS designed, manufactured, and installed a custom-built replacement AHU for Warner Leisure Hotel's Gunton Hall swimming pool — tailor-made for a constrained plantroom, delivered in flatpack, and commissioned with a Trend controls panel.",
    tags: ["AHU Manufacturing", "Hotel", "Pool Hall"],
    image: "/warner-hotel-gunton-case-study.webp",
  },
  {
    slug: "marriott-forest-of-arden-pool-ventilation",
    sector: "Hotel",
    title: "Marriott Forest of Arden — Swimming Pool AHU Troubleshooting",
    summary:
      "The AHU at Marriott Forest of Arden's swimming pool was designed to maintain 31°C but had only ever reached 24°C. BVS validated the system, identified ductwork leaks and AHU configuration faults, and delivered a full remediation scope.",
    tags: ["AHU Troubleshooting", "Hotel", "Pool Hall"],
    image: "/warner-hotel-forest-of-arden-case-study.webp",
  },
  {
    slug: "leisure-centre-dorset-ec-fan-upgrade",
    sector: "Leisure",
    title: "Leisure Centre Dorset — Swimming Pool AHU EC Fan Upgrade",
    summary:
      "BVS replaced failed belt-driven fans on a Dorset leisure centre's swimming pool AHU with two Ziehl-Abegg GR561-ZID EC fans — restoring airflow, humidity control, and protecting the building fabric.",
    tags: ["EC Fan Upgrade", "Leisure", "Pool Hall"],
    image: "/dorset-leisure-centre-case-study.webp",
  },
  {
    slug: "ringwood-leisure-ahu-controller-upgrade",
    sector: "Leisure",
    title: "Ringwood Leisure Centre — AHU Controller Upgrade",
    summary:
      "Advised that two AHUs needed full replacement at £100k+, BVS identified the actual cause as failing controls. Trend controllers were installed on both units at a fraction of replacement cost.",
    tags: ["Controller Upgrade", "Leisure", "Trend"],
    image: "/ringwood-leisure-center-case-study.webp",
  },
  {
    slug: "gresham-street-office-ahu-refurbishment",
    sector: "Commercial",
    title: "10 Gresham Street London — AHU Refurbishment",
    summary:
      "The AHU at a Gresham Street commercial office in London required full internal refurbishment to meet reduced air volume requirements. BVS replaced all major components and upgraded to a modern inverter and fan assembly.",
    tags: ["AHU Refurbishment", "Commercial", "London"],
    image: "/gresham-street-office-case-study.webp",
  },
  {
    slug: "pembroke-offices-ahu-refurbishment",
    sector: "Commercial",
    title: "Pembroke Offices — AHU Refurbishment",
    summary:
      "Post front-of-house renovation, BVS refurbished the AHUs at Pembroke Offices — reverse cycle coil, three Ziehl EC fans, 84kW heater batteries, casing repairs, and improved filtration.",
    tags: ["AHU Refurbishment", "Commercial"],
    image: "/pembroke-offices-case-study.webp",
  },
  {
    slug: "burlington-street-office-coil-replacement",
    sector: "Commercial",
    title: "Burlington Street Office — Frost Coil Replacement",
    summary:
      "The frost coil at a Burlington Street commercial office suffered severe damage. BVS designed, manufactured, and installed a split-section replacement to overcome plantroom access constraints.",
    tags: ["Coil Replacement", "Commercial"],
    image: "/burlington-street-office-case-study.webp",
  },
  {
    slug: "kingly-street-extract-fan-duct",
    sector: "Commercial",
    title: "60 Kingly Street London — Extract Fan & Duct Installation",
    summary:
      "BVS designed and installed a new extract fan and ductwork system at 60 Kingly Street, London — improving mechanical ventilation extraction performance for this commercial office property.",
    tags: ["Extract Fan", "Ductwork", "Commercial"],
    image: "/60-kingly-street-case-study.webp",
  },
  {
    slug: "newton-mearns-ahu-refurbishment-pipework",
    sector: "Commercial",
    title: "Newton Mearns — Shopping Centre AHU Refurbishment & Gas Pipework",
    summary:
      "BVS refurbished three weatherproof AHUs at Newton Mearns Shopping Centre and replaced a deteriorated mild-steel gas distribution network with 316-grade stainless steel pipework to IGEM UP 1 and 2.",
    tags: ["AHU Refurbishment", "Gas Pipework", "Commercial"],
    image: "/newton-mearns-case-study.webp",
  },
  {
    slug: "disney-headquarters-ventilation-survey",
    sector: "Commercial",
    title: "EU Disney Headquarters Hammersmith — Ventilation Survey",
    summary:
      "BVS conducted a full ventilation survey at the EU Disney Headquarters in Hammersmith, London — assessing AHU performance, air volumes, and system condition across the corporate campus.",
    tags: ["Ventilation Survey", "Commercial"],
    image: "/disney-headquarters-case-study.webp",
  },
  {
    slug: "procook-westfield-ahu-controller-upgrade",
    sector: "Commercial",
    title: "Procook Westfield — AHU Controller Upgrade",
    summary:
      "The AHU at Procook's Westfield retail store had a failed fan motor and obsolete controls. BVS replaced the motor, installed a Trend BMS controller, and restored full climate control to the shop floor.",
    tags: ["Controller Upgrade", "Retail", "Trend"],
    image: "/procook-westfield-case-study.webp",
  },
  {
    slug: "toca-football-o2-ahu-refurbishment",
    sector: "Commercial",
    title: "Toca Interactive Football O2 Arena — AHU Refurbishment",
    summary:
      "BVS carried out an AHU refurbishment at the Toca Interactive Football facility at the O2 Arena — maintaining performance in a high-footfall sports entertainment environment.",
    tags: ["AHU Refurbishment", "Commercial"],
    image: "/toca-intereactive-arena-case-study.webp",
  },
  {
    slug: "concorde-simulator-ventilation",
    sector: "Commercial",
    title: "Concorde Simulator — Ventilation Survey & Works",
    summary:
      "BVS carried out a ventilation survey and subsequent works on the Concorde simulator — a unique heritage environment requiring careful handling and specialist knowledge of the existing installation.",
    tags: ["Ventilation Survey", "Heritage"],
    image: "/concorde-project-case-study.webp",
  },
  {
    slug: "car-dealership-farnborough-coil-replacement",
    sector: "Commercial",
    title: "Car Dealership Farnborough — Heating Coil Replacement",
    summary:
      "A car dealership in Farnborough required a full heating coil replacement in its AHU plant room. BVS sized, manufactured, and installed a replacement unit with full pipework and insulation to BSS6644:2011.",
    tags: ["Coil Replacement", "Commercial"],
    image: "/car-dealership-case-study.webp",
  },
  {
    slug: "pharmaceutical-lab-coil-replacement",
    sector: "Manufacturing",
    title: "Pharmaceutical Manufacturer — AHU Coil Replacement",
    summary:
      "BVS designed, manufactured, and installed a replacement AHU coil at a pharmaceutical manufacturing facility — meeting the strict process environment requirements of the site.",
    tags: ["Coil Replacement", "Pharmaceutical"],
    image: "/pharmaceutical-lab-case-study.webp",
  },
  {
    slug: "red-distillery-ahu-refurbishment",
    sector: "Manufacturing",
    title: "Red English Group Distillery — AHU Refurbishment",
    summary:
      "BVS refurbished the AHU at Red English Group's distillery facility — restoring reliable ventilation performance in an active production environment.",
    tags: ["AHU Refurbishment", "Manufacturing"],
    image: "/red-english-group-distillery-case-study.webp",
  },
];

export default function CaseStudiesPage() {
  return (
    <div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#111418] py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="/aerial-buildings.webp"
            alt="Aerial buildings"
            fill
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoIAAUABUB8JZwAA3AA/u/9mXgQAA=="
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#111418]/70" />
        </div>

        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              Case Studies
            </p>

            <h1 className="font-display text-3xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
              Real Projects.<br />Specific Problems.<br />Documented Results.
            </h1>

            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/95">
              Every project here is a real job — a specific building, a specific constraint, a specific outcome.
            </p>
          </div>
        </Container>
      </section>

      <CaseStudiesGrid caseStudies={caseStudies} />

    </div>
  );
}
