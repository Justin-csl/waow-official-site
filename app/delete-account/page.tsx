import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-shell";
import { getDoc } from "../legal/legal-data";
import { LegalShell } from "../legal/legal-shell";

const doc = getDoc("delete-account")!;

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "Delete your Waow account from the app or from this page without installing it, and what happens to your data afterwards.",
  alternates: { canonical: "/delete-account" },
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
