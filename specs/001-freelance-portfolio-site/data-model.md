# Data Model: Freelance Portfolio Website

**Date**: 2025-11-22
**Feature**: 001-freelance-portfolio-site
**CMS**: Sanity
**Purpose**: Define content schemas, validation rules, and data relationships for portfolio content

---

## Overview

This document defines the data model for Julien Butty's freelance portfolio website. All entities are managed through Sanity CMS and consumed by the React frontend. The model supports the five key user stories: service discovery, portfolio showcase, professional brand experience, about/trust building, and content updates.

---

## Entity Schemas

### 1. Portfolio Project

Represents a completed client project showcased in the portfolio section.

**Schema Name**: `portfolioProject`
**Display Name**: "Portfolio Project"

#### Fields

| Field             | Type             | Required | Description                                 | Validation                                              |
| ----------------- | ---------------- | -------- | ------------------------------------------- | ------------------------------------------------------- |
| `title`           | string           | Yes      | Project title                               | Max 100 characters                                      |
| `slug`            | slug             | Yes      | URL-friendly identifier                     | Auto-generated from title, unique                       |
| `description`     | text             | Yes      | Brief project description (non-technical)   | 100-500 characters                                      |
| `fullDescription` | blockContent     | No       | Detailed project description with rich text | Max 2000 words                                          |
| `clientType`      | string (select)  | Yes      | Type of client                              | Options: "PME", "Particulier", "Association", "Startup" |
| `projectYear`     | number           | Yes      | Year completed                              | Min: 2015, Max: current year                            |
| `thumbnail`       | image            | Yes      | Project thumbnail image                     | Max 2MB, WebP/JPEG/PNG                                  |
| `images`          | array<image>     | No       | Additional project images                   | Max 6 images, max 2MB each                              |
| `categories`      | array<reference> | Yes      | Project categories                          | Min 1, max 3 references to Category                     |
| `technologies`    | array<string>    | No       | Technologies used (non-technical labels)    | Max 8 items, e.g., "WordPress", "Site sur mesure"       |
| `outcomes`        | array<string>    | Yes      | Results achieved for client                 | Min 1, max 5 items                                      |
| `featured`        | boolean          | No       | Display in featured section                 | Default: false                                          |
| `published`       | boolean          | Yes      | Show on live site                           | Default: true                                           |
| `order`           | number           | No       | Display order                               | For manual sorting                                      |

#### Relationships

- `categories` → Many-to-Many with `Category`
- Referenced by filters in Portfolio section

#### Validation Rules

- `slug` must be unique across all portfolio projects
- `categories` must contain at least 1 category
- `thumbnail` is required; alt text auto-generated from title if not provided
- `clientType` must be one of predefined options
- Non-technical language enforced in `description` and `outcomes`

#### Example Document

```json
{
  "_id": "project-001",
  "_type": "portfolioProject",
  "title": "Site vitrine pour restaurant lyonnais",
  "slug": { "current": "site-vitrine-restaurant-lyonnais" },
  "description": "Création d'un site web moderne pour mettre en valeur la carte et l'ambiance d'un restaurant traditionnel lyonnais.",
  "fullDescription": [
    {
      /* rich text blocks */
    }
  ],
  "clientType": "PME",
  "projectYear": 2024,
  "thumbnail": {
    "_type": "image",
    "asset": { "_ref": "image-abc123" },
    "alt": "Capture d'écran de la page d'accueil du site restaurant"
  },
  "images": [],
  "categories": [{ "_ref": "category-wordpress", "_type": "reference" }],
  "technologies": ["WordPress", "Design responsive"],
  "outcomes": [
    "Augmentation de 40% des réservations en ligne",
    "Site adapté aux mobiles pour les clients sur place"
  ],
  "featured": true,
  "published": true,
  "order": 1
}
```

---

### 2. Category

Represents a service category for filtering portfolio projects.

**Schema Name**: `category`
**Display Name**: "Category"

#### Fields

| Field         | Type   | Required | Description                              | Validation                |
| ------------- | ------ | -------- | ---------------------------------------- | ------------------------- |
| `name`        | string | Yes      | Category name                            | Max 50 characters, unique |
| `slug`        | slug   | Yes      | URL-friendly identifier                  | Auto-generated, unique    |
| `description` | text   | No       | Category description                     | Max 200 characters        |
| `icon`        | string | No       | Icon identifier (e.g., Lucide icon name) | Max 50 characters         |
| `order`       | number | No       | Display order                            | For manual sorting        |

#### Validation Rules

