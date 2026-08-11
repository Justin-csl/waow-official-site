import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-shell";
import { getDoc } from "../../legal/legal-data";
import { LegalShell } from "../../legal/legal-shell";

const doc = getDoc("website-privacy")!;

export const metadata: Metadata = {
  title: "Website Privacy Notice",
  description:
    "What waow.app records about visits to the website itself, separate from the Waow app.",
  alternates: { canonical: "/legal/website-privacy" },
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
