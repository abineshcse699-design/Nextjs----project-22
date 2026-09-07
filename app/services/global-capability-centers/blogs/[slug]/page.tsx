import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  blogPosts,
  getBlogBySlug,
  getRelatedBlogs,
} from "../blogData";

import BlogDetail from "../BlogDetail";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* ============================================================
   STATIC BLOG SLUGS
============================================================ */

export function generateStaticParams() {
  return blogPosts
    .filter(
      (post) =>
        post.service === "global-capability-centers"
    )
    .map((post) => ({
      slug: post.slug,
    }));
}

/*
  Only slugs returned by generateStaticParams()
  are allowed to render.
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

  if (!post) {
    return {
      title:
        "Global Capability Center Blog Not Found | Starfii",
      description:
        "The requested Starfii Global Capability Center blog could not be found.",
    };
  }

  const canonicalPath =
    `/services/global-capability-centers/blogs/${post.slug}`;

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

  if (!post) {
    notFound();
  }

  const related = getRelatedBlogs(post.slug);

  return (
    <BlogDetail
      post={post}
      related={related}
    />
  );
}