- `name` and `slug` must be unique
- Categories cannot be deleted if referenced by published projects

#### Example Document

```json
{
  "_id": "category-wordpress",
  "_type": "category",
  "name": "WordPress",
  "slug": { "current": "wordpress" },
  "description": "Sites web créés avec WordPress, CMS simple et efficace",
  "icon": "wordpress",
  "order": 1
}
```

**Predefined Categories**:

- WordPress
- Développement sur mesure
- E-commerce
- Refonte de site
- Site vitrine

---

### 3. Service

Represents a service offering displayed in the Services section.

**Schema Name**: `service`
**Display Name**: "Service"

#### Fields

| Field              | Type          | Required | Description                              | Validation                             |
| ------------------ | ------------- | -------- | ---------------------------------------- | -------------------------------------- |
| `name`             | string        | Yes      | Service name                             | Max 100 characters                     |
| `slug`             | slug          | Yes      | URL-friendly identifier                  | Auto-generated, unique                 |
| `shortDescription` | string        | Yes      | Brief one-liner description              | Max 150 characters                     |
| `description`      | blockContent  | Yes      | Detailed service description             | Max 1000 words, non-technical          |
| `icon`             | string        | No       | Icon identifier (e.g., Lucide icon name) | Max 50 characters                      |
| `useCases`         | array<string> | No       | Typical use cases or client types        | Max 5 items                            |
| `pricingGuidance`  | string        | No       | Pricing indication                       | E.g., "Sur devis", "À partir de 1500€" |
| `featured`         | boolean       | No       | Display prominently                      | Default: false                         |
| `published`        | boolean       | Yes      | Show on live site                        | Default: true                          |
| `order`            | number        | No       | Display order                            | For manual sorting                     |

#### Validation Rules

- `slug` must be unique
- Avoid technical jargon in `description` and `useCases`
- `pricingGuidance` should be non-specific (protect pricing strategy)

#### Example Document

```json
{
  "_id": "service-wordpress",
  "_type": "service",
  "name": "Site WordPress sur mesure",
  "slug": { "current": "site-wordpress-sur-mesure" },
  "shortDescription": "Un site web professionnel facile à mettre à jour vous-même",
  "description": [
    {
      /* rich text blocks */
    }
  ],
  "icon": "layout",
  "useCases": ["Site vitrine pour PME", "Blog professionnel", "Site associatif"],
  "pricingGuidance": "À partir de 2000€",
  "featured": true,
  "published": true,
  "order": 1
}
```

---

### 4. About Content

Represents Julien's professional information and branding (singleton document).

**Schema Name**: `aboutContent`
**Display Name**: "About Content"
**Type**: Singleton (only one document allowed)

#### Fields

| Field          | Type          | Required | Description                         | Validation                    |
| -------------- | ------------- | -------- | ----------------------------------- | ----------------------------- |
| `bio`          | blockContent  | Yes      | Professional bio/introduction       | Max 1000 words                |
| `profilePhoto` | image         | Yes      | Professional profile photo          | Max 2MB, WebP/JPEG            |
| `location`     | string        | Yes      | Location emphasis                   | Default: "Lyon, France"       |
| `skills`       | array<object> | No       | Skills and competencies             | See Skills Object below       |
| `experience`   | blockContent  | No       | Professional history highlights     | Max 500 words                 |
| `approach`     | blockContent  | No       | Approach to working with clients    | Max 500 words                 |
| `email`        | string        | Yes      | Contact email                       | Valid email format            |
| `phone`        | string        | No       | Contact phone number                | Optional                      |
| `socialLinks`  | array<object> | No       | Social media and professional links | See Social Links Object below |

#### Skills Object

| Field      | Type          | Required | Description                                  |
| ---------- | ------------- | -------- | -------------------------------------------- |
| `category` | string        | Yes      | Skill category (e.g., "Frontend", "Backend") |
| `items`    | array<string> | Yes      | Skills in category (non-technical labels)    |

#### Social Links Object

| Field      | Type            | Required | Description                               |
| ---------- | --------------- | -------- | ----------------------------------------- |
| `platform` | string (select) | Yes      | Platform name (LinkedIn, GitHub, Twitter) |
| `url`      | url             | Yes      | Profile URL                               |
| `display`  | boolean         | Yes      | Show on site                              |

#### Validation Rules

- Only one document of type `aboutContent` allowed
- `email` must be valid email format
- `profilePhoto` required with alt text
- `skills` items should use non-technical labels

#### Example Document

