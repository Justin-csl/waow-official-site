import { faqCategories } from "./faq-data";
import { loStrings } from "./faq-lo";

export type FaqLang = "en" | "lo";

export const FAQ_LANGS: { code: FaqLang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "lo", label: "ລາວ", short: "ລາວ" },
];

export const FAQ_LANG_STORAGE_KEY = "waow-faq-lang";

/**
 * English is the source of truth: every string lives in faq-data.ts and the UI
 * strings below. faq-lo.ts is an overlay keyed by the same paths — any key that
 * is still an empty string falls back to English, so a part-finished Lao
 * translation renders as mixed content rather than blanks.
 */
export const uiStrings = {
  "ui.helpCentre": "Help Centre",
  "ui.breadcrumb": "Frequently asked questions",
  "ui.title": "How can we help you?",
  "ui.searchPlaceholder": "Search help articles…",
  "ui.searchLabel": "Search Waow help articles",
  "ui.clearSearch": "Clear search",
  "ui.topicsLabel": "Help topics",
  "ui.popularTopics": "Popular topics",
  "ui.popularArticles": "Popular articles",
  "ui.relatedArticles": "Related articles",
  "ui.noResults": "No results",
  "ui.resultsFor": "results for",
  "ui.resultForOne": "result for",
  "ui.emptyHint":
    "Try a shorter phrase such as “backup”, “ticks” or “Face ID”. If you still can’t find an answer, write to",
  "ui.didntFind": "Didn’t find what you needed? Email",
  "ui.stillNeedHelp": "Still need help?",
  "ui.contactCopy":
    "If the answer you need isn’t here, write to us at support@waow.app, or open Settings → Help → Report a problem in the app so your report arrives with the diagnostic details we need. Support requests never include your messages, your media or your encryption keys.",
  "ui.contactSupport": "Contact support",
  "ui.privacyPolicy": "Privacy Policy",
  "ui.reportVulnerability": "Report a vulnerability",
  "ui.changeLanguage": "Change language",
} as const;

export type UiKey = keyof typeof uiStrings;

export const catKey = (categoryId: string, field: "title" | "blurb") =>
  `cat.${categoryId}.${field}`;

export const secKey = (categoryId: string, sectionId: string) =>
  `sec.${categoryId}.${sectionId}.title`;

export const artKey = (categoryId: string, sectionId: string, articleId: string) =>
  `art.${categoryId}.${sectionId}.${articleId}.title`;

export const blockKey = (
  categoryId: string,
  sectionId: string,
  articleId: string,
  blockIndex: number,
  itemIndex?: number,
) =>
  itemIndex === undefined
    ? `body.${categoryId}.${sectionId}.${articleId}.${blockIndex}`
    : `body.${categoryId}.${sectionId}.${articleId}.${blockIndex}.${itemIndex}`;

/** Returns a translator that falls back to the supplied English string. */
export function makeTranslator(lang: FaqLang) {
  return (key: string, english: string) => {
    if (lang === "en") return english;
    const value = loStrings[key];
    return value && value.trim().length > 0 ? value : english;
  };
}

/** Every translatable key with its English source, for the coverage report below. */
export function collectKeys(): { key: string; english: string }[] {
  const out: { key: string; english: string }[] = [];
  for (const [key, english] of Object.entries(uiStrings)) out.push({ key, english });

  for (const category of faqCategories) {
    out.push({ key: catKey(category.id, "title"), english: category.title });
    out.push({ key: catKey(category.id, "blurb"), english: category.blurb });
    for (const section of category.sections) {
      out.push({ key: secKey(category.id, section.id), english: section.title });
      for (const article of section.articles) {
        out.push({ key: artKey(category.id, section.id, article.id), english: article.title });
        article.body.forEach((block, blockIndex) => {
          if ("text" in block) {
            out.push({
              key: blockKey(category.id, section.id, article.id, blockIndex),
              english: block.text,
            });
          } else {
            block.items.forEach((item, itemIndex) => {
              out.push({
                key: blockKey(category.id, section.id, article.id, blockIndex, itemIndex),
                english: item,
              });
            });
          }
        });
      }
    }
  }
  return out;
}
