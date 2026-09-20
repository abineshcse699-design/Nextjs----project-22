//  Contact page
//  Location: app/contactpage/ContactPage.tsx
//
//  app/contactpage/page.tsx:
//    import ContactPage from "./ContactPage";
//    export default function Page() { return <ContactPage />; }

"use client";

import Link from "next/link";
import {
  useRef,
  useState,
  useEffect,
  type Ref,
  type ElementType,
  type ReactNode,
  type ReactElement,
  type HTMLAttributes,
} from "react";
import {
  ChevronDown,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
} from "lucide-react";

/* ===============================================================
   BRAND TOKENS
================================================================ */
const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";
const FIELD_BG = "#EEF0F5";
const ERROR_RED = "#E11D2E";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";
const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

/* ===============================================================
   CONTENT — edit these to match your real details
================================================================ */
const countryCodes = [
  { code: "+91", label: "India (+91)" },
  { code: "+1", label: "United States (+1)" },
  { code: "+44", label: "United Kingdom (+44)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+971", label: "UAE (+971)" },
];

const hearAboutOptions = [
  "Search Engine",
  "Social Media",
  "Referral",
  "Event or Conference",
  "Blog or Article",
  "Other",
];

// TODO: replace with your real office details.
const offices = [
  {
    city: "Bengaluru, India",
    tag: "Headquarters",
    address: ["Add your street address,", "Area, Bengaluru,", "Karnataka 560001"],
    phone: "+91 00000 00000",
    email: "hello@starfii.com",
    hours: "Mon – Fri, 9:30 AM – 6:30 PM IST",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bengaluru",
  },

];

/* ===============================================================
   HOOK: reveal-on-scroll
================================================================ */
function useReveal<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

type RevealProps = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

function Reveal({ as, delay = 0, className = "", children, ...rest }: RevealProps): ReactElement {
  const Tag = (as ?? "div") as ElementType;
  const [ref, inView] = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={`cp-reveal ${inView ? "cp-in-view" : ""} ${className}`}
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ===============================================================
   GLOBAL STYLES
================================================================ */
function AnimationStyles(): ReactElement {
  return (
    <style>{`
      @keyframes cp-fade-up {
        from { opacity: 0; transform: translateY(28px) scale(0.97); }
        to   { opacity: 1; transform: translateY(0) scale(1); }
      }
      .cp-reveal { opacity: 0; }
      .cp-reveal.cp-in-view {
        animation: cp-fade-up 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }

      .cp-field {
        background-color: ${FIELD_BG};
        border: 1px solid transparent;
        transition: border-color 0.2s ease, background-color 0.2s ease;
      }
      .cp-field::placeholder { color: #6B7280; }
      .cp-field:focus,
      .cp-field:focus-within {
        outline: none;
        border-color: ${INDIGO_CTA};
        background-color: #FFFFFF;
      }
      .cp-field.cp-invalid,
      .cp-field.cp-invalid:focus,
      .cp-field.cp-invalid:focus-within {
        border-color: ${ERROR_RED};
      }

      @keyframes cp-error-in {
        from { opacity: 0; transform: translateY(-4px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .cp-error {
        color: ${ERROR_RED};
        animation: cp-error-in 0.2s ease-out;
      }

      .cp-submit svg { transition: transform 0.3s ease; }
      .cp-submit:hover svg { transform: translate(2px, -2px); }

      @media (prefers-reduced-motion: reduce) {
        .cp-reveal, .cp-error, .cp-submit svg { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; }
      }
    `}</style>
  );
}

/* ===============================================================
   FORM
================================================================ */
type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  hear: string;
};

type FieldKey = keyof FormValues | "consent";
type FormErrors = Partial<Record<FieldKey, string>>;

const EMPTY_MSG = "Please fill out this field.";

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  hear: "",
};

function validateField(key: FieldKey, values: FormValues, consent: boolean): string | undefined {
  if (key === "consent") return consent ? undefined : "Please accept the privacy policy to continue.";

  const value = values[key].trim();
  if (!value) return key === "hear" ? "Please select an option." : EMPTY_MSG;

  if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Please enter a valid email address.";
  }
  if (key === "phone" && !/^[0-9\s\-()]{6,15}$/.test(value)) {
    return "Please enter a valid phone number.";
  }
  return undefined;
}

const FIELD_KEYS: FieldKey[] = ["name", "email", "phone", "company", "message", "hear", "consent"];

function FieldError({ id, message }: { id: string; message?: string }): ReactElement | null {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="cp-error font-heading mt-2 text-[16px] font-normal leading-snug">
      {message}
    </p>
  );
}