```json
{
  "_id": "about-julien",
  "_type": "aboutContent",
  "bio": [
    {
      /* rich text blocks */
    }
  ],
  "profilePhoto": {
    "_type": "image",
    "asset": { "_ref": "image-def456" },
    "alt": "Photo professionnelle de Julien Butty"
  },
  "location": "Lyon, France",
  "skills": [
    {
      "category": "Développement Web",
      "items": ["WordPress", "Sites sur mesure", "E-commerce"]
    },
    {
      "category": "Conception",
      "items": ["Design responsive", "Expérience utilisateur"]
    }
  ],
  "experience": [
    {
      /* rich text blocks */
    }
  ],
  "approach": [
    {
      /* rich text blocks */
    }
  ],
  "email": "julienbutty@gmail.com",
  "phone": "+33 6 XX XX XX XX",
  "socialLinks": [
    {
      "platform": "LinkedIn",
      "url": "https://linkedin.com/in/julienbutty",
      "display": true
    },
    {
      "platform": "GitHub",
      "url": "https://github.com/julienbutty",
      "display": true
    }
  ]
}
```

---

### 5. Testimonial

Represents client feedback and social proof.

**Schema Name**: `testimonial`
**Display Name**: "Testimonial"

#### Fields

| Field              | Type      | Required | Description                  | Validation                         |
| ------------------ | --------- | -------- | ---------------------------- | ---------------------------------- |
| `clientName`       | string    | Yes      | Client name or company name  | Max 100 characters                 |
| `clientRole`       | string    | No       | Client role/title            | Max 100 characters                 |
| `text`             | text      | Yes      | Testimonial text             | Max 500 characters                 |
| `projectReference` | reference | No       | Related portfolio project    | Reference to `portfolioProject`    |
| `clientPhoto`      | image     | No       | Client photo or company logo | Max 1MB                            |
| `featured`         | boolean   | No       | Display prominently          | Default: false                     |
| `published`        | boolean   | Yes      | Show on live site            | Default: false (requires approval) |
| `order`            | number    | No       | Display order                | For manual sorting                 |

#### Relationships

- `projectReference` → Optional reference to `portfolioProject`

#### Validation Rules

- Testimonials require explicit `published: true` to appear on site
- `text` should be authentic client feedback
- RGPD: Ensure client permission before publishing with name/photo

#### Example Document

```json
{
  "_id": "testimonial-001",
  "_type": "testimonial",
  "clientName": "Marie Dubois",
  "clientRole": "Gérante, Restaurant Le Lyonnais",
  "text": "Julien a créé un site web qui reflète parfaitement l'esprit de notre restaurant. Nos clients adorent consulter la carte en ligne et les réservations ont augmenté !",
  "projectReference": { "_ref": "project-001", "_type": "reference" },
  "clientPhoto": null,
  "featured": true,
  "published": true,
  "order": 1
}
```

---

### 6. Contact Inquiry

Represents a lead or inquiry submitted through the contact form.

**Schema Name**: `contactInquiry`
**Display Name**: "Contact Inquiry"
**Note**: This entity is optional - Netlify Forms can handle submissions instead.

#### Fields

| Field             | Type            | Required | Description                   | Validation                              |
| ----------------- | --------------- | -------- | ----------------------------- | --------------------------------------- |
| `name`            | string          | Yes      | Visitor name                  | Max 100 characters                      |
| `email`           | string          | Yes      | Visitor email                 | Valid email format                      |
| `phone`           | string          | No       | Visitor phone number          | Optional                                |
| `serviceInterest` | string (select) | No       | Which service inquiring about | Reference to Service names              |
| `message`         | text            | Yes      | Inquiry message               | Max 2000 characters                     |
| `submittedAt`     | datetime        | Yes      | Submission timestamp          | Auto-generated                          |
| `status`          | string (select) | Yes      | Inquiry status                | Options: "new", "responded", "archived" |
| `notes`           | text            | No       | Internal notes                | For Julien's use                        |
| `spam`            | boolean         | Yes      | Flagged as spam               | Default: false                          |

#### Validation Rules

- `email` must be valid format
- `status` defaults to "new" on submission
- `submittedAt` auto-generated on create
- Spam detection via honeypot field on frontend

#### Example Document

```json
{
  "_id": "inquiry-001",
  "_type": "contactInquiry",
  "name": "Pierre Martin",
  "email": "pierre.martin@example.fr",
  "phone": null,
  "serviceInterest": "Site WordPress sur mesure",
  "message": "Bonjour, je suis intéressé par la création d'un site pour ma PME...",
  "submittedAt": "2025-11-22T10:30:00Z",
  "status": "new",
  "notes": null,
  "spam": false
}
```

