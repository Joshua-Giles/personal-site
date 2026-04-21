"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/hero/Typewriter";
import { siteConfig } from "@/config/site";

const HeroScene = dynamic(
  () => import("@/components/hero/Scene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null }
);

const HeroParticles = dynamic(
  () => import("@/components/hero/Particles").then((m) => m.HeroParticles),
  { ssr: false, loading: () => null }
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
};

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] w-full items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-30 bg-grid opacity-[0.15]" aria-hidden />
      <div className="absolute inset-0 -z-20 bg-radial-fade" aria-hidden />
      <div className="absolute inset-0 -z-10">
        <HeroParticles />
        <HeroScene />
      </div>

      {/*
        Readability scrim — sits above the 3D scene but below the text.
        Text lives on the left, so we fade strongly from the background color
        on the left to transparent on the right, letting shapes peek through
        the negative space without fighting the copy for contrast.
      */}
      <div
        className="pointer-events-none absolute inset-0 -z-[5] bg-gradient-to-r from-background via-background/80 to-transparent md:via-background/60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-[5] h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />

      {/* Foreground content */}
      <div className="container relative z-10 grid gap-8 py-24">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="show"
          className="font-mono text-sm text-accent"
        >
          <span className="text-muted-foreground">&gt;</span> hello_world.init()
        </motion.p>

        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="text-balance text-5xl font-bold tracking-tight md:text-7xl"
        >
          Hi, I'm <span className="text-brand dark:text-cream">{siteConfig.author.name}</span>.
          <br />
          I build{" "}
          <Typewriter
            phrases={[
              "delightful interfaces.",
              "thoughtful systems.",
              "performant web apps.",
              "things that spark joy."
            ]}
            className="text-accent"
          />
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="max-w-2xl text-balance text-lg text-muted-foreground md:text-xl"
        >
          Software engineer obsessed with the craft — blending rigorous engineering with a
          designer's eye for detail. Currently exploring the edges of 3D on the web, DX,
          and AI-powered tooling.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg">
            <Link href="/projects">
              View projects
              <ArrowRight className="ml-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get in touch</Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link href={siteConfig.social.github} target="_blank" rel="noreferrer">
              <Github className="mr-1" /> GitHub
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-2 rounded-full bg-background/70 px-3 py-2 text-xs font-medium uppercase tracking-widest text-foreground/80 shadow-sm ring-1 ring-border/60 backdrop-blur">
            <span>scroll</span>
            <motion.span
              className="block h-8 w-px bg-foreground/60"
              animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
