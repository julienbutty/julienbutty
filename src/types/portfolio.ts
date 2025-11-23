/**
 * Portfolio-related TypeScript types
 */

import type { SanityImage, BlockContent, Slug, SanityDocument } from './common'

/**
 * Client type options for portfolio projects
 */
export type ClientType = 'PME' | 'Particulier' | 'Association' | 'Startup'

/**
 * Category entity for filtering portfolio projects
 */
export interface Category extends SanityDocument {
  _type: 'category'
  name: string
  slug: Slug
  description?: string
  icon?: string
  order?: number
}

/**
 * Portfolio project entity
 * Represents a completed client project showcased in the portfolio
 */
export interface PortfolioProject extends SanityDocument {
  _type: 'portfolioProject'
  title: string
  slug: Slug
  description: string
  fullDescription?: BlockContent
  clientType: ClientType
  projectYear: number
  thumbnail: SanityImage
  images?: SanityImage[]
  categories: Category[]
  technologies?: string[]
  outcomes: string[]
  featured?: boolean
  published?: boolean
  order?: number
}

/**
 * Testimonial entity
 * Represents client feedback and social proof
 */
export interface Testimonial extends SanityDocument {
  _type: 'testimonial'
  clientName: string
  clientRole?: string
  text: string
  projectReference?: PortfolioProject
  clientPhoto?: SanityImage
  featured?: boolean
  published?: boolean
  order?: number
}
