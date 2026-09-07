export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  heroImage: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "from-ai-meeting-notes-to-meeting-intelligence",
    title:
      "From AI Meeting Notes to Meeting Intelligence: Turning Conversations Into Business Outcomes",
    excerpt:
      "Explore how organizations are moving beyond transcription toward AI systems that understand meetings, surface decisions, automate follow-up, and create searchable organizational knowledge.",
    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
    body: [
      "Meetings generate a significant amount of business knowledge, decisions, commitments, and context. However, much of this information is traditionally lost after the conversation ends.",
      "AI meeting intelligence helps organizations move beyond simple transcription by identifying important decisions, action items, risks, and follow-up opportunities.",
      "Instead of manually reviewing long meeting recordings, teams can access structured summaries and searchable knowledge.",
      "This creates a more connected workflow between conversations and business execution.",
    ],
  },

  {
    slug: "how-ai-meeting-assistants-improve-productivity",
    title:
      "How AI Meeting Assistants Improve Productivity Without Replacing People",
    excerpt:
      "The strongest meeting workflows use AI to remove repetitive documentation while keeping people responsible for context, judgment, decisions, and relationships.",
    heroImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
    body: [
      "AI meeting assistants are designed to reduce repetitive administrative work rather than replace human judgment.",
      "Teams can spend less time taking notes and more time participating in important conversations.",
      "Human teams continue to provide strategic thinking, relationships, judgment, and decision making.",
      "AI supports the workflow by capturing and organizing information.",
    ],
  },

  {
    slug: "building-secure-enterprise-meeting-knowledge",
    title:
      "Building a Secure Enterprise Meeting Knowledge Layer",
    excerpt:
      "Understand the architecture and governance considerations involved in turning meeting conversations into searchable, permission-aware organizational knowledge.",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    body: [
      "Enterprise meeting knowledge requires more than simply storing transcripts.",
      "Organizations need appropriate access controls, permissions, governance, and security.",
      "A structured knowledge layer makes historical conversations easier to discover.",
      "Permission-aware search helps ensure information is available only to authorized users.",
    ],
  },

  {
    slug: "ai-meeting-automation-from-conversation-to-action",
    title:
      "AI Meeting Automation: From Conversation to Action",
    excerpt:
      "See how meeting summaries, decisions, action items, and follow-ups can connect directly with the workflows teams use every day.",
    heroImage:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
    body: [
      "The value of meeting intelligence increases when insights move into real business workflows.",
      "Action items can be converted into tasks and follow-up communications.",
      "Decisions can be documented and connected to project workflows.",
      "This reduces the gap between discussion and execution.",
    ],
  },

  {
    slug: "meeting-analytics-business-insights",
    title:
      "Meeting Analytics: Turning Conversations Into Business Insights",
    excerpt:
      "Explore how structured meeting data can help teams identify recurring themes, commitments, risks, and opportunities across business conversations.",
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    body: [
      "Meetings contain valuable patterns that are difficult to identify manually.",
      "AI analytics can surface recurring themes and important trends.",
      "Organizations can identify risks, commitments, and opportunities across conversations.",
      "Structured insights help leadership teams make more informed decisions.",
    ],
  },
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogs(
  currentSlug: string,
  limit: number = 3
) {
  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);
}