"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  faqCategories,
  popularArticles,
  popularTopics,
  type FaqArticle,
  type FaqBlock,
  type FaqCategory,
  type FaqSection,
} from "./faq-data";
import { useLang } from "../i18n/lang";
import { artKey, blockKey, catKey, makeTranslator, secKey, uiStrings, type UiKey } from "./faq-i18n";

type Located = { category: FaqCategory; section: FaqSection; article: FaqArticle };

const allArticles: Located[] = faqCategories.flatMap((category) =>
  category.sections.flatMap((section) => section.articles.map((article) => ({ category, section, article }))),
);

const keyOf = (found: Located) => `${found.category.id}/${found.section.id}/${found.article.id}`;

const locate = (key: string | null) => (key ? allArticles.find((item) => keyOf(item) === key) ?? null : null);

const popular = popularArticles
  .map(({ categoryId, sectionId, articleId }) =>
    allArticles.find(
      (item) =>
        item.category.id === categoryId && item.section.id === sectionId && item.article.id === articleId,
    ),
  )
  .filter((item): item is Located => Boolean(item));

/** Renders **bold** runs; the data uses it to mark UI labels the reader has to find on screen. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <b key={index}>{part.slice(2, -2)}</b>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

function Block({
  block,
  path,
  t,
}: {
  block: FaqBlock;
  path: [string, string, string, number];
  t: (key: string, english: string) => string;
}) {
  const [categoryId, sectionId, articleId, index] = path;

  switch (block.type) {
    case "h":
      return <h2>{t(blockKey(categoryId, sectionId, articleId, index), block.text)}</h2>;
    case "p":
      return (
        <p>
          <RichText text={t(blockKey(categoryId, sectionId, articleId, index), block.text)} />
        </p>
      );
    case "note":
      return (
        <p className="faq-note">
          <RichText text={t(blockKey(categoryId, sectionId, articleId, index), block.text)} />
        </p>
      );
    case "steps":
    case "bullets": {
      const List = block.type === "steps" ? "ol" : "ul";
      return (
        <List>
          {block.items.map((item, itemIndex) => (
            <li key={item}>
              <RichText text={t(blockKey(categoryId, sectionId, articleId, index, itemIndex), item)} />
            </li>
          ))}
        </List>
      );
    }
  }
}

export function FaqBrowser() {
  const [selected, setSelected] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const lang = useLang();

  const t = useMemo(() => makeTranslator(lang), [lang]);
  const ui = useCallback((key: UiKey) => t(key, uiStrings[key]), [t]);

  // Deep links: /faq#chats/translation/translate-setup opens that article directly.
  useEffect(() => {
    const apply = () => {
      const key = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      const found = locate(key);
      if (!found) return;
      setSelected(key);
      setOpenCategory(found.category.id);
      setOpenSection(found.section.id);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const open = (found: Located) => {
    const key = keyOf(found);
    setSelected(key);
    setOpenCategory(found.category.id);
    setOpenSection(found.section.id);
    setQuery("");
    window.history.replaceState(null, "", `#${key}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = () => {
    setSelected(null);
    setQuery("");
    window.history.replaceState(null, "", window.location.pathname);
  };

  const trimmed = query.trim().toLowerCase();
  // Searches the reader's language and the English source, so a Lao reader can
  // still find an article whose translation hasn't landed yet.
  const results = useMemo(() => {
    if (trimmed.length < 2) return null;
    const terms = trimmed.split(/\s+/);
    return allArticles.filter(({ article, category, section }) => {
      const parts: string[] = [article.title, category.title, section.title];
      parts.push(t(artKey(category.id, section.id, article.id), article.title));
      parts.push(t(catKey(category.id, "title"), category.title));
      parts.push(t(secKey(category.id, section.id), section.title));
      article.body.forEach((block, index) => {
        if ("text" in block) {
          parts.push(block.text, t(blockKey(category.id, section.id, article.id, index), block.text));
        } else {
          block.items.forEach((item, itemIndex) => {
            parts.push(item, t(blockKey(category.id, section.id, article.id, index, itemIndex), item));
          });
        }
      });
      const haystack = parts.join(" ").toLowerCase();
      return terms.every((term) => haystack.includes(term));
    });
  }, [trimmed, t]);

  const current = locate(selected);

  return (
    <>
      <div className="faq-layout shell">
        <aside className="faq-sidebar" aria-label={ui("ui.topicsLabel")}>
          {faqCategories.map((category) => {
            const expanded = openCategory === category.id;
            return (
              <div className="faq-cat" key={category.id}>
                <button
                  type="button"
                  className={`faq-cat-button${expanded ? " expanded" : ""}`}
                  aria-expanded={expanded}
                  onClick={() => setOpenCategory(expanded ? null : category.id)}
                >
                  <span className="faq-cat-icon material-symbols-rounded" aria-hidden="true">
                    {category.icon}
                  </span>
                  <span className="faq-cat-title">{t(catKey(category.id, "title"), category.title)}</span>
                  <span className="faq-chevron material-symbols-rounded" aria-hidden="true">
                    expand_more
                  </span>
                </button>

                {expanded && (
                  <div className="faq-sections">
                    {category.sections.map((section) => {
                      const sectionOpen = openSection === section.id;
                      return (
                        <div key={section.id}>
                          <button
                            type="button"
                            className={`faq-sec-button${sectionOpen ? " expanded" : ""}`}
                            aria-expanded={sectionOpen}
                            onClick={() => setOpenSection(sectionOpen ? null : section.id)}
                          >
                            <span className="faq-sec-icon material-symbols-rounded" aria-hidden="true">
                              {section.icon}
                            </span>
                            <span className="faq-sec-title">
                              {t(secKey(category.id, section.id), section.title)}
                            </span>
                            <span className="faq-chevron material-symbols-rounded" aria-hidden="true">
                              expand_more
                            </span>
                          </button>

                          {sectionOpen && (
                            <ul className="faq-links">
                              {section.articles.map((article) => {
                                const key = `${category.id}/${section.id}/${article.id}`;
                                return (
                                  <li key={article.id}>
                                    <button
                                      type="button"
                                      className={`faq-link${selected === key ? " current" : ""}`}
                                      aria-current={selected === key ? "page" : undefined}
                                      onClick={() => open({ category, section, article })}
                                    >
                                      {t(artKey(category.id, section.id, article.id), article.title)}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </aside>

        <div className="faq-main">
          <div className="faq-search">
            <span className="material-symbols-rounded" aria-hidden="true">
              search
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={ui("ui.searchPlaceholder")}
              aria-label={ui("ui.searchLabel")}
            />
            {query && (
              <button
                type="button"
                className="faq-search-clear"
                onClick={() => setQuery("")}
                aria-label={ui("ui.clearSearch")}
              >
                <span className="material-symbols-rounded" aria-hidden="true">
                  close
                </span>
              </button>
            )}
          </div>

          {results ? (
            <section className="faq-results">
              <h1>
                {results.length === 0
                  ? ui("ui.noResults")
                  : `${results.length} ${
                      results.length === 1 ? ui("ui.resultForOne") : ui("ui.resultsFor")
                    } “${query.trim()}”`}
              </h1>
              {results.length === 0 ? (
                <p className="faq-empty">
                  {ui("ui.emptyHint")} <a href="mailto:support@waow.app">support@waow.app</a>.
                </p>
              ) : (
                <ul className="faq-result-list">
                  {results.map((found) => (
                    <li key={keyOf(found)}>
                      <button type="button" onClick={() => open(found)}>
                        <span className="faq-result-crumb">
                          {t(catKey(found.category.id, "title"), found.category.title)} ›{" "}
                          {t(secKey(found.category.id, found.section.id), found.section.title)}
                        </span>
                        <span className="faq-result-title">
                          {t(
                            artKey(found.category.id, found.section.id, found.article.id),
                            found.article.title,
                          )}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ) : current ? (
            <article className="faq-article-page">
              <nav className="faq-crumbs" aria-label="Breadcrumb">
                <button type="button" onClick={goHome}>
                  {ui("ui.helpCentre")}
                </button>
                <span aria-hidden="true">›</span>
                <span>{t(catKey(current.category.id, "title"), current.category.title)}</span>
                <span aria-hidden="true">›</span>
                <span>{t(secKey(current.category.id, current.section.id), current.section.title)}</span>
              </nav>
              <h1>
                {t(
                  artKey(current.category.id, current.section.id, current.article.id),
                  current.article.title,
                )}
              </h1>
              {current.article.body.map((block, index) => (
                <Block
                  block={block}
                  key={index}
                  t={t}
                  path={[current.category.id, current.section.id, current.article.id, index]}
                />
              ))}

              <div className="faq-article-foot">
                <h2>{ui("ui.relatedArticles")}</h2>
                <ul className="faq-related">
                  {current.section.articles
                    .filter((article) => article.id !== current.article.id)
                    .map((article) => (
                      <li key={article.id}>
                        <button
                          type="button"
                          onClick={() => open({ category: current.category, section: current.section, article })}
                        >
                          {t(artKey(current.category.id, current.section.id, article.id), article.title)}
                        </button>
                      </li>
                    ))}
                </ul>
                <p className="faq-help-more">
                  {ui("ui.didntFind")} <a href="mailto:support@waow.app">support@waow.app</a>.
                </p>
              </div>
            </article>
          ) : (
            <>
              <h1>{ui("ui.title")}</h1>

              <section className="faq-block">
                <h2>{ui("ui.popularTopics")}</h2>
                <div className="faq-topic-grid">
                  {popularTopics.map((id) => {
                    const category = faqCategories.find((item) => item.id === id)!;
                    return (
                      <button
                        type="button"
                        className="faq-topic-card"
                        key={category.id}
                        onClick={() =>
                          open({
                            category,
                            section: category.sections[0],
                            article: category.sections[0].articles[0],
                          })
                        }
                      >
                        <span className="faq-topic-icon material-symbols-rounded" aria-hidden="true">
                          {category.icon}
                        </span>
                        <h3>{t(catKey(category.id, "title"), category.title)}</h3>
                        <p>{t(catKey(category.id, "blurb"), category.blurb)}</p>
                      </button>
                    );
                  })}
                </div>
              </section>

              <section className="faq-block">
                <h2>{ui("ui.popularArticles")}</h2>
                <ul className="faq-popular-list">
                  {popular.map((found) => (
                    <li key={keyOf(found)}>
                      <button type="button" onClick={() => open(found)}>
                        <span>
                          {t(
                            artKey(found.category.id, found.section.id, found.article.id),
                            found.article.title,
                          )}
                        </span>
                        <span className="material-symbols-rounded" aria-hidden="true">
                          chevron_right
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}
        </div>
      </div>

      <section className="content-section alt" id="contact">
        <div className="shell faq-contact">
          <div>
            <h2>{ui("ui.stillNeedHelp")}</h2>
            <p>{ui("ui.contactCopy")}</p>
          </div>
          <div className="faq-contact-links">
            <a className="button button-primary" href="mailto:support@waow.app">
              {ui("ui.contactSupport")}
            </a>
            <a className="text-link" href="/privacy">
              {ui("ui.privacyPolicy")} <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="/security#report">
              {ui("ui.reportVulnerability")} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
