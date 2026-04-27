import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Skills } from "@/components/sections/Skills";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Joshua Giles. Full-stack software engineer, NC State senior, Grill Club VP, South African transplant."
};

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <Reveal>
        <p className="font-mono text-sm uppercase tracking-widest text-accent">About</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          The slightly longer version.
        </h1>
      </Reveal>

      {/* Intro: bio + portrait photo + quick facts */}
      <div className="mt-10 grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-start md:gap-16">
        <div className="grid gap-10">
          <Reveal delay={0.05} className="prose prose-neutral max-w-none dark:prose-invert">
            <p>
              I was born in South Africa, grew up bouncing around, and eventually landed in
              North Carolina. I'm a senior studying Computer Science at NC State,
              graduating May 2026. I'm based in Raleigh while I finish up, with ties to
              Charlotte for whatever comes after.
            </p>
            <p>
              I like building full-stack things. The kind of apps where the frontend and
              the backend both matter and the seams between them are where the work
              actually is. I worked across .NET, Angular, and React on a large enterprise
              app at LexisNexis last summer, and I'm currently deep in Spring Boot and
              React for my senior design capstone.
            </p>
            <p>
              Travel changed how I think about most things. In May 2024 I backpacked
              through Europe with two friends for two and a half weeks, hitting
              Amsterdam, Prague, Budapest, Bled, Munich, and Salzburg. Hostels, prosecco
              cruises, late nights with strangers from a dozen countries. Going as an
              adult, on my own dime, taught me more about independence and how big the
              world really is than most things in school have.
            </p>
            <p>
              Off the keyboard: I'm Vice President of NC State's Grill Club, which means
              a lot of weekends feeding 30+ people and pretending the fire does most of
              the work. I also camp, shoot film photography, cook more than I used to,
              doodle in the margins of notebooks, tinker with Raspberry Pis and
              woodworking, and am currently on a replay of Elden Ring. Soundtrack is
              usually The Strokes, Foo Fighters, or Elliott Smith.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="space-y-3">
            <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              Quick facts
            </h3>
            <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <li>📍 Raleigh, NC (open to Charlotte)</li>
              <li>🎓 NC State, B.S. CS, May 2026</li>
              <li>🔥 VP, NC State Grill Club</li>
              <li>🏔 Born in South Africa</li>
              <li>📷 Shoots film when the light cooperates</li>
              <li>✈️ 6 countries in 2.5 weeks (May 2024)</li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="grid gap-5">
            {/* Primary portrait */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-border/60 shadow-xl">
              <Image
                src="/images/wide-mountain.jpg"
                alt="Joshua standing on a greenway in Boone, NC."
                fill
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 40vw, 100vw"
                quality={95}
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-4">
                <p className="font-mono text-xs uppercase tracking-widest text-foreground/90">
                  Boone, NC · 2024
                </p>
              </div>
            </div>

            {/* Secondary travel photo */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-border/60 shadow-xl">
              <Image
                src="/images/prague_watch.jpg"
                alt="Joshua in Prague, May 2024."
                fill
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 40vw, 100vw"
                quality={95}
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-4">
                <p className="font-mono text-xs uppercase tracking-widest text-foreground/90">
                  Prague · May 2024
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-24">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            What I've been up to.
          </h2>
        </Reveal>
        <div className="mt-12">
          <ExperienceTimeline />
        </div>
      </div>

      <Skills />

      {/* Off-the-keyboard gallery — placeholders until real photos exist. */}
      <div className="mt-24">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            Off the keyboard
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            What I'm into when I'm not coding.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { emoji: "🔥", title: "Grilling", note: "Grill Club VP. Low and slow, usually." },
            { emoji: "🏕", title: "Outside", note: "Camping, hiking, greenways. Raised outdoors." },
            { emoji: "✈️", title: "Travel", note: "6 countries across Europe in May 2024. Going back." },
            { emoji: "📷", title: "Film photos", note: "35mm, point-and-shoot, occasional self-portrait." },
            { emoji: "🛠", title: "Making things", note: "Woodworking, Raspberry Pi, whatever's on the bench." },
            { emoji: "🎸", title: "Music", note: "Strokes, Foos, Elliott Smith. Used to play guitar." },
            { emoji: "🎮", title: "Games", note: "Elden Ring replay in progress. Again." },
            { emoji: "🎬", title: "Movies", note: "Fantastic Mr. Fox and La La Land, repeatedly." }
          ].map((item) => (
            <Reveal key={item.title} delay={0.05}>
              <div className="h-full rounded-xl border border-border/60 bg-card/60 p-5 backdrop-blur">
                <div className="text-2xl">{item.emoji}</div>
                <h3 className="mt-3 font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
