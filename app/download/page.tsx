import type { Metadata } from "next";
import { DownloadPageContent } from "./content";

export const metadata: Metadata = {
  title: "Download",
  description: "Download Waow, the private messaging app from Laos, for iPhone and iPad or use Waow on the web.",
  alternates: {
    canonical: "/download",
    languages: { en: "/download", lo: "/lo/download", "x-default": "/download" },
  },
};

export default function Page() {
  return <DownloadPageContent />;
}
