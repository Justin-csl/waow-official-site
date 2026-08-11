import type { Metadata } from "next";
import { HelpPageContent } from "./content";

export const metadata: Metadata = {
  title: "Help Centre",
  description: "Find answers about Waow accounts, messages, calls, privacy and devices.",
};

export default function Page() {
  return <HelpPageContent />;
}
