import type { Metadata } from "next";
import { HomeContent } from "./home-content";

export const metadata: Metadata = {
  title: { absolute: "Waow — Lao chat and messaging app" },
  description:
    "Waow is a Lao chat and messaging app for private messages, group conversations, voice and video calls, and English–Lao chat translation.",
  alternates: {
    canonical: "/",
    languages: { en: "/", lo: "/lo", "x-default": "/" },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://waow.la/#organization",
      name: "Dynamic Solution Sole Co., Ltd.",
      url: "https://waow.la/",
      logo: "https://waow.la/icon-512.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vientiane Capital",
        addressCountry: "LA",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://waow.la/#website",
      url: "https://waow.la/",
      name: "Waow",
      description:
        "The official website for Waow, a private messaging application from Laos.",
      publisher: { "@id": "https://waow.la/#organization" },
      inLanguage: ["en", "lo"],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://waow.la/#app",
      name: "Waow",
      url: "https://waow.la/",
      applicationCategory: "CommunicationApplication",
      operatingSystem: "iOS, iPadOS, Web",
      description:
        "A Lao messaging app with end-to-end encrypted chats, voice and video calls, group conversations, media sharing and user-requested English–Lao translation.",
      publisher: { "@id": "https://waow.la/#organization" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <HomeContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
