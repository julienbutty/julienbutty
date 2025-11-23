/**
 * Services data
 * Edit this file directly to update your services
 */

export interface ServiceData {
  id: string
  name: string
  slug: string
  shortDescription: string
  description: string
  icon: string
  useCases?: string[]
  pricingGuidance?: string
  featured: boolean
  order: number
}

export const services: ServiceData[] = [
  {
    id: '1',
    name: 'Site WordPress professionnel',
    slug: 'site-wordpress-professionnel',
    shortDescription: 'Un site web clé en main que vous pourrez gérer vous-même, sans compétences techniques',
    description: `Vous avez besoin d'une présence en ligne professionnelle sans vous compliquer la vie ?

Je crée votre site WordPress sur mesure, adapté à votre activité et votre image. Vous pourrez facilement mettre à jour vos contenus, ajouter des photos, et gérer vos pages sans m'appeler à chaque fois.

**Idéal pour :**
- Artisans et commerces locaux
- Professions libérales (médecins, avocats, architectes...)
- Petites entreprises et associations
- Freelances qui veulent gagner en visibilité

**Ce que vous obtenez :**
- Design moderne et responsive (mobile, tablette, ordinateur)
- Formation pour gérer votre site en autonomie
- Optimisé pour Google (référencement local Lyon)
- Formulaire de contact fonctionnel`,
    icon: 'wordpress',
    useCases: [
      'Artisans et commerces locaux',
      'Professions libérales',
      'Petites entreprises et associations',
      'Freelances',
    ],
    pricingGuidance: 'Sur devis',
    featured: true,
    order: 1,
  },
  {
    id: '2',
    name: 'Application web sur mesure',
    slug: 'application-web-sur-mesure',
    shortDescription: 'Des outils digitaux créés spécifiquement pour votre métier et vos processus',
    description: `Votre activité a des besoins spécifiques qu'aucun logiciel du marché ne couvre vraiment ?

Je développe des applications web personnalisées qui s'adaptent à VOTRE façon de travailler. Gestion interne, plateforme client, outil métier... je transforme vos idées en solutions concrètes et utilisables.

**Parfait pour :**
- PME avec des process métier spécifiques
- Startups qui lancent un nouveau service
- Entreprises qui veulent digitaliser leur activité
- Plateformes de mise en relation ou services en ligne

**Mes points forts :**
- Analyse de vos besoins et conseil en amont
- Développement moderne et performant (React, TypeScript)
- Interface intuitive pour vos équipes
- Code propre et maintenable pour l'avenir`,
    icon: 'code',
    useCases: [
      'PME avec des process métier spécifiques',
      'Startups innovantes',
      'Digitalisation d\'activité',
      'Plateformes de mise en relation',
    ],
    pricingGuidance: 'Sur devis',
    featured: true,
    order: 2,
  },
  {
    id: '3',
    name: 'Ajout de fonctionnalités',
    slug: 'ajout-de-fonctionnalites',
    shortDescription: 'J\'améliore et fais évoluer vos sites et applications existantes',
    description: `Vous avez déjà un site ou une application, mais il manque une fonctionnalité importante ? Ou quelque chose ne fonctionne pas comme vous le souhaitez ?

J'interviens sur vos projets existants pour :
- Ajouter de nouvelles fonctionnalités
- Corriger des bugs ou problèmes techniques
- Améliorer les performances et l'expérience utilisateur
- Moderniser une interface vieillissante
- Connecter des services externes (API, paiement, CRM...)

**Idéal pour :**
- Sites WordPress à enrichir
- Applications à faire évoluer
- Projets lancés par d'autres développeurs
- Besoin ponctuel sans refaire tout le site

**Mon approche :**
- Audit gratuit pour comprendre l'existant
- Interventions ciblées et efficaces
- Respect du code et de l'architecture en place
- Conseils pour prioriser ce qui a le plus d'impact`,
    icon: 'settings',
    useCases: [
      'Sites WordPress à enrichir',
      'Applications à faire évoluer',
      'Reprise de projets existants',
      'Interventions ponctuelles',
    ],
    pricingGuidance: 'Sur devis',
    featured: true,
    order: 3,
  },
]
