"use client";

import { useState } from "react";
import { Container } from "@/components/site/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>

        <ScrollReveal className="mb-10 max-w-2xl">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
            Common questions
          </p>
          <h2 className="font-display text-2xl font-extrabold uppercase text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-2 h-[3px] w-10 bg-[#297858]" />
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className={`border transition-all duration-300 ${
                  isOpen
                    ? "border-[#297858] bg-white shadow-sm"
                    : "border-slate-100 bg-surface-2"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <h3 className="text-sm font-bold text-slate-900">{faq.q}</h3>
                  <div
                    className={`shrink-0 text-[#297858] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-5">
                    <p className="text-sm leading-6 text-slate-500">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
