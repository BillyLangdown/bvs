import { Resend } from "resend";

const FROM = process.env.EMAIL_FROM || "BVS Enquiries <forms@bvs-ltd.co.uk>";
const TO = process.env.EMAIL_TO || "enquiries@bvs-ltd.co.uk";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

function row(label, value) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:8px 12px;background:#f4f4f4;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#64748b;white-space:nowrap;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:8px 12px;font-size:14px;color:#0f172a;vertical-align:top;">${String(value).replace(/\n/g, "<br/>")}</td>
    </tr>`;
}

function layout(subject, rows, message) {
  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
<div style="max-width:620px;margin:32px auto;background:#ffffff;border:1px solid #e2e8f0;">
  <div style="background:#297858;padding:20px 28px;">
    <p style="margin:0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:rgba(255,255,255,0.65);">BVS Website</p>
    <h1 style="margin:4px 0 0;font-size:18px;color:#ffffff;">${subject}</h1>
  </div>
  <div style="padding:24px 28px;">
    <table style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0;">
      ${rows}
    </table>
    ${message ? `
    <div style="margin-top:20px;border-left:3px solid #297858;padding:12px 16px;background:#f8faf9;">
      <p style="margin:0 0 8px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#64748b;">Message</p>
      <p style="margin:0;font-size:14px;color:#0f172a;line-height:1.6;">${String(message).replace(/\n/g, "<br/>")}</p>
    </div>` : ""}
  </div>
  <div style="padding:16px 28px;border-top:1px solid #e2e8f0;background:#f8fafc;">
    <p style="margin:0;font-size:11px;color:#94a3b8;">Sent from bvs-ltd.co.uk contact forms</p>
  </div>
</div>
</body>
</html>`;
}

export async function sendContactEmail({ name, email, mobile, phone, company, service, message }) {
  const contactNumber = mobile || phone || null;
  const rows = [
    row("Name", name),
    row("Email", email),
    row("Phone", contactNumber),
    row("Company", company),
    row("Service", service),
  ].join("");

  await getResend().emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `New Enquiry: ${name}${service ? ` (${service})` : ""}`,
    html: layout("New Enquiry", rows, message),
  });
}

export async function sendCareersEmail({ name, email, mobile, message, attachment }) {
  const rows = [
    row("Name", name),
    row("Email", email),
    row("Mobile", mobile),
  ].join("");

  const emailData = {
    from: FROM,
    to: "info@bvs-ltd.co.uk",
    replyTo: email,
    subject: `Job Application: ${name}`,
    html: layout("Job Application", rows, message || null),
  };

  if (attachment) {
    emailData.attachments = [attachment];
  }

  await getResend().emails.send(emailData);
}

export async function sendProductEnquiryEmail({ productSlug, name, email, company, phone, enquiry, imageAttached }) {
  const rows = [
    row("Product", productSlug),
    row("Name", name),
    row("Email", email),
    row("Phone", phone),
    row("Company", company),
    row("Attachment", imageAttached),
  ].join("");

  await getResend().emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `Product Enquiry: ${name}${productSlug ? ` re: ${productSlug}` : ""}`,
    html: layout("Product Enquiry", rows, enquiry),
  });
}
