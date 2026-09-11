// PLACE THIS FILE AT: app/About/case-study/page.tsx
//
// Make sure the folder is named "case-study" (hyphen, no space) —
// not "Case study" — otherwise Next.js will 404 on this route.

import type { ReactElement } from "react";
import { caseStudies as itOperationsCaseStudies } from "@/app/services/digital-it-operations/casestudies/data.tsx/casestudies";
import { caseStudies as dataAnalyticsCaseStudies_ } from "@/app/services/data-analytics/casestudies/data/casestudies";
// Single source of truth for AI case studies — same file the AI
// service page and its [slug] detail page read from. Add a new
// case study there once and it appears everywhere, including here.
import { caseStudies as aiCaseStudiesRaw } from "@/app/services/artificial-intelligence/data/case-studies";
// Single source of truth for Business Process case studies — same
// file the business-process-services page and its [slug] detail
// page read from. Add a new case study there once and it appears
// everywhere, including here.
import { caseStudies as bpCaseStudiesRaw } from "@/app/services/business-process-services/data/case-studies";
import { caseStudies as digitalSoftwareCaseStudiesRaw } from "@/app/services/digital-software/casestudies/data/case-studies";
import { caseStudies as aiVoiceCaseStudiesRaw } from "@/app/services/offerings/ai-native-contact-center/data/case-studies";
import { caseStudies as medicalCodingCaseStudiesRaw } from "@/app/services/offerings/enterprise-automation/data/case-studies";
import { caseStudies as aiChatCaseStudiesRaw } from "@/app/services/offerings/generative-ai/data/case-studies";
// Single source of truth for Enterprise Platform case studies —
// same file the enterprise-platform-services page and its [slug]
// detail page read from. Add a new case study there once (with a
// `date`) and it appears everywhere, including here.
import { caseStudies as epCaseStudiesRaw } from "@/app/services/enterprise-platform-services/casestudies/data/case-studies";
import CaseStudyFilters, { type CaseStudyGroup } from "../Case-study/CaseStudyFilters";
import { caseStudies as gccCaseStudiesRaw } from "@/app/services/global-capability-centers/data/case-studies";
import { caseStudies as cloudCaseStudiesRaw } from "@/app/services/cloud/casestudies/data.tsx/casestudies";
import { caseStudies as aiFileStorageCaseStudiesRaw } from "@/app/services/offerings/sustainability-services/data/case-studies";
import { caseStudies as aiMeetingAssistantCaseStudiesRaw } from "@/app/services/offerings/vibe-coding/data/case-studies";

/* ===============================================================
   SORT HELPER — newest date first.
   Entries missing a valid `date` are treated as oldest (pushed to
   the end) instead of crashing the sort or breaking ordering.
   Add/keep a `date: "YYYY-MM-DD"` field on every case study in
   every source file, and the newest one will always render first
   here automatically — no manual reordering needed.
================================================================ */
function sortByDateDesc<T extends { date?: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const timeA = a.date ? new Date(a.date).getTime() : 0;
    const timeB = b.date ? new Date(b.date).getTime() : 0;
    return timeB - timeA;
  });
}

/* ===============================================================
   DATA — Artificial Intelligence case studies (from shared source)
================================================================ */
const aiCaseStudies = sortByDateDesc(
  aiCaseStudiesRaw.map((study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.body,
    category: study.industry?.toUpperCase(),
    date: study.date,
  }))
);

/* ===============================================================
   DATA — Digital and Software case studies
================================================================ */
const digitalSoftwareCaseStudies = sortByDateDesc(digitalSoftwareCaseStudiesRaw).map((study) => ({
  slug: study.slug,
  image: study.image,
  title: study.title,
  body: study.cardDescription, // was study.body
  category: study.industry?.toUpperCase(),
}));

/* ===============================================================
   DATA — Digital IT Operations case studies (from shared source)
================================================================ */
const digitalItOperationsCaseStudies = sortByDateDesc(
  itOperationsCaseStudies.map((study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.body,
    category: study.industry?.toUpperCase(),
    date: study.date,
  }))
);

/* ===============================================================
   DATA — Cloud Engineering case studies
================================================================ */
const cloudCaseStudies = sortByDateDesc(
  cloudCaseStudiesRaw.map((study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.body,
    category: study.industry?.toUpperCase(),
    date: study.date,
  }))
);

/* ===============================================================
   DATA — Data & Analytics case studies (from shared source)
================================================================ */
const dataAnalyticsCaseStudies = sortByDateDesc(
  dataAnalyticsCaseStudies_.map((study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.body,
    category: study.industry?.toUpperCase(),
    date: study.date,
  }))
);

/* ===============================================================
   DATA — Business Process Services case studies (from shared source)
   Single source of truth: app/services/business-process-services/
   data/case-studies.tsx — the same file the business-process-services
   page and its [slug] detail page read from. Add a new case study
   there once (with a `date`) and it appears everywhere, including
   here, automatically sorted newest first.
================================================================ */
const businessProcessCaseStudies = sortByDateDesc(
  bpCaseStudiesRaw.map((study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.cardDescription,
    category: study.industry?.toUpperCase(),
    date: study.date,
  }))
);

