import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished Waow homepage and metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Waow — Keep love moving<\/title>/i);
  assert.match(html, /Keep love moving/);
  assert.match(html, /End-to-end encrypted messaging/);
  assert.match(html, /waow-app-icon\.png/);
  assert.match(html, /new-land\.png/);
  assert.match(html, /screens\/chat-list-real\.png/);
  assert.match(html, /screens\/chat-real\.png/);
  assert.match(html, /screens\/translation-real\.png/);
  assert.match(html, /21st42\.png/);
  assert.match(html, /traslation\.png/);
  assert.match(html, /screens\/login-real\.png/);
  assert.match(html, /https:\/\/web\.waow\.app\//);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/);
});

test("server-renders every official public route", async () => {
  const expectations = [
    ["/features", /Everything you need to keep the conversation moving/],
    ["/legal/privacy", /Waow is a communication service operated by Dynamic Solution Sole Co/],
    ["/legal/terms", /These Terms are an agreement between you and Dynamic Solution Sole Co/],
    ["/faq", /How can we help you/],
    ["/security", /Security is a practice, not a slogan/],
    ["/download", /Bring Waow with you/],
    ["/help", /How can we help/],
    ["/about", /Technology should make people feel closer/],
  ];

  for (const [pathname, content] of expectations) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), content, pathname);
  }
});

test("keeps the links the shipped app uses working", async () => {
  // The released iOS app's Help screen links to waow.app/privacy and
  // waow.app/terms, so neither may 404.
  for (const [from, to] of [
    ["/privacy", /\/legal\/privacy$/],
    ["/terms", /\/legal\/terms$/],
  ]) {
    const response = await render(from);
    assert.equal(response.status, 308, from);
    assert.match(response.headers.get("location") ?? "", to, from);
  }
});

test("renders every legal document", async () => {
  const docs = [
    ["/legal/community-guidelines", /Child sexual abuse or exploitation in any form/],
    ["/legal/child-safety", /Waow prohibits child sexual abuse and exploitation/],
    ["/legal/official-accounts", /An official account lets an organisation reach people on Waow/],
    ["/legal/ai-translation", /Translation and the AI assistant run only when you use them/],
    ["/legal/security", /tell us privately at security@waow\.app/],
    ["/legal/law-enforcement", /memorandum of cooperation with the National Internet Center/],
    ["/legal/licences", /Waow is built with open source software/],
    ["/legal/website-privacy", /This notice covers waow\.app itself/],
    ["/delete-account", /Deletion is permanent and cannot be undone/],
  ];

  for (const [pathname, content] of docs) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), content, pathname);
  }
});

test("moves the privacy feature content to /features rather than dropping it", async () => {
  const html = await (await render("/features")).text();
  for (const card of ["Chat lock", "Hidden chat folder", "Discreet previews", "Privacy controls"]) {
    assert.match(html, new RegExp(card), card);
  }
});

test("keeps the official site isolated from the chat application", async () => {
  const [strings, layout, packageJson, hosting] = await Promise.all([
    // The hero copy moved into the i18n string table when the site went bilingual.
    readFile(new URL("../app/i18n/strings.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../.openai/hosting.json", import.meta.url), "utf8"),
  ]);

  assert.match(strings, /Keep love/);
  assert.match(strings, /moving, one/);
  assert.match(layout, /Waow — Keep love moving/);
  assert.doesNotMatch(packageJson, /react-native|react-loading-skeleton/);
  assert.deepEqual(JSON.parse(hosting), {
    project_id: "appgprj_6a62e18d1cb08191b5b331a9cbff858c",
    d1: null,
    r2: null,
  });
});
