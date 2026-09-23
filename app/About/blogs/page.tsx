import type { ReactElement } from "react";

import { blogPosts as aiVoiceCallBlogPosts } from "@/app/services/offerings/ai-native-contact-center/blogs/blogData";
import { blogPosts as softwareProductBlogPosts } from "@/app/services/software-product/[blogs]/blogsData";
import { blogPosts as dataAnalyticsBlogPosts } from "@/app/services/data-analytics/blogs/blogsData";
import { blogPosts as cloudBlogPosts } from "@/app/services/cloud/blogs/blogsData";
import { blogPosts as medicalCodingBlogPosts } from "@/app/services/offerings/enterprise-automation/blogs/blogsData";
import { blogPosts as aiChatBoxBlogPosts } from "@/app/services/offerings/generative-ai/blogs/blogsData";
import { blogPosts as aiFileStorageBlogPosts } from "@/app/services/offerings/sustainability-services/blogs/blogsData";
import { blogPosts as aiMeetingAssistantBlogPosts } from "@/app/services/offerings/vibe-coding/blogs/blogsData";
import { blogPosts as itsmMigrationBlogPosts } from "@/app/services/ITSM-Migration/blogs/blogData";
import { blogPosts as itsmServiceMgmtBlogPosts } from "@/app/services/itsm-service-management/blogs/blogData";
import { blogPosts as legacyModernizationBlogPosts } from "@/app/services/legacy-Modernization/blogs/blogData";
import { blogPosts as qualityEngineeringBlogPosts } from "@/app/services/Quality-Engineering/[blogs]/blogData";

import BlogFilters, { type BlogGroup } from "./BlogFilters";

/* Tolerant mapper: works whether a data file uses
   heroImage/excerpt or image/body. */
type RawPost = {
  slug: string;
  title: string;
  heroImage?: string;
  image?: string;
  excerpt?: string;
  body?: string;
};

function toCards(posts: RawPost[]) {
  return posts.map((post) => ({
    slug: post.slug,
    image: post.heroImage ?? post.image ?? "",
    title: post.title,
    body: post.excerpt ?? post.body ?? "",
  }));
}

export const metadata = {
  title: "Blogs | Starfii",
  description:
    "Explore Starfii's insights on Software & Product Engineering, Cloud Engineering, Data & Analytics, ITSM Migration, ITSM Service Management, Legacy Modernization, Quality Engineering, AI Voice Call, AI-Powered Medical Coding, AI Chat Box, AI File Storage, and AI Meeting Assistant.",
  icons: {
    icon: [
      {
         url: "/starfii_star_flat.svg",
        type: "image/svg+xml",
        sizes: "32x32",
      },
    ],
  },
};

const groups: BlogGroup[] = [
  {
    key: "software-product",
    label: "Software & Product",
    basePath: "/services/software-product/blogs",
    items: toCards(softwareProductBlogPosts),
  },
  {
    key: "cloud",
    label: "Cloud & Devops",
    basePath: "/services/cloud/blogs",
    items: toCards(cloudBlogPosts),
  },
  {
    key: "data-analytics",
    label: "Data & Analytics",
    basePath: "/services/data-analytics/blogs",
    items: toCards(dataAnalyticsBlogPosts),
  },
  {
    key: "itsm-migration",
    label: "ITSM Migration",
    basePath: "/services/ITSM-Migration/blogs",
    items: toCards(itsmMigrationBlogPosts),
  },
  {
    key: "itsm-service-management",
    label: "ITSM Service Management",
    basePath: "/services/itsm-service-management/blogs",
    items: toCards(itsmServiceMgmtBlogPosts),
  },
  {
    key: "legacy-modernization",
    label: "Legacy Modernization",
    basePath: "/services/legacy-Modernization/blogs",
    items: toCards(legacyModernizationBlogPosts),
  },
  {
    key: "quality-engineering",
    label: "Quality Engineering",
    basePath: "/services/Quality-Engineering/blogs",
    items: toCards(qualityEngineeringBlogPosts),
  },
  {
    key: "ai-voice",
    label: "AI Voice Call",
    basePath: "/services/offerings/ai-native-contact-center/blogs",
    items: toCards(aiVoiceCallBlogPosts),
  },
  {
    key: "medical-coding",
    label: "AI Medical Coding",
    basePath: "/services/offerings/enterprise-automation/blogs",
    items: toCards(medicalCodingBlogPosts),
  },
  {
    key: "ai-chat",
    label: "AI Chat Box",
    basePath: "/services/offerings/generative-ai/blogs",
    items: toCards(aiChatBoxBlogPosts),
  },
  {
    key: "ai-file-storage",
    label: "AI File Storage",
    basePath: "/services/offerings/sustainability-services/blogs",
    items: toCards(aiFileStorageBlogPosts),
  },
  {
    key: "ai-meetings",
    label: "AI Meeting Assistant",
    basePath: "/services/offerings/vibe-coding/blogs",
    items: toCards(aiMeetingAssistantBlogPosts),
  },
];

export default function BlogsPage(): ReactElement {
  return <BlogFilters groups={groups} />;
}