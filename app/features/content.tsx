"use client";

import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { useT } from "../i18n/lang";
import type { SiteKey } from "../i18n/strings";

const items: [SiteKey, SiteKey, string][] = [
  ["feat.encryption.t", "feat.encryption.c", "encrypted"],
  ["feat.messaging.t", "feat.messaging.c", "mark_chat_unread"],
  ["feat.groups.t", "feat.groups.c", "groups"],
  ["feat.calls.t", "feat.calls.c", "video_call"],
  ["feat.photos.t", "feat.photos.c", "photo_camera"],
  ["feat.voice.t", "feat.voice.c", "mic"],
  ["feat.ipad.t", "feat.ipad.c", "tablet_mac"],
  ["feat.devices.t", "feat.devices.c", "devices"],
  ["feat.tools.t", "feat.tools.c", "manage_search"],
  // Moved here when /privacy became the Privacy Policy; these describe privacy
  // features, not the legal notice.
  ["feat.chatlock.t", "feat.chatlock.c", "lock"],
  ["feat.hidden.t", "feat.hidden.c", "folder_off"],
  ["feat.previews.t", "feat.previews.c", "notifications_off"],
  ["feat.controls.t", "feat.controls.c", "visibility"],
];

export function FeaturesPageContent() {
  const t = useT();
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="features.eyebrow" title="features.title" copy="features.copy" />
      <section className="content-section alt">
        <div className="shell content-grid">
          {items.map(([title, copy, icon], index) => (
            <article className="content-card" key={title}>
              <div className="content-card-top">
                <span className="number">{String(index + 1).padStart(2, "0")}</span>
                <span className="content-card-icon material-symbols-rounded" aria-hidden="true">{icon}</span>
              </div>
              <h2>{t(title)}</h2>
              <p>{t(copy)}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
