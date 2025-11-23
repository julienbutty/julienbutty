/**
 * Contact-related TypeScript types
 */

import type { SanityDocument } from './common'

/**
 * Contact inquiry status options
 */
export type InquiryStatus = 'new' | 'responded' | 'archived'

/**
 * Contact inquiry entity (optional)
 * Note: This is used if storing contact form submissions in Sanity.
 * The recommended approach is to use Netlify Forms instead.
 */
export interface ContactInquiry extends SanityDocument {
  _type: 'contactInquiry'
  name: string
  email: string
  phone?: string
  serviceInterest?: string
  message: string
  submittedAt: string
  status: InquiryStatus
  notes?: string
  spam: boolean
}

/**
 * Contact form data (frontend)
 * Used for form validation and submission to Netlify Forms
 */
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  serviceInterest?: string
  message: string
  rgpdConsent: boolean
}

/**
 * Contact form validation errors
 */
export interface ContactFormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  rgpdConsent?: string
}
