import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "../caseStudiesData";
import CaseStudyTabs from "../[slug]/CaseStudyTabs"; // adjust path if it lives elsewhere

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) return { title: "Case Study | Starfii" };

  return {
    title: `${study.title.replace(/\s*\n\s*/g, " – ")} | Starfii Case Study`,
    description: study.cardDescription,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((s) => s.slug === slug);
  const previousStudy = index > 0 ? caseStudies[index - 1] : undefined;
  const nextStudy =
    index < caseStudies.length - 1 ? caseStudies[index + 1] : undefined;

  return (
    <CaseStudyTabs
      study={study}
      previousStudy={previousStudy}
      nextStudy={nextStudy}
    />
  );
}