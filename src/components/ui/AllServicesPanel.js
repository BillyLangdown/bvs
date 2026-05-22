'use client';
import { useState } from 'react';
import { flushSync } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

function ArrowIcon({ className = '' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={className} aria-hidden="true">
      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="14" height="14" viewBox="0 0 24 24" fill="none"
      className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AllServicesPanel({ services, additionalServices }) {
  const [open, setOpen] = useState(false);

  const totalCount = services.length + additionalServices.length;

  function handleToggle() {
    if (!open) {
      const y = window.scrollY;
      flushSync(() => setOpen(true));
      window.scrollTo(0, y);
    } else {
      setOpen(false);
    }
  }

  return (
    <div className="mt-10">
      {/* TOGGLE BUTTON */}
      <button
        onClick={handleToggle}
        className="group flex w-full items-center justify-center gap-2.5 bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-600 transition-colors hover:border-[#297858]/40 hover:bg-slate-50 hover:text-slate-900"
        aria-expanded={open}
      >
        {open ? 'Hide all services' : `View all services`}
        <span className=" px-2 py-0.5 text-[10px] font-extrabold text-[#297858]">
          {totalCount}
        </span>
        <ChevronIcon open={open} />
      </button>

      {/* PANEL */}
      {open && (
        <div className="mt-10 space-y-12">

          {/* Full service capability */}
          <div>
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
              Full service capability
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group flex h-full flex-col overflow-hidden border border-black/5 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={s.photo}
                      alt={s.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-[15px] font-extrabold leading-tight text-white">
                        {s.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="mt-2 text-[13px] font-semibold leading-5 text-slate-800">
                      {s.outcome}
                    </p>
                    <div className="mt-3 space-y-2">
                      {s.signs.slice(0, 2).map((sign) => (
                        <div key={sign} className="flex items-start gap-2 text-[12.5px] leading-5 text-slate-600">
                          <div className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#297858]" />
                          <span>{sign}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-6">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] transition group-hover:gap-3">
                        Learn more <ArrowIcon />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Additional services */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
              Additional services
            </p>
            <div className="space-y-3">
              {additionalServices.map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group flex w-full items-center gap-4 border border-black/10 bg-white p-4 transition-colors hover:border-[#297858]/40 hover:bg-slate-50"
                >
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900">{s.title}</p>
                    <p className="mt-0.5 text-xs leading-5 text-slate-500">{s.desc}</p>
                  </div>
                  <span className="shrink-0 text-[#297858] transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