function GetInTouchForm(): ReactElement {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [countryCode, setCountryCode] = useState(countryCodes[0]!.code);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const firstErrorRef = useRef<HTMLFormElement | null>(null);

  const setValue = (key: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    // Clear the error for this field as soon as the user starts fixing it.
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextErrors: FormErrors = {};
    FIELD_KEYS.forEach((key) => {
      const msg = validateField(key, values, consent);
      if (msg) nextErrors[key] = msg;
    });
    setErrors(nextErrors);

    const firstKey = FIELD_KEYS.find((k) => nextErrors[k]);
    if (firstKey) {
      // Scroll to and focus the first invalid field.
      const el = firstErrorRef.current?.querySelector<HTMLElement>(`[data-field="${firstKey}"]`);
      el?.focus();
      return;
    }

    // TODO: wire this up to your actual form endpoint / API route.
    setSubmitted(true);
  };

  const fieldClass = (key: FieldKey, extra = "") =>
    `cp-field font-body rounded-xl px-6 py-5 text-[15px] text-slate-800 ${
      errors[key] ? "cp-invalid" : ""
    } ${extra}`;

  if (submitted) {
    return (
      <div
        className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl p-10 text-center"
        style={{ backgroundColor: FIELD_BG }}
      >
        <CheckCircle2 size={48} style={{ color: INDIGO_CTA }} />
        <h3 className="font-heading mt-5 text-[24px] font-semibold" style={{ color: CHAMPION_BLUE }}>
          Thanks — message received
        </h3>
        <p className="font-body mt-3 max-w-sm text-[15px] leading-relaxed text-slate-600">
          Our team will get back to you shortly. We look forward to learning
          more about your opportunity.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={firstErrorRef}
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2"
    >
      {/* Name */}
      <div className="col-span-1">
        <input
          data-field="name"
          type="text"
          placeholder="Name*"
          value={values.name}
          onChange={(e) => setValue("name", e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "err-name" : undefined}
          className={`${fieldClass("name")} w-full`}
        />
        <FieldError id="err-name" message={errors.name} />
      </div>

      {/* Email */}
      <div className="col-span-1">
        <input
          data-field="email"
          type="email"
          placeholder="Email address*"
          value={values.email}
          onChange={(e) => setValue("email", e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "err-email" : undefined}
          className={`${fieldClass("email")} w-full`}
        />
        <FieldError id="err-email" message={errors.email} />
      </div>

      {/* Country code + phone */}
      <div className="col-span-1 sm:col-span-2">
        <label className="font-body mb-2 block text-[14px] font-medium" style={{ color: CHAMPION_BLUE }}>
          Country code*
        </label>
        <div className="grid grid-cols-[140px_1fr] gap-4">
          <div className="cp-field relative rounded-xl">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="font-body h-full w-full appearance-none rounded-xl bg-transparent px-5 py-5 text-[15px] text-slate-800 outline-none"
            >
              {countryCodes.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
              style={{ color: INDIGO_CTA }}
            />
          </div>
          <input
            data-field="phone"
            type="tel"
            placeholder="Phone number*"
            value={values.phone}
            onChange={(e) => setValue("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "err-phone" : undefined}
            className={fieldClass("phone")}
          />
        </div>
        <FieldError id="err-phone" message={errors.phone} />
      </div>

      {/* Company */}
      <div className="col-span-1 sm:col-span-2">
        <input
          data-field="company"
          type="text"
          placeholder="Company*"
          value={values.company}
          onChange={(e) => setValue("company", e.target.value)}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "err-company" : undefined}
          className={`${fieldClass("company")} w-full`}
        />
        <FieldError id="err-company" message={errors.company} />
      </div>

      {/* Message */}
      <div className="col-span-1 sm:col-span-2">
        <textarea
          data-field="message"
          rows={4}
          placeholder="Tell us about your opportunity*"
          value={values.message}
          onChange={(e) => setValue("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-message" : undefined}
          className={`${fieldClass("message")} w-full resize-y`}
        />
        <FieldError id="err-message" message={errors.message} />
      </div>

      {/* How did you hear about us */}
      <div className="col-span-1 sm:col-span-2">
        <div className={`cp-field relative rounded-xl ${errors.hear ? "cp-invalid" : ""}`}>
          <select
            data-field="hear"
            value={values.hear}
            onChange={(e) => setValue("hear", e.target.value)}
            aria-invalid={!!errors.hear}
            aria-describedby={errors.hear ? "err-hear" : undefined}
            className={`font-body h-full w-full appearance-none rounded-xl bg-transparent px-6 py-5 text-[15px] outline-none ${
              values.hear ? "text-slate-800" : "text-[#6B7280]"
            }`}
          >
            <option value="" disabled>
              How did you hear about us?*
            </option>
            {hearAboutOptions.map((opt) => (
              <option key={opt} value={opt} className="text-slate-800">
                {opt}
              </option>
            ))}
          </select>
          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2"
            style={{ color: INDIGO_CTA }}
          />
        </div>
        <FieldError id="err-hear" message={errors.hear} />
      </div>

      {/* Consent */}
      <div className="col-span-1 sm:col-span-2">
        <label className="font-body flex items-start gap-3 text-[14px] leading-relaxed text-slate-600">
          <input
            data-field="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
            }}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "err-consent" : undefined}
            className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-slate-300"
            style={{ accentColor: INDIGO_CTA }}
          />
          <span>
            By checking this box, you consent us to store and process the
            information provided in accordance with our{" "}
            <Link href="/policy" className="underline" style={{ color: INDIGO_CTA }}>
              Privacy Policy
            </Link>
            .*
          </span>
        </label>
        <FieldError id="err-consent" message={errors.consent} />
      </div>

      <button
        type="submit"
        className="cp-submit font-body col-span-1 mt-2 inline-flex w-fit items-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:scale-[1.03] sm:col-span-2"
        style={{ backgroundColor: INDIGO_CTA }}
      >
        Submit
        <ArrowUpRight size={17} />
      </button>
    </form>
  );
}

/* ===============================================================
   PAGE
================================================================ */
export default function ContactPage(): ReactElement {
  return (
    <main className="bg-white">
      <AnimationStyles />

      {/* ============================================================
          CONTACT — heading + form
          (top padding clears the fixed navbar)
      ============================================================ */}
      <section className={`${ALIGN} pb-20 pt-36 lg:pb-24 lg:pt-44`}>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[420px_1fr] lg:gap-16">
          <Reveal>
            <h1 className={SECTION_HEADING} style={{ color: CHAMPION_BLUE }}>
              Get in Touch
            </h1>
            <p className="font-body mt-5 max-w-sm text-[17px] leading-relaxed text-slate-600">
              Building an AI-led product, modernizing legacy systems, or
              rolling out ITSM? Tell us what you need and our engineers will
              review your requirements and reply within one business day.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div
              className="rounded-[28px] p-8 sm:p-10 lg:p-12"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8EAF2" }}
            >
              <GetInTouchForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          OUR OFFICES — addresses listed one below another
      ============================================================ */}
      <section className={`${ALIGN} pb-24`}>
        <div
          className="grid grid-cols-1 gap-10 border-t pt-16 lg:grid-cols-[420px_1fr] lg:gap-16"
          style={{ borderColor: "#E8EAF2" }}
        >
          {/* Left: heading + general contact info */}
          <Reveal>
            <h2 className={SECTION_HEADING} style={{ color: CHAMPION_BLUE }}>
              Our Offices
            </h2>
            <p className="font-body mt-5 max-w-sm text-[17px] leading-relaxed text-slate-600">
              Visit us or write to the team closest to you. We usually reply
              within one business day.
            </p>

            <dl className="font-body mt-10 flex flex-col gap-6 text-[15px]">
              <div>
                <dt className="text-[14px] font-semibold" style={{ color: CHAMPION_BLUE }}>
                  General enquiries
                </dt>
                <dd className="mt-1 text-slate-600">hello@starfii.com</dd>
              </div>
       
              <div>
                <dt className="text-[14px] font-semibold" style={{ color: CHAMPION_BLUE }}>
                  Careers
                </dt>
                <dd className="mt-1 text-slate-600">careers@starfii.com</dd>
              </div>
            </dl>
          </Reveal>

          {/* Right: offices one below another */}
          <div className="flex flex-col">
            {offices.map((office, i) => (
              <Reveal
                key={office.city}
                delay={i * 90}
                className={`py-10 first:pt-0 ${i !== offices.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: "#E8EAF2" }}
              >
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="mt-1 flex-shrink-0" style={{ color: INDIGO_CTA }} />
                  <div className="w-full">
                    <p className="font-body text-[14px] font-medium" style={{ color: INDIGO_CTA }}>
                      {office.tag}
                    </p>
                    <h3
                      className="font-heading mt-1 text-[22px] font-semibold"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {office.city}
                    </h3>

                    <address className="font-body mt-3 text-[16px] not-italic leading-relaxed text-slate-600">
                      {office.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>

                    <div className="font-body mt-5 flex flex-col gap-2.5 text-[15px] text-slate-600">
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="flex-shrink-0" style={{ color: INDIGO_CTA }} />
                        {office.phone}
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={16} className="flex-shrink-0" style={{ color: INDIGO_CTA }} />
                        {office.email}
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock size={16} className="flex-shrink-0" style={{ color: INDIGO_CTA }} />
                        {office.hours}
                      </div>
                    </div>

                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold hover:underline"
                      style={{ color: INDIGO_CTA }}
                    >
                      Get directions
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}