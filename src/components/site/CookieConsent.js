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

export function CookieBanner({ onAccept, onDecline }) {
  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-xs leading-5 text-slate-600">
          We use cookies to analyse site traffic via Google Analytics. No personal data is sold or shared with third parties.{" "}
          <Link href="/privacy-policy" className="underline hover:text-slate-900">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={onDecline}
            className="inline-flex h-8 items-center justify-center border border-slate-300 px-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
          >
            Decline
          </button>
          <button
            onClick={onAccept}
            className="inline-flex h-8 items-center justify-center bg-[#297858] px-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#1e5038]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
