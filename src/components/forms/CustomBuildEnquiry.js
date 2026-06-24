"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

/* ── Shared input styles ───────────────────────────────────────────────── */

const inputClass =
  "h-11 w-full border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#297858] focus:ring-1 focus:ring-[#297858] transition-colors";

const labelClass =
  "mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500";

/* ── Field wrappers ────────────────────────────────────────────────────── */

function Field({ label, required, optional, children }) {
  return (
    <div>
      <label className={labelClass}>
        {label}{" "}
        {required && <span className="text-[#297858]">*</span>}
        {optional && <span className="font-normal normal-case tracking-normal text-slate-400"> (optional)</span>}
      </label>
      {children}
    </div>
  );
}

function Input({ value, onChange, ...props }) {
  return <input className={inputClass} value={value} onChange={(e) => onChange(e.target.value)} {...props} />;
}

function Select({ value, onChange, options, placeholder }) {
  return (
    <select className={`${inputClass} cursor-pointer appearance-none`} value={value} onChange={(e) => onChange(e.target.value)}>
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  );
}

function Textarea({ value, onChange, placeholder }) {
  return (
    <textarea
      className="min-h-[100px] w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#297858] focus:ring-1 focus:ring-[#297858] transition-colors"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

function RadioGroup({ value, onChange, options }) {
  return (
    <div className="flex gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={`flex-1 border py-2.5 text-[11px] font-bold uppercase tracking-wide transition-colors ${
            value === o
              ? "border-[#297858] bg-[#297858] text-white"
              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function FileUpload({ value, onChange }) {
  const handleChange = useCallback(async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 8 * 1024 * 1024) { alert("Please choose an image under 8 MB."); return; }
    const reader = new FileReader();
    reader.onload = () => onChange({ name: file.name, data: reader.result });
    reader.readAsDataURL(file);
  }, [onChange]);

  return (
    <div>
      <label className="flex cursor-pointer items-center gap-4 border border-dashed border-slate-300 bg-white px-4 py-4 transition-colors hover:border-slate-400">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-slate-400" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">{value ? value.name : "Upload photo (optional)"}</p>
          <p className="text-[10px] text-slate-400">JPG, PNG or WEBP · max 8 MB</p>
        </div>
        <input type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={handleChange} />
      </label>
      {value && <button type="button" onClick={() => onChange(null)} className="mt-1 text-[10px] text-slate-400 underline hover:text-slate-600">Remove</button>}
    </div>
  );
}

/* ── Mobile step indicator ─────────────────────────────────────────────── */

function StepIndicator({ step, stepTwoLabel }) {
  return (
    <div className="flex items-center gap-3 sm:hidden">
      <div className="flex gap-1">
        <span className={`h-[3px] w-8 rounded-full transition-colors duration-200 ${step === 1 ? "bg-[#297858]" : "bg-slate-200"}`} />
        <span className={`h-[3px] w-8 rounded-full transition-colors duration-200 ${step === 2 ? "bg-[#297858]" : "bg-slate-200"}`} />
      </div>
      <span className="text-[11px] text-slate-400">
        {step === 1 ? "Your details" : stepTwoLabel}
      </span>
    </div>
  );
}

/* ── Contact fields (shared across all forms) ──────────────────────────── */

function ContactFields({ v, set }) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First Name" required><Input placeholder="First name" value={v.firstName} onChange={(val) => set("firstName", val)} required /></Field>
        <Field label="Last Name" required><Input placeholder="Last name" value={v.lastName} onChange={(val) => set("lastName", val)} required /></Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" required><Input type="email" placeholder="your@email.com" autoComplete="email" value={v.email} onChange={(val) => set("email", val)} required /></Field>
        <Field label="Phone" required><Input type="tel" placeholder="Your phone number" value={v.phone} onChange={(val) => set("phone", val)} required /></Field>
      </div>
    </>
  );
}

/* ── Submit row ────────────────────────────────────────────────────────── */

