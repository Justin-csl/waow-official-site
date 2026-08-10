import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-shell";
import { FaqBrowser } from "./faq-browser";
import { faqCategories } from "./faq-data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Waow: getting started, chats and groups, calls, translation, media and storage, privacy and encryption, notifications, linked devices and your account.",
  alternates: { canonical: "/faq" },
};

// Structured data uses the English source; it is the canonical version of the page.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en",
  mainEntity: faqCategories.flatMap((category) =>
    category.sections.flatMap((section) =>
      section.articles.map((article) => ({
        "@type": "Question",
        name: article.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: article.body
            .map((block) => ("text" in block ? block.text : block.items.join(" ")))
            .join(" ")
            .replace(/\*\*/g, ""),
        },
      })),
    ),
  ),
};

export default function FaqPage() {
  return (
    <main>
      <SiteHeader />
      <FaqBrowser />
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
