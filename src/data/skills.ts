export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "Rust", "SQL"]
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "Node.js", "FastAPI", "Express", "tRPC"]
  },
  {
    category: "UI & Motion",
    items: ["Tailwind CSS", "Framer Motion", "Three.js / R3F", "GSAP", "shadcn/ui"]
  },
  {
    category: "Data & Infra",
    items: ["Postgres", "Redis", "Prisma", "Docker", "AWS", "Vercel"]
  },
  {
    category: "Tooling",
    items: ["Vite", "Turborepo", "pnpm", "GitHub Actions", "Playwright"]
  }
];
