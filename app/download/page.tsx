import type { Metadata } from "next";
import { DownloadPageContent } from "./content";

export const metadata: Metadata = {
  title: "Download Waow — Lao chat app for iPhone and iPad",
  description: "Download Waow, a Lao chat and messaging app for iPhone and iPad, or open the official Waow web app.",
  alternates: {
    canonical: "/download",
    languages: { en: "/download", lo: "/lo/download", "x-default": "/download" },
  },
};

export default function Page() {
  return <DownloadPageContent />;
}
