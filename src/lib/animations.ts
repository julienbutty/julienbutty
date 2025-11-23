/**
 * Framer Motion animation variants and utilities
 * Centralized animation patterns for consistent UX
 */

import type { Variants } from 'framer-motion'

/**
 * Fade in animation variant
 * Simple opacity transition
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

/**
 * Fade in up animation variant
 * Opacity + vertical translation
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

/**
 * Scale in animation variant
 * Opacity + scale transformation
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

/**
 * Slide in from left animation variant
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

/**
 * Slide in from right animation variant
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

/**
 * Stagger children animation variant
 * Used for lists and grids
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

/**
 * Stagger item animation (child of staggerContainer)
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

/**
 * Page transition variant
 * Full page fade in/out
 */
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
}

/**
 * Hero text reveal animation
 * Dramatic entrance for hero headings
 */
export const heroTextReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
}

/**
 * Card hover animation
 * Interactive hover effect for cards
 */
export const cardHover = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

/**
 * Button tap animation
 * Interactive tap/click feedback
 */
export const buttonTap = {
  scale: 0.97,
}

/**
 * Easing functions
 * Custom easing curves for animations
 */
export const easings = {
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeOutExpo: [0.19, 1, 0.22, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
} as const

/**
 * Check if user prefers reduced motion
 * Respects prefers-reduced-motion media query
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Get animation variant with reduced motion support
 * Returns simpler animation if user prefers reduced motion
 */
export function getAnimationVariant(variant: Variants): Variants {
  if (prefersReducedMotion()) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
    }
  }
  return variant
}
