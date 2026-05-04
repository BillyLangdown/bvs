"use client";

import { useMemo, useState } from "react";

export function QuickQuoteForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const canSubmit = useMemo(
    () => values.name.trim() && values.email.trim() && values.message.trim() && status !== "loading",
    [values, status],
  );

  function setField(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: values.name, email: values.email, company: "", message: values.message }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || "Message failed to send");
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong. Please call us on 01256 518170.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 border-l-2 border-emerald-600 bg-emerald-50 p-6">
        <div className="flex h-10 w-10 items-center justify-center bg-emerald-600 text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <div>
          <p className="font-display text-base font-bold uppercase text-slate-900">Message received</p>
          <p className="mt-1 text-sm text-slate-600">
            We&apos;ll get back to you within one working day. If it&apos;s urgent, call us on{" "}
            <a href="tel:01256518170" className="underline hover:text-emerald-700">01256 518170</a>.
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
        className="h-11 w-full border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
        placeholder="Your name"
        value={values.name}
        onChange={(e) => setField("name", e.target.value)}
        required
      />
      <input
        className="h-11 w-full border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
        placeholder="Email address"
        type="email"
        autoComplete="email"
        value={values.email}
        onChange={(e) => setField("email", e.target.value)}
        required
      />
      <textarea
        className="min-h-32 w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
        placeholder="Describe your project or question"
        value={values.message}
        onChange={(e) => setField("message", e.target.value)}
        required
      />

      {message && status === "error" && (
        <p className="text-sm text-red-600">{message}</p>
      )}

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-slate-400">We respond within one working day.</p>
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex h-10 shrink-0 items-center justify-center bg-emerald-700 px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-emerald-600 disabled:opacity-50"
        >
          {status === "loading" ? "Sending…" : "Send"}
        </button>
      </div>
    </form>
  );
}
