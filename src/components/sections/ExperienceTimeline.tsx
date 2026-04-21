"use client";
import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { experience } from "@/data/experience";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ExperienceTimeline() {
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
      items.forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

      const line = container.current?.querySelector<HTMLElement>(".timeline-line-fill");
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
              trigger: container.current,
              start: "top 70%",
              end: "bottom 60%",
              scrub: true
            }
          }
        );
      }
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative">
      <div className="absolute left-3 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" aria-hidden />
      <div
        className="timeline-line-fill absolute left-3 top-0 h-full w-px bg-accent md:left-1/2 md:-translate-x-1/2"
        aria-hidden
      />
      <ol className="space-y-12">
        {experience.map((entry, i) => (
          <li
            key={`${entry.company}-${i}`}
            className="timeline-item relative grid gap-4 pl-10 md:grid-cols-2 md:pl-0"
          >
            <span className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background md:left-1/2 md:-translate-x-1/2" />
            <div className={i % 2 === 0 ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"}>
              <p className="font-mono text-sm text-accent">
                {entry.start} — {entry.end}
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">{entry.role}</h3>
              <p className="text-muted-foreground">
                {entry.company}
                {entry.location && <span> · {entry.location}</span>}
              </p>
            </div>
            <div className={i % 2 === 0 ? "md:pl-12" : "md:order-1 md:pr-12"}>
              <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                {entry.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              {entry.tech && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {entry.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/60 bg-background/40 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
