import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-shell";
import { getDoc } from "../legal/legal-data";
import { LegalShell } from "../legal/legal-shell";

const doc = getDoc("delete-account")!;

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "Deactivate your Waow account in the app or contact Waow for a permanent erasure request.",
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
