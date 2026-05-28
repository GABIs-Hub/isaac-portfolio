# Isaac Ogabi - Professional Portfolio

A modern, professionally designed portfolio website built with React, TypeScript, and modern animations. The site showcases construction engineering expertise with a clean, modular component architecture.

## 🎨 Design Philosophy

- **Professional Typography**: Geist (headings) + Syne (body) fonts for modern, readable design
- **Simplified Color Palette**: 3 primary colors (primary blue, secondary blue, accent gold) + neutrals
- **Liquid Glass Effects**: Smooth morphing glassmorphism animations in the hero section
- **Interactive Elements**: Click-to-expand skill cards with character-by-character typing animation
- **Responsive Design**: Fully responsive from mobile (480px) to desktop

## 📁 Project Structure

```
src/
├── components/              # All React components organized by feature
│   ├── Header/             # Navigation header
│   │   ├── Header.tsx
│   │   └── Header.css
│   ├── Hero/               # Landing section with liquid glass effects
│   │   ├── Hero.tsx
│   │   └── Hero.css
│   ├── About/              # About section with stats
│   │   ├── About.tsx
│   │   └── About.css
│   ├── Skills/             # Core competencies with typing animation
│   │   ├── Skills.tsx      # Main component + data
│   │   └── Skills.css
│   ├── Projects/           # Featured projects showcase
│   │   ├── Projects.tsx
│   │   └── Projects.css
│   ├── Experience/         # Professional journey timeline
│   │   ├── Experience.tsx
│   │   └── Experience.css
│   ├── Contact/            # Contact information section
│   │   ├── Contact.tsx
│   │   └── Contact.css
│   ├── Footer/             # Footer
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   ├── shared/             # Reusable utilities
│   │   ├── useTypingAnimation.ts  # Hook for character-by-character typing
│   │   ├── LiquidGlass.tsx        # Morphing glass component
│   │   ├── LiquidGlass.css
│   │   └── index.ts
│   └── index.ts            # Component exports
├── styles/                 # Global style system
│   ├── colors.css          # Centralized color variables
│   ├── typography.css      # Font imports & sizing rules
│   ├── animations.css      # Reusable @keyframes library
├── App.tsx                 # Main orchestrator (~25 lines)
├── App.css                 # Minimal wrapper styles
├── main.tsx                # React entry point
└── index.css               # Global imports

public/
├── favicon.svg

node_modules/
package.json
tsconfig.json
vite.config.ts
```

## 🎯 Key Components

### Header (`Header/`)
- Sticky navigation bar with smooth section scrolling
- Active section indicator with accent underline
- Professional branding with "IO" logo

### Hero (`Hero/`)
- Large, impactful title and subtitle
- Call-to-action buttons (Get In Touch, Learn More)
- **Liquid Glass shapes** - Three animated morphing glassmorphism elements
  - Smooth floating animations
  - Blur effect that pulses
  - Organic border-radius transformations

### Skills (`Skills/`)
- **6 Core Competencies** with professional Bootstrap Icons (not emojis)
- **Click-to-expand interaction**:
  - Clicking card opens modal overlay
  - Card title and description appear
  - Description types itself character-by-character
  - Close button or click outside to dismiss
- Smooth hover animations with scale and shadow effects

### Shared Utilities (`shared/`)
- **useTypingAnimation.ts**: React hook for typing effect
  - Configurable character speed (default 40ms)
  - Returns `{ displayedText, isComplete }`
  - Used by Skills modal for animated reveal

- **LiquidGlass.tsx**: Reusable morphing element
  - Configurable size and shape
  - Configurable animation delay
  - Used in Hero section with 3 instances

## 🎨 Design System

### Colors (`styles/colors.css`)
```css
--color-primary: #1a3a52        /* Deep blue */
--color-primary-light: #2c5f8d  /* Lighter blue */
--color-accent: #f0ad4e         /* Gold */
--color-white/light/light-gray/gray/dark-gray/text-dark/border/dark
```

### Typography (`styles/typography.css`)
- **Geist font** for all headings (h1-h6) - modern, clean
- **Syne font** for body text - friendly, readable
- Responsive font sizes that scale on mobile

### Animations (`styles/animations.css`)
- `@keyframes float` - Smooth vertical float
- `@keyframes liquidMorph` - Organic shape transformation
- `@keyframes glassBlur` - Pulsing blur effect
- `@keyframes slideUp` - Element entrance from bottom
- `@keyframes blink` - Cursor blink for typing animation
- And more...

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server (runs on http://localhost:5173 or 5174)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## ✨ Features

### Professional Interactions
- **Smooth scroll navigation** between sections
- **Active section tracking** in header
- **Hover animations** with transform and shadow effects
- **Modal animations** with fade-in and scale-up

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- ARIA-friendly interactive elements
- Keyboard navigation support
- Sufficient color contrast

### Performance
- Component-level code splitting
- Optimized animations using CSS @keyframes
- Minimal JavaScript overhead
- Responsive images (where applicable)

### Responsive Design
Breakpoints:
- Desktop: 1200px (max-width)
- Tablet: 768px
- Mobile: 480px

## 📱 Mobile Optimization

All sections adapt gracefully:
- Hero shapes hidden on mobile (visual focus)
- Single-column layouts
- Touch-friendly button sizes
- Optimized font sizes

## 🔧 Customization

### Add a New Section
1. Create folder in `src/components/NewSection/`
2. Create `NewSection.tsx` and `NewSection.css`
3. Import colors from `styles/colors.css`
4. Import animations from `styles/animations.css`
5. Add component to `App.tsx`

### Modify Colors
Edit `src/styles/colors.css` - all colors are centralized as CSS variables

### Adjust Animations
Edit `src/styles/animations.css` - all keyframes in one place

### Update Fonts
Edit `src/styles/typography.css` - change Google Fonts imports

## 📋 Icons

Uses **react-bootstrap-icons** for professional, scalable SVG icons:
- Diagram3 (BIM)
- CheckCircle (QA/QC)
- HardHat (Site Engineering)
- Box (Concrete)
- BarChart3 (Project Management)
- Boxes (Logistics)
- Envelope, Linkedin, GeoAlt (Contact)

## 🎬 Code Quality

- **TypeScript** for type safety
- **ESLint** for code standards
- **Component-based architecture** for maintainability
- **Clear separation of concerns** (components, styles, utilities)
- **Readable file organization** - easy to find and review code

---

**Built with React 19 + TypeScript 6 + Vite 8**
