/**
 * Services section component
 * Displays service offerings in a grid
 */

import { motion } from 'framer-motion'
import { Section } from '../ui/Section'
import { Card, CardHeader, CardContent } from '../ui/Card'
import { Button } from '../ui/Button'
import { staggerContainer, staggerItem } from '../../lib/animations'
import { scrollToElement } from '../../lib/utils'
import { services as defaultServices } from '../../data/services'
import type { ServiceData } from '../../data/services'

export interface ServicesProps {
  services?: ServiceData[]
  showCTA?: boolean
}

/**
 * Icon component - simple SVG icons
 */
function ServiceIcon({ icon }: { icon?: string }) {
  const iconClasses = 'w-12 h-12 text-primary-400'

  switch (icon) {
    case 'wordpress':
      return (
        <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.158 12.786L9.46 20.625 12.001 21.42 14.64 13.995z" />
          <path d="M3.009 12c0 3.559 2.068 6.634 5.067 8.092L3.788 8.341A8.943 8.943 0 0 0 3.009 12zm15.54.31c0-1.115-.401-1.886-.745-2.485-.459-.745-.889-1.375-.889-2.12 0-.831.63-1.605 1.518-1.605.04 0 .078.005.116.007A8.948 8.948 0 0 0 12.003 3a8.967 8.967 0 0 0-7.535 4.07c.212.006.41.01.578.01.94 0 2.395-.114 2.395-.114.484-.029.542.683.057.74 0 0-.487.058-1.029.086l3.275 9.74 1.968-5.902-1.401-3.838a19.678 19.678 0 0 1-.972-.086c-.485-.057-.428-.768.057-.74 0 0 1.484.114 2.368.114.94 0 2.395-.114 2.395-.114.485-.029.543.683.058.74 0 0-.488.058-1.029.086l3.25 9.665.897-2.996c.388-1.245.684-2.137.684-2.907zm-6.537 1.254l-2.697 7.838c.806.237 1.657.366 2.538.366a8.89 8.89 0 0 0 2.292-.303a1.008 1.008 0 0 1-.082-.155l-2.051-7.746zM20.9 12c0 1.475-.352 2.86-.973 4.086l-3.878-11.212c.725.078 1.378.142 1.378.142.485.057.428.769-.057.74-.027-.003-.067-.006-.115-.01A8.944 8.944 0 0 1 20.9 12z" />
        </svg>
      )
    case 'code':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      )
    case 'ai':
      return (
        <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
          {/* AI Badge - Square with rounded corners */}
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          {/* "AI" Text - Larger letters */}
          <g>
            {/* Letter A */}
            <path
              d="M8 17L10.5 9.5L13 17M9 14.5H12"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Letter I */}
            <line
              x1="16"
              y1="9.5"
              x2="16"
              y2="17"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      )
    case 'settings':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      )
    case 'shopping-cart':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      )
    default:
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      )
  }
}

/**
 * Services section with grid of service cards
 */
export function Services({ services = defaultServices, showCTA = true }: ServicesProps) {
  return (
    <Section id="services" spacing="lg" className="bg-gray-900/50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl text-gray-400 max-w-2xl mx-auto">
            Des solutions web adaptées à vos besoins et votre budget
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            // Special styling for AI card
            const isAiCard = service.id === '2'

            return (
              <motion.div key={service.id} variants={staggerItem}>
                {isAiCard ? (
                  // AI Card with gradient border
                  <div className="h-full relative p-[0.5px] rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-400 to-pink-400">
                    <Card hoverable className="h-full flex flex-col bg-gray-800">
                      <CardHeader>
                        <div className="mb-4">
                          <ServiceIcon icon={service.icon} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-gray-400">{service.shortDescription}</p>
                      </CardContent>
                      {service.pricingGuidance && (
                        <div className="px-6 pb-6">
                          <p className="text-primary-400 font-semibold">
                            {service.pricingGuidance}
                          </p>
                        </div>
                      )}
                    </Card>
                  </div>
                ) : (
                  // Regular cards
                  <Card hoverable className="h-full flex flex-col">
                    <CardHeader>
                      <div className="mb-4">
                        <ServiceIcon icon={service.icon} />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-400">{service.shortDescription}</p>
                    </CardContent>
                    {service.pricingGuidance && (
                      <div className="px-6 pb-6">
                        <p className="text-primary-400 font-semibold">{service.pricingGuidance}</p>
                      </div>
                    )}
                  </Card>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        {showCTA && (
          <motion.div variants={staggerItem} className="text-center">
            <Button variant="primary" size="lg" onClick={() => scrollToElement('contact', 80)}>
              Discuter de votre projet
            </Button>
          </motion.div>
        )}
      </motion.div>
    </Section>
  )
}
