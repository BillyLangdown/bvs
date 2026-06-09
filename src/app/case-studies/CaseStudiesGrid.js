"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

const sectorColours = {
  Healthcare: "bg-blue-50 text-blue-700",
  Hotel: "bg-amber-50 text-amber-700",
  Commercial: "bg-slate-100 text-slate-700",
  Leisure: "bg-teal-50 text-teal-700",
  Manufacturing: "bg-orange-50 text-orange-700",
};

export default function CaseStudiesGrid({ caseStudies }) {
  const sectors = ["All", ...Array.from(new Set(caseStudies.map((c) => c.sector)))];
  const [activeSector, setActiveSector] = useState("All");

  const filtered = useMemo(() => {
    if (activeSector === "All") return caseStudies;
    return caseStudies.filter((c) => c.sector === activeSector);
  }, [activeSector, caseStudies]);

  return (
    <>
      {/* FILTER */}
      <section className="bg-[#f7f6f5] py-6">
        <Container>
          <div className="flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wide border transition ${
                  activeSector === sector
                    ? "bg-[#297858] text-white border-[#297858]"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* GRID */}
      <section className="bg-[#f7f6f5] pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((cs, i) => (
              <ScrollReveal key={cs.slug} delay={i * 40}>
                <div className="flex flex-col overflow-hidden border border-slate-200 bg-white transition hover:shadow-md">
                  <Link href={`/case-studies/${cs.slug}`} className="group">
                    <div className="relative h-44 bg-slate-100">
                      <Image
                        src={cs.image || "/case-studies/aerial-fallback.webp"}
                        alt={cs.title}
                        fill
                        unoptimized={!!cs.image}
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute left-3 top-3">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 ${
                            sectorColours[cs.sector] || "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {cs.sector}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 pb-4">
                      <h2 className="text-sm font-extrabold uppercase text-slate-900 group-hover:text-[#297858]">
                        {cs.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {cs.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cs.tags.map((t) => (
                          <span
                            key={t}
                            className="bg-slate-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 px-5 py-4">
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="text-xs font-semibold text-[#297858] hover:text-[#1d5c42] transition-colors"
                    >
                      Read case study →
                    </Link>
                    {cs.pdfUrl && (
                      <a
                        href={cs.pdfUrl}
                        download
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#297858] transition-colors"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                        Download PDF
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
