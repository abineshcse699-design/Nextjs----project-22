import Link from "next/link";

/* ===============================================================
   Terms of Service — /terms

   Sections:
   491. Terms content -> Intro
   492. Website use
   493. Intellectual property
   494. Disclaimers
   495. Liability
   496. Governing terms
   497. Contact
================================================================ */

const DARK_BLUE = "#0b1747";
const INDIGO = "#3a3ff0";

/* EXACT GLOBAL SITE CONTAINER */
const ALIGN =
  "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const sections = [
  {
    id: "website-use",
    number: "492",
    title: "Website Use",
    body: [
      "You may use our website for lawful purposes only. You agree not to use the site in any way that could damage, disable, overburden, or impair it, or interfere with any other party's use and enjoyment of the site.",
      "You are responsible for ensuring that any information you submit through our website is accurate and that you have the right to share it with us.",
    ],
  },
  {
    id: "intellectual-property",
    number: "493",
    title: "Intellectual Property",
    body: [
      "All content on this website, including text, graphics, logos, images, case studies, and software, is the property of Starfii Technologies or its licensors and is protected by applicable intellectual property laws.",
      "You may not reproduce, distribute, modify, or create derivative works from any content on this site without our prior written consent.",
    ],
  },
  {
    id: "disclaimers",
    number: "494",
    title: "Disclaimers",
    body: [
      'Our website and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to accuracy, completeness, or fitness for a particular purpose.',
      "We do not guarantee that the website will be uninterrupted, error free, or free of viruses or other harmful components.",
    ],
  },
  {
    id: "liability",
    number: "495",
    title: "Liability",
    body: [
      "To the fullest extent permitted by law, Starfii Technologies shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, our website or services.",
    ],
  },
  {
    id: "governing-terms",
    number: "496",
    title: "Governing Terms",
    body: [
      "These Terms of Service are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in India.",
      "We may update these terms from time to time, and continued use of the website after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    id: "contact",
    number: "497",
    title: "Contact",
    body: [
      "If you have any questions about these Terms of Service, please contact us at hello@starfii.com.",
    ],
  },
];

export default function TermsOfServicePage() {
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
              Terms of Service
            </span>
          </nav>

          <h1
            className="mt-6 text-[40px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[48px] lg:text-[56px]"
            style={{ color: DARK_BLUE }}
          >
            Terms of Service
          </h1>

          <p className="mt-5 max-w-3xl text-[17px] leading-8 text-slate-600 sm:text-[18px]">
            Terms governing use of the Starfii website and
            services.
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
                These Terms of Service (&ldquo;Terms&rdquo;) govern
                your access to and use of the Starfii Technologies
                website and services. By accessing or using our
                website, you agree to be bound by these Terms. If you
                do not agree with these Terms, please do not use our
                website.
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