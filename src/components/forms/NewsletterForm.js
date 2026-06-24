"use client";

import { useState, useCallback } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

function NewsletterFormInner({ source = "newsletter_page", compact = false }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!executeRecaptcha) return;
    setStatus("loading");
    setMessage("");

    try {
      const recaptchaToken = await executeRecaptcha("newsletter_form");
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, recaptchaToken }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || "Signup failed");

      setStatus("success");
      setMessage("Thanks - you’re subscribed.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong.");
    }
  }, [executeRecaptcha, email, source]);

  return (
    <form
      onSubmit={onSubmit}
      className={compact ? "grid gap-3" : "grid gap-3 sm:grid-cols-[1fr_auto]"}
    >
      {compact ? (
        <>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <input
              className="h-11 w-full border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#297858] focus:ring-2 focus:ring-[#297858]/15"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={status === "loading" || !consent}
              className="inline-flex h-11 items-center justify-center rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </button>
          </div>

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[#297858]"
            />
            <span className="text-xs leading-relaxed text-slate-500">
              I agree to receive occasional email updates from BVS. You can unsubscribe at any time.{" "}
              <a href="/privacy-policy" className="underline hover:text-slate-700">
                Privacy Policy
              </a>
              .
            </span>
          </label>
        </>
      ) : (
        <>
          <Input
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="sm:pt-6">
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </Button>
          </div>
        </>
      )}

      {message ? (
        <p
          className={`text-sm ${
            compact
              ? status === "error"
                ? "text-red-600"
                : "text-[#297858]"
              : status === "error"
                ? "text-red-600"
                : "text-zinc-600"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

export function NewsletterForm({ source = "newsletter_page", compact = false }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}>
      <NewsletterFormInner source={source} compact={compact} />
    </GoogleReCaptchaProvider>
  );
}
