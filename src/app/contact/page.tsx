import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send me a message about work, collaborations, or a friendly hello."
};

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="grid gap-16 md:grid-cols-2 md:gap-20">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-accent">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Say hi.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Looking to hire a new-grad engineer, working on something I might like, or
            just want to argue about Elden Ring builds? Drop a note. I reply to
            everything.
          </p>

          <div className="mt-10 space-y-3 text-sm">
            <Link
              href={siteConfig.social.email}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> Email
            </Link>
            <div className="flex gap-4">
              <Link
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" /> GitHub
              </Link>
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-border/60 bg-card/60 p-6 backdrop-blur md:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
