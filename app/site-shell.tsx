"use client";

import Link from "next/link";
import { LangEffect, LanguageToggle, useT } from "./i18n/lang";
import type { SiteKey } from "./i18n/strings";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Waow home">
      <img className="brand-mark" src="/waow-app-icon.png" alt="" />
      <span>waow</span>
    </Link>
  );
}

export function SiteHeader() {
  const t = useT();
  return (
    <header className="site-header">
      <LangEffect />
      <div className="shell header-inner">
        <Brand />
        <nav aria-label="Main navigation">
          <Link href="/features">{t("nav.features")}</Link>
          <Link href="/privacy">{t("nav.privacy")}</Link>
          <Link href="/security">{t("nav.security")}</Link>
          <Link href="/faq">{t("nav.faq")}</Link>
          <Link href="/help">{t("nav.help")}</Link>
        </nav>
        <div className="header-actions">
          <LanguageToggle />
          <Link
            className="button button-small button-primary"
            href="https://web.waow.app/"
            target="_blank"
            rel="noreferrer"
          >
            {t("nav.download")}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const t = useT();
  return (
    <footer>
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>{t("brand.tagline")}</p>
        </div>
        <div>
          <h3>{t("footer.product")}</h3>
          <Link href="/features">{t("nav.features")}</Link>
          <Link href="/privacy">{t("nav.privacy")}</Link>
          <Link href="/security">{t("nav.security")}</Link>
          <Link href="https://web.waow.app/" target="_blank" rel="noreferrer">
            {t("nav.download")}
          </Link>
        </div>
        <div>
          <h3>{t("footer.support")}</h3>
          <Link href="/faq">{t("nav.faq")}</Link>
          <Link href="/help">{t("footer.helpCentre")}</Link>
          <Link href="/faq#contact">{t("footer.contact")}</Link>
          <Link href="/help#status">{t("footer.status")}</Link>
          <Link href="/delete-account">{t("footer.deleteAccount")}</Link>
        </div>
        <div>
          <h3>{t("footer.company")}</h3>
          <Link href="/about">{t("footer.about")}</Link>
          <Link href="/legal/privacy">{t("footer.privacyPolicy")}</Link>
          <Link href="/legal/terms">{t("footer.terms")}</Link>
          <Link href="/legal/security">{t("footer.reportVuln")}</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>{t("footer.rights")}</span>
        <span>{t("footer.madeIn")}</span>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: SiteKey;
  title: SiteKey;
  copy: SiteKey;
}) {
  const t = useT();
  return (
    <section className="page-hero shell">
      <span className="eyebrow">{t(eyebrow)}</span>
      <h1>{t(title)}</h1>
      <p>{t(copy)}</p>
    </section>
  );
}
