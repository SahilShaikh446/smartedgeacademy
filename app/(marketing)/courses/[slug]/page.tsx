import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  Clock,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Briefcase,
  Layers,
  Code2,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
  Award,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { COURSES, getCourseBySlug, type CourseItem } from "@/config/courses"
import { constructMetadata } from "@/lib/utils"
import { ShimmerButton } from "@/registry/magicui/shimmer-button"
import { BorderBeam } from "@/registry/magicui/border-beam"

interface CoursePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.slug,
  }))
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params
  const course = getCourseBySlug(slug)

  if (!course) {
    return {
      title: "Course Not Found | SmartEdge Academy",
    }
  }

  return constructMetadata({
    title: `${course.title} Course in Bhiwandi | SmartEdge Academy`,
    description: `${course.shortDescription} Learn ${course.skillsCovered.slice(0, 5).join(", ")} with 100% Job Assistance at SmartEdge Academy Bhiwandi.`,
    canonicalUrl: `/courses/${course.slug}`,
    keywords: [
      `${course.title} in Bhiwandi`,
      `${course.title} classes Bhiwandi`,
      `${course.title} training institute`,
      ...siteConfig.keywords,
    ],
  })
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params
  const course = getCourseBySlug(slug)

  if (!course) {
    notFound()
  }

  // Course JSON-LD schema
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.shortDescription,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    educationalCredentialAwarded: "SmartEdge Academy Certificate of Completion",
    timeRequired: course.duration,
    occupationalCredentialAwarded: course.careerOpportunities.roles.join(", "),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["Blended", "Onsite"],
      location: {
        "@type": "Place",
        name: "SmartEdge Academy Bhiwandi Campus",
        address: siteConfig.contact.fullAddress,
      },
    },
  }

  // BreadcrumbList JSON-LD schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "All Courses",
        item: `${siteConfig.url}/courses`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.title,
        item: `${siteConfig.url}/courses/${course.slug}`,
      },
    ],
  }

  return (
    <div className="bg-background text-foreground">
      {/* Course Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {/* Breadcrumb Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Header */}
      <div className="border-b border-border/50 bg-slate-50/70 dark:bg-slate-900/40 py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <Link href="/courses" className="hover:text-foreground transition-colors">
              Courses
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="text-[#087BDF] font-semibold">{course.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative overflow-hidden py-12 md:py-20 bg-gradient-to-b from-[#062B67]/10 via-background to-background dark:from-[#031B43] dark:via-background dark:to-background border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="rounded-full bg-sky-100 dark:bg-sky-950 px-3 py-1 text-xs font-bold text-[#087BDF] dark:text-cyan-400">
                  {course.category}
                </span>
                <span className="rounded-full bg-amber-100 dark:bg-amber-950 px-3 py-1 text-xs font-extrabold text-amber-700 dark:text-amber-300">
                  {course.badge}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <Clock className="size-3.5 text-slate-400" />
                  <span>Duration: {course.duration}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-[#062B67] dark:text-white tracking-tight leading-tight">
                {course.title}
              </h1>
              <div className="mt-2 text-base sm:text-lg font-semibold text-[#087BDF] dark:text-cyan-400">
                {course.subtitle}
              </div>

              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                {course.fullDescription}
              </p>

              {/* Eligibility Bar */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-900 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                <GraduationCap className="size-4 text-[#087BDF] shrink-0" />
                <span><strong>Eligibility:</strong> {course.eligibility}</span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href={`/career-counselling?course=${encodeURIComponent(course.title)}`}>
                  <ShimmerButton
                    shimmerColor="#FFD928"
                    background="linear-gradient(135deg, #062B67 0%, #087BDF 100%)"
                    className="px-7 py-3 text-sm font-bold text-white shadow-md"
                  >
                    <span>Enquire for This Course</span>
                    <ArrowRight className="size-4 ml-2" />
                  </ShimmerButton>
                </Link>

                <a
                  href={`https://wa.me/919820624436?text=Hello%20SmartEdge%20Academy%2C%20I%20would%20like%20to%20know%20batch%20timings%20and%20fees%20for%20the%20${encodeURIComponent(course.title)}%20course.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-xs font-bold shadow-xs transition-colors"
                >
                  <MessageCircle className="size-4" />
                  <span>WhatsApp Admissions</span>
                </a>
              </div>
            </div>

            {/* Right Card: Quick Summary Card */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl border-2 border-[#FFD928] bg-card p-6 shadow-xl relative overflow-hidden">
                <BorderBeam
                  size={180}
                  duration={10}
                  delay={0}
                  colorFrom="#FFD928"
                  colorTo="#087BDF"
                />

                <div className="text-xs font-bold uppercase tracking-wider text-[#087BDF] mb-1">
                  Course Snapshot
                </div>
                <h3 className="text-xl font-black text-[#062B67] dark:text-white mb-4">
                  SmartEdge Fast Facts
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-slate-500">Level:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-slate-500">Job Assistance:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">100% Support*</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border/50">
                    <span className="text-slate-500">Avg Starting Package:</span>
                    <span className="font-bold text-[#062B67] dark:text-white">{course.careerOpportunities.avgSalary}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-500">Learning Mode:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">Classroom Lab &amp; Mentoring</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-border/50">
                  <div className="text-[11px] font-bold text-slate-500 mb-2 uppercase">
                    Tools &amp; Tech Stack:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course.toolsAndTech.map((tool, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-12">
            
            {/* Skills Covered Section */}
            <div>
              <h2 className="text-2xl font-black text-[#062B67] dark:text-white mb-4 flex items-center gap-2">
                <Code2 className="size-6 text-[#087BDF]" />
                <span>Skills You Will Master</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.skillsCovered.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-3.5 shadow-2xs"
                  >
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capstone Projects Section */}
            <div>
              <h2 className="text-2xl font-black text-[#062B67] dark:text-white mb-4 flex items-center gap-2">
                <Layers className="size-6 text-[#087BDF]" />
                <span>What You Will Build (Capstone Projects)</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Recruiters hire proof of work. During this program you will build production-grade projects deployed to the cloud with full GitHub documentation.
              </p>
              <div className="space-y-4">
                {course.whatYouWillBuild.map((project, pIdx) => (
                  <div
                    key={pIdx}
                    className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-card p-6 shadow-xs hover:border-[#087BDF]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="size-6 rounded-full bg-sky-100 dark:bg-sky-950 text-[#087BDF] dark:text-cyan-400 text-xs font-bold flex items-center justify-center">
                        {pIdx + 1}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-8">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Curriculum Module Breakdown */}
            <div>
              <h2 className="text-2xl font-black text-[#062B67] dark:text-white mb-4 flex items-center gap-2">
                <Calendar className="size-6 text-[#087BDF]" />
                <span>Curriculum &amp; Module Breakdown</span>
              </h2>
              <div className="space-y-4">
                {course.curriculum.map((mod, mIdx) => (
                  <div
                    key={mIdx}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-5 shadow-2xs"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-[#062B67] dark:text-cyan-300 mb-3 flex items-center gap-2">
                      <span className="size-5 rounded-full bg-[#062B67] text-[#FFD928] text-[10px] font-black flex items-center justify-center">
                        {mIdx + 1}
                      </span>
                      <span>{mod.title}</span>
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 pl-7">
                      {mod.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-[#087BDF]" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {course.faqs.length > 0 && (
              <div>
                <h2 className="text-2xl font-black text-[#062B67] dark:text-white mb-4 flex items-center gap-2">
                  <HelpCircle className="size-6 text-[#087BDF]" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className="space-y-3">
                  {course.faqs.map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-card p-5"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Sidebar: Career Opportunities & Enquiry CTA */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Career Opportunities Card */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-card p-6 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <Briefcase className="size-5 text-[#087BDF]" />
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  Career Pathways
                </h3>
              </div>

              <div className="mb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Target Job Roles:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {course.careerOpportunities.roles.map((role, rIdx) => (
                    <span
                      key={rIdx}
                      className="rounded-lg bg-sky-50 dark:bg-sky-950 px-2.5 py-1 text-xs font-semibold text-[#062B67] dark:text-sky-300 border border-sky-100 dark:border-sky-900"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Hiring Industries:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {course.careerOpportunities.hiringIndustries.map((ind, iIdx) => (
                    <span
                      key={iIdx}
                      className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs text-slate-700 dark:text-slate-300"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Counselling Card */}
            <div className="rounded-3xl border-2 border-[#062B67] bg-gradient-to-br from-[#062B67] to-[#031B43] text-white p-6 shadow-xl text-center">
              <Sparkles className="size-8 text-[#FFD928] mx-auto mb-2" />
              <h3 className="text-xl font-black text-white">
                Ready to Join This Course?
              </h3>
              <p className="mt-2 text-xs text-slate-200 leading-relaxed">
                Schedule a 1-on-1 counseling session with our senior technical trainers in Bhiwandi to discuss curriculum, timings, and fees.
              </p>

              <Link
                href={`/career-counselling?course=${encodeURIComponent(course.title)}`}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD928] text-[#062B67] font-black text-xs py-3 hover:bg-yellow-300 transition-colors shadow-md"
              >
                <span>Book Free Counselling</span>
                <ArrowRight className="size-4" />
              </Link>

              <div className="mt-4 text-[11px] text-slate-300">
                Or call us:{" "}
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="font-bold text-white hover:underline"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
