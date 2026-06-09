"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";

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

export function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    county: "",
    message: "",
  });

  const canSubmit = useMemo(() => {
    return (
      values.name.trim() &&
      values.email.trim() &&
      values.message.trim() &&
      status !== "loading"
    );
  }, [values, status]);

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
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || "Message failed to send");

      setStatus("success");
      setMessage("Thanks - we'll get back to you shortly.");
      setValues({ name: "", email: "", company: "", county: "", message: "" });
    } catch (err) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          label="Name"
          name="name"
          value={values.name}
          onChange={(e) => setField("name", e.target.value)}
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => setField("email", e.target.value)}
          required
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Input
          label="Company (optional)"
          name="company"
          value={values.company}
          onChange={(e) => setField("company", e.target.value)}
        />

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-slate-500">
            Region{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <select
            value={values.county}
            onChange={(e) => setField("county", e.target.value)}
            className="h-10 w-full border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none focus:border-[#297858] focus:ring-1 focus:ring-[#297858] transition-colors cursor-pointer"
          >
            <option value="">Select region…</option>
            {COUNTY_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <Textarea
        label="Message"
        name="message"
        value={values.message}
        onChange={(e) => setField("message", e.target.value)}
        required
      />

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={!canSubmit}>
          {status === "loading" ? "Sending…" : "Send message"}
        </Button>
        {message ? (
          <p
            className={`text-sm ${
              status === "error" ? "text-red-600" : "text-zinc-600"
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
