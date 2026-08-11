"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useDocT, useT } from "../i18n/lang";
import { legalLo } from "./legal-lo";
import { legalDocs, TODO_PATTERN, type LegalBlock, type LegalDoc } from "./legal-data";

/** Renders TODO(...) markers as visible chips so unfinished text cannot pass as final. */
function Text({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  // Tokenise rather than split: TODO_PATTERN has a capture group, and String.split
  // would emit the captured inner text as an extra fragment.
  for (const match of text.matchAll(new RegExp(TODO_PATTERN.source, "g"))) {
    const at = match.index ?? 0;
    if (at > cursor) nodes.push(text.slice(cursor, at));
    nodes.push(
      <mark className="legal-todo" key={at} title="This value still has to be supplied">
        NEEDS INPUT: {match[1]}
      </mark>,
    );
    cursor = at + match[0].length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return <>{nodes}</>;
}

function Block({
  block,
  slug,
  index,
  d,
}: {
  block: LegalBlock;
  slug: string;
  index: number;
  d: (key: string, english: string) => string;
}) {
  const k = (suffix = "") => `legal.${slug}.${index}${suffix}`;
  switch (block.type) {
    case "h2":
      return <h2 id={block.text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>{d(k(), block.text)}</h2>;
    case "h3":
      return <h3>{d(k(), block.text)}</h3>;
    case "p":
      return (
        <p>
          <Text text={d(k(), block.text)} />
        </p>
      );
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={item}>
              <Text text={d(k(`.${i}`), item)} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={item}>
              <Text text={d(k(`.${i}`), item)} />
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>{d(k(".h0"), block.head[0])}</th>
                <th>{d(k(".h1"), block.head[1])}</th>
              </tr>
            </thead>
            <tbody>
              {block.rows.map(([a, b], i) => (
                <tr key={a}>
                  <td>{d(k(`.r${i}a`), a)}</td>
                  <td>
                    <Text text={d(k(`.r${i}b`), b)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function LegalShell({ doc }: { doc: LegalDoc }) {
  const t = useT();
  const d = useDocT(legalLo);
  const published = Boolean(doc.body?.length);
  return (
    <div className="legal-layout shell">
      <aside className="legal-nav" aria-label={t("legal.docs")}>
        {legalDocs.map((item) => {
          const live = Boolean(item.body?.length);
          const current = item.slug === doc.slug;
          if (!live) {
            return (
              <span className="legal-nav-item pending" key={item.slug} aria-disabled="true">
                <span className="legal-nav-title">{d(`legal.${item.slug}.title`, item.title)}</span>
                <span className="legal-pending-tag">{t("legal.notPublished")}</span>
              </span>
            );
          }
          return (
            <Link
              className={`legal-nav-item${current ? " current" : ""}`}
              href={item.path}
              key={item.slug}
              aria-current={current ? "page" : undefined}
            >
              <span className="legal-nav-title">{d(`legal.${item.slug}.title`, item.title)}</span>
            </Link>
          );
        })}
      </aside>

      <article className="legal-doc">
        <div className="legal-doc-head">
          <h1>{d(`legal.${doc.slug}.title`, doc.title)}</h1>
        </div>

        {published ? (
          <>
            {(doc.effective || doc.updated) && (
              <p className="legal-dates">
                {doc.effective && (
                  <>
                    {t("legal.effective")} <Text text={doc.effective} />
                  </>
                )}
                {doc.effective && doc.updated && " · "}
                {doc.updated && (
                  <>
                    {t("legal.updated")} <Text text={doc.updated} />
                  </>
                )}
              </p>
            )}
            <div className="legal-body">
              {doc.body!.map((block, i) => (
                <Block block={block} slug={doc.slug} index={i} d={d} key={i} />
              ))}
            </div>
          </>
        ) : (
          <p className="legal-empty">
            {t("legal.emptyA")} <a href="mailto:legal@waow.app">legal@waow.app</a> {t("legal.emptyB")}
          </p>
        )}
      </article>
    </div>
  );
}
