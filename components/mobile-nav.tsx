"use client"

import * as React from "react"
import Link, { type LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { Phone, Mail, MapPin, Sparkles, MessageCircle } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SmartEdgeLogo } from "@/components/smartedge-logo"

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false)

  const navItems = [
    { title: "Home", href: "/" },
    { title: "All Courses", href: "/courses" },
    { title: "AI & Automation Courses", href: "/courses#ai-courses" },
    { title: "Projects & Practical Training", href: "/practical-training" },
    { title: "100% Career & Job Assistance", href: "/career-assistance" },
    { title: "About SmartEdge Academy", href: "/about" },
    { title: "Free Career Counselling", href: "/career-counselling" },
    { title: "Career Resources & Blog", href: "/blog" },
    { title: "Campus Location & Contact", href: "/contact" },
  ]

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 !p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
            className
          )}
          aria-label="Toggle Navigation Menu"
        >
          <div className="relative flex h-8 w-4 items-center justify-center">
            <div className="relative size-4">
              <span
                className={cn(
                  "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                  open ? "top-[0.4rem] -rotate-45" : "top-1"
                )}
              />
              <span
                className={cn(
                  "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                  open ? "top-[0.4rem] rotate-45" : "top-2.5"
                )}
              />
            </div>
            <span className="sr-only">Toggle Menu</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="bg-background/95 no-scrollbar h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-y-auto rounded-none border-none p-0 shadow-none backdrop-blur-md duration-100"
        align="start"
        side="bottom"
        alignOffset={-16}
        sideOffset={14}
      >
        <div className="flex flex-col gap-6 overflow-auto px-6 py-6">
          <div className="border-b border-border/50 pb-4">
            <SmartEdgeLogo />
            <p className="text-xs text-muted-foreground mt-2 font-medium">
              DON&apos;T JUST GET A DEGREE. GET JOB-READY WITH AI.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#087BDF] dark:text-[#00D5F5]">
              Explore Academy
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  onOpenChange={setOpen}
                  className="text-sm font-semibold text-slate-800 hover:text-[#087BDF] dark:text-slate-200 dark:hover:text-[#00D5F5] transition-colors py-1.5"
                >
                  {item.title}
                </MobileLink>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <MobileLink
              href="/career-counselling"
              onOpenChange={setOpen}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#FFD928] py-3 text-center text-sm font-bold text-[#031B43] shadow-sm"
            >
              <Sparkles className="size-4" />
              Book Free Career Counselling
            </MobileLink>
          </div>

          {/* Quick Contact Details in Mobile Menu */}
          <div className="border-t border-border/60 pt-5 flex flex-col gap-3 text-xs text-muted-foreground">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Bhiwandi Campus Contact
            </div>
            <div className="flex items-center gap-2">
              <Phone className="size-3.5 text-[#087BDF]" />
              <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="font-bold text-slate-800 dark:text-slate-200">
                {siteConfig.contact.displayPhone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="size-3.5 text-emerald-600" />
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-600 dark:text-emerald-400"
              >
                Chat on WhatsApp (+91 9820624436)
              </a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="size-3.5 text-[#087BDF] shrink-0 mt-0.5" />
              <span className="text-[11px] leading-tight">
                1st Floor, Laxmi Ajit Complex, Near Shiv Mandir, Mubeen Master Rd, Opp. Curewell Pharmacy, Gauripada, Samad Nagar, Bhiwandi 421305
              </span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
