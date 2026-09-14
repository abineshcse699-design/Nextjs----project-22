import Link from "next/link";

/* ===============================================================
   Cookie Policy — /cookie-policy

   Sections:
   498. Cookie overview
   499. Cookie categories
   500. Purpose
   501. Third-party cookies
   502. Consent controls
   503. Managing cookies
   504. Contact
================================================================ */

const DARK_BLUE = "#0b1747";
const INDIGO = "#3a3ff0";

/* EXACT GLOBAL SITE CONTAINER */
const ALIGN =
  "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const sections = [
  {
    id: "cookie-overview",
    number: "498",
    title: "Cookie Overview",
    body: [
      "Cookies are small text files placed on your device when you visit a website. They help the website remember your preferences, understand how you interact with it, and improve your overall experience.",
    ],
  },
  {
    id: "cookie-categories",
    number: "499",
    title: "Cookie Categories",
    body: [
      "We use the following categories of cookies on our website: essential cookies required for the site to function, performance cookies that help us understand site usage, functional cookies that remember your preferences, and marketing cookies that help us deliver more relevant content.",
    ],
  },
  {
    id: "purpose",
    number: "500",
    title: "Purpose",
    body: [
      "Cookies allow us to keep our website secure, remember choices you make while browsing, measure and improve site performance, and understand which content and services are most useful to our visitors.",
    ],
  },
  {
    id: "third-party-cookies",
    number: "501",
    title: "Third Party Cookies",
    body: [
      "Some cookies on our website are placed by third party services we use, such as analytics and marketing platforms. These third parties may use cookies to collect information about your visits to our site and other websites.",
      "We do not control these third party cookies directly. Please review the respective third party's privacy and cookie policies for more information.",
    ],
  },
  {
    id: "consent-controls",
    number: "502",
    title: "Consent Controls",
    body: [
      "Where required by law, we will ask for your consent before placing non essential cookies on your device. You can change or withdraw your consent at any time through our cookie preference settings or your browser controls.",
    ],
  },
  {
    id: "managing-cookies",
    number: "503",
    title: "Managing Cookies",
    body: [
      "Most web browsers allow you to control cookies through their settings, including blocking or deleting cookies. Please note that disabling certain cookies may affect the functionality of our website.",
      "For more on how we handle your information more broadly, see our ",
    ],
    trailingLink: {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
  },
  {
    id: "contact",
    number: "504",
    title: "Contact",
    body: [
      "If you have any questions about how we use cookies, please contact us at privacy@starfii.com.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#dbe6fb]">
      {/* =========================================================
          HEADER
      ========================================================== */}
      <section className="pb-12 pt-20 lg:pb-16 lg:pt-28">
        <div className={ALIGN}>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: INDIGO }}
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#0b1747] hover:underline"
            >
              Home
            </Link>

            <span className="text-slate-400">/</span>

            <span className="text-slate-500">
              Cookie Policy
            </span>
          </nav>

          <h1
            className="mt-6 text-[40px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[48px] lg:text-[56px]"
            style={{ color: DARK_BLUE }}
          >
            Cookie Policy
          </h1>

          <p className="mt-5 max-w-3xl text-[17px] leading-8 text-slate-600 sm:text-[18px]">
            How Starfii uses cookies and similar technologies
            across its digital properties.
          </p>

          <p className="mt-5 text-sm text-slate-500">
            Last updated: September 14, 2026
          </p>
        </div>
      </section>

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <section className="pb-24 lg:pb-32">
        <div className={ALIGN}>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.18)]">
            {/* Intro */}
            <div className="border-b border-slate-100 bg-slate-50/70 p-7 sm:p-10 lg:p-12">
              <p className="max-w-5xl text-[15px] leading-8 text-slate-600 sm:text-[16px]">
                This Cookie Policy explains how Starfii Technologies
                uses cookies and similar tracking technologies on our
                website. By continuing to use our website, you consent
                to our use of cookies as described here, unless you have
                disabled them through your browser settings.
              </p>
            </div>

            {/* Sections */}
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="flex flex-col divide-y divide-slate-100">
                {sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24 py-9 first:pt-0 last:pb-0"
                  >
                    <div className="grid gap-6 lg:grid-cols-[100px_1fr]">
                      {/* Section number */}
                      <div>
                        <span className="text-[13px] font-semibold tracking-wide text-[#3a3ff0]">
                          {section.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div>
                        <h2
                          className="text-[24px] font-semibold leading-tight tracking-[-0.02em]"
                          style={{ color: DARK_BLUE }}
                        >
                          {section.title}
                        </h2>

                        <div className="mt-4 space-y-4">
                          {section.body.map(
                            (paragraph, i) => (
                              <p
                                key={i}
                                className="max-w-5xl text-[15px] leading-8 text-slate-600"
                              >
                                {paragraph}

                                {section.trailingLink &&
                                  i ===
                                    section.body.length - 1 && (
                                    <Link
                                      href={
                                        section.trailingLink.href
                                      }
                                      className="font-semibold transition-colors hover:underline"
                                      style={{
                                        color: INDIGO,
                                      }}
                                    >
                                      {
                                        section.trailingLink
                                          .label
                                      }
                                    </Link>
                                  )}
                              </p>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}