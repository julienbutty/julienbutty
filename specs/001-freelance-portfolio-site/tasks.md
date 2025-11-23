# Tasks: Freelance Portfolio Website

**Input**: Design documents from `/specs/001-freelance-portfolio-site/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Tests are OPTIONAL - not included in this task list as they were not explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single-page web app structure**: `src/` at repository root
- All source code in `src/`, tests in `tests/`, public assets in `public/`
- Paths follow plan.md prescribed structure

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Initialize Vite + React + TypeScript project with npm init vite@latest
- [ ] T002 [P] Install core dependencies (react, react-dom, typescript, vite) in package.json
- [ ] T003 [P] Install Tailwind CSS and configure in tailwind.config.js
- [ ] T004 [P] Install Framer Motion for animations in package.json
- [ ] T005 [P] Install Sanity client (@sanity/client, @sanity/image-url) in package.json
- [ ] T006 [P] Configure TypeScript strict mode in tsconfig.json
- [ ] T007 [P] Setup ESLint and Prettier in .eslintrc.cjs and .prettierrc
- [ ] T008 Create project directory structure (src/components/ui, src/components/sections, src/hooks, src/lib, src/styles, src/types, src/data, src/assets, public, tests)
- [ ] T009 [P] Create environment variables template in .env.example
- [ ] T010 [P] Configure Vite for React in vite.config.ts
- [ ] T011 [P] Setup global styles in src/styles/globals.css
- [ ] T012 [P] Configure Tailwind utilities in src/styles/tailwind.css
- [ ] T013 [P] Create README.md with project overview and setup instructions
- [ ] T014 [P] Create netlify.toml with build configuration
- [ ] T015 [P] Setup git repository and create .gitignore for node_modules, .env.local, dist

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T016 Create Sanity project and configure schemas for all entities (portfolioProject, category, service, aboutContent, testimonial, siteSettings)
- [ ] T017 [P] Define TypeScript types in src/types/portfolio.ts for PortfolioProject, Category
- [ ] T018 [P] Define TypeScript types in src/types/service.ts for Service
- [ ] T019 [P] Define TypeScript types in src/types/contact.ts for ContactInquiry
- [ ] T020 [P] Define TypeScript types in src/types/about.ts for AboutContent, Testimonial
- [ ] T021 [P] Define TypeScript types in src/types/common.ts for SanityImage, BlockContent
- [ ] T022 [P] Create TypeScript type exports in src/types/index.ts
- [ ] T023 Create Sanity client configuration in src/lib/cms.ts
- [ ] T024 [P] Create image URL builder utility in src/lib/imageUrlBuilder.ts
- [ ] T025 [P] Create reusable animation variants in src/lib/animations.ts (fadeInUp, staggerContainer, scaleOnHover)
- [ ] T026 [P] Create form validation utilities in src/lib/validators.ts
- [ ] T027 [P] Create useScrollAnimation hook in src/hooks/useScrollAnimation.ts
- [ ] T028 [P] Create useMediaQuery hook in src/hooks/useMediaQuery.ts (for responsive behavior)
- [ ] T029 [P] Create useReducedMotion hook integration (from Framer Motion)
- [ ] T030 Create base UI components - Button in src/components/ui/Button.tsx
- [ ] T031 [P] Create base UI components - Card in src/components/ui/Card.tsx
- [ ] T032 [P] Create base UI components - Input in src/components/ui/Input.tsx
- [ ] T033 [P] Create base UI components - Textarea in src/components/ui/Textarea.tsx
- [ ] T034 [P] Create base UI component exports in src/components/ui/index.ts
- [ ] T035 Create responsive image component in src/components/ResponsiveImage.tsx
- [ ] T036 Create root App component structure in src/App.tsx
- [ ] T037 Create main entry point in src/main.tsx with React.StrictMode
- [ ] T038 [P] Setup Sanity Studio project and deploy to sanity.io/manage
- [ ] T039 [P] Populate Sanity with initial categories (WordPress, Développement sur mesure, E-commerce, Refonte de site, Site vitrine)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Service Discovery and Contact (Priority: P1) 🎯 MVP

**Goal**: Enable potential clients to understand services, see expertise, and contact Julien

**Independent Test**: Visit homepage, read service descriptions, successfully submit contact form. All core content visible and contact mechanism works.

### Implementation for User Story 1

- [ ] T040 [P] [US1] Create data fetching function getServices() in src/lib/cms.ts
- [ ] T041 [P] [US1] Create data fetching function getAboutContent() in src/lib/cms.ts (for contact info)
- [ ] T042 [P] [US1] Create fallback content for services in src/data/fallback.ts
- [ ] T043 [US1] Create Hero section component in src/components/sections/Hero.tsx with entrance animations
- [ ] T044 [US1] Add hero section animations (staggered fade-in, slide-up) using Framer Motion variants
- [ ] T045 [P] [US1] Create Services section component in src/components/sections/Services.tsx
- [ ] T046 [US1] Create ServiceCard component in src/components/ServiceCard.tsx with hover effects
- [ ] T047 [US1] Integrate getServices() to fetch and display services in Services section
- [ ] T048 [P] [US1] Create useContactForm hook in src/hooks/useContactForm.ts with validation
- [ ] T049 [US1] Create Contact section component in src/components/sections/Contact.tsx
- [ ] T050 [US1] Implement contact form with Netlify Forms integration (data-netlify="true", honeypot field)
- [ ] T051 [US1] Add form validation (required fields, email format, RGPD consent checkbox)
- [ ] T052 [US1] Add form error handling and success messages
- [ ] T053 [US1] Display contact info (email, phone, social links) from Sanity aboutContent
- [ ] T054 [P] [US1] Create Footer component in src/components/sections/Footer.tsx with copyright and legal links
- [ ] T055 [US1] Integrate all sections into App.tsx (Hero, Services, Contact, Footer)
- [ ] T056 [US1] Add scroll-triggered animations for Services and Contact sections
- [ ] T057 [US1] Ensure mobile responsiveness for all User Story 1 components (test 320px-768px)
- [ ] T058 [US1] Verify accessibility (keyboard navigation, form labels, focus states) for contact form
- [ ] T059 [US1] Test contact form submission end-to-end (fill form, submit, verify Netlify receives)

**Checkpoint**: At this point, User Story 1 should be fully functional - homepage with services and working contact form

---

## Phase 4: User Story 2 - Portfolio and Credibility Assessment (Priority: P2)

**Goal**: Enable clients to see concrete examples of past work to assess fit

**Independent Test**: Navigate to portfolio section, view project cards, read case studies, filter by category. All portfolio functionality works independently.

### Implementation for User Story 2

- [ ] T060 [P] [US2] Create data fetching function getPortfolioProjects() in src/lib/cms.ts
- [ ] T061 [P] [US2] Create data fetching function getCategories() in src/lib/cms.ts (for filters)
- [ ] T062 [P] [US2] Create fallback portfolio data in src/data/fallback.ts
- [ ] T063 [US2] Create Portfolio section component in src/components/sections/Portfolio.tsx
- [ ] T064 [US2] Create PortfolioCard component in src/components/PortfolioCard.tsx with hover animations
- [ ] T065 [US2] Implement portfolio grid layout with responsive columns (1 col mobile, 2 col tablet, 3 col desktop)
- [ ] T066 [US2] Add multi-layered hover effects to portfolio cards (scale, shadow, content reveal)
- [ ] T067 [US2] Create category filter UI with active state styling
- [ ] T068 [US2] Implement portfolio filtering by category (update displayed projects on filter click)
- [ ] T069 [US2] Create project detail modal/page for viewing full project information
- [ ] T070 [US2] Display project thumbnail images with Sanity image optimization (WebP, lazy loading)
- [ ] T071 [US2] Show project details (title, description, clientType, outcomes, technologies) without technical jargon
- [ ] T072 [US2] Add staggered reveal animation when portfolio cards enter viewport
- [ ] T073 [US2] Integrate Portfolio section into App.tsx after Services section
- [ ] T074 [US2] Test portfolio filtering (select category, verify correct projects shown)
- [ ] T075 [US2] Test portfolio responsiveness on mobile, tablet, desktop
- [ ] T076 [US2] Verify image optimization (check WebP format, lazy loading, srcset for responsive images)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently - full homepage with contact + portfolio showcase

---

## Phase 5: User Story 3 - Professional Brand Experience (Priority: P3)

**Goal**: Deliver engaging, modern, performant website experience with advanced animations

**Independent Test**: Evaluate page transitions, scroll animations, loading performance, aesthetic. Animations smooth, performant, accessible.

### Implementation for User Story 3

- [ ] T077 [P] [US3] Create scroll progress indicator component in src/components/ScrollProgress.tsx
- [ ] T078 [P] [US3] Implement smooth scroll behavior for navigation
- [ ] T079 [US3] Add parallax effects to hero section (subtle background movement)
- [ ] T080 [US3] Create micro-interactions for CTA buttons (scale on hover/tap, color shift)
- [ ] T081 [US3] Add page section transition animations (fade-in with slide-up on scroll)
- [ ] T082 [US3] Implement mobile-adaptive animations (simplify on mobile, convert hover to tap)
- [ ] T083 [US3] Add reduced-motion support for all animations (check prefers-reduced-motion)
- [ ] T084 [US3] Create loading skeleton/spinner for async content loading
- [ ] T085 [US3] Optimize animation performance (GPU acceleration, limit concurrent animations)
- [ ] T086 [US3] Add visual polish (gradient accents, shadows, smooth transitions)
- [ ] T087 [US3] Implement dark mode theme with indigo/violet color accents (per constitution)
- [ ] T088 [US3] Add Inter or Geist font family and configure typography scale
- [ ] T089 [US3] Test animations on real mobile devices (not just browser devtools)
- [ ] T090 [US3] Run Lighthouse audit and verify Performance > 90, FCP < 1.5s
- [ ] T091 [US3] Verify reduced-motion fallbacks work (disable animations when prefers-reduced-motion: reduce)
- [ ] T092 [US3] Test loading performance on throttled network (3G, 4G simulation)

**Checkpoint**: At this point, all visual polish and animations complete - professional brand experience delivered

---

## Phase 6: User Story 4 - About and Trust Building (Priority: P3)

**Goal**: Build personal connection and trust through bio, skills, location emphasis, testimonials

**Independent Test**: Read about section, verify bio/skills clear, see Lyon emphasis, view testimonials. Trust-building content present and authentic.

### Implementation for User Story 4

- [ ] T093 [P] [US4] Create data fetching function getTestimonials() in src/lib/cms.ts
- [ ] T094 [P] [US4] Create fallback about content in src/data/fallback.ts
- [ ] T095 [US4] Create About section component in src/components/sections/About.tsx
- [ ] T096 [US4] Display professional bio from Sanity with rich text rendering
- [ ] T097 [US4] Show profile photo with Sanity image optimization
- [ ] T098 [US4] Display skills organized by category (e.g., "Développement Web", "Conception")
- [ ] T099 [US4] Emphasize Lyon location and local business understanding in copy
- [ ] T100 [US4] Create SkillsList component with staggered list animation
- [ ] T101 [P] [US4] Create Testimonials component in src/components/Testimonials.tsx
- [ ] T102 [US4] Display client testimonials with names, roles, quotes
- [ ] T103 [US4] Add testimonial carousel or grid layout
- [ ] T104 [US4] Show social links (LinkedIn, GitHub) if available from aboutContent
- [ ] T105 [US4] Integrate About section into App.tsx after Portfolio section
- [ ] T106 [US4] Add scroll-triggered animations for About section (fade-in biography, staggered skills)
- [ ] T107 [US4] Test About section responsiveness (bio readable, skills well-organized on mobile)
- [ ] T108 [US4] Verify all images have alt text for accessibility

**Checkpoint**: At this point, all client-facing content complete - full portfolio website with trust-building elements

---

## Phase 7: User Story 5 - Content Updates (Priority: P4)

**Goal**: Enable Julien to update content without code changes via Sanity CMS

**Independent Test**: Log into Sanity Studio, add/edit portfolio project, verify changes appear on live site. CMS workflow smooth and under 10 minutes.

### Implementation for User Story 5

- [ ] T109 [P] [US5] Verify all Sanity schemas are properly configured in Sanity Studio
- [ ] T110 [P] [US5] Configure Sanity Studio UI customizations (field groups, preview panes)
- [ ] T111 [US5] Setup content preview mode in Sanity Studio (live preview of changes)
- [ ] T112 [US5] Create Sanity Studio deployment configuration
- [ ] T113 [US5] Deploy Sanity Studio to sanity.io/manage (or embed in app)
- [ ] T114 [US5] Document CMS workflow in quickstart.md (how to add project, edit services)
- [ ] T115 [US5] Configure CORS for Sanity API (allow production domain)
- [ ] T116 [US5] Setup webhooks for content updates (optional - trigger rebuild on publish)
- [ ] T117 [US5] Test complete CMS workflow (add project, publish, verify appears on site)
- [ ] T118 [US5] Verify Julien can update portfolio project in under 10 minutes
- [ ] T119 [US5] Test editing services, about content, testimonials via Sanity Studio
- [ ] T120 [US5] Verify all CMS changes reflect on live site (with or without rebuild)

**Checkpoint**: At this point, Julien has full content management capabilities - website is fully functional and maintainable

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: SEO, accessibility, performance, legal compliance, deployment

- [ ] T121 [P] Create SEO meta tags component in src/components/SEO.tsx (react-helmet or similar)
- [ ] T122 [P] Add unique meta title and description for homepage
- [ ] T123 [P] Implement Schema.org LocalBusiness JSON-LD markup in public/index.html
- [ ] T124 [P] Add OpenGraph and Twitter Card meta tags for social sharing
- [ ] T125 [P] Generate sitemap.xml in public/ directory
- [ ] T126 [P] Create robots.txt in public/ directory
- [ ] T127 [P] Add French language meta tags (lang="fr", hreflang)
- [ ] T128 [P] Optimize all images (convert to WebP, set proper sizes)
- [ ] T129 [P] Implement lazy loading for all images
- [ ] T130 [P] Add loading="lazy" and proper alt text to all images
- [ ] T131 [P] Create Mentions Légales page content in Sanity siteSettings
- [ ] T132 [P] Create Privacy Policy page content in Sanity siteSettings (RGPD compliance)
- [ ] T133 [P] Add legal pages (Mentions Légales, Privacy Policy) to footer links
- [ ] T134 [P] Add RGPD-compliant privacy notice to contact form
- [ ] T135 [P] Configure Netlify redirects for SPA routing in netlify.toml
- [ ] T136 [P] Add security headers in netlify.toml (X-Frame-Options, CSP, etc.)
- [ ] T137 [P] Setup environment variables in Netlify dashboard (VITE_SANITY_PROJECT_ID, etc.)
- [ ] T138 Run accessibility audit with axe-core or Lighthouse (verify WCAG 2.1 AA compliance)
- [ ] T139 Fix any accessibility issues (color contrast, keyboard navigation, focus states)
- [ ] T140 Run Lighthouse performance audit (verify Performance > 90, Accessibility > 90, Best Practices > 90, SEO > 90)
- [ ] T141 Optimize bundle size (analyze with vite-bundle-visualizer, remove unused code)
- [ ] T142 Verify bundle is < 200KB gzipped (excluding fonts/images)
- [ ] T143 Test on multiple browsers (Chrome, Firefox, Safari, Edge latest versions)
- [ ] T144 Test on real mobile devices (iOS Safari, Android Chrome)
- [ ] T145 Test keyboard navigation (Tab through all interactive elements, Enter to submit forms)
- [ ] T146 Test with screen reader (VoiceOver on Mac or NVDA on Windows)
- [ ] T147 Verify all forms have proper labels and error messages
- [ ] T148 Test contact form spam prevention (honeypot field catches bots)
- [ ] T149 Verify all animations respect prefers-reduced-motion setting
- [ ] T150 Create deployment guide in README.md (Netlify setup, env vars, custom domain)
- [ ] T151 Deploy to Netlify and verify production build works
- [ ] T152 Configure custom domain and SSL certificate
- [ ] T153 Verify Netlify Forms receives submissions in production
- [ ] T154 Setup Netlify build notifications (Slack or email on deploy success/failure)
- [ ] T155 Final manual QA checklist (run through all user stories, verify all acceptance criteria)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-7)**: All depend on Foundational phase completion
  - User stories can proceed in parallel (if staffed)
  - Or sequentially in priority order (US1 → US2 → US3 → US4 → US5)
- **Polish (Phase 8)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independent of US1
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Enhances US1/US2 but independent
- **User Story 4 (P3)**: Can start after Foundational (Phase 2) - Independent of other stories
- **User Story 5 (P4)**: Can start after Foundational (Phase 2) - Enables content updates for all stories

### Within Each User Story

- Data fetching functions before components that use them
- UI components before sections that compose them
- Core functionality before animations/polish
- Basic implementation before responsive/accessibility enhancements
- Story complete and testable before moving to next priority

### Parallel Opportunities

**Phase 1 (Setup)**: T002-T015 all marked [P] can run in parallel

**Phase 2 (Foundational)**:
- TypeScript types (T017-T022) can all run in parallel
- Utilities (T024-T026) can run in parallel after T023
- Hooks (T027-T029) can run in parallel
- Base UI components (T030-T034) can run in parallel
- T038-T039 (Sanity setup) can run in parallel with frontend tasks

**User Story Phases**:
- Once Foundational completes, all user stories (US1-US5) can start in parallel if team capacity allows
- Within each user story, tasks marked [P] can run in parallel

**Phase 8 (Polish)**: Most tasks marked [P] can run in parallel (SEO, legal pages, image optimization)

---

## Parallel Example: User Story 1

```bash
# These tasks can run in parallel within US1:
T040 [P] [US1] Create data fetching function getServices()
T041 [P] [US1] Create data fetching function getAboutContent()
T042 [P] [US1] Create fallback content for services
T048 [P] [US1] Create useContactForm hook
T054 [P] [US1] Create Footer component

