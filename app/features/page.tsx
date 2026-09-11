import type { Metadata } from "next";
import { FeaturesPageContent } from "./content";

export const metadata: Metadata = {
  title: "Lao messaging features: chat, groups, voice and video calls",
  description: "Explore Waow private messaging, Lao group chat, voice and video calls, media sharing, chat translation and device-protected conversations.",
  alternates: {
    canonical: "/features",
    languages: { en: "/features", lo: "/lo/features", "x-default": "/features" },
  },
};

export default function Page() {
  return <FeaturesPageContent />;
}
