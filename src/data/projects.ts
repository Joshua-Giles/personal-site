import type { Project } from "@/types/project";

/**
 * Placeholder projects — replace with real content.
 * Images use picsum.photos for now; drop real images into
 * /public/images/projects/ and update the `image` fields.
 */
export const projects: Project[] = [
  {
    slug: "aurora-realtime-chat",
    title: "Aurora — Realtime Chat Platform",
    summary: "Low-latency group chat with presence, reactions, and E2E-encrypted DMs.",
    description:
      "A production-grade realtime chat app built on WebSockets with a Rust relay server and a Next.js client. Supports typing indicators, presence, reactions, edits, threaded replies, and end-to-end encrypted direct messages via libsodium.",
    tech: ["Next.js", "TypeScript", "Rust", "WebSockets", "Postgres", "Redis"],
    image: "https://picsum.photos/seed/aurora/1200/800",
    repo: "https://github.com/Joshua-Giles/aurora",
    demo: "https://example.com/aurora",
    featured: true,
    year: 2024
  },
  {
    slug: "prisma-portfolio-engine",
    title: "Prisma — 3D Portfolio Engine",
    summary: "Reusable R3F components for portfolio heroes, timelines, and scroll scenes.",
    description:
      "Open-source toolkit I extracted from building portfolio sites. Includes composable floating-shape scenes, a GSAP-driven ScrollTrigger hook, and a typewriter primitive. Ships as a tree-shakeable ESM package.",
    tech: ["React", "Three.js", "R3F", "GSAP", "TypeScript", "Vite"],
    image: "https://picsum.photos/seed/prisma/1200/800",
    repo: "https://github.com/Joshua-Giles/prisma",
    featured: true,
    year: 2024
  },
  {
    slug: "tome-cli-devtool",
    title: "Tome — CLI Devtool",
    summary: "Project scaffolder with plugin system and zero-config TS templates.",
    description:
      "A fast, ergonomic CLI for bootstrapping TypeScript projects. Written in Go with a plugin API powered by WASM, letting teams ship private generators without forking the core. Distributed via Homebrew, Scoop, and apt.",
    tech: ["Go", "WASM", "TypeScript", "Cobra", "Bun"],
    image: "https://picsum.photos/seed/tome/1200/800",
    repo: "https://github.com/Joshua-Giles/tome",
    featured: true,
    year: 2023
  },
  {
    slug: "sifter-ml-classifier",
    title: "Sifter — Recipe Classifier",
    summary: "ML model + web UI that tags recipes by cuisine, diet, and technique.",
    description:
      "Fine-tuned a DistilBERT model on a custom 40k-recipe corpus. Serves predictions behind a FastAPI gateway with a Next.js UI. Includes an active-learning loop where user corrections feed back into a labeling dashboard.",
    tech: ["Python", "PyTorch", "FastAPI", "Next.js", "Docker"],
    image: "https://picsum.photos/seed/sifter/1200/800",
    repo: "https://github.com/Joshua-Giles/sifter",
    year: 2023
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
