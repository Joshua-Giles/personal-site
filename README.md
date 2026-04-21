# Joshua Giles — Portfolio

Personal portfolio built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, featuring:

- **3D hero** using React Three Fiber + drei with floating geometry, mouse parallax, and a particle layer (tsParticles).
- **Scroll animations** via Framer Motion (`Reveal`) and GSAP ScrollTrigger (experience timeline).
- **Typewriter** hero title animation.
- **shadcn/ui**-style primitives (Button, Input, Card, Sheet, etc.) owned in-repo.
- **MDX blog** with `next-mdx-remote` + `rehype-pretty-code` syntax highlighting.
- **Contact form** wired to a Next.js API route that emails via [Resend](https://resend.com).
- **Dark/light theme** via `next-themes` (dark default, green-forward palette).

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in Resend key + to-address
npm run dev
```

Open http://localhost:3000.

### Scripts

- `npm run dev` — dev server.
- `npm run build` — production build.
- `npm run start` — run built app.
- `npm run lint` — ESLint.
- `npm run typecheck` — TypeScript.

## Project structure

```
src/
├─ app/                    # App Router routes, API, metadata, sitemap, robots
│  ├─ api/contact/route.ts # POST handler → Resend
│  ├─ blog/                # MDX-backed blog
│  ├─ about/  projects/  contact/
│  └─ layout.tsx  page.tsx  globals.css
├─ components/
│  ├─ hero/                # R3F Scene, FloatingShape, Particles, Typewriter
│  ├─ nav/                 # Navbar, Footer, ThemeToggle
│  ├─ projects/            # ProjectCard, ProjectGrid (with filter)
│  ├─ sections/            # About, Skills, FeaturedProjects, CTA, ExperienceTimeline (GSAP)
│  ├─ motion/Reveal.tsx    # whileInView wrapper
│  ├─ contact/ContactForm.tsx
│  ├─ providers/ThemeProvider.tsx
│  └─ ui/                  # shadcn-style primitives
├─ content/blog/*.mdx      # MDX posts
├─ data/                   # projects.ts, skills.ts, experience.ts
├─ lib/                    # utils, validation (zod), mdx loader
├─ config/site.ts          # name, socials, nav
└─ types/project.ts
```

## Theming

Palette is defined as HSL CSS variables in `src/app/globals.css` and mapped to
Tailwind tokens in `tailwind.config.ts`. To re-theme the whole site, edit the
values in `:root` and `.dark` blocks.

Default palette:

| Token      | Hex       | Use                                 |
| ---------- | --------- | ----------------------------------- |
| `brand`    | `#3b5724` | Primary (deep green)                |
| `secondary`| `#3D405B` | Secondary surface / muted contrast  |
| `cream`    | `#F2E9DC` | Light backgrounds / fg on dark      |
| `accent`   | `#F85E00` | Highlights, caret, focus rings      |
| `deepRed`  | `#90323D` | Destructive / emphasis              |

## Contact form (Resend)

Set these env vars in `.env.local` (and in Vercel for production):

```
RESEND_API_KEY=re_xxx
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL=onboarding@resend.dev  # or your verified domain
```

The API route (`src/app/api/contact/route.ts`) validates with zod, enforces a
basic in-memory rate limit, includes a honeypot field, and sends via Resend.

## Deploy

Push to GitHub, import the repo to [Vercel](https://vercel.com), set the env
vars above, and deploy. The app uses Node runtime for the contact API.

## Credits

- Hero fonts: [Inter](https://fonts.google.com/specimen/Inter) & [JetBrains Mono](https://www.jetbrains.com/lp/mono/).
- UI primitives based on [shadcn/ui](https://ui.shadcn.com).