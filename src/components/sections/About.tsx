import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <section id="about" className="container py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            01 — About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Engineer, designer-adjacent, relentless tinkerer.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-lg text-muted-foreground">
          <p>
            I'm a software engineer who cares deeply about the seams where systems meet
            people — the moments where a loading state feels patient, an error is helpful,
            or a click lands exactly where your hand already was.
          </p>
          <p>
            I've shipped realtime apps, design systems, and developer tooling in
            production. Lately I'm fascinated by the web as a rendering platform: how far
            GPU, 3D, and motion can go before they start getting in the user's way.
          </p>
          <p>
            Off the keyboard: long trail runs, painfully slow espresso, and building
            things I don't need out of wood.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
