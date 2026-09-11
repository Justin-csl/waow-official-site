import type { Metadata } from "next";
import { AboutPageContent } from "./content";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Waow, a private messaging app built in Laos to help people communicate safely and feel closer.",
  alternates: {
    canonical: "/about",
    languages: { en: "/about", lo: "/lo/about", "x-default": "/about" },
  },
};

export default function Page() {
  return <AboutPageContent />;
}
