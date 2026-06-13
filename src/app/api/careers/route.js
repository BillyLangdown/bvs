import { sendCareersEmail } from "@/lib/email";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const mobile = String(formData.get("mobile") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const file = formData.get("cv");

    if (!name || !email.includes("@") || !mobile) {
      return Response.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    let attachment = null;
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachment = { filename: file.name, content: buffer };
    }

    await sendCareersEmail({ name, email, mobile, message, attachment });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[careers]", err);
    return Response.json({ error: "Failed to send application." }, { status: 500 });
  }
}
