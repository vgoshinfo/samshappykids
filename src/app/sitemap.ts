import type { MetadataRoute } from "next";

const baseUrl = "https://www.samshappykids.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/songs", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/videos", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/parents", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/terms-of-use", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
