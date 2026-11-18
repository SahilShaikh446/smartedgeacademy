import { SiteBanner } from "@/components/site-banner"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteBanner />
      <SiteHeader />
      <main className="flex-1 pb-14 md:pb-0">{children}</main>
      <SiteFooter />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  )
}
