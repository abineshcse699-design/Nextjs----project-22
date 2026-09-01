/**
 * Footer
 * -------
 * Site-wide footer: Starfii logo, 5-column link grid
 * (Services / Offerings / Industries / Industries cont. / About Us),
 * a divider, then copyright + legal links + social icons.
 *
 * Social icons are hand-drawn SVGs (not from lucide-react) since brand
 * glyphs like Facebook/Instagram/LinkedIn/YouTube were removed from
 * lucide-react's icon set.
 */

interface FooterColumn {
  title: string;
  links: string[];
}

const columns: FooterColumn[] = [
  {
    title: "SERVICES",
    links: [
      "Digital & Software",
      "Data & Analytics",
      "Digital IT Operations",
      "Cloud",
      "Enterprise Platform Services",
      "Business Process Services",
      "Artificial Intelligence",
      "Global Capability Centers",
    ],
  },
  {
    title: "OFFERINGS",
    links: [
      "AI-native Contact Center",
      "Application Services",
      "Cybersecurity",
      "Digital Workplace",
      "Enterprise Automation",
      "Generative AI",
      "Sustainability Services",
      "Testing",
      "Vibe Coding",
    ],
  },
  {
    title: "INDUSTRIES",
    links: [
      "Banking",
      "Consumer Goods",
      "Education & Institutions",
      "Energy and Utilities",
      "Financial Services",
      "Healthcare",
      "Insurance",
      "Life Sciences",
      "Manufacturing",
    ],
  },
  {
    title: "",
    links: [
      "Private Equity",
      "Professional Services",
      "Public Sector",
      "Retail",
      "Technology, Products & Platforms",
      "Telecom",
      "Transportation & Logistics",
      "Travel & Hospitality",
    ],
  },
  {
    title: "ABOUT US",
    links: [
      "Starfii Overview",
      "Leadership",
      // "Partners",
      "Careers",
    ],
  },
];

const legalLinks = [
  // "Beware of Fake Job Offer",
  // "Disclaimers",
  "Privacy Policy",
  // "Cookie Policy",
];

// Brand glyphs aren't part of lucide-react, so each social icon is drawn
// inline as a small SVG to keep the footer dependency-free.
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.9h2.65l.4-3.08H13.5V8.05c0-.89.25-1.5 1.52-1.5h1.63V3.8A21.8 21.8 0 0 0 14.3 3.7c-2.32 0-3.9 1.42-3.9 4.02v2.3H7.75v3.08h2.65V21z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.9 4.75 12 4.75 12 4.75s-5.9 0-7.64.49a2.75 2.75 0 0 0-1.94 1.95A28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .42 4.81 2.75 2.75 0 0 0 1.94 1.95c1.74.49 7.64.49 7.64.49s5.9 0 7.64-.49a2.75 2.75 0 0 0 1.94-1.95c.3-1.58.44-3.2.42-4.81a28.6 28.6 0 0 0-.42-4.81ZM9.95 15.02V8.98L15.27 12Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20.4h3.38ZM5.25 3.4a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20.4v-6.53c0-3.5-1.87-5.13-4.36-5.13a3.76 3.76 0 0 0-3.41 1.88h-.05V8.5H9.4c.05 1 0 11.9 0 11.9h3.22v-6.64c0-.36.03-.71.13-.97.29-.71.94-1.44 2.04-1.44 1.44 0 2.02 1.1 2.02 2.7v6.35Z" />
    </svg>
  );
}

// lucide-react doesn't ship the current X (formerly Twitter) glyph, so it's
// drawn inline to match the rest of the icon set.
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socials: { label: string; href: string; icon: React.ReactNode }[] = [
  { label: "Facebook", href: "#", icon: <FacebookIcon className="h-4 w-4" /> },
  { label: "YouTube", href: "#", icon: <YoutubeIcon className="h-4 w-4" /> },
  { label: "Instagram", href: "#", icon: <InstagramIcon className="h-4 w-4" /> },
  { label: "LinkedIn", href: "#", icon: <LinkedinIcon className="h-4 w-4" /> },
  { label: "X", href: "#", icon: <XIcon className="h-4 w-4" /> },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#dbe6fb] pb-8 pt-16 lg:pt-20">
      {/* Container width/padding matched to the navbar's outer wrapper
          (mx-auto max-w-[1520px] px-6 pt-4 sm:px-10 lg:px-16) so the
          footer's logo, link columns, and bottom bar line up under the
          same edges as the nav. Padding used to sit directly on
          <footer>; it now lives on this wrapper instead. */}
      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <a href="/" className="inline-block" aria-label="Starfii home">
          <img
            src="/starfii_logo_black.svg"
            alt="Starfii"
            className="h-14 w-auto md:h-16"
          />
        </a>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-10">
          {columns.map((col, i) => (
            <div key={i}>
              {col.title && (
                <h3 className="mb-5 text-sm font-semibold tracking-wide text-[#0b1747]">
                  {col.title}
                </h3>
              )}
              <ul className={`flex flex-col gap-5 ${!col.title ? "mt-9" : ""}`}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[15px] text-slate-500 transition-colors duration-200 hover:text-[#3a3ff0]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-10 border-t border-slate-300/60" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Starfii Technologies. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="transition-colors duration-200 hover:text-[#3a3ff0]"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3a3ff0] text-white transition-colors duration-200 hover:bg-[#2c30c9]"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}