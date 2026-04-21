import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Skills } from "@/components/sections/Skills";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";

export const metadata: Metadata = {
  title: "About",
  description: "About Joshua Giles — software engineer, designer-adjacent, tinkerer."
};

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <Reveal>
        <p className="font-mono text-sm uppercase tracking-widest text-accent">About</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          A little more about me.
        </h1>
      </Reveal>

      <div className="mt-8 grid gap-10 md:grid-cols-[2fr_1fr] md:gap-16">
        <Reveal delay={0.05} className="prose prose-neutral max-w-none dark:prose-invert">
          <p>
            I'm a software engineer who gravitates toward the boundary between product and
            platform. Most of my best work has lived in realtime systems, design systems,
            and developer experience — the places where small frictions compound into
            enormous wins when you fix them.
          </p>
          <p>
            I started writing code because I wanted to make video games. I kept writing it
            because I realized most of software engineering is also a game: a long one,
            with weird rules, played in teams, where the score is how many people's days
            you made better.
          </p>
          <p>
            These days I'm especially interested in AI-augmented tooling for engineers
            (without the hype), the web as a rendering platform, and the art of keeping
            complexity low as systems grow up.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="space-y-3">
          <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
            Quick facts
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>📍 Remote, US</li>
            <li>🛠 Shipping since 2019</li>
            <li>🎧 Runs on oat-milk lattes and lofi</li>
            <li>🏞 Weekends: trail running, woodworking, too many hobbies</li>
          </ul>
        </Reveal>
      </div>

      <div className="mt-24">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Where I've been.
          </h2>
        </Reveal>
        <div className="mt-12">
          <ExperienceTimeline />
        </div>
      </div>

      <Skills />
    </div>
  );
}
