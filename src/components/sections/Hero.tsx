/**
 * Hero section component
 * Main landing section with animated introduction and CTA
 */

import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { heroTextReveal, fadeInUp, staggerContainer, staggerItem } from '../../lib/animations'
import { scrollToElement } from '../../lib/utils'

export interface HeroProps {
  title?: string
  subtitle?: string
  description?: string
  ctaPrimary?: {
    text: string
    href: string
  }
  ctaSecondary?: {
    text: string
    href: string
  }
}

/**
 * Hero section with animated text and CTAs
 */
export function Hero({
  title = 'Julien Butty',
  subtitle = 'Développeur Freelance à Lyon',
  description = 'Je crée des sites web modernes et des solutions d\'Intelligence Artificielle pour les PME et particuliers. De la création de sites aux chatbots IA, je transforme vos idées en solutions digitales innovantes.',
  ctaSecondary = { text: 'Me contacter', href: '#contact' },
}: HeroProps) {
  const handleScroll = (href: string) => {
    const id = href.replace('#', '')
    scrollToElement(id, 80)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <Container className="relative z-10 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
            {/* Greeting */}
            <motion.div variants={staggerItem} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium">
                👋 Bienvenue
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={heroTextReveal}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="block text-gradient">{title}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 font-light"
            >
              {subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button variant="outline" size="lg" onClick={() => handleScroll(ctaSecondary.href)}>
                {ctaSecondary.text}
              </Button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={fadeInUp}
              className="mt-20 flex flex-col items-center text-gray-500"
            >
              <span className="text-sm mb-2">Découvrir</span>
              <motion.svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
