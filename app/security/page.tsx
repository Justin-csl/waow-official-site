import type { Metadata } from "next";
import { SecurityPageContent } from "./content";

export const metadata: Metadata = {
  title: "Security",
  description: "Learn how Waow approaches authentication, device security and responsible disclosure.",
};

export default function Page() {
  return <SecurityPageContent />;
}
