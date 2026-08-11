import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-shell";
import { getDoc } from "../../legal/legal-data";
import { LegalShell } from "../../legal/legal-shell";

const doc = getDoc("security")!;

export const metadata: Metadata = {
  title: "Security and Vulnerability Disclosure",
  description:
    "How Waow protects user data and how security researchers can report a vulnerability responsibly.",
  alternates: { canonical: "/legal/security" },
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
