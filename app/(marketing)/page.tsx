import type { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { constructMetadata } from "@/lib/utils"
import { SmartEdgeHero } from "@/components/sections/smartedge-hero"
import { SmartEdgeTrustPillars } from "@/components/sections/smartedge-trust-pillars"
import { SmartEdgePopularCourses } from "@/components/sections/smartedge-popular-courses"
import { SmartEdgeWhyUs } from "@/components/sections/smartedge-why-us"
import { SmartEdgeLearnByBuilding } from "@/components/sections/smartedge-learn-by-building"
import { SmartEdgeAIEcosystem } from "@/components/sections/smartedge-ai-ecosystem"
import { SmartEdgeCareerJourney } from "@/components/sections/smartedge-career-journey"
import { SmartEdgeTestimonials } from "@/components/sections/smartedge-testimonials"
import { SmartEdgeCounsellingForm } from "@/components/sections/smartedge-counselling-form"
import { SmartEdgeLocationContact } from "@/components/sections/smartedge-location-contact"
import { SmartEdgeFinalCTA } from "@/components/sections/smartedge-final-cta"

export const metadata: Metadata = constructMetadata({
  title: "SmartEdge Academy | AI-Powered Career & Job Skills Academy in Bhiwandi",
  description:
    "DON'T JUST GET A DEGREE. GET JOB-READY WITH AI. Practical IT and AI courses in Java, Python, Data Science, Power BI, React, MERN, Cloud & DevOps, ChatGPT, and n8n with 100% Job Assistance in Bhiwandi.",
})

export default function Home() {
  return (
    <>
      {/* SECTION 1 – HERO */}
      <SmartEdgeHero />

      {/* SECTION 2 – TRUST & BENEFITS (4 PILLARS & STREAM ELIGIBILITY) */}
      <SmartEdgeTrustPillars />

      {/* SECTION 3 – COURSES (IT & AI PRACTICAL GRID) */}
      <SmartEdgePopularCourses />

      {/* SECTION 4 – WHY SMARTEDGE ACADEMY? (9 BENEFITS & GENUINE METRICS) */}
      <SmartEdgeWhyUs />

      {/* SECTION 5 – LEARN BY BUILDING (6 PROJECT TRACKS) */}
      <SmartEdgeLearnByBuilding />

      {/* SECTION 6 – AI & AUTOMATION ECOSYSTEM (ORBITING CIRCLES) */}
      <SmartEdgeAIEcosystem />

      {/* SECTION 7 – CAREER ASSISTANCE (6-STEP JOURNEY) */}
      <SmartEdgeCareerJourney />

      {/* SECTION 8 – STUDENT TESTIMONIALS (MARQUEE CAROUSEL) */}
      <SmartEdgeTestimonials />

      {/* SECTION 9 – FREE CAREER COUNSELLING (WORKING ENQUIRY FORM & WHATSAPP) */}
      <SmartEdgeCounsellingForm />

      {/* SECTION 10 – LOCATION & CONTACT (CAMPUS & GOOGLE MAPS) */}
      <SmartEdgeLocationContact />

      {/* SECTION 11 – FINAL CTA (YOUR CAREER DESERVES AN UPGRADE) */}
      <SmartEdgeFinalCTA />
    </>
  )
}
