import DigitalSoftwareServicesSection from "@/components/Sections/DigitalSoftwareServicesSection";

export const metadata = {
  title: "Software & Product Engineering | Starfii",
  description:
    "AI led software development, product engineering, and modernization services.",

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

export default function DigitalSoftwarePage() {
  return <DigitalSoftwareServicesSection />;
}