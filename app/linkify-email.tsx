import type { ReactNode } from "react";

const EMAIL_PATTERN = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

/** Turns bare email addresses in `text` into clickable `mailto:` links. */
export function linkifyEmails(text: string, keyPrefix: string | number = ""): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  for (const match of text.matchAll(EMAIL_PATTERN)) {
    const at = match.index ?? 0;
    if (at > cursor) nodes.push(text.slice(cursor, at));
    const email = match[0];
    nodes.push(
      <a href={`mailto:${email}`} key={`${keyPrefix}-${at}`}>
        {email}
      </a>,
    );
    cursor = at + email.length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}
