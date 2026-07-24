import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Understand Waow privacy controls, chat lock and notification protection.",
};

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Privacy" title="Privacy you can see, understand and control." copy="Choose what others can see, protect sensitive conversations and keep notification details discreet." />
      <section className="content-section">
        <div className="shell prose">
          <div className="notice">
            Waow’s security and encryption documentation will be expanded as each
            capability completes independent release verification.
          </div>
          <h2>Protect individual conversations</h2>
          <p>Chat lock is designed to move selected conversations away from the normal inbox and require Face ID or the device passcode before opening them.</p>
          <h2>Hide the locked-chat folder</h2>
          <p>A separate secret code can conceal the locked-chat folder. Entering the exact code in search reveals the protected area without exposing the code to ordinary search.</p>
          <h2>Keep previews discreet</h2>
          <p>Locked-chat notifications are designed to avoid revealing the sender, group, message text or media details on the lock screen.</p>
          <h2>Choose what people can see</h2>
          <p>Privacy settings cover profile information, read receipts, group permissions, blocked contacts, live location and unknown callers.</p>
          <h2>Your choices should persist</h2>
          <p>Privacy settings are treated as account data—not temporary screen state—and are expected to remain consistent after restart and account switching.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
