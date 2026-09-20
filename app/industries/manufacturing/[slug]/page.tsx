import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CaseStudyTabs from "../CaseStudyTabs";
import { caseStudies, getCaseStudyBySlug } from "../data/casestudies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Manufacturing Case Study | Starfii",
      description:
        "Starfii manufacturing technology and digital transformation case study.",
    };
  }

  return {
    title: `${study.title} | Starfii`,
    description: study.cardDescription,
    openGraph: {
      title: study.title,
      description: study.cardDescription,
      type: "article",
      images: [
        {
          url: study.image,
          width: 1600,
          height: 900,
          alt: study.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.cardDescription,
      images: [study.image],
    },
  };
}

export default async function ManufacturingCaseStudyPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const currentStudy = getCaseStudyBySlug(slug);

  if (!currentStudy) notFound();

  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);

  const previousStudy =
    currentIndex > 0 ? caseStudies[currentIndex - 1] : undefined;
  const nextStudy =
    currentIndex >= 0 && currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : undefined;

  return (
    <CaseStudyTabs
      study={currentStudy}
      previousStudy={previousStudy}
      nextStudy={nextStudy}
    />
  );
}