"use client";

import { useState } from "react";

const inputClass =
  "h-11 w-full border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#297858] focus:ring-1 focus:ring-[#297858] transition-colors";

const labelClass =
  "mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500";

export function ProductEnquiryForm({ productSlug, productName }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState(productName || "");
  const [message, setMessage] = useState(
    productName ? `I'd like to enquire about: ${productName}\n\n` : "",
  );
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const canSubmit =
    firstName.trim() &&
    lastName.trim() &&
    email.trim() &&
    phone.trim() &&
    message.trim() &&
    status !== "loading";

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
          name: `${firstName.trim()} ${lastName.trim()}`,
          email: email.trim(),
          phone: phone.trim(),
          enquiry: `Product: ${product}\n\n${message.trim()}`,
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong. Please try calling us.");
    }
  }

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
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>First Name <span className="text-[#297858]">*</span></label>
          <input className={inputClass} placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label className={labelClass}>Last Name <span className="text-[#297858]">*</span></label>
          <input className={inputClass} placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Email <span className="text-[#297858]">*</span></label>
          <input className={inputClass} type="email" placeholder="your@email.com" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className={labelClass}>Phone <span className="text-[#297858]">*</span></label>
          <input className={inputClass} type="tel" placeholder="Your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
      </div>

      <div>
        <label className={labelClass}>Product</label>
        <input className={inputClass} value={product} onChange={(e) => setProduct(e.target.value)} />
      </div>

      <div>
        <label className={labelClass}>Brief Requirements / Message <span className="text-[#297858]">*</span></label>
        <textarea
          className="min-h-[120px] w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#297858] focus:ring-1 focus:ring-[#297858] transition-colors"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you need…"
          required
        />
      </div>

      {errorMsg && status === "error" && (
        <p className="border-l-2 border-red-500 pl-3 text-sm text-red-600">{errorMsg}</p>
      )}

      <div className="flex items-center justify-between gap-4 pt-1">
        <p className="text-xs text-slate-400">Response within one working day.</p>
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex shrink-0 items-center gap-2 bg-[#297858] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#1d5c42] disabled:opacity-50"
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
    </form>
  );
}