# After data fetching is ready, these can run in parallel:
T045 [P] [US1] Create Services section component
T049 [US1] Create Contact section component (depends on useContactForm from T048)
```

---

## Parallel Example: User Story 2

```bash
# These tasks can run in parallel within US2:
T060 [P] [US2] Create data fetching function getPortfolioProjects()
T061 [P] [US2] Create data fetching function getCategories()
T062 [P] [US2] Create fallback portfolio data

# After data fetching ready:
T064 [US2] Create PortfolioCard component (can start early)
T063 [US2] Create Portfolio section (uses PortfolioCard)
```

---

## Parallel Example: Multiple User Stories

```bash
# After Foundational Phase (T039) completes, launch all user stories in parallel:

# Team Member A works on User Story 1:
Task: "Create Hero section component in src/components/sections/Hero.tsx"

# Team Member B works on User Story 2:
Task: "Create Portfolio section component in src/components/sections/Portfolio.tsx"

# Team Member C works on User Story 4:
Task: "Create About section component in src/components/sections/About.tsx"

# All stories integrate independently into App.tsx when complete
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T015)
2. Complete Phase 2: Foundational (T016-T039) - CRITICAL, blocks all stories
3. Complete Phase 3: User Story 1 (T040-T059)
4. **STOP and VALIDATE**: Test User Story 1 independently
   - Visit homepage
   - Read service descriptions
   - Submit contact form
   - Verify all works on mobile
