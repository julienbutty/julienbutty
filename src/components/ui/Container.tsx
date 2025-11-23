/**
 * Container component
 * Responsive container for page content
 */

import { cn } from '../../lib/utils'

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  as?: 'div' | 'section' | 'article' | 'main'
}

/**
 * Container component with responsive max-widths
 * @example
 * ```tsx
 * <Container size="lg">
 *   <h1>Page Content</h1>
 * </Container>
 * ```
 */
export function Container({
  children,
  className,
  size = 'lg',
  as: Component = 'div',
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1440px]',
    full: 'max-w-full',
  }

  return (
    <Component
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  )
}
