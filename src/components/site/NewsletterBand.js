import { Container } from "./Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function NewsletterBand() {
  return (
    <div className="bg-slate-50 py-14">
      <Container>
        <div className="bg-white border border-slate-200 shadow-[0_4px_32px_rgba(0,0,0,0.08)] px-8 py-10 lg:px-12 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:items-center">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
                Engineer Insights
              </p>
              <h2 className="mt-3 text-xl font-semibold leading-tight text-slate-900 sm:text-2xl">
                Technical guidance from real AHU projects
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Occasional updates covering refurbishment strategy, energy reduction,
                fan upgrades, controls, and HVAC project guidance.
              </p>
            </div>

            <div>
              <NewsletterForm source="footer" compact />
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}