5. Deploy to Netlify and demo
6. **MVP ACHIEVED** - Functional portfolio website with contact capability

### Incremental Delivery

1. **Foundation**: Setup (T001-T015) + Foundational (T016-T039) → Foundation ready
2. **MVP**: Add User Story 1 (T040-T059) → Test independently → Deploy/Demo
   - Deliverable: Homepage with services + contact form
3. **Credibility**: Add User Story 2 (T060-T076) → Test independently → Deploy/Demo
   - Deliverable: + Portfolio showcase with filtering
4. **Polish**: Add User Story 3 (T077-T092) → Test independently → Deploy/Demo
   - Deliverable: + Advanced animations and performance
5. **Trust**: Add User Story 4 (T093-T108) → Test independently → Deploy/Demo
   - Deliverable: + About section with bio/testimonials
6. **Maintainability**: Add User Story 5 (T109-T120) → Test independently → Deploy/Demo
   - Deliverable: + Full CMS content management
7. **Launch**: Complete Phase 8 (T121-T155) → Final polish → Production launch
   - Deliverable: SEO, accessibility, legal compliance, optimized

Each increment adds value without breaking previous functionality.

### Parallel Team Strategy

With 3-4 developers:

1. **Week 1**: Team completes Setup + Foundational together (T001-T039)
2. **Week 2**: Once Foundational done, split team:
   - Developer A: User Story 1 (T040-T059)
   - Developer B: User Story 2 (T060-T076)
   - Developer C: User Story 4 (T093-T108)
