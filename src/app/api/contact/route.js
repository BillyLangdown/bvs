import { sendContactEmail } from "@/lib/email";
import { verifyRecaptcha } from "@/lib/recaptcha";

async function postToWebhook(payload) {
  const webhookUrl = process.env.FORMS_WEBHOOK_URL;
  if (!webhookUrl) return;
  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: "contact", ...payload }),
  }).catch(() => null);
}

export async function POST(req) {
  try {
    const body = await req.json();

    const isHuman = await verifyRecaptcha(body?.recaptchaToken)
    if (!isHuman) {
      return Response.json({ error: "reCAPTCHA check failed. Please try again." }, { status: 400 })
    }

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const mobile = String(body?.mobile || "").trim();
    const phone = String(body?.phone || "").trim();
    const company = String(body?.company || "").trim();
    const service = String(body?.service || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email.includes("@")) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    const payload = {
      name,
      email,
      mobile: mobile || null,
      phone: phone || null,
      company: company || null,
      service: service || null,
      message: message || null,
    };

    await Promise.all([
      sendContactEmail(payload),
      postToWebhook(payload),
    ]);

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }
}
