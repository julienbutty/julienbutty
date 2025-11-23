/**
 * Mentions Légales
 * Page conforme aux obligations légales françaises
 */

import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { SEO } from '../components/SEO'
import { Header } from '../components/Header'

export function MentionsLegales() {
  return (
    <>
      <SEO
        title="Mentions Légales | Julien Butty - Développeur Freelance"
        description="Mentions légales du site julienbutty.fr - Informations légales, hébergeur, propriété intellectuelle et protection des données."
        canonical="https://julienbutty.fr/mentions-legales"
        noindex={true}
      />
      <Header />
      <div className="min-h-screen bg-gray-950 pt-16">
        <Section spacing="lg" className="pt-8">
          <Container>
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h1 className="text-4xl font-bold mb-8 text-gray-50">Mentions Légales</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-50">1. Éditeur du site</h2>
              <p className="text-gray-300 leading-relaxed">
                Le site julienbutty.fr est édité par :
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li><strong>Nom :</strong> Julien Butty</li>
                <li><strong>Statut :</strong> Auto-entrepreneur</li>
                <li><strong>Adresse :</strong> Lozanne, 69380, France</li>
                <li><strong>Email :</strong> contact@julienbutty.fr</li>
                <li><strong>SIRET :</strong> 923 917 025 00010</li>
                <li><strong>N° TVA :</strong> FR46923917025</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-50">2. Directeur de publication</h2>
              <p className="text-gray-300 leading-relaxed">
                Le directeur de la publication du site est Julien Butty.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-50">3. Hébergement</h2>
              <p className="text-gray-300 leading-relaxed">
                Le site est hébergé par :
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li><strong>Hébergeur :</strong> Netlify, Inc.</li>
                <li><strong>Adresse :</strong> 2325 3rd Street, Suite 29, San Francisco, CA 94107, États-Unis</li>
                <li><strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">www.netlify.com</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-50">4. Propriété intellectuelle</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est la propriété exclusive de Julien Butty,
                sauf mention contraire.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents
                éléments est strictement interdite sans l'accord exprès par écrit de Julien Butty.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-50">5. Responsabilité</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Les informations fournies sur ce site le sont à titre indicatif. Julien Butty met tout en œuvre pour offrir
                aux visiteurs du site des informations fiables et vérifiées.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Toutefois, malgré tous les soins apportés, le site peut comporter des inexactitudes, des défauts de mise à
                jour ou des erreurs. Je vous remercie de me les signaler.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Julien Butty ne saurait être tenu responsable de l'utilisation faite de ces informations, et de tout préjudice
                direct ou indirect pouvant en découler.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-50">6. Liens hypertextes</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Le site peut contenir des liens hypertextes vers d'autres sites. Julien Butty ne dispose d'aucun moyen pour
                contrôler ces sites et décline toute responsabilité quant à leur contenu.
              </p>
              <p className="text-gray-300 leading-relaxed">
                La création de liens hypertextes vers le site julienbutty.fr nécessite une autorisation préalable écrite.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-50">7. Droit applicable</h2>
              <p className="text-gray-300 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut d'accord
                amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-50">8. Contact</h2>
              <p className="text-gray-300 leading-relaxed">
                Pour toute question concernant les mentions légales, vous pouvez me contacter à l'adresse suivante :
                <a href="mailto:contact@julienbutty.fr" className="text-primary-400 hover:text-primary-300 ml-1">
                  contact@julienbutty.fr
                </a>
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-12">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
          </Container>
        </Section>
      </div>
    </>
  )
}
