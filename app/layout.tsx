import type { Viewport } from "next"
import { type Metadata } from "next"
import { Provider as JotaiProvider } from "jotai"

import { siteConfig } from "@/config/site"
import { fontVariables } from "@/lib/fonts"
import { absoluteUrl, cn, constructMetadata } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Analytics } from "@/components/analytics"
import { PHProvider } from "@/components/posthog-provider"
import { StructuredData } from "@/components/structured-data"
import { ThemeProvider } from "@/components/theme-provider"

import "@/styles/globals.css"

export const metadata: Metadata = constructMetadata({
  title: "SmartEdge Academy | AI-Powered Career & Job Skills Academy in Bhiwandi",
  description:
    "DON'T JUST GET A DEGREE. GET JOB-READY WITH AI. SmartEdge Academy in Bhiwandi provides practical, project-based IT & AI courses in Java, Python, Data Science, Power BI, React, Cloud DevOps, and 100% Job Assistance.",
  image: absoluteUrl("/smartedge-admission-flex.jpg"),
})

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b192c" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="layout-fixed scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <head>
        <StructuredData />
      </head>
      <body
        className={cn(
          "text-foreground group/body overscroll-none font-sans antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)] selection:bg-sky-500/20 selection:text-sky-900 dark:selection:text-sky-200",
          fontVariables
        )}
      >
        <JotaiProvider>
          <PHProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
              <TooltipProvider>
                {children}
                <Toaster position="top-center" richColors toastOptions={{}} />
                <Analytics />
              </TooltipProvider>
            </ThemeProvider>
          </PHProvider>
        </JotaiProvider>
      </body>
    </html>
  )
}
