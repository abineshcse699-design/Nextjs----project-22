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

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Enterprise Automation Blog Not Found | Starfii",
      description:
        "The requested Starfii Enterprise Automation blog could not be found.",
    };
  }

  return {
    title: `${post.title} | Starfii`,
    description: post.excerpt,

    alternates: {
      canonical: `/services/enterprise-automation/blogs/${post.slug}`,
    },

    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/services/enterprise-automation/blogs/${post.slug}`,

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

export default async function BlogPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

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