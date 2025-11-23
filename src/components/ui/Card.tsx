/**
 * Card component
 * Reusable card container with hover effects
 */

import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import { cardHover } from '../../lib/animations'

export interface CardProps {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
  as?: 'div' | 'article' | 'section'
  onClick?: () => void
}

/**
 * Card component with optional hover animation
 * @example
 * ```tsx
 * <Card hoverable onClick={handleClick}>
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </Card>
 * ```
 */
export function Card({
  children,
  className,
  hoverable = false,
  as: Component = 'div',
  onClick,
}: CardProps) {
  const baseClasses =
    'bg-gray-800 border border-gray-700 rounded-xl overflow-hidden'

  const hoverClasses = hoverable
    ? 'cursor-pointer transition-shadow hover:shadow-xl hover:shadow-primary-500/10'
    : ''

  const MotionComponent = motion[Component as keyof typeof motion] as any

  return (
    <MotionComponent
      initial="rest"
      whileHover={hoverable ? 'hover' : undefined}
      variants={hoverable ? cardHover : undefined}
      className={cn(baseClasses, hoverClasses, className)}
      onClick={onClick}
    >
      {children}
    </MotionComponent>
  )
}

/**
 * Card header component
 */
export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('p-6 pb-4', className)}>{children}</div>
}

/**
 * Card content component
 */
export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>
}

/**
 * Card footer component
 */
export function CardFooter({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('p-6 pt-4 border-t border-gray-700', className)}>
      {children}
    </div>
  )
}
