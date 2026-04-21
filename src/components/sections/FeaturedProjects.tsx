import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <section id="projects" className="container py-24 md:py-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            03 — Selected Work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Things I've built recently.
          </h2>
        </div>
        <Button asChild variant="ghost">
          <Link href="/projects">
            All projects <ArrowRight className="ml-1" />
          </Link>
        </Button>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.1}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
