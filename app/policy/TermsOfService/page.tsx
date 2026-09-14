import Link from "next/link";

/* ===============================================================
   Terms of Service — /terms
   Sections (per sitemap Page 45):
   491. Terms content        -> Intro
   492. Website use
   493. Intellectual property
   494. Disclaimers
   495. Liability
   496. Governing terms
   497. Contact
================================================================ */

const DARK_BLUE = "#0b1747";
const INDIGO = "#3a3ff0";
const ALIGN = "mx-auto max-w-[900px] px-6 sm:px-10 lg:px-0";

const sections = [
  {
    id: "website-use",
    title: "Website Use",
    body: [
      "You may use our website for lawful purposes only. You agree not to use the site in any way that could damage, disable, overburden, or impair it, or interfere with any other party's use and enjoyment of the site.",
      "You are responsible for ensuring that any information you submit through our website is accurate and that you have the right to share it with us.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: [
      "All content on this website, including text, graphics, logos, images, case studies, and software, is the property of Starfii Technologies or its licensors and is protected by applicable intellectual property laws.",
      "You may not reproduce, distribute, modify, or create derivative works from any content on this site without our prior written consent.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    body: [
      "Our website and its content are provided on an \"as is\" and \"as available\" basis without warranties of any kind, either express or implied, including but not limited to accuracy, completeness, or fitness for a particular purpose.",
      "We do not guarantee that the website will be uninterrupted, error free, or free of viruses or other harmful components.",
    ],
  },
  {
    id: "liability",
    title: "Liability",
    body: [
      "To the fullest extent permitted by law, Starfii Technologies shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, our website or services.",
    ],
  },
  {
    id: "governing-terms",
    title: "Governing Terms",
    body: [
      "These Terms of Service are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in India.",
      "We may update these terms from time to time, and continued use of the website after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    body: [
      "If you have any questions about these Terms of Service, please contact us at hello@starfii.com.",
    ],
  },
];

export default function TermsOfServicePage() {
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
            <span className="text-slate-500">Terms of Service</span>
          </nav>

          <h1
            className="mt-6 text-[36px] font-semibold leading-tight lg:text-[46px]"
            style={{ color: DARK_BLUE }}
          >
            Terms of Service
          </h1>

          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-slate-600">
            Terms governing use of the Starfii website and services.
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
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access
              to and use of the Starfii Technologies website and services. By
              accessing or using our website, you agree to be bound by these
              Terms. If you do not agree with these Terms, please do not use
              our website.
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