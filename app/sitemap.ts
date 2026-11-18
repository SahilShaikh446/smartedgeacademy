import type { MetadataRoute } from "next"

import { siteConfig } from "@/config/site"
import { COURSES } from "@/config/courses"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = siteConfig.url
  const currentDate = new Date().toISOString().split("T")[0]

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: domain,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${domain}/courses`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${domain}/career-counselling`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${domain}/career-assistance`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${domain}/practical-training`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${domain}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${domain}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${domain}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${domain}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${domain}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ]

  // Dynamic Course Pages
  const coursePages: MetadataRoute.Sitemap = COURSES.map((course) => ({
    url: `${domain}/courses/${course.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  return [...staticPages, ...coursePages]
}
