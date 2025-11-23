# SEO Professional Setup - Julien Butty Portfolio

## ✅ Implemented (Automatically)

### 1. **React Helmet Async** - Meta Tags Management

- ✅ Installed and configured
- ✅ SEO component created (`/src/components/SEO.tsx`)
- ✅ Supports: Title, Description, OG Tags, Twitter Cards, Geo Tags

### 2. **Structured Data (Schema.org)**

- ✅ LocalBusiness schema for local SEO
- ✅ Person schema for About page
- ✅ WebSite schema for homepage
- ✅ Breadcrumb schema for navigation
- ✅ FAQPage schema ready

### 3. **Technical SEO**

- ✅ Sitemap.xml created (`/public/sitemap.xml`)
- ✅ Robots.txt created (`/public/robots.txt`)
- ✅ Canonical URLs on all pages
- ✅ Geo-location meta tags for Lyon

### 4. **Pages with SEO**

- ✅ HomePage - Full structured data (LocalBusiness + WebSite)
- ✅ AboutPage - Person schema + Breadcrumbs
- 🔄 FAQ - Needs FAQPage schema (see below)
- 🔄 MentionsLegales - Needs noindex tag

---

## 🔧 Manual Tasks Required

### 1. **Domain Configuration**

Update the domain in these files (replace `julienbutty.fr` with your actual domain):

- `/src/components/SEO.tsx` (line 12)
- `/src/lib/structuredData.ts` (line 6)
- `/public/sitemap.xml` (all URLs)
- `/public/robots.txt` (line 8)

### 2. **Add Images for SEO**

Create and add these images to `/public/`:

- `og-image.png` (1200x630px) - For social sharing
- `logo.png` (512x512px) - For structured data
- `profile.jpg` (800x800px) - Your photo for Person schema

### 3. **Contact Information**

Update in `/src/lib/structuredData.ts`:

- Line 24: Add your phone number (format: `+33-X-XX-XX-XX-XX`)

### 4. **Google Business Profile** ⭐ Critical

1. Go to https://business.google.com
2. Create a profile:
   - Business name: Julien Butty - Développeur Freelance
   - Address: Lozanne 69380 (your real address)
   - Service area: Lyon, Villeurbanne, Métropole de Lyon
   - Category: Développeur de sites Web
   - Add photos, description, services
3. Verify your business (Google will send a postcard)

### 5. **Netlify Configuration**

Create `/public/_headers` file:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Cache-Control: public, max-age=31536000, immutable
```

Create `/public/_redirects` file:

```
# Force HTTPS
http://julienbutty.fr/* https://julienbutty.fr/:splat 301!
http://www.julienbutty.fr/* https://julienbutty.fr/:splat 301!

# SPA fallback
/*    /index.html   200
```

### 6. **Google Search Console**

1. Go to https://search.google.com/search-console
2. Add property: `https://julienbutty.fr`
3. Verify ownership (HTML file method recommended)
4. Submit sitemap: `https://julienbutty.fr/sitemap.xml`

### 7. **Directory Listings** (Backlinks + Local SEO)

Register on:

- Malt: https://www.malt.fr (Set location to Lyon)
- Codeur.com: https://www.codeur.com
- PagesJaunes: https://www.pagesjaunes.fr
- Yelp France: https://fr.yelp.fr

### 8. **Analytics** (Optional but recommended)

Install Google Analytics 4:

```bash
npm install react-ga4
```

Then add to `/src/main.tsx`:

```typescript
import ReactGA from 'react-ga4'
ReactGA.initialize('G-XXXXXXXXXX') // Your GA4 ID
```

---

## 📊 SEO Checklist

### On-Page SEO ✅

- [x] Unique title tags on each page
- [x] Meta descriptions (150-160 characters)
- [x] H1 tag on each page (semantic HTML)
- [x] Alt text on images
- [x] Internal linking
- [x] Mobile-responsive
- [x] Fast loading (Vite optimized)

### Technical SEO ✅

- [x] HTTPS (via Netlify)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Canonical URLs
- [x] Structured data (JSON-LD)
- [x] Open Graph tags
- [x] Twitter Cards

### Local SEO 🔄

- [x] Geo meta tags
- [x] LocalBusiness schema
- [x] Lyon mentioned in content
- [ ] Google Business Profile (manual)
- [ ] Local directories (manual)
- [ ] Reviews (over time)

### Performance ✅

- [x] Lazy loading images
- [x] Minified CSS/JS (Vite)
- [x] Gzip compression (Netlify)
- [x] CDN (Netlify)

---

## 🚀 Expected Results

### Timeline:

- **Week 1-2**: Google indexes the site
- **Month 1**: Appears in "Julien Butty" searches
- **Month 2-3**: Appears in "développeur freelance Lyon" (page 3-5)
- **Month 6+**: Page 1-2 for local searches with reviews

### Key Metrics to Track:

- Google Search Console impressions
- Organic traffic (Google Analytics)
- Keyword rankings (use Ubersuggest or SE Ranking)
- Google Business Profile views

---

## 💡 Content Strategy (Future)

To boost SEO over time:

1. Add a blog section
2. Write 1 article/month about:
   - "Combien coûte un site web à Lyon en 2025"
   - "React vs WordPress : quel choix pour votre projet"
   - "Les 5 erreurs à éviter quand on crée son site"
3. Internal linking to services
4. Get client testimonials (rich snippets)

---

## 🔍 Testing Your SEO

### Tools to use:

- https://search.google.com/test/rich-results (structured data)
- https://www.opengraph.xyz (Open Graph preview)
- https://pagespeed.web.dev (Core Web Vitals)
- https://validator.schema.org (schema validation)

### Quick checks:

```bash
# View structured data in browser
View Source → Search for "application/ld+json"

# Check robots.txt
https://julienbutty.fr/robots.txt

# Check sitemap
https://julienbutty.fr/sitemap.xml
```

---

## ⚠️ Important Notes

1. **Domain**: Update all instances of `julienbutty.fr` with your actual domain
2. **Images**: SEO won't be complete without social sharing images
3. **Google Business**: This is THE most important thing for local SEO
4. **Patience**: SEO takes 2-6 months to show results
5. **Updates**: Keep sitemap dates updated when you modify content

---

## 📞 Need Help?

If you need to debug SEO issues:

1. Check browser console for errors
2. Use Google Search Console's URL Inspection tool
3. Validate structured data with Google's Rich Results Test
4. Check mobile-friendliness with Google's Mobile-Friendly Test

Good luck! 🚀
