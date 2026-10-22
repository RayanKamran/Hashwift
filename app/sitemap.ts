import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms", "/contact"].map((path) => ({
    url: `https://gethashwift.com${path}`,
    lastModified: "2026-10-22",
    changeFrequency: path ? "monthly" : "weekly",
    priority: path ? 0.5 : 1,
  }));
}
