# Research Document: Freelance Portfolio Website Technology Selection

**Date**: 2025-11-22
**Feature**: 001-freelance-portfolio-site
**Purpose**: Document technology decisions and rationale for portfolio website implementation

---

## Executive Summary

This document consolidates research findings for three critical technology decisions:
1. **Headless CMS**: Sanity (chosen for ease of use, generous free tier, excellent image optimization)
2. **Deployment Platform**: Netlify (chosen for native form handling, RGPD compliance options, all-in-one solution)
3. **Animation Architecture**: Framer Motion with performance-first, accessibility-compliant patterns

All selections align with user requirements for easy deployment and advanced visual animations while maintaining the constitution's performance and accessibility standards.

---

## Decision 1: Headless CMS Selection

### Decision: **Sanity CMS**

### Rationale

Sanity is the optimal choice for this freelance portfolio website for the following key reasons:

**Ease of Use for Non-Technical Users**:
- Intuitive, customizable interface with drag-and-drop editing
- Live previews and real-time collaboration
- AI-assisted drafting makes content management accessible
- Once configured by developer, Julien can manage content without understanding frontend code

**French Language Support**:
- Unlimited locales on all plans including free tier
- Platform interface supports French
- Structured content model makes managing multilingual content straightforward

**Generous Free Tier**:
- 20 user seats (most generous among competitors)
- Unlimited content types and locales
- Real-time collaboration features
- Includes basic compute, API, and asset limits
- Full GDPR, SOC 2, PCI DSS, and CCPA compliance on free tier
- No credit card required to start

**React/TypeScript Integration**:
- Sanity Studio built with React
- First-class TypeScript support with schema-as-code configuration
- Straightforward integration with Vite
- Explicitly designed for modern JavaScript frameworks

**Image Optimization**:
- Industry-leading image pipeline
- Global CDN with automatic edge caching
- On-the-fly transformations (resize, crop, format conversion)
- Auto-format optimization (WebP, AVIF support)
- Hotspot and focal point features

**GDPR Compliance**:
- Fully GDPR-compliant on all plans
- SOC 2 Type 1 certification
- Runs on Google Cloud Platform with enterprise-grade security
- Custom data residency available on Enterprise plan

**Cost**: $0/month on free tier, $15/user/month if growth requires upgrade

### Alternatives Considered

**Tina CMS** ❌
- Pros: Git-based with visual editing, real-time preview, TypeScript support, $29/month team plan
- Cons: Smaller community, less mature image optimization, only 3 users on free tier vs Sanity's 20
- Why rejected: Sanity's superior image optimization, larger community, and more generous free tier

**Strapi (Self-Hosted)** ❌
- Pros: 100% open-source, free to self-host, good TypeScript support, large community
- Cons: Requires server hosting and maintenance, additional costs (€5-20/month), more DevOps overhead
- Why rejected: Self-hosting adds complexity and costs when Sanity offers zero-cost fully-managed solution with superior image CDN

**Payload CMS** ❌
- Pros: TypeScript-first with end-to-end type safety, built on Next.js, code-based configuration
- Cons: Must be self-hosted, requires managing database and storage, developer-centric (less friendly for non-technical users)
- Why rejected: Self-hosting requirements add complexity; overkill for freelance portfolio

**Decap CMS (formerly Netlify CMS)** ❌
- Pros: 100% free, Git-based, works with any static site generator, simple YAML config
- Cons: **No longer actively maintained** by Netlify, aging codebase, basic image handling
- Why rejected: Unmaintained software creates technical debt and security risks in 2025

**Contentful** ❌
- Pros: Enterprise-grade reliability, GDPR compliant, strong API, robust content modeling
- Cons: Very limited free tier (1 Starter Space), expensive paid plans ($300-489/month)
- Why rejected: Limited free tier and expensive plans unsuitable for freelance budget

### Implementation Notes

**Setup Flow**:
```bash
# Install Sanity CLI and create project
npm create sanity@latest -- --template clean --project-id YOUR_PROJECT_ID

# Install Sanity client for React/Vite
npm install @sanity/client @sanity/image-url
```

