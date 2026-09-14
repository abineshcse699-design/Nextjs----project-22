import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CaseStudyTabs from "../CaseStudyTabs";
import {
  caseStudies,
  getCaseStudyBySlug,
} from "../data/caseStudies";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* ============================================================
   GENERATE STATIC ROUTES
============================================================ */

export function generateStaticParams() {
  return caseStudies.map(
    (study) => ({
      slug: study.slug,
    })
  );
}

/* ============================================================
   METADATA
============================================================ */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const study =
    getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study | Starfii",
      description:
        "Starfii Quality Engineering case study.",
    };
  }

  return {
    title: `${study.title} | Starfii`,
    description: study.body,

    openGraph: {
      title: study.title,
      description: study.body,
      images: [
        {
          url: study.image,
          width: 1600,
          height: 900,
          alt: study.title,
        },
      ],
    },
  };
}

/* ============================================================
   PAGE
============================================================ */

export default async function CaseStudyPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const currentStudy =
    getCaseStudyBySlug(slug);

  /*
   * IMPORTANT
   *
   * If slug is wrong, show Next.js 404.
   * If slug exists, render case study.
   */

  if (!currentStudy) {
    notFound();
  }

  const currentIndex =
    caseStudies.findIndex(
      (study) =>
        study.slug === slug
    );

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
      study={currentStudy}
      previousStudy={
        previousStudy
      }
      nextStudy={nextStudy}
    />
  );
}