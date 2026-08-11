"use client";

import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { useT } from "../i18n/lang";
import type { SiteKey } from "../i18n/strings";

const cards: [SiteKey, SiteKey, string?][] = [
  ["sec.auth.t", "sec.auth.c"],
  ["sec.devices.t", "sec.devices.c"],
  ["sec.keys.t", "sec.keys.c"],
  ["sec.disclosure.t", "sec.disclosure.c", "report"],
];

export function SecurityPageContent() {
  const t = useT();
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="security.eyebrow" title="security.title" copy="security.copy" />
      <section className="content-section alt">
        <div className="shell content-grid">
          {cards.map(([title, copy, id], index) => (
            <article className="content-card" key={title} id={id}>
              <span className="number">{String(index + 1).padStart(2, "0")}</span>
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
