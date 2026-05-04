"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function NewsletterForm({ source = "newsletter_page", compact = false }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
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
  }

  return (
    <form
      onSubmit={onSubmit}
      className={compact ? "grid gap-3" : "grid gap-3 sm:grid-cols-[1fr_auto]"}
    >
      {compact ? (
        <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <input
            className="h-11 w-full rounded-md border border-white/25 bg-emerald-950/20 px-3 text-sm text-white placeholder:text-white/60 outline-none focus:border-white/40"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex h-11 items-center justify-center border border-white/25 bg-white/0 px-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white hover:border-white/40 disabled:opacity-50"
          >
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </button>
        </div>
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
                ? "text-red-200"
                : "text-white/80"
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

