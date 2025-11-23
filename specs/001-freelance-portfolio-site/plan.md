# Implementation Plan: Freelance Portfolio Website

**Branch**: `001-freelance-portfolio-site` | **Date**: 2025-11-22 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-freelance-portfolio-site/spec.md`

**User Requirements**: Easy deployment with advanced visual animations for an engaging visitor experience.

## Summary

Create a modern, animated portfolio website for Julien Butty, a fullstack developer in Lyon, targeting local PME and particuliers. The site must showcase services (WordPress to custom development), display portfolio projects, provide contact functionality, and deliver smooth animations while maintaining excellent performance. Technical approach: React + TypeScript SPA with Vite build, Tailwind CSS for styling, Framer Motion for animations, deployed to static hosting (Vercel/Netlify) with headless CMS for content management.

## Technical Context

**Language/Version**: TypeScript 5.x + React 18+
**Primary Dependencies**: React 18+, TypeScript 5.x, Vite (build tool), Tailwind CSS 3.x, Framer Motion (animations), Headless CMS (TBD - research needed)
**Storage**: Headless CMS for content (portfolio projects, services, about content, contact submissions)
**Testing**: Vitest + React Testing Library (unit/integration), manual browser testing
**Target Platform**: Modern web browsers (Chrome, Firefox, Safari, Edge - last 2 versions), mobile responsive (320px to 2560px)
**Project Type**: Single-page web application (SPA) with static site generation capability
**Performance Goals**:
  - Lighthouse Performance > 90
  - First Contentful Paint < 1.5s
  - Total bundle < 200KB gzipped (excluding fonts/images)
  - Page load within 3 seconds on standard broadband

**Constraints**:
  - Must support animations while respecting `prefers-reduced-motion`
  - Must be accessible (WCAG 2.1 AA)
  - Must be RGPD compliant (no tracking without consent)
  - Dark mode default with strategic color accents

**Scale/Scope**:
  - Single portfolio website (~5-7 pages/sections)
  - 5-10 portfolio projects initially
  - 3-5 service offerings
  - Low traffic initially (< 1000 visitors/month)
  - Content updates weekly/monthly (not real-time)

**User Priority**: Easy deployment + advanced animations balance. Solution must support:
  - One-command deployment to static hosting
  - No complex server infrastructure
  - Rich animations (parallax, scroll-triggered, micro-interactions)
  - GPU-accelerated animations for 60fps performance

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### ✅ Design Philosophy Compliance

- ✅ **I.1 Visual Identity**: "Resonant Stark" aesthetic planned - dark mode default, indigo/violet accents, Inter/Geist typography
- ✅ **I.2 Animation Principles**: Framer Motion for animations, `prefers-reduced-motion` support required, GPU-accelerated transforms
- ✅ **I.3 Responsive Design**: Mobile-first approach, 320px-2560px support, touch interactions considered

### ✅ Technical Standards Compliance

- ✅ **II.1 Technology Stack**: React 18+ ✓, TypeScript strict ✓, Tailwind CSS ✓, Vite ✓, Framer Motion ✓, npm/pnpm ✓
- ✅ **II.2 Code Quality**: TypeScript strict mode, functional components with hooks, typed interfaces, PascalCase/kebab-case naming, 200-line component limit
- ✅ **II.3 Performance Requirements**: Lighthouse > 90 ✓, FCP < 1.5s ✓, bundle < 200KB gzipped ✓, lazy-loaded WebP images ✓

### ✅ Content Principles Compliance

- ✅ **III.1 Messaging**: French primary language ✓, professional yet approachable tone ✓, avoid technical jargon ✓, clear CTAs ✓
- ✅ **III.2 SEO Requirements**: Unique meta tags ✓, semantic HTML ✓, Schema.org LocalBusiness markup ✓, meaningful alt text ✓
- ✅ **III.3 Accessibility**: WCAG 2.1 AA ✓, 4.5:1 contrast ✓, keyboard accessible ✓, visible focus states ✓

### ✅ Project Structure Compliance

- ✅ **IV.1 Directory Organization**: Following prescribed structure (components/ui, components/sections, hooks, lib, styles, types, data, assets)
- ✅ **IV.2 Component Architecture**: Self-contained reusable components, business/presentation separation, React Context for state (no Redux)

### ✅ Development Workflow Compliance

- ✅ **V.1 Git Practices**: Conventional commits ✓, feature/fix branches ✓, deployable main ✓
- ✅ **V.2 Testing Strategy**: Integration tests for critical flows ✓, unit tests for complex logic ✓, multi-browser manual testing ✓
- ✅ **V.3 Documentation**: README with setup ✓, JSDoc for complex components ✓, documented env vars ✓

### ✅ Deployment & Hosting Compliance

- ✅ **VI.1 Hosting Requirements**: Static hosting (Vercel/Netlify) ✓, HTTPS mandatory ✓, custom domain ✓
- ✅ **VI.2 CI/CD**: Automated builds on main ✓, preview deployments for PRs ✓

### ✅ Legal & Privacy Compliance

- ✅ **VII.1 RGPD Compliance**: No tracking without consent ✓, privacy notice in contact form ✓, mentions légales page ✓
- ✅ **VII.2 Content Ownership**: Original/licensed content ✓, anonymized client projects ✓

**Gate Status**: ✅ **PASSED** - All constitution requirements are met by the proposed technical approach.

## Project Structure

### Documentation (this feature)

```text
specs/001-freelance-portfolio-site/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output - CMS selection, animation patterns, deployment strategy
├── data-model.md        # Phase 1 output - Entity schemas for portfolio, services, contact
├── quickstart.md        # Phase 1 output - Local development setup instructions
├── contracts/           # Phase 1 output - CMS content schemas, contact form API
│   ├── content-schemas.json
│   └── contact-api.json
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── ui/              # Base components (Button, Card, Input, etc.)
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── index.ts
│   └── sections/        # Page sections (Hero, Services, Portfolio, About, Contact, Footer)
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Portfolio.tsx
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       └── index.ts
├── hooks/               # Custom React hooks
│   ├── useScrollAnimation.ts
│   ├── useContactForm.ts
│   └── useMediaQuery.ts
├── lib/                 # Utilities and helpers
│   ├── cms.ts           # CMS client/fetcher
│   ├── animations.ts    # Reusable animation variants
│   └── validators.ts    # Form validation logic
├── styles/              # Global styles, Tailwind config
│   ├── globals.css
│   └── tailwind.css
├── types/               # TypeScript type definitions
│   ├── portfolio.ts
│   ├── service.ts
│   ├── contact.ts
│   └── index.ts
├── data/                # Static/fallback content data
│   └── fallback.ts      # Fallback content if CMS unavailable
├── assets/              # Images, fonts, icons
│   ├── images/
│   └── fonts/
├── App.tsx              # Root component
└── main.tsx             # Entry point