**Alternative Approach**: Use Netlify Forms for contact submissions (recommended). This avoids storing contact data in Sanity and simplifies RGPD compliance. Submissions go directly to email or Netlify dashboard.

---

### 7. Site Settings

Global site configuration and content (singleton document).

**Schema Name**: `siteSettings`
**Display Name**: "Site Settings"
**Type**: Singleton

#### Fields

| Field             | Type          | Required | Description                         | Validation                                           |
| ----------------- | ------------- | -------- | ----------------------------------- | ---------------------------------------------------- |
| `siteTitle`       | string        | Yes      | Site title                          | Default: "Julien Butty - Développeur Freelance Lyon" |
| `siteDescription` | text          | Yes      | Meta description                    | Max 160 characters                                   |
| `seoKeywords`     | array<string> | No       | SEO keywords                        | Max 10 items                                         |
| `ogImage`         | image         | No       | Open Graph image for social sharing | 1200x630px recommended                               |
| `footerText`      | blockContent  | No       | Footer content                      | Rich text                                            |
| `legalNotice`     | blockContent  | No       | Mentions légales content            | Required for RGPD                                    |
| `privacyPolicy`   | blockContent  | No       | Privacy policy content              | Required for RGPD                                    |
| `copyrightText`   | string        | No       | Copyright text                      | E.g., "© 2025 Julien Butty"                         |

#### Validation Rules

- Only one document of type `siteSettings` allowed
- `legalNotice` and `privacyPolicy` required for French legal compliance
- `siteDescription` max 160 characters for SEO

---

## Content Modeling for Sanity

### Sanity Schema Definitions

All schemas defined in TypeScript within Sanity Studio project:

```typescript
// schemas/portfolioProject.ts
export default {
  name: 'portfolioProject',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: (Rule) => Rule.required().max(100) },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    },
    { name: 'description', type: 'text', validation: (Rule) => Rule.required().min(100).max(500) },
    { name: 'fullDescription', type: 'blockContent' },
    // ... additional fields
  ],
}
```

### Content Type Relationships

```
Category (1) ←→ (Many) PortfolioProject
Service (referenced by) ← ContactInquiry
PortfolioProject (1) ← (Many) Testimonial
AboutContent (singleton)
SiteSettings (singleton)
```

---

## State Management Patterns

### CMS Data Fetching

**Pattern**: Fetch data at build time (Static Site Generation) with optional runtime revalidation.

**Implementation**:

```typescript
// src/lib/cms.ts
import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2025-11-22',
  useCdn: true, // For production (cached data)
})

// Fetch all published portfolio projects
export async function getPortfolioProjects() {
  return sanityClient.fetch(`
    *[_type == "portfolioProject" && published == true] | order(order asc, _createdAt desc) {
      _id,
      title,
      slug,
      description,
      clientType,
      projectYear,
      thumbnail,
      categories[]->{ name, slug },
      technologies,
      outcomes,
      featured
    }
  `)
}

// Fetch single project by slug
export async function getProjectBySlug(slug: string) {
  return sanityClient.fetch(
    `
    *[_type == "portfolioProject" && slug.current == $slug][0] {
      ...,
      categories[]->{ name, slug }
    }
  `,
    { slug }
  )
}

// Fetch all services
export async function getServices() {
  return sanityClient.fetch(`
    *[_type == "service" && published == true] | order(order asc) {
      _id,
      name,
      slug,
      shortDescription,
      description,
      icon,
      useCases,
      pricingGuidance,
      featured
    }
  `)
}

// Fetch about content (singleton)
export async function getAboutContent() {
  return sanityClient.fetch(`
    *[_type == "aboutContent"][0] {
      ...,
      skills[] { category, items }
    }
  `)
}

// Fetch testimonials
export async function getTestimonials() {
  return sanityClient.fetch(`
    *[_type == "testimonial" && published == true] | order(order asc) {
      _id,
      clientName,
      clientRole,
      text,
      featured,
      projectReference->{ title, slug }
    }
  `)
}
```

### Frontend State Management

**Pattern**: No global state management library needed. Use React Context for minimal shared state (theme, mobile menu), props drilling for component data.

**Rationale**: Portfolio site has simple state requirements. Avoid Redux/Zustand complexity per constitution (Article IV.2).

**Shared State (if needed)**:

```typescript
// src/contexts/AppContext.tsx
interface AppState {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export const AppContext = createContext<AppState>(/* ... */)
```

