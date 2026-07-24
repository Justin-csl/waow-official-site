import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Features",
  description: "Discover end-to-end encrypted messaging, calls, media, groups and iPad experiences in Waow.",
};

const items = [
  ["End-to-end encryption", "Personal messages and calls are protected so they stay between you and the people you choose.", "encrypted"],
  ["Messaging", "Reply, edit, react and share without losing the natural rhythm of a conversation.", "mark_chat_unread"],
  ["Groups", "Create a space for family, friends or teams, with media and group calling close at hand.", "groups"],
  ["Voice & video", "Start clear one-to-one or group calls directly from the people and conversations you know.", "video_call"],
  ["Photos & video", "Capture, crop, rotate, add effects, trim clips, adjust sound and choose send quality.", "photo_camera"],
  ["Voice messages", "Record and play back the details that are easier to say than type.", "mic"],
  ["iPad", "A responsive layout for portrait, landscape, keyboards and multitasking.", "tablet_mac"],
  ["Linked devices", "Continue conversations across approved devices with clear device controls.", "devices"],
  ["Conversation tools", "Search, favourite, archive, clear and manage the chats that matter.", "manage_search"],
];

export default function FeaturesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Product" title="Everything you need to keep the conversation moving." copy="Waow brings messaging, expressive media, calls and privacy controls together in one calm experience." />
      <section className="content-section alt">
        <div className="shell content-grid">
          {items.map(([title, copy, icon], index) => (
            <article className="content-card" key={title}>
              <div className="content-card-top">
                <span className="number">0{index + 1}</span>
                <span className="content-card-icon material-symbols-rounded" aria-hidden="true">{icon}</span>
              </div>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
