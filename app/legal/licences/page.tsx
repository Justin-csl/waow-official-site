import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-shell";
import { getDoc } from "../../legal/legal-data";
import { LegalShell } from "../../legal/legal-shell";

const doc = getDoc("licences")!;

export const metadata: Metadata = {
  title: "Open Source Licences",
  description:
    "The open source components Waow is built with and the full text of their licences.",
  alternates: { canonical: "/legal/licences" },
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
