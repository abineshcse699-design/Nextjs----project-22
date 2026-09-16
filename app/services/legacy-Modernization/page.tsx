// app/services/legacy-Modernization/page.tsx

import LegacyModernizationSection from "./LegacyModernizationSection";

export const metadata = {
  title: "Legacy Modernization",
  description:
    "Transform legacy applications into secure, scalable and modern digital platforms with a structured modernization approach, from assessment through migration.",
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

export default function Page() {
  return <LegacyModernizationSection />;
}