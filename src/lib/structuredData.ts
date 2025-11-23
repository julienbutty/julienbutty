/**
 * Structured Data (Schema.org) for SEO
 * Google-optimized JSON-LD schemas
 */

const siteUrl = 'https://julienbutty.fr' // Update with your actual domain

/**
 * LocalBusiness Schema - Critical for local SEO
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteUrl}/#organization`,
  name: 'Julien Butty - Développeur Freelance',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`, // Add your logo
  image: `${siteUrl}/og-image.jpg`,
  description:
    'Développeur web freelance spécialisé en React, Node.js et TypeScript. Création de sites web et applications sur-mesure à Lyon et partout en France.',
  priceRange: 'Sur devis',
  telephone: '+33-X-XX-XX-XX-XX', // Add your phone number
  email: 'julienbutty@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lozanne', // Keep vague for privacy
    addressLocality: 'Lyon',
    addressRegion: 'Auvergne-Rhône-Alpes',
    postalCode: '69380',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '45.764043',
    longitude: '4.835659',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Lyon',
    },
    {
      '@type': 'City',
      name: 'Villeurbanne',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Métropole de Lyon',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Auvergne-Rhône-Alpes',
    },
    {
      '@type': 'Country',
      name: 'France',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/julien-butty-471869a4/',
    // Add other social profiles
  ],
  founder: {
    '@type': 'Person',
    name: 'Julien Butty',
    jobTitle: 'Développeur Web Freelance',
    email: 'julienbutty@gmail.com',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de développement web',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Site WordPress sur-mesure',
          description: 'Création de sites WordPress personnalisés et optimisés',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Développement sur mesure',
          description: 'Applications web et sites React, Node.js, TypeScript',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce',
          description: 'Boutiques en ligne performantes et sécurisées',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Refonte de site',
          description: 'Modernisation et optimisation de sites existants',
        },
      },
    ],
  },
}

/**
 * Person Schema - For About page
 */
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Julien Butty',
  givenName: 'Julien',
  familyName: 'Butty',
  jobTitle: 'Développeur Web Freelance',
  description:
    'Développeur fullstack avec plus de 6 ans d\'expérience. Spécialisé en React, Node.js et TypeScript. Reconverti dans le développement web par passion.',
  url: siteUrl,
  image: `${siteUrl}/profile.jpg`, // Add your photo
  email: 'julienbutty@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lyon',
    addressRegion: 'Auvergne-Rhône-Alpes',
    addressCountry: 'FR',
  },
  sameAs: [
    'https://www.linkedin.com/in/julien-butty-471869a4/',
  ],
  knowsAbout: [
    'React',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'WordPress',
    'E-commerce',
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Fullstack Development',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Formation Développement Web',
  },
}

/**
 * WebSite Schema - For homepage
 */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'Julien Butty - Développeur Freelance Lyon',
  description:
    'Portfolio et services de développement web freelance à Lyon',
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'fr-FR',
}

/**
 * BreadcrumbList Schema - For navigation
 */
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${siteUrl}${item.url}`,
  })),
})

/**
 * FAQPage Schema - For FAQ page
 */
export const createFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})
