
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Sparkles } from "lucide-react";

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
   INPUT COMPONENT
========================================================= */

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
    <div className="group">
      <label className="mb-2.5 block text-[13px] font-medium tracking-wide text-[#172554]">
        {label}
        {required && <span className="ml-1 text-[#4F46E5]">*</span>}
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
          rounded-2xl
          border
          border-slate-200
          bg-slate-50/70
          px-5
          text-[15px]
          text-[#0F172A]
          outline-none
          transition-all
          duration-300
          placeholder:text-slate-400
          hover:border-slate-300
          hover:bg-white
          focus:border-[#4F46E5]
          focus:bg-white
          focus:ring-4
          focus:ring-[#4F46E5]/10
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
      setErrorMessage("Please select a country code.");
      setStatus("error");
      return;
    }

    if (!form.consent) {
      setErrorMessage(
        "Please accept the privacy policy to continue."
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
        overflow-hidden
        bg-[#F6F7FB]
        px-5
        py-20
        sm:px-8
        md:px-12
        lg:px-16
        lg:py-28
        xl:px-20
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-300/20
          blur-[120px]
        "
      />

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-300/20
          blur-[130px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1440px]
          overflow-hidden
          rounded-[32px]
          bg-white
          shadow-[0_30px_100px_rgba(15,23,42,0.10)]
          lg:grid
          lg:grid-cols-[0.82fr_1.18fr]
        "
      >
        {/* ===================================================
            LEFT BRAND PANEL
        ==================================================== */}

        <div
          className="
            relative
            overflow-hidden
            bg-[#080D2B]
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
          {/* Grid texture */}

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.08]
              [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)]
              [background-size:44px_44px]
            "
          />

          {/* Glow */}

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-[420px]
              w-[420px]
              rounded-full
              bg-indigo-500/30
              blur-[110px]
            "
          />

          <div
            aria-hidden
            className="
              pointer-events-none
              absolute
              -bottom-40
              -left-20
              h-[380px]
              w-[380px]
              rounded-full
              bg-violet-600/20
              blur-[110px]
            "
          />

          <div className="relative z-10 flex h-full flex-col">
            {/* Badge */}

            <div
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/[0.07]
                px-4
                py-2
                backdrop-blur-md
              "
            >
              <Sparkles className="h-3.5 w-3.5 text-violet-300" />

              <span
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-white/70
                "
              >
                Connect With Us
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                mt-8
                max-w-[520px]
                text-[42px]
                font-medium
                leading-[1.04]
                tracking-[-0.035em]
                text-white
                sm:text-[52px]
                lg:text-[56px]
                xl:text-[62px]
              "
            >
              Your Goals Are
              <br />
              <span className="text-violet-300">
                Closer
              </span>{" "}
              Than You Think.
            </h2>

            <p
              className="
                mt-7
                max-w-[470px]
                text-[15px]
                leading-7
                text-white/60
                sm:text-base
              "
            >
              Tell us what you are building, where you want
              to go, and what is standing in the way. Our team
              will help you find the right path forward.
            </p>

            {/* Bottom info */}

            <div className="mt-auto hidden pt-16 lg:block">
              <div className="h-px w-full bg-white/10" />

              <div className="mt-7 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-2xl font-semibold text-white">
                    01
                  </p>

                  <p className="mt-1 text-sm text-white/45">
                    Share your challenge
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-semibold text-white">
                    02
                  </p>

                  <p className="mt-1 text-sm text-white/45">
                    Start the conversation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            RIGHT FORM PANEL
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
              Connect Now
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#0B1747]">
              Let's build something meaningful.
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Fill in the details below and our team will get
              back to you.
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

            {/* Phone + Company */}

            <div>
              <label className="mb-2.5 block text-[13px] font-medium tracking-wide text-[#172554]">
                Phone number
                <span className="ml-1 text-[#4F46E5]">
                  *
                </span>
              </label>

              <div className="grid gap-4 sm:grid-cols-[190px_1fr]">
                {/* Country */}

                <div
                  ref={countryBoxRef}
                  className="relative"
                >
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
                      rounded-2xl
                      border
                      bg-slate-50/70
                      px-5
                      text-left
                      text-[15px]
                      outline-none
                      transition-all
                      duration-300
                      hover:bg-white
                      ${
                        countryOpen
                          ? "border-[#4F46E5] bg-white ring-4 ring-[#4F46E5]/10"
                          : countryTouched && !country
                          ? "border-red-400"
                          : "border-slate-200"
                      }
                      ${
                        country
                          ? "text-[#0F172A]"
                          : "text-slate-400"
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
                        ${
                          countryOpen
                            ? "rotate-180"
                            : ""
                        }
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
                        rounded-2xl
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
                            setCountrySearch(
                              e.target.value
                            )
                          }
                          placeholder="Search country..."
                          className="
                            h-10
                            w-full
                            rounded-xl
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
                          <li
                            key={`${c.code}-${c.name}`}
                          >
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
                                rounded-xl
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
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50/70
                    px-5
                    text-[15px]
                    text-[#0F172A]
                    outline-none
                    transition-all
                    placeholder:text-slate-400
                    hover:border-slate-300
                    hover:bg-white
                    focus:border-[#4F46E5]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#4F46E5]/10
                  "
                />
              </div>

              {countryTouched && !country && (
                <p className="mt-2 text-xs text-red-500">
                  Please select a country code.
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
                setForm((f) => ({
                  ...f,
                  company: value,
                }))
              }
            />

            {/* Opportunity */}

            <div>
              <label className="mb-2.5 block text-[13px] font-medium tracking-wide text-[#172554]">
                Tell us about your opportunity
                <span className="ml-1 text-[#4F46E5]">
                  *
                </span>
              </label>

              <textarea
                required
                rows={5}
                placeholder="Tell us what you're looking to build, improve, or solve..."
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
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50/70
                  px-5
                  py-4
                  text-[15px]
                  leading-6
                  text-[#0F172A]
                  outline-none
                  transition-all
                  placeholder:text-slate-400
                  hover:border-slate-300
                  hover:bg-white
                  focus:border-[#4F46E5]
                  focus:bg-white
                  focus:ring-4
                  focus:ring-[#4F46E5]/10
                "
              />
            </div>

            {/* How did you hear */}

            <div>
              <label className="mb-2.5 block text-[13px] font-medium tracking-wide text-[#172554]">
                How did you hear about us?
                <span className="ml-1 text-[#4F46E5]">
                  *
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
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50/70
                    px-5
                    pr-12
                    text-[15px]
                    text-[#0F172A]
                    outline-none
                    transition-all
                    hover:border-slate-300
                    hover:bg-white
                    focus:border-[#4F46E5]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#4F46E5]/10
                  "
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  {HEAR_ABOUT_OPTIONS.map((option) => (
                    <option
                      key={option}
                      value={option}
                    >
                      {option}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  className="
                    pointer-events-none
                    absolute
                    right-5
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

            <label className="flex cursor-pointer items-start gap-3">
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
                    rounded-md
                    border
                    border-slate-300
                    bg-white
                    transition
                    peer-checked:border-[#4F46E5]
                    peer-checked:bg-[#4F46E5]
                  "
                >
                  {form.consent && (
                    <Check className="h-3.5 w-3.5 text-white" />
                  )}
                </span>
              </span>

              <span className="text-[13px] leading-5 text-slate-500">
                By checking this box, you consent us to store
                and process the information provided in
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
              <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {errorMessage}
              </div>
            )}

            {status === "success" && (
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-600">
                Thanks — we've received your message and
                will be in touch shortly.
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
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-[#4F46E5]
                  px-8
                  text-[15px]
                  font-semibold
                  text-white
                  shadow-[0_12px_30px_rgba(79,70,229,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#4338CA]
                  hover:shadow-[0_18px_40px_rgba(79,70,229,0.30)]
                  active:translate-y-0
                "
              >
                Start a Conversation

                <ArrowUpRight
                  className="
                    h-5
                    w-5
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

