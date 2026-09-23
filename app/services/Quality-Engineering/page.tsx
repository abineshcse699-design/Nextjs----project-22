// app/services/Quality-Engineering/page.tsx

import QualityEngineeringSection from "./QualityEngineeringSection";

export const metadata = {
  title: "Quality Engineering",
  description:
    "Improve software reliability with intelligent testing, automation, and continuous quality engineering practices.",
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
  return <QualityEngineeringSection />;
}