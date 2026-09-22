// app/services/data-analytics/capabilities/[slug]/page.tsx
//
// Built section by section from the Software & Product Engineering
// capability detail page (hero -> overview -> capability cards -> dark
// section -> gradient carousel -> FAQ -> closing CTA), with the same
// tokens, type scale, spacing, animations and hover effects.

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ArrowUpRight,
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";
import { capabilities, getCapabilityBySlug } from "../data";
import FaqAccordion from "../FaqAccordion";
import Reveal from "../reveal";
import OtherCapabilities from "../othercapabilities";

/* ===============================================================
   BRAND TOKENS — identical to the Software & Product Engineering page
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";

/* ===============================================================
   ROUTES — must match the real folders on disk:
   app/services/data-analytics/capabilities/[slug]/page.tsx
   (lowercase, hyphenated — routes are case-sensitive in production)
================================================================ */

const SERVICES_BASE = "/services";
const SERVICE_BASE = "/services/data-analytics";
const CAPABILITY_BASE = "/services/data-analytics/capabilities";

// Generic 4-step delivery process shown on every capability page.
const processSteps = [
  {
    icon: Search,
    title: "Assess",
    body: "We audit your current data sources, pipelines, and reporting to understand where data lives and where it breaks down before any new architecture is proposed.",
  },
  {
    icon: PenTool,
    title: "Architect",
    body: "Data models, pipeline architecture, and governance rules are planned and validated with your team before a single pipeline is built.",
  },
  {
    icon: Code2,
    title: "Engineer",
    body: "Our data engineering team ships pipelines and platforms in short, visible increments, so you see trustworthy data flowing early, not just at the end.",
  },
  {
    icon: Rocket,
    title: "Govern & Scale",
    body: "We support the platform post launch, monitoring pipeline health and evolving governance as data volume, sources, and users grow.",
  },
];

/* ===============================================================
   GLOBAL KEYFRAMES — same CSS as the Software & Product Engineering page
================================================================ */

function AnimationStyles() {
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

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

// NOTE: In Next.js 15, `params` is a Promise and MUST be awaited.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);
  if (!capability) return {};
  return {
    title: `${capability.title} | Starfii`,
    description: capability.body,
    alternates: {
      canonical: `${CAPABILITY_BASE}/${capability.slug}`,
    },
  };
}

/* ===============================================================
   PAGE
================================================================ */

export default async function CapabilityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);
  if (!capability) notFound();

  // Everything else in the "Data & Analytics" grid.
  const otherCapabilities = capabilities
    .filter((c) => c.slug !== capability.slug)
    .map((c) => ({
      slug: c.slug,
      title: c.title,
      body: c.body,
      heroImage: c.heroImage,
    }));

  return (
    <main className="bg-white">
      <AnimationStyles />

      {/* ============================================================
          HERO — identical to the Software & Product Engineering hero
      ============================================================ */}
      <section className="relative isolate min-h-[460px] overflow-hidden lg:min-h-[620px]">
        <div className="absolute inset-0 -z-10">
          <img
            src={capability.heroImage}
            alt={capability.title}
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
                Data &amp; Analytics
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
              Connect Now
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <div className={ALIGN}>
        {/* ============================================================
            OVERVIEW — same block as the Software page's "Q&A" section
        ============================================================ */}
        <Reveal as="section" className="mb-20 mt-16 lg:mb-24 lg:mt-20">
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
                      style={{ backgroundColor: "#F1EEFC", color: INDIGO_CTA }}
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
      </div>

      {/* ============================================================
          KEY FEATURES — same as the Software page's capability cards
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
                A closer look at what Starfii builds and supports under{" "}
                {capability.title.toLowerCase()}, so your team can trust
                and act on your data with confidence.
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
          HOW WE DELIVER — same dark section as Software "Use Cases"
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
          OTHER CAPABILITIES — same as the Software "Case Studies"
      ============================================================ */}
      <OtherCapabilities
        items={otherCapabilities}
        basePath={CAPABILITY_BASE}
        viewAllHref={SERVICE_BASE}
      />

      {/* ============================================================
          FAQ — same section as the Software page FAQ
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

        {/* SEO: FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: capability.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            }),
          }}
        />
      </section>

    
    </main>
  );
}