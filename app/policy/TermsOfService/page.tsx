import { Mail } from "lucide-react";

const T = {
  ink: "text-[#14163B]",
  primary: "text-[#3B2FE0]",
  muted: "text-[#5B5D78]",
  border: "border-[#E4E4EF]",
  panelBg: "bg-[#FAFAFD]",
};

export const metadata = {
  title: "Terms of Service — Starfii",
  description: "Terms governing use of the Starfii website and services.",
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
  { id: "website-use", label: "Website use" },
  { id: "intellectual-property", label: "Intellectual property" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Liability" },
  { id: "governing-terms", label: "Governing terms" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white pt-[140px] pb-24">
      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p className={`text-[13px] font-semibold ${T.primary}`}>Legal</p>
          <h1 className={`mt-3 text-[36px] font-semibold leading-tight ${T.ink} sm:text-[44px]`}>
            Terms of Service
          </h1>
          <p className={`mt-4 text-[16px] leading-relaxed ${T.muted}`}>
            Terms governing use of the Starfii website and services.
          </p>
          <p className={`mt-2 text-[13.5px] ${T.muted}`}>Last updated 15 September 2026</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px] lg:gap-16">
          <div className="max-w-[720px] space-y-12">
            <Section id="terms-content" title="Agreement to terms">
              <p>
                These terms govern your access to and use of the Starfii website and products,
                including TurboDesk and Agentverse. By accessing or using any Starfii service, you
                agree to be bound by these terms. If you're using our services on behalf of a
                company, you're confirming you have the authority to bind that company to these
                terms.
              </p>
            </Section>

            <Section id="website-use" title="Website use">
              <p>
                You may use our website and products only for lawful purposes and in line with these
                terms. You agree not to:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Interfere with or disrupt the operation of our services or servers</li>
                <li>Attempt to gain unauthorised access to any part of our systems</li>
                <li>Use automated means to scrape or extract data without our permission</li>
                <li>Use the service to transmit unlawful, harmful, or infringing content</li>
              </ul>
            </Section>

            <Section id="intellectual-property" title="Intellectual property">
              <p>
                All content on our website and within our products — including text, graphics,
                logos, and software — is owned by Starfii Technologies or our licensors and is
                protected by intellectual property law. Nothing in these terms grants you any right
                to use our trademarks or branding without prior written permission. Where you submit
                content to us — such as a job application or a piece of feedback — you retain
                ownership, but you grant us the right to use it for the purpose you submitted it for.
              </p>
            </Section>

            <Section id="disclaimers" title="Disclaimers">
              <p>
                Our website and products are provided "as is" and "as available," without warranties
                of any kind, whether express or implied. We don't warrant that our services will be
                uninterrupted, error-free, or completely secure. Any reliance you place on
                information from our services is at your own risk.
              </p>
            </Section>

            <Section id="liability" title="Liability">
              <p>
                To the fullest extent permitted by law, Starfii Technologies will not be liable for
                any indirect, incidental, or consequential damages arising from your use of our
                website or products. Our total liability for any claim arising from these terms will
                not exceed the amount you paid us, if any, in the twelve months before the claim
                arose.
              </p>
            </Section>

            <Section id="governing-terms" title="Governing terms">
              <p>
                These terms are governed by the laws of India, without regard to conflict-of-law
                principles. Any dispute arising from these terms will be subject to the exclusive
                jurisdiction of the courts of Bengaluru, Karnataka. We may update these terms from
                time to time; continued use of our services after an update means you accept the
                revised terms.
              </p>
            </Section>

            <Section id="contact" title="Contact">
              <p>Questions about these terms can be sent to our legal team.</p>
              <a
                href="mailto:legal@starfii.com"
                className={`inline-flex items-center gap-2 text-[14.5px] font-semibold ${T.primary}`}
              >
                <Mail size={16} />
                legal@starfii.com
              </a>
            </Section>
          </div>

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