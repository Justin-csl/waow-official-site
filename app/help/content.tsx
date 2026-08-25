"use client";

import { useState, type FormEvent } from "react";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";
import { useT } from "../i18n/lang";
import type { SiteKey } from "../i18n/strings";
import { linkifyEmails } from "../linkify-email";

const HELP_EMAIL = "help@waow.app";

function HelpContactForm() {
  const t = useT();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Help request from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${description}`;
    window.location.href = `mailto:${HELP_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="help-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="help-name">{t("help.form.name")}</label>
        <input
          id="help-name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={t("help.form.namePlaceholder")}
        />
      </div>
      <div className="form-field">
        <label htmlFor="help-email">{t("help.form.email")}</label>
        <input
          id="help-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t("help.form.emailPlaceholder")}
        />
      </div>
      <div className="form-field">
        <label htmlFor="help-description">{t("help.form.description")}</label>
        <textarea
          id="help-description"
          required
          rows={5}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder={t("help.form.descriptionPlaceholder")}
        />
      </div>
      <button type="submit" className="button button-primary">
        {t("help.form.submit")}
      </button>
      <p className="help-form-hint">{linkifyEmails(t("help.form.hint"))}</p>
    </form>
  );
}

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
          <HelpContactForm />
          <h2 id="status">{t("help.status.t")}</h2>
          <p>{t("help.status.c")}</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
