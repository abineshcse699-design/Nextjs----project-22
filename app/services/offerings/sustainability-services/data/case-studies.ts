export type CaseStudy = {
  slug: string;
  image: string;
  title: string;
  body: string;
  industry: string;
  date: string; // ISO date "YYYY-MM-DD" — used only for ordering.
  // Newest date always shows first, everywhere this data is used,
  // regardless of where it sits in the array below.
};

// Raw list — order here does NOT matter for display, only `date` does.
const rawCaseStudies: CaseStudy[] = [
  {
    slug: "enterprise-document-intelligence",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=900&auto=format&fit=crop",
    title: "Transforming Enterprise Documents Into Searchable Business Knowledge",
    body: "Explore how AI-powered organization, semantic search, and document intelligence can make large enterprise file repositories easier to discover and use.",
    industry: "Technology & Business Services",
    date: "2025-08-19",
  },
  {
    slug: "intelligent-file-management",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=900&auto=format&fit=crop",
    title: "Modernizing File Management With AI-Powered Organization",
    body: "See how automated classification, metadata enrichment, and intelligent information structures can reduce the manual effort required to manage growing file collections.",
    industry: "Technology & Business Services",
    date: "2025-06-24",
  },
  {
    slug: "secure-enterprise-storage",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=900&auto=format&fit=crop",
    title: "Building a Secure and Scalable Enterprise Storage Environment",
    body: "Discover an approach to modern file storage that balances scalability, accessibility, security, governance, and AI-powered information discovery.",
    industry: "Technology & Business Services",
    date: "2025-04-30",
  },
  {
    slug: "ai-enterprise-search",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop",
    title: "Making Enterprise Information Discoverable With Semantic Search",
    body: "Learn how natural-language search can help authorized users find relevant information across distributed document repositories without relying on folder structures.",
    industry: "Technology & Business Services",
    date: "2025-03-05",
  },
  {
    slug: "document-workflow-automation",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop",
    title: "Connecting Intelligent Documents With Business Workflows",
    body: "Explore how extracted document information can move from storage into operational workflows, applications, and decisions.",
    industry: "Technology & Business Services",
    date: "2025-01-14",
  },
];

// Newest date first — this is what every page actually imports.
export const caseStudies: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}