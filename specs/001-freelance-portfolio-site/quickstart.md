# Quickstart Guide: Freelance Portfolio Website

**Last Updated**: 2025-11-22
**Feature**: 001-freelance-portfolio-site
**Tech Stack**: React 18+ + TypeScript + Vite + Tailwind CSS + Framer Motion + Sanity CMS

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20.x or higher ([Download](https://nodejs.org/))
- **npm** or **pnpm**: Package manager (npm comes with Node.js, or install pnpm via `npm install -g pnpm`)
- **Git**: Version control ([Download](https://git-scm.com/))
- **Code Editor**: VS Code recommended ([Download](https://code.visualstudio.com/))

**Recommended VS Code Extensions**:
- ESLint
- Prettier - Code formatter
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)

---

## 1. Clone and Install

### Clone the Repository

```bash
# Clone the repository
git clone <REPOSITORY_URL>
cd julienbutty

# Checkout the feature branch
git checkout 001-freelance-portfolio-site
```

### Install Dependencies

```bash
# Using npm
npm install

# Or using pnpm
pnpm install
```

This will install all frontend dependencies including:
- React 18+
- TypeScript 5.x
- Vite
- Tailwind CSS
- Framer Motion
- Sanity Client
- React Testing Library

---

## 2. Environment Variables

Create a `.env.local` file in the project root (copy from `.env.example` if available):

```bash
# Create .env.local file
cp .env.example .env.local
```

### Required Environment Variables

Add the following variables to `.env.local`:

```env
# Sanity CMS Configuration
VITE_SANITY_PROJECT_ID=your_sanity_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2025-11-22
VITE_SANITY_USE_CDN=true

# Optional: Sanity Token (only needed for preview mode or authenticated requests)
# VITE_SANITY_TOKEN=your_sanity_token

# Site Configuration
VITE_SITE_URL=http://localhost:5173
```

**Where to find these values**:
- `VITE_SANITY_PROJECT_ID`: Find in Sanity Studio dashboard → Project Settings
- `VITE_SANITY_DATASET`: Usually "production" (default)
- `VITE_SANITY_API_VERSION`: Use today's date in YYYY-MM-DD format

---

## 3. Sanity CMS Setup

### Create Sanity Project

1. **Sign up for Sanity** (if you haven't already): [https://www.sanity.io/](https://www.sanity.io/)
   - Free tier includes 20 users, unlimited content, and basic usage limits

2. **Create a new Sanity project**:

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Create new Sanity Studio project
npm create sanity@latest

# Follow the prompts:
# - Project name: "Julien Butty Portfolio"
# - Dataset: "production"
# - Template: "Clean project"
```

3. **Note your Project ID** from the output - you'll need it for `.env.local`

### Configure Sanity Schemas

1. Navigate to your Sanity Studio directory (if created separately) or integrate schemas directly in the project

2. Create schema files based on `specs/001-freelance-portfolio-site/data-model.md`:
   - `portfolioProject.ts`
   - `category.ts`
   - `service.ts`
   - `aboutContent.ts`
   - `testimonial.ts`
   - `siteSettings.ts`

3. Example schema structure:

```typescript
// sanity/schemas/portfolioProject.ts
export default {
  name: 'portfolioProject',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    // ... additional fields per data-model.md
  ]
}
```

4. Register schemas in `sanity.config.ts`:

```typescript
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemas} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Julien Butty Portfolio',
  projectId: 'your_project_id',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
})
```

### Deploy Sanity Studio

```bash
# Deploy Studio to sanity.io/manage (free hosting)
npm run deploy

# Or run locally
npm run dev
```

Sanity Studio will be available at `https://your-project.sanity.studio/` or `http://localhost:3333`

### Populate Initial Content

1. Open Sanity Studio (deployed or local)
2. Create at least:
   - 3-5 Categories (WordPress, Développement sur mesure, E-commerce, etc.)
   - 1 About Content document (your bio, photo, skills)
   - 3-5 Services
   - 3-5 Portfolio Projects
   - 1-2 Testimonials (optional)
   - 1 Site Settings document

---

## 4. Local Development

### Start Development Server

```bash
# Using npm
npm run dev

# Or using pnpm
pnpm dev
```

The development server will start at **http://localhost:5173**

### Verify CMS Connection

Open your browser and navigate to `http://localhost:5173`. You should see:
- ✅ Homepage loads without errors
- ✅ Content from Sanity CMS displays (services, portfolio, about)
- ✅ Images load from Sanity CDN

**Troubleshooting**:
- If you see "Failed to fetch" errors, verify `.env.local` has correct Sanity credentials
- If images don't load, check Sanity project permissions (allow CORS for localhost)

### Development Commands

```bash
# Start dev server
npm run dev

# Run type checking
npm run type-check

# Run linter
npm run lint

# Format code
npm run format

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

---

## 5. Build and Preview

### Build for Production

```bash
# Create optimized production build
npm run build

# Output will be in /dist directory
```

### Preview Production Build Locally

```bash
# Preview the built site
npm run preview

# Site will be available at http://localhost:4173
```

### Verify Build Quality

Run Lighthouse audit:
1. Open preview site in Chrome
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Run audit for "Performance", "Accessibility", "Best Practices", "SEO"
5. Verify all scores are > 90 (per constitution requirements)

---

## 6. Deployment to Netlify

### Option A: Deploy via Netlify Dashboard (Recommended for First Deployment)

1. **Create Netlify Account**: Sign up at [https://www.netlify.com/](https://www.netlify.com/)

2. **Connect Repository**:
   - Click "Add new site" → "Import an existing project"
   - Select Git provider (GitHub, GitLab, Bitbucket)
   - Authorize Netlify and select your repository
   - Select branch: `001-freelance-portfolio-site` or `main`

3. **Configure Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Click "Show advanced" → "New variable" to add environment variables:
     - `NODE_VERSION`: `20`
     - `VITE_SANITY_PROJECT_ID`: `your_project_id`
     - `VITE_SANITY_DATASET`: `production`
     - `VITE_SANITY_API_VERSION`: `2025-11-22`
     - `VITE_SANITY_USE_CDN`: `true`

4. **Deploy**:
   - Click "Deploy site"
   - Netlify will build and deploy your site
   - You'll get a temporary URL like `https://random-name-123.netlify.app`

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify site (first time only)
netlify init

# Follow prompts:
# - Create & configure a new site
# - Choose team
# - Site name: julienbutty (or custom)
# - Build command: npm run build
# - Publish directory: dist

# Deploy
netlify deploy --prod
```

### Configure Custom Domain

1. In Netlify Dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain (e.g., `julienbutty.fr`)
4. Follow DNS configuration instructions:
   - Add A record pointing to Netlify load balancer
   - Or add CNAME record for subdomain
5. Wait for DNS propagation (can take up to 48 hours)
6. Netlify will automatically provision SSL certificate (HTTPS)

### Configure Netlify Forms

Forms are automatically detected from HTML. Ensure your contact form includes:

```html
<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <!-- form fields -->
</form>
```

View form submissions in Netlify Dashboard → Forms

---

## 7. Testing

### Unit Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Integration Tests

```bash
# Run integration tests (e.g., contact form submission)
npm run test:integration
```

### Manual Testing Checklist

Before deploying to production, manually test:

- [ ] **Homepage loads** in < 3 seconds
- [ ] **All sections visible**: Hero, Services, Portfolio, About, Contact, Footer
- [ ] **Animations work** (scroll-triggered reveals, hover effects)
- [ ] **Animations respect reduced-motion** (test in browser accessibility settings)
- [ ] **Responsive design** on mobile (375px), tablet (768px), desktop (1920px)
- [ ] **Contact form submits** successfully
- [ ] **Form validation** works (required fields, email format)
- [ ] **RGPD consent checkbox** required before submission
- [ ] **Portfolio filters** work (category selection)
- [ ] **Images load** and are optimized (WebP format)
- [ ] **All links work** (social media, external links, email)
- [ ] **Keyboard navigation** works (tab through interactive elements)
- [ ] **Screen reader accessible** (test with NVDA or VoiceOver)

### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

---

## 8. Common Issues & Troubleshooting

### Issue: "Cannot find module '@sanity/client'"

**Solution**: Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Sanity images not loading

**Solution**: Configure CORS in Sanity dashboard
1. Go to Sanity dashboard → API → CORS Origins
2. Add your local and production URLs:
   - `http://localhost:5173`
   - `https://your-site.netlify.app`
   - `https://julienbutty.fr`

### Issue: Environment variables not working

**Solution**: Ensure `.env.local` exists and has `VITE_` prefix
- Vite only exposes variables starting with `VITE_`
- Restart dev server after changing `.env.local`

### Issue: Build fails with TypeScript errors

**Solution**: Run type checking locally
```bash
npm run type-check
# Fix reported errors before building
```

### Issue: Animations not working on mobile

**Solution**: Check browser compatibility and performance
- Ensure device supports GPU acceleration
- Simplify animations for low-powered devices
- Test on real device, not just browser devtools

### Issue: Contact form not submitting

**Solution**: Verify Netlify Forms configuration
- Ensure `data-netlify="true"` attribute exists
- Check form has `name` attribute
- Verify hidden `form-name` input exists
- Check Netlify dashboard for form detection

---

## 9. Project Structure Reference

```
julienbutty/
├── src/
│   ├── components/
│   │   ├── ui/              # Base UI components (Button, Card, Input)
│   │   └── sections/        # Page sections (Hero, Services, Portfolio, etc.)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities (CMS client, animations, validators)
│   ├── styles/              # Global styles, Tailwind config
│   ├── types/               # TypeScript type definitions
│   ├── data/                # Static/fallback content
│   ├── assets/              # Images, fonts
│   ├── App.tsx              # Root component
│   └── main.tsx             # Entry point
├── public/                  # Static assets (favicon, robots.txt)
├── tests/                   # Test files
│   ├── integration/
│   └── unit/
├── specs/                   # Feature specifications (this directory)
│   └── 001-freelance-portfolio-site/
│       ├── spec.md
│       ├── plan.md
│       ├── research.md
│       ├── data-model.md
│       ├── quickstart.md    # This file
│       └── contracts/
├── .env.example             # Example environment variables
├── .env.local               # Your local environment variables (git-ignored)
├── netlify.toml             # Netlify configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md                # Project README
```

---

## 10. Next Steps

After completing the quickstart:

1. **Review the Constitution**: Read `.specify/memory/constitution.md` for project standards
2. **Implement Features**: Follow tasks in `specs/001-freelance-portfolio-site/tasks.md` (generated via `/speckit.tasks`)
3. **Content Population**: Add real portfolio projects, services, and bio content in Sanity Studio
4. **SEO Optimization**: Configure meta tags, Schema.org markup, sitemap
5. **Legal Compliance**: Create "Mentions légales" and "Politique de confidentialité" pages
6. **Analytics Setup**: Consider Netlify Analytics ($9/mo) or Google Analytics (with RGPD consent)
7. **Performance Optimization**: Run Lighthouse audits and optimize based on recommendations
8. **Launch Checklist**: Complete pre-launch checklist before going live

---

## 11. Useful Resources

### Documentation

- **React**: [https://react.dev/](https://react.dev/)
- **TypeScript**: [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- **Vite**: [https://vitejs.dev/guide/](https://vitejs.dev/guide/)
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [https://www.framer.com/motion/](https://www.framer.com/motion/)
- **Sanity**: [https://www.sanity.io/docs](https://www.sanity.io/docs)
- **Netlify**: [https://docs.netlify.com/](https://docs.netlify.com/)

### Tools

- **Lighthouse**: Performance auditing (built into Chrome DevTools)
- **axe DevTools**: Accessibility testing ([Chrome Extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd))
- **React DevTools**: React component inspection ([Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi))
- **Sanity Vision**: GROQ query playground (built into Sanity Studio)

### Community

- **React Community**: [Discord](https://discord.gg/react)
- **Sanity Community**: [Slack](https://slack.sanity.io/)
- **Netlify Community**: [Discord](https://discord.gg/netlify)

---

## Support

If you encounter issues not covered in this guide:

1. Check the [Troubleshooting section](#8-common-issues--troubleshooting)
2. Review error messages carefully (often contain solution hints)
3. Search project documentation in `specs/` directory
4. Consult official documentation for the relevant technology
5. Check GitHub Issues or community forums

**Project Maintainer**: Julien Butty
**Last Updated**: 2025-11-22
