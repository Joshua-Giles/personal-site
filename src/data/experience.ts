export interface ExperienceEntry {
  role: string;
  company: string;
  start: string;
  end: string;
  location?: string;
  bullets: string[];
  tech?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Capstone Engineer, Juntos Attendance Platform",
    company: "NC State Senior Design",
    start: "Aug 2025",
    end: "May 2026",
    location: "Raleigh, NC",
    bullets: [
      "Building a full-stack attendance platform for Juntos, an NC State non-profit running educational programs in 20+ NC schools.",
      "6-person team; responsible for full-stack feature work across React, Spring Boot, PostgreSQL, and Docker/Nginx infrastructure.",
      "Wrote unit tests (JUnit) and end-to-end tests (Playwright); set up the Docker Compose stack for frontend, backend, db, and reverse proxy.",
      "Coordinating with NC State OIT for a hosted deployment on a university domain, a rare outcome for senior design projects."
    ],
    tech: ["React", "Java", "Spring Boot", "PostgreSQL", "Docker", "Nginx", "JUnit", "Playwright"]
  },
  {
    role: "Software Engineering Intern",
    company: "LexisNexis Legal & Professional",
    start: "Jun 2025",
    end: "Aug 2025",
    location: "Raleigh, NC",
    bullets: [
      "Contributed to both backend and frontend development on a large-scale enterprise application during an 11-week internship.",
      "Implemented new features, streamlined API usage, and improved efficiency by refining data handling and instrumentation.",
      "Investigated and resolved complex bugs, including issues in third-party integrations that required deep debugging and close collaboration with my team.",
      "Learned agile practices firsthand: participated in code reviews, story pointing, and iterated on solutions to deliver production-ready features.",
      "Got fluent with GitHub Copilot to accelerate routine work and free up time for higher-level problem solving.",
      "On day one, proactively built a cross-team intern communication channel that's still active."
    ],
    tech: [
      ".NET",
      "C#",
      "TypeScript",
      "AngularJS",
      "AWS S3",
      "AWS CloudFront",
      "AWS Secrets Manager",
      "Azure DevOps",
      "Jasmine",
      "TypeMoq",
      "GitHub Copilot",
      "Scrumban"
    ]
  },
  {
    role: "Senior Model Response Reviewer",
    company: "Outlier",
    start: "Sep 2023",
    end: "May 2025",
    location: "Remote",
    bullets: [
      "Promoted from Model Response Reviewer to Senior Reviewer after a year, working in the AI / LLM evaluation space.",
      "Designed and crafted prompts used to evaluate AI models, then assessed and refined the resulting responses against detailed criteria.",
      "As Senior Reviewer, served as the final line of quality control: reviewed both AI outputs and other reviewers' evaluations before they were delivered to customers.",
      "Deepened my understanding of how modern LLM systems are trained, evaluated, and improved; contributed directly to the iterative refinement of cutting-edge models."
    ],
    tech: ["LLM Evaluation", "Prompt Engineering", "Quality Control", "Remote Operations"]
  },
  {
    role: "Vice President",
    company: "NC State Grill Club",
    start: "2024",
    end: "Present",
    location: "Raleigh, NC",
    bullets: [
      "Coordinate events for 30+ members: logistics, budgeting, and food prep.",
      "Help keep the club an inclusive, genuinely fun community where people actually show up."
    ]
  },
  {
    role: "Backpacking Across Europe",
    company: "6 countries, 2.5 weeks",
    start: "May 2024",
    end: "May 2024",
    location: "Amsterdam → Prague → Budapest → Bled → Munich → Salzburg",
    bullets: [
      "Backpacked through Europe with two friends: Amsterdam, Prague, Budapest, Bled, Munich, Salzburg, and back.",
      "Traveled as an adult on my own dime, navigating six countries, half a dozen languages, and more train timetables than I'd like to admit.",
      "Met dozens of people from all over the world in hostels, on prosecco cruises, at historical monuments, and in too many bars. Came back with a much bigger sense of how the world actually works."
    ]
  },
  {
    role: "B.S. Computer Science",
    company: "North Carolina State University",
    start: "Aug 2022",
    end: "May 2026",
    location: "Raleigh, NC",
    bullets: [
      "Graduating May 2026.",
      "Senior design capstone (Juntos) and coursework across systems, databases, software engineering, and algorithms."
    ]
  }
];
