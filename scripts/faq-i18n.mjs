/**
 * Regenerates app/faq/faq-lo.ts from the English source in app/faq/faq-data.ts
 * and the uiStrings map in app/faq/faq-i18n.ts.
 *
 * Existing Lao translations are preserved: a key that already has a non-empty
 * value keeps it. Keys whose English text has changed since they were
 * translated are flagged with a STALE comment so a translator can revisit them.
 * Keys that no longer exist in English are dropped.
 *
 *   node scripts/faq-i18n.mjs           # rewrite faq-lo.ts
 *   node scripts/faq-i18n.mjs --check   # report coverage, write nothing
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const DATA = "app/faq/faq-data.ts";
const UI = "app/faq/faq-i18n.ts";
const OUT = "app/faq/faq-lo.ts";

const checkOnly = process.argv.includes("--check");

function readEnglish() {
  const src = readFileSync(DATA, "utf8");
  const start = src.indexOf("export const faqCategories");
  const end = src.indexOf("export const popularTopics");
  if (start < 0 || end < 0) throw new Error(`Could not locate faqCategories in ${DATA}`);
  const body = src
    .slice(start, end)
    .replace(/export const faqCategories[^=]*=/, "")
    .trim()
    .replace(/;\s*$/, "");
  const faqCategories = eval(`(${body})`);

  const uiSrc = readFileSync(UI, "utf8");
  const marker = "export const uiStrings = {";
  const uiBody = uiSrc.slice(uiSrc.indexOf(marker) + marker.length);
  const uiStrings = eval(`({${uiBody.slice(0, uiBody.indexOf("} as const;"))}})`);

  const rows = [];
  const push = (key, english, group) => rows.push({ key, english, group });

  for (const [key, value] of Object.entries(uiStrings)) push(key, value, "Interface");

  for (const c of faqCategories) {
    push(`cat.${c.id}.title`, c.title, c.title);
    push(`cat.${c.id}.blurb`, c.blurb, c.title);
    for (const s of c.sections) {
      push(`sec.${c.id}.${s.id}.title`, s.title, `${c.title} › ${s.title}`);
      for (const a of s.articles) {
        const group = `${c.title} › ${s.title} › ${a.title}`;
        push(`art.${c.id}.${s.id}.${a.id}.title`, a.title, group);
        a.body.forEach((b, bi) => {
          if ("text" in b) push(`body.${c.id}.${s.id}.${a.id}.${bi}`, b.text, group);
          else b.items.forEach((it, ii) => push(`body.${c.id}.${s.id}.${a.id}.${bi}.${ii}`, it, group));
        });
      }
    }
  }
  return rows;
}

/** Existing translations, plus the English each was translated against. */
function readExisting() {
  if (!existsSync(OUT)) return { values: {}, sources: {} };
  const src = readFileSync(OUT, "utf8");
  const values = {};
  const sources = {};
  let lastEnglish = null;
  for (const line of src.split("\n")) {
    const en = line.match(/^\s*\/\/ en: (.*)$/);
    if (en) {
      lastEnglish = en[1];
      continue;
    }
    const kv = line.match(/^\s*"([^"]+)":\s*"((?:[^"\\]|\\.)*)",\s*$/);
    if (kv) {
      values[kv[1]] = kv[2].replace(/\\"/g, '"').replace(/\\\\/g, "\\");
      if (lastEnglish !== null) sources[kv[1]] = lastEnglish;
      lastEnglish = null;
    }
  }
  return { values, sources };
}

const rows = readEnglish();
const { values, sources } = readExisting();

const translated = rows.filter((r) => (values[r.key] ?? "").trim().length > 0);
const stale = translated.filter(
  (r) => sources[r.key] !== undefined && sources[r.key] !== r.english.replace(/\n/g, " "),
);
const dropped = Object.keys(values).filter(
  (key) => values[key].trim().length > 0 && !rows.some((r) => r.key === key),
);

const pct = ((translated.length / rows.length) * 100).toFixed(1);
console.log(`keys: ${rows.length}  translated: ${translated.length} (${pct}%)  stale: ${stale.length}`);
if (stale.length) for (const r of stale) console.log(`  STALE  ${r.key}`);
if (dropped.length) for (const key of dropped) console.log(`  DROPPED ${key} (no longer in English source)`);

if (checkOnly) process.exit(0);

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const lines = [
  "/**",
  " * Lao (ລາວ) translations for the Help Centre.",
  " *",
  " * English lives in faq-data.ts and faq-i18n.ts and is the source of truth.",
  " * Fill in the Lao string for each key below. Any key left as an empty string",
  " * falls back to English at render time, so this file can be translated in",
  " * stages without ever showing a blank page.",
  " *",
  " * Keep **double asterisks** exactly where they appear in the English — they",
  " * mark the UI labels a reader has to find on screen and are rendered bold.",
  " * Leave arrows (→) and separators (›) as they are.",
  " *",
  ` * ${rows.length} keys, ${translated.length} translated.`,
  " * Regenerate after editing faq-data.ts with: npm run faq:i18n",
  " */",
  "export const loStrings: Record<string, string> = {",
];

let group = null;
for (const r of rows) {
  if (r.group !== group) {
    group = r.group;
    lines.push("", `  // ── ${group} ──`);
  }
  const flat = r.english.replace(/\n/g, " ");
  const value = values[r.key] ?? "";
  if (value.trim() && sources[r.key] !== undefined && sources[r.key] !== flat) {
    lines.push(`  // STALE: the English below changed after this was translated — please review.`);
  }
  lines.push(`  // en: ${flat}`);
  lines.push(`  "${r.key}": "${esc(value)}",`);
}
lines.push("};", "");

writeFileSync(OUT, lines.join("\n"));
console.log(`wrote ${OUT}`);
