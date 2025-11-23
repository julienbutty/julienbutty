/**
 * useIntersectionObserver hook
 * Detects when an element enters/exits the viewport
 * Used for lazy loading and scroll-triggered animations
 */

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

/**
 * Hook to track element visibility in viewport
 * @param options - Intersection Observer options
 * @returns Tuple of [ref, isIntersecting]
 *
 * @example
 * ```tsx
 * const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 })
 *
 * <motion.div
 *   ref={ref}
 *   initial="hidden"
 *   animate={isVisible ? "visible" : "hidden"}
 * >
 *   Content
 * </motion.div>
 * ```
 */
export function useIntersectionObserver<T extends Element = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<T>, boolean] {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
  } = options

  const ref = useRef<T>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // If already visible and frozen, don't create observer
    if (freezeOnceVisible && isIntersecting) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry?.isIntersecting ?? false
        setIsIntersecting(isVisible)
      },
      { threshold, root, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, freezeOnceVisible, isIntersecting])

  return [ref, isIntersecting]
}
