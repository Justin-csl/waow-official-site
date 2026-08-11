import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-shell";
import { getDoc } from "../../legal/legal-data";
import { LegalShell } from "../../legal/legal-shell";

const doc = getDoc("ai-translation")!;

export const metadata: Metadata = {
  title: "AI and Translation Notice",
  description:
    "How Waow's translation and AI assistant handle your text: when they run, where it goes, what is kept and what is never used for training.",
  alternates: { canonical: "/legal/ai-translation" },
};

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <LegalShell doc={doc} />
      <SiteFooter />
    </main>
  );
}
