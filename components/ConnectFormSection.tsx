"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, RotateCw, Volume2, Upload, ArrowUpRight } from "lucide-react";

/**
 * ConnectFormSection
 * -------------------
 * "Your Goals Are Closer Than You Think." lead-capture form:
 * Name / Email, searchable Country-code select + Phone + Company,
 * opportunity textarea, "how did you hear about us" select,
 * RFP/RFI file upload, a lightweight canvas captcha, consent checkbox,
 * and a submit button.
 *
 * Wire up onSubmitLead (below) to your real API route / CRM endpoint.
 */

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

function generateCaptcha(length = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  let out = "";
  for (let i = 0; i < length; i++) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

export default function ConnectFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    opportunity: "",
    hearAbout: "",
    captchaInput: "",
    consent: false,
  });

  const [country, setCountry] = useState<{ code: string; name: string } | null>(null);
  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryBoxRef = useRef<HTMLDivElement>(null);

  const [fileName, setFileName] = useState<string | null>(null);
  const [captcha, setCaptcha] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [countryTouched, setCountryTouched] = useState(false);

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (countryBoxRef.current && !countryBoxRef.current.contains(e.target as Node)) {
        setCountryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = useMemo(() => {
    const q = countrySearch.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      (c) => c.name.toLowerCase().includes(q) || c.code.includes(q)
    );
  }, [countrySearch]);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setForm((f) => ({ ...f, captchaInput: "" }));
  };

  const playCaptcha = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance(captcha.split("").join(" "));
    utterance.rate = 0.8;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      setErrorMessage("Please accept the privacy policy to continue.");
      setStatus("error");
      return;
    }
    if (form.captchaInput.trim() !== captcha) {
      setErrorMessage("The characters you entered don't match. Please try again.");
      setStatus("error");
      refreshCaptcha();
      return;
    }

    // TODO: replace with your real submit endpoint, e.g.:
    // await fetch("/api/lead", { method: "POST", body: JSON.stringify({ ...form, country }) });

    setStatus("success");
  };

  return (
    <section
      id="form"
      className="relative overflow-hidden bg-white px-6 py-24 md:px-16 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[440px] w-[440px] rounded-full bg-gradient-to-br from-indigo-200 via-fuchsia-100 to-sky-200 opacity-60 blur-3xl"
      />

      <div className="relative grid gap-14 md:grid-cols-[minmax(0,320px)_1fr] md:gap-20">
        <div>
          <h2 className="text-4xl font-semibold leading-[1.15] tracking-tight text-[#0b1747] md:text-5xl">
            Your Goals Are Closer Than You Think.
          </h2>
          <p className="mt-6 text-sm font-medium text-[#3a3ff0]">Connect Now</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Name*"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full rounded-xl bg-[#eef0f4] px-5 py-5 text-base text-[#0b1747] placeholder:text-slate-400 outline-none ring-1 ring-transparent transition focus:ring-[#3a3ff0]"
            />
            <input
              type="email"
              placeholder="Email address*"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full rounded-xl bg-[#eef0f4] px-5 py-5 text-base text-[#0b1747] placeholder:text-slate-400 outline-none ring-1 ring-transparent transition focus:ring-[#3a3ff0]"
            />
          </div>

          <div>
            <label className="mb-2 block text-base text-[#0b1747]">Country code*</label>
            <div className="grid gap-5 sm:grid-cols-[170px_1fr_1fr]">
              {/* searchable country-code combobox */}
              <div ref={countryBoxRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setCountryOpen((v) => !v);
                    setCountryTouched(true);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl bg-[#eef0f4] px-5 py-5 text-left text-base outline-none ring-1 transition ${
                    countryOpen
                      ? "ring-[#3a3ff0]"
                      : countryTouched && !country
                      ? "ring-red-500"
                      : "ring-transparent"
                  } ${country ? "text-[#0b1747]" : "text-slate-400"}`}
                >
                  {country ? `${country.code} ${country.name}` : "Country*"}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#3a3ff0] transition-transform duration-300 ${
                      countryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {countryTouched && !country && !countryOpen && (
                  <p className="mt-1.5 text-sm text-red-500">Please select country.</p>
                )}

                {countryOpen && (
                  <div className="absolute left-0 top-[calc(100%+6px)] z-20 w-72 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                    <input
                      autoFocus
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      placeholder="Search country..."
                      className="w-full border-b border-slate-200 px-4 py-2.5 text-sm text-[#0b1747] outline-none placeholder:text-slate-400"
                    />
                    <ul className="max-h-56 overflow-y-auto py-1">
                      {filteredCountries.length === 0 && (
                        <li className="px-4 py-2.5 text-sm text-slate-400">No matches</li>
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
                            className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-[#0b1747] transition-colors hover:bg-[#eef0f4]"
                          >
                            <span>{c.name}</span>
                            <span className="text-slate-400">{c.code}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <input
                type="tel"
                placeholder="Phone number*"
                required
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className="w-full rounded-xl bg-[#eef0f4] px-5 py-5 text-base text-[#0b1747] placeholder:text-slate-400 outline-none ring-1 ring-transparent transition focus:ring-[#3a3ff0]"
              />
              <input
                type="text"
                placeholder="Company*"
                required
                value={form.company}
                onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                className="w-full rounded-xl bg-[#eef0f4] px-5 py-5 text-base text-[#0b1747] placeholder:text-slate-400 outline-none ring-1 ring-transparent transition focus:ring-[#3a3ff0]"
              />
            </div>
          </div>

          <textarea
            placeholder="Tell us about your opportunity*"
            required
            rows={4}
            value={form.opportunity}
            onChange={(e) => setForm((f) => ({ ...f, opportunity: e.target.value }))}
            className="w-full resize-y rounded-xl bg-[#eef0f4] px-5 py-5 text-base text-[#0b1747] placeholder:text-slate-400 outline-none ring-1 ring-transparent transition focus:ring-[#3a3ff0]"
          />

          <div className="relative">
            <select
              required
              value={form.hearAbout}
              onChange={(e) => setForm((f) => ({ ...f, hearAbout: e.target.value }))}
              className="w-full appearance-none rounded-xl bg-[#eef0f4] px-5 py-5 text-base text-[#0b1747] outline-none ring-1 ring-transparent transition focus:ring-[#3a3ff0]"
            >
              <option value="" disabled>
                How did you hear about us?*
              </option>
              {HEAR_ABOUT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#3a3ff0]" />
          </div>

          <div>
            <label className="mb-2 block text-base text-[#0b1747]">
              Upload your RFP/RFI document (maximum file size: 10 MB)
            </label>
            <label className="flex w-full cursor-pointer items-center justify-between rounded-xl bg-[#eef0f4] px-5 py-5 text-base text-slate-400 outline-none ring-1 ring-transparent transition hover:ring-[#3a3ff0]">
              <span className={fileName ? "text-[#0b1747]" : ""}>
                {fileName ?? "Accepted file formats: .xlsx, .xls, .doc, .docx, .pdf, .rtf, .zip, .rar"}
              </span>
              <Upload className="h-5 w-5 shrink-0 text-[#3a3ff0]" />
              <input
                type="file"
                accept=".xlsx,.xls,.doc,.docx,.pdf,.rtf,.zip,.rar"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
            </label>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <div className="flex h-28 w-full items-center justify-center gap-3 rounded-xl bg-[#dbe7fb] px-5 sm:w-72">
              <span
                className="select-none text-3xl font-semibold italic tracking-wider text-[#2b3fbf]"
                style={{ letterSpacing: "0.08em" }}
              >
                {captcha}
              </span>
              <div className="ml-auto flex flex-col gap-2">
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  aria-label="Refresh captcha"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0b1747] shadow-sm transition hover:bg-slate-50"
                >
                  <RotateCw className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={playCaptcha}
                  aria-label="Play captcha audio"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0b1747] shadow-sm transition hover:bg-slate-50"
                >
                  <Volume2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            <input
              type="text"
              placeholder="Enter captcha*"
              required
              value={form.captchaInput}
              onChange={(e) => setForm((f) => ({ ...f, captchaInput: e.target.value }))}
              className="w-full rounded-xl bg-[#eef0f4] px-5 py-5 text-base text-[#0b1747] placeholder:text-slate-400 outline-none ring-1 ring-transparent transition focus:ring-[#3a3ff0]"
            />
          </div>

          <label className="flex items-start gap-3 text-base text-[#0b1747]">
            <input
              type="checkbox"
              required
              checked={form.consent}
              onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-[#3a3ff0] focus:ring-[#3a3ff0]"
            />
            <span>
              By checking this box, you consent us to store and process the
              information provided in accordance with our terms of{" "}
              <a href="/privacy-policy" className="underline underline-offset-2 hover:text-[#3a3ff0]">
                Privacy Policy
              </a>
              *
            </span>
          </label>

          {status === "error" && (
            <p className="text-sm font-medium text-red-600">{errorMessage}</p>
          )}
          {status === "success" && (
            <p className="text-sm font-medium text-emerald-600">
              Thanks — we've received your message and will be in touch shortly.
            </p>
          )}

          <button
            type="submit"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-[#3a3ff0] px-9 py-5 text-base font-semibold text-white transition-colors hover:bg-[#2c30c9]"
          >
            Submit
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </form>
      </div>
    </section>
  );
}