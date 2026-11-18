import { NextResponse } from "next/server"
import { siteConfig } from "@/config/site"
import { popularCourses } from "@/config/courses"

export const dynamic = "force-static"

export async function GET() {
  const coursesList = popularCourses
    .map(
      (c) =>
        `- **${c.name}** (${c.category}, ${c.duration}): ${c.description} Skills: ${c.skills.join(", ")}.`
    )
    .join("\n")

  const markdown = `# SmartEdge Academy – AI-Powered Career & Job Skills Academy

> DON'T JUST GET A DEGREE. GET JOB-READY WITH AI.
> Official Website: ${siteConfig.url}
> Direct Admissions / Counselling: ${siteConfig.contact.phone} | ${siteConfig.contact.email}
> Campus Location: ${siteConfig.contact.fullAddress}
> Parent Company: ${siteConfig.parentCompany}
> Brand Promise: ${siteConfig.brandPromise}

## Institution Overview
SmartEdge Academy is a premier technology and AI training academy based in Bhiwandi, Maharashtra. The academy empowers fresh graduates (12th Pass, BSc, BCA, BCom, MCom, Engineering) and working professionals to transition into high-growth software engineering, data, cloud, and AI automation careers.

## Core Pillars & Training Methodology
1. **Interview Preparation**: Rigorous technical mock sessions, algorithmic problem solving, and HR behavioural readiness.
2. **Resume Building**: ATS-compliant resume engineering showcasing real-world GitHub repositories, deployed web applications, and capstone projects.
3. **Mock Interviews**: 1-on-1 interview simulations conducted with senior industry software engineers.
4. **Certified Courses**: Capstone-evaluated credentials validating hands-on coding and tooling proficiency.
5. **100% Job Assistance***: Dedicated career support services, portfolio showcases, and company interview referrals.

## Comprehensive Course Offerings

### IT & Development Programs
${coursesList}

## Eligibility & Who Can Join
- **12th Pass students** looking to build early careers in computer science and digital technologies.
- **Graduates from IT/CS Streams**: BSc IT, BCA, BE/BTech (Computer/IT/EXTC), MCA.
- **Graduates from Non-IT Streams**: BCom, MCom, BSc (Plain/Chemistry/Physics), BA, BMS, BBA looking for structured entry into software jobs.
- **Working Professionals** wanting to upgrade to AI-powered tooling, full-stack development, or business workflow automation.

## Campus Address & Admissions Contact
- **Address**: 1st Floor, Laxmi Ajit Complex, Mubeen Master Road, Near Shiv Mandir, Opp. Curewell Pharmacy, Gauripada, Samad Nagar, Bhiwandi, Maharashtra 421305, India.
- **Phone / WhatsApp**: +91 9820624436
- **Website**: https://academy.smartedgegroup.in/
- **Free Career Counselling**: https://academy.smartedgegroup.in/career-counselling
`

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
