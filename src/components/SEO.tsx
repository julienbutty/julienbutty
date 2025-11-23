/**
 * SEO Component
 * Professional-grade SEO meta tags management
 * Includes: OpenGraph, Twitter Cards, Structured Data
 */

import { Helmet } from 'react-helmet-async'

export interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogType?: 'website' | 'article' | 'profile'
  ogImage?: string
  noindex?: boolean
  structuredData?: object
}

const defaultTitle = 'Julien Butty - Développeur Freelance à Lyon | React, Node.js, TypeScript'
const defaultDescription =
  'Développeur web freelance basé à Lyon. Création de sites web et applications sur-mesure avec React, Node.js et TypeScript. Disponible dans toute la Métropole de Lyon et à distance.'
const defaultOgImage = '/og-image.png' // You'll need to add this image
const siteUrl = 'https://julienbutty.fr' // Update with your actual domain

export function SEO({
  title,
  description = defaultDescription,
  canonical,
  ogType = 'website',
  ogImage = defaultOgImage,
  noindex = false,
  structuredData,
}: SEOProps) {
  const fullTitle = title || defaultTitle
  const pageTitle = title ? `${title} - Julien Butty` : defaultTitle
  const canonicalUrl = canonical || siteUrl

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Julien Butty - Développeur Freelance" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="FR-69" />
      <meta name="geo.placename" content="Lyon" />
      <meta name="geo.position" content="45.764043;4.835659" />
      <meta name="ICBM" content="45.764043, 4.835659" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  )
}
