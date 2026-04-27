export const siteConfig = {
  name: "Joshua Giles",
  title: "Joshua Giles, Software Engineer",
  description:
    "Full-stack software engineer. CS senior at NC State (May 2026). Based in Raleigh, NC.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://joshua-giles.vercel.app",
  ogImage: "/og.png",
  author: {
    name: "Joshua Giles",
    email: "joshgiles57@gmail.com"
  },
  social: {
    github: "https://github.com/Joshua-Giles",
    linkedin: "https://www.linkedin.com/in/joshuaagiles",
    email: "mailto:joshgiles57@gmail.com"
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
