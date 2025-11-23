/**
 * Hook to handle scrolling to hash anchors
 * Supports both same-page and cross-page navigation
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to element with given hash ID
 */
export function scrollToHash(hash: string, behavior: ScrollBehavior = 'smooth') {
  if (!hash) return

  // Remove the # if present
  const id = hash.replace('#', '')
  const element = document.getElementById(id)

  if (element) {
    // Small delay to ensure layout is complete
    setTimeout(() => {
      element.scrollIntoView({ behavior, block: 'start' })
    }, 100)
  }
}

/**
 * Hook that automatically scrolls to hash on route change
 */
export function useScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      scrollToHash(location.hash)
    }
  }, [location])
}

/**
 * Navigate to a section on the homepage
 * Can be used from any page
 */
export function navigateToHomeSection(sectionId: string) {
  const hash = sectionId.startsWith('#') ? sectionId : `#${sectionId}`

  // If already on homepage, just scroll
  if (window.location.pathname === '/') {
    scrollToHash(hash)
  } else {
    // Navigate to homepage with hash
    window.location.href = `/${hash}`
  }
}
