import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/healthz"],
    },
    sitemap: "https://waow.la/sitemap.xml",
    host: "https://waow.la",
  };
}
