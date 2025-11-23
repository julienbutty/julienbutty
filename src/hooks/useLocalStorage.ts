/**
 * useLocalStorage hook
 * Persists state in browser localStorage with SSR safety
 */

import { useState, useEffect } from 'react'

/**
 * Hook to persist state in localStorage
 * @param key - localStorage key
 * @param initialValue - Initial value if key doesn't exist
 * @returns Tuple of [storedValue, setValue]
 *
 * @example
 * ```tsx
 * const [cookieConsent, setCookieConsent] = useLocalStorage('cookie-consent', false)
 *
 * return (
 *   <button onClick={() => setCookieConsent(true)}>
 *     Accept Cookies
 *   </button>
 * )
 * ```
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}

/**
 * Hook to remove an item from localStorage
 * @param key - localStorage key to remove
 * @returns Function to remove the item
 */
export function useRemoveLocalStorage(): (key: string) => void {
  return (key: string) => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key)
      }
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error)
    }
  }
}

/**
 * Hook to check if localStorage is available
 * Useful for detecting private browsing mode or disabled storage
 * @returns Boolean indicating if localStorage is available
 */
export function useIsLocalStorageAvailable(): boolean {
  const [isAvailable, setIsAvailable] = useState(false)

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const testKey = '__test__'
        window.localStorage.setItem(testKey, 'test')
        window.localStorage.removeItem(testKey)
        setIsAvailable(true)
      }
    } catch {
      setIsAvailable(false)
    }
  }, [])

  return isAvailable
}
