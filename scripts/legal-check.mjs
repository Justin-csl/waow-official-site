/**
 * Pre-launch gate for the legal pages.
 *
 * Fails if any published document still contains a TODO(...) marker, or if a
 * document linked from the app or the footer has no text yet. Deliberately not
 * part of `npm test` — it is a release check, not a build check.
 *
 *   npm run legal:check
 */
import { readFileSync } from "node:fs";

// Strip comments and the TODO_PATTERN declaration, or the scan matches the
// regex that defines the marker and the doc comment describing it.
const src = readFileSync("app/legal/legal-data.ts", "utf8")
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/^\s*\/\/.*$/gm, "")
  .replace(/export const TODO_PATTERN =.*$/m, "");

// Documents that other surfaces already point at, so an empty one is a live 404
// or a dead end for a user who is trying to exercise a right.
const REQUIRED = {
  privacy: "iOS app Help screen, footer, App Store listing",
  terms: "iOS app Help screen",
  "delete-account": "Privacy Policy — 'Deleting your account'",
};

const docs = [];
const blockRe = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*path:\s*"([^"]+)"([^}]*)\}/g;
for (const m of src.matchAll(blockRe)) {
  docs.push({ slug: m[1], title: m[2], path: m[3], published: /body:/.test(m[4]) });
}

const todos = [...src.matchAll(/TODO\(([^)]*)\)/g)].map((m) => m[1]);

let failed = false;

console.log(`${docs.length} legal documents, ${docs.filter((d) => d.published).length} published\n`);

const unpublished = docs.filter((d) => !d.published);
if (unpublished.length) {
  console.log("Not yet published:");
  for (const d of unpublished) {
    const why = REQUIRED[d.slug];
    if (why) {
      failed = true;
      console.log(`  BLOCKER  ${d.path.padEnd(32)} referenced by: ${why}`);
    } else {
      console.log(`           ${d.path}`);
    }
  }
  console.log("");
}

if (todos.length) {
  failed = true;
  console.log(`${todos.length} unresolved placeholders:`);
  for (const t of todos) console.log(`  NEEDS INPUT  ${t}`);
  console.log("");
}

if (failed) {
  console.log("NOT READY TO PUBLISH");
  process.exit(1);
}
console.log("All legal documents are complete.");
