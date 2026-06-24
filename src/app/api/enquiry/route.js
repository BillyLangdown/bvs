import { sendProductEnquiryEmail } from "@/lib/email";
import { verifyRecaptcha } from "@/lib/recaptcha";

async function postToWebhook(payload) {
  const webhookUrl = process.env.FORMS_WEBHOOK_URL;
  if (!webhookUrl) return;
  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: "product_enquiry", ...payload }),
  }).catch(() => null);
}

export async function POST(req) {
  try {
    const body = await req.json();

    const isHuman = await verifyRecaptcha(body?.recaptchaToken)
    if (!isHuman) {
      return Response.json({ error: "reCAPTCHA check failed. Please try again." }, { status: 400 })
    }

    // Honeypot — bots fill hidden fields, humans don't
    if (body?.hp) {
      return Response.json({ ok: true });
    }

    const productSlug = String(body?.productSlug || "").trim();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const company = String(body?.company || "").trim();
    const phone = String(body?.phone || "").trim();
    const enquiry = String(body?.enquiry || "").trim();
    const image = body?.image ?? null;

    if (!name || !email.includes("@") || !enquiry) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    const payload = {
      productSlug: productSlug || null,
      name,
      email,
      company: company || null,
      phone: phone || null,
      enquiry,
      imageAttached: image?.name || null,
    };

    await Promise.all([
      sendProductEnquiryEmail(payload),
      postToWebhook({ ...payload, imageData: image?.data ?? null }),
    ]);

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[enquiry]", err);
    return Response.json({ error: "Failed to send enquiry." }, { status: 500 });
  }
}
