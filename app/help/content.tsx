"use client";

import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { useT } from "../i18n/lang";
import type { SiteKey } from "../i18n/strings";

const categories: [SiteKey, SiteKey][] = [
  ["help.cat.start.t", "help.cat.start.c"],
  ["help.cat.messages.t", "help.cat.messages.c"],
  ["help.cat.calls.t", "help.cat.calls.c"],
  ["help.cat.privacy.t", "help.cat.privacy.c"],
  ["help.cat.media.t", "help.cat.media.c"],
  ["help.cat.devices.t", "help.cat.devices.c"],
  ["help.cat.notifs.t", "help.cat.notifs.c"],
  ["help.cat.account.t", "help.cat.account.c"],
];

export function HelpPageContent() {
  const t = useT();
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="help.eyebrow" title="help.title" copy="help.copy" />
      <div className="shell support-search">
        <span>⌕</span>
        <span>{t("help.search")}</span>
      </div>
      <section className="content-section alt">
        <div className="shell content-grid">
          {categories.map(([title, copy], index) => (
            <article className="content-card" key={title} id={index === 7 ? "delete" : undefined}>
              <span className="number">{String(index + 1).padStart(2, "0")}</span>
              <h2>{t(title)}</h2>
              <p>{t(copy)}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section" id="contact">
        <div className="shell prose">
          <h2>{t("help.more.t")}</h2>
          <p>{t("help.more.c")}</p>
          <h2 id="status">{t("help.status.t")}</h2>
          <p>{t("help.status.c")}</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
