import type { Metadata } from "next";
import { FeaturesPageContent } from "./content";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore Waow's encrypted chats, calls, groups, media sharing and instant Lao translation.",
  alternates: {
    canonical: "/features",
    languages: { en: "/features", lo: "/lo/features", "x-default": "/features" },
  },
};

export default function Page() {
  return <FeaturesPageContent />;
}
