export type CaseStudy = {
  slug: string;
  image: string;
  title: string;
  body: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "invoice-data-extraction",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=900&auto=format&fit=crop",
    title:
      "Automating Invoice Data Extraction for Faster Accounts Payable",
    body:
      "Explore how AI-powered document processing can extract invoice fields, validate information, and move structured data into downstream finance workflows.",
  },
  {
    slug: "contract-document-intelligence",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=900&auto=format&fit=crop",
    title:
      "Turning Contracts Into Searchable, Structured Business Data",
    body:
      "See how document intelligence can identify clauses, dates, parties, obligations, and other contract information for downstream review and workflows.",
  },
  {
    slug: "healthcare-document-processing",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop",
    title:
      "Streamlining Healthcare Document Processing With AI",
    body:
      "Discover how AI, OCR, and structured extraction can reduce manual document handling across healthcare forms, claims, reports, and administrative records.",
  },
  {
    slug: "insurance-claims-extraction",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=900&auto=format&fit=crop",
    title:
      "Accelerating Insurance Claims Data Capture",
    body:
      "Learn how structured extraction can surface policy, claim, incident, evidence, and financial information from complex claims documentation.",
  },
  {
    slug: "customer-onboarding-automation",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900&auto=format&fit=crop",
    title:
      "Reducing Manual Work in Customer Onboarding",
    body:
      "Explore how AI extraction can capture customer information from applications, identity documents, forms, and supporting records.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
