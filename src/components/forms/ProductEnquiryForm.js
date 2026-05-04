"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";

export function ProductEnquiryForm({ productSlug }) {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    enquiry: "",
  });

  const canSubmit = useMemo(() => {
    return (
      values.name.trim() &&
      values.email.trim() &&
      values.enquiry.trim() &&
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
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, productSlug }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || "Enquiry failed to send");

      setStatus("success");
      setMessage("Thanks - we’ll contact you soon.");
      setValues({ name: "", email: "", company: "", phone: "", enquiry: "" });
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
        <Input
          label="Phone (optional)"
          name="phone"
          value={values.phone}
          onChange={(e) => setField("phone", e.target.value)}
        />
      </div>

      <Textarea
        label="What can we help with?"
        name="enquiry"
        value={values.enquiry}
        onChange={(e) => setField("enquiry", e.target.value)}
        required
      />

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={!canSubmit}>
          {status === "loading" ? "Sending…" : "Send enquiry"}
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

