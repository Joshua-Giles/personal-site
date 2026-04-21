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
    role: "Senior Software Engineer",
    company: "Acme Corp (placeholder)",
    start: "2023",
    end: "Present",
    location: "Remote",
    bullets: [
      "Led a realtime collaboration initiative, shipping WebSocket-backed presence and cursors across 3 products.",
      "Mentored 4 engineers; introduced RFC process and weekly design reviews.",
      "Cut p95 page-load time 38% via route-level code-splitting and image optimization."
    ],
    tech: ["Next.js", "TypeScript", "Postgres", "Redis"]
  },
  {
    role: "Software Engineer",
    company: "Globex (placeholder)",
    start: "2021",
    end: "2023",
    location: "Remote",
    bullets: [
      "Built a design-system library adopted by 12 internal apps.",
      "Owned the migration from REST to typed tRPC APIs, eliminating an entire class of client-server type drift."
    ],
    tech: ["React", "tRPC", "Prisma", "Tailwind"]
  },
  {
    role: "Full-Stack Developer",
    company: "Initech (placeholder)",
    start: "2019",
    end: "2021",
    bullets: [
      "Shipped the initial MVP of the flagship product from zero to paying customers.",
      "Set up CI/CD, observability, and the company's first on-call rotation."
    ],
    tech: ["Node.js", "React", "AWS"]
  }
];
