import { Mail } from "lucide-react";

const T = {
  ink: "text-[#14163B]",
  primary: "text-[#3B2FE0]",
  muted: "text-[#5B5D78]",
  border: "border-[#E4E4EF]",
  panelBg: "bg-[#FAFAFD]",
};

export const metadata = {
  title: "Privacy Policy — Starfii",
  description: "How Starfii Technologies collects, uses and protects information.",
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-[140px]">
      <h2 className={`text-[20px] font-semibold ${T.ink}`}>{title}</h2>
      <div className={`mt-3 space-y-3 text-[15px] leading-relaxed ${T.muted}`}>{children}</div>
    </section>
  );
}

const toc = [
  { id: "data-collection", label: "Data collection" },
  { id: "use-of-information", label: "Use of information" },
  { id: "cookies", label: "Cookies" },
  { id: "data-retention", label: "Data retention" },
  { id: "security", label: "Security" },
  { id: "international-transfers", label: "International transfers" },
  { id: "third-parties", label: "Third parties" },
  { id: "childrens-privacy", label: "Children's privacy" },
  { id: "user-rights", label: "User rights" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-[140px] pb-24">
      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p className={`text-[13px] font-semibold ${T.primary}`}>Legal</p>
          <h1 className={`mt-3 text-[36px] font-semibold leading-tight ${T.ink} sm:text-[44px]`}>
            Privacy Policy
          </h1>
          <p className={`mt-4 text-[16px] leading-relaxed ${T.muted}`}>
            How Starfii Technologies collects, uses and protects information.
          </p>
          <p className={`mt-2 text-[13.5px] ${T.muted}`}>Last updated 15 September 2026</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px] lg:gap-16">
          <div className="max-w-[720px] space-y-12">
            <Section id="privacy-policy-content" title="Overview">
              <p>
                This policy explains what information Starfii Technologies collects when you use our
                websites and products, how we use it, who we share it with, and the choices you have
                over it. It applies to everyone who visits starfii.com, applies for a role with us, or
                uses TurboDesk, Agentverse, or any other Starfii product.
              </p>
              <p>
                By using our sites or products, you agree to the practices described here. If we make
                a material change to this policy, we'll update the date above and, where required by
                law, notify you directly — by email or an in-product notice — before the change takes
                effect.
              </p>
              <p>
                If anything here is unclear, or you'd like a plain-language explanation of a
                particular section, write to us using the contact details at the end of this page.
              </p>
            </Section>

            <Section id="data-collection" title="Data collection">
              <p>We collect information in three ways:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className={`font-medium ${T.ink}`}>Information you give us</span> — your name,
                  email, phone number, company, resume, and anything you write to us through a form,
                  a job application, or a support request.
                </li>
                <li>
                  <span className={`font-medium ${T.ink}`}>Information collected automatically</span> —
                  device and browser type, IP address, approximate location, pages visited, referring
                  pages, and how you interact with our products, gathered through server logs,
                  cookies, and similar technologies.
                </li>
                <li>
                  <span className={`font-medium ${T.ink}`}>Information from third parties</span> — such
                  as a recruiting partner, background-check provider, payment processor, or
                  integration you've connected to a Starfii product.
                </li>
              </ul>
            </Section>

            <Section id="use-of-information" title="Use of information">
              <p>We use the information we collect to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Provide, maintain, and improve our products and services</li>
                <li>Respond to inquiries, job applications, and support requests</li>
                <li>Process and evaluate job applications, including sharing them internally with hiring teams</li>
                <li>Send updates about products you use, unless you've opted out</li>
                <li>Personalise content and measure how our site and products perform</li>
                <li>Detect, investigate, and prevent fraud, abuse, or security incidents</li>
                <li>Meet legal, tax, and regulatory obligations</li>
              </ul>
            </Section>

            <Section id="cookies" title="Cookies">
              <p>
                We use cookies and similar technologies to keep you signed in, remember your
                preferences, and understand how our sites are used. You can control cookies through
                your browser settings, and where required by law we'll ask for your consent before
                setting non-essential cookies. See our{" "}
                <a href="/policy/Cookie-Policy" className={`font-medium ${T.primary}`}>
                  Cookie Policy
                </a>{" "}
                for a full breakdown of the categories we use and how to manage them.
              </p>
            </Section>

            <Section id="data-retention" title="Data retention">
              <p>
                We keep personal information only as long as it's needed for the purpose it was
                collected for. Account and product data is kept for as long as you have an active
                relationship with us, plus a limited period afterward to meet legal or accounting
                requirements. Job application data is generally retained for up to 12 months after a
                hiring decision, unless you ask us to delete it sooner or applicable law requires a
                longer period.
              </p>
            </Section>

            <Section id="security" title="Security">
              <p>
                We use administrative, technical, and physical safeguards designed to protect
                personal information against unauthorised access, alteration, disclosure, or
                destruction — including encryption in transit, access controls, and regular security
                reviews. No method of transmission or storage is completely secure, so we can't
                guarantee absolute security, but we work to keep these protections current.
              </p>
            </Section>

            <Section id="international-transfers" title="International transfers">
              <p>
                Starfii is based in India, and some of the service providers we work with — such as
                cloud hosting or analytics vendors — may process data outside your home country. Where
                we transfer personal information across borders, we put appropriate safeguards in
                place, such as contractual protections, consistent with applicable data protection
                law.
              </p>
            </Section>

            <Section id="third-parties" title="Third parties">
              <p>
                We share information with service providers who help us run our business — hosting,
                analytics, email delivery, background checks for hiring, and payment processing —
                under contracts that limit how they can use your data. We do not sell personal
                information. We may disclose information if required by law, in connection with a
                merger or acquisition, or to protect the rights, property, or safety of Starfii, our
                users, or the public.
              </p>
            </Section>

            <Section id="childrens-privacy" title="Children's privacy">
              <p>
                Our products and services are intended for people who are old enough to enter into a
                binding agreement in their jurisdiction, and are not directed at children. We do not
                knowingly collect personal information from children. If you believe a child has
                provided us with personal information, please contact us and we'll take steps to
                remove it.
              </p>
            </Section>

            <Section id="user-rights" title="User rights">
              <p>
                Depending on where you're located, you may have the right to access, correct, export,
                or delete the personal information we hold about you, to withdraw consent, and to
                object to or restrict certain uses of it. To exercise any of these rights, write to us
                using the contact details below — we'll verify your request and respond within a
                reasonable time, and in any event within any period required by applicable law.
              </p>
            </Section>

            <Section id="changes" title="Changes to this policy">
              <p>
                We may update this policy from time to time to reflect changes in our practices, our
                products, or legal requirements. When we make a material change, we'll update the
                "last updated" date at the top of this page and, where required, give you additional
                notice before the change applies to you. We encourage you to review this page
                periodically.
              </p>
            </Section>

            <Section id="contact" title="Contact">
              <p>
                Questions about this policy or how we handle your information can be sent to our
                privacy team.
              </p>
              <a
                href="mailto:privacy@starfii.com"
                className={`inline-flex items-center gap-2 text-[14.5px] font-semibold ${T.primary}`}
              >
                <Mail size={16} />
                privacy@starfii.com
              </a>
            </Section>
          </div>

          {/* Table of contents */}
          <aside className="lg:sticky lg:top-[140px] lg:self-start">
            <div className={`rounded-lg border ${T.border} ${T.panelBg} p-5`}>
              <h3 className={`text-[12.5px] font-semibold uppercase tracking-[0.06em] ${T.muted}`}>
                On this page
              </h3>
              <nav className="mt-3 space-y-2.5">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-[13.5px] ${T.muted} hover:${T.primary} transition-colors`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}