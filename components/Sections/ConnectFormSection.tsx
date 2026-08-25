"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Lock,
  UserCheck,
} from "lucide-react";
import { Geist, Inter } from "next/font/google";

/* =========================================================
   FONTS
   Geist Sans → headings, field labels, buttons, the metric.
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
   A quiet, formal product palette — one deep indigo accent,
   everything else neutral slate. No gradients, no glow.
========================================================= */

const BORDER = "#E2E8F0";
const ACCENT = "#4338CA";
const PANEL = "#F8FAFC";

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

const EXPECTATIONS = [
  {
    icon: Clock,
    title: "Reply within one business day",
    body: "A real engineer reads every brief and responds directly — no queue, no auto-reply.",
  },
  {
    icon: UserCheck,
    title: "A scoped pilot before commitment",
    body: "We propose a small, bounded first engagement so both sides can evaluate fit early.",
  },
  {
    icon: Lock,
    title: "Your information stays confidential",
    body: "Shared only with the team assigned to your brief, per our privacy policy.",
  },
];

/* =========================================================
   FIELD COMPONENTS
   Standard bordered inputs, labels in Geist Sans, values in
   Inter — the vocabulary of a product settings form rather
   than an editorial spec sheet.
========================================================= */

function Label({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      className={`mb-2 block text-[13.5px] font-medium text-[#334155] ${geist.className}`}
    >
      {children}
      {required && <span className="ml-1 text-[#4338CA]">*</span>}
    </label>
  );
}

