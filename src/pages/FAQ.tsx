/**
 * FAQ Page
 * Frequently asked questions for potential clients
 */

import { motion } from 'framer-motion'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations'
import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { Header } from '../components/Header'
import { createFAQSchema, createBreadcrumbSchema } from '../lib/structuredData'
import { navigateToHomeSection } from '../hooks/useScrollToHash'

interface FAQItem {
  question: string
  answer: string | JSX.Element
}

interface FAQSection {
  title: string
  icon: string
  questions: FAQItem[]
}

const faqSections: FAQSection[] = [
  {
    title: 'Tarifs & Budget',
    icon: '💰',
    questions: [
      {
        question: 'Combien coûte un site web ?',
        answer:
          "Le prix d'un site web varie énormément selon vos besoins : nombre de pages, fonctionnalités spécifiques, design sur-mesure, intégrations tierces... Chaque projet est unique. Après un premier échange pour comprendre vos objectifs et contraintes, je vous propose un devis détaillé et transparent, adapté à votre budget. N'hésitez pas à me contacter pour discuter de votre projet.",
      },
      {
        question: "Qu'est-ce qui influence le prix ?",
        answer: (
          <>
            <p className="mb-3">Plusieurs facteurs déterminent le coût final :</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
              <li>
                <strong className="text-gray-300">Nombre de pages</strong> et complexité du contenu
              </li>
              <li>
                <strong className="text-gray-300">Fonctionnalités spécifiques</strong> (formulaires,
                paiement en ligne, espace client...)
              </li>
              <li>
                <strong className="text-gray-300">Design</strong> : template adapté vs création 100%
                sur-mesure
              </li>
              <li>
                <strong className="text-gray-300">Intégrations</strong> : CRM, outils marketing,
                APIs externes
              </li>
              <li>
                <strong className="text-gray-300">Responsive design</strong> et optimisations (SEO,
                performance)
              </li>
            </ul>
            <p className="mt-3 text-gray-400">
              Mon objectif : vous proposer une solution adaptée à votre budget, sans sur-engineering
              inutile.
            </p>
          </>
        ),
      },
      {
        question: 'Faut-il prévoir un budget pour la maintenance ?',
        answer:
          "C'est recommandé mais pas obligatoire. Un site a besoin de mises à jour de sécurité, de corrections éventuelles et parfois d'évolutions. Je propose des forfaits de maintenance (mises à jour, sauvegardes, monitoring) ou des interventions ponctuelles selon vos besoins. Nous pourrons en discuter ensemble pour trouver la formule la plus adaptée à votre situation.",
      },
    ],
  },
  {
    title: 'Délais & Organisation',
    icon: '⏱️',
    questions: [
      {
        question: 'Combien de temps pour développer mon site ?',
        answer:
          "Les délais dépendent de la complexité de votre projet et de vos contraintes. Un site vitrine simple peut être livré en quelques semaines, tandis qu'un e-commerce ou une application web nécessitera plusieurs mois. Lors de notre premier échange, j'évalue la durée réaliste du projet et je vous propose un planning détaillé avec des jalons clairs. La qualité prime toujours sur la précipitation.",
      },
      {
        question: 'Comment se déroule un projet ?',
        answer: (
          <>
            <p className="mb-3">Je suis une méthodologie claire en 5 étapes :</p>
            <ol className="list-decimal list-inside space-y-3 text-gray-400 ml-4">
              <li>
                <strong className="text-gray-300">Découverte</strong> : échange sur vos besoins,
                objectifs et contraintes
              </li>
              <li>
                <strong className="text-gray-300">Proposition</strong> : devis détaillé +
                maquettes/wireframes si besoin
              </li>
              <li>
                <strong className="text-gray-300">Développement</strong> : réalisation par
                itérations, avec points réguliers
              </li>
              <li>
                <strong className="text-gray-300">Tests & Ajustements</strong> : vous validez, je
                corrige
              </li>
              <li>
                <strong className="text-gray-300">Livraison & Formation</strong> : mise en ligne +
                prise en main
              </li>
            </ol>
          </>
        ),
      },
      {
        question: 'À quelle fréquence communiquons-nous ?',
        answer:
          "La communication est clé pour la réussite du projet. Je propose des points réguliers (visio, téléphone ou email selon vos préférences) pour faire le point sur l'avancement, répondre à vos questions et valider les prochaines étapes. La fréquence s'adapte au rythme du projet et à vos disponibilités. Entre deux points, vous pouvez me contacter à tout moment, je m'engage à vous répondre rapidement.",
      },
      {
        question: 'Combien de révisions sont incluses ?',
        answer:
          'Je travaille par cycles de validation : 2-3 aller-retours sont inclus à chaque phase (maquettes, développement, tests). Mon objectif est de bien comprendre vos attentes dès le départ pour limiter les révisions. Si des modifications majeures sont demandées en cours de route (hors scope initial), je vous soumets un avenant au devis. Transparence totale.',
      },
    ],
  },
  {
    title: 'Questions Techniques',
    icon: '🔧',
    questions: [
      {
        question: 'Quelle est la différence entre site vitrine et e-commerce ?',
        answer:
          "Un site vitrine présente votre activité, vos services/produits et permet de vous contacter (comme une brochure digitale). Un site e-commerce ajoute tout le système de vente en ligne : panier, paiement sécurisé, gestion des stocks, suivi de commandes. C'est plus complexe techniquement et donc plus cher, mais indispensable si vous vendez en ligne.",
      },
      {
        question: "Qu'est-ce qu'un CMS et en ai-je besoin ?",
        answer:
          "Un CMS (Content Management System) est un outil qui vous permet de modifier le contenu de votre site vous-même, sans coder (exemples : WordPress, Strapi). C'est utile si vous publiez régulièrement (blog, actualités, nouveaux produits). Si votre site est statique et évolue peu, un CMS n'est pas nécessaire. Je vous conseille selon votre situation.",
      },
      {
        question: 'Mon site sera-t-il responsive (adapté mobile) ?',
        answer:
          "Absolument, c'est la base aujourd'hui ! Plus de 60% du trafic web vient du mobile. Tous mes sites sont responsive, c'est-à-dire qu'ils s'adaptent automatiquement à tous les écrans (smartphone, tablette, ordinateur). Je teste sur différents appareils avant livraison pour garantir une expérience optimale partout.",
      },
      {
        question: "Qu'est-ce que l'hébergement et qui s'en occupe ?",
        answer:
          "L'hébergement, c'est le serveur où votre site est stocké pour être accessible 24/7 sur Internet. Je peux m'en occuper pour vous (je recommande des solutions fiables comme Netlify ou Vercel) ou travailler avec votre hébergeur existant. Coût moyen : 5-20€/mois selon vos besoins. Je vous explique tout clairement.",
      },
    ],
  },
  {
    title: 'Après la Livraison',
    icon: '🤝',
    questions: [
      {
        question: 'Pourrai-je modifier mon site moi-même après la livraison ?',
        answer:
          'Ça dépend de la solution choisie. Avec un CMS, oui : vous pourrez modifier textes, images, ajouter des pages facilement. Je vous forme à son utilisation lors de la livraison. Si le site est développé sur-mesure sans CMS, je reste disponible pour les modifications, ou je peux ajouter un CMS par la suite si besoin.',
      },
      {
        question: 'Proposez-vous de la maintenance et du support ?',
        answer:
          "Oui, je propose plusieurs formules selon vos besoins : forfait mensuel (mises à jour, sauvegardes, monitoring, petites modifications) ou interventions ponctuelles. J'assure également une garantie après livraison pour corriger tout bug éventuel. Nous pourrons discuter ensemble de la formule la plus adaptée à votre projet.",
      },
      {
        question: 'Que se passe-t-il si je veux faire évoluer mon site plus tard ?',
        answer:
          "C'est tout à fait normal qu'un site évolue avec votre activité ! Je construis des solutions évolutives qui permettent d'ajouter des fonctionnalités par la suite. Vous me contactez, on discute de vos nouveaux besoins, et je vous soumets un devis pour ces évolutions. Pas besoin de tout refaire.",
      },
    ],
  },
  {
    title: 'Pourquoi Me Choisir',
    icon: '🎯',
    questions: [
      {
        question: "Pourquoi choisir un développeur freelance plutôt qu'une agence ?",
        answer:
          "Avec un freelance, vous avez un interlocuteur unique qui gère tout le projet, sans intermédiaires ni surcoûts de structure. C'est plus réactif, plus flexible et souvent plus économique (30-50% moins cher qu'une agence). Vous bénéficiez de mon expertise complète (frontend, backend, design) et d'un suivi personnalisé. Et ma reconversion me donne une vraie compréhension de vos enjeux business.",
      },
      {
        question: 'Travaillez-vous uniquement sur Lyon ?',
        answer:
          "Non, je travaille avec des clients partout en France (et même à l'international) grâce aux outils de communication modernes. Être basé à Lyon est un plus si vous souhaitez des rencontres en présentiel pour lancer le projet ou faire des points importants, mais ce n'est pas obligatoire. La majorité de mes projets se déroulent en 100% remote.",
      },
    ],
  },
]

