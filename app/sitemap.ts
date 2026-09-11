import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/features",
  "/download",
  "/help",
  "/faq",
  "/security",
  "/delete-account",
  "/legal/privacy",
  "/legal/terms",
  "/legal/community-guidelines",
  "/legal/child-safety",
  "/legal/official-accounts",
  "/legal/ai-translation",
  "/legal/security",
  "/legal/law-enforcement",
  "/legal/website-privacy",
  "/lo",
  "/lo/about",
  "/lo/features",
  "/lo/download",
  "/lo/help",
  "/lo/faq",
  "/lo/security",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://waow.la${route || "/"}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/legal/") ? 0.4 : 0.7,
  }));
}
