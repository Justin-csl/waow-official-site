import type { Metadata } from "next";
import { FeaturesPageContent } from "./content";

export const metadata: Metadata = {
  title: "Features",
  description: "Discover end-to-end encrypted messaging, calls, media, groups and iPad experiences in Waow.",
};

export default function Page() {
  return <FeaturesPageContent />;
}
