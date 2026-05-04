"use client";

import { useMemo, useState } from "react";

export function ProductEnquiryForm({ productSlug, productName }) {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    enquiry: productName ? `I'd like to enquire about: ${productName}\n\n` : "",
  });

  function setField(field, val) {
    setValues((v) => ({ ...v, [field]: val }));
  }

  const canSubmit = useMemo(
    () =>
      values.name.trim() &&
      values.email.trim() &&
      values.enquiry.trim() &&
      status !== "loading",
    [values, status],
  );

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug,
          name: values.name,
          email: values.email,
          company: values.company,
          phone: values.phone,
          enquiry: values.enquiry,
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err?.message || "Something went wrong. Please try calling us.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-5 p-8 sm:p-10">
        <div className="flex h-12 w-12 items-center justify-center bg-[#297858] text-white">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <div>
          <p className="font-display text-lg font-extrabold uppercase text-slate-900">
            Enquiry received
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            We&apos;ll get back to you within one working day with pricing, lead
            times, and any technical guidance you need.
          </p>
        </div>
        <a
          href="tel:01256518170"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:underline"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          Need it sooner? Call 01256 518170
        </a>
      </div>
    );
  }

  const inputClass =
    "h-11 w-full border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#297858] focus:bg-white focus:ring-1 focus:ring-[#297858] transition-colors";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500">
            Name <span className="text-[#297858]">*</span>
          </label>
          <input
            className={inputClass}
            placeholder="Your name"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            required
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500">
            Email <span className="text-[#297858]">*</span>
          </label>
          <input
            className={inputClass}
            type="email"
            placeholder="your@email.com"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500">
            Phone{" "}
            <span className="text-[10px] font-normal normal-case text-slate-400">
              (optional)
            </span>
          </label>
          <input
            className={inputClass}
            type="tel"
            placeholder="Helps us respond faster"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500">
            Company
          </label>
          <input
            className={inputClass}
            placeholder="Organisation"
            value={values.company}
            onChange={(e) => setField("company", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500">
          Your enquiry <span className="text-[#297858]">*</span>
        </label>
        <textarea
          className="min-h-[130px] w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#297858] focus:bg-white focus:ring-1 focus:ring-[#297858] transition-colors"
          placeholder="Quantity needed, lead time requirements, or any technical questions…"
          value={values.enquiry}
          onChange={(e) => setField("enquiry", e.target.value)}
          required
        />
      </div>

      {errorMsg && status === "error" && (
        <p className="border-l-2 border-red-500 pl-3 text-sm text-red-600">
          {errorMsg}
        </p>
      )}

      <div className="flex items-center justify-between gap-4 pt-1">
        <p className="text-xs text-slate-400">Response within one working day.</p>
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex shrink-0 items-center gap-2 bg-[#297858] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#1d5c42] disabled:opacity-50"
        >
          {status === "loading" ? (
            "Sending…"
          ) : (
            <>
              Send Enquiry
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
