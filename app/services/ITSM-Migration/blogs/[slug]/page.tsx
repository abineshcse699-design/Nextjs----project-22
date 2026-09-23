import type { Metadata } from "next";
import { notFound } from "next/navigation";

// NOTE: blogData.ts and BlogDetail.tsx live at the ROOT of
// itsm-migration/ (siblings of the "blogs" folder), not
// inside "blogs" itself. This file sits at
// itsm-migration/blogs/[slug]/page.tsx, so it needs to
// climb up TWO directory levels ("../../") to reach them — one
// level ("../") only reaches itsm-migration/blogs/,
// where these files don't exist. That single missing "../" is
// what breaks every blog page if it's left out.
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

const ICONS = {
  icon: [
    {
      url: "/starfii_star_flat.svg",
      type: "image/svg+xml",
      sizes: "32x32",
    },
  ],
};

/* ============================================================
   STATIC BLOG SLUGS
============================================================ */

export function generateStaticParams() {
  return blogPosts
    .filter(
      (post) =>
        post.service === "itsm-migration"
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
        "ITSM Migration Blog Not Found | Starfii",
      description:
        "The requested Starfii ITSM Migration & Transformation blog could not be found.",
      icons: ICONS,
    };
  }

  const canonicalPath =
    `/services/itsm-Migration/blogs/${post.slug}`;

  return {
    title: `${post.title} | Starfii`,
    description: post.excerpt,

    icons: ICONS,

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