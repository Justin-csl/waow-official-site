"use client";

import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { useT } from "../i18n/lang";

const qrPattern = Array.from({ length: 25 }, (_, i) => i);
const lit = [1, 2, 5, 7, 8, 10, 12, 14, 16, 18, 20, 21, 22, 24];

export function DownloadPageContent() {
  const t = useT();
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="download.eyebrow" title="download.title" copy="download.copy" />
      <section className="content-section">
        <div className="download-card">
          <div>
            <span className="eyebrow eyebrow-light">{t("dl.platform")}</span>
            <h2>{t("dl.card.t")}</h2>
            <p>{t("dl.card.c")}</p>
            <Link className="button button-light" href="https://web.waow.app/" target="_blank" rel="noreferrer">
              {t("dl.card.cta")} <span>↗</span>
            </Link>
          </div>
          <div className="qr-placeholder" aria-label={t("dl.qr.label")}>
            {qrPattern.map((cell) => (
              <span key={cell} style={{ opacity: lit.includes(cell) ? 1 : 0.12 }} />
            ))}
          </div>
        </div>
        <div className="shell content-grid">
          <article className="content-card">
            <span className="number">IOS</span>
            <h2>{t("dl.avail.t")}</h2>
            <p>{t("dl.avail.c")}</p>
          </article>
          <article className="content-card">
            <span className="number">NEXT</span>
            <h2>{t("dl.other.t")}</h2>
            <p>{t("dl.other.c")}</p>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
