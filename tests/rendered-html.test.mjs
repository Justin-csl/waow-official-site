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
  assert.match(html, /<title>Waow — Every conversation deserves a little waow<\/title>/i);
  assert.match(html, /Every conversation deserves a little/);
  assert.match(html, /Private messaging, expressive media and clear calling/);
  assert.match(html, /waow-app-icon\.png/);
  assert.match(html, /new-land\.png/);
  assert.match(html, /screens\/chat-list-real\.png/);
  assert.match(html, /screens\/chat-real\.png/);
  assert.match(html, /screens\/translation-real\.png/);
  assert.match(html, /screens\/translation-overlay\.png/);
  assert.match(html, /screens\/login-real\.png/);
  assert.match(html, /Available on the App Store soon/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/);
});

test("server-renders every official public route", async () => {
  const expectations = [
    ["/features", /Everything you need to keep the conversation moving/],
    ["/privacy", /Privacy you can see, understand and control/],
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

test("keeps the official site isolated from the chat application", async () => {
  const [page, layout, packageJson, hosting] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../.openai/hosting.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Every conversation deserves a little/);
  assert.match(layout, /Waow — Every conversation deserves/);
  assert.doesNotMatch(packageJson, /react-native|react-loading-skeleton/);
  assert.deepEqual(JSON.parse(hosting), {
    project_id: "appgprj_6a62e18d1cb08191b5b331a9cbff858c",
    d1: null,
    r2: null,
  });
});
