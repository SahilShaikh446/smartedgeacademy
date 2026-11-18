import { siteConfig } from "@/config/site"
import { popularCourses } from "@/config/courses"

export function StructuredData() {
  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    image: `${siteConfig.url}/smartedge-admission-flex.jpg`,
    slogan: siteConfig.slogan,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.parentCompany,
      url: "https://smartedgegroup.in",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.28827",
      longitude: "73.05389",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        contactType: "admissions & student counselling",
        email: siteConfig.contact.email,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
    ],
    sameAs: [
      siteConfig.url,
      siteConfig.links.whatsapp,
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-IN",
  }

  // Course schemas for top courses
  const courseSchemas = popularCourses.slice(0, 8).map((course) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${siteConfig.url}/courses/${course.slug}#course`,
    name: course.name,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    educationalCredentialAwarded: "SmartEdge Academy Certificate of Completion",
    timeRequired: course.duration,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["Blended", "Onsite", "Online"],
      location: {
        "@type": "Place",
        name: "SmartEdge Academy Bhiwandi Campus",
        address: siteConfig.contact.fullAddress,
      },
    },
  }))

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is SmartEdge Academy and what programs are offered?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SmartEdge Academy is an AI-powered career and job skills institute located in Bhiwandi, Maharashtra. We offer industry-aligned practical training in Java Development, Python, Data Science, Data Analytics, Frontend Development, Power BI, SQL, Mobile Apps, MERN Stack, Cloud & DevOps, as well as AI & Automation programs including ChatGPT, Google Gemini, Google Flow, Antigravity, and n8n Workflow Automation.",
        },
      },
      {
        "@type": "Question",
        name: "Can non-IT graduates, 12th pass students, or BCom/BSc/BA holders join SmartEdge Academy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, absolutely! Whether you are a 12th Pass, BSc, BCA, BCom, MCom, Engineering graduate, or from any non-IT stream looking to switch into software, data, or AI careers, our programs begin from the conceptual foundations and guide you through hands-on project building.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 100% Job Assistance policy at SmartEdge Academy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SmartEdge Academy provides 100% Job Assistance support services. This includes comprehensive interview preparation, technical drills, ATS resume optimization, simulated 1-on-1 mock interviews with senior engineers, and active employer referral coordination to help graduates get hired.",
        },
      },
      {
        "@type": "Question",
        name: "Where is the SmartEdge Academy campus located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SmartEdge Academy is located at 1st Floor, Laxmi Ajit Complex, Mubeen Master Road, Near Shiv Mandir, Opp. Curewell Pharmacy, Gauripada, Samad Nagar, Bhiwandi, Maharashtra 421305, India. You can call or WhatsApp us directly at +91 9820624436.",
        },
      },
      {
        "@type": "Question",
        name: "How can I book a Free Career Counselling session?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book a Free Career Counselling session online at academy.smartedgegroup.in/career-counselling, or by calling or sending a WhatsApp message to +91 9820624436. Our mentors will evaluate your background, interests, and career goals to recommend the ideal learning track.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {courseSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
