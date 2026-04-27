import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "juntos-attendance",
    title: "Juntos Attendance Platform",
    summary:
      "Full-stack web app replacing pen-and-paper attendance for a 20+ school NC State non-profit.",
    description:
      "My senior design capstone (6-person team) for Juntos, an NC State non-profit that runs weekly educational meetings across 20+ North Carolina schools for students from 6th grade through the first two years of college. Before this, program coordinators tracked attendance on paper and retyped it into Excel after every event. We built the replacement end-to-end: role-based auth (Admin, Super Admin, Program Coordinator), the full event lifecycle (create, start, sign-in/register, complete), digital signature capture via signature-pad for audit requirements, guest-to-student relationship tracking, and one-click .xlsx export. Containerized with Docker (frontend, backend, db, Nginx reverse proxy) and covered by JUnit + Playwright tests. Deploying to NC State OIT-hosted infrastructure with a university domain, rare for a capstone project.",
    tech: [
      "React",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "JUnit",
      "Playwright"
    ],
    // Source & live app are private (Juntos members only).
    // TODO: swap in a real screenshot if/when one becomes shareable.
    featured: true,
    year: 2026
  },
  {
    slug: "lexisnexis-internship",
    title: "LexisNexis Software Engineering Intern",
    summary:
      "11-week full-stack internship at LexisNexis Legal & Professional (Summer 2025, Raleigh).",
    description:
      "11-week internship contributing to both backend and frontend development on a large-scale enterprise application. Implemented new features, streamlined API usage, and improved efficiency by refining data handling and instrumentation. Investigated and resolved complex bugs, including issues in third-party integrations that required deep debugging and close collaboration with my team. Learned agile practices firsthand: participated in code reviews, story pointing, and iterated on solutions to deliver production-ready features. Got fluent with GitHub Copilot to maximize efficiency and free up time for higher-level problem solving. On day one, proactively built a cross-team intern communication channel that's still active.",
    tech: [
      ".NET",
      "C#",
      "TypeScript",
      "AngularJS",
      "SQL",
      "Azure DevOps",
      "Postman",
      "Swagger"
    ],
    featured: true,
    year: 2025
  }
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllTech(): string[] {
  const set = new Set<string>();
  projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}
