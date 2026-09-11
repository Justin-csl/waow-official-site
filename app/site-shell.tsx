"use client";

import Link from "next/link";
import { useState } from "react";
import { LangEffect, LanguageToggle, useLocalizedPath, useT } from "./i18n/lang";
import type { SiteKey } from "./i18n/strings";

export function Brand() {
  const homeHref = useLocalizedPath("/");
  return (
    <Link className="brand" href={homeHref} aria-label="Waow home">
      <img className="brand-mark" src="/waow-app-icon.png" alt="" />
      <span>waow</span>
    </Link>
  );
}

export function SiteHeader() {
  const t = useT();
  const featuresHref = useLocalizedPath("/features");
  const securityHref = useLocalizedPath("/security");
  const faqHref = useLocalizedPath("/faq");
  const helpHref = useLocalizedPath("/help");
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={`site-header${menuOpen ? " menu-open" : ""}`}>
      <LangEffect />
      <div className="shell header-inner">
        <Brand />
        <nav aria-label="Main navigation" id="primary-nav">
          <Link href={featuresHref} onClick={closeMenu}>{t("nav.features")}</Link>
          <Link href="/privacy" onClick={closeMenu}>{t("nav.privacy")}</Link>
          <Link href={securityHref} onClick={closeMenu}>{t("nav.security")}</Link>
          <Link href={faqHref} onClick={closeMenu}>{t("nav.faq")}</Link>
          <Link href={helpHref} onClick={closeMenu}>{t("nav.help")}</Link>
          <div className="nav-mobile-extra">
            <LanguageToggle />
          </div>
        </nav>
        <div className="header-actions">
          <LanguageToggle />
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const t = useT();
  const featuresHref = useLocalizedPath("/features");
  const securityHref = useLocalizedPath("/security");
  const faqHref = useLocalizedPath("/faq");
  const helpHref = useLocalizedPath("/help");
  const aboutHref = useLocalizedPath("/about");
  return (
    <footer>
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>{t("brand.tagline")}</p>
        </div>
        <div>
          <h3>{t("footer.product")}</h3>
          <Link href={featuresHref}>{t("nav.features")}</Link>
          <Link href="/privacy">{t("nav.privacy")}</Link>
          <Link href={securityHref}>{t("nav.security")}</Link>
          <Link href="https://web.waow.app/" target="_blank" rel="noreferrer">
            {t("nav.download")}
          </Link>
        </div>
        <div>
          <h3>{t("footer.support")}</h3>
          <Link href={faqHref}>{t("nav.faq")}</Link>
          <Link href={helpHref}>{t("footer.helpCentre")}</Link>
          <Link href={`${faqHref}#contact`}>{t("footer.contact")}</Link>
          <Link href={`${helpHref}#status`}>{t("footer.status")}</Link>
          <Link href="/delete-account">{t("footer.deleteAccount")}</Link>
        </div>
        <div>
          <h3>{t("footer.company")}</h3>
          <Link href={aboutHref}>{t("footer.about")}</Link>
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
