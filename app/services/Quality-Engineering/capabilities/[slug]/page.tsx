// app/services/Quality-Engineering/capabilities/[slug]/page.tsx
//
// Built from the ServiceNow capability page
// (hero -> overview -> key features -> dark "how we deliver" section ->
// gradient carousel -> FAQ -> closing CTA), same tokens, type scale,
// spacing, animations and hover effects.
//
// Server Component: handles static params, SEO metadata, and 404s.
// Interactive pieces (Reveal, FaqAccordion, carousel, GetInTouch) are
// client components.

import type { Metadata } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ArrowUpRight,
  Search,
  ClipboardCheck,
  PlayCircle,
  BarChart3,
} from "lucide-react";

import Reveal from "../reveal";
import FaqAccordion from "../FaqAccordion";
import OtherCapabilities from "../othercapabilities";
import GetInTouch from "../../GetTouch";
import {
  capabilities,
  getCapabilityBySlug,
  CAPABILITY_BASE,
  SERVICE_BASE,
} from "../data";

/* ===============================================================
   BRAND TOKENS
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

const SERVICES_BASE = "/services";

// Generic 4-step delivery process shown on every capability page.
const processSteps = [
  {
    icon: Search,
    title: "Assess",
    body: "We review your product, release process, and current test coverage to find where quality risk is highest before a single test is written.",
  },
  {
    icon: ClipboardCheck,
    title: "Design",
    body: "Quality engineers plan the test approach, tooling, and environments around your stack, so effort goes where it pays back the most.",
  },
  {
    icon: PlayCircle,
    title: "Execute",
    body: "We run the testing, automate what should be automated, and connect the checks to your CI/CD pipeline so feedback arrives with every build.",
  },
  {
    icon: BarChart3,
    title: "Improve",
    body: "We report on coverage, defect trends, and release readiness, then tune the approach so quality keeps improving with each release.",
  },
];

/* ===============================================================
   GLOBAL KEYFRAMES
   (the ss-* animations, Reveal states, capability card hover and
   carousel helpers all depend on these styles being on the page)
================================================================ */

function AnimationStyles(): ReactElement {
  return (
    <style>{`
      @keyframes ss-fade-up {
        from { opacity: 0; transform: translateY(28px) scale(0.97); }
        to   { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes ss-drift {
        0%   { transform: translate3d(0, 0, 0) scale(1); }
        50%  { transform: translate3d(-2%, 2%, 0) scale(1.06); }
        100% { transform: translate3d(0, 0, 0) scale(1); }
      }
      @keyframes ss-pulse-soft {
        0%, 100% { opacity: 0.55; }
        50%      { opacity: 1; }
      }

      .ss-reveal { opacity: 0; }
      .ss-reveal.ss-in-view {
        animation: ss-fade-up 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }
      .ss-drift-slow { animation: ss-drift 16s ease-in-out infinite; }
      .ss-drift-slower { animation: ss-drift 22s ease-in-out infinite reverse; }
      .ss-arrow-pulse:not(:disabled):hover {
        animation: ss-pulse-soft 1.2s ease-in-out infinite;
      }

      .ss-capability-card {
        position: relative;
        background-color: #EEF0F5;
        border-radius: 20px;
        transition:
          background-color 0.35s ease,
          transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
          box-shadow 0.35s ease;
      }
      .ss-capability-card:hover {
        background-color: #E4E7F3;
        transform: translateY(-4px);
        box-shadow: 0 16px 40px rgba(27, 37, 96, 0.08);
      }
      .ss-capability-title { transition: color 0.3s ease; }

      .ss-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      @media (prefers-reduced-motion: reduce) {
        .ss-reveal, .ss-drift-slow, .ss-drift-slower, .ss-arrow-pulse {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
        .ss-case-image,
        .ss-case-desc,
        .ss-eco-panel,
        .ss-capability-card,
        .ss-capability-title {
          transition: none !important;
        }
        .ss-case-desc {
          max-height: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
      }
    `}</style>
  );
}

/* ===============================================================
   STATIC PARAMS — one page per capability slug
================================================================ */

