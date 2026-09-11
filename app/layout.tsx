import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./i18n/lang";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://waow.la"),
  applicationName: "Waow",
  title: { default: "Waow — Lao chat and messaging app", template: "%s · Waow" },
  description:
    "Waow is a Lao chat and messaging app with private conversations, clear voice and video calls, expressive media and English–Lao message translation.",
  authors: [{ name: "Dynamic Solution Sole Co., Ltd." }],
  creator: "Dynamic Solution Sole Co., Ltd.",
  publisher: "Dynamic Solution Sole Co., Ltd.",
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Waow — Lao chat and messaging app",
    description:
      "Private messages, group chat, voice and video calls, expressive media and English–Lao translation—built in Laos.",
    type: "website",
    siteName: "Waow",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Waow — Lao chat and messaging app",
    description:
      "Private messages, group chat, voice and video calls, expressive media and English–Lao translation—built in Laos.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,500,1,0"
          rel="stylesheet"
        />
        {/* Lao script for the Help Centre's Lao translation; Geist has no Lao coverage. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${geistMono.variable}`}>
        <LanguageProvider lang="en">{children}</LanguageProvider>
      </body>
    </html>
  );
}
