import { NextResponse } from "next/server"
import { siteConfig } from "@/config/site"
import { popularCourses } from "@/config/courses"

export const dynamic = "force-static"

export async function GET() {
  const fullCoursesDocumentation = popularCourses
    .map(
      (c, i) => `### ${i + 1}. ${c.name} (${c.badge})
- **Category**: ${c.category}
- **Duration**: ${c.duration}
- **Overview**: ${c.description}
- **Core Skills Acquired**: ${c.skills.join(", ")}
- **Projects Built During Program**: ${c.projects.join("; ")}
- **Curriculum Outline**:
${c.curriculum.map((m) => `  - *${m.title}*: ${m.topics.join(", ")}`).join("\n")}
- **Course URL**: ${siteConfig.url}/courses/${c.slug}
`
    )
    .join("\n---\n\n")

  const fullMarkdown = `# SmartEdge Academy – Comprehensive Institutional & Educational Knowledge Base

## 1. Executive Summary & Brand Identity
- **Institution Name**: SmartEdge Academy
- **Parent Organisation**: SmartEdge Group
- **Brand Slogan**: DON'T JUST GET A DEGREE. GET JOB-READY WITH AI.
- **Tagline**: AI-Powered Career & Job Skills Academy
- **Brand Promise**: Skills | Knowledge | Opportunities | A Brighter You
- **Job Guarantee / Assistance Statement**: 100% Job Assistance* (*Career guidance, interview prep, resume engineering, and corporate referral support services to help students get hired).
- **Official Website**: ${siteConfig.url}
- **Admissions Contact**: ${siteConfig.contact.phone}
- **Admissions Email**: ${siteConfig.contact.email}
- **Campus Location**: ${siteConfig.contact.fullAddress}

---

## 2. Target Audience & Stream Eligibility
SmartEdge Academy is deliberately designed for students and job-seekers who need practical, hands-on, job-oriented training:
1. **12th Pass Candidates**: Early career track into programming, frontend design, and AI productivity tools.
2. **Undergraduates & Recent Graduates (Any Stream)**:
   - Science: BSc Computer Science, BSc IT, General BSc (Physics/Maths/Chemistry).
   - Commerce & Management: BCom, MCom, BBA, BMS students seeking transition into Data Analytics, Power BI, SQL, and Digital Marketing with AI.
   - Engineering: BE/BTech across CS, IT, EXTC, Electrical, Mechanical, and Civil seeking placement-ready software and cloud engineering credentials.
3. **Career Switchers**: Non-technical professionals moving into IT, data analysis, and AI automation.

---

## 3. Four Core Educational Pillars
1. **Interview Preparation**:
   - Algorithmic problem-solving drills, live whiteboarding sessions, real-time code reviews, and HR behavioral readiness training.
2. **Resume Building**:
   - Professional ATS-compliant resume creation, GitHub portfolio hosting, and showcasing end-to-end production projects rather than generic tutorial code.
3. **Mock Interviews**:
   - Direct 1-on-1 interview simulations with seasoned industry engineers, replicating top product and service company technical rounds.
4. **Certified Courses**:
   - Rigorous evaluation based on capstone project defense, ensuring certificates represent verifiable technical competence.

---

## 4. Complete Program Catalog (${popularCourses.length} Comprehensive Tracks)

${fullCoursesDocumentation}

---

## 5. Practical Training & Project Tracks
- **Track 1: Full-Stack Web Applications** (Java Spring Boot, Next.js, MERN, Cloud deployments).
- **Track 2: Business & Executive Dashboards** (Power BI, SQL, real-time KPI streaming).
- **Track 3: AI-Powered Applications** (OpenAI / Gemini API integrations, LangChain, vector retrieval).
- **Track 4: Business Automation Workflows** (n8n, webhook pipelines, automated CRM syncing).
- **Track 5: Data Analytics & Predictive Pipelines** (Python, Pandas, statistical modeling).
- **Track 6: Digital Marketing Growth Engines** (AI content pipelines, automated ad tracking, conversion funnels).

---

## 6. Campus & Contact Information
- **Campus Address**: 1st Floor, Laxmi Ajit Complex, Mubeen Master Road, Near Shiv Mandir, Opp. Curewell Pharmacy, Gauripada, Samad Nagar, Bhiwandi, Maharashtra 421305, India.
- **Phone**: +91 9820624436
- **WhatsApp**: https://wa.me/919820624436
- **Website**: https://academy.smartedgegroup.in/
- **Free Career Counselling URL**: https://academy.smartedgegroup.in/career-counselling
`

  return new NextResponse(fullMarkdown, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
