export type CaseStudy = {
  slug: string;
  image: string;
  title: string;
  body: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "hospital-ai-assisted-coding",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    title:
      "Modernizing Hospital Coding With AI-Assisted Clinical Intelligence",
    body:
      "Explore how an AI-assisted workflow can help coding teams analyze documentation faster, surface relevant coding information, and focus professional review where it adds the most value.",
  },
  {
    slug: "ambulatory-coding-workflow",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    title:
      "Improving Coding Turnaround Across Ambulatory Operations",
    body:
      "See how intelligent document analysis and structured coding recommendations can help ambulatory organizations reduce repetitive work and accelerate coding workflows.",
  },
  {
    slug: "revenue-cycle-coding-intelligence",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    title:
      "Connecting Coding Intelligence With Revenue Cycle Operations",
    body:
      "Discover how validated coding outputs can move into claims and revenue cycle workflows to reduce rework and improve operational visibility.",
  },
  {
    slug: "coding-quality-compliance",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    title:
      "Strengthening Coding Quality, Review, and Audit Readiness",
    body:
      "Learn how traceable AI recommendations, validation checkpoints, and structured review workflows can support coding quality and governance programs.",
  },
  {
    slug: "specialty-coding-ai",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
    title:
      "Adapting AI Coding Workflows to Specialty Documentation",
    body:
      "Explore how coding intelligence can be tailored to specialty-specific terminology, documentation patterns, and organizational coding requirements.",
  },
];

export function getCaseStudyBySlug(
  slug: string
): CaseStudy | undefined {
  return caseStudies.find(
    (study) => study.slug === slug
  );
}