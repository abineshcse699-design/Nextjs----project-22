// app/services/itsm-service-management/page.tsx

import ITSMSection from "./ITSMSection";

export const metadata = {
  title: "ITSM & Enterprise Service Management",
  description:
    "Transform IT service operations with modern ITSM platforms, intelligent workflows, and scalable enterprise service management solutions.",
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
  return <ITSMSection />;
}