const inputClasses = `
  h-12
  w-full
  rounded-lg
  border
  border-slate-300
  bg-white
  px-3.5
  text-[15px]
  text-[#0F172A]
  outline-none
  transition-colors
  duration-150
  placeholder:text-slate-400
  hover:border-slate-400
  focus:border-[#4338CA]
  focus:ring-4
  focus:ring-[#4338CA]/10
`;

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className={inter.className}>
      <Label required={required}>{label}</Label>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={inputClasses}
      />
    </div>
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

      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, country }),
      });
    */

    setStatus("success");
  };

  return (
    <section
      id="form"
      className="relative bg-white px-4 py-24 sm:px-6 md:px-8 lg:px-10 lg:py-32 xl:px-12"
    >
      <div className="mx-auto max-w-[1830px]">
        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <div className="mb-14 max-w-2xl lg:mb-16">
          <p
            className={`text-[13px] font-semibold uppercase tracking-[0.14em] text-[#4338CA] ${geist.className}`}
          >
            Get in touch
          </p>

          <h2
            className={`mt-4 text-[36px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#0F172A] sm:text-[42px] ${geist.className}`}
          >
            Tell us what you&apos;re building
          </h2>

          <p className={`mt-4 text-[16px] leading-7 text-[#64748B] ${inter.className}`}>
            Share a few details about your team and the problem you&apos;re
            solving. We&apos;ll route it to an engineer who can speak to it
            directly.
          </p>
        </div>

        {/* =================================================
            MAIN GRID
        ================================================== */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[340px_1fr] lg:gap-16">
          {/* ===============================================
              LEFT — what to expect
          ================================================ */}

          <div className="lg:sticky lg:top-32 lg:h-fit">
            <div
              className="rounded-xl border p-7"
              style={{ borderColor: BORDER, backgroundColor: PANEL }}
            >
              <p
                className={`text-[44px] font-semibold leading-none tracking-[-0.02em] text-[#0F172A] ${geist.className}`}
              >
                &lt;24h
              </p>
              <p className={`mt-2 text-[14px] text-[#64748B] ${inter.className}`}>
                Average time to first response
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-7">
              {EXPECTATIONS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
                      style={{ borderColor: BORDER, color: ACCENT }}
                    >
                      <Icon size={17} strokeWidth={2} />
                    </div>
                    <div>
                      <h4
                        className={`text-[14.5px] font-semibold text-[#0F172A] ${geist.className}`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`mt-1 text-[13.5px] leading-relaxed text-[#64748B] ${inter.className}`}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===============================================
              RIGHT — the form
          ================================================ */}

          <div
            className="rounded-xl border bg-white p-7 sm:p-9 lg:p-10"
            style={{ borderColor: BORDER }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name + Email */}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full name"
                  placeholder="Your full name"
                  required
                  value={form.name}
                  onChange={(value) =>
                    setForm((f) => ({ ...f, name: value }))
                  }
                />

                <Field
                  label="Work email"
                  placeholder="you@company.com"
                  type="email"
                  required
                  value={form.email}
                  onChange={(value) =>
                    setForm((f) => ({ ...f, email: value }))
                  }
                />
              </div>

              {/* Phone + Country */}

              <div className={inter.className}>
                <Label required>Phone number</Label>

                <div className="grid gap-3 sm:grid-cols-[190px_1fr]">
                  {/* Country */}

                  <div ref={countryBoxRef} className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setCountryOpen((value) => !value);
                        setCountryTouched(true);
                      }}
                      className={`
                        flex
                        h-12
                        w-full
                        items-center
                        justify-between
                        rounded-lg
                        border
                        bg-white
                        px-3.5
                        text-left
                        text-[15px]
                        outline-none
                        transition-colors
                        duration-150
                        ${
                          countryOpen
                            ? "border-[#4338CA] ring-4 ring-[#4338CA]/10"
                            : countryTouched && !country
                            ? "border-red-400"
                            : "border-slate-300 hover:border-slate-400"
                        }
                        ${country ? "text-[#0F172A]" : "text-slate-400"}
                      `}
                    >
                      <span className="truncate">
                        {country
                          ? `${country.code} ${country.name}`
                          : "Country code"}
                      </span>

                      <ChevronDown
                        className={`ml-2 h-4 w-4 shrink-0 text-[#4338CA] transition-transform ${
                          countryOpen ? "rotate-180" : ""
                        }`}
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

                  <input
                    type="tel"
                    required
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className={inputClasses}
                  />
                </div>

                {countryTouched && !country && (
                  <p className="mt-2 text-xs text-red-500">
                    Select a country code to continue.
                  </p>
                )}
              </div>

              {/* Company */}

              <Field
                label="Company"
                placeholder="Your company name"
                required
                value={form.company}
                onChange={(value) =>
                  setForm((f) => ({ ...f, company: value }))
                }
              />

              {/* Opportunity */}

              <div className={inter.className}>
                <Label required>Tell us about your opportunity</Label>
                <textarea
                  required
                  rows={5}
                  placeholder="What are you looking to build, improve, or solve..."
                  value={form.opportunity}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      opportunity: e.target.value,
                    }))
                  }
                  className={`${inputClasses} min-h-[140px] resize-none py-3 leading-6`}
                />
              </div>

              {/* How did you hear */}

              <div className={inter.className}>
                <Label required>How did you hear about us?</Label>

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
                    className={`${inputClasses} appearance-none pr-9`}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    {HEAR_ABOUT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4338CA]" />
                </div>
              </div>

              {/* Consent */}

              <label
                className={`flex cursor-pointer items-start gap-3 pt-1 ${inter.className}`}
              >
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

                <span className="text-[13.5px] leading-5 text-[#64748B]">
                  By checking this box, you consent to us storing and
                  processing the information above, in accordance with our{" "}
                  <a
                    href="/privacy-policy"
                    className="font-medium text-[#4338CA] underline underline-offset-2 transition hover:text-[#3730A3]"
                  >
                    Privacy Policy
                  </a>
                  .
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
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-[#4338CA]
                    text-[15px]
                    font-semibold
                    text-white
                    transition-colors
                    duration-150
                    hover:bg-[#3730A3]
                    sm:w-auto
                    sm:px-8
                    ${geist.className}
                  `}
                >
                  Send project brief
                  <ArrowRight
                    size={17}
                    strokeWidth={2.25}
                    className="transition-transform duration-150 group-hover:translate-x-0.5"
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