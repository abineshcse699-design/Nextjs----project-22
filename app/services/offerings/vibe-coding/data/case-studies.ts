export type CaseStudy = {
  slug: string;
  image: string;
  title: string;
  body: string;
  industry: string;
  date: string;
};

const rawCaseStudies: CaseStudy[] = [
  {
    slug: "executive-meeting-intelligence",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    title: "Turning Executive Meetings Into Structured Strategic Intelligence",
    body: "See how an AI meeting workflow can transform recurring leadership conversations into concise summaries, decision records, action items, and searchable strategic context.",
    industry: "Technology & Business Services",
    date: "2025-07-11",
  },
  {
    slug: "sales-meeting-automation",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
    title: "Reducing Manual Follow-Up Across Customer Conversations",
    body: "Explore how meeting intelligence can capture customer requirements, commitments, objections, and next steps while reducing the administrative burden on sales teams.",
    industry: "Technology & Business Services",
    date: "2025-05-27",
  },
  {
    slug: "product-engineering-meeting-intelligence",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
    title: "Creating a Searchable Knowledge Layer for Product and Engineering Teams",
    body: "Discover how product and engineering organizations can preserve technical context, decisions, requirements, and action items across a growing volume of meetings.",
    industry: "Technology & Business Services",
    date: "2025-04-02",
  },
  {
    slug: "client-meeting-knowledge",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
    title: "Making Client Conversations Easier to Capture and Reuse",
    body: "Learn how AI meeting intelligence can structure client discussions and turn conversation history into reusable knowledge for consulting and professional services teams.",
    industry: "Professional Services",
    date: "2025-02-18",
  },
  {
    slug: "enterprise-meeting-workflows",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    title: "Connecting Meeting Outcomes With Enterprise Workflows",
    body: "Explore an integrated approach where meeting summaries, decisions, and action items move into the systems teams already use for customer, project, and operational work.",
    industry: "Technology & Business Services",
    date: "2025-01-05",
  },
  {
    slug: "abinesh-enterprises-meeting-intelligence",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
    title: "Starfii Helps Abinesh Enterprises Turn Meetings Into Actionable Records",
    body: "See how Abinesh Enterprises used AI meeting intelligence to capture decisions and action items automatically, cutting manual follow-up across teams.",
    industry: "Business Services",
    date: "2025-09-11", // latest date — pushes this to #1
  },
];

// Newest date first — this is what every page actually imports.
export const caseStudies: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}