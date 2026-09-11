// PLACE THIS FILE AT: app/About/blogs/page.tsx

import type { ReactElement } from "react";

import { blogPosts as aiVoiceCallBlogPosts } from "@/app/services/offerings/ai-native-contact-center/blogs/blogData";
import { blogPosts as digitalSoftwareBlogPosts } from "@/app/services/digital-software/[blogs]/blogsData";
import { blogPosts as itOperationsBlogPosts } from "@/app/services/digital-it-operations/blogs/blogsData";
import { blogPosts as dataAnalyticsBlogPosts } from "@/app/services/data-analytics/blogs/blogsData";
import { blogPosts as cloudBlogPosts } from "@/app/services/cloud/blogs/blogsData";
import { blogPosts as businessProcessBlogPosts } from "@/app/services/business-process-services/blogs/blogsData";
import { blogPosts as enterprisePlatformBlogPosts } from "@/app/services/enterprise-platform-services/blogs/blogsData";
import { blogPosts as gccBlogPosts } from "@/app/services/global-capability-centers/blogs/blogData";
import { blogPosts as medicalCodingBlogPosts } from "@/app/services/offerings/enterprise-automation/blogs/blogsData";
import { blogPosts as aiChatBoxBlogPosts } from "@/app/services/offerings/generative-ai/blogs/blogsData";
import { blogPosts as sustainabilityBlogPosts } from "@/app/services/offerings/sustainability-services/blogs/blogsData";
import { blogPosts as aiMeetingAssistantBlogPosts } from "@/app/services/offerings/vibe-coding/blogs/blogsData";

import BlogFilters, { type BlogGroup } from "../blogs/BlogFilters";

/* ===============================================================
   DATA — pulled live from each service's own shared blogData.ts,
   so this section never drifts out of sync with the real blog
   lists shown on each service page.
================================================================ */

const aiVoiceCallBlogs = aiVoiceCallBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const digitalSoftwareBlogs = digitalSoftwareBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const itOperationsBlogs = itOperationsBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const dataAnalyticsBlogs = dataAnalyticsBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const cloudBlogs = cloudBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const businessProcessBlogs = businessProcessBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const enterprisePlatformBlogs = enterprisePlatformBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const gccBlogs = gccBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const medicalCodingBlogs = medicalCodingBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const aiChatBoxBlogs = aiChatBoxBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const sustainabilityBlogs = sustainabilityBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const aiMeetingAssistantBlogs = aiMeetingAssistantBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

export const metadata = {
  title: "Blogs | Starfii",
  description:
    "Explore Starfii's insights on Artificial Intelligence, Digital & Software Engineering, Cloud Engineering, Data & Analytics, IT Operations, Enterprise Platforms, Business Process Services, Global Capability Centers, AI Powered Medical Coding, AI Chat Box, AI Meeting Assistant, Sustainability Services, AI Voice Call, and more.",
};

/* ===============================================================
   GROUPS — one entry per filter tab. basePath keeps each card's
   "Read More" link pointing at the same route it used before.
================================================================ */
const groups: BlogGroup[] = [
  {
    key: "digital-software",
    label: "Digital & Software",
    basePath: "/services/digital-software/blogs",
    items: digitalSoftwareBlogs,
  },
  {
    key: "cloud",
    label: "Cloud Engineering",
    basePath: "/services/cloud/blogs",
    items: cloudBlogs,
  },
  {
    key: "ai-chat",
    label: "AI Chat Box",
    basePath: "/services/offerings/generative-ai/blogs",
    items: aiChatBoxBlogs,
  },
  {
    key: "ai-voice",
    label: "AI Voice Call",
    basePath: "/services/offerings/ai-native-contact-center/blogs",
    items: aiVoiceCallBlogs,
  },
  {
    key: "it-operations",
    label: "Digital IT Operations",
    basePath: "/services/digital-it-operations/blogs",
    items: itOperationsBlogs,
  },
  {
    key: "data-analytics",
    label: "Data & Analytics",
    basePath: "/services/data-analytics/blogs",
    items: dataAnalyticsBlogs,
  },
  {
    key: "business-process",
    label: "Business Process",
    basePath: "/services/business-process-services/blogs",
    items: businessProcessBlogs,
  },
  {
    key: "enterprise-platform",
    label: "Enterprise Platform",
    basePath: "/services/enterprise-platform-services/blogs",
    items: enterprisePlatformBlogs,
  },
  {
    key: "gcc",
    label: "Global Capability Centers",
    basePath: "/services/global-capability-centers/blogs",
    items: gccBlogs,
  },
  {
    key: "medical-coding",
    label: "AI Medical Coding",
    basePath: "/services/offerings/enterprise-automation/blogs",
    items: medicalCodingBlogs,
  },
  {
    key: "sustainability",
    label: "Sustainability",
    basePath: "/services/offerings/sustainability-services/blogs",
    items: sustainabilityBlogs,
  },
  {
    key: "ai-meetings",
    label: "AI Meeting Assistant",
    basePath: "/services/offerings/vibe-coding/blogs",
    items: aiMeetingAssistantBlogs,
  },
];

export default function BlogsPage(): ReactElement {
  return <BlogFilters groups={groups} />;
}