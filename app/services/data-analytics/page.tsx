import DataAnalyticsServicesSection from "@/components/Sections/DataAnalyticsServicesSection";
export const metadata = {
  title: "Data & Analytics | Starfii",
  description: "AI powered data engineering, analytics, and insights services that turn data into measurable business value.",
    icons: {
    icon: [
      {
        url: "/starfii_logo_WHITE.svg",
        type: "image/svg+xml",
        sizes: "32x32",
      },
    ],
  },
};
export default function DataAnalyticsPage() {
  return <DataAnalyticsServicesSection />;
}