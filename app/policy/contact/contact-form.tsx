"use client";

import { useState } from "react";
import { CheckCircle2, Upload } from "lucide-react";

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

export default function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nextErrors: Record<string, string> = {};

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    if (!name) nextErrors.name = "Enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address";
    if (!phone) nextErrors.phone = "Enter a phone number";
    if (!fileName) nextErrors.resume = "Attach your resume";
    if (!agreed) nextErrors.agree = "Please agree to the Privacy Policy to continue";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className={`flex flex-col items-center gap-3 rounded-lg border ${T.border} ${T.panelBg} px-6 py-14 text-center`}>
        <CheckCircle2 size={32} className={T.primary} strokeWidth={1.75} />
        <h3 className={`text-[18px] font-semibold ${T.ink}`}>Application received</h3>
        <p className={`max-w-sm text-[14px] leading-relaxed ${T.muted}`}>
          Thanks for applying for {jobTitle}. Our team reviews every application and
          will reach out by email if there's a fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`rounded-lg border ${T.border} p-6 sm:p-8`}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
          <label htmlFor="phone" className={`block text-[13.5px] font-medium ${T.ink}`}>
            Phone number
          </label>
          <input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" className={`mt-2 ${inputClasses}`} />
          {errors.phone && <p className="mt-1.5 text-[12.5px] text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="linkedin" className={`block text-[13.5px] font-medium ${T.ink}`}>
            LinkedIn / portfolio <span className={T.muted}>(optional)</span>
          </label>
          <input id="linkedin" name="linkedin" type="url" placeholder="https://" className={`mt-2 ${inputClasses}`} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="resume" className={`block text-[13.5px] font-medium ${T.ink}`}>
            Resume
          </label>
          <label
            htmlFor="resume"
            className={`mt-2 flex cursor-pointer items-center justify-between gap-3 rounded-md border border-dashed ${T.border} ${T.panelBg} px-4 py-3.5 text-[14px] ${T.muted} transition-colors hover:border-[#3B2FE0]`}
          >
            <span className="flex items-center gap-2.5">
              <Upload size={17} strokeWidth={2} />
              {fileName ?? "Upload PDF or DOCX, up to 10MB"}
            </span>
            <span className={`shrink-0 text-[13px] font-semibold ${T.primary}`}>Browse</span>
          </label>
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          />
          {errors.resume && <p className="mt-1.5 text-[12.5px] text-red-600">{errors.resume}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={`block text-[13.5px] font-medium ${T.ink}`}>
            Anything you'd like us to know <span className={T.muted}>(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Notice period, relocation, or anything else relevant"
            className={`mt-2 ${inputClasses} resize-none`}
          />
        </div>
      </div>

      {/* Privacy policy agreement */}
      <div className={`mt-6 rounded-md border ${T.border} ${T.panelBg} px-4 py-3.5`}>
        <div className="flex items-start gap-3">
          <input
            id="agree"
            name="agree"
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#3B2FE0]"
          />
          <label htmlFor="agree" className={`text-[13.5px] leading-relaxed ${T.ink} cursor-pointer`}>
            I have read and agree to Starfii's{" "}
            <a
              href="/policy/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold underline underline-offset-2 ${T.primary}`}
            >
              Privacy Policy
            </a>
            , and I consent to my information being used to process this application.
          </label>
        </div>
        {errors.agree && <p className="mt-1.5 text-[12.5px] text-red-600">{errors.agree}</p>}
      </div>

      <button
        type="submit"
        className={`mt-7 inline-flex items-center justify-center rounded-md px-7 py-3.5 text-[15px] font-semibold text-white transition-colors ${T.primaryBg} ${T.primaryHoverBg}`}
      >
        Submit application
      </button>
    </form>
  );
}