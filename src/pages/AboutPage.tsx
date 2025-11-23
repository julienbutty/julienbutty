/**
 * About Page
 * Page de présentation - Julien Butty
 */

import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { SEO } from '../components/SEO'
import { Header } from '../components/Header'
import { personSchema, createBreadcrumbSchema } from '../lib/structuredData'
import { navigateToHomeSection } from '../hooks/useScrollToHash'

export function AboutPage() {
  const handleContact = () => {
    // Scroll to contact section on home page
    navigateToHomeSection('contact')
  }

  const breadcrumbData = createBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'À propos', url: '/a-propos' },
  ])

  const aboutStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [personSchema, breadcrumbData],
  }

  return (
    <>
      <SEO
        title="À propos - Développeur Freelance reconverti par passion"
        description="Découvrez mon parcours : développeur fullstack avec plus de 6 ans d'expérience suite à une reconversion professionnelle. Spécialisé React, Node.js, TypeScript. Basé à Lyon."
        canonical="https://julienbutty.fr/a-propos"
        ogType="profile"
        structuredData={aboutStructuredData}
      />
      <Header />
      <div className="min-h-screen bg-gray-950 pt-16">
        <section className="py-20 md:py-28">
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-50">
                  Développeur passionné,{' '}
                  <span className="text-gradient">partenaire de confiance</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Plus de 6 ans à transformer les besoins business en solutions digitales concrètes
                </p>
              </div>

              {/* Mon parcours */}
              <div className="prose prose-invert max-w-none mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-50">Mon parcours</h2>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 mb-8">
                  <p className="text-gray-300 leading-relaxed text-lg mb-4">
                    Après plusieurs années dans un tout autre domaine, j'ai fait le choix de me
                    reconvertir dans le développement web en 2018. Pas par hasard, mais par passion
                    : celle de{' '}
                    <strong className="text-gray-50">résoudre des problèmes concrets</strong> et de
                    créer des outils qui{' '}
                    <strong className="text-gray-50">font vraiment la différence</strong> au
                    quotidien.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Cette reconversion m'a apporté une vision unique : je comprends les enjeux
                    business parce que j'ai travaillé "de l'autre côté". Je sais qu'un site ou une
                    application, ce n'est pas juste du code - c'est un{' '}
                    <strong className="text-gray-50">investissement</strong> qui doit{' '}
                    <strong className="text-gray-50">rapporter</strong>.
                  </p>
                </div>
              </div>

              {/* Ce que j'apporte */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-50">
                  Ce que j'apporte à mes clients
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-primary-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-50">
                          Solutions adaptées
                        </h3>
                        <p className="text-gray-400">
                          Pas de sur-engineering. Je propose ce dont vous avez <em>vraiment</em>{' '}
                          besoin : un WordPress si ça suffit, du sur-mesure quand c'est nécessaire.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-primary-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-50">ROI mesurable</h3>
                        <p className="text-gray-400">
                          Chaque projet est pensé pour générer de la valeur : plus de leads,
                          meilleure conversion, processus optimisés. Pas juste "un beau site".
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-primary-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-50">Langage clair</h3>
                        <p className="text-gray-400">
                          Je traduis le technique en business. Vous comprenez ce que vous payez,
                          pourquoi, et ce que ça va vous apporter. Zéro jargon inutile.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-primary-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-50">
                          Réactivité locale
                        </h3>
                        <p className="text-gray-400">
                          Basé à Lyon, disponible rapidement. Pas de freelance à l'autre bout du
                          monde avec 6h de décalage horaire. On peut même se voir autour d'un café
                          si besoin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expertise technique */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-50">Expertise technique</h2>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Plus de 6 ans d'expérience hands-on sur des projets variés, du site vitrine à
                    l'application métier complexe :
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary-400">Frontend</h3>
                      <ul className="text-gray-400 space-y-2">
                        <li>React, Vue, TypeScript</li>
                        <li>HTML5, CSS3, Tailwind</li>
                        <li>WordPress (thèmes custom)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary-400">Backend</h3>
                      <ul className="text-gray-400 space-y-2">
                        <li>Node.js, Fastify</li>
                        <li>PHP, Symfony, MySQL</li>
                        <li>APIs REST</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-primary-400">
                        Outils & Méthodes
                      </h3>
                      <ul className="text-gray-400 space-y-2">
                        <li>Git, CI/CD</li>
                        <li>Agile / Scrum</li>
                        <li>Tests automatisés</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pourquoi moi */}
              <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-4 text-gray-50">
                  Pourquoi travailler avec moi ?
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  Parce que vous n'avez pas besoin d'un "codeur", mais d'un{' '}
                  <strong className="text-gray-50">partenaire</strong> qui :
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">✓</span>
                    <span>Comprend vos enjeux business avant de toucher au code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">✓</span>
                    <span>
                      Vous conseille honnêtement, même si ça veut dire une solution moins chère
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">✓</span>
                    <span>
                      Livre dans les temps, sans excuse ni jargon technique pour masquer les retards
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-400 mt-1">✓</span>
                    <span>
                      Reste disponible après la livraison (parce qu'un projet web, ça vit)
                    </span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="text-xl text-gray-300 mb-6">
                  Un projet en tête ? Discutons-en sans engagement.
                </p>
                <Button variant="primary" size="lg" onClick={handleContact}>
                  Prendre contact
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  )
}
