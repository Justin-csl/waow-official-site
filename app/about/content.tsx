"use client";

import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { useT } from "../i18n/lang";

export function AboutPageContent() {
  const t = useT();
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="about.eyebrow" title="about.title" copy="about.copy" />
      <section className="content-section">
        <div className="shell prose">
          <h2>{t("about.direction.t")}</h2>
          <p>{t("about.direction.c")}</p>
          <h2>{t("about.honest.t")}</h2>
          <p>{t("about.honest.c")}</p>
          <h2 id="terms">{t("about.legal.t")}</h2>
          <p>
            {t("about.legal.a")} <Link href="/legal/privacy">{t("footer.privacyPolicy")}</Link>{" "}
            {t("about.legal.b")} <Link href="/legal/terms">{t("footer.terms")}</Link>{" "}
            {t("about.legal.c")}
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
