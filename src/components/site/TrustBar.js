import { Container } from "./Container";

export function TrustBar() {
  return (
    <div className="border-b border-slate-100 bg-white py-3">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-6">
            <Accreditation icon={<GasSafeIcon />} color="bg-red-600" name="Gas Safe" sub="Registered" />
            <Accreditation icon={<CheckIcon />} color="bg-emerald-700" name="Constructionline" sub="Registered" />
            <Accreditation icon={<ShieldIcon />} color="bg-emerald-600" name="SafeContractor" sub="Approved" />
          </div>
          <a
            href="tel:01256518170"
            className="text-sm font-semibold text-slate-700 hover:text-emerald-700"
          >
            01256 518170
          </a>
        </div>
      </Container>
    </div>
  );
}

function Accreditation({ icon, color, name, sub }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`flex h-6 w-6 shrink-0 items-center justify-center ${color} text-white`}>
        {icon}
      </div>
      <div className="leading-none">
        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-700">{name}</p>
        <p className="mt-0.5 text-[10px] uppercase tracking-wide text-slate-400">{sub}</p>
      </div>
    </div>
  );
}

function GasSafeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8 6 6 9 6 12a6 6 0 0 0 12 0c0-1.5-.5-3-1.5-4.5C15.5 9 15 10 15 11a3 3 0 1 1-6 0c0-2 1.5-4 3-9Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2 3 7v6c0 5 4 9 9 9s9-4 9-9V7Z" />
    </svg>
  );
}
