import process from "process"
import type { Metadata } from "next"
import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { siteConfig } from "@/config/site"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const pluralize = (count: number, word: string) =>
  `${count} ${word}${count === 1 ? "" : "s"}`

export function humanize(name: string): string {
  return name
    .replace(/-/g, " ")
    .replace(/([A-Z])/g, " $1")
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(" ")
}

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str
  return `${str.slice(0, length - 3)}...`
}

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())

/**
 * Capitalizes first letters of words in string.
 * @param {string} str String to be modified
 * @param {boolean=false} lower Whether all other letters should be lowercased
 * @return {string}
 * @see https://stackoverflow.com/questions/2332811/capitalize-words-in-string/7592235#7592235
 * @usage
 *   capitalize('fix this string');     // -> 'Fix This String'
 *   capitalize('javaSCrIPT');          // -> 'JavaSCrIPT'
 *   capitalize('javaSCrIPT', true);    // -> 'Javascript'
 */
export const capitalize = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  )

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export const calculateReadingTime = (content: string): number => {
  const words = content?.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

export const normalizeTag = (tag: unknown): string[] => {
  if (!tag) return []
  return Array.isArray(tag)
    ? tag.filter((t): t is string => typeof t === "string")
    : [String(tag)]
}

const getBaseUrl = (): string => {
  const configuredUrl = process.env.NEXT_PUBLIC_APP_URL?.trim()
  if (!configuredUrl) {
    return siteConfig.url
  }

  let url = configuredUrl.replace(/\/$/, "")
  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`
  }

  try {
    new URL(url)
    return url
  } catch {
    return siteConfig.url
  }
}

export function absoluteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return new URL(normalizedPath, `${getBaseUrl()}/`).toString()
}

export function constructMetadata({
  title = "SmartEdge Academy | AI-Powered Career & Job Skills Academy in Bhiwandi",
  description = "DON'T JUST GET A DEGREE. GET JOB-READY WITH AI. SmartEdge Academy in Bhiwandi provides practical IT & AI courses in Java, Python, Data Science, Power BI, React, Cloud DevOps, and 100% Job Assistance.",
  image = absoluteUrl("/smartedge-admission-flex.jpg"),
  canonicalUrl,
  ...props
}: {
  title?: string
  description?: string
  image?: string
  canonicalUrl?: string
  [key: string]: Metadata[keyof Metadata]
}): Metadata {
  const pageUrl = canonicalUrl
    ? (canonicalUrl.startsWith("http") ? canonicalUrl : absoluteUrl(canonicalUrl))
    : siteConfig.url

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: siteConfig.name,
      locale: "en_IN",
      url: pageUrl,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.slogan}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@smartedgegroup",
    },
    alternates: {
      canonical: pageUrl,
    },
    icons: "/icon.svg",
    metadataBase: new URL(siteConfig.url),
    authors: [
      {
        name: siteConfig.founder.name,
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    ...props,
  }
}