function SubmitRow({ canSubmit, status, errorMsg, step, onBack }) {
  return (
    <>
      {errorMsg && status === "error" && (
        <p className="border-l-2 border-red-500 pl-3 text-sm text-red-600">{errorMsg}</p>
      )}
      <div className={`flex-col gap-3 pt-1 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-4${step === 1 ? " hidden" : " flex"}`}>
        <p className="text-xs text-slate-400">Response within one working day.</p>
        <div className="flex items-center gap-4">
          <button type="button" onClick={onBack} className="sm:hidden text-[11px] text-slate-400 underline underline-offset-2">
            Back
          </button>
          <button type="submit" disabled={!canSubmit} className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xs bg-gradient-to-b from-[#22694a] to-[#1a5438] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_2px_6px_rgba(0,0,0,0.2)] hover:from-[#1e5038] hover:to-[#133f2a] disabled:opacity-50">
            {status === "loading" ? "Sending…" : (<>Send Enquiry <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></>)}
          </button>
        </div>
      </div>
    </>
  );
}

/* ── Mobile Next button ────────────────────────────────────────────────── */

function NextButton({ canNext, onNext, label = "Next: Specification →" }) {
  return (
    <button
      type="button"
      onClick={onNext}
      disabled={!canNext}
      className="sm:hidden w-full border border-slate-200 bg-slate-50 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700 transition-colors hover:bg-slate-100 disabled:opacity-40"
    >
      {label}
    </button>
  );
}

/* ── Success view ──────────────────────────────────────────────────────── */

function SuccessView() {
  return (
    <div className="flex flex-col gap-5 p-8">
      <div className="flex h-12 w-12 items-center justify-center bg-[#297858] text-white">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
      </div>
      <div>
        <p className="text-lg font-extrabold text-slate-900">Enquiry received</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">We&apos;ll get back to you within one working day with a specification and quote.</p>
      </div>
      <a href="tel:01256518170" className="inline-flex items-center gap-2 text-sm font-semibold text-[#297858] hover:underline">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.5 3h3l1 5-2 1.5a16 16 0 0 0 6.5 6.5L16.5 14l5 1v3c0 1.1-.9 2-2 2C10.8 20 4 13.2 4 4.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
        Need it sooner? Call 01256 518170
      </a>
    </div>
  );
}

/* ── Shared submit hook ────────────────────────────────────────────────── */

function useSubmit({ type, buildPayload, requiredFields }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const canSubmit = status !== "loading" && requiredFields.every((v) => String(v).trim());

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!executeRecaptcha) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const recaptchaToken = await executeRecaptcha("custom_build_form");
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productSlug: `custom-build-${type}`, recaptchaToken, ...buildPayload() }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong. Please try calling us.");
    }
  }, [executeRecaptcha, type, buildPayload]);

  return { status, errorMsg, canSubmit, onSubmit };
}

/* ══════════════════════════════════════════════════════════════════════════
   COIL FORM
══════════════════════════════════════════════════════════════════════════ */

