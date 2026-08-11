import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-shell";
import { getDoc } from "../legal-data";
import { LegalShell } from "../legal-shell";

const doc = getDoc("terms")!;

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The agreement between you and Dynamic Solution Sole Co., Ltd. covering how you may use Waow, your content, enforcement and appeals.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <main>
      <SiteHeader />
      <LegalShell doc={doc} />
      <SiteFooter />
    </main>
  );
}
