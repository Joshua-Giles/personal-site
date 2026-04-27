"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
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
      <div className="container relative z-10 grid items-start gap-12 py-24 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
        <div className="grid gap-8">
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
            className="font-mono text-sm text-accent"
          >
            <span className="text-muted-foreground">$</span> ./joshua --introduce
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="text-5xl font-bold leading-[1.15] tracking-tight md:text-7xl"
          >
            Hi, I'm <span className="text-brand dark:text-cream">{siteConfig.author.name}</span>.
            {/*
              The typewriter line sits in its own block with a FIXED height so
              the h1 never reflows as phrases type in/out. The reserved height
              is sized generously to fit the longest phrase even when it wraps
              on narrow viewports, so it can never overlap the paragraph below.
              Leading is matched to the h1 above for a uniform visual rhythm.
            */}
            <span className="mt-3 block h-[5.6em] leading-[1.15] md:h-[3em]">
              I'm a{" "}
              <Typewriter
                phrases={[
                  "full-stack engineer.",
                  "senior at NC State.",
                  "grill club VP.",
                  "currently replaying Elden Ring."
                ]}
                className="text-accent"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="max-w-2xl text-balance text-lg text-muted-foreground md:text-xl"
          >
            Born in South Africa, based in Raleigh. I write full-stack code by day,
            grill on weekends, and take film photos when the light's right.
            Graduating May 2026 and looking for what's next.
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
                See what I've built
                <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Say hi</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href={siteConfig.social.github} target="_blank" rel="noreferrer">
                <Github className="mr-1" /> GitHub
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Polaroid photo — hidden on mobile to keep the stack clean */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="relative mx-auto hidden aspect-[4/5] w-full max-w-sm md:block"
        >
          <div className="relative h-full w-full rounded-sm bg-cream p-3 pb-14 shadow-2xl ring-1 ring-black/10">
            <div className="relative h-full w-full overflow-hidden bg-black/90">
              <Image
                src="/images/film-mirror.jpg"
                alt="A photo of Joshua taking a film photo of himself in a mirror."
                fill
                sizes="(max-width: 1024px) 50vw, 400px"
                className="object-cover"
                priority
              />
            </div>
            <p className="absolute inset-x-0 bottom-4 text-center font-mono text-sm text-neutral-700">
              somewhere in NC
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-3 rounded-full bg-background/70 px-5 py-4 text-xs font-medium uppercase tracking-widest text-foreground/80 shadow-sm ring-1 ring-border/60 backdrop-blur">
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
