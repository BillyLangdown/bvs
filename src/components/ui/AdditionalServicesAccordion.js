import Link from "next/link";

const icons = [
  // Clipboard check - Validation Surveys
  <><path key="v1" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect key="v2" x="9" y="3" width="6" height="4" rx="1" /><path key="v3" d="m9 12 2 2 4-4" /></>,
  // Git branch - Ducting Repair
  <><line key="d1" x1="6" y1="3" x2="6" y2="15" /><circle key="d2" cx="18" cy="6" r="3" /><circle key="d3" cx="6" cy="18" r="3" /><path key="d4" d="M18 9a9 9 0 0 1-9 9" /></>,
  // Search - Troubleshooting
  <><circle key="t1" cx="11" cy="11" r="8" /><path key="t2" d="m21 21-4.35-4.35" /></>,
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
  return (
    <div className="space-y-3">
      {services.map((s, i) => (
        <Link
          key={s.title}
          href={s.href}
          className="group flex w-full items-center gap-4 border border-black/10 bg-white p-4 transition-colors hover:border-[#297858]/40 hover:bg-slate-50"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/10 bg-[#f5f3ef]">
            <ServiceIcon index={i} />
          </div>

          <div className="flex-1">
            <p className="text-sm font-bold uppercase text-slate-900">{s.title}</p>
            <p className="text-xs text-slate-500">{s.desc}</p>
          </div>

          <span className="shrink-0 text-[#297858] transition-transform duration-200 group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </Link>
      ))}
    </div>
  );
}
