# Changelog

## [Simplifié] - 2025-11-22

### ✅ Removed
- **Sanity CMS** - Not needed for static services
- Dependencies: `@sanity/client`, `@sanity/image-url`
- Sanity-related hooks and utilities
- Environment variables for Sanity

### ✅ Added
- **Static services data** in `src/data/services.ts`
- Simplified data structure
- Direct content editing (no CMS needed)

### 📊 Impact
- **Bundle size**: Reduced by ~20KB
- **Complexity**: Much simpler architecture
- **Maintenance**: Easier to update (edit TypeScript file)
- **Build time**: Faster (no CMS calls)
- **Dependencies**: Fewer (0 vulnerabilities)

### 🎯 Benefits
- ✅ No external service dependency
- ✅ Content versioned in Git
- ✅ Faster site (no API calls)
- ✅ Simpler deployment
- ✅ Developer-friendly editing

---

## [MVP Complete] - 2025-11-22

### ✅ Implemented
- React 18 + TypeScript 5 + Vite setup
- Tailwind CSS + Framer Motion
- Hero section with animations
- Services section (3 services)
- Contact form (Netlify Forms)
- Footer with social links
- Full responsive design
- WCAG 2.1 AA accessibility
- Production build optimized
