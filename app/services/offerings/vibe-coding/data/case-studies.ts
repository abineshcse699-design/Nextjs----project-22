export type CaseStudy = {
  slug: string;
  image: string;
  title: string;
  body: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "executive-meeting-intelligence",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    title:
      "Turning Executive Meetings Into Structured Strategic Intelligence",
    body:
      "See how an AI meeting workflow can transform recurring leadership conversations into concise summaries, decision records, action items, and searchable strategic context.",
  },
  {
    slug: "sales-meeting-automation",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
    title:
      "Reducing Manual Follow-Up Across Customer Conversations",
    body:
      "Explore how meeting intelligence can capture customer requirements, commitments, objections, and next steps while reducing the administrative burden on sales teams.",
  },
  {
    slug: "product-engineering-meeting-intelligence",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
    title:
      "Creating a Searchable Knowledge Layer for Product and Engineering Teams",
    body:
      "Discover how product and engineering organizations can preserve technical context, decisions, requirements, and action items across a growing volume of meetings.",
  },
  {
    slug: "client-meeting-knowledge",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
    title:
      "Making Client Conversations Easier to Capture and Reuse",
    body:
      "Learn how AI meeting intelligence can structure client discussions and turn conversation history into reusable knowledge for consulting and professional services teams.",
  },
  {
    slug: "enterprise-meeting-workflows",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    title:
      "Connecting Meeting Outcomes With Enterprise Workflows",
    body:
      "Explore an integrated approach where meeting summaries, decisions, and action items move into the systems teams already use for customer, project, and operational work.",
  },
];

export function getCaseStudyBySlug(
  slug: string
): CaseStudy | undefined {
  return caseStudies.find(
    (study) => study.slug === slug
  );
}