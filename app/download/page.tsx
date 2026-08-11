import type { Metadata } from "next";
import { DownloadPageContent } from "./content";

export const metadata: Metadata = {
  title: "Download",
  description: "Get Waow for iPhone and iPad.",
};

export default function Page() {
  return <DownloadPageContent />;
}
