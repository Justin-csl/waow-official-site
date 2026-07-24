import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Features",
  description: "Discover messaging, calls, media, groups and iPad experiences in Waow.",
};

const items = [
  ["Messaging", "Reply, edit, react and share without losing the natural rhythm of a conversation."],
  ["Groups", "Create a space for family, friends or teams, with media and group calling close at hand."],
  ["Voice & video", "Start clear one-to-one or group calls directly from the people and conversations you know."],
  ["Photos & video", "Capture, crop, rotate, add effects, trim clips, adjust sound and choose send quality."],
  ["Voice messages", "Record and play back the details that are easier to say than type."],
  ["iPad", "A responsive layout for portrait, landscape, keyboards and multitasking."],
  ["Linked devices", "Continue conversations across approved devices with clear device controls."],
  ["Conversation tools", "Search, favourite, archive, clear and manage the chats that matter."],
];

export default function FeaturesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Product" title="Everything you need to keep the conversation moving." copy="Waow brings messaging, expressive media, calls and privacy controls together in one calm experience." />
      <section className="content-section alt">
        <div className="shell content-grid">
          {items.map(([title, copy], index) => (
            <article className="content-card" key={title}>
              <span className="number">0{index + 1}</span>
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
