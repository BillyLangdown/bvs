import Image from "next/image";
import { Container } from "@/components/site/Container";
import CaseStudiesGrid from "./CaseStudiesGrid";
import { allCaseStudies } from "@/lib/allCaseStudiesData";

export const metadata = {
  title: "Case Studies",
  description:
    "Real projects from BVS. AHU refurbishment, EC fan upgrades, coil replacement, and controller programmes across healthcare, hotels, education, and more.",
};

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

            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Real projects,<br />documented outcomes.
            </h1>

            <div className="mt-4 h-[3px] w-14 bg-[#297858]" />

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/95">
              Every project here is a real job, a specific building, a specific constraint, a specific outcome.
            </p>
          </div>
        </Container>
      </section>

      <CaseStudiesGrid caseStudies={allCaseStudies} />

    </div>
  );
}
