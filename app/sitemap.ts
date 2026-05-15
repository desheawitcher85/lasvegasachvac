import { MetadataRoute } from "next";

const baseUrl = "https://vegasachvac.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const corePages = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about/`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact/`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/get-a-quote/`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/reviews/`, priority: 0.6, changeFrequency: "weekly" as const },
  ];

  const servicePages = [
    "ac-repair",
    "ac-installation",
    "emergency-ac-repair",
    "commercial-hvac",
    "ductless-mini-split",
    "heat-pump-repair",
    "thermostat-installation",
    "furnace-repair",
  ].map((slug) => ({
    url: `${baseUrl}/${slug}/`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const locationPages = [
    "summerlin",
    "henderson",
    "north-las-vegas",
    "spring-valley",
    "enterprise",
    "paradise",
    "boulder-city",
    "anthem",
  ].map((slug) => ({
    url: `${baseUrl}/${slug}/`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const blogPages = [
    "ac-repair-cost-las-vegas",
    "when-to-replace-ac-las-vegas",
    "signs-ac-compressor-failing",
    "why-ac-blowing-warm-air",
    "ac-freezing-up-summer",
    "best-thermostat-vegas-heat",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}/`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...corePages, ...servicePages, ...locationPages, ...blogPages].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
