"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";

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

/* =========================================================
   FIELD COMPONENT
   Each field is numbered like a line item on a spec sheet —
   the form reads as an ordered brief, not a generic card.
========================================================= */

function Field({
  index,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  index: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="group">
      <label className="mb-2 flex items-baseline gap-2.5">
        <span className="font-mono text-[11px] text-slate-400">
          {index}
        </span>

        <span className="text-[13px] font-medium tracking-wide text-[#172554]">
          {label}
          {required && <span className="ml-1 text-[#4F46E5]">*</span>}
        </span>
      </label>

      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-[58px]
          w-full
          border-b-2
          border-slate-200
          bg-transparent
          px-1
          text-[15px]
          text-[#0F172A]
          outline-none
          transition-colors
          duration-200
          placeholder:text-slate-400
          hover:border-slate-300
          focus:border-[#4F46E5]
        "
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

  const [status, setStatus] = useState<
    "idle" | "error" | "success"
  >("idle");

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
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
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

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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
      setErrorMessage(
        "Accept the privacy policy to send your brief."
      );
      setStatus("error");
      return;
    }

    /*
      Connect your real API here.

      Example:

      await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          country,
        }),
      });
    */

    setStatus("success");
  };

  return (
    <section
      id="form"
      className="
        relative
        bg-[#FAFAF8]
        px-6
        py-20
        sm:px-10
        lg:px-16
        lg:py-28
      "
    >
      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1520px]
          overflow-hidden
          rounded-md
          border
          border-slate-200
          bg-white
          shadow-[0_1px_2px_rgba(15,23,42,0.04)]
          lg:grid
          lg:grid-cols-[0.82fr_1.18fr]
        "
      >
        {/* ===================================================
            LEFT PANEL — the brief
        ==================================================== */}

        <div
          className="
            relative
            overflow-hidden
            bg-[#0B0E1A]
            px-7
            py-12
            sm:px-10
            sm:py-14
            lg:min-h-[760px]
            lg:px-12
            lg:py-16
            xl:px-16
          "
        >
          {/* Fine grid texture — quiet, no glow */}

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.05]
              [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)]
              [background-size:40px_40px]
            "
          />

          <div className="relative z-10 flex h-full flex-col">
            {/* Status line */}

            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A78BFA] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A78BFA]" />
              </span>

              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
                Accepting new briefs
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                mt-8
                max-w-[520px]
                font-serif
                text-[40px]
                font-medium
                leading-[1.08]
                tracking-[-0.02em]
                text-white
                sm:text-[48px]
                lg:text-[52px]
              "
            >
              Your Goals Are{" "}
              <span className="italic text-[#A78BFA]">
                Closer
              </span>{" "}
              Than You Think.
            </h2>

            <p
              className="
                mt-6
                max-w-[440px]
                text-[15px]
                leading-7
                text-white/55
                sm:text-base
              "
            >
              Tell us what you are building, where you want to
              go, and what is standing in the way. A real
              engineer reads every brief.
            </p>

            {/* Index of what happens next — a genuine sequence */}

            <div className="mt-auto hidden pt-16 lg:block">
              <div className="h-px w-full bg-white/10" />

              <div className="divide-y divide-white/10">
                {[
                  {
                    n: "01",
                    text: "Share the brief — what you're building and where it's stuck.",
                  },
                  {
                    n: "02",
                    text: "We reply within one business day, from an engineer, not a bot.",
                  },
                  {
                    n: "03",
                    text: "We scope a pilot before you make any long commitment.",
                  },
                ].map((item) => (
                  <div
                    key={item.n}
                    className="flex items-baseline gap-4 py-5"
                  >
                    <span className="font-mono text-xs text-white/30">
                      {item.n}
                    </span>

                    <span className="text-sm leading-6 text-white/65">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            RIGHT PANEL — the form
        ==================================================== */}

        <div
          className="
            relative
            bg-white
            px-6
            py-10
            sm:px-10
            sm:py-12
            lg:px-12
            lg:py-14
            xl:px-16
          "
        >
          {/* Small top heading */}

          <div className="mb-9">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-[#4F46E5]">
              Project brief
            </p>

            <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[#0B1747]">
              Tell us what you&apos;re building.
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Six fields, two minutes. Every brief gets a
              reply from someone who can actually build it.
            </p>
          </div>

          {/* =================================================
              FORM
          ================================================== */}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            {/* Name + Email */}

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                index="01"
                label="Name"
                placeholder="Your full name"
                required
                value={form.name}
                onChange={(value) =>
                  setForm((f) => ({
                    ...f,
                    name: value,
                  }))
                }
              />

              <Field
                index="02"
                label="Email address"
                placeholder="you@company.com"
                type="email"
                required
                value={form.email}
                onChange={(value) =>
                  setForm((f) => ({
                    ...f,
                    email: value,
                  }))
                }
              />
            </div>

            {/* Phone + Country */}

            <div>
              <label className="mb-2 flex items-baseline gap-2.5">
                <span className="font-mono text-[11px] text-slate-400">
                  03
                </span>

                <span className="text-[13px] font-medium tracking-wide text-[#172554]">
                  Phone number
                  <span className="ml-1 text-[#4F46E5]">*</span>
                </span>
              </label>

              <div className="grid gap-4 sm:grid-cols-[190px_1fr]">
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
                      h-[58px]
                      w-full
                      items-center
                      justify-between
                      border-b-2
                      bg-transparent
                      px-1
                      text-left
                      text-[15px]
                      outline-none
                      transition-colors
                      duration-200
                      ${
                        countryOpen
                          ? "border-[#4F46E5]"
                          : countryTouched && !country
                          ? "border-red-400"
                          : "border-slate-200 hover:border-slate-300"
                      }
                      ${
                        country ? "text-[#0F172A]" : "text-slate-400"
                      }
                    `}
                  >
                    <span className="truncate">
                      {country
                        ? `${country.code} ${country.name}`
                        : "Country code"}
                    </span>

                    <ChevronDown
                      className={`
                        ml-2
                        h-4
                        w-4
                        shrink-0
                        text-[#4F46E5]
                        transition-transform
                        ${countryOpen ? "rotate-180" : ""}
                      `}
                    />
                  </button>

                  {countryOpen && (
                    <div
                      className="
                        absolute
                        left-0
                        top-[calc(100%+8px)]
                        z-50
                        w-full
                        min-w-[280px]
                        overflow-hidden
                        rounded-md
                        border
                        border-slate-200
                        bg-white
                        shadow-[0_20px_50px_rgba(15,23,42,0.15)]
                      "
                    >
                      <div className="border-b border-slate-100 p-2">
                        <input
                          autoFocus
                          value={countrySearch}
                          onChange={(e) =>
                            setCountrySearch(e.target.value)
                          }
                          placeholder="Search country..."
                          className="
                            h-10
                            w-full
                            rounded
                            bg-slate-50
                            px-3
                            text-sm
                            text-slate-800
                            outline-none
                            ring-1
                            ring-transparent
                            focus:ring-[#4F46E5]/30
                          "
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
                              className="
                                flex
                                w-full
                                items-center
                                justify-between
                                rounded
                                px-3
                                py-2.5
                                text-left
                                text-sm
                                text-[#0F172A]
                                transition
                                hover:bg-indigo-50
                              "
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
                    setForm((f) => ({
                      ...f,
                      phone: e.target.value,
                    }))
                  }
                  className="
                    h-[58px]
                    w-full
                    border-b-2
                    border-slate-200
                    bg-transparent
                    px-1
                    text-[15px]
                    text-[#0F172A]
                    outline-none
                    transition-colors
                    duration-200
                    placeholder:text-slate-400
                    hover:border-slate-300
                    focus:border-[#4F46E5]
                  "
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
              index="04"
              label="Company"
              placeholder="Your company name"
              required
              value={form.company}
              onChange={(value) =>
                setForm((f) => ({
                  ...f,
                  company: value,
                }))
              }
            />

            {/* Opportunity */}

            <div>
              <label className="mb-2 flex items-baseline gap-2.5">
                <span className="font-mono text-[11px] text-slate-400">
                  05
                </span>

                <span className="text-[13px] font-medium tracking-wide text-[#172554]">
                  Tell us about your opportunity
                  <span className="ml-1 text-[#4F46E5]">*</span>
                </span>
              </label>

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
                className="
                  min-h-[145px]
                  w-full
                  resize-none
                  border-b-2
                  border-slate-200
                  bg-transparent
                  px-1
                  py-2
                  text-[15px]
                  leading-6
                  text-[#0F172A]
                  outline-none
                  transition-colors
                  duration-200
                  placeholder:text-slate-400
                  hover:border-slate-300
                  focus:border-[#4F46E5]
                "
              />
            </div>

            {/* How did you hear */}

            <div>
              <label className="mb-2 flex items-baseline gap-2.5">
                <span className="font-mono text-[11px] text-slate-400">
                  06
                </span>

                <span className="text-[13px] font-medium tracking-wide text-[#172554]">
                  How did you hear about us?
                  <span className="ml-1 text-[#4F46E5]">*</span>
                </span>
              </label>

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
                  className="
                    h-[58px]
                    w-full
                    appearance-none
                    border-b-2
                    border-slate-200
                    bg-transparent
                    px-1
                    pr-8
                    text-[15px]
                    text-[#0F172A]
                    outline-none
                    transition-colors
                    duration-200
                    hover:border-slate-300
                    focus:border-[#4F46E5]
                  "
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

                <ChevronDown
                  className="
                    pointer-events-none
                    absolute
                    right-1
                    top-1/2
                    h-4
                    w-4
                    -translate-y-1/2
                    text-[#4F46E5]
                  "
                />
              </div>
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
                  className="
                    peer
                    absolute
                    inset-0
                    h-full
                    w-full
                    cursor-pointer
                    opacity-0
                  "
                />

                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-[4px]
                    border
                    border-slate-300
                    bg-white
                    transition
                    peer-checked:border-[#0B0E1A]
                    peer-checked:bg-[#0B0E1A]
                  "
                >
                  {form.consent && (
                    <Check className="h-3.5 w-3.5 text-white" />
                  )}
                </span>
              </span>

              <span className="text-[13px] leading-5 text-slate-500">
                By checking this box, you consent to us storing
                and processing the information above, in
                accordance with our{" "}
                <a
                  href="/privacy-policy"
                  className="
                    font-medium
                    text-[#4F46E5]
                    underline
                    underline-offset-2
                    transition
                    hover:text-[#3730A3]
                  "
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            {/* Status */}

            {status === "error" && (
              <div className="rounded-md border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {errorMessage}
              </div>
            )}

            {status === "success" && (
              <div className="rounded-md border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-600">
                Brief received — expect a reply within one
                business day.
              </div>
            )}

            {/* Submit */}

            <div className="pt-1">
              <button
                type="submit"
                className="
                  group
                  inline-flex
                  h-[58px]
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-md
                  bg-[#0B0E1A]
                  font-mono
                  text-[13px]
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#4F46E5]
                  sm:w-auto
                  sm:px-9
                "
              >
                Send project brief

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}