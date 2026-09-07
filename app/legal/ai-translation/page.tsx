import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-shell";
import { getDoc } from "../../legal/legal-data";
import { LegalShell } from "../../legal/legal-shell";

const doc = getDoc("ai-translation")!;

export const metadata: Metadata = {
  title: "Translation Notice",
  description:
    "How Waow handles the text you select for translation.",
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
