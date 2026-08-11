/**
 * Dumps every translatable key in the legal documents with its English source,
 * using the same key scheme legal-shell.tsx reads.
 *
 *   node --experimental-strip-types scripts/legal-i18n.mjs
 *   node scripts/legal-i18n.mjs --dump     # key<TAB>english, one per line
 */
import { readFileSync } from "node:fs";

const { legalDocs } = await import("../app/legal/legal-data.ts");
const docs = legalDocs;

const rows = [];
for (const doc of docs) {
  rows.push([`legal.${doc.slug}.title`, doc.title]);
  (doc.body ?? []).forEach((block, i) => {
    const base = `legal.${doc.slug}.${i}`;
    if (block.type === "table") {
      rows.push([`${base}.h0`, block.head[0]], [`${base}.h1`, block.head[1]]);
      block.rows.forEach(([a, b], r) => {
        rows.push([`${base}.r${r}a`, a], [`${base}.r${r}b`, b]);
      });
    } else if (block.items) {
      block.items.forEach((item, n) => rows.push([`${base}.${n}`, item]));
    } else {
      rows.push([base, block.text]);
    }
  });
}

if (process.argv.includes("--dump")) {
  for (const [k, v] of rows) console.log(`${k}\t${v.replace(/\n/g, " ")}`);
  process.exit(0);
}

const lo = readFileSync("app/legal/legal-lo.ts", "utf8");
const have = new Set([...lo.matchAll(/"([^"]+)":\s*"[^"]/g)].map((m) => m[1]));
const missing = rows.filter(([k]) => !have.has(k));
const pct = (((rows.length - missing.length) / rows.length) * 100).toFixed(1);
console.log(`legal keys: ${rows.length}  translated: ${rows.length - missing.length} (${pct}%)`);
for (const [k] of missing.slice(0, 20)) console.log(`  missing  ${k}`);
if (missing.length > 20) console.log(`  … and ${missing.length - 20} more`);
