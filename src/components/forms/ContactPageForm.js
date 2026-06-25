"use client";

import { useMemo, useState, useCallback } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FormPrivacyNote } from "./FormPrivacyNote";

const services = [
  "AHU Refurbishment",
  "EC Fan Upgrade",
  "Coil Replacement",
  "AHU Manufacturing",
  "AHU Installation",
  "Controller Solutions",
  "Validation Survey",
  "Ducting Repair",
  "Boiler & Heating",
  "Product",
  "General Enquiry",
];

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

function ContactPageFormInner() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    county: "",
    service: "",
    message: "",
  });

  function setField(field, val) {
    setValues((v) => ({ ...v, [field]: val }));
  }

  const canNext = values.name.trim() && values.email.trim();

  const canSubmit = useMemo(
    () =>
      values.name.trim() &&
      values.email.trim() &&
      values.message.trim() &&
      status !== "loading",
    [values, status],
  );

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!executeRecaptcha) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const recaptchaToken = await executeRecaptcha("contact_form");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          company: values.company,
          recaptchaToken,
          message: [
            values.service ? `[${values.service}]` : "",
            values.county ? `Region: ${values.county}` : "",
            "",
            values.message,
            values.phone ? `\nPhone: ${values.phone}` : "",
          ].filter((l, i) => l !== "" || i === 3).join("\n").trim(),
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong. Please try calling us.");
    }
  }, [executeRecaptcha, values]);

  if (status === "success") {
    return (
      <div className="flex flex-col gap-5 p-8 sm:p-10">
        <div className="flex h-12 w-12 items-center justify-center bg-[#297858] text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <div>
          <p className="text-lg font-extrabold text-slate-900">Message received</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            We will review your enquiry and respond within one working day.
          </p>
        </div>
        <a
          href="tel:01256518170"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:underline"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          Need it sooner? Call 01256 518170
        </a>
      </div>
    );
  }

  const inputClass =
    "h-11 w-full border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#297858] focus:ring-1 focus:ring-[#297858] transition-colors";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 p-6 sm:p-8">

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

      {/* Step 1: Name, Email, Phone, Company, County */}
      <div className={step === 2 ? "hidden sm:contents" : "contents"}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              className={inputClass}
              placeholder="Your full name"
              value={values.name}
              onChange={(e) => setField("name", e.target.value)}
              required
            />
          </div>
          <div>
            <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500">
              Email <span className="text-red-500">*</span>
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
              <span className="text-[10px] font-normal normal-case text-slate-400">(optional)</span>
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
              placeholder="Organisation name"
              value={values.company}
              onChange={(e) => setField("company", e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500">
            Region{" "}
            <span className="text-[10px] font-normal normal-case text-slate-400">(optional)</span>
          </label>
          <select
            className={`${inputClass} cursor-pointer`}
            value={values.county}
            onChange={(e) => setField("county", e.target.value)}
          >
            <option value="">Select your region…</option>
            {COUNTY_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Step 2: Service + Message */}
      <div className={step === 1 ? "hidden sm:contents" : "contents"}>
        <div>
          <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500">
            What can we help with?
          </label>
          <select
            className={`${inputClass} cursor-pointer`}
            value={values.service}
            onChange={(e) => setField("service", e.target.value)}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500">
            Tell us about your project <span className="text-red-500">*</span>
          </label>
          <textarea
            className="min-h-[120px] w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#297858] focus:ring-1 focus:ring-[#297858] transition-colors"
            placeholder="Describe the site, the issue, or what you're looking to achieve…"
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
            required
          />
        </div>
      </div>

      {errorMsg && status === "error" && (
        <p className="border-l-2 border-red-500 pl-3 text-sm text-red-600">{errorMsg}</p>
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

      {/* Submit row */}
      <div className={`flex-col gap-3 pt-1 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-4${step === 1 ? " hidden" : " flex"}`}>
        <div className="flex flex-col gap-1">
          <p className="text-xs text-slate-400">No obligation. Response within one working day.</p>
          <FormPrivacyNote />
        </div>
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
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a] disabled:opacity-50"
          >
            {status === "loading" ? (
              "Sending…"
            ) : (
              <>
                Send Enquiry
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>

    </form>
  );
}

export function ContactPageForm() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}>
      <ContactPageFormInner />
    </GoogleReCaptchaProvider>
  );
}
