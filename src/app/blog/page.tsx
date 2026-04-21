import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on engineering, motion, and building on the web."
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="container py-16 md:py-24">
      <Reveal>
        <p className="font-mono text-sm uppercase tracking-widest text-accent">Writing</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Notes from the keyboard.
        </h1>
      </Reveal>

      <ul className="mt-12 divide-y divide-border/60">
        {posts.length === 0 && (
          <li className="py-8 text-muted-foreground">
            No posts yet. Check back soon.
          </li>
        )}
        {posts.map((post, i) => (
          <li key={post.slug}>
            <Reveal delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 py-8 md:flex-row md:items-baseline md:justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-accent md:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-muted-foreground">{post.summary}</p>
                </div>
                <div className="flex items-center gap-3">
                  <time className="font-mono text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </time>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
