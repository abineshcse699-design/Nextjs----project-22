// app/services/ITSM-Migration/page.tsx

import ItsmMigrationTransformationSection from "./ItsmMigrationTransformationSection";

export const metadata = {
  title: "ITSM Migration & Transformation",
  description:
    "Move enterprises off legacy service management platforms and onto modern environments, migrating data, configurations, workflows, and integrations with a structured, low risk approach.",
      icons: {
    icon: [
      {
        url: "/starfii_star_flat.svg",
        type: "image/svg+xml",
        sizes: "32x32",
      },
    ],
  },
};

export default function Page() {
  return <ItsmMigrationTransformationSection />;
}