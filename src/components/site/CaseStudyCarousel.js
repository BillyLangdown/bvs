"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function CaseStudyCarousel({ studies, intro }) {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const total = studies.length;

  const goTo = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index];
    if (slide) track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    let closest = 0;
    let closestDist = Infinity;
    for (let i = 0; i < track.children.length; i++) {
      const child = track.children[i];
      const dist = Math.abs(child.offsetLeft - track.scrollLeft);
      if (dist < closestDist) { closestDist = dist; closest = i; }
    }
    setCurrent(closest);
  };

  if (!total) return null;

  return (
    <div>
      {intro && (
        <p className="mb-8 max-w-2xl text-sm leading-7 text-white/50">{intro}</p>
      )}

      {/* Track: w-full prevents the container itself from overflowing */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex w-full overflow-x-auto [scrollbar-width:none] [scroll-snap-type:x_mandatory] [&::-webkit-scrollbar]:hidden"
      >
        {studies.map((study) => (
          /* overflow-hidden + w-full clips any overflowing child content */
          <div
            key={study.slug}
            className="w-full flex-none overflow-hidden [scroll-snap-align:start]"
          >

            {/* ── MOBILE: image top, text below ───────────────── */}
            <div className="sm:hidden">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.headline}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="pt-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                  {study.sector}{study.location ? ` · ${study.location}` : ""}
                </p>
                <h3 className="mt-2 text-base font-extrabold leading-tight text-white">
                  {study.headline}
                </h3>
                <div className="mt-2.5 h-[3px] w-7 bg-[#297858]" />
                {study.relevantIf?.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {study.relevantIf.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12px] leading-[1.4] text-white/60">
                        <span className="mt-[4px] h-1.5 w-1.5 flex-shrink-0 bg-[#297858]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-4">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-1.5 bg-[#297858] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                  >
                    Read case study →
                  </Link>
                </div>
              </div>
            </div>

            {/* ── SM+: text left, image right ─────────────────── */}
            <div className="hidden sm:flex sm:items-stretch">
              <div className="flex flex-1 flex-col justify-center pr-10 lg:pr-14">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">
                  {study.sector}{study.location ? ` · ${study.location}` : ""}
                </p>
                <h3 className="mt-2.5 text-xl font-extrabold leading-tight text-white lg:text-2xl">
                  {study.headline}
                </h3>
                <div className="mt-3 h-[3px] w-8 bg-[#297858]" />
                {study.relevantIf?.length > 0 && (
                  <div className="mt-4">
                    <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                      Relevant if your project involves:
                    </p>
                    <ul className="space-y-2">
                      {study.relevantIf.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] leading-5 text-white/65">
                          <span className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 bg-[#297858]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="mt-4 text-[12px] leading-5 text-white/40">{study.summary}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 bg-[#297858] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d5c42]"
                  >
                    Read case study →
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    View all projects
                  </Link>
                </div>
              </div>

              <div className="relative w-[42%] flex-shrink-0 self-stretch overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.headline}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

          </div>
        ))}
      </div>

      {total > 1 && (
        <div className="mt-5 flex items-center gap-3 sm:mt-6 sm:gap-4">
          <button
            onClick={() => goTo(Math.max(0, current - 1))}
            disabled={current === 0}
            aria-label="Previous"
            className="flex h-8 w-8 items-center justify-center border border-white/15 text-white/50 transition-colors disabled:opacity-20 enabled:hover:border-white/30 enabled:hover:text-white sm:h-9 sm:w-9"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-1.5">
            {studies.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-5 bg-[#297858]" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(Math.min(total - 1, current + 1))}
            disabled={current === total - 1}
            aria-label="Next"
            className="flex h-8 w-8 items-center justify-center border border-white/15 text-white/50 transition-colors disabled:opacity-20 enabled:hover:border-white/30 enabled:hover:text-white sm:h-9 sm:w-9"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <span className="ml-auto text-[10px] font-semibold tabular-nums text-white/25 sm:text-[11px]">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}
