import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Waow and its mission.",
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="About Waow" title="Technology should make people feel closer." copy="Waow is a messaging experience created in Laos with a focus on expression, clarity and practical privacy." />
      <section className="content-section">
        <div className="shell prose">
          <h2>Our direction</h2>
          <p>We are building a place where messaging, media and calls feel natural across iPhone and iPad—without making important controls difficult to understand.</p>
          <h2>Honest product communication</h2>
          <p>Official pages should describe only capabilities that are available and verified in the released app. Planned platforms and features are labelled clearly.</p>
          <h2 id="terms">Legal information</h2>
          <p>Final Terms of Service, Privacy Policy, Community Guidelines, account-deletion instructions and third-party licences require formal review before public launch.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