/* ===============================================================
   DATA — Enterprise Platform Services case studies (from shared source)
   Single source of truth: app/services/enterprise-platform-services/
   data/case-studies.tsx — the same file the enterprise-platform-services
   page and its [slug] detail page read from. Add a new case study
   there once (with a `date`) and it appears everywhere, including
   here, automatically sorted newest first.
================================================================ */
const enterprisePlatformCaseStudies = sortByDateDesc(
  epCaseStudiesRaw.map((study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.body,
    category: study.industry?.toUpperCase(),
    date: study.date,
  }))
);

/* ===============================================================
   DATA — Global Capability Centers case studies
================================================================ */
const gccCaseStudies = sortByDateDesc(
  gccCaseStudiesRaw.map((study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.body,
    category: study.industry?.toUpperCase(),
    date: study.date,
  }))
);

/* ===============================================================
   DATA — AI Voice Call case studies
================================================================ */
const aiVoiceCallCaseStudies = sortByDateDesc(
  aiVoiceCaseStudiesRaw.map((study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.body,
    category: study.industry?.toUpperCase(),
    date: study.date,
  }))
);

/* ===============================================================
   DATA — AI-Powered Medical Coding case studies
================================================================ */
const medicalCodingCaseStudies = sortByDateDesc(
  medicalCodingCaseStudiesRaw.map((study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.body,
    category: study.industry?.toUpperCase(),
    date: study.date,
  }))
);

/* ===============================================================
   DATA — AI Chat Box case studies
================================================================ */
const aiChatBoxCaseStudies = sortByDateDesc(
  aiChatCaseStudiesRaw.map((study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.body,
    category: study.industry?.toUpperCase(),
    date: study.date,
  }))
);

/* ===============================================================
   DATA — AI File Storage case studies
================================================================ */
const aiFileStorageCaseStudies = sortByDateDesc(
  aiFileStorageCaseStudiesRaw.map((study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.body,
    category: study.industry?.toUpperCase(),
    date: study.date,
  }))
);

/* ===============================================================
   DATA — AI Meeting Assistant case studies
================================================================ */
const aiMeetingAssistantCaseStudies = sortByDateDesc(
  aiMeetingAssistantCaseStudiesRaw.map((study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.body,
    category: study.industry?.toUpperCase(),
    date: study.date,
  }))
);

export const metadata = {
  title: "Case Studies | Starfii",
  description:
    "Explore how Starfii's Artificial Intelligence, Digital & Software Engineering, Digital IT Operations, Cloud Engineering, Data & Analytics, Business Process, Enterprise Platform, Global Capability Center, AI Voice Call, AI-Powered Medical Coding, AI Chat Box, AI File Storage, and AI Meeting Assistant practices help enterprises unlock measurable value.",
};

/* ===============================================================
   GROUPS — one entry per filter tab. basePath keeps each card's
   "Learn More" link pointing at the same route it used before.
   Each group's items are already sorted newest-first above.
================================================================ */
const groups: CaseStudyGroup[] = [
  {
    key: "ai",
    label: "Artificial Intelligence",
    basePath: "/services/artificial-intelligence",
    items: aiCaseStudies,
  },
  {
    key: "digital-software",
    label: "Digital and Software",
    basePath: "/services/digital-software/casestudies",
    items: digitalSoftwareCaseStudies,
  },
  {
    key: "it-operations",
    label: "Digital IT Operations",
    basePath: "/services/digital-it-operations/casestudies",
    items: digitalItOperationsCaseStudies,
  },
  {
    key: "cloud",
    label: "Cloud Engineering",
    basePath: "/services/cloud/casestudies",
    items: cloudCaseStudies,
  },
  {
    key: "data-analytics",
    label: "Data & Analytics",
    basePath: "/services/data-analytics/casestudies",
    items: dataAnalyticsCaseStudies,
  },
  {
    key: "business-process",
    label: "Business Process",
    basePath: "/services/business-process-services",
    items: businessProcessCaseStudies,
  },
  {
    key: "enterprise-platform",
    label: "Enterprise Platform",
    basePath: "/services/enterprise-platform-services/casestudies",
    items: enterprisePlatformCaseStudies,
  },
  {
    key: "gcc",
    label: "Global Capability Centers",
    basePath: "/services/global-capability-centers",
    items: gccCaseStudies,
  },
  {
    key: "ai-voice",
    label: "AI Voice Call",
    basePath: "/services/offerings/ai-native-contact-center",
    items: aiVoiceCallCaseStudies,
  },
  {
    key: "medical-coding",
    label: "AI Medical Coding",
    basePath: "/services/offerings/enterprise-automation",
    items: medicalCodingCaseStudies,
  },
  {
    key: "ai-chat",
    label: "AI Chat Box",
    basePath: "/services/offerings/generative-ai",
    items: aiChatBoxCaseStudies,
  },
  {
    key: "ai-file-storage",
    label: "AI File Storage",
    basePath: "/services/offerings/sustainability-services",
    items: aiFileStorageCaseStudies,
  },
  {
    key: "ai-meetings",
    label: "AI Meeting Assistant",
    basePath: "/services/offerings/vibe-coding",
    items: aiMeetingAssistantCaseStudies,
  },
];

export default function CaseStudyPage(): ReactElement {
  return <CaseStudyFilters groups={groups} />;
}