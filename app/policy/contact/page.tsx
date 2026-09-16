// components/ContactForm.tsx

"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const T = {
  ink: "text-[#14163B]",
  primary: "text-[#3B2FE0]",
  primaryBg: "bg-[#3B2FE0]",
  primaryHoverBg: "hover:bg-[#2E24B8]",
  muted: "text-[#5B5D78]",
  border: "border-[#E4E4EF]",
  panelBg: "bg-[#FAFAFD]",
};

const inputClasses = `w-full rounded-md border ${T.border} bg-white px-4 py-3 text-[14.5px] ${T.ink} placeholder:text-[#8A8CA6] outline-none transition-colors focus:border-[#3B2FE0]`;

type InquiryType = { key: string; label: string; blurb: string };

// Fallback so the form never crashes if the caller forgets to pass
// inquiryTypes, or passes an empty/undefined array.
const DEFAULT_INQUIRY_TYPES: InquiryType[] = [
  { key: "general", label: "General Inquiry", blurb: "" },
];

export default function ContactForm({
  inquiryTypes = DEFAULT_INQUIRY_TYPES,
}: {
  inquiryTypes?: InquiryType[];
}) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  // Guard both the array AND the optional key access — undefined[0]
  // throws even with ?. on .key, since ?. only guards the .key part.
  const [inquiry, setInquiry] = useState(inquiryTypes?.[0]?.key ?? "general");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nextErrors: Record<string, string> = {};

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) nextErrors.name = "Enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address";
    if (!message) nextErrors.message = "Tell us a little about what you need";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className={`flex flex-col items-center gap-3 rounded-lg border ${T.border} ${T.panelBg} px-6 py-14 text-center`}>
        <CheckCircle2 size={32} className={T.primary} strokeWidth={1.75} />
        <h3 className={`text-[18px] font-semibold ${T.ink}`}>Message sent</h3>
        <p className={`max-w-sm text-[14px] leading-relaxed ${T.muted}`}>
          Thanks for reaching out. Our team will get back to you at the email address you provided within two working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`rounded-lg border ${T.border} p-6 sm:p-8`}>
      <div>
        <label className={`block text-[13.5px] font-medium ${T.ink}`}>Inquiry type</label>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {inquiryTypes.map((type) => (
            <button
              key={type.key}
              type="button"
              onClick={() => setInquiry(type.key)}
              className={`rounded-md border px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                inquiry === type.key
                  ? `${T.primaryBg} border-transparent text-white`
                  : `${T.border} ${T.ink} hover:border-[#3B2FE0]`
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
        <input type="hidden" name="inquiryType" value={inquiry} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={`block text-[13.5px] font-medium ${T.ink}`}>
            Full name
          </label>
          <input id="name" name="name" type="text" placeholder="Your full name" className={`mt-2 ${inputClasses}`} />
          {errors.name && <p className="mt-1.5 text-[12.5px] text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className={`block text-[13.5px] font-medium ${T.ink}`}>
            Email address
          </label>
          <input id="email" name="email" type="email" placeholder="you@example.com" className={`mt-2 ${inputClasses}`} />
          {errors.email && <p className="mt-1.5 text-[12.5px] text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="company" className={`block text-[13.5px] font-medium ${T.ink}`}>
            Company <span className={T.muted}>(optional)</span>
          </label>
          <input id="company" name="company" type="text" placeholder="Company name" className={`mt-2 ${inputClasses}`} />
        </div>

        <div>
          <label htmlFor="phone" className={`block text-[13.5px] font-medium ${T.ink}`}>
            Phone <span className={T.muted}>(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" className={`mt-2 ${inputClasses}`} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={`block text-[13.5px] font-medium ${T.ink}`}>
            What can we help with
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us a bit about your challenge, idea, or question"
            className={`mt-2 ${inputClasses} resize-none`}
          />
          {errors.message && <p className="mt-1.5 text-[12.5px] text-red-600">{errors.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        className={`mt-7 inline-flex items-center justify-center rounded-md px-7 py-3.5 text-[15px] font-semibold text-white transition-colors ${T.primaryBg} ${T.primaryHoverBg}`}
      >
        Send message
      </button>
    </form>
  );
}