/**
 * General utility functions
 */

/**
 * Class name utility for conditional CSS classes
 * Similar to clsx/classnames but lightweight
 *
 * @example
 * ```tsx
 * cn('btn', isActive && 'btn-active', 'btn-primary')
 * // => "btn btn-active btn-primary"
 * ```
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Format date to French locale
 * @param date - Date string or Date object
 * @returns Formatted date string (e.g., "22 novembre 2025")
 */
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(dateObj)
}

/**
 * Format year range
 * @param startYear - Start year
 * @param endYear - End year (optional, defaults to current year)
 * @returns Formatted year range (e.g., "2020-2025")
 */
export function formatYearRange(startYear: number, endYear?: number): string {
  const end = endYear || new Date().getFullYear()
  return startYear === end ? `${startYear}` : `${startYear}-${end}`
}

/**
 * Truncate text to specified length
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @param suffix - Suffix to add (default: "...")
 * @returns Truncated text
 */
export function truncate(
  text: string,
  maxLength: number,
  suffix: string = '...'
): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength - suffix.length).trim() + suffix
}

/**
 * Debounce function execution
 * @param fn - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Throttle function execution
 * @param fn - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Sleep utility for async operations
 * @param ms - Milliseconds to sleep
 * @returns Promise that resolves after delay
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Generate a unique ID
 * Simple ID generator for client-side use
 * @returns Unique ID string
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Check if running in browser
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined'
}

/**
 * Scroll to element with smooth behavior
 * @param elementId - Element ID to scroll to
 * @param offset - Offset in pixels (for fixed headers)
 */
export function scrollToElement(elementId: string, offset: number = 0): void {
  const element = document.getElementById(elementId)
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }
}

/**
 * Get scroll progress (0 to 1)
 * Returns how far down the page the user has scrolled
 */
export function getScrollProgress(): number {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  return docHeight > 0 ? scrollTop / docHeight : 0
}
