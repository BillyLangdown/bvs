"use client";

import { useState, useCallback } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FormPrivacyNote } from "./FormPrivacyNote";

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

const inputClass =
  "h-11 w-full border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#297858] focus:ring-1 focus:ring-[#297858] transition-colors";

const labelClass =
  "mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500";

function StepIndicator({ step, label }) {
  return (
    <div className="flex items-center gap-3 sm:hidden">
      <div className="flex gap-1">
        <span className={`h-[3px] w-8 rounded-full transition-colors duration-200 ${step === 1 ? "bg-[#297858]" : "bg-slate-200"}`} />
        <span className={`h-[3px] w-8 rounded-full transition-colors duration-200 ${step === 2 ? "bg-[#297858]" : "bg-slate-200"}`} />
      </div>
      <span className="text-[11px] text-slate-400">{label}</span>
    </div>
  );
}

function ProductEnquiryFormInner({ productSlug, productName }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [county, setCounty] = useState("");
  const [product, setProduct] = useState(productName || "");
  const [message, setMessage] = useState(
    productName ? `I'd like to enquire about: ${productName}\n\n` : "",
  );
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [step, setStep] = useState(1);

  const canNext = firstName.trim() && lastName.trim() && email.trim() && phone.trim();

  const canSubmit =
    firstName.trim() &&
    lastName.trim() &&
    email.trim() &&
    phone.trim() &&
    message.trim() &&
    status !== "loading";

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!executeRecaptcha) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const recaptchaToken = await executeRecaptcha("product_enquiry_form");
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productSlug,
          recaptchaToken,
          name: `${firstName.trim()} ${lastName.trim()}`,
          email: email.trim(),
          phone: phone.trim(),
          enquiry: [
            `Product: ${product}`,
            county ? `Region: ${county}` : "",
            "",
            message.trim(),
          ].filter((l, i) => l !== "" || i === 2).join("\n"),
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong. Please try calling us.");
    }
  }, [executeRecaptcha, productSlug, firstName, lastName, email, phone, county, product, message]);

  if (status === "success") {
    return (
      <div className="flex flex-col gap-5 p-8">
        <div className="flex h-12 w-12 items-center justify-center bg-[#297858] text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <div>
          <p className="text-lg font-extrabold text-slate-900">Enquiry received</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            We&apos;ll get back to you within one working day with pricing, lead times, and any technical guidance you need.
          </p>
        </div>
        <a href="tel:01256518170" className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:underline">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          Need it sooner? Call 01256 518170
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 p-6 sm:p-8">

      <StepIndicator step={step} label={step === 1 ? "Your details" : "Your enquiry"} />

      {/* Step 1: contact details */}
      <div className={step === 2 ? "hidden sm:contents" : "contents"}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>First Name <span className="text-red-500">*</span></label>
            <input className={inputClass} placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div>
            <label className={labelClass}>Last Name <span className="text-red-500">*</span></label>
            <input className={inputClass} placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Email <span className="text-red-500">*</span></label>
            <input className={inputClass} type="email" placeholder="your@email.com" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className={labelClass}>Phone <span className="text-red-500">*</span></label>
            <input className={inputClass} type="tel" placeholder="Your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
        </div>
        <div>
          <label className={labelClass}>
            Region <span className="font-normal normal-case tracking-normal text-slate-400">(optional)</span>
          </label>
          <select
            className={`${inputClass} cursor-pointer`}
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          >
            <option value="">Select your region…</option>
            {COUNTY_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Step 2: product + message */}
      <div className={step === 1 ? "hidden sm:contents" : "contents"}>
        <div>
          <label className={labelClass}>Product</label>
          <input className={inputClass} value={product} onChange={(e) => setProduct(e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Brief Requirements / Message <span className="text-red-500">*</span></label>
          <textarea
            className="min-h-[120px] w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#297858] focus:ring-1 focus:ring-[#297858] transition-colors"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what you need…"
            required
          />
        </div>
      </div>

      {errorMsg && status === "error" && (
        <p className="border-l-2 border-red-500 pl-3 text-sm text-red-600">{errorMsg}</p>
      )}

      {/* Mobile step 1: Next */}
      {step === 1 && (
        <button
          type="button"
          onClick={() => setStep(2)}
          disabled={!canNext}
          className="sm:hidden w-full border border-slate-200 bg-slate-50 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700 transition-colors hover:bg-slate-100 disabled:opacity-40"
        >
          Next: Your Enquiry →
        </button>
      )}

      {/* Submit row — hidden on mobile step 1 */}
      <div className={`flex-col gap-3 pt-1 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-4${step === 1 ? " hidden" : " flex"}`}>
        <div className="flex flex-col gap-1">
          <p className="text-xs text-slate-400">Response within one working day.</p>
          <FormPrivacyNote />
        </div>
        <div className="flex items-center gap-4">
          <button type="button" onClick={() => setStep(1)} className="sm:hidden text-[11px] text-slate-400 underline underline-offset-2">
            Back
          </button>
          <button
            type="submit"
            disabled={!canSubmit}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a] disabled:opacity-50"
          >
            {status === "loading" ? "Sending…" : (
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

export function ProductEnquiryForm({ productSlug, productName }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}>
      <ProductEnquiryFormInner productSlug={productSlug} productName={productName} />
    </GoogleReCaptchaProvider>
  );
}
