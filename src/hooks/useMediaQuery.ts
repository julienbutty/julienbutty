/**
 * useMediaQuery hook
 * Tracks media query matches for responsive behavior
 */

import { useEffect, useState } from 'react'

/**
 * Hook to match CSS media queries
 * @param query - Media query string (e.g., "(min-width: 768px)")
 * @returns Boolean indicating if query matches
 *
 * @example
 * ```tsx
 * const isMobile = useMediaQuery('(max-width: 768px)')
 * const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
 *
 * return (
 *   <div>
 *     {isMobile ? <MobileNav /> : <DesktopNav />}
 *   </div>
 * )
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    // Check if window is available (SSR safety)
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    // Check if window is available
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia(query)

    // Set initial value
    setMatches(mediaQuery.matches)

    // Create event listener
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Add listener (use addEventListener for better compatibility)
    mediaQuery.addEventListener('change', handleChange)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}

/**
 * Predefined breakpoint hooks for common responsive scenarios
 */

export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 767px)')
}

export function useIsTablet(): boolean {
  return useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
}

export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1024px)')
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

export function usePrefersDarkMode(): boolean {
  return useMediaQuery('(prefers-color-scheme: dark)')
}
