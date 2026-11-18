import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { cn } from "@/lib/utils"

export const fontVariables = cn(
  GeistSans.variable,
  GeistMono.variable,
  "[--font-inter:var(--font-sans)]"
)
