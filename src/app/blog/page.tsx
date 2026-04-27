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
          Notes, build logs, and whatever.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Occasional posts: project write-ups, things I'm learning, maybe a grill
          review or two.
        </p>
      </Reveal>

      {posts.length === 0 ? (
        <p className="mt-12 rounded-xl border border-dashed border-border/60 bg-card/40 p-10 text-center text-muted-foreground">
          No posts yet. Check back soon.
        </p>
      ) : (
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((post, i) => (
            <li key={post.slug}>
              <Reveal delay={i * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-border/60 bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
                >
                  {/* Subtle accent stripe on the left edge */}
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-accent/0 transition-colors group-hover:bg-accent"
                    aria-hidden
                  />

                  <div className="flex items-center justify-between gap-4">
                    <time className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {formatDate(post.date)}
                    </time>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap justify-end gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border/60 bg-background/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <h2 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-accent md:text-2xl">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground">{post.summary}</p>

                  <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Read post
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
