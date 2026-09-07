"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  MessageCircle,
  Send,
} from "lucide-react";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

type BlogSection = {
  heading: string;
  paragraphs: string[];
};

type BlogPost = {
  slug: string;
  title: string;
  category: string;
  lastUpdated: string;
  readTime: string;
  heroImage: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    photo: string;
    bio: string;
  };
  intro: string[];
  sections: BlogSection[];
};

type BlogDetailProps = {
  post: BlogPost;
  related: BlogPost[];
};

export default function BlogDetail({
  post,
  related,
}: BlogDetailProps) {
  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const shareLinkedIn = () => {
    if (!shareUrl) return;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareX = () => {
    if (!shareUrl) return;
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(post.title)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(
      post.title
    )}&body=${encodeURIComponent(shareUrl)}`;
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-slate-200 bg-[#F7F5FD]">
        <div className="mx-auto max-w-[1240px] px-6 py-7 sm:px-10 lg:px-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-slate-500"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#1B2560]"
            >
              Home
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/services"
              className="transition-colors hover:text-[#1B2560]"
            >
              Services
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/services/business-process-services"
              className="transition-colors hover:text-[#1B2560]"
            >
              Business Process Services
            </Link>
            <ChevronRight size={14} />
            <Link
              href="/services/business-process-services/blogs"
              className="transition-colors hover:text-[#1B2560]"
            >
              Blogs
            </Link>
            <ChevronRight size={14} />
            <span className="text-slate-400">{post.category}</span>
          </nav>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-4 py-2 text-[12px] font-semibold tracking-wide"
                style={{
                  backgroundColor: "#F1EEFC",
                  color: INDIGO_CTA,
                }}
              >
                {post.category}
              </span>

              <span className="text-[13px] text-slate-400">
                {post.readTime}
              </span>

              <span className="text-slate-300">•</span>

              <span className="text-[13px] text-slate-400">
                Updated {post.lastUpdated}
              </span>
            </div>

            <h1
              className="mt-7 text-[42px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[52px] lg:text-[64px]"
              style={{ color: CHAMPION_BLUE }}
            >
              {post.title}
            </h1>

            <p className="mt-7 max-w-3xl text-[18px] leading-[1.8] text-slate-600">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.photo}
                  alt={post.author.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p
                    className="text-[14px] font-semibold"
                    style={{ color: CHAMPION_BLUE }}
                  >
                    {post.author.name}
                  </p>
                  <p className="text-[12px] text-slate-500">
                    {post.author.role}
                  </p>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-slate-200 sm:block" />

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Share on LinkedIn"
                  onClick={shareLinkedIn}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#A48FEA]"
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
                </button>

                <button
                  type="button"
                  aria-label="Share on X"
                  onClick={shareX}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[15px] font-semibold transition-all hover:-translate-y-0.5 hover:border-[#A48FEA]"
                >
                  𝕏
                </button>

                <button
                  type="button"
                  aria-label="Share by email"
                  onClick={shareEmail}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#A48FEA]"
                >
                  <Send size={16} style={{ color: CHAMPION_BLUE }} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-[26px]">
            <img
              src={post.heroImage}
              alt={post.title}
              className="h-[320px] w-full object-cover sm:h-[440px] lg:h-[560px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-14 px-6 pb-20 sm:px-10 lg:grid-cols-[1fr_320px] lg:px-16">
          <article className="max-w-3xl">
            <div className="space-y-5 text-[17px] leading-[1.9] text-slate-700">
              {post.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 space-y-12">
              {post.sections.map((section, index) => (
                <section key={section.heading}>
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white"
                      style={{ backgroundColor: INDIGO_CTA }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h2
                        className="text-[27px] font-semibold leading-snug"
                        style={{ color: CHAMPION_BLUE }}
                      >
                        {section.heading}
                      </h2>

                      <div className="mt-5 space-y-4 text-[16px] leading-[1.9] text-slate-600">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </article>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div
              className="rounded-2xl border p-7"
              style={{
                borderColor: "#E5E1F5",
                backgroundColor: "#F8F7FC",
              }}
            >
              <p
                className="text-[12px] font-semibold tracking-[0.12em]"
                style={{ color: INDIGO_CTA }}
              >
                ABOUT THE AUTHOR
              </p>

              <img
                src={post.author.photo}
                alt={post.author.name}
                className="mt-5 h-16 w-16 rounded-full object-cover"
              />

              <h3
                className="mt-4 text-[18px] font-semibold"
                style={{ color: CHAMPION_BLUE }}
              >
                {post.author.name}
              </h3>

              <p className="mt-1 text-[13px] text-slate-500">
                {post.author.role}
              </p>

              <p className="mt-5 text-[14px] leading-relaxed text-slate-600">
                {post.author.bio}
              </p>

              <div
                className="mt-6 h-px"
                style={{ backgroundColor: "#E5E1F5" }}
              />

              <button
                type="button"
                onClick={shareLinkedIn}
                className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold"
                style={{ color: INDIGO_CTA }}
              >
                Share this insight
                <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="mt-6 rounded-2xl bg-[#1B2560] p-7 text-white">
              <MessageCircle size={21} style={{ color: LAVENDER_ACCENT }} />
              <h3 className="mt-4 text-[20px] font-semibold">
                Need help with your business process?
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/65">
                Talk to Starfii about redesigning, automating, or operating
                a critical business process.
              </p>
              <Link
                href="/services/business-process-services#connect"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold text-white"
                style={{ backgroundColor: INDIGO_CTA }}
              >
                Talk to Us
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[#EEF0F7] py-20">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-16">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p
                  className="text-[12px] font-semibold tracking-[0.12em]"
                  style={{ color: INDIGO_CTA }}
                >
                  RELATED INSIGHTS
                </p>
                <h2
                  className="mt-3 text-[34px] font-medium lg:text-[42px]"
                  style={{ color: CHAMPION_BLUE }}
                >
                  More from Business Process Services
                </h2>
              </div>

              <Link
                href="/services/business-process-services/blogs"
                className="hidden items-center gap-1.5 text-[14px] font-semibold sm:flex"
                style={{ color: INDIGO_CTA }}
              >
                View all
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/business-process-services/blogs/${item.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-[210px] overflow-hidden">
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <span
                      className="text-[11px] font-semibold tracking-wide"
                      style={{ color: INDIGO_CTA }}
                    >
                      {item.category}
                    </span>

                    <h3
                      className="mt-2 line-clamp-2 text-[19px] font-semibold leading-snug"
                      style={{ color: CHAMPION_BLUE }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-slate-600">
                      {item.excerpt}
                    </p>

                    <span
                      className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold"
                      style={{ color: INDIGO_CTA }}
                    >
                      Read Insight
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-16">
          <Link
            href="/services/business-process-services/blogs"
            className="inline-flex items-center gap-2 text-[14px] font-semibold"
            style={{ color: CHAMPION_BLUE }}
          >
            <ArrowLeft size={17} />
            Back to Business Process Services Insights
          </Link>
        </div>
      </section>
    </main>
  );
}
