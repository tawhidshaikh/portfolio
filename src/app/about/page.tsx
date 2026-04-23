import type { Metadata } from "next";
import { AboutPageClient } from "@/components/pages/about-page-client";
import type { TimelineItem } from "@/components/portfolio/about-timeline";
import { fiazDevUrl, siteUrl } from "@/lib/site-config";

const aboutOgImageUrl = `${siteUrl}/about/opengraph-image`;

export const metadata: Metadata = {
  title: "About",
  description: "The journey, roles, and milestones of Tawhid Shaikh.",
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "about Tawhid Shaikh",
    "developer journey",
    "open source maintainer",
    "full stack experience",
  ],
  openGraph: {
    title: "About Tawhid Shaikh",
    description:
      "Journey, milestones, and experience across full stack, open source, and AI delivery.",
    url: `${siteUrl}/about`,
    type: "profile",
    images: [
      {
        url: aboutOgImageUrl,
        width: 1200,
        height: 630,
        alt: "About Tawhid Shaikh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tawhid Shaikh",
    description:
      "Journey, milestones, and experience across full stack, open source, and AI delivery.",
    images: [aboutOgImageUrl],
  },
};

function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function formatPeriod(start: string, end: string): string {
  const startDate = new Date(`${start} 01`);
  const endDate = end.toLowerCase() === "present" ? new Date() : new Date(`${end} 01`);

  let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  months += endDate.getMonth() - startDate.getMonth();
  months += 1;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  let durationObj = "";
  if (years > 0) {
    durationObj += `${years} yr${years > 1 ? "s" : ""}`;
  }
  if (remainingMonths > 0) {
    if (durationObj) durationObj += " ";
    durationObj += `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;
  }
  if (!durationObj) {
    durationObj = "1 mo";
  }

  return `${start} - ${end} · ${durationObj}`;
}

const timelineItems: TimelineItem[] = [
  {
    period: formatPeriod("Jul 2025", "Present"),
    title:
      "Research Development Software Engineer (Elcome Integrated Systems Pvt. Ltd. · Full-time)",
    description:
      "Developing mission-critical full-stack applications for naval operations and maritime defense systems, focusing on real-time data processing, reliability, and secure deployments.",
    highlights: [
      "Built multi-platform systems using Qt/C++, Python, JavaScript, and .NET for navigation, simulation, and command-and-control workflows.",
      "Engineered scalable and secure software tailored to shipboard environments and constrained communication systems.",
      "Modernized legacy systems using Python automation, C++ refactoring, and JavaScript frontends to improve performance and maintainability.",
      "Worked across Qt-based UIs, C++ processing pipelines, and Python tooling for diagnostics, configuration, and automation.",
      "Ensured compliance with cybersecurity practices and mission-critical reliability standards for defense systems.",
    ],
  },
  {
    period: formatPeriod("Aug 2023", "Jun 2025"),
    title: "Research Development Software Engineer (Biosense Technologies · Full-time)",
    description:
      "Worked on biomedical device software and system architecture for automated biochemistry analyzers in a regulated engineering environment.",
    highlights: [
      "Designed and developed semi-automatic and fully automated diagnostic systems improving lab efficiency and accuracy.",
      "Defined system architecture and ensured compliance with IEC 60601, ISO 13485, and FDA standards.",
      "Integrated microfluidics and automated reagent handling systems to optimize diagnostic workflows.",
      "Implemented embedded communication protocols (SPI, I2C, UART) and optimized Linux bootloaders.",
      "Built REST APIs and ASP.NET interfaces for real-time monitoring and control.",
      "Improved system performance by 35% using multithreading and parallel processing.",
      "Containerized applications using Docker for scalable deployment.",
      "Applied Agile practices with structured Git workflows and audit-ready documentation (PCO).",
    ],
  },
  {
    period: formatPeriod("May 2023", "Jul 2023"),
    title: "Web Developer Intern (AONIX Pvt. Ltd. · Internship · Remote)",
    description:
      "Developed full-stack web applications using modern JavaScript frameworks and backend technologies with a focus on performance and scalability.",
    highlights: [
      "Built reusable UI components using React.js and Next.js with optimized state management.",
      "Developed RESTful APIs using Node.js and Express.js for business logic and data processing.",
      "Integrated MongoDB with efficient schema design, indexing, and query handling.",
      "Implemented authentication, authorization, and input validation for secure applications.",
      "Used Express middleware for logging, error handling, and request processing.",
      "Integrated frontend with backend APIs ensuring consistent data flow.",
      "Applied responsive design using HTML5, CSS3, and modern JavaScript (ES6+).",
      "Collaborated in Agile teams using Git workflows, pull requests, and code reviews.",
    ],
  },
];

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Tawhid Shaikh",
    url: `${siteUrl}/about`,
    mainEntity: {
      "@type": "Person",
      name: "Tawhid Shaikh",
      url: siteUrl,
      jobTitle: "Founder, Entrepreneur, Full Stack Developer",
    },
  };

  return (
    <>
      <script type="application/ld+json">{serializeJsonLd(aboutJsonLd)}</script>
      <AboutPageClient timelineItems={timelineItems} />
    </>
  );
}
