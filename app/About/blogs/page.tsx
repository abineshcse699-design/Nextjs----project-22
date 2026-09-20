// PLACE THIS FILE AT: app/About/blogs/page.tsx

import type { ReactElement } from "react";

import { blogPosts as aiVoiceCallBlogPosts } from "@/app/services/offerings/ai-native-contact-center/blogs/blogData";
import { blogPosts as digitalSoftwareBlogPosts } from "@/app/services/digital-software/[blogs]/blogsData";
import { blogPosts as dataAnalyticsBlogPosts } from "@/app/services/data-analytics/blogs/blogsData";
import { blogPosts as cloudBlogPosts } from "@/app/services/cloud/blogs/blogsData";
import { blogPosts as medicalCodingBlogPosts } from "@/app/services/offerings/enterprise-automation/blogs/blogsData";
import { blogPosts as aiChatBoxBlogPosts } from "@/app/services/offerings/generative-ai/blogs/blogsData";
import { blogPosts as aiFileStorageBlogPosts } from "@/app/services/offerings/sustainability-services/blogs/blogsData";
import { blogPosts as aiMeetingAssistantBlogPosts } from "@/app/services/offerings/vibe-coding/blogs/blogsData";

import BlogFilters, { type BlogGroup } from "../blogs/BlogFilters";

/* ===============================================================
   Only the categories that exist on the Case Studies page are
   shown here. Removed: Digital IT Operations, Business Process,
   Enterprise Platform, Global Capability Centers.
================================================================ */

type RawPost = { slug: string; heroImage: string; title: string; excerpt: string };

function toCards(posts: RawPost[]) {
  return posts.map((post) => ({
    slug: post.slug,
    image: post.heroImage,
    title: post.title,
    body: post.excerpt,
  }));
}

export const metadata = {
  title: "Blogs | Starfii",
  description:
    "Explore Starfii's insights on Digital & Software Engineering, Cloud Engineering, Data & Analytics, AI Voice Call, AI-Powered Medical Coding, AI Chat Box, AI File Storage, and AI Meeting Assistant.",
};

const groups: BlogGroup[] = [
  {
    key: "digital-software",
    label: "Software & Product",
    basePath: "/services/digital-software/blogs",
    items: toCards(digitalSoftwareBlogPosts),
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