import type { Metadata } from "next";
import { HelpPageContent } from "./content";

export const metadata: Metadata = {
  title: "Help Centre",
  description: "Find answers about Waow accounts, messages, calls, privacy and devices.",
  alternates: {
    canonical: "/help",
    languages: { en: "/help", lo: "/lo/help", "x-default": "/help" },
  },
};

export default function Page() {
  return <HelpPageContent />;
}
