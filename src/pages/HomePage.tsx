/**
 * Home Page
 * Main landing page with all sections
 */

import { Hero, Services, AboutPreview, Contact } from '../components/sections'
import { SEO } from '../components/SEO'
import { localBusinessSchema, websiteSchema } from '../lib/structuredData'
import { useScrollToHash } from '../hooks/useScrollToHash'

export function HomePage() {
  // Handle hash navigation (e.g., /#contact)
  useScrollToHash()

  // Combine schemas for homepage
  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema, websiteSchema],
  }

  return (
    <>
      <SEO
        title="Julien Butty - Développeur Freelance à Lyon | React, Node.js, TypeScript"
        description="Développeur web freelance basé à Lyon. Création de sites web et applications sur-mesure avec React, Node.js et TypeScript. Disponible dans toute la Métropole de Lyon et à distance."
        canonical="https://julienbutty.fr/"
        structuredData={homeStructuredData}
      />
      <main id="main-content">
        <Hero />
        <Services />
        <AboutPreview />
        <Contact />
      </main>
    </>
  )
}
