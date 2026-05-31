# Isaac Ogabi — Portfolio
 
A bold, dark-themed, and fully responsive portfolio website for **Isaac Ogabi**, a Building Engineer, QA/QC Manager, and BIM Specialist based in Lagos, Nigeria. Built with React, TypeScript, Tailwind CSS v4, and Vite.
 
---
 
## Live Preview
 
> Run locally at `http://localhost:5173` after setup
 
---
 
## Tech Stack
 
| Tool | Version | Purpose |
|------|---------|---------|
| [React](https://react.dev) | 18+ | UI framework |
| [TypeScript](https://www.typescriptlang.org) | 5+ | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | **v4** | Utility-first styling |
| [Vite](https://vitejs.dev) | 6+ | Build tool & dev server |
| [Lucide React](https://lucide.dev) | Latest | Professional icon set |
| [Geist](https://vercel.com/font) | — | Headings font |
| [Syne](https://fonts.google.com/specimen/Syne) | — | Body & UI font |
 
---
 
## Design Language
 
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#07070E` | Page base |
| Surface | `#161820` | Section backgrounds |
| Card | `#1E2028` | Glass cards |
| Border | `#2A2D35` | Subtle dividers |
| Orange | `#E8751A` | Primary accent — all highlights |
| Text | `#F0F0F0` | Primary text |
| Muted | `#9CA3AF` | Secondary text |
| Dim | `#4B5563` | Tertiary / labels |
 
The palette is intentionally minimal — one accent color (orange) against a deep dark base. This keeps the design clean and industrial, fitting Isaac's field of work.
 
---
 
## Project Structure
 
```
isaac-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── About.tsx          # Bio, tagline, flagship project card (The Ark)
│   │   ├── Contact.tsx        # Email, LinkedIn, location
│   │   ├── Experience.tsx     # Career timeline with dot indicators
│   │   ├── Footer.tsx         # Page footer
│   │   ├── Header.tsx         # Sticky navbar with hamburger menu
│   │   ├── Hero.tsx           # Full-screen hero with animated stats
│   │   ├── Projects.tsx       # Featured project cards
│   │   └── Skills.tsx         # Technical skills + typewriter competency cards
│   ├── shared/                # Reusable utilities (Reveal, etc.)
│   ├── styles/                # Global CSS / animation tokens
│   ├── App.tsx                # Root — assembles all sections
│   ├── index.css              # Tailwind import + global styles
│   └── main.tsx               # React entry point
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```
 
---
 
## Getting Started
 
### Prerequisites
 
- [Node.js](https://nodejs.org) v18 or higher
- npm v9 or higher
### Installation
 
**1. Clone or download the project:**
 
```bash
git clone https://github.com/GABIs-Hub/isaac-portfolio.git
cd isaac-portfolio
```
 
**2. Install dependencies:**
 
```bash
npm install
```
 
**3. Install Tailwind CSS v4 and its Vite plugin:**
 
```bash
npm install -D tailwindcss @tailwindcss/vite
```
 
**4. Install Lucide icons:**
 
```bash
npm install lucide-react
```
 
**5. Start the development server:**
 
```bash
npm run dev
```
 
Open [http://localhost:5173](http://localhost:5173) in your browser.
 
---
 
## Tailwind CSS v4 Setup
 
> ⚠️ This project uses **Tailwind CSS v4** — the setup is different from v3.
> There is **no** `tailwind.config.js` and **no** PostCSS plugin needed.
 
### `vite.config.ts`
 
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
 
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```
 
### `src/index.css`
 
```css
@import "tailwindcss";
```
 
### `postcss.config.mjs`
 
```js
export default {}
```
 
> ⚠️ Keep `postcss.config.mjs` empty. Having both the Vite plugin and `@tailwindcss/postcss` active at the same time causes a conflict that breaks the build.
 
---
 
## Features
 
### Animations
 
| Animation | Trigger | Description |
|-----------|---------|-------------|
| Hero entrance | Page load | Name, role, and stats fade up in staggered sequence |
| Rule line | Page load | Orange divider grows left to right |
| Orb pulse | Continuous | Background glow breathes in the hero |
| Scroll reveal | Scroll into view | Every section fades up on enter via `IntersectionObserver` |
| Typewriter | Click on skill | Competency description types itself character by character |
| Cursor blink | Typewriter active | Blinking `|` cursor during type animation |
| Glass hover | Hover on card | Cards lift, glow, and brighten with orange border |
| Timeline dot | — | Filled dot = current role, outlined = past |
 
### Liquid Glass Cards
 
Cards use `backdrop-filter: blur(24px)` with a semi-transparent background and a subtle orange border glow on hover — giving a frosted glass depth effect without heavy visuals.
 
### Typewriter Skill Cards (Core Competencies)
 
Click any skill card to expand it. A description types itself out character by character at ~28ms per character with a blinking cursor. Clicking another card switches to it; clicking the same card collapses it. The animation uses a `useTypewriter` custom hook with `setInterval` under the hood — no external library.
 
---
 
## Sections
 
### Hero
Full-screen dark section with Isaac's name, role tags, a pulsing green "active" status dot referencing The Ark Legacy Project, and three key stats — Years Experience, Project Capacity, and Firms Served.
 
### About
Two-column layout: left side has his tagline, bio, and a 2×2 stat grid; right side features **The Ark Legacy Project** as a highlighted card with capacity, duration, role, and location metadata.
 
### Experience
Vertical timeline with orange-filled dots for current roles and outlined dots for past roles. All seven career entries from 2015 to present are listed in reverse chronological order.
 
### Skills
- **Technical Skills** — skill name + animated progress bar + percentage
- **Core Competencies** — glass cards with Lucide icons; clicking expands a typewriter description
### Projects
Featured project cards for The Ark Legacy Project, 6-Storey Complex, and University Infrastructure projects — each with role tags and a tag list.
 
### Certifications
2-column grid of 5 certification cards with numbered labels and hover orange border reveal.
 
### Contact
Centered dark section with direct email link, LinkedIn, and location.
 
---
 
## Customisation
 
### Updating Content
 
All data is defined at the top of each component file as typed constants. To update:
 
- **Experience** → `Experience.tsx` — edit the `EXPERIENCE` array
- **Skills** → `Skills.tsx` — edit `TECHNICAL_SKILLS` and `COMPETENCIES`
- **Projects** → `Projects.tsx` — edit the `PROJECTS` array
- **Certifications** → `About.tsx` or a dedicated `Certifications.tsx`
### Changing the Accent Color
 
Search the project for `#E8751A` (orange) and replace with your preferred hex. The color is used consistently as the single accent throughout.
 
### Adding Real Project Images
 
In `Projects.tsx`, find the placeholder div and replace with:
 
```tsx
<img
  src="/images/ark-legacy.jpg"
  alt="The Ark Legacy Project"
  className="w-full h-full object-cover"
/>
```
 
Place images in the `public/images/` folder.
 
---
 
## Build for Production
 
```bash
npm run build
```
 
Output goes to `dist/` — ready to deploy to Vercel, Netlify, or GitHub Pages.
 
### Deploy to Vercel
 
```bash
npm install -g vercel
vercel
```
 
### Deploy to Netlify
 
```bash
npm run build
# Drag and drop dist/ to app.netlify.com/drop
```
 
---
 
## Pre-Launch Checklist
 
- [ ] Verify email address in `Contact.tsx`
- [ ] Verify LinkedIn URL in `Contact.tsx`
- [ ] Add real project photos to `public/images/`
- [ ] Review and update skill percentages in `Skills.tsx`
- [ ] Move Google Fonts `<link>` to `index.html` for faster load
- [ ] Update copyright year in `Footer.tsx`
- [ ] Run `npm run build` and check `dist/` before deploying
---
 
## Credits
 
**Developer** — Gabi ([@GABIs-Hub](https://github.com/GABIs-Hub))
 
**Subject** — Isaac Ogabi, QA/QC Manager at Advanced Engineering Consultants, Lagos, Nigeria
[linkedin.com/in/isaac-ogabi](https://www.linkedin.com/in/isaac-ogabi)
 
---

## License

This project is licensed under the [MIT License](./LICENSE).

© 2025 Isaac Ogabi. Built by Gabi ([@GABIs-Hub](https://github.com/GABIs-Hub)).

License
This project is private and built for personal use. Not licensed for redistribution.