export function FAQ() {
  // Extract all FAQs for structured data (flatten and convert JSX to text)
  const allFAQs = faqSections.flatMap((section) =>
    section.questions.map((faq) => ({
      question: faq.question,
      answer: typeof faq.answer === 'string' ? faq.answer : 'Voir la réponse complète sur le site',
    }))
  )

  const breadcrumbData = createBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'FAQ', url: '/faq' },
  ])

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [createFAQSchema(allFAQs), breadcrumbData],
  }

  return (
    <>
      <SEO
        title="FAQ - Questions fréquentes | Développeur Freelance Lyon"
        description="Réponses aux questions fréquentes sur mes services de développement web : tarifs, délais, processus, technologies. Tout ce qu'il faut savoir avant de démarrer votre projet."
        canonical="https://julienbutty.fr/faq"
        structuredData={faqStructuredData}
      />
      <Header />
      <div className="min-h-screen bg-gray-950 pt-16">
        <Section spacing="lg" className="pt-8">
          <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Questions Fréquentes</h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Tout ce que vous devez savoir avant de démarrer votre projet web. Des réponses
                claires, en français, sans jargon technique.
              </p>
            </motion.div>

            {/* FAQ Sections */}
            {faqSections.map((section, sectionIndex) => (
              <motion.div key={sectionIndex} variants={staggerItem} className="mb-16">
                {/* Section Title */}
                <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                  <span className="text-3xl">{section.icon}</span>
                  {section.title}
                </h2>

                {/* Questions */}
                <div className="space-y-6">
                  {section.questions.map((faq, faqIndex) => (
                    <motion.div
                      key={faqIndex}
                      variants={fadeInUp}
                      className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-primary-500/30 transition-colors"
                    >
                      <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-50">
                        {faq.question}
                      </h3>
                      <div className="text-gray-400 leading-relaxed">
                        {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* CTA Section */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Vous ne trouvez pas votre réponse ?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Chaque projet est unique. N'hésitez pas à me contacter directement, je réponds
                généralement sous 24h. Discutons de vos besoins sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigateToHomeSection('contact')}>
                  Me contacter
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
                <Link to="/a-propos">
                  <Button variant="outline" size="lg">
                    En savoir plus sur moi
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          </Container>
        </Section>
      </div>
    </>
  )
}
