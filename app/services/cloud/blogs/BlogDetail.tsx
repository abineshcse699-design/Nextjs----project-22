"use client";

import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  MessageCircle,
  Send,
} from "lucide-react";

import type { BlogPost } from "./blogsData";

/* ===============================================================
   BRAND
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

const ALIGN =
  "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16";

/* ===============================================================
   TYPES
================================================================ */

type BlogDetailProps = {
  post: BlogPost;
  related: BlogPost[];
};

/* ===============================================================
   COMPONENT
================================================================ */

export default function BlogDetail({
  post,
  related,
}: BlogDetailProps) {
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "";

  const shareText = encodeURIComponent(
    post.title
  );

  const encodedUrl =
    encodeURIComponent(shareUrl);

  return (
    <main className="min-h-screen bg-white">
      {/* ==========================================================
          HERO
      ========================================================== */}

      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: "#F5F3FC",
        }}
      >
        <div className={ALIGN}>
          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="font-body flex flex-wrap items-center gap-2 pt-8 text-[14px] font-medium"
            style={{
              color: CHAMPION_BLUE,
            }}
          >
            <Link
              href="/"
              className="transition-opacity hover:opacity-60"
            >
              Home
            </Link>

            <ChevronRight size={14} />

            <Link
              href="/services"
              className="transition-opacity hover:opacity-60"
            >
              Services
            </Link>

            <ChevronRight size={14} />

            <Link
              href="/services/cloud"
              className="transition-opacity hover:opacity-60"
            >
              Cloud Engineering
            </Link>

            <ChevronRight size={14} />

            <Link
              href="/services/cloud/blogs"
              className="transition-opacity hover:opacity-60"
            >
              Blogs
            </Link>

            <ChevronRight size={14} />

            <span className="text-slate-500">
              {post.title}
            </span>
          </nav>

          {/* Hero content */}

          <div className="grid grid-cols-1 gap-12 py-14 lg:grid-cols-[1fr_520px] lg:items-center lg:py-20">
            <div>
              <span
                className="font-body inline-flex rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-wide"
                style={{
                  backgroundColor:
                    "rgba(164,143,234,0.18)",
                  color: INDIGO_CTA,
                }}
              >
                {post.category}
              </span>

              <h1
                className="font-heading mt-6 text-[40px] font-medium leading-[1.12] sm:text-[48px] lg:text-[54px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                {post.title}
              </h1>

              <p className="font-body mt-6 max-w-2xl text-[17px] leading-[1.8] text-slate-600">
                {post.excerpt}
              </p>

              {/* Metadata */}

              <div className="font-body mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[13px] text-slate-500">
                <span>
                  Updated{" "}
                  <strong className="font-semibold text-slate-700">
                    {post.lastUpdated}
                  </strong>
                </span>

                <span className="hidden sm:inline">
                  •
                </span>

                <span>
                  {post.readTime}
                </span>
              </div>

              {/* Share */}

              <div className="mt-7 flex items-center gap-3">
                <span className="font-body mr-2 text-[13px] font-semibold text-slate-500">
                  Share
                </span>

                {/* LinkedIn */}

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-200 hover:scale-110"
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

                {/* X */}

                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  className="font-body flex h-10 w-10 items-center justify-center rounded-full bg-white text-[15px] font-bold transition-transform duration-200 hover:scale-110"
                  style={{
                    color: CHAMPION_BLUE,
                  }}
                >
                  X
                </a>

                {/* WhatsApp */}

                <a
                  href={`https://wa.me/?text=${shareText}%20${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-200 hover:scale-110"
                >
                  <MessageCircle
                    size={18}
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  />
                </a>

                {/* Copy */}

                <button
                  type="button"
                  aria-label="Copy link"
                  onClick={() => {
                    if (
                      typeof navigator !==
                      "undefined"
                    ) {
                      navigator.clipboard?.writeText(
                        window.location.href
                      );
                    }
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform duration-200 hover:scale-110"
                >
                  <Send
                    size={17}
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  />
                </button>
              </div>
            </div>

            {/* Hero image */}

            <div className="overflow-hidden rounded-[24px]">
              <img
                src={post.heroImage}
                alt={post.title}
                className="aspect-[16/10] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          ARTICLE
      ========================================================== */}

      <section className="py-16 lg:py-24">
        <div className={ALIGN}>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,820px)_300px]">
            {/* Main content */}

            <article>
              {/* Intro */}

              <div className="space-y-6">
                {post.intro.map(
                  (paragraph, index) => (
                    <p
                      key={index}
                      className="font-body text-[17px] leading-[1.9] text-slate-700"
                    >
                      {paragraph}
                    </p>
                  )
                )}
              </div>

              {/* Sections */}

              <div className="mt-14 space-y-14">
                {post.sections.map(
                  (section, index) => (
                    <section
                      key={section.heading}
                    >
                      <div className="flex items-start gap-5">
                        <span
                          className="font-body mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white"
                          style={{
                            backgroundColor:
                              INDIGO_CTA,
                          }}
                        >
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>

                        <div>
                          <h2
                            className="font-heading text-[27px] font-semibold leading-snug lg:text-[31px]"
                            style={{
                              color:
                                CHAMPION_BLUE,
                            }}
                          >
                            {section.heading}
                          </h2>

                          <div className="mt-5 space-y-5">
                            {section.paragraphs.map(
                              (
                                paragraph,
                                paragraphIndex
                              ) => (
                                <p
                                  key={
                                    paragraphIndex
                                  }
                                  className="font-body text-[16px] leading-[1.9] text-slate-600"
                                >
                                  {
                                    paragraph
                                  }
                                </p>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </section>
                  )
                )}
              </div>

              {/* Bottom back link */}

              <div
                className="mt-16 border-t pt-8"
                style={{
                  borderColor: "#E5E1F5",
                }}
              >
                <Link
                  href="/services/cloud/blogs"
                  className="font-body inline-flex items-center gap-2 text-[14px] font-semibold transition-transform duration-200 hover:-translate-x-1"
                  style={{
                    color: INDIGO_CTA,
                  }}
                >
                  <ArrowLeft size={16} />
                  Back to Cloud Engineering
                  Insights
                </Link>
              </div>
            </article>

            {/* ======================================================
                AUTHOR SIDEBAR
            ====================================================== */}

            <aside>
              <div
                className="sticky top-8 rounded-2xl p-7"
                style={{
                  backgroundColor:
                    "#F5F3FC",
                }}
              >
                <p
                  className="font-body text-[12px] font-semibold uppercase tracking-[0.12em]"
                  style={{
                    color: INDIGO_CTA,
                  }}
                >
                  Written By
                </p>

                <div className="mt-5 flex items-center gap-4">
                  <img
                    src={post.author.photo}
                    alt={post.author.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <h3
                      className="font-heading text-[16px] font-semibold"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      {post.author.name}
                    </h3>

                    <p className="font-body mt-1 text-[13px] text-slate-500">
                      {post.author.role}
                    </p>
                  </div>
                </div>

                <p className="font-body mt-5 text-[14px] leading-[1.8] text-slate-600">
                  {post.author.bio}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ==========================================================
          RELATED BLOGS
      ========================================================== */}

      {related.length > 0 && (
        <section
          className="py-20"
          style={{
            backgroundColor: "#EEF0F7",
          }}
        >
          <div className={ALIGN}>
            <div className="flex items-center justify-between">
              <h2
                className="font-heading text-[32px] font-medium lg:text-[40px]"
                style={{
                  color: CHAMPION_BLUE,
                }}
              >
                Related Insights
              </h2>

              <Link
                href="/services/cloud/blogs"
                className="font-body hidden items-center gap-1.5 text-[14px] font-semibold sm:flex"
                style={{
                  color: INDIGO_CTA,
                }}
              >
                View All
                <ArrowUpRight
                  size={15}
                />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/services/cloud/blogs/${blog.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-[210px] overflow-hidden">
                    <img
                      src={blog.heroImage}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <span
                      className="font-body text-[11px] font-semibold uppercase tracking-wide"
                      style={{
                        color: INDIGO_CTA,
                      }}
                    >
                      {blog.category}
                    </span>

                    <h3
                      className="font-heading mt-2 line-clamp-2 text-[19px] font-semibold leading-snug"
                      style={{
                        color:
                          CHAMPION_BLUE,
                      }}
                    >
                      {blog.title}
                    </h3>

                    <p className="font-body mt-3 line-clamp-3 text-[14px] leading-relaxed text-slate-600">
                      {blog.excerpt}
                    </p>

                    <span
                      className="font-body mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold"
                      style={{
                        color: INDIGO_CTA,
                      }}
                    >
                      Read More
                      <ArrowUpRight
                        size={15}
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================================
          CTA
      ========================================================== */}

      <section
        className="py-20"
        style={{
          backgroundColor: CHAMPION_BLUE,
        }}
      >
        <div
          className={`${ALIGN} text-center`}
        >
          <h2 className="font-heading mx-auto max-w-3xl text-[34px] font-medium leading-tight text-white lg:text-[44px]">
            Ready to Build a More Reliable,
            Scalable Cloud Environment?
          </h2>

          <p className="font-body mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-white/65">
            Talk to Starfii about cloud migration,
            modernization, FinOps, DevOps, security,
            or managed cloud operations.
          </p>

          <Link
            href="/contact"
            className="font-body mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold transition-transform duration-300 hover:scale-[1.03]"
            style={{
              color: CHAMPION_BLUE,
            }}
          >
            Talk to Our Cloud Team
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}