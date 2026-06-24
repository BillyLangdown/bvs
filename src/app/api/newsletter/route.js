import { Resend } from "resend";
import { verifyRecaptcha } from "@/lib/recaptcha";

const FROM = process.env.EMAIL_FROM || "BVS Website <forms@bvs-ltd.co.uk>";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const email = String(body?.email || "").trim();
    const source = String(body?.source || "website").trim();

    const isHuman = await verifyRecaptcha(body?.recaptchaToken)
    if (!isHuman) {
      return Response.json({ error: "reCAPTCHA check failed. Please try again." }, { status: 400 })
    }

    if (!email || !email.includes("@")) {
      return Response.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      await getResend().emails.send({
        from: FROM,
        to: "info@bvs-ltd.co.uk",
        subject: "New Newsletter Subscription",
        html: `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
<div style="max-width:620px;margin:32px auto;background:#ffffff;border:1px solid #e2e8f0;">
  <div style="background:#297858;padding:20px 28px;">
    <p style="margin:0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:rgba(255,255,255,0.65);">BVS Website</p>
    <h1 style="margin:4px 0 0;font-size:18px;color:#ffffff;">Newsletter Subscription</h1>
  </div>
  <div style="padding:24px 28px;">
    <table style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0;">
      <tr>
        <td style="padding:8px 12px;background:#f4f4f4;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#64748b;white-space:nowrap;width:140px;">Email</td>
        <td style="padding:8px 12px;font-size:14px;color:#0f172a;">${email}</td>
      </tr>
      <tr>
        <td style="padding:8px 12px;background:#f4f4f4;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#64748b;white-space:nowrap;width:140px;">Source</td>
        <td style="padding:8px 12px;font-size:14px;color:#0f172a;">${source}</td>
      </tr>
    </table>
  </div>
  <div style="padding:16px 28px;border-top:1px solid #e2e8f0;background:#f8fafc;">
    <p style="margin:0;font-size:11px;color:#94a3b8;">Subscription, sent from bvs-ltd.co.uk</p>
  </div>
</div>
</body>
</html>`,
        tags: [{ name: "category", value: "subscription" }],
      });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}
