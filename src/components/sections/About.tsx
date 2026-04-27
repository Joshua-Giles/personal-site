import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <section id="about" className="container py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Full-stack engineer, senior at NC State, Grill Club VP.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-lg text-muted-foreground">
          <p>
            I'm a CS senior at NC State, graduating May 2026. I was born in South Africa
            and have ended up in Raleigh, which has turned out to be a pretty good deal.
          </p>
          <p>
            I work across the stack: Spring Boot and React on my capstone, .NET and
            Angular at my internship last summer. I like problems where the frontend and
            backend both matter and you have to actually think about what lives where.
          </p>
          <p>
            Outside of school I grill a lot (VP of the club, it's on the resume now),
            camp when I can, shoot film when the light's right, and spend too much
            of my free time in the Lands Between.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
