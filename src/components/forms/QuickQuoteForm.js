"use client";

import { useMemo, useState } from "react";

const COUNTY_OPTIONS = [
  "South",
  "South West",
  "Midlands",
  "South East",
  "North West",
  "North East",
  "London",
  "Wales",
  "Scotland",
];

const SERVICE_OPTIONS = [
  "EC Fan Upgrades",
  "Coil Replacement",
  "AHU Refurbishment",
  "AHU Manufacturing & Installation",
  "Controller Upgrades",
  "Validation Survey",
  "Ducting",
  "Troubleshooting",
  "Boiler Services",
  "Other",
];

export function QuickQuoteForm({ defaultService = "" }) {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    county: "",
    service: defaultService,
    message: "",
  });

  const canNext = values.name.trim() && values.email.trim() && values.mobile.trim();

  const canSubmit = useMemo(
    () =>
      values.name.trim() &&
      values.email.trim() &&
      values.mobile.trim() &&
      values.service &&
      status !== "loading",
    [values, status],
  );

  function setField(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          mobile: values.mobile,
          service: values.service,
          message: values.message,
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || "Message failed to send");
      setStatus("success");
      setValues({ name: "", email: "", mobile: "", county: "", service: defaultService, message: "" });
      setStep(1);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err?.message || "Something went wrong. Please call us on 01256 518170.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 border-l-2 border-[#297858] bg-[#297858]/5 p-6">
        <div className="flex h-10 w-10 items-center justify-center bg-[#297858] text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <div>
          <p className="text-base font-bold text-slate-900">Message received</p>
          <p className="mt-1 text-sm text-slate-600">
            We&apos;ll aim to get back to you within 24 hours. If it&apos;s urgent, call us on{" "}
            <a href="tel:01256518170" className="underline hover:text-[#297858]">01256 518170</a>.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 underline hover:text-slate-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "h-11 w-full border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none focus:border-[#297858] focus:ring-1 focus:ring-[#297858]";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">

      {/* Mobile step indicator */}
      <div className="flex items-center gap-3 sm:hidden">
        <div className="flex gap-1">
          <span className={`h-[3px] w-8 rounded-full transition-colors duration-200 ${step === 1 ? "bg-[#297858]" : "bg-slate-200"}`} />
          <span className={`h-[3px] w-8 rounded-full transition-colors duration-200 ${step === 2 ? "bg-[#297858]" : "bg-slate-200"}`} />
        </div>
        <span className="text-[11px] text-slate-400">
          {step === 1 ? "Your details" : "Your project"}
        </span>
      </div>

      {/* Step 1: Name, Email, Mobile — hidden on mobile step 2, always on desktop */}
      <div className={step === 2 ? "hidden sm:contents" : "contents"}>
        <input
          className={inputClass}
          placeholder="Your name"
          value={values.name}
          onChange={(e) => setField("name", e.target.value)}
          required
        />
        <input
          className={inputClass}
          placeholder="Email address"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => setField("email", e.target.value)}
          required
        />
        <input
          className={inputClass}
          placeholder="Mobile number"
          type="tel"
          autoComplete="tel"
          value={values.mobile}
          onChange={(e) => setField("mobile", e.target.value)}
          required
        />
        <select
          className={`${inputClass} cursor-pointer`}
          value={values.county}
          onChange={(e) => setField("county", e.target.value)}
        >
          <option value="">Region (optional)</option>
          {COUNTY_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      {/* Step 2: Service, Message — hidden on mobile step 1, always on desktop */}
      <div className={step === 1 ? "hidden sm:contents" : "contents"}>
        <select
          className={`${inputClass} cursor-pointer`}
          value={values.service}
          onChange={(e) => setField("service", e.target.value)}
          required
        >
          <option value="" disabled>What service are you interested in?</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>

        <textarea
          className="min-h-[100px] w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#297858] focus:ring-1 focus:ring-[#297858]"
          placeholder="Tell us about your project or requirements"
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
        />
      </div>

      {errorMessage && status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      {/* Mobile step 1: Next button */}
      {step === 1 && (
        <button
          type="button"
          onClick={() => setStep(2)}
          disabled={!canNext}
          className="sm:hidden w-full border border-slate-200 bg-slate-50 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700 transition-colors hover:bg-slate-100 disabled:opacity-40"
        >
          Next: Your Project →
        </button>
      )}

      {/* Submit row — hidden on mobile step 1 */}
      <div className={`flex-col gap-3 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-4${step === 1 ? " hidden" : " flex"}`}>
        <p className="text-xs text-slate-400">We will aim to respond within 24 hours.</p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="sm:hidden text-[11px] text-slate-400 underline underline-offset-2"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!canSubmit}
            className="flex-1 sm:flex-none inline-flex h-10 items-center justify-center rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a] disabled:opacity-50"
          >
            {status === "loading" ? "Sending…" : "Send"}
          </button>
        </div>
      </div>

    </form>
  );
}
