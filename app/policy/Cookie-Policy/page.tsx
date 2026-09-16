import { Mail } from "lucide-react";

const T = {
  ink: "text-[#14163B]",
  primary: "text-[#3B2FE0]",
  muted: "text-[#5B5D78]",
  border: "border-[#E4E4EF]",
  panelBg: "bg-[#FAFAFD]",
};

export const metadata = {
  title: "Cookie Policy — Starfii",
  description: "How Starfii uses cookies and similar technologies across its digital properties.",
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

const cookieCategories = [
  {
    name: "Essential",
    purpose: "Keep you signed in, remember your session, and support core site functions. These can't be switched off.",
  },
  {
    name: "Performance",
    purpose: "Tell us how visitors use our site so we can find and fix problems and improve pages over time.",
  },
  {
    name: "Functional",
    purpose: "Remember choices you make, like region or language, so the site feels tailored on return visits.",
  },
  {
    name: "Advertising",
    purpose: "Used by our partners to build a profile of your interests and show relevant ads elsewhere.",
  },
];

const toc = [
  { id: "cookie-overview", label: "Cookie overview" },
  { id: "cookie-categories", label: "Cookie categories" },
  { id: "purpose", label: "Purpose" },
  { id: "third-party-cookies", label: "Third-party cookies" },
  { id: "consent-controls", label: "Consent controls" },
  { id: "managing-cookies", label: "Managing cookies" },
  { id: "contact", label: "Contact" },
];

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-[140px] pb-24">
      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p className={`text-[13px] font-semibold ${T.primary}`}>Legal</p>
          <h1 className={`mt-3 text-[36px] font-semibold leading-tight ${T.ink} sm:text-[44px]`}>
            Cookie Policy
          </h1>
          <p className={`mt-4 text-[16px] leading-relaxed ${T.muted}`}>
            How Starfii uses cookies and similar technologies across its digital properties.
          </p>
          <p className={`mt-2 text-[13.5px] ${T.muted}`}>Last updated 15 September 2026</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px] lg:gap-16">
          <div className="max-w-[720px] space-y-12">
            <Section id="cookie-overview" title="Cookie overview">
              <p>
                Cookies are small text files placed on your device when you visit a website. Starfii
                uses cookies and similar technologies, like local storage and pixels, to make our
                site work reliably, understand how it's used, and — where you've allowed it —
                personalise what you see.
              </p>
            </Section>

            <Section id="cookie-categories" title="Cookie categories">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {cookieCategories.map((cat) => (
                  <div key={cat.name} className={`rounded-lg border ${T.border} p-4`}>
                    <h3 className={`text-[14.5px] font-semibold ${T.ink}`}>{cat.name}</h3>
                    <p className={`mt-1.5 text-[13.5px] leading-relaxed ${T.muted}`}>{cat.purpose}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="purpose" title="Purpose">
              <p>
                We rely on cookies to keep the site secure and functional, to measure how our pages
                perform, to remember your preferences between visits, and, for the advertising
                category only, to make the ads you see elsewhere more relevant. We never use cookies
                to sell your personal information.
              </p>
            </Section>

            <Section id="third-party-cookies" title="Third-party cookies">
              <p>
                Some cookies on our site are set by third parties we work with — such as analytics
                providers and, where used, advertising partners. These third parties may combine
                information collected on our site with other data they hold. We choose partners who
                are contractually required to handle your data responsibly, but their own privacy
                policies govern how they use it.
              </p>
            </Section>

            <Section id="consent-controls" title="Consent controls">
              <p>
                Where required by law, we show a cookie banner on your first visit so you can choose
                which categories to allow beyond the essential ones. You can change your choice at
                any time from the cookie preferences link in our site footer.
              </p>
            </Section>

            <Section id="managing-cookies" title="Managing cookies">
              <p>
                In addition to our on-site controls, you can manage or delete cookies through your
                browser settings — most browsers let you view, block, or remove cookies on a
                site-by-site basis. Blocking essential cookies may affect how our site works.
              </p>
            </Section>

            <Section id="contact" title="Contact">
              <p>Questions about how we use cookies can be sent to our privacy team.</p>
              <a
                href="mailto:privacy@starfii.com"
                className={`inline-flex items-center gap-2 text-[14.5px] font-semibold ${T.primary}`}
              >
                <Mail size={16} />
                privacy@starfii.com
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