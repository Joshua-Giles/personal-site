import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects, getAllTech } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects I've built — web apps, tooling, and experiments."
};

export default function ProjectsPage() {
  return (
    <div className="container py-16 md:py-24">
      <Reveal>
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          Projects
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Things I've built.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A mix of shipped work, open-source tools, and experiments I couldn't stop
          thinking about until they existed. Filter by tech to narrow things down.
        </p>
      </Reveal>

      <div className="mt-12">
        <ProjectGrid projects={projects} allTech={getAllTech()} />
      </div>
    </div>
  );
}
