/**
 * About Preview Section
 * Short teaser section linking to the full About page
 */

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Section } from '../ui/Section'
import { Button } from '../ui/Button'
import { fadeInUp, staggerContainer, staggerItem } from '../../lib/animations'

export function AboutPreview() {
  return (
    <Section id="about-preview" spacing="lg" className="bg-gray-900/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        {/* Main content card */}
        <motion.div
          variants={fadeInUp}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 p-8 md:p-12"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Badge */}
            <motion.div variants={staggerItem} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium">
                Mon parcours
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={staggerItem}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-50"
            >
              Développeur par passion,{' '}
              <span className="text-gradient">reconverti par choix</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Après plusieurs années dans un autre domaine, j'ai fait le choix de me reconvertir dans le développement web.
              Cette double casquette me donne une vision unique : je comprends vos enjeux business parce que{' '}
              <strong className="text-gray-50">j'ai travaillé de l'autre côté</strong>.
            </motion.p>

            {/* Key points */}
            <motion.div
              variants={staggerItem}
              className="grid md:grid-cols-3 gap-6 mb-8"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">6+ ans d'expérience</p>
                  <p className="text-gray-500 text-sm">Projets variés, PME et particuliers</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Basé à Lyon</p>
                  <p className="text-gray-500 text-sm">Proximité et disponibilité</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Solutions adaptées</p>
                  <p className="text-gray-500 text-sm">Pas de sur-engineering</p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={staggerItem}>
              <Link to="/a-propos">
                <Button variant="outline" size="lg">
                  Découvrir mon parcours
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
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  )
}
