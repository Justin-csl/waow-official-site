import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-shell";
import { getDoc } from "../../legal/legal-data";
import { LegalShell } from "../../legal/legal-shell";

const doc = getDoc("child-safety")!;

export const metadata: Metadata = {
  title: "Child Safety Standards",
  description:
    "Waow's standards against child sexual abuse and exploitation, how reports are prioritised, and our designated safety contact.",
  alternates: { canonical: "/legal/child-safety" },
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
