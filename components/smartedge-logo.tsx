import React from "react"
import Link from "next/link"
import { GraduationCap } from "lucide-react"

import { cn } from "@/lib/utils"

interface SmartEdgeLogoProps {
  className?: string
  iconOnly?: boolean
  linkToHome?: boolean
  light?: boolean
}

export function SmartEdgeLogo({
  className,
  iconOnly = false,
  linkToHome = true,
  light = false,
}: SmartEdgeLogoProps) {
  const content = (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      {/* SmartEdge Academy Graduation Cap Emblem */}
      <div className="relative flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#062B67] via-[#087BDF] to-[#00D5F5] p-2 text-white shadow-md shadow-[#062B67]/25 ring-1 ring-[#00D5F5]/40">
        <GraduationCap className="size-6 text-white drop-shadow-sm" />
        <span className="absolute -top-1 -right-1 flex size-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD928] opacity-75"></span>
          <span className="relative inline-flex rounded-full size-2.5 bg-[#FFD928]"></span>
        </span>
      </div>

      {!iconOnly && (
        <div className="flex flex-col text-left leading-tight">
          <div className="flex items-center gap-1.5 font-black tracking-tight text-base sm:text-lg">
            <span className={cn(light ? "text-white" : "text-[#062B67] dark:text-white")}>
              SmartEdge
            </span>
            <span className="text-[#087BDF] dark:text-[#00D5F5]">Academy</span>
          </div>
          <span
            className={cn(
              "text-[9px] sm:text-[10px] font-bold tracking-wider uppercase",
              light ? "text-sky-200/90" : "text-slate-500 dark:text-slate-400"
            )}
          >
            AI-Powered Career &amp; Job Skills Academy
          </span>
        </div>
      )}
    </div>
  )

  if (linkToHome) {
    return (
      <Link
        href="/"
        className="transition-opacity hover:opacity-90 inline-flex items-center focus:outline-hidden"
        title="SmartEdge Academy - AI-Powered Career & Job Skills Academy"
      >
        {content}
      </Link>
    )
  }

  return content
}
