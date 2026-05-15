async function postToWebhook(payload) {
  const webhookUrl = process.env.FORMS_WEBHOOK_URL;
  if (!webhookUrl) return { ok: true, sent: false };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: "product_enquiry", ...payload }),
  });

  return { ok: res.ok, sent: true };
}

export async function POST(req) {
  try {
    const body = await req.json();

    // Honeypot check — bots fill hidden fields, humans don't
    if (body?.hp) {
      return Response.json({ ok: true });
    }

    const productSlug = String(body?.productSlug || "").trim();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const company = String(body?.company || "").trim();
    const phone = String(body?.phone || "").trim();
    const enquiry = String(body?.enquiry || "").trim();
    const image = body?.image ?? null; // { name, data } or null

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
    };

    // Include image metadata in the payload if present (data URI kept server-side)
    if (image?.name) {
      payload.imageAttached = image.name;
      payload.imageData = image.data ?? null;
    }

    const result = await postToWebhook(payload);

    if (!result.ok) {
      return Response.json({ error: "Failed to deliver enquiry." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}
