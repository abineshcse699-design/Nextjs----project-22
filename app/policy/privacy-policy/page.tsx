import Link from "next/link";

/* ===============================================================
   Privacy Policy — /privacy-policy

   Sections:
   484. Privacy policy content -> Intro
   485. Data collection
   486. Use of information
   487. Cookies
   488. Third parties
   489. User rights
   490. Contact
================================================================ */

const DARK_BLUE = "#0b1747";
const INDIGO = "#3a3ff0";

/* EXACT GLOBAL SITE CONTAINER */
const ALIGN =
  "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const sections = [
  {
    id: "data-collection",
    number: "485",
    title: "Data Collection",
    body: [
      "We collect information you provide directly to us, such as your name, email address, phone number, and company details when you fill out a contact form, request a proposal, subscribe to updates, or apply for a role with us.",
      "We also collect information automatically when you visit our website, including your IP address, browser type, device information, pages viewed, and the date and time of your visit, using cookies and similar technologies.",
    ],
  },
  {
    id: "use-of-information",
    number: "486",
    title: "Use of Information",
    body: [
      "We use the information we collect to respond to your inquiries, provide the services you request, improve our website and offerings, communicate with you about updates and opportunities, and comply with our legal obligations.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    id: "cookies",
    number: "487",
    title: "Cookies",
    body: [
      "Our website uses cookies and similar technologies to remember your preferences, understand how visitors use our site, and improve your browsing experience. You can control or disable cookies through your browser settings at any time.",
      "For more detail on the specific types of cookies we use and how to manage them, see our ",
    ],
    trailingLink: {
      label: "Cookie Policy",
      href: "/cookie-policy",
    },
  },
  {
    id: "third-parties",
    number: "488",
    title: "Third Parties",
    body: [
      "We may share information with trusted third party service providers who help us operate our website, deliver our services, and communicate with you, such as hosting providers, analytics platforms, and email service providers.",
      "These third parties are only permitted to use your information as necessary to provide services to us and are required to protect it in accordance with this policy.",
    ],
  },
  {
    id: "user-rights",
    number: "489",
    title: "User Rights",
    body: [
      "Depending on your location, you may have the right to access, correct, update, or request deletion of your personal information, object to or restrict certain processing, and request a copy of the information we hold about you.",
      "To exercise any of these rights, please reach out to us using the contact details below and we will respond within a reasonable timeframe.",
    ],
  },
  {
    id: "contact",
    number: "490",
    title: "Contact",
    body: [
      "If you have any questions about this Privacy Policy or how we handle your information, please contact us at privacy@starfii.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </span>
          </nav>

          <h1
            className="mt-6 text-[40px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[48px] lg:text-[56px]"
            style={{ color: DARK_BLUE }}
          >
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-3xl text-[17px] leading-8 text-slate-600 sm:text-[18px]">
            How Starfii Technologies collects, uses and protects
            information.
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
                This Privacy Policy explains how Starfii Technologies
                (&ldquo;Starfii&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects,
                uses, discloses, and safeguards information when you
                visit our website or interact with our services. By
                using our website, you agree to the practices described
                in this policy.
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
                      {/* Number */}
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