// app/industries/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPageTemplate from "@/app/IndustryPageTemplate/IndustryPageTemplate";
import { industries } from "@/app/industries/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = industries[slug];
  if (!data) return {};
  return {
    title: `${data.name} Industry Solutions | Starfii`,
    description: data.description,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const data = industries[slug];
  if (!data) notFound();
  return <IndustryPageTemplate data={data} />;
}