function CoilForm() {
  const [v, setV] = useState({ firstName: "", lastName: "", email: "", phone: "", coilType: "", faceHeight: "", faceWidth: "", rows: "", finSpacing: "", connections: "", notes: "", image: null });
  const [step, setStep] = useState(1);
  const set = (k, val) => setV((p) => ({ ...p, [k]: val }));
  const canNext = v.firstName.trim() && v.lastName.trim() && v.email.trim() && v.phone.trim();

  const { status, errorMsg, canSubmit, onSubmit } = useSubmit({
    type: "coil",
    requiredFields: [v.firstName, v.lastName, v.email, v.phone, v.coilType],
    buildPayload: () => ({
      name: `${v.firstName} ${v.lastName}`,
      email: v.email,
      phone: v.phone,
      enquiry: [
        "Custom Build Enquiry: Heating/Cooling Coil",
        `Coil type: ${v.coilType}`,
        v.faceHeight && v.faceWidth ? `Face dimensions: ${v.faceHeight} mm (H) × ${v.faceWidth} mm (W)` : "",
        v.rows ? `Rows: ${v.rows}` : "",
        v.finSpacing ? `Fin spacing: ${v.finSpacing}` : "",
        v.connections ? `Connections: ${v.connections}` : "",
        v.notes ? `Notes: ${v.notes}` : "",
      ].filter(Boolean).join("\n"),
      image: v.image,
    }),
  });

  if (status === "success") return <SuccessView />;

  return (
    <form onSubmit={onSubmit} className="grid gap-4 p-6 sm:p-8">
      <StepIndicator step={step} stepTwoLabel="Specification" />

      <div className={step === 2 ? "hidden sm:contents" : "contents"}>
        <ContactFields v={v} set={set} />
      </div>

      <div className={step === 1 ? "hidden sm:contents" : "contents"}>
        <Field label="Coil type" required>
          <Select value={v.coilType} onChange={(val) => set("coilType", val)} placeholder="Select coil type…" options={["Hot water", "Chilled water", "DX refrigerant", "Steam", "Heat recovery"]} />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Face height (mm)" optional><Input type="number" min="1" placeholder="e.g. 600" value={v.faceHeight} onChange={(val) => set("faceHeight", val)} /></Field>
          <Field label="Face width (mm)" optional><Input type="number" min="1" placeholder="e.g. 400" value={v.faceWidth} onChange={(val) => set("faceWidth", val)} /></Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Number of rows" optional><Select value={v.rows} onChange={(val) => set("rows", val)} placeholder="Select…" options={["1","2","3","4","5","6","7","8"]} /></Field>
          <Field label="Fin spacing" optional><Select value={v.finSpacing} onChange={(val) => set("finSpacing", val)} placeholder="Select…" options={["2.0 mm","2.5 mm","3.0 mm","3.5 mm","4.0 mm"]} /></Field>
        </div>
        <Field label="Connection size / arrangement" optional><Input placeholder="e.g. 1½″ BSP, flow top left" value={v.connections} onChange={(val) => set("connections", val)} /></Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Additional notes" optional><Textarea value={v.notes} onChange={(val) => set("notes", val)} placeholder="Capacity, flow rate, working pressure…" /></Field>
          <Field label="Photo of existing coil" optional><FileUpload value={v.image} onChange={(val) => set("image", val)} /></Field>
        </div>
      </div>

      {step === 1 && <NextButton canNext={canNext} onNext={() => setStep(2)} />}
      <SubmitRow canSubmit={canSubmit} status={status} errorMsg={errorMsg} step={step} onBack={() => setStep(1)} />
    </form>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   BATTERY (ELECTRIC HEATER) FORM
══════════════════════════════════════════════════════════════════════════ */

function BatteryForm() {
  const [v, setV] = useState({ firstName: "", lastName: "", email: "", phone: "", phase: "", kw: "", voltage: "", faceHeight: "", faceWidth: "", ahuModel: "", controlType: "", notes: "", image: null });
  const [step, setStep] = useState(1);
  const set = (k, val) => setV((p) => ({ ...p, [k]: val }));
  const canNext = v.firstName.trim() && v.lastName.trim() && v.email.trim() && v.phone.trim();

  const { status, errorMsg, canSubmit, onSubmit } = useSubmit({
    type: "battery",
    requiredFields: [v.firstName, v.lastName, v.email, v.phone, v.phase],
    buildPayload: () => ({
      name: `${v.firstName} ${v.lastName}`,
      email: v.email,
      phone: v.phone,
      enquiry: [
        "Custom Build Enquiry: Electric Heater Battery",
        `Phase: ${v.phase}`,
        v.kw ? `kW rating: ${v.kw} kW` : "",
        v.voltage ? `Supply voltage: ${v.voltage}` : "",
        v.faceHeight && v.faceWidth ? `Face dimensions: ${v.faceHeight} mm (H) × ${v.faceWidth} mm (W)` : "",
        v.ahuModel ? `AHU / duct: ${v.ahuModel}` : "",
        v.controlType ? `Control type: ${v.controlType}` : "",
        v.notes ? `Notes: ${v.notes}` : "",
      ].filter(Boolean).join("\n"),
      image: v.image,
    }),
  });

  if (status === "success") return <SuccessView />;

  return (
    <form onSubmit={onSubmit} className="grid gap-4 p-6 sm:p-8">
      <StepIndicator step={step} stepTwoLabel="Specification" />

      <div className={step === 2 ? "hidden sm:contents" : "contents"}>
        <ContactFields v={v} set={set} />
      </div>

      <div className={step === 1 ? "hidden sm:contents" : "contents"}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phase" required><Select value={v.phase} onChange={(val) => set("phase", val)} placeholder="Select phase…" options={["Single phase","Three phase"]} /></Field>
          <Field label="Supply voltage" optional><Select value={v.voltage} onChange={(val) => set("voltage", val)} placeholder="Select…" options={["230 V","400 V","415 V"]} /></Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="kW rating required" optional><Input type="number" min="0.1" step="0.1" placeholder="e.g. 6" value={v.kw} onChange={(val) => set("kw", val)} /></Field>
          <Field label="Control type" optional><Select value={v.controlType} onChange={(val) => set("controlType", val)} placeholder="Select…" options={["On/Off","Staged (2 or 3 stage)","0–10 V proportional","Modbus"]} /></Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Face height (mm)" optional><Input type="number" min="1" placeholder="e.g. 500" value={v.faceHeight} onChange={(val) => set("faceHeight", val)} /></Field>
          <Field label="Face width (mm)" optional><Input type="number" min="1" placeholder="e.g. 300" value={v.faceWidth} onChange={(val) => set("faceWidth", val)} /></Field>
        </div>
        <Field label="AHU / duct make & model" optional><Input placeholder="e.g. Daikin AHU-32 or 600×400 mm duct" value={v.ahuModel} onChange={(val) => set("ahuModel", val)} /></Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Additional notes" optional><Textarea value={v.notes} onChange={(val) => set("notes", val)} placeholder="Installation constraints, safety requirements…" /></Field>
          <Field label="Photo of existing unit" optional><FileUpload value={v.image} onChange={(val) => set("image", val)} /></Field>
        </div>
      </div>

      {step === 1 && <NextButton canNext={canNext} onNext={() => setStep(2)} />}
      <SubmitRow canSubmit={canSubmit} status={status} errorMsg={errorMsg} step={step} onBack={() => setStep(1)} />
    </form>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   EC FAN / AXIAL FAN FORM
══════════════════════════════════════════════════════════════════════════ */

function FanForm({ fanType }) {
  const [v, setV] = useState({ firstName: "", lastName: "", email: "", phone: "", duty: "Supply", airflow: "", airflowUnit: "m³/h", staticPressure: "", fanDiameter: "", speedControl: "", supplyVoltage: "", notes: "", image: null });
  const [step, setStep] = useState(1);
  const set = (k, val) => setV((p) => ({ ...p, [k]: val }));
  const canNext = v.firstName.trim() && v.lastName.trim() && v.email.trim() && v.phone.trim();

  const { status, errorMsg, canSubmit, onSubmit } = useSubmit({
    type: fanType === "EC" ? "ec-fan" : "axial-fan",
    requiredFields: [v.firstName, v.lastName, v.email, v.phone],
    buildPayload: () => ({
      name: `${v.firstName} ${v.lastName}`,
      email: v.email,
      phone: v.phone,
      enquiry: [
        `Custom Build Enquiry: ${fanType} Fan`,
        `Duty: ${v.duty}`,
        v.airflow ? `Airflow: ${v.airflow} ${v.airflowUnit}` : "",
        v.staticPressure ? `Static pressure: ${v.staticPressure} Pa` : "",
        v.fanDiameter ? `Fan diameter: ${v.fanDiameter} mm` : "",
        v.speedControl ? `Speed control: ${v.speedControl}` : "",
        v.supplyVoltage ? `Supply voltage: ${v.supplyVoltage}` : "",
        v.notes ? `Notes: ${v.notes}` : "",
      ].filter(Boolean).join("\n"),
      image: v.image,
    }),
  });

  if (status === "success") return <SuccessView />;

  return (
    <form onSubmit={onSubmit} className="grid gap-4 p-6 sm:p-8">
      <StepIndicator step={step} stepTwoLabel="Specification" />

      <div className={step === 2 ? "hidden sm:contents" : "contents"}>
        <ContactFields v={v} set={set} />
      </div>

      <div className={step === 1 ? "hidden sm:contents" : "contents"}>
        <Field label="Duty" required>
          <RadioGroup value={v.duty} onChange={(val) => set("duty", val)} options={["Supply", "Extract"]} />
        </Field>
        <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
          <Field label="Airflow required" optional>
            <div className="flex gap-2">
              <input type="number" min="1" placeholder="e.g. 2500" className={`${inputClass} flex-1`} value={v.airflow} onChange={(e) => set("airflow", e.target.value)} />
              <select className="h-11 border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none focus:border-[#297858] focus:ring-1 focus:ring-[#297858] transition-colors cursor-pointer" value={v.airflowUnit} onChange={(e) => set("airflowUnit", e.target.value)}>
                <option>m³/h</option><option>l/s</option><option>CFM</option>
              </select>
            </div>
          </Field>
          <Field label="Static pressure (Pa)" optional><Input type="number" min="0" placeholder="e.g. 150" value={v.staticPressure} onChange={(val) => set("staticPressure", val)} /></Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Fan diameter (mm)" optional><Input type="number" min="1" placeholder="e.g. 630" value={v.fanDiameter} onChange={(val) => set("fanDiameter", val)} /></Field>
          <Field label="Speed control" optional><Select value={v.speedControl} onChange={(val) => set("speedControl", val)} placeholder="Select…" options={["0–10 V","Modbus RTU","PWM","On/Off only"]} /></Field>
        </div>
        <Field label="Supply voltage" optional>
          <Select value={v.supplyVoltage} onChange={(val) => set("supplyVoltage", val)} placeholder="Select…" options={["Single phase 230 V","Three phase 400 V"]} />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Additional notes" optional><Textarea value={v.notes} onChange={(val) => set("notes", val)} placeholder="AHU make/model, blade angle, site constraints…" /></Field>
          <Field label="Photo of existing fan" optional><FileUpload value={v.image} onChange={(val) => set("image", val)} /></Field>
        </div>
      </div>

      {step === 1 && <NextButton canNext={canNext} onNext={() => setStep(2)} />}
      <SubmitRow canSubmit={canSubmit} status={status} errorMsg={errorMsg} step={step} onBack={() => setStep(1)} />
    </form>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   MAIN EXPORT — type selector + active form
══════════════════════════════════════════════════════════════════════════ */

const TYPES = [
  { id: "ec-fan",    label: "EC Fan" },
  { id: "axial-fan", label: "Axial Fan" },
  { id: "coil",      label: "Heating / Cooling Coil" },
  { id: "battery",   label: "Electric Heater Battery" },
];

function CustomBuildEnquiryInner({ typeImages = {} }) {
  const [active, setActive] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (active && formRef.current && window.innerWidth < 640) {
      setTimeout(() => {
        const rect = formRef.current.getBoundingClientRect();
        window.scrollBy({ top: rect.top - 80, behavior: "smooth" });
      }, 50);
    }
  }, [active]);

  return (
    <div>
      {/* Type selector */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {TYPES.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(active === t.id ? null : t.id)}
            className={`overflow-hidden border text-left transition-colors ${
              active === t.id
                ? "border-[#297858]"
                : "border-white/15 hover:border-white/30"
            }`}
          >
            <div className={`relative h-28 ${active === t.id ? "bg-[#1d5c42]" : "bg-white/5"}`}>
              {typeImages[t.id] ? (
                <Image src={typeImages[t.id]} alt={t.label} fill unoptimized className="object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${active === t.id ? "text-white/40" : "text-white/20"}`}>
                    {t.label}
                  </span>
                </div>
              )}
            </div>
            <div className={`px-4 py-3 ${active === t.id ? "bg-[#297858]" : "bg-white/5"}`}>
              <p className={`text-[11px] font-bold uppercase tracking-wide leading-snug ${active === t.id ? "text-white" : "text-white/70"}`}>
                {t.label}
              </p>
              <p className={`mt-0.5 text-[10px] ${active === t.id ? "text-white/70" : "text-white/40"}`}>
                Custom build enquiry
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Active form */}
      {active && (
        <div ref={formRef} className="mt-6 overflow-hidden border border-white/10 bg-white">
          <div className="border-b border-slate-100 px-6 py-4 sm:px-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#297858]">
              Custom Build Enquiry
            </p>
            <p className="mt-0.5 text-sm font-bold text-slate-900">
              {TYPES.find((t) => t.id === active)?.label}
            </p>
          </div>
          {active === "coil"      && <CoilForm />}
          {active === "battery"   && <BatteryForm />}
          {active === "ec-fan"    && <FanForm fanType="EC" />}
          {active === "axial-fan" && <FanForm fanType="Axial" />}
        </div>
      )}
    </div>
  );
}

export function CustomBuildEnquiry({ typeImages = {} }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}>
      <CustomBuildEnquiryInner typeImages={typeImages} />
    </GoogleReCaptchaProvider>
  );
}
