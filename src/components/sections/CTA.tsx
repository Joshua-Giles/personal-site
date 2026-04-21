import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="container py-24 md:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-brand/30 via-secondary/20 to-background p-10 md:p-16">
          <div className="absolute inset-0 -z-10 bg-grid opacity-10" aria-hidden />
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            04 — Let's build
          </p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Got an idea worth making real?
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            I'm open to interesting problems — full-time, contract, or collaborations.
            The best projects usually start as a quick conversation.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Start a conversation <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
