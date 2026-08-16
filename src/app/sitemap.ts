import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://powernet.co.id";
  const lastModified = new Date();

  // Active public routes
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/porto`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
