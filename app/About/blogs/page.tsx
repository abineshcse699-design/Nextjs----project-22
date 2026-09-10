// PLACE THIS FILE AT: app/About/blogs/page.tsx
//
// Make sure the folder is named "blogs" (all lowercase) so it
// matches the route used elsewhere (e.g. /services/.../blogs).

import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowUpRight } from "lucide-react";

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

/* ===============================================================
   BRAND TOKENS — kept identical to the service pages and the
   About/case-study page so this section reads as the same system.
================================================================ */

const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";

const ALIGN = "mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16";

type BlogCard = {
  slug: string;
  image: string;
  title: string;
  body: string;
};

/* ===============================================================
   DATA — pulled live from each service's own shared blogData.ts,
   so this section never drifts out of sync with the real blog
   lists shown on each service page.
================================================================ */

const aiVoiceCallBlogs: BlogCard[] = aiVoiceCallBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const digitalSoftwareBlogs: BlogCard[] = digitalSoftwareBlogPosts.map(
  (post) => ({
    slug: post.slug,
    image: post.heroImage,
    title: post.title,
    body: post.excerpt,
  })
);

const itOperationsBlogs: BlogCard[] = itOperationsBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const dataAnalyticsBlogs: BlogCard[] = dataAnalyticsBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const cloudBlogs: BlogCard[] = cloudBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const businessProcessBlogs: BlogCard[] = businessProcessBlogPosts.map(
  (post) => ({
    slug: post.slug,
    image: post.heroImage,
    title: post.title,
    body: post.excerpt,
  })
);

const enterprisePlatformBlogs: BlogCard[] = enterprisePlatformBlogPosts.map(
  (post) => ({
    slug: post.slug,
    image: post.heroImage,
    title: post.title,
    body: post.excerpt,
  })
);

const gccBlogs: BlogCard[] = gccBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const medicalCodingBlogs: BlogCard[] = medicalCodingBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const aiChatBoxBlogs: BlogCard[] = aiChatBoxBlogPosts.map((post) => ({
  slug: post.slug,
  image: post.heroImage,
  title: post.title,
  body: post.excerpt,
}));

const sustainabilityBlogs: BlogCard[] = sustainabilityBlogPosts.map(
  (post) => ({
    slug: post.slug,
    image: post.heroImage,
    title: post.title,
    body: post.excerpt,
  })
);

const aiMeetingAssistantBlogs: BlogCard[] = aiMeetingAssistantBlogPosts.map(
  (post) => ({
    slug: post.slug,
    image: post.heroImage,
    title: post.title,
    body: post.excerpt,
  })
);

export const metadata = {
  title: "Blogs | Starfii",
  description:
    "Explore Starfii's insights on Artificial Intelligence, Digital & Software Engineering, Cloud Engineering, Data & Analytics, IT Operations, Enterprise Platforms, Business Process Services, Global Capability Centers, AI Powered Medical Coding, AI Chat Box, AI Meeting Assistant, Sustainability Services, AI Voice Call, and more.",
};

/* ===============================================================
   REUSABLE: one heading + grid block, shared by every service
   section on this page.
================================================================ */

