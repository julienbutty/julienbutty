/**
 * Section component
 * Reusable section wrapper with consistent spacing
 */

import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import { Container } from './Container'
import type { Variants } from 'framer-motion'

export interface SectionProps {
  children: React.ReactNode
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
  id?: string
  animate?: boolean
  variants?: Variants
}

/**
 * Section component with optional animation
 * @example
 * ```tsx
 * <Section id="services" spacing="lg" animate>
 *   <h2>Services</h2>
 *   <p>Content here</p>
 * </Section>
 * ```
 */
export function Section({
  children,
  className,
  containerSize = 'lg',
  spacing = 'lg',
  id,
  animate = false,
  variants,
}: SectionProps) {
  const spacingClasses = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-28',
    xl: 'py-28 md:py-36',
  }

  const WrapperComponent = animate ? motion.section : 'section'

  const animationProps = animate
    ? {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, margin: '-100px' },
        variants,
      }
    : {}

  return (
    <WrapperComponent
      id={id}
      className={cn(spacingClasses[spacing], className)}
      {...animationProps}
    >
      <Container size={containerSize}>{children}</Container>
    </WrapperComponent>
  )
}
