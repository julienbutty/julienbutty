# Project Constitution: Julien Butty Portfolio

## Overview

This document establishes the governing principles and non-negotiable standards for the development of Julien Butty's freelance portfolio website. All implementation decisions must align with these principles.

---

## Article I: Design Philosophy

### I.1 Visual Identity

- The design MUST follow a "Resonant Stark" aesthetic: minimalist and clean with strategic "wahou" moments
- Dark mode MUST be the default theme
- Color accents MUST be used sparingly but impactfully (indigo/violet electric tones)
- Typography MUST establish clear visual hierarchy (Inter or Geist family)

### I.2 Animation Principles

- Animations MUST enhance user experience, not distract from content
- All animations MUST respect `prefers-reduced-motion` for accessibility
- Animations MUST be GPU-accelerated (transform, opacity) for performance
- Motion library (ex Framer Motion) is the PRIMARY animation solution

### I.3 Responsive Design

- Mobile-first approach is MANDATORY
- The site MUST be fully functional on all screen sizes (320px to 2560px)
- Touch interactions MUST be considered for all interactive elements

---

## Article II: Technical Standards

### II.1 Technology Stack

- **Framework**: React 18+ with TypeScript (strict mode)
- **Styling**: Tailwind CSS (utility-first, minimal custom CSS)
- **Build Tool**: Vite
- **Animation**: Motion (framer-motion)
- **Package Manager**: npm or pnpm

### II.2 Code Quality

- TypeScript strict mode is NON-NEGOTIABLE
- All components MUST be functional components with hooks
- Props MUST be typed with interfaces (not `any`)
- File naming: PascalCase for components, kebab-case for utilities
- Maximum component file size: 200 lines (split if larger)

### II.3 Performance Requirements

- Lighthouse Performance score MUST be > 90
- First Contentful Paint MUST be < 1.5s
- Total bundle size MUST be < 200KB gzipped (excluding fonts)
- Images MUST be lazy-loaded and optimized (WebP format preferred)

---

## Article III: Content Principles

### III.1 Messaging

- Content MUST be written in French (primary audience is local Lyon area)
- Tone MUST be professional yet approachable
- Technical jargon MUST be avoided in client-facing copy
- CTAs MUST be clear and action-oriented

### III.2 SEO Requirements

- Every page MUST have unique meta title and description
- Semantic HTML MUST be used (proper heading hierarchy)
- Schema.org LocalBusiness markup is REQUIRED
- All images MUST have meaningful alt text

### III.3 Accessibility (a11y)

- WCAG 2.1 AA compliance is the MINIMUM standard
- Color contrast ratio MUST meet AA standards (4.5:1 for normal text)
- All interactive elements MUST be keyboard accessible
- Focus states MUST be clearly visible

---

## Article IV: Project Structure

### IV.1 Directory Organization

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI elements (Button, Card, etc.)
│   └── sections/       # Page sections (Hero, Services, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utilities and helpers
├── styles/             # Global styles, Tailwind config
├── types/              # TypeScript type definitions
├── data/               # Static content data (services, experiences)
└── assets/             # Images, fonts, icons
```

### IV.2 Component Architecture

- Components MUST be self-contained and reusable where appropriate
- Business logic MUST be separated from presentation
- Shared state MUST use React Context or simple props drilling (no Redux for this scale)

---

## Article V: Development Workflow

### V.1 Git Practices

- Commits MUST follow conventional commit format
- Branch naming: `feature/[description]`, `fix/[description]`
- Main branch MUST always be deployable

### V.2 Testing Strategy

- Critical user flows SHOULD have basic integration tests
- Components with complex logic SHOULD have unit tests
- Manual testing on multiple browsers is REQUIRED before deployment

### V.3 Documentation

- README.md MUST include setup instructions
- Complex components SHOULD have JSDoc comments
- Environment variables MUST be documented

---

## Article VI: Deployment & Hosting

### VI.1 Hosting Requirements

- Static site hosting (Vercel, Netlify, or similar)
- HTTPS is MANDATORY
- Custom domain configuration required

### VI.2 CI/CD

- Automated builds on push to main
- Preview deployments for pull requests (if using Vercel/Netlify)

---

## Article VII: Legal & Privacy

### VII.1 RGPD Compliance

- No tracking without consent (prefer no analytics initially)
- Contact form MUST include privacy notice
- Mentions légales page is REQUIRED

### VII.2 Content Ownership

- All content MUST be original or properly licensed
- Client project descriptions MUST be anonymized (no NDA violations)

---

## Review Checklist

Before any feature is considered complete:

- [ ] Responsive on mobile, tablet, desktop
- [ ] Animations respect reduced-motion preference
- [ ] Lighthouse scores meet requirements
- [ ] Content is in French and error-free
- [ ] All interactive elements are keyboard accessible
- [ ] No TypeScript errors or warnings
- [ ] Code follows project structure conventions
