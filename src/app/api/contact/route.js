async function postToWebhook(payload) {
  const webhookUrl = process.env.FORMS_WEBHOOK_URL;
  if (!webhookUrl) return { ok: true, sent: false };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: "contact", ...payload }),
  });

  return { ok: res.ok, sent: true };
}

export async function POST(req) {
  try {
    const body = await req.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const company = String(body?.company || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email.includes("@") || !message) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    const result = await postToWebhook({ name, email, company, message });
    if (!result.ok) {
      return Response.json({ error: "Failed to deliver message." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}

