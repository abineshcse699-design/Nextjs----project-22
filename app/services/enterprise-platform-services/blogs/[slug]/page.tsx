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

const BLOG_BASE = "/services/enterprise-platform-services/blogs";

// This page only ever serves enterprise-platform-services posts.
const SERVICE = "enterprise-platform-services" as const;

export function generateStaticParams() {
  return blogPosts
    .filter((post) => post.service === SERVICE)
    .map((post) => ({
      slug: post.slug,
    }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = getBlogBySlug(slug, SERVICE);

  if (!post) {
    return {
      title: "Enterprise Platform Blog Not Found | Starfii",
      description:
        "The requested Starfii Enterprise Platform blog could not be found.",
    };
  }

  return {
    title: `${post.title} | Starfii`,
    description: post.excerpt,

    alternates: {
      canonical: `${BLOG_BASE}/${post.slug}`,
    },

    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${BLOG_BASE}/${post.slug}`,

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

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;

  const post = getBlogBySlug(slug, SERVICE);

  if (!post) {
    notFound();
  }

  // Scoped to SERVICE so related posts never mix in from other verticals
  // if this data file is ever shared later.
  const related = getRelatedBlogs(post.slug, SERVICE);

  return <BlogDetail post={post} related={related} />;
}