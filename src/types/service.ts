/**
 * Service-related TypeScript types
 */

import type { BlockContent, Slug, SanityDocument } from './common'

/**
 * Service entity
 * Represents a service offering displayed in the Services section
 */
export interface Service extends SanityDocument {
  _type: 'service'
  name: string
  slug: Slug
  shortDescription: string
  description: BlockContent
  icon?: string
  useCases?: string[]
  pricingGuidance?: string
  featured?: boolean
  published?: boolean
  order?: number
}
