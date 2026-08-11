import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-shell";
import { getDoc } from "../../legal/legal-data";
import { LegalShell } from "../../legal/legal-shell";

const doc = getDoc("law-enforcement")!;

export const metadata: Metadata = {
  title: "Law Enforcement Request Policy",
  description:
    "How Waow handles requests for user information from authorities, and what our cooperation with the National Internet Center does and does not cover.",
  alternates: { canonical: "/legal/law-enforcement" },
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
