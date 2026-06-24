"use client";

import { useState, useCallback } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

function CareersFormInner() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = useState({ name: "", email: "", mobile: "", message: "" });
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");

  function setField(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  function handleFile(e) {
    const f = e.target.files?.[0];
    if (!f) { setFile(null); return; }
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(f.type)) {
      setFileError("Please upload a PDF or Word document (.pdf, .doc, .docx).");
      setFile(null);
      e.target.value = "";
      return;
    }
    if (f.size > 10 * 1024 * 1024) {
      setFileError("File must be under 10 MB.");
      setFile(null);
      e.target.value = "";
      return;
    }
    setFileError("");
    setFile(f);
  }

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!executeRecaptcha) return;
    setStatus("loading");
    setErrorMessage("");

    const recaptchaToken = await executeRecaptcha("careers_form");
    const formData = new FormData();
    formData.set("name", values.name);
    formData.set("email", values.email);
    formData.set("mobile", values.mobile);
    formData.set("message", values.message);
    formData.set("recaptchaToken", recaptchaToken);
    if (file) formData.set("cv", file);

    try {
      const res = await fetch("/api/careers", { method: "POST", body: formData });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || "Failed to send application.");
      setStatus("success");
      setValues({ name: "", email: "", mobile: "", message: "" });
      setFile(null);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err?.message || "Something went wrong. Please call us on 01256 518170.");
    }
  }, [executeRecaptcha, values, file]);

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 border-l-2 border-[#297858] bg-[#297858]/5 p-6">
        <div className="flex h-10 w-10 items-center justify-center bg-[#297858] text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <div>
          <p className="text-base font-bold text-slate-900">Application received</p>
          <p className="mt-1 text-sm text-slate-600">
            Thanks for getting in touch. We&apos;ll be in touch if there&apos;s a fit, current or future.
          </p>
        </div>
      </div>
    );
  }

  const inputClass =
    "h-11 w-full border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#297858] focus:ring-1 focus:ring-[#297858] transition-colors";
  const labelClass = "mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div>
        <label className={labelClass}>
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
        <label className={labelClass}>
          Email <span className="text-red-500">*</span>
        </label>
        <input
          className={inputClass}
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          value={values.email}
          onChange={(e) => setField("email", e.target.value)}
          required
        />
      </div>

      <div>
        <label className={labelClass}>
          Mobile <span className="text-red-500">*</span>
        </label>
        <input
          className={inputClass}
          type="tel"
          autoComplete="tel"
          placeholder="Your mobile number"
          value={values.mobile}
          onChange={(e) => setField("mobile", e.target.value)}
          required
        />
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea
          className="min-h-[100px] w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#297858] focus:ring-1 focus:ring-[#297858] transition-colors"
          placeholder="Tell us about your background and the kind of role you're looking for"
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
        />
      </div>

      <div>
        <label className={labelClass}>CV / Cover Letter (PDF or Word)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFile}
          className="block w-full text-sm text-slate-600 file:mr-4 file:border-0 file:bg-[#297858] file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:tracking-wide file:text-white hover:file:bg-[#1e5038] cursor-pointer"
        />
        {fileError && <p className="mt-1 text-xs text-red-600">{fileError}</p>}
        {file && !fileError && (
          <p className="mt-1 text-xs text-slate-500">{file.name}</p>
        )}
      </div>

      {errorMessage && status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="text-xs text-slate-400">We will aim to respond within 24 hours.</p>
        <button
          type="submit"
          disabled={status === "loading" || !values.name.trim() || !values.email.trim() || !values.mobile.trim()}
          className="inline-flex h-10 w-full items-center justify-center rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a] disabled:opacity-50 sm:w-auto"
        >
          {status === "loading" ? "Sending…" : "Send Application"}
        </button>
      </div>
    </form>
  );
}

export function CareersForm() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}>
      <CareersFormInner />
    </GoogleReCaptchaProvider>
  );
}
