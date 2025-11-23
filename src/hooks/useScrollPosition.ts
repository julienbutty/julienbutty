/**
 * useScrollPosition hook
 * Tracks scroll position for scroll-based effects
 */

import { useEffect, useState } from 'react'
import { throttle } from '../lib/utils'

interface ScrollPosition {
  x: number
  y: number
}

/**
 * Hook to track window scroll position
 * @param throttleMs - Throttle interval in milliseconds (default: 100)
 * @returns Current scroll position {x, y}
 *
 * @example
 * ```tsx
 * const { y: scrollY } = useScrollPosition()
 * const isScrolled = scrollY > 100
 *
 * return (
 *   <header className={isScrolled ? 'scrolled' : ''}>
 *     Navigation
 *   </header>
 * )
 * ```
 */
export function useScrollPosition(throttleMs: number = 100): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: typeof window !== 'undefined' ? window.scrollX : 0,
    y: typeof window !== 'undefined' ? window.scrollY : 0,
  })

  useEffect(() => {
    // Check if window is available
    if (typeof window === 'undefined') return

    const handleScroll = throttle(() => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      })
    }, throttleMs)

    // Set initial position
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [throttleMs])

  return scrollPosition
}

/**
 * Hook to detect if user has scrolled past a threshold
 * @param threshold - Scroll threshold in pixels (default: 100)
 * @returns Boolean indicating if scrolled past threshold
 */
export function useIsScrolled(threshold: number = 100): boolean {
  const { y } = useScrollPosition()
  return y > threshold
}

/**
 * Hook to get scroll progress (0 to 1)
 * Useful for scroll progress indicators
 * @returns Scroll progress as decimal (0 = top, 1 = bottom)
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Check if window is available
    if (typeof window === 'undefined') return

    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(Math.min(Math.max(scrollProgress, 0), 1))
    }, 50)

    // Set initial progress
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return progress
}
