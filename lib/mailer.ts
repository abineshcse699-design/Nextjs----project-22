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
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  await transporter.sendMail({
    from: `"Website Contact" <${process.env.SMTP_USER}>`,
    to: process.env.ALERT_EMAIL || process.env.SMTP_USER,
    replyTo: data.email,
    subject: `New contact form submission from ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style="margin:0;padding:0;background-color:#EEF0F5;font-family:Arial,sans-serif;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF0F5;padding:32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid #E8EAF2;">

                <!-- Header -->
                <tr>
                  <td style="background-color:#1B2560;padding:28px 32px;">
                    <p style="margin:0;color:#FFFFFF;font-size:20px;font-weight:600;">
                      New Contact Form Submission
                    </p>
                    <p style="margin:6px 0 0;color:#C7CBEA;font-size:13px;">
                      ${esc(submittedAt)}
                    </p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:32px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #E8EAF2;">
                          <p style="margin:0;font-size:12px;color:#6B7280;text-transform:uppercase;letter-spacing:0.04em;">Name</p>
                          <p style="margin:4px 0 0;font-size:15px;color:#1B2560;font-weight:600;">${esc(data.name)}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #E8EAF2;">
                          <p style="margin:0;font-size:12px;color:#6B7280;text-transform:uppercase;letter-spacing:0.04em;">Email</p>
                          <p style="margin:4px 0 0;font-size:15px;color:#1B2560;">
                            <a href="mailto:${esc(data.email)}" style="color:#4F3FE0;text-decoration:none;">${esc(data.email)}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #E8EAF2;">
                          <p style="margin:0;font-size:12px;color:#6B7280;text-transform:uppercase;letter-spacing:0.04em;">Phone</p>
                          <p style="margin:4px 0 0;font-size:15px;color:#1B2560;">${esc(data.phone) || "—"}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #E8EAF2;">
                          <p style="margin:0;font-size:12px;color:#6B7280;text-transform:uppercase;letter-spacing:0.04em;">Company</p>
                          <p style="margin:4px 0 0;font-size:15px;color:#1B2560;">${esc(data.company) || "—"}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #E8EAF2;">
                          <p style="margin:0;font-size:12px;color:#6B7280;text-transform:uppercase;letter-spacing:0.04em;">Heard about us via</p>
                          <p style="margin:4px 0 0;font-size:15px;color:#1B2560;">${esc(data.hear) || "—"}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:18px 0 0;">
                          <p style="margin:0 0 8px;font-size:12px;color:#6B7280;text-transform:uppercase;letter-spacing:0.04em;">Message</p>
                          <div style="background-color:#EEF0F5;border-radius:10px;padding:16px 18px;font-size:15px;line-height:1.6;color:#1B2560;white-space:pre-wrap;">${esc(data.message).replace(/\n/g, "<br/>")}</div>
                        </td>
                      </tr>
                    </table>

                    <!-- CTA -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                      <tr>
                        <td>
                          <a href="mailto:${esc(data.email)}"
                             style="display:inline-block;background-color:#4F3FE0;color:#FFFFFF;font-size:14px;font-weight:600;text-decoration:none;padding:13px 26px;border-radius:999px;">
                            Reply now →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:20px 32px;background-color:#F7F8FB;border-top:1px solid #E8EAF2;">
                    <p style="margin:0;font-size:12px;color:#6B7280;">
                      This email was sent automatically from your website's contact form.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  });
}