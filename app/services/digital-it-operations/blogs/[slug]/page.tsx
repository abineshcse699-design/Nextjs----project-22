import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  blogPosts,
  getBlogBySlug,
  getRelatedBlogs,
} from "../blogsData";

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
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

/*
  Only slugs that exist in blogPosts are allowed.
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
      title: "Blog Not Found | Starfii",
      description:
        "The requested Digital IT Operations blog could not be found.",
    };
  }

  return {
    title: `${post.title} | Starfii`,
    description: post.excerpt,

    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",

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

  /*
    Find the blog using the URL slug.
  */
  const post = getBlogBySlug(slug);

  /*
    If slug doesn't exist, show Next.js 404 page.
  */
  if (!post) {
    notFound();
  }

  /*
    Get related blogs excluding current blog.
  */
  const related = getRelatedBlogs(post.slug, 3);

  return (
    <BlogDetail
      post={post}
      related={related}
    />
  );
}