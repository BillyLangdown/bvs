"use client";

import { useMemo, useState } from "react";

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
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    service: defaultService,
    message: "",
  });

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
      setValues({ name: "", email: "", mobile: "", service: defaultService, message: "" });
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

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input
        className="h-11 w-full border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none focus:border-[#297858] focus:ring-1 focus:ring-[#297858]"
        placeholder="Your name"
        value={values.name}
        onChange={(e) => setField("name", e.target.value)}
        required
      />
      <input
        className="h-11 w-full border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none focus:border-[#297858] focus:ring-1 focus:ring-[#297858]"
        placeholder="Email address"
        type="email"
        autoComplete="email"
        value={values.email}
        onChange={(e) => setField("email", e.target.value)}
        required
      />
      <input
        className="h-11 w-full border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none focus:border-[#297858] focus:ring-1 focus:ring-[#297858]"
        placeholder="Mobile number"
        type="tel"
        autoComplete="tel"
        value={values.mobile}
        onChange={(e) => setField("mobile", e.target.value)}
        required
      />
      <select
        className="h-11 w-full border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none focus:border-[#297858] focus:ring-1 focus:ring-[#297858]"
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
        placeholder="Tell us about your project or requirements (optional)"
        value={values.message}
        onChange={(e) => setField("message", e.target.value)}
      />

      {errorMessage && status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-slate-400">We will aim to respond within 24 hours.</p>
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex h-10 shrink-0 items-center justify-center bg-[#297858] px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#1d5c42] disabled:opacity-50"
        >
          {status === "loading" ? "Sending…" : "Send"}
        </button>
      </div>
    </form>
  );
}
