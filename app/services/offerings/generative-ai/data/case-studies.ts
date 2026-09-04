// app/services/offerings/generative-ai/data/case-studies.ts

export type CaseStudy = {
  slug: string;
  image: string;
  title: string;
  body: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "customer-support-ai-chat",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    title: "Building an AI Chat Experience for Customer Support",
    body:
      "See how grounded conversational AI can answer common questions, retrieve trusted information, and route more complex requests to the right support team.",
  },
  {
    slug: "employee-knowledge-assistant",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
    title: "Making Enterprise Knowledge Easier to Access",
    body:
      "Explore how an internal AI assistant can give employees a natural-language interface to policies, procedures, documentation, and organizational knowledge.",
  },
  {
    slug: "sales-ai-assistant",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
    title: "Supporting Sales With Context-Aware AI Conversations",
    body:
      "Discover how AI chat can answer product questions, qualify intent, surface relevant information, and support a faster customer journey.",
  },
  {
    slug: "it-helpdesk-ai",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
    title: "Automating Repetitive IT Helpdesk Interactions",
    body:
      "Learn how conversational AI can resolve common employee requests, guide troubleshooting, and connect interactions to existing support workflows.",
  },
  {
    slug: "document-qa-assistant",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    title: "Creating a Natural-Language Interface for Enterprise Documents",
    body:
      "Explore how document-grounded AI lets users ask questions across reports, manuals, policies, contracts, and other business content.",
  },
];

export function getCaseStudyBySlug(
  slug: string
): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}