public/                  # Static assets (favicon, robots.txt, etc.)
tests/
├── integration/         # Integration tests (user flows)
│   └── contact-form.test.tsx
└── unit/                # Unit tests (complex logic)
    └── validators.test.ts
```

**Structure Decision**: Single-page web application structure chosen because this is a frontend-only portfolio site with headless CMS backend. All content is fetched from CMS at build time or runtime. No custom backend API needed - CMS provides content API, contact form uses CMS form handling or serverless function. Structure follows constitution's prescribed directory organization (Article IV.1).

## Complexity Tracking

No constitution violations - no entries required.

## Phase 0: Research & Technology Selection

**Objective**: Resolve all technical unknowns and establish concrete technology decisions.

### Research Areas

1. **Headless CMS Selection**
   - **Question**: Which headless CMS best balances ease of use, cost, and deployment simplicity for a freelance portfolio?
   - **Considerations**:
     - Must be easy for non-technical user (Julien) to update content
     - Must support French language content
     - Must have generous free tier or low cost
     - Must integrate easily with React/Vite build
     - Must support image optimization
   - **Options to evaluate**: Sanity, Contentful, Strapi (self-hosted), Decap CMS (Git-based), Payload CMS, Tina CMS

2. **Animation Patterns & Best Practices**
   - **Question**: What are the most effective animation patterns for portfolio sites that balance visual impact with performance?
   - **Considerations**:
     - Hero section entrance animations
     - Scroll-triggered animations (intersection observer)
     - Portfolio project card hover effects
     - Page section transitions
     - Micro-interactions for CTAs
     - Mobile animation simplification
   - **Research**: Framer Motion best practices, performance optimization, reduced-motion fallbacks

3. **Deployment Strategy**
   - **Question**: Vercel vs Netlify for this specific use case?
   - **Considerations**:
     - Build times and deployment speed
     - Preview deployments
     - Form handling (for contact form)
     - Analytics/monitoring options
     - Custom domain setup
     - French region hosting (RGPD)
   - **Output**: Concrete deployment configuration

4. **Contact Form Handling**
   - **Question**: How to handle contact form submissions without custom backend?
   - **Options to evaluate**:
     - CMS built-in form handling
     - Netlify Forms / Vercel serverless functions
     - Third-party service (Formspree, etc.)
     - Email service integration
   - **Requirements**: Spam prevention, email notifications, RGPD compliance

5. **Image Optimization Strategy**
   - **Question**: Best approach for optimizing portfolio images (thumbnails, full-size, lazy loading)?
   - **Considerations**:
     - WebP format generation
     - Responsive images (srcset)
     - Lazy loading implementation
     - CMS image transformation capabilities
     - Build-time vs runtime optimization

6. **SEO & Schema Markup**
   - **Question**: Concrete implementation of LocalBusiness schema and meta tags in React SPA?
   - **Considerations**:
     - React Helmet or similar for meta tags
     - JSON-LD schema implementation
     - Sitemap generation
     - French language meta tags
     - Lyon location optimization

**Output**: `research.md` with decisions, rationale, and alternatives for each area.

## Phase 1: Design & Contracts

**Prerequisites**: `research.md` complete with all CMS, deployment, and architecture decisions made.

### 1.1 Data Model Design

**Input**: Key Entities from spec.md (Service, Portfolio Project, Contact Inquiry, About Content, Testimonial)

**Output**: `data-model.md` with:
- Entity schemas with field types, validation rules, relationships
- Content modeling for chosen CMS
- State management patterns (if needed beyond CMS data fetching)
- Image/media handling specifications

**Example entities to model**:
- Portfolio Project: title, slug, description, clientType, category[], thumbnail, images[], outcomes, technologies[]
- Service: name, slug, description, icon, useCases, pricingGuidance
- Contact Inquiry: name, email, message, serviceInterest, timestamp, status
- About Content: bio, photo, skills[], location, testimonials[]

### 1.2 API Contracts

**Input**: Functional requirements from spec.md, CMS selection from research.md

**Output**: `contracts/` directory with:
- `content-schemas.json`: CMS content type definitions (portfolio, services, about, testimonials)
- `contact-api.json`: Contact form submission API contract (request/response format, validation rules)
- Any additional API contracts for CMS queries (GraphQL/REST)

**Format**: OpenAPI 3.0 or GraphQL schema depending on CMS choice

### 1.3 Quickstart Documentation

**Output**: `quickstart.md` with:
- Prerequisites (Node version, npm/pnpm)
- Clone and install instructions
- Environment variables needed (.env.example)
- CMS setup steps (account creation, content model import)
- Local development server startup
- Build and preview commands
- Deployment instructions

### 1.4 Agent Context Update

**Action**: Run `.specify/scripts/bash/update-agent-context.sh claude` to update agent-specific context with:
- Technology stack: React 18+, TypeScript, Vite, Tailwind CSS, Framer Motion
- Chosen CMS and deployment platform
- Project structure conventions
- Constitution principles (animations, accessibility, performance)

## Phase 2: Task Generation

**Not executed by `/speckit.plan` - use `/speckit.tasks` command after planning is complete.**

The task generation phase will break down the implementation into dependency-ordered tasks based on:
- User stories from spec.md (P1 → P2 → P3 → P4)
- Technical architecture from this plan
- Data models and contracts from Phase 1
- Constitution compliance checklist

Expected task categories:
1. Project setup and configuration (Vite, TypeScript, Tailwind, ESLint)
2. UI component library (buttons, cards, inputs, typography)
3. Layout and navigation structure
4. CMS integration and data fetching
5. Hero section with animations
6. Services section
7. Portfolio section with filtering
8. About section
9. Contact form with validation and submission
10. Footer with legal links
11. SEO and meta tags
12. Accessibility audit and fixes
13. Performance optimization
14. Testing (integration + manual)
15. Deployment configuration and launch

## Success Validation

After implementation, validate against Success Criteria from spec.md:

- **SC-001**: Homepage loads in < 3s (measure with Lighthouse)
- **SC-002**: 95%+ device compatibility (test mobile, tablet, desktop)
- **SC-003**: Contact form 98%+ success rate (integration test + monitoring)
- **SC-004**: 5%+ conversion rate (analytics after launch)
- **SC-005**: Lighthouse "Good" score (measure mobile + desktop)
- **SC-006**: Google first page for "développeur freelance Lyon" (SEO tracking post-launch)
- **SC-007**: 90s+ session duration (analytics after launch)
- **SC-008**: 70%+ multi-section views (analytics after launch)
- **SC-009**: Accessibility validation passes (axe-core, manual testing)
- **SC-010**: Portfolio update in < 10 minutes (CMS usability test)
- **SC-011**: Mobile bounce rate < 60% (analytics after launch)
- **SC-012**: 80%+ qualified leads (manual review of submissions)

## Review Checklist

Before considering planning complete:

- [x] All NEEDS CLARIFICATION items have research tasks
- [x] Constitution gates evaluated and passed
- [x] Technical Context fully specified
- [x] Project structure follows constitution Article IV.1
- [x] User priority (easy deployment + animations) addressed in technical decisions
- [x] Phase 0 research areas clearly defined
- [x] Phase 1 deliverables specified (data-model, contracts, quickstart)
- [ ] Research.md generated (Phase 0 execution)
- [ ] Data model documented (Phase 1 execution)
- [ ] Contracts generated (Phase 1 execution)
- [ ] Quickstart guide written (Phase 1 execution)
- [ ] Agent context updated (Phase 1 execution)
