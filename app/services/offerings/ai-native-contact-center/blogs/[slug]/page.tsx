import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  blogPosts,
  getBlogBySlug,
  getRelatedBlogs,
} from "../blogData";

import BlogDetail from "../BlogDetail";

/* ============================================================
   TYPES
============================================================ */

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* ============================================================
   STATIC BLOG ROUTES
============================================================ */

export function generateStaticParams() {
  return blogPosts
    .filter(
      (post) =>
        post.service === "ai-voice-call"
    )
    .map((post) => ({
      slug: post.slug,
    }));
}

/*
  Only slugs returned by generateStaticParams()
  are valid for this route.
*/
export const dynamicParams = false;

/* ============================================================
   SEO METADATA
============================================================ */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = getBlogBySlug(slug);

  if (!post || post.service !== "ai-voice-call") {
    return {
      title: "AI Voice Call Blog Not Found | Starfii",
      description:
        "The requested Starfii AI Voice Call blog could not be found.",
    };
  }

  const canonicalPath =
    `/services/offerings/ai-native-contact-center/blogs/${post.slug}`;

  return {
    title: `${post.title} | Starfii`,

    description: post.excerpt,

    alternates: {
      canonical: canonicalPath,
    },

    openGraph: {
      title: post.title,

      description: post.excerpt,

      type: "article",

      url: canonicalPath,

      images: [
        {
          url: post.heroImage,
          width: 1600,
          height: 900,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: post.title,

      description: post.excerpt,

      images: [post.heroImage],
    },
  };
}

/* ============================================================
   BLOG DETAIL PAGE
============================================================ */

export default async function BlogPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const post = getBlogBySlug(slug);

  /*
    Invalid slug = Next.js 404
  */
  if (
    !post ||
    post.service !== "ai-voice-call"
  ) {
    notFound();
  }

  /*
    Only AI Voice Call blogs are shown
    as related blogs.
  */
  const related = getRelatedBlogs(
    post.slug
  );

  return (
    <BlogDetail
      post={post}
      related={related}
    />
  );
}