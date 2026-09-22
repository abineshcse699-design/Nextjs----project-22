/**
 * Footer
 * -------
 * Site-wide footer: Starfii logo, 5-column link grid
 * (Services / Offerings / Industries / Industries cont. / About Us),
 * a divider, then copyright + legal links + social icons.
 *
 * Every link's href matches the route used in the Navbar mega menu,
 * so clicking a footer link opens the same page as the navbar link.
 *
 * Social icons are hand-drawn SVGs (not from lucide-react) since brand
 * glyphs like Facebook/Instagram/LinkedIn/YouTube were removed from
 * lucide-react's icon set.
 */

import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const columns: FooterColumn[] = [
  {
    title: "SERVICES",
    links: [
      { label: "Software & Product Engineering", href: "/services/software-product" },
      { label: "Data & Analytics", href: "/services/data-analytics" },
      { label: "Cloud & DevOps", href: "/services/cloud" },
      { label: "Legacy Modernization", href: "/services/legacy-Modernization" },
      { label: "ITSM & Service Management", href: "/services/itsm-service-management" },
      { label: "Freshservice", href: "/services/freshService" },
      { label: "ITSM & Migration", href: "/services/ITSM-Migration" },
      { label: "Quality Engineering", href: "/services/Quality-Engineering" },
      { label: "Service Now", href: "/services/servicenow" },
    ],
  },
  {
    title: "OFFERINGS",
    links: [
      { label: "AI Voice Call", href: "/services/offerings/ai-native-contact-center" },
      { label: "AI Meeting Assistant", href: "/services/offerings/vibe-coding" },
      { label: "AI File Storage", href: "/services/offerings/sustainability-services" },
      { label: "AI-powered Medical Coding", href: "/services/offerings/enterprise-automation" },
      { label: "AI Data Extraction", href: "/services/offerings/testing" },
      { label: "AI Chatbot & Go AI", href: "/services/offerings/generative-ai" },
    ],
  },
  {
    title: "INDUSTRIES",
    links: [
      { label: "Banking", href: "/industries/Banking" },
      { label: "Insurance", href: "/industries/insurencee" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Education & Institutions", href: "/industries/education-institute" },
      { label: "Travel & Hospitality", href: "/industries/travel-hospital" },
      { label: "Professional Services", href: "/industries/professional-service" },
      { label: "Financial Services", href: "/industries/financial-service" },
      { label: "Healthcare & Life Sciences", href: "/industries/health-care" },
      { label: "Retail & Consumer", href: "/industries/retail-consumer" },
    ],
  },
  {
    title: "",
    links: [
      { label: "Transportation & Logistics", href: "/industries/transport" },
      { label: "Technology, Products & Platforms", href: "/industries/technology-products" },
      { label: "Telecom & Utilities", href: "/industries/telecom-utilties" },
    ],
  },
  {
    title: "ABOUT US",
    links: [
      { label: "Starfii Overview", href: "/About" },
      // { label: "Case Study", href: "/About/Case-study" },
      // { label: "Blogs", href: "/About/blogs" },
    ],
  },
];

// Legal footer links — each maps to its real page from the sitemap
// (Page 44 Privacy Policy, Page 45 Terms of Service, Page 46 Cookie Policy)
// so clicking actually opens the corresponding page instead of "#".
interface LegalLink {
  label: string;
  href: string;
}

const legalLinks: LegalLink[] = [
  { label: "Privacy Policy", href: "/policy/privacy-policy" },
  { label: "Terms of Service", href: "/policy/TermsOfService" },
  // { label: "Cookie Policy", href: "/policy/Cookie-Policy" },
];

// Brand glyphs aren't part of lucide-react, so each social icon is drawn
// inline as a small SVG to keep the footer dependency-free.

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20.4h3.38ZM5.25 3.4a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20.4v-6.53c0-3.5-1.87-5.13-4.36-5.13a3.76 3.76 0 0 0-3.41 1.88h-.05V8.5H9.4c.05 1 0 11.9 0 11.9h3.22v-6.64c0-.36.03-.71.13-.97.29-.71.94-1.44 2.04-1.44 1.44 0 2.02 1.1 2.02 2.7v6.35Z" />
    </svg>
  );
}

// lucide-react's Instagram glyph doesn't match the brand mark closely enough,
// so it's drawn inline to match the rest of the icon set.
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const socials: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/starfii-technology/",
    icon: <LinkedinIcon className="h-4 w-4" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/starfii_technology?stkn=MWVpcW1mMmV0OHFuYg==",
    icon: <InstagramIcon className="h-4 w-4" />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#dbe6fb] pb-8 pt-16 lg:pt-20">
      {/* Container width/padding matched to the navbar's outer wrapper
          (mx-auto max-w-[1520px] px-6 pt-4 sm:px-10 lg:px-16) so the
          footer's logo, link columns, and bottom bar line up under the
          same edges as the nav. */}
      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <Link href="/" className="inline-block" aria-label="Starfii home">
          <img
            src="/starfii_logo_black.svg"
            alt="Starfii"
            className="h-14 w-auto md:h-16"
          />
        </Link>

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
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-slate-500 transition-colors duration-200 hover:text-[#3a3ff0]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-10 border-t border-slate-300/60" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Starfii Technology . All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors duration-200 hover:text-[#3a3ff0]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
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