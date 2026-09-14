import Link from "next/link";

/* ===============================================================
   Privacy Policy — /privacy-policy
   Sections (per sitemap Page 44):
   484. Privacy policy content   -> Intro
   485. Data collection
   486. Use of information
   487. Cookies
   488. Third parties
   489. User rights
   490. Contact
================================================================ */

const DARK_BLUE = "#0b1747";
const INDIGO = "#3a3ff0";
const ALIGN = "mx-auto max-w-[900px] px-6 sm:px-10 lg:px-0";

const sections = [
  {
    id: "data-collection",
    title: "Data Collection",
    body: [
      "We collect information you provide directly to us, such as your name, email address, phone number, and company details when you fill out a contact form, request a proposal, subscribe to updates, or apply for a role with us.",
      "We also collect information automatically when you visit our website, including your IP address, browser type, device information, pages viewed, and the date and time of your visit, using cookies and similar technologies.",
    ],
  },
  {
    id: "use-of-information",
    title: "Use of Information",
    body: [
      "We use the information we collect to respond to your inquiries, provide the services you request, improve our website and offerings, communicate with you about updates and opportunities, and comply with our legal obligations.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    body: [
      "Our website uses cookies and similar technologies to remember your preferences, understand how visitors use our site, and improve your browsing experience. You can control or disable cookies through your browser settings at any time.",
      "For more detail on the specific types of cookies we use and how to manage them, see our ",
    ],
    trailingLink: { label: "Cookie Policy", href: "/cookie-policy" },
  },
  {
    id: "third-parties",
    title: "Third Parties",
    body: [
      "We may share information with trusted third party service providers who help us operate our website, deliver our services, and communicate with you, such as hosting providers, analytics platforms, and email service providers.",
      "These third parties are only permitted to use your information as necessary to provide services to us and are required to protect it in accordance with this policy.",
    ],
  },
  {
    id: "user-rights",
    title: "User Rights",
    body: [
      "Depending on your location, you may have the right to access, correct, update, or request deletion of your personal information, object to or restrict certain processing, and request a copy of the information we hold about you.",
      "To exercise any of these rights, please reach out to us using the contact details below and we will respond within a reasonable timeframe.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "If you have any questions about this Privacy Policy or how we handle your information, please contact us at privacy@starfii.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gradient-to-b from-white to-[#dbe6fb]">
      <section className="pb-10 pt-20 lg:pt-28">
        <div className={ALIGN}>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: INDIGO }}
          >
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-500">Privacy Policy</span>
          </nav>

          <h1
            className="mt-6 text-[36px] font-semibold leading-tight lg:text-[46px]"
            style={{ color: DARK_BLUE }}
          >
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-slate-600">
            How Starfii Technologies collects, uses and protects information.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Last updated: September 14, 2026
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className={ALIGN}>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 leading-relaxed text-slate-600 lg:p-12">
            <p>
              This Privacy Policy explains how Starfii Technologies
              (&ldquo;Starfii&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) collects, uses, discloses, and safeguards
              information when you visit our website or interact with our
              services. By using our website, you agree to the practices
              described in this policy.
            </p>

            <div className="mt-10 flex flex-col gap-10">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <h2
                    className="text-[22px] font-semibold"
                    style={{ color: DARK_BLUE }}
                  >
                    {section.title}
                  </h2>
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="mt-3 text-[15px]">
                      {paragraph}
                      {section.trailingLink && i === section.body.length - 1 && (
                        <Link
                          href={section.trailingLink.href}
                          className="font-semibold hover:underline"
                          style={{ color: INDIGO }}
                        >
                          {section.trailingLink.label}
                        </Link>
                      )}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}