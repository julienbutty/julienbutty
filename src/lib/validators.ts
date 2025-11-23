/**
 * Form validation utilities
 * Client-side validation for contact form and other inputs
 */

import type { ContactFormData, ContactFormErrors } from '../types'

/**
 * Email validation regex
 * RFC 5322 compliant basic pattern
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * French phone number regex
 * Matches formats: 06 12 34 56 78, +33 6 12 34 56 78, 0612345678
 */
const FRENCH_PHONE_REGEX = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim())
}

/**
 * Validate French phone number format
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || phone.trim() === '') return true // Optional field
  return FRENCH_PHONE_REGEX.test(phone.trim())
}

/**
 * Validate required field
 */
export function isRequired(value: string): boolean {
  return value.trim().length > 0
}

/**
 * Validate string length
 */
export function isWithinLength(
  value: string,
  min: number,
  max: number
): boolean {
  const length = value.trim().length
  return length >= min && length <= max
}

/**
 * Validate contact form data
 * Returns validation errors or null if valid
 */
export function validateContactForm(
  data: ContactFormData
): ContactFormErrors | null {
  const errors: ContactFormErrors = {}

  // Name validation
  if (!isRequired(data.name)) {
    errors.name = 'Le nom est requis'
  } else if (!isWithinLength(data.name, 2, 100)) {
    errors.name = 'Le nom doit contenir entre 2 et 100 caractères'
  }

  // Email validation
  if (!isRequired(data.email)) {
    errors.email = "L'email est requis"
  } else if (!isValidEmail(data.email)) {
    errors.email = "L'email n'est pas valide"
  }

  // Phone validation (optional)
  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = "Le numéro de téléphone n'est pas valide"
  }

  // Message validation
  if (!isRequired(data.message)) {
    errors.message = 'Le message est requis'
  } else if (!isWithinLength(data.message, 10, 2000)) {
    errors.message = 'Le message doit contenir entre 10 et 2000 caractères'
  }

  // RGPD consent validation
  if (!data.rgpdConsent) {
    errors.rgpdConsent =
      'Vous devez accepter la politique de confidentialité'
  }

  // Return null if no errors, otherwise return errors object
  return Object.keys(errors).length > 0 ? errors : null
}

/**
 * Sanitize HTML to prevent XSS attacks
 * Strips all HTML tags from user input
 */
export function sanitizeHtml(input: string): string {
  return input.replace(/<[^>]*>/g, '')
}

/**
 * Trim and normalize whitespace
 */
export function normalizeWhitespace(input: string): string {
  return input.trim().replace(/\s+/g, ' ')
}

/**
 * Check if string contains spam-like patterns
 * Basic spam detection for contact forms
 */
export function isLikelySpam(text: string): boolean {
  const spamPatterns = [
    /\b(viagra|cialis|casino|poker|loan|credit|debt)\b/i,
    /\b(buy now|click here|limited time|act now|free money)\b/i,
    /http[s]?:\/\/.*http[s]?:\/\//i, // Multiple URLs
    /<a\s+href=/i, // HTML links
    /<script/i, // Script tags
    /\bsex\b/i, // Adult content
    /\[url=/i, // BBCode links
  ]

  return spamPatterns.some((pattern) => pattern.test(text))
}

/**
 * Sanitize user input to prevent injection attacks
 * Removes dangerous characters and patterns
 */
export function sanitizeInput(input: string): string {
  let sanitized = input

  // Remove HTML tags
  sanitized = sanitizeHtml(sanitized)

  // Remove script-related content
  sanitized = sanitized.replace(/javascript:/gi, '')
  sanitized = sanitized.replace(/on\w+\s*=/gi, '') // Remove event handlers

  // Normalize whitespace
  sanitized = normalizeWhitespace(sanitized)

  return sanitized
}

/**
 * Detect suspicious patterns that might indicate automated submissions
 */
export function isSuspiciousSubmission(data: ContactFormData): boolean {
  // Check if message is too short (likely spam)
  if (data.message.length < 10) return true

  // Check if name contains URLs or email addresses
  if (/@|http/i.test(data.name)) return true

  // Check if message contains spam patterns
  if (isLikelySpam(data.message)) return true

  // Check for excessive capitalization (SPAM INDICATOR)
  const capsRatio = (data.message.match(/[A-Z]/g) || []).length / data.message.length
  if (capsRatio > 0.5 && data.message.length > 20) return true

  return false
}
