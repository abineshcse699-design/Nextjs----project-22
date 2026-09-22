import { NextRequest, NextResponse } from "next/server";
import { appendContactRow, type ContactData } from "@/lib/googleSheets";
import { sendContactAlert } from "@/lib/mailer";

export const runtime = "nodejs"; // nodemailer needs the Node runtime

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message, hear } = body as ContactData;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const data: ContactData = { name, email, phone, company, message, hear };

    // Google Sheets is optional: only used when all 3 variables are set in .env
    const sheetEnabled = Boolean(
      process.env.GOOGLE_SHEET_ID &&
        process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
        process.env.GOOGLE_PRIVATE_KEY
    );

    const [mailRes, sheetRes] = await Promise.allSettled([
      sendContactAlert(data),
      sheetEnabled ? appendContactRow(data) : Promise.resolve(),
    ]);

    if (mailRes.status === "rejected") console.error("Nodemailer error:", mailRes.reason);
    if (sheetRes.status === "rejected") console.error("Google Sheet error:", sheetRes.reason);

    // Fail only if the mail failed AND the sheet did not save it either
    const sheetSaved = sheetEnabled && sheetRes.status === "fulfilled";
    if (mailRes.status === "rejected" && !sheetSaved) {
      return NextResponse.json(
        { success: false, error: "Failed to send your message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}