---

## Image/Media Handling

### Sanity Image Optimization

**Strategy**: Use Sanity's image CDN with `@sanity/image-url` for on-the-fly transformations.

**Implementation**:

```typescript
// src/lib/imageUrlBuilder.ts
import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './cms'

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// Usage in components:
// <img src={urlFor(project.thumbnail).width(600).format('webp').url()} />
```

**Optimization Patterns**:

- **Thumbnails**: `.width(400).height(300).format('webp')`
- **Hero images**: `.width(1920).quality(85).format('webp')`
- **Responsive images**: Generate multiple sizes with srcset
- **Lazy loading**: Use `loading="lazy"` attribute + Intersection Observer

**Example Component**:

```typescript
// src/components/ResponsiveImage.tsx
interface Props {
  image: any;
  alt: string;
  sizes: string;
}

export function ResponsiveImage({ image, alt, sizes }: Props) {
  const baseUrl = urlFor(image).format('webp');

  const srcSet = [
    `${baseUrl.width(400).url()} 400w`,
    `${baseUrl.width(800).url()} 800w`,
    `${baseUrl.width(1200).url()} 1200w`,
  ].join(', ');

  return (
    <img
      src={baseUrl.width(800).url()}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading="lazy"
    />
  );
}
```

---

## Validation Summary

### Client-Side Validation (React)

- Form inputs validated before submission (required fields, email format, character limits)
- Visual error messages for user feedback
- RGPD consent checkbox required

### CMS Validation (Sanity)

- Schema validation enforces data integrity (required fields, max lengths, unique constraints)
- Custom validation functions for business rules
- Preview mode for content editors before publishing

### Data Integrity Rules

- Slugs must be unique within content type
- Categories cannot be deleted if referenced by published projects
- Testimonials require explicit publish flag
- Contact inquiries auto-timestamped
- All images require alt text for accessibility

---

## RGPD Data Handling

### Personal Data Storage

**Contact Form Data**:

- **Recommended**: Use Netlify Forms (data stored in Netlify, not Sanity)
- **Alternative**: Store in Sanity with explicit consent, regular deletion schedule

**Testimonials**:

- Require explicit written client permission before publishing
- Allow client name anonymization if requested
- Provide mechanism to remove testimonial upon request

**Data Retention**:

- Contact inquiries: Delete after 12 months if no client relationship established
- Analytics: Use Netlify Analytics (cookieless, server-side)
- No tracking cookies without explicit consent

**User Rights** (GDPR):

- Right to access: Provide copy of stored data upon request
- Right to deletion: Remove data from CMS within 30 days
- Right to rectification: Allow updates to testimonials/contact info

---

## TypeScript Type Definitions

**src/types/portfolio.ts**:

```typescript
export interface PortfolioProject {
  _id: string
  title: string
  slug: { current: string }
  description: string
  fullDescription?: BlockContent
  clientType: 'PME' | 'Particulier' | 'Association' | 'Startup'
  projectYear: number
  thumbnail: SanityImage
  images?: SanityImage[]
  categories: Category[]
  technologies?: string[]
  outcomes: string[]
  featured?: boolean
}

export interface Category {
  _id: string
  name: string
  slug: { current: string }
  description?: string
  icon?: string
}

export interface Service {
  _id: string
  name: string
  slug: { current: string }
  shortDescription: string
  description: BlockContent
  icon?: string
  useCases?: string[]
  pricingGuidance?: string
  featured?: boolean
}

export interface AboutContent {
  bio: BlockContent
  profilePhoto: SanityImage
  location: string
  skills?: SkillCategory[]
  experience?: BlockContent
  approach?: BlockContent
  email: string
  phone?: string
  socialLinks?: SocialLink[]
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface SocialLink {
  platform: 'LinkedIn' | 'GitHub' | 'Twitter'
  url: string
  display: boolean
}

export interface Testimonial {
  _id: string
  clientName: string
  clientRole?: string
  text: string
  projectReference?: PortfolioProject
  featured?: boolean
}

// Sanity types
export interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  alt?: string
}

export type BlockContent = Array<{
  _type: 'block'
  children: Array<{ _type: string; text: string }>
  markDefs?: any[]
  style?: string
}>
```

---

## Next Steps

1. ✅ Data model defined
2. → Generate API contracts (contracts/content-schemas.json, contracts/contact-api.json)
3. → Create quickstart documentation (quickstart.md)
4. → Implement Sanity schemas in Studio project
5. → Create data fetching utilities in frontend
6. → Implement TypeScript types
