import { Reveal } from "@/components/motion/Reveal";
import { skills } from "@/data/skills";
import { Card, CardContent } from "@/components/ui/card";

export function Skills() {
  return (
    <section id="skills" className="container py-24 md:py-32">
      <Reveal>
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          Toolbelt
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          What I work with.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <Card className="h-full bg-card/60 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border/60 bg-background/40 px-2.5 py-1 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