function BlogGrid({
  heading,
  description,
  items,
  basePath,
}: {
  heading: string;
  description: string;
  items: BlogCard[];
  basePath: string;
}): ReactElement {
  return (
    <div className="mt-20 first:mt-0">
      <h2
        className="font-heading text-[30px] font-medium leading-[1.15] lg:text-[36px]"
        style={{ color: CHAMPION_BLUE }}
      >
        {heading}
      </h2>
      <p className="font-body mt-4 max-w-2xl text-[16px] leading-relaxed text-slate-600">
        {description}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((post) => (
          <Link
            key={post.slug}
            href={`${basePath}/${post.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-2xl"
            style={{ border: "1px solid #ECE7FB" }}
          >
            <div className="h-[220px] flex-shrink-0 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span
                className="font-body text-[12px] font-semibold tracking-wide"
                style={{ color: INDIGO_CTA }}
              >
                BLOG
              </span>
              <h3
                className="font-heading mt-2 text-[19px] font-semibold leading-snug"
                style={{
                  color: CHAMPION_BLUE,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {post.title}
              </h3>
              <p
                className="font-body mt-3 text-[14px] leading-relaxed text-slate-600"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {post.body}
              </p>
              <span
                className="font-body mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold transition-transform duration-200 group-hover:translate-x-0.5"
                style={{ color: INDIGO_CTA }}
              >
                Read More
                <ArrowUpRight size={15} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function BlogsPage(): ReactElement {
  return (
    <main className="bg-white">
      <section className={`${ALIGN} py-20 lg:py-28`}>
        {/* AI Voice Call blogs */}
        <BlogGrid
          heading="AI Voice Call Insights"
          description="Explore how Starfii builds AI powered voice agents, conversational automation, intelligent routing, and voice AI integrations for modern enterprises."
          items={aiVoiceCallBlogs}
          basePath="/services/offerings/ai-native-contact-center/blogs"
        />

        {/* Digital & Software blogs */}
        <BlogGrid
          heading="Digital & Software Insights"
          description="Explore how Starfii builds and modernizes digital products with AI led engineering, product thinking, and scalable architectures for modern enterprises."
          items={digitalSoftwareBlogs}
          basePath="/services/digital-software/blogs"
        />

        {/* Digital IT Operations blogs */}
        <BlogGrid
          heading="Digital IT Operations Insights"
          description="Explore how Starfii keeps enterprise systems stable through cloud operations, DevOps, cybersecurity, and legacy modernization."
          items={itOperationsBlogs}
          basePath="/services/digital-it-operations/blogs"
        />

        {/* Data & Analytics blogs */}
        <BlogGrid
          heading="Data & Analytics Insights"
          description="Explore how Starfii turns fragmented enterprise data into governed platforms, trusted analytics, and AI ready pipelines."
          items={dataAnalyticsBlogs}
          basePath="/services/data-analytics/blogs"
        />

        {/* Cloud Engineering blogs */}
        <BlogGrid
          heading="Cloud Engineering Insights"
          description="Explore how Starfii migrates, secures, and optimizes workloads across AWS, Azure, and GCP with FinOps, DevOps, and site reliability engineering."
          items={cloudBlogs}
          basePath="/services/cloud/blogs"
        />

        {/* Business Process Services blogs */}
        <BlogGrid
          heading="Business Process Insights"
          description="Explore how Starfii redesigns, automates, and runs finance, order to cash, procure to pay, and revenue cycle management operations to an SLA."
          items={businessProcessBlogs}
          basePath="/services/business-process-services/blogs"
        />

        {/* Enterprise Platform Services blogs */}
        <BlogGrid
          heading="Enterprise Platform Insights"
          description="Explore how Starfii builds, modernizes, integrates, and operates secure enterprise platforms across cloud, data, AI, and automation."
          items={enterprisePlatformBlogs}
          basePath="/services/enterprise-platform-services/blogs"
        />

        {/* Global Capability Centers blogs */}
        <BlogGrid
          heading="Global Capability Center Insights"
          description="Explore how Starfii sets up and scales GCCs end to end, covering entity formation, talent strategy, governance, and operating models."
          items={gccBlogs}
          basePath="/services/global-capability-centers/blogs"
        />

        {/* AI-Powered Medical Coding blogs */}
        <BlogGrid
          heading="AI-Powered Medical Coding Insights"
          description="Explore how Starfii applies AI to clinical documentation, coding recommendations, validation, and revenue cycle workflows in healthcare."
          items={medicalCodingBlogs}
          basePath="/services/offerings/enterprise-automation/blogs"
        />

        {/* AI Chat Box blogs */}
        <BlogGrid
          heading="AI Chat Box Insights"
          description="Explore how Starfii builds conversational AI assistants grounded in trusted knowledge, connected to enterprise systems and workflows."
          items={aiChatBoxBlogs}
          basePath="/services/offerings/generative-ai/blogs"
        />

        {/* Sustainability Services (AI File Storage) blogs */}
        <BlogGrid
          heading="Sustainability Insights"
          description="Explore how Starfii combines secure enterprise storage with AI powered organization, search, and document intelligence to support measurable, sustainable operations."
          items={sustainabilityBlogs}
          basePath="/services/offerings/sustainability-services/blogs"
        />

        {/* AI Meeting Assistant blogs */}
        <BlogGrid
          heading="AI Meeting Assistant Insights"
          description="Explore how Starfii turns conversations into structured knowledge, decisions, action items, and searchable meeting intelligence for modern teams."
          items={aiMeetingAssistantBlogs}
          basePath="/services/offerings/vibe-coding/blogs"
        />
      </section>
    </main>
  );
}