**Project Structure**:
- Sanity Studio deployed to sanity.io/manage (free hosting) or embedded in Vite app
- Use Sanity's TypeScript SDK for type-safe queries
- Implement GROQ queries (Sanity's query language) for fetching content
- Leverage `@sanity/image-url` for image optimization

**Content Schemas**:
- Portfolio projects (title, description, images, tech stack, links)
- Services (service name, description, pricing)
- About content (bio, skills, experience)
- Contact form submissions (optional - can use Netlify Forms instead)

**Setup Timeline**:
1. Create Sanity Project (15-30 minutes)
2. Configure Sanity Studio (1-2 hours)
3. Integrate with React/Vite (2-3 hours)
4. Deploy Studio (30 minutes)
5. Add Content & Test (1-2 hours)

**Potential Challenges**:
- Learning GROQ query language (mitigated by excellent documentation)
- Initial configuration complexity (mitigated by templates and examples)
- Free tier limits (unlikely to hit for portfolio scale)
- Contact form storage decision (store in Sanity or use Netlify Forms)

---

## Decision 2: Deployment Platform

### Decision: **Netlify**

### Rationale

For a React + TypeScript portfolio website targeting the French market, Netlify is the recommended choice:

**Built-in Form Handling**:
- Native form handling with 100 free submissions/month
- Perfect for portfolio contact form
- Eliminates need for third-party services

**Superior Free Tier for Static Sites**:
- 300 build minutes (sufficient for static portfolio updates)
- 100 GB bandwidth (ample for portfolio traffic)
- 125k serverless functions
- Automatic SSL certificates
- Global CDN

**Better RGPD Compliance Options**:
- Both Vercel and Netlify are US-based
- Netlify offers EU region locking through sales team
- Server-side analytics doesn't use cookies (more GDPR-friendly)

**All-in-One Solution**:
- Form handling, analytics, identity management built-in
- Reduces dependency on external services
- Simpler architecture

**Cost-Effective**:
- Free tier covers all portfolio needs
- $19/month Pro plan if scaling needed
- Vercel would require form service ($10-20/month) + hosting

**When Vercel Would Be Better**:
- Building Next.js app with SSR/ISR requirements
- Need more frequent builds (6,000 vs 300 minutes)
- Complex serverless function requirements

### Comparison Table

| Feature | Vercel | Netlify | Winner |
|---------|--------|---------|--------|
| Build Speed | Faster for large projects | Good for static sites | Vercel |
| Build Minutes (Free) | 6,000/month | 300/month | Vercel |
| Bandwidth (Free) | 100 GB/month | 100 GB/month | Tie |
| Form Handling | None (requires 3rd party) | Native, 100 free submissions | **Netlify** |
| Preview Deployments | Excellent | Excellent | Tie |
| Analytics | Client-side | Server-side, GDPR-compliant ($9/mo) | **Netlify** |
| EU/RGPD Compliance | DPF certified | US-based, EU region locking available | **Netlify** |
| Next.js Optimization | Best-in-class (SSR/ISR) | Limited SSR support | Vercel |
| Paid Plan Price | $20/user/month | $19/user/month | Netlify |

### Deployment Configuration

**netlify.toml**:
```toml
[build]
  command = "npm run build"
  publish = "dist"
  environment = { NODE_VERSION = "20" }

[build.environment]
  TZ = "Europe/Paris"

# SPA routing
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Security headers
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

# Cache static assets
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

**Environment Variables** (configure in Netlify Dashboard):
- `VITE_CMS_API_URL` - Sanity API endpoint
- `VITE_CMS_API_KEY` - Sanity API key (if required)
- `VITE_CMS_PROJECT_ID` - Sanity project ID
- `NODE_VERSION=20` - Node.js version

**Contact Form Implementation**:
```tsx
<form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <p className="hidden">
    <label>Don't fill this out: <input name="bot-field" /></label>
  </p>
  {/* Form fields */}
</form>
```

### RGPD Compliance

**Critical Steps**:
1. **Privacy Policy**: Add policy mentioning Netlify data processing (US-based)
2. **Cookie Consent**: Netlify Analytics is cookieless; add consent for any tracking
3. **Form Consent**: Add RGPD-compliant checkbox to forms
4. **Data Minimization**: Regularly delete old form submissions

**Consent Implementation**:
```tsx
<label>
  <input type="checkbox" name="rgpd-consent" required />
  J'accepte que mes données personnelles soient collectées et traitées
  conformément à la <a href="/politique-confidentialite">politique de confidentialité</a>
</label>
```

**Cost Projection**:
- Months 1-12: $0 (free tier sufficient for ~500-2,000 monthly visitors)
- If upgrading: $228/year ($19/month Pro plan)
- Vercel equivalent: $120-240/year (hosting + form service)

### Alternatives Considered

**Vercel** ❌
- Pros: Superior Next.js optimization, 6,000 build minutes, faster builds, excellent DX
- Cons: No native form handling, less favorable for RGPD, overkill for static sites
- Why rejected: Adds complexity for static portfolio; requires additional form service

**Cloudflare Pages** ❌
- Pros: Unlimited bandwidth, 500 builds/month, excellent CDN
- Cons: Less mature ecosystem, no native form handling

**GitHub Pages** ❌
- Pros: Completely free, simple deployment
- Cons: No server-side features (forms, functions), best for simple static sites only

---

## Decision 3: Animation Architecture

### Decision: **Framer Motion with Performance-First Patterns**

### Overall Strategy

Implement a performance-first, layered animation approach that progressively enhances UX while respecting accessibility:

1. **Transform-First Philosophy**: Prioritize GPU-accelerated properties (transform, opacity)
2. **Lazy Animation Loading**: Use `whileInView` to defer animations until elements enter viewport
3. **Reduced Motion First**: Build with `useReducedMotion` hook from the start
4. **Mobile-Adaptive**: Simplify or disable complex animations on mobile
5. **Performance Budget**: Keep entrance animations under 300ms, limit concurrent animations

### Animation Pattern Library

#### 1. Hero Entrance Animation

**Pattern**: Staggered fade-in with subtle slide-up for hero text and CTAs.

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};
```

**Performance**: Keep total animation under 1 second, use custom easing curves, stagger by 100-200ms max, only animate opacity and translateY.

#### 2. Scroll-Triggered Reveals

**Pattern**: Fade-in with subtle slide-up as elements enter viewport.

```typescript
<motion.section
  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  {children}
</motion.section>
```

**Performance**: Use `viewport={{ once: true }}` to prevent re-triggering, set `amount: 0.1-0.2` for early trigger, `whileInView` is more performant than manual Intersection Observer.

#### 3. Portfolio Card Hover Effects

**Pattern**: Multi-layered hover where different elements respond at slightly different timings.

```typescript
const cardVariants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  hover: {
    scale: shouldReduceMotion ? 1 : 1.03,
    y: shouldReduceMotion ? 0 : -8,
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};
```

**Performance**: Use scale and y transform (GPU-accelerated), keep hover animations 300-400ms, add slight delay to inner content (100ms), on mobile remove hover or convert to tap.

#### 4. Micro-interactions for CTAs

**Pattern**: Subtle scale, glow, or color shift on hover.

```typescript
<motion.button
  whileHover={{
    scale: shouldReduceMotion ? 1 : 1.05,
    transition: { duration: 0.2, ease: 'easeOut' }
  }}
  whileTap={{
    scale: shouldReduceMotion ? 1 : 0.95,
    transition: { duration: 0.1 }
  }}
>
  {children}
</motion.button>
```

**Performance**: Use `whileHover` and `whileTap` props (optimized internally), keep under 200ms, avoid complex effects on frequent interactions.

### Performance Best Practices

**GPU Acceleration**:
- Animate only transform and opacity properties (GPU-accelerated, no reflows)
- Use translate instead of left/top for positioning
- Use scale instead of width/height for size changes
- Force GPU acceleration with `translateZ(0)` sparingly

**Animation Limits**:
- Keep entrance animations under 300ms
- Limit concurrent animations to 3-4 maximum
- Use `once: true` in viewport to prevent re-triggering
- Avoid animating layout-triggering properties (width, height, padding, margin)

**Performance Budget**:
- Entrance animations: < 300ms
- Hover effects: 200-400ms
- Exit animations: < 200ms
- Scroll animations: 400-600ms (300ms on mobile)
- Target: 60fps on all devices

### Accessibility Implementation

**useReducedMotion Hook**:
```typescript
const shouldReduceMotion = useReducedMotion();

<motion.div
  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: shouldReduceMotion ? 0.01 : 0.6
  }}
/>
```

**When `shouldReduceMotion` is true**:
- Disable Y/X transforms - keep elements in place, fade only
- Reduce duration to near-instant (0.01s) or disable entirely
- Remove parallax effects completely
- Disable autoplay on background videos or carousels
- Keep opacity transitions (less problematic)
- Maintain hover states but remove motion (color change only)

### Mobile Animation Considerations

**Pattern**: Simplify animations for touch devices, remove hover effects, reduce animation complexity, shorten durations.

```typescript
const isMobile = useMediaQuery({ maxWidth: 768 });

const variants = {
  hidden: {
    opacity: 0,
    y: isMobile || shouldReduceMotion ? 0 : 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: isMobile ? 0.3 : 0.6
    }
  }
};
```

**Mobile-Specific Best Practices**:
- Shorter animations (200-300ms vs 400-600ms on desktop)
- Reduce or eliminate Y-axis transforms (save battery)
- Convert hover to tap/press interactions
- Consider disabling parallax and complex scroll effects
- Test on real devices, not just browser dev tools

### Reusable Animation Utilities

**src/lib/animations.ts**:
```typescript
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};
```

---

## Technology Stack Summary

**Final Stack**:
- **Frontend**: React 18+ + TypeScript 5.x + Vite
- **Styling**: Tailwind CSS 3.x
- **Animation**: Framer Motion
- **CMS**: Sanity (free tier)
- **Hosting**: Netlify (free tier)
- **Forms**: Netlify Forms (native)
- **Testing**: Vitest + React Testing Library
- **Package Manager**: npm or pnpm

**Estimated Monthly Cost**: €0 (all free tiers)

**Key Benefits**:
- Easy one-command deployment to Netlify
- No complex server infrastructure
- Rich animations (parallax, scroll-triggered, micro-interactions)
- GPU-accelerated animations for 60fps
- Excellent image optimization via Sanity CDN
- RGPD-compliant with EU region locking options
- Intuitive content management for Julien
- Full TypeScript type safety throughout stack

---

## Implementation Roadmap

### Phase 1: Project Setup (Day 1-2)
- Initialize Vite + React + TypeScript project
- Configure Tailwind CSS
- Set up ESLint, Prettier, Git hooks
- Create basic project structure per constitution

### Phase 2: CMS Integration (Day 3-4)
- Create Sanity project and configure schemas
- Set up Sanity Studio
- Implement data fetching utilities
- Configure image optimization

### Phase 3: Core Components (Day 5-8)
- Build UI component library (Button, Card, Input)
- Implement layout and navigation
- Create page sections (Hero, Services, Portfolio, About, Contact, Footer)

### Phase 4: Animation Implementation (Day 9-11)
- Implement scroll-triggered animations
- Add portfolio card hover effects
- Create hero entrance animation
- Add micro-interactions for CTAs
- Test on mobile and with reduced-motion

### Phase 5: Forms & Content (Day 12-14)
- Implement Netlify Forms contact form
- Add RGPD consent and privacy policy
- Populate CMS with initial content
- Test content management workflow

### Phase 6: SEO & Accessibility (Day 15-16)
- Add meta tags and Schema.org markup
- Implement accessibility improvements
- Test keyboard navigation and screen reader
- Add alt text and ARIA labels

### Phase 7: Testing & Optimization (Day 17-19)
- Run Lighthouse audits
- Optimize bundle size and images
- Write integration tests
- Test across browsers and devices

### Phase 8: Deployment & Launch (Day 20-21)
- Configure Netlify deployment
- Set up custom domain
- Final RGPD compliance check
- Launch and monitor

---

## Next Steps

1. ✅ Research complete - All technology decisions made
2. → Proceed to Phase 1: Data Model Design (data-model.md)
3. → Generate API contracts (contracts/)
4. → Create quickstart documentation (quickstart.md)
5. → Update agent context with technology stack
6. → Generate implementation tasks (tasks.md via /speckit.tasks)

---

## References

See individual research sections for detailed source citations. Key research conducted via web search in 2025 for:
- Headless CMS comparisons (Sanity, Contentful, Strapi, Tina, Payload, Decap)
- Deployment platform comparisons (Netlify, Vercel, Cloudflare Pages)
- Framer Motion best practices and animation patterns
- RGPD/GDPR compliance for French market
- Performance optimization techniques
- Accessibility implementation with reduced-motion
