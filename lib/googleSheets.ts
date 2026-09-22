import { google } from "googleapis";

const SHEET_ID = process.env.GOOGLE_SHEET_ID!;
const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || "Sheet1";

export interface ContactData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  hear?: string;
}

function getAuth() {
  return new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    // In .env the key has escaped \n characters, so convert them back
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function appendContactRow(data: ContactData) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `${SHEET_NAME}!A:G`,
    // RAW keeps every value as plain text, so phone numbers starting
    // with "+" are not treated as a formula (which caused #ERROR!).
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          timestamp,
          data.name,
          data.email,
          data.phone || "-",
          data.company || "-",
          data.hear || "-",
          data.message,
        ],
      ],
    },
  });
}