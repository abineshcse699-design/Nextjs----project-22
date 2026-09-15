import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { blogPosts, getBlogBySlug, getRelatedBlogs } from "../blogData";
import BlogDetail from "../BlogDetail";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts
    .filter((post) => post.service === "itsm-migration")
    .map((post) => ({
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
      description:
        "The requested Starfii ITSM Migration & Transformation blog could not be found.",
    };
  }

  const canonicalPath = `/services/itsm-service-management/blogs/${post.slug}`;

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.seoKeywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
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
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedBlogs(post.slug);

  return <BlogDetail post={post} related={related} />;
}