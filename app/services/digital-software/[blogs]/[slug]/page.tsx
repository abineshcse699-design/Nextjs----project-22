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
      title: "Blog Not Found | Starfii",
      description: "The requested Starfii blog could not be found.",
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

  const related = getRelatedBlogs(post.slug);

  return (
    <BlogDetail
      post={post}
      related={related}
    />
  );
}
