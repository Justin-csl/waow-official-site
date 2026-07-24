import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Help Centre",
  description: "Find answers about Waow accounts, messages, calls, privacy and devices.",
};

const categories = [
  ["Getting started", "Account setup, OTP, profiles and your first conversation."],
  ["Messages & groups", "Sending, replies, editing, reactions, search and group management."],
  ["Calls", "Voice and video calling, permissions, audio routes and troubleshooting."],
  ["Privacy & chat lock", "Face ID, locked conversations, secret codes and privacy controls."],
  ["Photos, video & files", "Camera access, editing, quality, uploads and storage."],
  ["Linked devices", "Linking, reviewing active devices, transferring history and logging out."],
  ["Notifications", "Message previews, push permissions, sounds and badge settings."],
  ["Account", "Change your number, request information or delete your Waow account."],
];

export default function HelpPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Help Centre" title="How can we help?" copy="Clear guidance for getting started, staying private and solving common problems." />
      <div className="shell support-search"><span>⌕</span><span>Search Waow Help</span></div>
      <section className="content-section alt">
        <div className="shell content-grid">
          {categories.map(([title, copy], index) => (
            <article className="content-card" key={title} id={index === 7 ? "delete" : undefined}>
              <span className="number">0{index + 1}</span><h2>{title}</h2><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section" id="contact">
        <div className="shell prose">
          <h2>Still need help?</h2>
          <p>Customer support, privacy, legal and security enquiries will use separate contact channels. Support submissions will never automatically include message content, encryption keys or private contacts.</p>
          <h2 id="status">Service status</h2>
          <p>A public status page will report availability for authentication, messaging, media, calls, push notifications and linked devices before the public launch.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
