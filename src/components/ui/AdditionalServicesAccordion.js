"use client";

import { useState } from "react";
import Link from "next/link";

const icons = [
  // Clipboard check - Validation Surveys
  <><path key="v1" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect key="v2" x="9" y="3" width="6" height="4" rx="1" /><path key="v3" d="m9 12 2 2 4-4" /></>,
  // Git branch - Ducting Repair
  <><line key="d1" x1="6" y1="3" x2="6" y2="15" /><circle key="d2" cx="18" cy="6" r="3" /><circle key="d3" cx="6" cy="18" r="3" /><path key="d4" d="M18 9a9 9 0 0 1-9 9" /></>,
  // Search - Troubleshooting
  <><circle key="t1" cx="11" cy="11" r="8" /><path key="t2" d="m21 21-4.35-4.35" /></>,
  // Flame - Commercial Boiler Services
  <path key="b" d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />,
  // Pipe - Commercial Pipework
  <><path key="p1" d="M3 9h18v6H3z" /><path key="p2" d="M9 9V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" /><path key="p3" d="M9 15v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4" /></>,
];

function ServiceIcon({ index }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[index]}
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

export function AdditionalServicesAccordion({ services }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-3">
      {services.map((s, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={s.title}
            className="border border-black/10 bg-white transition hover:border-black/20"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full cursor-pointer items-center gap-4 p-4 text-left"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/10 bg-[#f5f3ef]">
                <ServiceIcon index={i} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold uppercase text-slate-900">{s.title}</p>
                <p className="text-xs text-slate-500">{s.desc}</p>
              </div>

              <div
                className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-black/10 px-4 py-4">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                        Overview
                      </p>
                      <p className="mt-2 text-xs leading-6 text-slate-600">{s.desc}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                        When it applies
                      </p>
                      <p className="mt-2 text-xs leading-6 text-slate-600">
                        Used in system upgrades, compliance requirements, and performance optimisation where supporting works are required alongside core AHU changes.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 border-t border-black/10 pt-4">
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#297858] hover:text-[#1d5c42]"
                    >
                      Learn more <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