3. **Week 3**:
   - Developer A: User Story 3 (T077-T092)
   - Developer B: User Story 5 (T109-T120)
   - Developer C: Start Phase 8 (T121-T140)
4. **Week 4**: Team collaborates on Phase 8 polish and testing (T141-T155)
5. Stories complete and integrate independently, final QA and launch

---

## Task Summary

**Total Tasks**: 155

**By Phase**:
- Phase 1 (Setup): 15 tasks
- Phase 2 (Foundational): 24 tasks
- Phase 3 (US1 - Service Discovery & Contact): 20 tasks
- Phase 4 (US2 - Portfolio & Credibility): 17 tasks
- Phase 5 (US3 - Professional Brand Experience): 16 tasks
- Phase 6 (US4 - About & Trust Building): 16 tasks
- Phase 7 (US5 - Content Updates): 12 tasks
- Phase 8 (Polish & Cross-Cutting): 35 tasks

**Parallel Opportunities**: 47 tasks marked [P] can run in parallel within their phase

**Independent User Stories**: All 5 user stories can be tested independently after completion

**Suggested MVP Scope**: Phase 1 + Phase 2 + Phase 3 (User Story 1) = 59 tasks for functional MVP

---

## Notes

- [P] tasks = different files, no dependencies within phase
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group of related tasks
- Stop at any checkpoint to validate story independently before proceeding
- Follow constitution guidelines: TypeScript strict, 200-line component limit, PascalCase components
- Avoid premature abstraction - build what's needed for current story
- Test on real devices, not just browser devtools (especially mobile)
- Use conventional commit messages (feat:, fix:, docs:, style:, refactor:, test:, chore:)
