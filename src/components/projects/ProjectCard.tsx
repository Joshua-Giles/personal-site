"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn("group", className)}
    >
      <Card className="h-full overflow-hidden border-border/60 bg-card/60 backdrop-blur transition-colors hover:border-accent/60">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            // No screenshot yet — render a themed gradient with the leading
            // tech badges as the "cover art" so the card doesn't feel empty.
            <div className="relative h-full w-full bg-gradient-to-br from-brand/40 via-secondary/30 to-accent/20">
              <div className="absolute inset-0 bg-grid opacity-[0.12]" />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="flex flex-wrap justify-center gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/60 bg-background/70 px-2.5 py-1 font-mono text-xs text-foreground/80 backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
          <span className="absolute right-3 top-3 rounded-full bg-background/80 px-2 py-0.5 font-mono text-xs backdrop-blur">
            {project.year}
          </span>
        </div>
        <CardContent className="flex flex-col gap-3 p-6">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
          </div>
          <p className="text-sm text-muted-foreground">{project.summary}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge key={t} variant="outline" className="font-normal">
                {t}
              </Badge>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-3 text-sm">
            {project.repo && (
              <Link
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" /> Code
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" /> Live
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
