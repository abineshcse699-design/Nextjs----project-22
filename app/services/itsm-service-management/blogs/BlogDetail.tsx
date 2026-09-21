// app/services/itsm-service-management/blogs/BlogDetail.tsx

"use client";

import Link from "next/link";
import { Poppins, Inter } from "next/font/google";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
} from "lucide-react";
import type { ReactNode } from "react";

import type { BlogPost } from "./blogData";

/* ============================================================
   FONTS — loaded here so this page never falls back to Arial.
   Heading = Poppins, Body = Inter (same as CaseStudyTabs).
============================================================ */

const headingFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--cs-font-heading",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--cs-font-body",
  display: "swap",
});

/* ============================================================
   BRAND TOKENS + TYPE SCALE (identical to the Banking page)
============================================================ */

const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

// 34 / 40 / 46, medium, 1.15
const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px] text-[#1B2560]";
// 24 / 26, semibold, 1.2
const SUB_HEADING =
  "font-heading font-semibold leading-[1.2] text-[24px] sm:text-[26px] text-[#1B2560]";
// 17 / 18, slate-600
const BODY =
  "font-body text-[17px] leading-relaxed text-slate-600 lg:text-[18px]";
// 17, 1.7, slate-600 (card body)
const CARD_BODY = "font-body text-[17px] leading-[1.7] text-slate-600";
// 20, semibold (card titles)
const CARD_TITLE =
  "font-heading text-[20px] font-semibold leading-snug text-[#1B2560]";
// 16 / 18, semibold (eyebrow)
const EYEBROW =
  "font-body text-[16px] font-semibold sm:text-[18px]";

// NOTE: this file lives at app/services/itsm-service-management/blogs/BlogDetail.tsx
// Keep these base paths in sync with the folder this file actually lives in.
const BLOG_BASE = "/services/itsm-service-management/blogs";
const SERVICE_BASE = "/services/itsm-service-management";

type BlogDetailProps = {
  post: BlogPost;
  related: BlogPost[];
};

function getSectionId(index: number) {
  return `blog-section-${index + 1}`;
}

function stripNumber(heading: string) {
  return heading.replace(/^\d+\.\s*/, "");
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

/* ============================================================
   SHARE ICONS (brand glyphs as inline SVG)
============================================================ */

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.29 19.494h2.039L6.486 3.24H4.298l13.313 17.407z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function ShareButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center transition-transform duration-200 hover:-translate-y-0.5"
      style={{ color: INDIGO_CTA }}
    >
      {children}
    </button>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function BlogDetail({ post, related }: BlogDetailProps) {
  function openShare(build: (url: string, text: string) => string) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post.title);
    window.open(
      build(url, text),
      "_blank",
      "noopener,noreferrer,width=700,height=600"
    );
  }

  return (
    <main
      className={`blog-page ${headingFont.variable} ${bodyFont.variable} bg-white`}
    >
      <style>{`
        .blog-page .font-heading { font-family: var(--cs-font-heading), "Poppins", sans-serif; }
        .blog-page .font-body { font-family: var(--cs-font-body), "Inter", sans-serif; }
        .blog-page { font-family: var(--cs-font-body), "Inter", sans-serif; }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.seoDescription,
            dateModified: post.lastUpdated,
            author: { "@type": "Person", name: post.author.name },
            image: [post.heroImage],
            articleSection: post.category,
            keywords: post.seoKeywords.join(", "),
          }),
        }}
      />

      {/* =====================================================
          HERO — title, divider, meta + share, wide image
      ====================================================== */}
      <section className="bg-gradient-to-b from-[#cfe3f2] via-[#e1ecf6] to-[#eef0f5] pb-10 pt-28 sm:pt-32">
        <div className={ALIGN}>
          <nav
            aria-label="Breadcrumb"
            className="font-body flex flex-wrap items-center gap-2 text-[14px] font-medium text-[#1B2560]"
          >
            <Link href="/" className="hover:text-[#4F3FE0]">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href={SERVICE_BASE} className="hover:text-[#4F3FE0]">
              ITSM &amp; Enterprise Service Management
            </Link>
            <ChevronRight size={14} />
            <Link href={BLOG_BASE} className="hover:text-[#4F3FE0]">
              Blogs
            </Link>
            <ChevronRight size={14} />
            <span aria-current="page" className="line-clamp-1">
              {post.title}
            </span>
          </nav>

          <p className={`${EYEBROW} mt-10`} style={{ color: CHAMPION_BLUE }}>
            {post.category}
          </p>

          <h1 className="font-heading mt-4 max-w-[1100px] text-[32px] font-medium leading-[1.1] tracking-[-0.025em] text-[#1B2560] sm:text-[38px] lg:text-[44px] xl:text-[48px]">
            {post.title}
          </h1>

          <div className="mt-8 border-t border-slate-300" />

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="font-body flex flex-wrap items-center gap-x-4 gap-y-2 text-[16px] text-[#1B2560]">
              <span>Last Updated: {post.lastUpdated}</span>
              <span aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-2">
                <Clock3 size={15} />
                {post.readTime}
              </span>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <span
                className="font-body mr-2 text-[16px]"
                style={{ color: INDIGO_CTA }}
              >
                Share on
              </span>

              <ShareButton
                label="Share on LinkedIn"
                onClick={() =>
                  openShare(
                    (u) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}`
                  )
                }
              >
                <span className="font-body text-[22px] font-bold leading-none">
                  in
                </span>
              </ShareButton>

              <ShareButton
                label="Share on Facebook"
                onClick={() =>
                  openShare(
                    (u) => `https://www.facebook.com/sharer/sharer.php?u=${u}`
                  )
                }
              >
                <span className="font-body text-[24px] font-bold leading-none">
                  f
                </span>
              </ShareButton>

              <ShareButton
                label="Share on X"
                onClick={() =>
                  openShare(
                    (u, t) => `https://twitter.com/intent/tweet?url=${u}&text=${t}`
                  )
                }
              >
                <XIcon />
              </ShareButton>

              <ShareButton
                label="Share on WhatsApp"
                onClick={() =>
                  openShare((u, t) => `https://wa.me/?text=${t}%20${u}`)
                }
              >
                <WhatsAppIcon />
              </ShareButton>

              <ShareButton
                label="Share on Telegram"
                onClick={() =>
                  openShare(
                    (u, t) => `https://t.me/share/url?url=${u}&text=${t}`
                  )
                }
              >
                <TelegramIcon />
              </ShareButton>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl bg-slate-900">
            <img
              src={post.heroImage}
              alt={post.title}
              loading="eager"
              decoding="async"
              className="h-[240px] w-full object-cover object-center sm:h-[340px] lg:h-[410px]"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <section className="relative">
        <div className={`relative ${ALIGN}`}>
          <div className="grid grid-cols-1 gap-12 pt-14 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-16">
            {/* ================= ARTICLE ================= */}
            <article className="min-w-0">
              {/* Intro */}
              {post.intro.length > 0 && (
                <div className="space-y-6">
                  {post.intro.map((paragraph, index) =>
                    index === 0 ? (
                      <p
                        key={index}
                        className="font-heading text-[26px] leading-snug text-[#1B2560] lg:text-[30px]"
                      >
                        {paragraph}
                      </p>
                    ) : (
                      <p key={index} className={BODY}>
                        {paragraph}
                      </p>
                    )
                  )}
                </div>
              )}

              {/* Highlights */}
              {post.highlights && post.highlights.length > 0 && (
                <section className="mt-14">
                  <h2 className={SECTION_HEADING}>Key insights</h2>

                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {post.highlights.map((item) => (
                      <div
                        key={item.number}
                        className="rounded-2xl bg-[#F5F3FC] p-6 transition-shadow duration-300 hover:shadow-xl"
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className="font-body text-[17px] font-semibold"
                            style={{ color: INDIGO_CTA }}
                          >
                            {item.number}
                          </span>
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                            <ArrowUpRight
                              size={16}
                              style={{ color: CHAMPION_BLUE }}
                            />
                          </span>
                        </div>

                        <h3 className={`${CARD_TITLE} mt-10`}>{item.title}</h3>
                        <p className={`${CARD_BODY} mt-3`}>{item.body}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Body */}
              <div className="mt-16">
                <h2 className={SECTION_HEADING}>{post.category} in Practice</h2>

                <div className="mt-10 space-y-16">
                  {post.sections.map((section, index) => (
                    <section
                      key={`${stripNumber(section.heading)}-${index}`}
                      id={getSectionId(index)}
                      className="scroll-mt-28"
                    >
                      <h3 className={SUB_HEADING}>
                        {stripNumber(section.heading)}
                      </h3>

                      <div className="mt-6 space-y-5">
                        {section.paragraphs.map((paragraph, paragraphIndex) => {
                          const colonIndex = paragraph.indexOf(":");
                          const hasLabel = colonIndex > 0 && colonIndex < 35;

                          if (hasLabel) {
                            return (
                              <p key={paragraphIndex} className={BODY}>
                                <strong
                                  className="font-semibold"
                                  style={{ color: CHAMPION_BLUE }}
                                >
                                  {paragraph.slice(0, colonIndex + 1)}
                                </strong>
                                {paragraph.slice(colonIndex + 1)}
                              </p>
                            );
                          }

                          return (
                            <p key={paragraphIndex} className={BODY}>
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>

                      {section.image && (
                        <figure className="mt-8 overflow-hidden rounded-xl bg-slate-100">
                          <img
                            src={section.image}
                            alt={section.imageAlt || section.heading}
                            loading="lazy"
                            decoding="async"
                            className="h-auto max-h-[560px] w-full object-cover"
                          />
                          {section.imageAlt && (
                            <figcaption className="font-body px-5 py-3 text-[15px] text-slate-500">
                              {section.imageAlt}
                            </figcaption>
                          )}
                        </figure>
                      )}

                      {section.quote && (
                        <blockquote
                          className="mt-8 rounded-2xl border-l-4 p-7 sm:p-8"
                          style={{
                            borderColor: INDIGO_CTA,
                            backgroundColor: "#F5F3FC",
                          }}
                        >
                          <p className="font-heading text-[26px] leading-snug text-[#1B2560] lg:text-[30px]">
                            “{section.quote}”
                          </p>
                        </blockquote>
                      )}
                    </section>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              {post.benefits && post.benefits.length > 0 && (
                <section className="mt-20 overflow-hidden rounded-2xl bg-[#1B2560] p-7 sm:p-10 lg:p-12">
                  <div className="max-w-2xl">
                    <h2 className="font-heading text-[34px] font-medium leading-[1.15] text-white sm:text-[40px] lg:text-[46px]">
                      Why this matters
                    </h2>
                    <p className="font-body mt-5 text-[17px] leading-relaxed text-slate-300 lg:text-[18px]">
                      A well planned approach to ITSM and enterprise service management protects service continuity while modernizing processes, data, workflows, and integrations for how the business actually operates.
                    </p>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    {post.benefits.map((benefit) => (
                      <div
                        key={benefit.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition-colors duration-300 hover:bg-white/[0.1]"
                      >
                        <h3 className="font-heading text-[20px] font-semibold leading-snug text-white">
                          {benefit.title}
                        </h3>
                        <p className="font-body mt-2 text-[17px] leading-[1.7] text-slate-300">
                          {benefit.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Process */}
              {post.process && post.process.length > 0 && (
                <section className="mt-20">
                  <h2 className={`${SECTION_HEADING} max-w-2xl`}>
                    A practical delivery journey
                  </h2>

                  <div className="mt-10 space-y-5">
                    {post.process.map((step, index) => (
                      <div
                        key={`${step.title}-${index}`}
                        className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className="font-body flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[15px] font-semibold text-white"
                            style={{ backgroundColor: CHAMPION_BLUE }}
                          >
                            {step.number || String(index + 1).padStart(2, "0")}
                          </div>
                          <div>
                            <h3 className={CARD_TITLE}>{step.title}</h3>
                            <p className={`${CARD_BODY} mt-2`}>{step.body}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Key takeaways */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <section className="mt-20 rounded-2xl bg-[#F5F3FC] p-7 sm:p-10">
                  <h2 className={SECTION_HEADING}>What to remember</h2>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {post.keyTakeaways.map((takeaway, index) => (
                      <div
                        key={index}
                        className="flex gap-3 rounded-2xl bg-white p-5"
                      >
                        <Check
                          size={20}
                          className="mt-1 flex-shrink-0"
                          style={{ color: INDIGO_CTA }}
                        />
                        <p className={CARD_BODY}>{takeaway}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Conclusion */}
              {post.conclusion && (
                <section className="mt-20">
                  <div className="rounded-2xl bg-[#EAE4FA] p-8 sm:p-10 lg:p-12">
                    <h2 className={SECTION_HEADING}>Final perspective</h2>
                    <p className={`${BODY} mt-6 max-w-4xl`}>{post.conclusion}</p>
                  </div>
                </section>
              )}

              {/* CTA */}
              {post.cta && (
                <section className="mt-12 overflow-hidden rounded-2xl bg-[#1B2560]">
                  <div className="p-8 sm:p-10 lg:p-12">
                    <div className="max-w-2xl">
                      <h2 className="font-heading text-[34px] font-medium leading-[1.15] text-white sm:text-[40px] lg:text-[46px]">
                        {post.cta.title}
                      </h2>
                      <p className="font-body mt-5 text-[17px] leading-relaxed text-slate-300 lg:text-[18px]">
                        {post.cta.body}
                      </p>
                      <Link
                        href={post.cta.buttonHref}
                        className="font-body mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold transition duration-300 hover:-translate-y-1 hover:bg-[#F1EEFC]"
                        style={{ color: INDIGO_CTA }}
                      >
                        {post.cta.buttonText}
                        <ArrowUpRight size={17} />
                      </Link>
                    </div>
                  </div>
                </section>
              )}
            </article>

            {/* ================= SIDEBAR ================= */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="space-y-6">
                {/* Author */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h2 className={SUB_HEADING}>About the author</h2>

                  <div className="mt-5 flex items-center gap-4">
                    <span
                      className="font-heading flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl text-[20px] font-semibold text-white"
                      style={{ backgroundColor: CHAMPION_BLUE }}
                    >
                      {getInitials(post.author.name)}
                    </span>
                    <div className="min-w-0">
                      <p className="font-body text-[17px] font-semibold leading-snug text-[#1B2560]">
                        {post.author.name}
                      </p>
                      <p className="font-body mt-1 text-[15px] text-slate-500">
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  <p className={`${CARD_BODY} mt-5`}>{post.author.bio}</p>
                </div>

                {/* Table of contents */}
                {post.sections.length > 0 && (
                  <div className="rounded-2xl bg-[#F5F3FC] p-6">
                    <h2 className={SUB_HEADING}>On this page</h2>

                    <div className="mt-5 space-y-1">
                      {post.sections.map((section, index) => (
                        <a
                          key={`${stripNumber(section.heading)}-${index}`}
                          href={`#${getSectionId(index)}`}
                          className="font-body flex gap-3 rounded-xl px-3 py-2.5 text-[15px] leading-snug text-slate-600 transition-colors hover:bg-white hover:text-[#4F3FE0]"
                        >
                          <span className="w-6 flex-shrink-0 font-semibold text-slate-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{stripNumber(section.heading)}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* ITSM & Enterprise Service Management CTA */}
                <div className="rounded-2xl bg-[#F5F3FC] p-6">
                  <p
                    className="font-body text-[15px] font-semibold"
                    style={{ color: INDIGO_CTA }}
                  >
                    ITSM &amp; Enterprise Service Management
                  </p>

                  <h2 className={`${SUB_HEADING} mt-3`}>
                    Build service operations that scale with confidence
                  </h2>

                  <p className={`${CARD_BODY} mt-4`}>
                    Modernize service desk, workflows, automation, and integrations with a structured, low risk approach to enterprise service management.
                  </p>

                  <Link
                    href={`${SERVICE_BASE}#connect`}
                    className="font-body mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: CHAMPION_BLUE }}
                  >
                    Connect Now
                    <ArrowUpRight size={15} />
                  </Link>
                </div>

                {/* Related */}
                {related.length > 0 && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h2 className={SUB_HEADING}>More insights</h2>
                      <Link
                        href={BLOG_BASE}
                        className="font-body text-[15px] font-semibold"
                        style={{ color: INDIGO_CTA }}
                      >
                        View all
                      </Link>
                    </div>

                    <div className="mt-5 space-y-4">
                      {related.map((item) => (
                        <Link
                          key={item.slug}
                          href={`${BLOG_BASE}/${item.slug}`}
                          className="group block overflow-hidden rounded-2xl border border-slate-200 transition-shadow duration-300 hover:shadow-lg"
                        >
                          <div className="h-32 overflow-hidden">
                            <img
                              src={item.heroImage}
                              alt={item.title}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-heading line-clamp-3 text-[17px] font-semibold leading-snug text-[#1B2560]">
                              {item.title}
                            </h3>
                            <span
                              className="font-body mt-3 inline-flex items-center gap-1 text-[15px] font-medium"
                              style={{ color: INDIGO_CTA }}
                            >
                              Read insight
                              <ArrowUpRight size={15} />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM RELATED
      ====================================================== */}
      {related.length > 0 && (
        <section className="mt-24 bg-[#EEF0F5] py-24">
          <div className={ALIGN}>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <h2 className={SECTION_HEADING}>Explore more ITSM &amp; service management insights</h2>

              <Link
                href={BLOG_BASE}
                className="font-body inline-flex items-center gap-1.5 text-[15px] font-semibold"
                style={{ color: INDIGO_CTA }}
              >
                All blogs
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`${BLOG_BASE}/${item.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white transition-shadow duration-500 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
                  style={{ border: "1px solid #E5E1F5" }}
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7">
                    <h3 className={CARD_TITLE}>{item.title}</h3>

                    <p className="font-body mt-4 line-clamp-3 text-[15px] leading-relaxed text-slate-500">
                      {item.excerpt}
                    </p>

                    <div className="font-body mt-6 flex items-center gap-2 text-[15px] text-slate-500">
                      <Clock3 size={14} />
                      {item.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}