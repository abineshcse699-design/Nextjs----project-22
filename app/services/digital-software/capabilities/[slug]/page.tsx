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

/* ===============================================================
   BRAND TOKENS — kept identical to the parent section so the
   detail page reads as the same site, not a different template.
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

// Generic 4-step delivery process shown on every capability page.
// Kept generic on purpose so it never drifts out of sync per capability,
// while the copy below still reads naturally for any of the 9 slugs.
const processSteps = [
  {
    icon: Search,
    title: "Discover",
    body: "We study your current systems, users, and business goals to define what success looks like before writing a line of code.",
  },
  {
    icon: PenTool,
    title: "Design",
    body: "Architecture, experience, and technical approach are planned and validated with your team before full scale build begins.",
  },
  {
    icon: Code2,
    title: "Build",
    body: "Our engineering team delivers in short, visible increments, so you see working software early and often, not just at the end.",
  },
  {
    icon: Rocket,
    title: "Scale",
    body: "We support the product post launch, monitoring performance and iterating as usage, features, and demands grow.",
  },
];

/* ===============================================================
   STATIC PARAMS — one page per capability slug
================================================================ */

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

// NOTE: In Next.js 15, `params` is a Promise and MUST be awaited
// before you can read `.slug` off of it. Reading `params.slug`
// directly (the old Next 14 pattern) silently returns `undefined`
// at runtime, which makes getCapabilityBySlug() return undefined
// and notFound() fire for every single slug.
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

  // Everything else in the "Software & Product Engineering" grid,
  // shown at the bottom so people can keep browsing capabilities.
  const otherCapabilities = capabilities.filter((c) => c.slug !== capability.slug);

  return (
    <main className="bg-white">
      {/* ============================================================
          BREADCRUMB + HERO
          Extra top padding (pt-32 lg:pt-40) keeps the breadcrumb and
          heading clear of the site's fixed navbar — without this the
          hero content renders underneath it.
      ============================================================ */}
      <section className="relative isolate min-h-[620px] overflow-hidden lg:min-h-[700px]">
        <div className="absolute inset-0 -z-10">
          <img
            src={capability.heroImage}
            alt={capability.title}
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.70) 32%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.04) 78%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        <div className={`${ALIGN} relative flex min-h-[620px] items-end lg:min-h-[700px]`}>
          <div className="w-full max-w-[720px] pb-16 pt-32 lg:pb-20 lg:pt-40">
            <nav
              aria-label="Breadcrumb"
              className="font-body flex flex-wrap items-center gap-2 text-[14px] font-medium"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              <Link href="/" className="transition-opacity hover:opacity-70">
                Home
              </Link>
              <ChevronRight size={14} />
              <Link href="/services" className="transition-opacity hover:opacity-70">
                Services
              </Link>
              <ChevronRight size={14} />
              <Link
                href="/services/digital-software"
                className="transition-opacity hover:opacity-70"
              >
                Software &amp; Product Engineering
              </Link>
              <ChevronRight size={14} />
              <span className="text-white/60">{capability.title}</span>
            </nav>

            <span
              className="font-body mt-8 inline-block text-[16px] font-semibold sm:text-[18px]"
              style={{ color: "#FFFFFF" }}
            >
              Software &amp; Product Engineering Capability
            </span>

            <h1 className="font-heading mt-5 max-w-[680px] text-[42px] font-medium leading-[1.1] tracking-[-0.02em] text-white sm:text-[52px] lg:text-[60px]">
              {capability.title}
            </h1>

            <p className="font-body mt-7 max-w-[620px] text-[16px] leading-[1.7] text-white/90 sm:text-[17px] lg:text-[18px]">
              {capability.body}
            </p>

            <div className="mt-9 flex flex-wrap gap-2.5">
              {capability.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body rounded-full border border-white/25 px-4 py-2 text-[12px] font-semibold tracking-[0.1em] text-white/85"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#connect"
              className="font-body mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold transition-all duration-300 hover:scale-[1.03] hover:bg-white/90"
              style={{ color: INDIGO_CTA }}
            >
              Connect Now
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          OVERVIEW
      ============================================================ */}
      <div className={ALIGN}>
        <section className="mt-16 pb-4 lg:mt-20">
          <div
            className="grid grid-cols-1 items-center gap-10 rounded-2xl p-10 lg:grid-cols-2"
            style={{ backgroundColor: "#F5F3FC" }}
          >
            <div>
              <span
                className="font-body inline-flex items-center gap-2 text-[16px] font-semibold sm:text-[18px]"
                style={{ color: CHAMPION_BLUE }}
              >
                Overview
              </span>
              <h2
                className="font-heading mt-4 text-[26px] font-medium leading-snug lg:text-[30px]"
                style={{ color: LAVENDER_ACCENT }}
              >
                What Is {capability.title}?
              </h2>
              <p className="font-body mt-5 text-[15px] leading-relaxed text-slate-600">
                {capability.body}
              </p>

              <Link
                href="#connect"
                className="font-body mt-8 inline-flex items-center gap-1.5 text-[15px] font-semibold transition-transform duration-200 hover:translate-x-1"
                style={{ color: INDIGO_CTA }}
              >
                Talk to our team
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src={capability.heroImage}
                alt={capability.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ============================================================
          KEY FEATURES — what's included under this capability
      ============================================================ */}
      <div className={ALIGN}>
        <section className="mt-24">
          <span
            className="font-body inline-flex items-center gap-2 text-[16px] font-semibold sm:text-[18px]"
            style={{ color: CHAMPION_BLUE }}
          >
            What's Included
          </span>
          <h2
            className="font-heading mt-4 max-w-2xl text-[30px] font-medium leading-snug lg:text-[36px]"
            style={{ color: CHAMPION_BLUE }}
          >
            {capability.title} Capabilities We Deliver
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {capability.keyFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className="rounded-2xl border p-8 transition-shadow duration-300 hover:shadow-lg"
                style={{ borderColor: "#E5E1F5" }}
              >
                <span
                  className="font-body inline-flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                  style={{ backgroundColor: INDIGO_CTA }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-heading mt-5 text-[19px] font-semibold leading-snug"
                  style={{ color: CHAMPION_BLUE }}
                >
                  {feature.title}
                </h3>
                <p className="font-body mt-3 text-[15px] leading-relaxed text-slate-600">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ============================================================
          OUR APPROACH — generic 4-step delivery process
      ============================================================ */}
      <section className="mt-24 bg-[#08070F] py-24">
        <div className={ALIGN}>
          <span
            className="font-body inline-flex items-center gap-2 text-[16px] font-semibold sm:text-[18px]"
            style={{ color: "#FFFFFF" }}
          >
            Our Approach
          </span>
          <h2 className="font-heading mt-4 max-w-2xl text-[30px] font-medium leading-snug text-white lg:text-[36px]">
            How We Deliver {capability.title}
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full"
                      style={{ backgroundColor: INDIGO_CTA }}
                    >
                      <Icon size={19} className="text-white" />
                    </span>
                    <span className="font-body text-[13px] font-semibold tracking-[0.16em] text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading mt-6 text-[19px] font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="font-body mt-3 text-[14px] leading-relaxed text-white/55">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          FREQUENTLY ASKED QUESTIONS
      ============================================================ */}
      <div className={ALIGN}>
        <section className="mt-24">
          <span
            className="font-body inline-flex items-center gap-2 text-[16px] font-semibold sm:text-[18px]"
            style={{ color: CHAMPION_BLUE }}
          >
            FAQs
          </span>
          <h2
            className="font-heading mt-4 max-w-2xl text-[30px] font-medium leading-snug lg:text-[36px]"
            style={{ color: CHAMPION_BLUE }}
          >
            Frequently Asked Questions
          </h2>
          <p className="font-body mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Common questions about {capability.title.toLowerCase()}. Don't
            see yours here — reach out and our team will answer directly.
          </p>

          <FaqAccordion faqs={capability.faqs} />
        </section>
      </div>

      {/* ============================================================
          MORE CAPABILITIES — keep people browsing the rest of the grid
      ============================================================ */}
      <section className="mt-24 bg-[#08070F] py-24">
        <div className={ALIGN}>
          <span
            className="font-body inline-flex items-center gap-2 text-[16px] font-semibold sm:text-[18px]"
            style={{ color: "#FFFFFF" }}
          >
            Explore More
          </span>
          <h2 className="font-heading mt-4 max-w-3xl text-[34px] font-medium leading-[1.15] text-white sm:text-[40px]">
            Other Software &amp; Product Engineering Capabilities
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {otherCapabilities.map((c) => (
              <Link
                key={c.slug}
                href={`/services/digital-software/capabilities/${c.slug}`}
                className="group flex flex-col rounded-[24px] border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(164,143,234,0.48)] hover:bg-white/[0.05]"
              >
                <h3 className="font-heading text-[20px] font-semibold leading-snug text-white">
                  {c.title}
                </h3>
                <p className="font-body ss-clamp-3 mt-3 text-[14px] leading-[1.7] text-white/55">
                  {c.body}
                </p>
                <span
                  className="font-body mt-6 inline-flex w-fit items-center gap-1.5 text-[14px] font-medium"
                  style={{ color: LAVENDER_ACCENT }}
                >
                  <span className="relative">
                    Learn More
                    <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-current transition-[width] duration-500 ease-out group-hover:w-full" />
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CLOSING CTA — identical treatment to the parent section
      ============================================================ */}
      <section id="connect" className="bg-white py-24">
        <div className={ALIGN}>
          <div
            className="overflow-hidden rounded-[28px] px-8 py-16 text-center sm:px-16"
            style={{ backgroundColor: CHAMPION_BLUE }}
          >
            <span
              className="font-body inline-flex items-center gap-2 text-[16px] font-semibold sm:text-[18px]"
              style={{ color: "#FFFFFF" }}
            >
              CTA
            </span>
            <h2 className="font-heading mx-auto mt-4 max-w-2xl text-[32px] font-medium leading-[1.2] text-white lg:text-[40px]">
              Ready to Build With {capability.title}?
            </h2>
            <p className="font-body mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
              Talk to Starfii about {capability.title.toLowerCase()} and how it
              fits into your next software product or platform.
            </p>
            <a
              href="mailto:hello@starfii.com"
              className="font-body mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-semibold transition-transform duration-300 hover:scale-[1.03]"
              style={{ backgroundColor: "#FFFFFF", color: CHAMPION_BLUE }}
            >
              Connect Now
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}