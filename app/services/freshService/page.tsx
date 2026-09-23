// app/services/global-capability-centers/page.tsx

import FreshserviceITSMSection from "./freshservice";

export const metadata = {
  title: "Freshservice ITSM Implementation",
  description:
    "Implement, customize, migrate and optimize Freshservice for modern, efficient and automated IT service operations.",
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
  return <FreshserviceITSMSection />;
}