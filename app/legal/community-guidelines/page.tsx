import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-shell";
import { getDoc } from "../../legal/legal-data";
import { LegalShell } from "../../legal/legal-shell";

const doc = getDoc("community-guidelines")!;

export const metadata: Metadata = {
  title: "Community Guidelines",
  description:
    "The rules for using Waow: what is never allowed, what is not allowed, how to report it and what we do about it.",
  alternates: { canonical: "/legal/community-guidelines" },
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
