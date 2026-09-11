import type { Metadata } from "next";
import { AboutPageContent } from "./content";

export const metadata: Metadata = {
  title: "About Waow — a messaging app built in Laos",
  description: "Meet Waow, a Lao messaging app built in Vientiane to help people chat, call and communicate privately.",
  alternates: {
    canonical: "/about",
    languages: { en: "/about", lo: "/lo/about", "x-default": "/about" },
  },
};

export default function Page() {
  return <AboutPageContent />;
}
