import type { Metadata } from "next";

import {
  caseStudies,
  getCaseStudyBySlug,
} from "../data/caseStudies";

import CaseStudyTabs from "../CaseStudyTabs";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map(
    (study) => ({
      slug: study.slug,
    })
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const study =
    getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study | Starfii",
    };
  }

  return {
    title: `${study.title} | Starfii`,
    description: study.body,
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const currentIndex =
    caseStudies.findIndex(
      (study) =>
        study.slug === slug
    );

  if (currentIndex === -1) {
    return null;
  }

  const study =
    caseStudies[currentIndex];

  const previousStudy =
    currentIndex > 0
      ? caseStudies[
          currentIndex - 1
        ]
      : undefined;

  const nextStudy =
    currentIndex <
    caseStudies.length - 1
      ? caseStudies[
          currentIndex + 1
        ]
      : undefined;

  return (
    <CaseStudyTabs
      study={study}
      previousStudy={
        previousStudy
      }
      nextStudy={nextStudy}
    />
  );
}