// Next 15+ passes params as a Promise. `await` also works on older versions.
type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams(): { slug: string }[] {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    return { title: "Capability not found | Starfii" };
  }

  const url = `https://www.starfii.com${CAPABILITY_BASE}/${capability.slug}`;

  return {
    title: `${capability.title} Services | Quality Engineering – Starfii`,
    description: capability.body,
    keywords: [
      capability.title,
      ...capability.tags,
      "Quality Engineering",
      "Starfii",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${capability.title} | Starfii Quality Engineering`,
      description: capability.body,
      url,
      siteName: "Starfii Technology",
      type: "website",
      images: [{ url: capability.heroImage }],
    },
  };
}

/* ===============================================================
   PAGE
================================================================ */

export default async function CapabilityPage({
  params,
}: PageProps): Promise<ReactElement> {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) notFound();

  // Everything else in the Quality Engineering grid.
  const others = capabilities
    .filter((c) => c.slug !== capability.slug)
    .map(({ slug: s, title, body, heroImage }) => ({
      slug: s,
      title,
      body,
      heroImage,
    }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: capability.title,
        name: capability.title,
        description: capability.body,
        provider: {
          "@type": "Organization",
          name: "Starfii Technology",
          url: "https://www.starfii.com/",
        },
        areaServed: "Worldwide",
      },
      {
        "@type": "FAQPage",
        mainEntity: capability.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <main className="bg-white">
      <AnimationStyles />

      {/* SEO: Service + FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="relative isolate min-h-[460px] overflow-hidden lg:min-h-[620px]">
        <div className="absolute inset-0 -z-10">
          <img
            src={capability.heroImage}
            alt={`${capability.title} for enterprise software teams`}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover object-[68%_center]"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.70) 32%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.04) 78%, rgba(0,0,0,0) 100%)",
            }}
          />

          <div
            className="absolute inset-x-0 bottom-0 h-20"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.16) 100%)",
            }}
          />
        </div>

        <div
          className={`${ALIGN} relative flex min-h-[460px] items-center lg:min-h-[620px]`}
        >
          <div className="w-full max-w-[760px] py-10 lg:py-12">
            <nav
              aria-label="Breadcrumb"
              className="font-body flex flex-wrap items-center gap-2 text-[14px] font-medium opacity-0"
              style={{
                color: "rgba(255,255,255,0.92)",
                animation: "ss-fade-up 0.6s ease-out 0.05s forwards",
              }}
            >
              <Link href="/" className="transition-opacity hover:opacity-70">
                Home
              </Link>
              <ChevronRight size={14} />
              <Link
                href={SERVICES_BASE}
                className="transition-opacity hover:opacity-70"
              >
                Services
              </Link>
              <ChevronRight size={14} />
              <Link
                href={SERVICE_BASE}
                className="transition-opacity hover:opacity-70"
              >
                Quality Engineering
              </Link>
              <ChevronRight size={14} />
              <span className="text-white/60">{capability.title}</span>
            </nav>

            <h1
              className="font-heading mt-5 max-w-[760px] text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-white opacity-0 sm:text-[38px] lg:text-[44px] xl:text-[48px]"
              style={{ animation: "ss-fade-up 0.7s ease-out 0.15s forwards" }}
            >
              {capability.title}
            </h1>

            <p
              className="font-body mt-5 max-w-[650px] text-[16px] leading-[1.7] text-white/90 opacity-0 sm:text-[17px]"
              style={{ animation: "ss-fade-up 0.7s ease-out 0.28s forwards" }}
            >
              {capability.body}
            </p>

            <a
              href="#connect"
              className="font-body mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold opacity-0 transition-all duration-300 hover:scale-[1.03] hover:bg-white/90"
              style={{
                color: INDIGO_CTA,
                animation: "ss-fade-up 0.7s ease-out 0.4s forwards",
              }}
            >
              Talk to a quality engineer
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            OVERVIEW
        ============================================================ */}
        <section className="mb-20 mt-16 lg:mb-24 lg:mt-20">
          <Reveal>
            <div className="group grid grid-cols-1 items-stretch overflow-hidden rounded-lg bg-[#F5F3FC] transition-colors duration-500 ease-out hover:bg-[#EAE4FA] lg:grid-cols-2">
              <div className="flex flex-col justify-center p-10 transition-transform duration-500 ease-out group-hover:translate-x-2 lg:p-14">
                <h2
                  className={`${SECTION_HEADING} mt-4`}
                  style={{ color: CHAMPION_BLUE }}
                >
                  What Is {capability.title}?
                </h2>

                <p className="font-body mt-5 text-[17px] leading-relaxed text-slate-600 lg:text-[18px]">
                  {capability.body}
                </p>

                {capability.tags.length > 0 && (
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {capability.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body rounded-full px-5 py-2.5 text-[13px] font-semibold"
                        style={{
                          backgroundColor: "#F1EEFC",
                          color: INDIGO_CTA,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative min-h-[320px] overflow-hidden">
                <img
                  src={capability.heroImage}
                  alt={capability.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full transform-gpu object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
                />
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      {/* ============================================================
          KEY FEATURES
      ============================================================ */}
      <section
        id="features"
        className="relative scroll-mt-28 bg-white py-24 lg:py-28"
      >
        <div className={`relative ${ALIGN}`}>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[380px_1fr] lg:gap-14 xl:grid-cols-[420px_1fr]">
            <Reveal className="self-start lg:sticky lg:top-28">
              <h2
                className={`${SECTION_HEADING} mt-4`}
                style={{ color: CHAMPION_BLUE }}
              >
                {capability.title} Capabilities We Deliver
              </h2>

              <p className="font-body mt-5 max-w-md text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
                A closer look at what Starfii delivers under{" "}
                {capability.title.toLowerCase()}, so your team can release with
                confidence.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {capability.keyFeatures.map((feature, i) => (
                <Reveal
                  key={feature.title}
                  delay={(i % 4) * 90}
                  className="h-full"
                >
                  <div className="ss-capability-card flex h-full flex-col p-8">
                    <h3
                      className="ss-capability-title font-heading text-[24px] font-semibold leading-[1.2] sm:text-[26px]"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {feature.title}
                    </h3>

                    <p className="font-body mt-4 text-[17px] leading-[1.7] text-slate-600">
                      {feature.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW WE DELIVER — dark section
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#08070F] py-24">
        <div
          className="ss-drift-slow pointer-events-none absolute inset-y-0 right-0 w-[55%]"
          style={{
            background:
              "radial-gradient(60% 90% at 100% 100%, rgba(232,110,90,0.55) 0%, rgba(164,143,234,0.35) 35%, rgba(8,7,15,0) 70%)",
          }}
        />
        <div
          className="ss-drift-slower pointer-events-none absolute inset-y-0 left-0 w-[35%]"
          style={{
            background:
              "radial-gradient(60% 80% at 0% 100%, rgba(63,90,214,0.35) 0%, rgba(8,7,15,0) 70%)",
          }}
        />

        <div className={`relative ${ALIGN}`}>
          <Reveal>
            <h2 className={`${SECTION_HEADING} mt-4 max-w-6xl text-white`}>
              How We Deliver
              <br />
              {capability.title}
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 80} className="h-full">
                  <div className="flex h-full items-start gap-5 rounded-2xl bg-white p-8 transition-shadow duration-300 hover:shadow-xl">
                    <span
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: INDIGO_CTA }}
                    >
                      <Icon size={19} />
                    </span>

                    <div>
                      <h3
                        className="font-heading text-[19px] font-medium leading-snug"
                        style={{ color: CHAMPION_BLUE }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="font-body mt-3 text-[15px] leading-[1.75]"
                        style={{ color: CHAMPION_BLUE }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          OTHER CAPABILITIES — gradient carousel
      ============================================================ */}
      <OtherCapabilities
        items={others}
        basePath={CAPABILITY_BASE}
        viewAllHref={`${SERVICE_BASE}#capabilities`}
      />

      {/* ============================================================
          FAQ
      ============================================================ */}
      <section
        id="faq"
        className="scroll-mt-28 py-24 lg:py-28"
        style={{ backgroundColor: "#EEF0F5" }}
      >
        <div className={ALIGN}>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[380px_1fr] lg:gap-16 xl:grid-cols-[440px_1fr]">
            <Reveal className="self-start lg:sticky lg:top-28">
              <h2
                className={SECTION_HEADING}
                style={{ color: CHAMPION_BLUE }}
              >
                Frequently Asked Questions
              </h2>
            </Reveal>

            <FaqAccordion faqs={capability.faqs} />
          </div>
        </div>
      </section>

      {/* ============================================================
          CLOSING CTA — the hero button links to #connect
      ============================================================ */}
      <GetInTouch />
    </main>
  );
}