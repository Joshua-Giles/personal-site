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
          What I've been building.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Mostly my senior design capstone at NC State, work from my LexisNexis
          internship, and a few side projects along the way. Filter by stack if you're
          looking for something specific.
        </p>
      </Reveal>

      <div className="mt-12">
        <ProjectGrid projects={projects} allTech={getAllTech()} />
      </div>
    </div>
  );
}
