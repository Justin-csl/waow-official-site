import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-shell";
import { getDoc } from "../../legal/legal-data";
import { LegalShell } from "../../legal/legal-shell";

const doc = getDoc("official-accounts")!;

export const metadata: Metadata = {
  title: "Official Account Policy",
  description:
    "How organisations apply for a verified official account on Waow, what we require, and the rules verified accounts follow.",
  alternates: { canonical: "/legal/official-accounts" },
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
