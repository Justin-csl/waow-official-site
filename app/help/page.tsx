import type { Metadata } from "next";
import { HelpPageContent } from "./content";

export const metadata: Metadata = {
  title: "Waow Help Centre — messages, calls and translation",
  description: "Find help for the Waow Lao chat app, including accounts, private messages, group chat, voice and video calls, translation, privacy and devices.",
  alternates: {
    canonical: "/help",
    languages: { en: "/help", lo: "/lo/help", "x-default": "/help" },
  },
};

export default function Page() {
  return <HelpPageContent />;
}
