import CloudServicesSection from "@/app/components/Sections/CloudServicesSection";

export const metadata = {
  title: "Cloud & DevOps",
  description: "Cloud engineering and DevOps services that accelerate delivery, modernize infrastructure, and scale with confidence.",
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

export default function CloudPage() {
  return <CloudServicesSection />;
}