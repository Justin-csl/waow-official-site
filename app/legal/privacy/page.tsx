import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-shell";
import { getDoc } from "../legal-data";
import { LegalShell } from "../legal-shell";

const doc = getDoc("privacy")!;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Waow collects, uses, shares and retains your information, and the choices and rights you have.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <SiteHeader />
      <LegalShell doc={doc} />
      <SiteFooter />
    </main>
  );
}
