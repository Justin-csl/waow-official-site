"use client";

import { useCallback, useEffect, useMemo, useSyncExternalStore } from "react";
import { loStrings } from "./lo";
import { siteStrings, type SiteKey } from "./strings";

export type Lang = "en" | "lo";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "lo", label: "ລາວ" },
];

export const LANG_STORAGE_KEY = "waow-lang";

/**
 * The chosen language lives in localStorage so it survives navigation. It is
 * read through useSyncExternalStore rather than an effect: the server snapshot
 * is always "en", so the first paint matches the server and React swaps in the
 * stored choice after hydration without a mismatch.
 */
let listeners: (() => void)[] = [];

export const langStore = {
  subscribe(listener: () => void) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((item) => item !== listener);
    };
  },
  get(): Lang {
    return window.localStorage.getItem(LANG_STORAGE_KEY) === "lo" ? "lo" : "en";
  },
  serverGet(): Lang {
    return "en";
  },
  set(next: Lang) {
    window.localStorage.setItem(LANG_STORAGE_KEY, next);
    for (const listener of listeners) listener();
  },
};

export function useLang(): Lang {
  return useSyncExternalStore(langStore.subscribe, langStore.get, langStore.serverGet);
}

/**
 * Translator for site chrome and page copy. Any key whose Lao string is missing
 * or empty falls back to English, so a partial translation renders as mixed
 * content rather than blanks.
 */
export function useT() {
  const lang = useLang();
  return useCallback(
    (key: SiteKey) => {
      const english = siteStrings[key];
      if (lang === "en") return english;
      const value = loStrings[key];
      return value && value.trim().length > 0 ? value : english;
    },
    [lang],
  );
}

/** Translator for the keyed document overlays (FAQ articles, legal text). */
export function useDocT(overlay: Record<string, string>) {
  const lang = useLang();
  return useMemo(
    () => (key: string, english: string) => {
      if (lang === "en") return english;
      const value = overlay[key];
      return value && value.trim().length > 0 ? value : english;
    },
    [lang, overlay],
  );
}

export function LanguageToggle() {
  const lang = useLang();
  const t = useT();
  return (
    <div className="lang-toggle" role="group" aria-label={t("ui.changeLanguage")}>
      {LANGS.map((option) => (
        <button
          type="button"
          key={option.code}
          lang={option.code}
          className={option.code === lang ? "active" : undefined}
          aria-pressed={option.code === lang}
          onClick={() => langStore.set(option.code)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

/** Applies `lang` and the Lao font class to <html> whenever the choice changes. */
export function LangEffect() {
  const lang = useLang();
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle("lang-lo", lang === "lo");
  }, [lang]);
  return null;
}
