// PLACE THIS FILE AT: app/About/case-study/page.tsx
//
// Make sure the folder is named "case-study" (hyphen, no space) —
// not "Case study" — otherwise Next.js will 404 on this route.
//
// REMOVED on request: Artificial Intelligence, Digital IT Operations,
// Business Process, Enterprise Platform, and Global Capability Centers
// case study groups. Their imports, data-mapping blocks, and group
// entries have all been deleted below — none of them appear on this
// page anymore (not as pinned pills, not in the search dropdown).

import type { ReactElement } from "react";
import { caseStudies as dataAnalyticsCaseStudies_ } from "@/app/services/data-analytics/casestudies/data/casestudies";

import { caseStudies as itsmServiceMgmtCaseStudiesRaw } from "@/app/services/itsm-service-management/casestudies/data/case-studies";
import { caseStudies as digitalSoftwareCaseStudiesRaw } from "@/app/services/digital-software/casestudies/data/case-studies";
import { caseStudies as aiVoiceCaseStudiesRaw } from "@/app/services/offerings/ai-native-contact-center/data/case-studies";
import { caseStudies as medicalCodingCaseStudiesRaw } from "@/app/services/offerings/enterprise-automation/data/case-studies";
import { caseStudies as aiChatCaseStudiesRaw } from "@/app/services/offerings/generative-ai/data/case-studies";
import CaseStudyFilters, { type CaseStudyGroup } from "../Case-study/CaseStudyFilters";
import { caseStudies as cloudCaseStudiesRaw } from "@/app/services/cloud/casestudies/data.tsx/casestudies";
import { caseStudies as aiFileStorageCaseStudiesRaw } from "@/app/services/offerings/sustainability-services/data/case-studies";
import { caseStudies as aiMeetingAssistantCaseStudiesRaw } from "@/app/services/offerings/vibe-coding/data/case-studies";
import { caseStudies as itsmMigrationCaseStudiesRaw } from "@/app/services/ITSM-Migration/casestudies/data/caseStudies";
import { caseStudies as legacyModernizationCaseStudiesRaw } from "@/app/services/legacy-Modernization/casestudies/data/caseStudies";

import { caseStudies as qualityEngineeringCaseStudiesRaw } from "@/app/services/Quality-Engineering/casestudies/data/caseStudies";

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


const legacyModernizationCaseStudies = sortByDateDesc(
  legacyModernizationCaseStudiesRaw.map((study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.body,
    category: study.industry?.toUpperCase(),
    date: study.date,
  }))
);

const itsmServiceMgmtCaseStudies = sortByDateDesc(
  itsmServiceMgmtCaseStudiesRaw.map((study) => ({
    slug: study.slug,
    image: study.image,
    title: study.title,
    body: study.cardDescription,
    category: study.industry?.toUpperCase(),
    date: study.date,
  }))
);

const itsmMigrationCaseStudies = sortByDateDesc(
  itsmMigrationCaseStudiesRaw.map((study) => ({
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


// ^ adjust path to wherever this file actually lives

const qualityEngineeringCaseStudies = sortByDateDesc(
  qualityEngineeringCaseStudiesRaw.map((study) => ({
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
    "Explore how Starfii's Digital & Software Engineering, Cloud Engineering, Data & Analytics, AI Voice Call, AI-Powered Medical Coding, AI Chat Box, AI File Storage, AI Meeting Assistant, ITSM Migration, ITSM Service Management, Legacy Modernization, and Quality Engineering practices help enterprises unlock measurable value.",
};

/* ===============================================================
   GROUPS — one entry per filter tab. basePath keeps each card's
   "Learn More" link pointing at the same route it used before.
   Each group's items are already sorted newest-first above.

   REMOVED groups: ai, it-operations, business-process,
   enterprise-platform, gcc — no longer shown on this page.
================================================================ */
const groups: CaseStudyGroup[] = [
  {
    key: "digital-software",
    label: "Software & Product",
    basePath: "/services/digital-software/casestudies",
    items: digitalSoftwareCaseStudies,
  },
  {
    key: "cloud",
    label: "Cloud & Devops",
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

  {
  key: "itsm-migration",
  label: "ITSM Migration",
  basePath: "/services/ITSM-Migration/casestudies",
  items: itsmMigrationCaseStudies,
},

{
  key: "legacy-Modernization",
  label: "Legacy Modernization",
  basePath: "/services/legacy-Modernization/casestudies",
  items: legacyModernizationCaseStudies,
},

{
  key: "itsm-service-management",
  label: "ITSM Service Management",
  basePath: "/services/itsm-service-management/casestudies",
  items: itsmServiceMgmtCaseStudies,
},

{
  key: "Quality-Engineering",
  label: "Quality Engineering",
  basePath: "/services/Quality-Engineering/casestudies",
  items: qualityEngineeringCaseStudies,
},

];

export default function CaseStudyPage(): ReactElement {
  return <CaseStudyFilters groups={groups} />;
}