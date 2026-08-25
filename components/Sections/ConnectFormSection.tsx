"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Upload,
} from "lucide-react";
import { Geist, Inter } from "next/font/google";

/* =========================================================
   FONTS
   Geist Sans → heading, labels, button.
   Inter      → body copy, input values, helper/status text.
========================================================= */

const geist = Geist({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

/* =========================================================
   DESIGN TOKENS
   Matched to the reference design: soft filled lavender-gray
   inputs with no visible border, deep indigo heading/label
   color, and a lighter mid-purple submit button.
========================================================= */

const HEADING_INK = "#1B2560";
const ACCENT = "#4338CA";
const SUBMIT_BG = "#8B7EF0";
const SUBMIT_HOVER = "#7A6BEA";
const FIELD_BG = "#ECEBF4";

/* =========================================================
   COUNTRY DATA
========================================================= */

const COUNTRIES: { code: string; name: string }[] = [
  { code: "+93", name: "Afghanistan" },
  { code: "+355", name: "Albania" },
  { code: "+213", name: "Algeria" },
  { code: "+1-684", name: "American Samoa" },
  { code: "+376", name: "Andorra" },
  { code: "+244", name: "Angola" },
  { code: "+54", name: "Argentina" },
  { code: "+374", name: "Armenia" },
  { code: "+61", name: "Australia" },
  { code: "+43", name: "Austria" },
  { code: "+994", name: "Azerbaijan" },
  { code: "+973", name: "Bahrain" },
  { code: "+880", name: "Bangladesh" },
  { code: "+375", name: "Belarus" },
  { code: "+32", name: "Belgium" },
  { code: "+55", name: "Brazil" },
  { code: "+359", name: "Bulgaria" },
  { code: "+1", name: "Canada" },
  { code: "+56", name: "Chile" },
  { code: "+86", name: "China" },
  { code: "+57", name: "Colombia" },
  { code: "+385", name: "Croatia" },
  { code: "+420", name: "Czech Republic" },
  { code: "+45", name: "Denmark" },
  { code: "+20", name: "Egypt" },
  { code: "+372", name: "Estonia" },
  { code: "+358", name: "Finland" },
  { code: "+33", name: "France" },
  { code: "+995", name: "Georgia" },
  { code: "+49", name: "Germany" },
  { code: "+30", name: "Greece" },
  { code: "+852", name: "Hong Kong" },
  { code: "+36", name: "Hungary" },
  { code: "+354", name: "Iceland" },
  { code: "+91", name: "India" },
  { code: "+62", name: "Indonesia" },
  { code: "+353", name: "Ireland" },
  { code: "+972", name: "Israel" },
  { code: "+39", name: "Italy" },
  { code: "+81", name: "Japan" },
  { code: "+254", name: "Kenya" },
  { code: "+82", name: "South Korea" },
  { code: "+371", name: "Latvia" },
  { code: "+961", name: "Lebanon" },
  { code: "+370", name: "Lithuania" },
  { code: "+352", name: "Luxembourg" },
  { code: "+60", name: "Malaysia" },
  { code: "+52", name: "Mexico" },
  { code: "+31", name: "Netherlands" },
  { code: "+64", name: "New Zealand" },
  { code: "+234", name: "Nigeria" },
  { code: "+47", name: "Norway" },
  { code: "+92", name: "Pakistan" },
  { code: "+63", name: "Philippines" },
  { code: "+48", name: "Poland" },
  { code: "+351", name: "Portugal" },
  { code: "+974", name: "Qatar" },
  { code: "+40", name: "Romania" },
  { code: "+7", name: "Russia" },
  { code: "+966", name: "Saudi Arabia" },
  { code: "+65", name: "Singapore" },
  { code: "+27", name: "South Africa" },
  { code: "+34", name: "Spain" },
  { code: "+94", name: "Sri Lanka" },
  { code: "+46", name: "Sweden" },
  { code: "+41", name: "Switzerland" },
  { code: "+886", name: "Taiwan" },
  { code: "+66", name: "Thailand" },
  { code: "+971", name: "United Arab Emirates" },
  { code: "+44", name: "United Kingdom" },
  { code: "+1", name: "United States" },
  { code: "+84", name: "Vietnam" },
];

const HEAR_ABOUT_OPTIONS = [
  "Search engine (Google, Bing, etc.)",
  "LinkedIn",
  "Referral from a colleague",
  "Industry event or conference",
  "News article or press release",
  "Other",
];

const ACCEPTED_FILE_TYPES =
  ".xlsx,.xls,.doc,.docx,.pdf,.rtf,.zip,.rar";

const MAX_FILE_SIZE_MB = 10;

/* =========================================================
   SHARED FILLED-INPUT STYLES
   No visible border — a soft lavender-gray fill instead, with
   an indigo focus ring, matching the reference design.
========================================================= */

const filledInputClasses = `
  h-14
  w-full
  rounded-xl
  border
  border-transparent
  px-4
  text-[15px]
  text-[#1E1B3A]
  outline-none
  transition-colors
  duration-150
  placeholder:text-slate-500
  focus:border-[#4338CA]/40
  focus:ring-4
  focus:ring-[#4338CA]/10
`;

// Tailwind can't compile a class name built from a JS variable
// (e.g. `bg-[${FIELD_BG}]`), so the fill color is applied inline
// instead of as a dynamic arbitrary-value class.
const filledInputStyle = { backgroundColor: FIELD_BG };

function FilledField({
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      required={required}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={filledInputStyle}
      className={`${filledInputClasses} ${inter.className}`}
    />
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function ConnectFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    opportunity: "",
    hearAbout: "",
    consent: false,
  });

  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [country, setCountry] = useState<{
    code: string;
    name: string;
  } | null>(null);

  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryBoxRef = useRef<HTMLDivElement>(null);

  const [status, setStatus] = useState<"idle" | "error" | "success">(
    "idle"
  );

  const [errorMessage, setErrorMessage] = useState("");
  const [countryTouched, setCountryTouched] = useState(false);

  /* =========================================================
     CLOSE COUNTRY DROPDOWN
  ========================================================= */

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        countryBoxRef.current &&
        !countryBoxRef.current.contains(e.target as Node)
      ) {
        setCountryOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* =========================================================
     FILTER COUNTRIES
  ========================================================= */

  const filteredCountries = useMemo(() => {
    const q = countrySearch.trim().toLowerCase();

    if (!q) return COUNTRIES;

    return COUNTRIES.filter(
      (country) =>
        country.name.toLowerCase().includes(q) ||
        country.code.includes(q)
    );
  }, [countrySearch]);

  /* =========================================================
     FILE UPLOAD
  ========================================================= */

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];

    if (!selected) return;

    if (selected.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setErrorMessage(`File must be ${MAX_FILE_SIZE_MB} MB or smaller.`);
      setStatus("error");
      e.target.value = "";
      return;
    }

    setFile(selected);
  }

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("idle");
    setErrorMessage("");

    if (!country) {
      setCountryTouched(true);
      setErrorMessage("Select a country code to continue.");
      setStatus("error");
      return;
    }

    if (!form.consent) {
      setErrorMessage("Accept the privacy policy to send your brief.");
      setStatus("error");
      return;
    }

    /*
      Connect your real API here.

      Example:

      const body = new FormData();
      body.append("name", form.name);
      body.append("email", form.email);
      body.append("phone", form.phone);
      body.append("company", form.company);
      body.append("opportunity", form.opportunity);
      body.append("hearAbout", form.hearAbout);
      body.append("countryCode", country.code);
      if (file) body.append("attachment", file);

      await fetch("/api/lead", { method: "POST", body });
    */

    setStatus("success");
  };

  return (
    <section
      id="form"
      className="relative bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
          {/* ===============================================
              LEFT — heading + decorative blob
          ================================================ */}

          <div className="relative">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <h2
                className={`text-[42px] font-medium leading-[1.15] tracking-[-0.02em] ${geist.className}`}
                style={{ color: HEADING_INK }}
              >
                Your Goals Are Closer Than You Think.
              </h2>

              <a
                href="#form"
                className={`mt-5 inline-block text-[16px] font-medium ${inter.className}`}
                style={{ color: HEADING_INK }}
              >
                Connect Now
              </a>
            </div>

            {/* Soft decorative gradient wash running the full height of
                the left column along its edge — three overlapping color
                blooms (blue near the top, pink/magenta at mid-height,
                indigo-blue lower down) rather than one single blob, each
                fading out toward the right and toward white. Purely
                visual, no interaction; sits behind the sticky heading
                since it isn't itself sticky. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-full max-w-[440px] opacity-90 blur-3xl"
              style={{
                background: `
                  radial-gradient(42% 12% at 8% 6%, rgba(147,197,253,0.45), transparent 70%),
                  radial-gradient(46% 16% at 6% 46%, rgba(236,72,153,0.32), transparent 70%),
                  radial-gradient(48% 16% at 5% 78%, rgba(99,102,241,0.38), transparent 70%)
                `,
              }}
            />
          </div>

          {/* ===============================================
              RIGHT — the form
          ================================================ */}

          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name + Email */}

              <div className="grid gap-5 sm:grid-cols-2">
                <FilledField
                  placeholder="Name*"
                  required
                  value={form.name}
                  onChange={(value) =>
                    setForm((f) => ({ ...f, name: value }))
                  }
                />

                <FilledField
                  placeholder="Email address*"
                  type="email"
                  required
                  value={form.email}
                  onChange={(value) =>
                    setForm((f) => ({ ...f, email: value }))
                  }
                />
              </div>

              {/* Country code label + Country / Phone / Company */}

              <div>
                <p
                  className={`mb-2 text-[13.5px] font-medium ${inter.className}`}
                  style={{ color: HEADING_INK }}
                >
                  Country code*
                </p>

                <div className="grid gap-3 sm:grid-cols-[150px_1fr_1fr]">
                  {/* Country */}

                  <div ref={countryBoxRef} className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setCountryOpen((value) => !value);
                        setCountryTouched(true);
                      }}
                      style={filledInputStyle}
                      className={`
                        flex
                        h-14
                        w-full
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        text-left
                        text-[15px]
                        outline-none
                        transition-colors
                        duration-150
                        ${
                          countryOpen
                            ? "ring-4 ring-[#4338CA]/10"
                            : countryTouched && !country
                            ? "ring-2 ring-red-300"
                            : ""
                        }
                        ${country ? "text-[#1E1B3A]" : "text-slate-500"}
                        ${inter.className}
                      `}
                    >
                      <span className="truncate">
                        {country ? country.code : "Country*"}
                      </span>

                      <ChevronDown
                        className={`ml-2 h-4 w-4 shrink-0 transition-transform ${
                          countryOpen ? "rotate-180" : ""
                        }`}
                        style={{ color: ACCENT }}
                      />
                    </button>

                    {countryOpen && (
                      <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-full min-w-[280px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.15)]">
                        <div className="border-b border-slate-100 p-2">
                          <input
                            autoFocus
                            value={countrySearch}
                            onChange={(e) =>
                              setCountrySearch(e.target.value)
                            }
                            placeholder="Search country..."
                            className="h-10 w-full rounded-md bg-slate-50 px-3 text-sm text-slate-800 outline-none ring-1 ring-transparent focus:ring-[#4338CA]/30"
                          />
                        </div>

                        <ul className="max-h-60 overflow-y-auto p-1.5">
                          {filteredCountries.length === 0 && (
                            <li className="px-3 py-3 text-sm text-slate-400">
                              No countries found.
                            </li>
                          )}

                          {filteredCountries.map((c) => (
                            <li key={`${c.code}-${c.name}`}>
                              <button
                                type="button"
                                onClick={() => {
                                  setCountry(c);
                                  setCountryOpen(false);
                                  setCountrySearch("");
                                }}
                                className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm text-[#0F172A] transition hover:bg-indigo-50"
                              >
                                <span>{c.name}</span>
                                <span className="text-slate-400">
                                  {c.code}
                                </span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Phone */}

                  <FilledField
                    placeholder="Phone number*"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(value) =>
                      setForm((f) => ({ ...f, phone: value }))
                    }
                  />

                  {/* Company */}

                  <FilledField
                    placeholder="Company*"
                    required
                    value={form.company}
                    onChange={(value) =>
                      setForm((f) => ({ ...f, company: value }))
                    }
                  />
                </div>

                {countryTouched && !country && (
                  <p className="mt-2 text-xs text-red-500">
                    Select a country code to continue.
                  </p>
                )}
              </div>

              {/* Opportunity */}

              <textarea
                required
                rows={5}
                placeholder="Tell us about your opportunity*"
                value={form.opportunity}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    opportunity: e.target.value,
                  }))
                }
                style={filledInputStyle}
                className={`${filledInputClasses} ${inter.className} min-h-[150px] resize-none py-4 leading-6`}
              />

              {/* How did you hear */}

              <div className="relative">
                <select
                  required
                  value={form.hearAbout}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      hearAbout: e.target.value,
                    }))
                  }
                  style={filledInputStyle}
                  className={`${filledInputClasses} ${inter.className} appearance-none pr-10 ${
                    form.hearAbout ? "text-[#1E1B3A]" : "text-slate-500"
                  }`}
                >
                  <option value="" disabled>
                    How did you hear about us?*
                  </option>

                  {HEAR_ABOUT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2"
                  style={{ color: ACCENT }}
                />
              </div>

              {/* RFP / RFI upload */}

              <div>
                <p
                  className={`mb-2 text-[13.5px] font-medium ${inter.className}`}
                  style={{ color: HEADING_INK }}
                >
                  Upload your RFP/RFI document (maximum file size:{" "}
                  {MAX_FILE_SIZE_MB} MB)
                </p>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  style={filledInputStyle}
                  className={`
                    flex
                    h-14
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    text-left
                    text-[15px]
                    text-slate-500
                    outline-none
                    transition-colors
                    duration-150
                    hover:text-slate-600
                    focus:ring-4
                    focus:ring-[#4338CA]/10
                    ${inter.className}
                  `}
                >
                  <span className="truncate">
                    {file
                      ? file.name
                      : "Accepted file formats: .xlsx, .xls, .doc, .docx, .pdf, .rtf, .zip, .rar"}
                  </span>

                  <Upload
                    className="ml-3 h-4 w-4 shrink-0"
                    style={{ color: ACCENT }}
                  />
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept={ACCEPTED_FILE_TYPES}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              {/* Consent */}

              <label className="flex cursor-pointer items-start gap-3 pt-1">
                <span className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                  <input
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        consent: e.target.checked,
                      }))
                    }
                    className="peer absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  />

                  <span className="flex h-5 w-5 items-center justify-center rounded-[4px] border border-slate-300 bg-white transition peer-checked:border-[#4338CA] peer-checked:bg-[#4338CA]">
                    {form.consent && (
                      <Check className="h-3.5 w-3.5 text-white" />
                    )}
                  </span>
                </span>

                <span
                  className={`text-[15px] leading-6 text-[#1E1B3A] ${inter.className}`}
                >
                  By checking this box, you consent us to store and process
                  the information provided in accordance with our terms of{" "}
                  <a
                    href="/privacy-policy"
                    className="font-medium underline underline-offset-2"
                    style={{ color: HEADING_INK }}
                  >
                    Privacy Policy
                  </a>
                  *
                </span>
              </label>

              {/* Status */}

              {status === "error" && (
                <div
                  className={`rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 ${inter.className}`}
                >
                  {errorMessage}
                </div>
              )}

              {status === "success" && (
                <div
                  className={`rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-600 ${inter.className}`}
                >
                  Brief received — expect a reply within one business day.
                </div>
              )}

              {/* Submit */}

              <div className="pt-1">
                <button
                  type="submit"
                  className={`
                    group
                    inline-flex
                    h-14
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    px-8
                    text-[16px]
                    font-semibold
                    text-white
                    transition-colors
                    duration-150
                    ${geist.className}
                  `}
                  style={{ backgroundColor: SUBMIT_BG }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = SUBMIT_HOVER)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = SUBMIT_BG)
                  }
                >
                  Submit
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2.5}
                    className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}