import Link from "next/link";

/* ===============================================================
   Cookie Policy — /cookie-policy
   Sections (per sitemap Page 46):
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
const ALIGN = "mx-auto max-w-[900px] px-6 sm:px-10 lg:px-0";

const sections = [
  {
    id: "cookie-overview",
    title: "Cookie Overview",
    body: [
      "Cookies are small text files placed on your device when you visit a website. They help the website remember your preferences, understand how you interact with it, and improve your overall experience.",
    ],
  },
  {
    id: "cookie-categories",
    title: "Cookie Categories",
    body: [
      "We use the following categories of cookies on our website: essential cookies required for the site to function, performance cookies that help us understand site usage, functional cookies that remember your preferences, and marketing cookies that help us deliver more relevant content.",
    ],
  },
  {
    id: "purpose",
    title: "Purpose",
    body: [
      "Cookies allow us to keep our website secure, remember choices you make while browsing, measure and improve site performance, and understand which content and services are most useful to our visitors.",
    ],
  },
  {
    id: "third-party-cookies",
    title: "Third Party Cookies",
    body: [
      "Some cookies on our website are placed by third party services we use, such as analytics and marketing platforms. These third parties may use cookies to collect information about your visits to our site and other websites.",
      "We do not control these third party cookies directly. Please review the respective third party's privacy and cookie policies for more information.",
    ],
  },
  {
    id: "consent-controls",
    title: "Consent Controls",
    body: [
      "Where required by law, we will ask for your consent before placing non essential cookies on your device. You can change or withdraw your consent at any time through our cookie preference settings or your browser controls.",
    ],
  },
  {
    id: "managing-cookies",
    title: "Managing Cookies",
    body: [
      "Most web browsers allow you to control cookies through their settings, including blocking or deleting cookies. Please note that disabling certain cookies may affect the functionality of our website.",
      "For more on how we handle your information more broadly, see our ",
    ],
    trailingLink: { label: "Privacy Policy", href: "/privacy-policy" },
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "If you have any questions about how we use cookies, please contact us at privacy@starfii.com.",
    ],
  },
];

export default function CookiePolicyPage() {
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
            <span className="text-slate-500">Cookie Policy</span>
          </nav>

          <h1
            className="mt-6 text-[36px] font-semibold leading-tight lg:text-[46px]"
            style={{ color: DARK_BLUE }}
          >
            Cookie Policy
          </h1>

          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-slate-600">
            How Starfii uses cookies and similar technologies across its
            digital properties.
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
              This Cookie Policy explains how Starfii Technologies uses
              cookies and similar tracking technologies on our website. By
              continuing to use our website, you consent to our use of
              cookies as described here, unless you have disabled them
              through your browser settings.
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