import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://waow.chat"),
  title: { default: "Waow — Every conversation deserves a little waow", template: "%s · Waow" },
  description: "Private messaging, expressive media and clear calling—thoughtfully designed for iPhone and iPad.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Waow — Stay close, beautifully",
    description: "Private messaging, expressive media and clear calling for iPhone and iPad.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Waow private messaging for iPhone and iPad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waow — Stay close, beautifully",
    description: "Private messaging, expressive media and clear calling for iPhone and iPad.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
