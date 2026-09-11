import type { Metadata } from "next";
import { SecurityPageContent } from "./content";

export const metadata: Metadata = {
  title: "Private and secure Lao chat with Waow",
  description: "Learn how Waow protects private and group messages with end-to-end encryption, device security, chat lock and responsible disclosure.",
  alternates: {
    canonical: "/security",
    languages: { en: "/security", lo: "/lo/security", "x-default": "/security" },
  },
};

export default function Page() {
  return <SecurityPageContent />;
}
