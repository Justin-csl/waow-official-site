import type { Metadata } from "next";
import { AboutPageContent } from "./content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Waow and its mission.",
};

export default function Page() {
  return <AboutPageContent />;
}
