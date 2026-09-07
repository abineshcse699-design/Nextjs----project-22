"use client";

import Link from "next/link";

import {
  MessageCircle,
  Send,
  ArrowUpRight,
} from "lucide-react";

import type { BlogPost, BlogSection } from "../blogs/blogData";

/* ============================================================
   BRAND
============================================================ */

const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";
const LAVENDER = "#A48FEA";

const ALIGN =
  "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

const BLOG_BASE =
  "/services/offerings/ai-native-contact-center/blogs";

/* ============================================================
   PROPS
============================================================ */

type BlogDetailProps = {
  post: BlogPost;
  related: BlogPost[];
};

/* ============================================================
   COMPONENT
============================================================ */

export default function BlogDetail({
  post,
  related,
}: BlogDetailProps) {
  /*
    Share URL is calculated only in browser.
  */
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "";

  const shareText = encodeURIComponent(post.title);

  const encodedUrl = encodeURIComponent(shareUrl);

  /* ==========================================================
     SOCIAL SHARE URLS
  ========================================================== */

  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  const xUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`;

  /* ==========================================================
     NATIVE SHARE
  ========================================================== */

  const handleNativeShare = async () => {
    if (typeof navigator === "undefined") {
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch {
        /*
          User cancelled native share.
        */
      }

      return;
    }

    /*
      Clipboard fallback.
    */
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch {
      /*
        Clipboard may not be available.
      */
    }
  };

  /*
    Defensive fallbacks in case a blog entry is missing
    intro or sections at runtime.
  */
  const introParagraphs: string[] = post.intro ?? [];
  const blogSections: BlogSection[] = post.sections ?? [];

  return (
    <main className="min-h-screen bg-white">
      <div className={`${ALIGN} py-8 sm:py-10`}>
        {/* ====================================================
            BREADCRUMB
        ==================================================== */}

        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
        >
          <Link href="/" className="transition-colors hover:text-[#4F3FE0]">
            Home
          </Link>

          <span>/</span>

          <Link
            href="/services"
            className="transition-colors hover:text-[#4F3FE0]"
          >
            Services
          </Link>

          <span>/</span>

          <Link
            href="/services/offerings/ai-native-contact-center"
            className="transition-colors hover:text-[#4F3FE0]"
          >
            AI Voice Call
          </Link>

          <span>/</span>

          <Link
            href={BLOG_BASE}
            className="transition-colors hover:text-[#4F3FE0]"
          >
            Blogs
          </Link>

          <span>/</span>

          <span className="max-w-full truncate text-slate-700 sm:max-w-[420px]">
            {post.title}
          </span>
        </nav>

        {/* ====================================================
            MAIN TWO COLUMN LAYOUT
        ==================================================== */}

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
          {/* ==================================================
              ARTICLE
          ================================================== */}

          <article className="min-w-0">
            <span
              className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
              style={{
                backgroundColor: "#F0EDFF",
                color: INDIGO_CTA,
              }}
            >
              {post.category}
            </span>

            <h1
              className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: CHAMPION_BLUE }}
            >
              {post.title}
            </h1>

            <div className="mt-7 flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-center">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span>Last Updated: {post.lastUpdated}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <div className="sm:ml-auto">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-medium text-slate-600">
                    Share on
                  </span>

                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#1B2560] hover:bg-slate-50"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill={CHAMPION_BLUE}
                      aria-hidden="true"
                    >
                      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7 2 2 0 0 0 5.25 3ZM20.44 13.41c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.87 1.09-3.37 1.86V8.5H9.39V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.84 0 1.86 1.72 1.86 3.05V20h3.38l.29-6.59Z" />
                    </svg>
                  </a>

                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#1B2560] hover:bg-slate-50"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill={CHAMPION_BLUE}
                      aria-hidden="true"
                    >
                      <path d="M14.2 8.2h2.1V4.7c-.36-.05-1.6-.16-3.05-.16-3.02 0-5.1 1.84-5.1 5.22v2.91H4.82v3.91h3.33V24h4.08v-7.42h3.32l.53-3.91h-3.85V10.1c0-1.13.31-1.9 1.97-1.9Z" />
                    </svg>
                  </a>

                  <a
                    href={xUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#1B2560] hover:bg-slate-50"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill={CHAMPION_BLUE}
                      aria-hidden="true"
                    >
                      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.9h1.73L8.29 3.98H6.43L17.8 19.9Z" />
                    </svg>
                  </a>

                  <button
                    type="button"
                    onClick={handleNativeShare}
                    aria-label="Share"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#1B2560] hover:bg-slate-50"
                  >
                    <MessageCircle size={18} style={{ color: CHAMPION_BLUE }} />
                  </button>

                  <button
                    type="button"
                    onClick={handleNativeShare}
                    aria-label="Copy or share blog"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#1B2560] hover:bg-slate-50"
                  >
                    <Send size={17} style={{ color: CHAMPION_BLUE }} />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl bg-slate-100">
              <img
                src={post.heroImage}
                alt={post.title}
                className="h-auto max-h-[620px] w-full object-cover"
              />
            </div>

            {/* ==================================================
                INTRO
            ================================================== */}

            {introParagraphs.length > 0 && (
              <div className="mt-10 space-y-5">
                {introParagraphs.map(
                  (paragraph: string, index: number) => (
                    <p
                      key={`${paragraph}-${index}`}
                      className="text-lg leading-8 text-slate-600"
                    >
                      {paragraph}
                    </p>
                  )
                )}
              </div>
            )}

            {/* ==================================================
                BLOG SECTIONS
            ================================================== */}

            {blogSections.length > 0 && (
              <div className="mt-12 space-y-12">
                {blogSections.map(
                  (section: BlogSection, index: number) => (
                    <section
                      key={`${section.heading}-${index}`}
                      id={`section-${index + 1}`}
                      className="scroll-mt-24"
                    >
                      <h2
                        className="text-2xl font-bold leading-tight sm:text-3xl"
                        style={{ color: CHAMPION_BLUE }}
                      >
                        {section.heading}
                      </h2>

                      <div className="mt-5 space-y-5">
                        {section.paragraphs.map(
                          (paragraph: string, paragraphIndex: number) => {
                            const colonIndex = paragraph.indexOf(":");

                            const hasLabel =
                              colonIndex > 0 && colonIndex < 35;

                            if (hasLabel) {
                              const label = paragraph.slice(
                                0,
                                colonIndex + 1
                              );

                              const content = paragraph.slice(
                                colonIndex + 1
                              );

                              return (
                                <p
                                  key={`${paragraphIndex}-${paragraph}`}
                                  className="text-base leading-8 text-slate-600 sm:text-lg"
                                >
                                  <strong
                                    className="font-semibold"
                                    style={{ color: CHAMPION_BLUE }}
                                  >
                                    {label}
                                  </strong>

                                  {content}
                                </p>
                              );
                            }

                            return (
                              <p
                                key={`${paragraphIndex}-${paragraph}`}
                                className="text-base leading-8 text-slate-600 sm:text-lg"
                              >
                                {paragraph}
                              </p>
                            );
                          }
                        )}
                      </div>
                    </section>
                  )
                )}
              </div>
            )}
          </article>

          {/* ====================================================
              SIDEBAR
          ==================================================== */}

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: INDIGO_CTA }}
              >
                About the Author
              </p>

              <div className="mt-5">
                <div className="flex items-center gap-4">
                  {post.author.photo ? (
                    <img
                      src={post.author.photo}
                      alt={post.author.name}
                      className="h-16 w-16 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white"
                      style={{ backgroundColor: CHAMPION_BLUE }}
                    >
                      {post.author.name.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div className="min-w-0">
                    <h3
                      className="font-bold"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {post.author.name}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {post.author.role}
                    </p>
                  </div>
                </div>

                {post.author.bio && (
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {post.author.bio}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-[#F5F3FC] p-6">
              <p
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: INDIGO_CTA }}
              >
                AI Voice Call
              </p>

              <h2
                className="mt-3 text-xl font-bold leading-tight"
                style={{ color: CHAMPION_BLUE }}
              >
                Need smarter customer conversations?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Starfii helps enterprises build AI powered voice
                experiences that connect customer conversations,
                intelligent automation, routing, and business workflows.
              </p>

              <Link
                href="/services/offerings/ai-native-contact-center#connect"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: CHAMPION_BLUE }}
              >
                Connect Now
                <ArrowUpRight size={15} />
              </Link>
            </div>

            {related.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2
                    className="text-xl font-bold"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    Related Blogs
                  </h2>
                </div>

                <div className="mt-5 space-y-4">
                  {related.map((item: BlogPost) => (
                    <Link
                      key={item.slug}
                      href={`${BLOG_BASE}/${item.slug}`}
                      className="group block rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#A48FEA] hover:shadow-md"
                    >
                      <div className="flex gap-4">
                        {item.heroImage && (
                          <img
                            src={item.heroImage}
                            alt={item.title}
                            className="h-20 w-24 shrink-0 rounded-xl object-cover"
                          />
                        )}

                        <div className="min-w-0">
                          <span
                            className="text-[11px] font-semibold uppercase tracking-wide"
                            style={{ color: LAVENDER }}
                          >
                            AI Voice Call
                          </span>

                          <p className="mt-1 line-clamp-3 text-sm font-semibold leading-6 text-slate-800 transition-colors group-hover:text-[#4F3FE0]">
                            {item.title}
                          </p>

                          <div
                            className="mt-2 flex items-center gap-1 text-xs font-semibold"
                            style={{ color: INDIGO_CTA }}
                          >
                            Read More
                            <ArrowUpRight
                              size={13}
                              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link
              href={BLOG_BASE}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold transition-all hover:border-[#A48FEA] hover:bg-[#F8F6FF]"
              style={{ color: INDIGO_CTA }}
            >
              View All AI Voice Blogs
              <ArrowUpRight size={15} />
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}