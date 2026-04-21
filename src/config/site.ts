export const siteConfig = {
  name: "Joshua Giles",
  title: "Joshua Giles — Software Engineer",
  description:
    "Portfolio of Joshua Giles — software engineer building thoughtful, performant, and delightful web applications.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://joshua-giles.github.io",
  ogImage: "/og.png",
  author: {
    name: "Joshua Giles",
    email: "hello@example.com"
  },
  social: {
    github: "https://github.com/Joshua-Giles",
    linkedin: "https://www.linkedin.com/in/joshua-giles",
    email: "mailto:hello@example.com"
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ]
} as const;

export type SiteConfig = typeof siteConfig;
