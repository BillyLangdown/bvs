import { Container } from "./Container";

const clients = [
  "NHS",
  "Marriott",
  "Disney",
  "Warner Bros",
  "Alpine F1",
  "Queen Mary University",
  "Moorfields Eye Hospital",
  "Brooklands Museum",
  "Travelodge",
  "Friary Meadow",
];

export function ClientBar({ heading = "Trusted by leading organisations across the UK" }) {
  return (
    <section className="border-b border-slate-100 bg-surface-2 py-8">
      <Container>
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
          {heading}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {clients.map((c) => (
            <span
              key={c}
              className="border border-slate-200 bg-white px-4 py-2 text-[11px] font-bold tracking-[0.08em] text-slate-600"
            >
              {c}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
