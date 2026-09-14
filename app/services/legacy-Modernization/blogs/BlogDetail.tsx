// app/services/legacy-modernization/blogs/BlogDetail.tsx

"use client";

import Link from "next/link";

import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  Copy,
  Mail,
  Share2,
} from "lucide-react";

import {
  useMemo,
  useState,
} from "react";

import type {
  BlogPost,
} from "../blogs/blogData";

const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";

const ALIGN =
  "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

type BlogDetailProps = {
  post: BlogPost;
  related: BlogPost[];
};

function getSectionId(
  index: number
) {
  return `blog-section-${index + 1}`;
}

export default function BlogDetail({
  post,
  related,
}: BlogDetailProps) {
  const [copied, setCopied] =
    useState(false);

  const pageUrl = useMemo(() => {
    if (
      typeof window === "undefined"
    ) {
      return "";
    }

    return window.location.href;
  }, []);

  const shareText =
    encodeURIComponent(
      post.title
    );

  const shareUrl =
    encodeURIComponent(
      pageUrl
    );

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(
        window.location.href
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }

  function shareWindow(
    url: string
  ) {
    window.open(
      url,
      "_blank",
      "noopener,noreferrer,width=700,height=600"
    );
  }

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#0A0912]">

        <div className="absolute inset-0">

          <img
            src={post.heroImage}
            alt={post.title}
            className="
              h-full
              w-full
              object-cover
              opacity-30
            "
          />

          <div className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#080711]
            via-[#11102A]/95
            to-[#11102A]/60
          " />

          <div
            className="
              absolute
              -right-32
              top-[-180px]
              h-[520px]
              w-[520px]
              rounded-full
              blur-3xl
            "
            style={{
              background:
                "radial-gradient(circle, rgba(164,143,234,0.35), rgba(79,63,224,0.08), transparent 70%)",
            }}
          />

        </div>

        <div
          className={`relative ${ALIGN}`}
        >

          <div className="
            py-12
            sm:py-16
            lg:py-20
          ">

            {/* BREADCRUMB */}

            <nav
              aria-label="Breadcrumb"
              className="
                flex
                flex-wrap
                items-center
                gap-2
                text-sm
                text-white/55
              "
            >

              <Link
                href="/services"
                className="hover:text-white"
              >
                Services
              </Link>

              <ChevronRight size={14} />

              <Link
                href="/services/legacy-modernization"
                className="hover:text-white"
              >
                Legacy Modernization
              </Link>

              <ChevronRight size={14} />

              <Link
                href="/services/legacy-Modernization/blogs"
                className="hover:text-white"
              >
                Insights
              </Link>

              <ChevronRight size={14} />

              <span className="text-white/80">
                {post.title}
              </span>

            </nav>

            {/* CATEGORY */}

            <div className="mt-10">

              <span className="
                inline-flex
                rounded-full
                border
                border-white/15
                bg-white/5
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#A48FEA]
              ">
                {post.category}
              </span>

            </div>

            {/* TITLE */}

            <h1 className="
              mt-7
              max-w-5xl
              text-4xl
              font-semibold
              leading-[1.08]
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            ">
              {post.title}
            </h1>

            {/* EXCERPT */}

            <p className="
              mt-7
              max-w-3xl
              text-lg
              leading-8
              text-white/65
              sm:text-xl
            ">
              {post.excerpt}
            </p>

            {/* META */}

            <div className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-5
              text-sm
              text-white/55
            ">

              <span>
                {post.lastUpdated}
              </span>

              <span className="
                h-1
                w-1
                rounded-full
                bg-white/30
              " />

              <span className="
                inline-flex
                items-center
                gap-2
              ">
                <Clock3 size={15} />
                {post.readTime}
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ARTICLE ================= */}

      <section className="
        py-16
        sm:py-20
        lg:py-24
      ">

        <div className={ALIGN}>

          <div className="
            grid
            gap-12
            lg:grid-cols-[minmax(0,1fr)_340px]
          ">

            {/* MAIN */}

            <article>

              {/* SHARE */}

              <div className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-4
                border-b
                border-slate-200
                pb-6
              ">

                <div className="
                  flex
                  items-center
                  gap-2
                ">

                  <button
                    type="button"
                    onClick={copyLink}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-slate-200
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-slate-600
                      transition
                      hover:border-[#4F3FE0]
                      hover:text-[#4F3FE0]
                    "
                  >
                    <Copy size={15} />

                    {copied
                      ? "Copied"
                      : "Copy link"}
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      shareWindow(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`
                      )
                    }
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-slate-200
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-slate-600
                      transition
                      hover:border-[#4F3FE0]
                      hover:text-[#4F3FE0]
                    "
                  >
                    <Share2 size={15} />
                    Share
                  </button>

                </div>

                <a
                  href={`mailto:?subject=${shareText}&body=${shareUrl}`}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-slate-500
                    hover:text-[#4F3FE0]
                  "
                >
                  <Mail size={15} />
                  Email
                </a>

              </div>

              {/* INTRO */}

              <div className="
                mt-10
                space-y-6
              ">

                {post.intro.map(
                  (
                    paragraph,
                    index
                  ) => (
                    <p
                      key={index}
                      className={
                        index === 0
                          ? `
                            text-xl
                            font-medium
                            leading-9
                            text-slate-700
                            sm:text-2xl
                          `
                          : `
                            text-lg
                            leading-8
                            text-slate-600
                          `
                      }
                    >
                      {paragraph}
                    </p>
                  )
                )}

              </div>

              {/* ARTICLE SECTIONS */}

              <div className="mt-16">

                <div className="mb-10">

                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.18em]
                    "
                    style={{
                      color: INDIGO_CTA,
                    }}
                  >
                    The complete insight
                  </p>

                  <h2
                    className="
                      mt-3
                      text-3xl
                      font-semibold
                      sm:text-4xl
                    "
                    style={{
                      color:
                        CHAMPION_BLUE,
                    }}
                  >
                    Legacy Modernization
                    in Practice
                  </h2>

                </div>

                <div className="
                  space-y-16
                ">

                  {post.sections.map(
                    (
                      section,
                      index
                    ) => (
                      <section
                        key={
                          section.heading
                        }
                        id={getSectionId(
                          index
                        )}
                        className="
                          scroll-mt-28
                        "
                      >

                        <h2
                          className="
                            text-2xl
                            font-bold
                            leading-tight
                            sm:text-3xl
                          "
                          style={{
                            color:
                              CHAMPION_BLUE,
                          }}
                        >
                          {section.heading}
                        </h2>

                        <div className="
                          mt-6
                          space-y-5
                        ">

                          {section.paragraphs.map(
                            (
                              paragraph,
                              paragraphIndex
                            ) => (
                              <p
                                key={
                                  paragraphIndex
                                }
                                className="
                                  text-base
                                  leading-8
                                  text-slate-600
                                  sm:text-lg
                                "
                              >
                                {paragraph}
                              </p>
                            )
                          )}

                        </div>

                        {section.image && (
                          <figure className="
                            mt-8
                            overflow-hidden
                            rounded-3xl
                            bg-slate-100
                          ">

                            <img
                              src={
                                section.image
                              }
                              alt={
                                section.imageAlt ||
                                section.heading
                              }
                              className="
                                h-auto
                                max-h-[560px]
                                w-full
                                object-cover
                              "
                            />

                            {section.imageAlt && (
                              <figcaption className="
                                px-5
                                py-3
                                text-xs
                                text-slate-500
                              ">
                                {
                                  section.imageAlt
                                }
                              </figcaption>
                            )}

                          </figure>
                        )}

                        {section.quote && (
                          <blockquote
                            className="
                              mt-8
                              rounded-3xl
                              border-l-4
                              bg-[#F6F3FF]
                              p-7
                              sm:p-8
                            "
                            style={{
                              borderColor:
                                INDIGO_CTA,
                            }}
                          >

                            <div className="
                              text-4xl
                              leading-none
                              text-[#A48FEA]
                            ">
                              “
                            </div>

                            <p
                              className="
                                mt-2
                                text-xl
                                font-medium
                                leading-8
                              "
                              style={{
                                color:
                                  CHAMPION_BLUE,
                              }}
                            >
                              {
                                section.quote
                              }
                            </p>

                          </blockquote>
                        )}

                      </section>
                    )
                  )}

                </div>

              </div>

              {/* BENEFITS */}

              <section className="
                mt-20
                overflow-hidden
                rounded-[32px]
                bg-[#0A0912]
                p-7
                sm:p-10
                lg:p-12
              ">

                <p className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#A48FEA]
                ">
                  Business value
                </p>

                <h2 className="
                  mt-3
                  text-3xl
                  font-semibold
                  text-white
                  sm:text-4xl
                ">
                  Why modernization matters
                </h2>

                <div className="
                  mt-10
                  grid
                  gap-4
                  sm:grid-cols-2
                ">

                  {post.benefits.map(
                    (benefit) => (
                      <div
                        key={
                          benefit.title
                        }
                        className="
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.04]
                          p-6
                        "
                      >

                        <h3 className="
                          text-lg
                          font-semibold
                          text-white
                        ">
                          {
                            benefit.title
                          }
                        </h3>

                        <p className="
                          mt-3
                          text-sm
                          leading-7
                          text-white/60
                        ">
                          {benefit.body}
                        </p>

                      </div>
                    )
                  )}

                </div>

              </section>

              {/* PROCESS */}

              <section className="mt-20">

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                  "
                  style={{
                    color:
                      INDIGO_CTA,
                  }}
                >
                  How to approach it
                </p>

                <h2
                  className="
                    mt-3
                    text-3xl
                    font-semibold
                  "
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  A practical
                  modernization process
                </h2>

                <div className="
                  mt-8
                  grid
                  gap-4
                  sm:grid-cols-2
                  lg:grid-cols-5
                ">

                  {post.process.map(
                    (step, index) => (
                      <div
                        key={
                          step.title
                        }
                        className="
                          rounded-2xl
                          border
                          border-slate-200
                          p-5
                        "
                      >

                        <span
                          className="
                            text-xs
                            font-bold
                          "
                          style={{
                            color:
                              INDIGO_CTA,
                          }}
                        >
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>

                        <h3
                          className="
                            mt-3
                            font-semibold
                          "
                          style={{
                            color:
                              CHAMPION_BLUE,
                          }}
                        >
                          {step.title}
                        </h3>

                        <p className="
                          mt-2
                          text-sm
                          leading-6
                          text-slate-600
                        ">
                          {step.body}
                        </p>

                      </div>
                    )
                  )}

                </div>

              </section>

              {/* KEY TAKEAWAYS */}

              <section className="
                mt-20
                rounded-[32px]
                border
                border-slate-200
                bg-[#F8F8FC]
                p-7
                sm:p-10
              ">

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                  "
                  style={{
                    color:
                      INDIGO_CTA,
                  }}
                >
                  Key takeaways
                </p>

                <h2
                  className="
                    mt-3
                    text-3xl
                    font-semibold
                  "
                  style={{
                    color:
                      CHAMPION_BLUE,
                  }}
                >
                  What to remember
                </h2>

                <ul className="
                  mt-7
                  space-y-4
                ">

                  {post.keyTakeaways.map(
                    (item) => (
                      <li
                        key={item}
                        className="
                          flex
                          gap-3
                          text-base
                          leading-7
                          text-slate-600
                        "
                      >

                        <Check
                          className="
                            mt-1
                            shrink-0
                          "
                          size={18}
                          color={
                            INDIGO_CTA
                          }
                        />

                        {item}

                      </li>
                    )
                  )}

                </ul>

              </section>

              {/* CONCLUSION */}

              <section className="
                mt-16
                border-t
                border-slate-200
                pt-12
              ">

                <p className="
                  text-lg
                  leading-8
                  text-slate-600
                ">
                  {post.conclusion}
                </p>

              </section>

              {/* CTA */}

              <section className="
                mt-16
                overflow-hidden
                rounded-[32px]
                bg-[#1B2560]
                p-8
                sm:p-10
                lg:p-12
              ">

                <h2 className="
                  max-w-2xl
                  text-3xl
                  font-semibold
                  text-white
                  sm:text-4xl
                ">
                  {post.cta.title}
                </h2>

                <p className="
                  mt-5
                  max-w-2xl
                  text-base
                  leading-8
                  text-white/65
                ">
                  {post.cta.body}
                </p>

                <Link
                  href={
                    post.cta.buttonHref
                  }
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-[#1B2560]
                    transition
                    hover:-translate-y-0.5
                  "
                >
                  {post.cta.buttonText}

                  <ArrowUpRight
                    size={16}
                  />
                </Link>

              </section>

            </article>

            {/* ================= SIDEBAR ================= */}

            <aside className="lg:pt-12">

              <div className="
                lg:sticky
                lg:top-8
              ">

                {/* AUTHOR */}

                <div className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                ">

                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.18em]
                    "
                    style={{
                      color:
                        INDIGO_CTA,
                    }}
                  >
                    About the author
                  </p>

                  <div className="
                    mt-5
                    flex
                    items-center
                    gap-4
                  ">

                    <img
                      src={
                        post.author.photo
                      }
                      alt={
                        post.author.name
                      }
                      className="
                        h-14
                        w-14
                        rounded-full
                        object-cover
                      "
                    />

                    <div>

                      <p
                        className="
                          font-semibold
                        "
                        style={{
                          color:
                            CHAMPION_BLUE,
                        }}
                      >
                        {
                          post.author.name
                        }
                      </p>

                      <p className="
                        text-xs
                        text-slate-500
                      ">
                        {
                          post.author.role
                        }
                      </p>

                    </div>

                  </div>

                  <p className="
                    mt-4
                    text-sm
                    leading-7
                    text-slate-600
                  ">
                    {post.author.bio}
                  </p>

                </div>

                {/* RELATED */}

                {related.length > 0 && (
                  <div className="mt-8">

                    <div className="
                      flex
                      items-center
                      justify-between
                    ">

                      <p
                        className="
                          text-xs
                          font-bold
                          uppercase
                          tracking-[0.16em]
                        "
                        style={{
                          color:
                            INDIGO_CTA,
                        }}
                      >
                        More insights
                      </p>

                      <Link
                        href="/services/legacy-modernization/blogs"
                        className="
                          text-xs
                          font-semibold
                        "
                        style={{
                          color:
                            CHAMPION_BLUE,
                        }}
                      >
                        View all
                      </Link>

                    </div>

                    <div className="
                      mt-5
                      space-y-4
                    ">

                      {related.map(
                        (item) => (
                          <Link
                            key={
                              item.slug
                            }
                            href={`/services/legacy-modernization/blogs/${item.slug}`}
                            className="
                              group
                              block
                              overflow-hidden
                              rounded-2xl
                              border
                              border-slate-200
                              transition-all
                              duration-300
                              hover:-translate-y-1
                              hover:shadow-lg
                            "
                          >

                            <div className="
                              h-32
                              overflow-hidden
                            ">

                              <img
                                src={
                                  item.heroImage
                                }
                                alt={
                                  item.title
                                }
                                className="
                                  h-full
                                  w-full
                                  object-cover
                                  transition-transform
                                  duration-500
                                  group-hover:scale-105
                                "
                              />

                            </div>

                            <div className="p-4">

                              <p
                                className="
                                  text-[11px]
                                  font-bold
                                  uppercase
                                  tracking-wider
                                "
                                style={{
                                  color:
                                    INDIGO_CTA,
                                }}
                              >
                                {
                                  item.category
                                }
                              </p>

                              <h3
                                className="
                                  mt-2
                                  line-clamp-3
                                  text-sm
                                  font-semibold
                                  leading-6
                                "
                                style={{
                                  color:
                                    CHAMPION_BLUE,
                                }}
                              >
                                {
                                  item.title
                                }
                              </h3>

                              <span className="
                                mt-3
                                inline-flex
                                items-center
                                gap-1
                                text-xs
                                font-semibold
                                text-slate-500
                              ">
                                Read insight

                                <ArrowUpRight
                                  size={13}
                                />
                              </span>

                            </div>

                          </Link>
                        )
                      )}

                    </div>

                  </div>
                )}

              </div>

            </aside>

          </div>

        </div>

      </section>

    </main>
  );
}