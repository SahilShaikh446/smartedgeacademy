import Link from "next/link"
import { Phone, ArrowRight, MessageSquare, Sparkles, MessageCircle } from "lucide-react"

import { siteConfig } from "@/config/site"
import { docsConfig } from "@/config/docs"
import { Separator } from "@/components/ui/separator"
import { LogoButton } from "@/components/logo-button"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header className="bg-background/95 sticky top-0 z-40 w-full border-b border-border/60 backdrop-blur-md shadow-xs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <MobileNav className="flex lg:hidden" />
            <LogoButton />
            <MainNav items={docsConfig.mainNav} className="hidden lg:flex" />
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#087BDF] dark:text-slate-300 dark:hover:text-cyan-400 transition-colors"
              title="Call SmartEdge Academy Admissions"
            >
              <div className="flex size-7 items-center justify-center rounded-full bg-sky-50 text-[#087BDF] dark:bg-sky-950 dark:text-cyan-400">
                <Phone className="size-3.5" />
              </div>
              <span>{siteConfig.contact.displayPhone}</span>
            </a>

            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/80 px-3 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 transition-colors dark:bg-emerald-950/60 dark:text-emerald-300"
            >
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <MessageCircle className="size-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <Separator orientation="vertical" className="hidden sm:block h-5" />

            <Link
              href="/career-counselling"
              className={cn(
                buttonVariants({ size: "sm" }),
                "bg-[#062B67] hover:bg-[#031B43] text-[#FFD928] font-black text-xs px-3 sm:px-4 py-2 rounded-full shadow-sm hover:shadow transition-all border border-[#FFD928]/40"
              )}
            >
              <Sparkles className="size-3.5 mr-1 text-[#FFD928]" />
              <span>Free Counselling</span>
            </Link>

            <Separator orientation="vertical" className="h-5" />

            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
