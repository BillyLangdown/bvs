export async function POST(req) {
  try {
    const body = await req.json();
    const email = String(body?.email || "").trim();
    const source = String(body?.source || "website").trim();

    if (!email || !email.includes("@")) {
      return Response.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) {
        return Response.json(
          { error: "Newsletter provider rejected the request." },
          { status: 502 },
        );
      }
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}

