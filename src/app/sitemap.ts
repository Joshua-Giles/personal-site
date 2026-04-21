import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllPosts } from "@/lib/mdx";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/projects",
    "/about",
    "/blog",
    "/contact"
  ].map((p) => ({ url: `${base}${p}`, lastModified: now, changeFrequency: "monthly" }));

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly"
  }));

  // Reference projects list so the file also rebuilds when project data changes.
  void projects.length;

  return [...staticRoutes, ...postRoutes];
}
