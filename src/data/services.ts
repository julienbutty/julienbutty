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
    name: 'Création de sites web',
    slug: 'creation-sites-web',
    shortDescription:
      'Sites vitrine, e-commerce et applications web sur-mesure pour votre activité',
    description: `Vous avez besoin d'une présence en ligne professionnelle ou d'une plateforme web performante ?

Je crée des sites web modernes et optimisés, adaptés à vos besoins : site vitrine, e-commerce, application métier ou plateforme personnalisée. WordPress pour la simplicité, ou développement sur-mesure pour des besoins spécifiques.

**Idéal pour :**
- Artisans et commerces locaux qui veulent être visible en ligne
- E-commerce et boutiques en ligne performantes
- Startups qui lancent leur service digital
- PME avec des besoins métier spécifiques

**Ce que vous obtenez :**
- Design moderne et responsive (mobile, tablette, ordinateur)
- Site rapide et optimisé pour Google (SEO)
- Formation pour gérer votre contenu en autonomie
- Code propre et maintenable pour l'avenir`,
    icon: 'code',
    useCases: [
      'Sites vitrine professionnels',
      'Boutiques e-commerce',
      'Applications web métier',
      'Plateformes sur-mesure',
    ],
    pricingGuidance: 'Sur devis',
    featured: true,
    order: 1,
  },
  {
    id: '2',
    name: 'Intelligence Artificielle',
    slug: 'intelligence-artificielle',
    shortDescription:
      'Gagnez du temps en automatisant vos tâches répétitives avec l\'Intelligence Artificielle',
    description: `L'Intelligence Artificielle peut vraiment simplifier votre quotidien professionnel.

Je vous aide à intégrer l'IA dans votre activité pour automatiser les tâches répétitives et gagner du temps. Pas besoin d'être expert technique - je traduis vos besoins en solutions concrètes et accessibles.

**Ce que je peux faire pour vous :**
- Créer un chatbot qui répond à vos clients 24h/24
- Analyser automatiquement vos documents (devis, factures, commandes)
- Développer un assistant virtuel adapté à votre métier
- Automatiser vos processus pour vous concentrer sur l'essentiel

**Mon approche :**
- On discute de vos besoins réels, sans jargon technique
- Je vous montre ce qui est possible avec votre budget
- Solutions pratiques qui fonctionnent vraiment
- Confidentialité et sécurité garanties`,
    icon: 'ai',
    useCases: [
      'Chatbots intelligents',
      'Analyse de documents par IA',
      'Assistants métier personnalisés',
      'Automatisation de processus',
    ],
    pricingGuidance: 'Sur devis',
    featured: true,
    order: 2,
  },
  {
    id: '3',
    name: 'Maintenance et évolution',
    slug: 'maintenance-evolution',
    shortDescription: 'Suivi, sécurité et amélioration continue de vos sites et applications',
    description: `Votre site ou application est en ligne, mais il faut le maintenir à jour, sécurisé et performant.

J'assure le suivi technique de vos projets web : mises à jour de sécurité, corrections de bugs, ajout de nouvelles fonctionnalités et optimisations. Que ce soit un projet que j'ai créé ou repris d'un autre développeur.

**Services de maintenance :**
- Mises à jour de sécurité et corrections de bugs
- Monitoring et optimisation des performances
- Ajout de nouvelles fonctionnalités
- Sauvegardes automatiques et sécurité renforcée
- Support technique réactif

**Idéal pour :**
- Sites WordPress qui ont besoin de suivi régulier
- Applications métier à faire évoluer dans le temps
- Projets lancés par d'autres développeurs
- Entreprises qui veulent un partenaire technique de confiance

**Mon approche :**
- Interventions rapides et efficaces
- Conseils proactifs pour améliorer votre projet
- Transparence totale sur les actions réalisées`,
    icon: 'settings',
    useCases: [
      'Maintenance WordPress',
      'Support technique réactif',
      "Évolution d'applications",
      'Optimisation continue',
    ],
    pricingGuidance: 'Sur devis',
    featured: true,
    order: 3,
  },
]
