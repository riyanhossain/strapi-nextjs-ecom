import { fetchStaticPages } from "@/lib/sitemap";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = fetchStaticPages();

  const buildSitemap = [...staticPages].map((page) => ({
    url: page,
    lastmod: new Date(),
    changefreq: "weekly",
    priority: 1,
  }));

  return buildSitemap;
}
