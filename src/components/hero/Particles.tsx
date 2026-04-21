"use client";
import * as React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  background: { color: { value: "transparent" } },
  detectRetina: true,
  particles: {
    number: { value: 45, density: { enable: true, width: 1000, height: 1000 } },
    color: { value: ["#F2E9DC", "#F85E00", "#90323D"] },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.1, max: 0.35 },
      animation: { enable: true, speed: 0.4, sync: false }
    },
    size: { value: { min: 0.8, max: 2 } },
    links: {
      enable: true,
      distance: 130,
      color: "#F2E9DC",
      opacity: 0.12,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.35,
      direction: "none",
      outModes: { default: "out" },
      random: true
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: { enable: true, mode: "grab" },
      resize: { enable: true }
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.3 } }
    }
  }
};

export function HeroParticles() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="hero-particles"
      options={options}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
