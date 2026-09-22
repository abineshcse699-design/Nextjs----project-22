import nodemailer from "nodemailer";
import type { ContactData } from "./googleSheets";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === "true", // 465 => true, 587 => false
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Prevents HTML injection from user input
const esc = (s = "") =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function sendContactAlert(data: ContactData) {
  await transporter.sendMail({
    from: `"Website Contact" <${process.env.SMTP_USER}>`,
    to: process.env.ALERT_EMAIL || process.env.SMTP_USER,
    replyTo: data.email,
    subject: `New contact form submission from ${data.name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px">
        <h2 style="color:#1B2560">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${esc(data.name)}</p>
        <p><strong>Email:</strong> ${esc(data.email)}</p>
        <p><strong>Phone:</strong> ${esc(data.phone) || "-"}</p>
        <p><strong>Company:</strong> ${esc(data.company) || "-"}</p>
        <p><strong>Heard about us via:</strong> ${esc(data.hear) || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${esc(data.message).replace(/\n/g, "<br/>")}</p>
      </div>
    `,
  });
}