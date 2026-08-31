// app/industries/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import IndustryPageTemplate from "@/app/industries/IndustryPageTemplate/IndustryPageTemplate";
import { industries } from "@/app/industries/data";

type Props = {
  params: Promise<{ slug: string }>;
};

/*
|--------------------------------------------------------------------------
| Industry URL aliases
|--------------------------------------------------------------------------
|
| data.ts uses one canonical key per industry (e.g. "finance",
| "ecommerce-retail", "travel-booking"), but the Industries nav menu
| has its own labels/slugs, and some of them don't match the data.ts
| key 1:1 (e.g. "Retail" -> data key "ecommerce-retail").
|
| This map lets a nav slug resolve to the correct data.ts entry.
| Nothing in data.ts needs to change — this is purely a lookup layer.
|
| IMPORTANT: if your Navbar/menu component uses different href values
| than the ones below (e.g. "financial-services" instead of what your
| menu actually links to), update the keys on the LEFT to match your
| real hrefs exactly. The keys on the right must match a real key in
| industries (from data.ts).
|--------------------------------------------------------------------------
*/

const slugAliases: Record<string, string> = {
  banking: "finance",
  retail: "ecommerce-retail",
  "travel-hospitality": "travel-booking",
};

/*
|--------------------------------------------------------------------------
| Get industry data
|--------------------------------------------------------------------------
*/

function getIndustryData(slug: string) {
  const actualSlug = slugAliases[slug] ?? slug;

  return industries[actualSlug];
}

/*
|--------------------------------------------------------------------------
| Static params
|--------------------------------------------------------------------------
|
| This generates a route for every real data.ts key AND every alias,
| so both /industries/finance and /industries/banking (for example)
| are pre-rendered.
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
  const industrySlugs = Object.keys(industries);

  const aliasSlugs = Object.keys(slugAliases);

  const allSlugs = Array.from(
    new Set([...industrySlugs, ...aliasSlugs])
  );

  return allSlugs.map((slug) => ({
    slug,
  }));
}

/*
|--------------------------------------------------------------------------
| Display name overrides
|--------------------------------------------------------------------------
|
| When an alias slug should show a different visible name/kicker/headline
| than its underlying data.ts entry (e.g. "banking" shows "Banking &
| Finance" even though it reuses the "finance" data), list it here.
|--------------------------------------------------------------------------
*/

const displayOverrides: Record<
  string,
  { name: string; kicker: string; headline: string }
> = {
  banking: {
    name: "Banking & Finance",
    kicker: "Industry Expertise / Banking & Finance",
    headline: "Banking & Fintech Software Development",
  },
};

/*
|--------------------------------------------------------------------------
| Metadata
|--------------------------------------------------------------------------
*/

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const data = getIndustryData(slug);

  if (!data) {
    return {};
  }

  const displayName = displayOverrides[slug]?.name ?? data.name;

  return {
    title: `${displayName} Industry Solutions | Starfii`,
    description: data.description,
  };
}

/*
|--------------------------------------------------------------------------
| Industry Page
|--------------------------------------------------------------------------
*/

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;

  const data = getIndustryData(slug);

  /*
   * Invalid slug — no data.ts entry and no alias resolves to one.
   * Shows Next.js 404 page.
   */
  if (!data) {
    notFound();
  }

  /*
   * Apply a display override (name/kicker/headline) if this slug has one,
   * without modifying the underlying data.ts entry.
   */
  const override = displayOverrides[slug];

  const pageData = override
    ? {
        ...data,
        slug,
        name: override.name,
        kicker: override.kicker,
        headline: override.headline,
      }
    : data;

  return <IndustryPageTemplate data={pageData} />;
}