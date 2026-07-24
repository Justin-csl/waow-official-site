import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Security",
  description: "Learn how Waow approaches authentication, device security and responsible disclosure.",
};

export default function SecurityPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Security" title="Security is a practice, not a slogan." copy="Waow combines native device protection, secure account controls and transparent release verification." />
      <section className="content-section alt">
        <div className="shell content-grid">
          <article className="content-card"><span className="number">01</span><h2>Native authentication</h2><p>Face ID and the iPhone passcode provide system-managed authentication for protected app areas.</p></article>
          <article className="content-card"><span className="number">02</span><h2>Device controls</h2><p>Linked devices are designed to be visible, reviewable and removable from the primary account.</p></article>
          <article className="content-card"><span className="number">03</span><h2>Protected keys</h2><p>Security-sensitive account and device material belongs in iOS Keychain or equivalent protected platform storage.</p></article>
          <article className="content-card" id="report"><span className="number">04</span><h2>Responsible disclosure</h2><p>Security researchers should report vulnerabilities privately. A dedicated disclosure address and response policy will be published before launch.</p></article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
