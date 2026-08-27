"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "bvs_cookie_consent";

export function useCookieConsent() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    } else {
      setConsent("pending");
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setConsent("declined");
  }

  return { consent, accept, decline };
}

const REASONS = [
  "Shows us which pages and services people actually find useful, so we know what to improve",
  "Only anonymous, aggregated usage data. No personal details, never sold or shared with third parties",
  "Helps us keep this site fast, relevant, and genuinely useful for visitors like you",
];

export function CookieBanner({ onAccept, onDecline }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111418]/25 p-4"
    >
      <div className="w-full max-w-md border border-slate-200 bg-white p-6 shadow-2xl sm:p-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#297858]">Before you continue</p>
        <div className="mt-2 h-[3px] w-10 bg-[#297858]" />

        <h2 className="mt-4 text-xl font-extrabold text-slate-900 sm:text-2xl">
          We use cookies to make this site better
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          We use a small number of cookies to analyse site traffic via Google Analytics. No personal data is sold or
          shared with third parties, and nothing is tracked unless you accept.
        </p>

        <ul className="mt-5 space-y-2.5">
          {REASONS.map((reason) => (
            <li key={reason} className="flex items-start gap-2.5 text-[13px] leading-5 text-slate-600">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-[#297858]" />
              {reason}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button
            onClick={onDecline}
            className="inline-flex h-11 flex-1 items-center justify-center border border-slate-300 px-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
          >
            Decline
          </button>
          <button
            onClick={onAccept}
            className="inline-flex h-11 flex-1 items-center justify-center bg-[#297858] px-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#1e5038]"
          >
            Accept
          </button>
        </div>

        <p className="mt-4 text-center text-[11px] text-slate-400">
          <Link
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
            className="underline hover:text-slate-600"
          >
            Read our Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
