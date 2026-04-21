"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  projects: Project[];
  allTech: string[];
  enableFilter?: boolean;
}

export function ProjectGrid({ projects, allTech, enableFilter = true }: ProjectGridProps) {
  const [filter, setFilter] = React.useState<string | null>(null);
  const filtered = filter ? projects.filter((p) => p.tech.includes(filter)) : projects;

  return (
    <div className="flex flex-col gap-8">
      {enableFilter && (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter(null)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs transition-colors",
              filter === null
                ? "border-accent bg-accent/15 text-accent"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            )}
          >
            All
          </button>
          {allTech.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(t)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs transition-colors",
                filter === t
                  ? "border-accent bg-accent/15 text-accent"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">
          No projects match <Badge variant="outline">{filter}</Badge> yet.
        </p>
      )}
    </div>
  );
}
