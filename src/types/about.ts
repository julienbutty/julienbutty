/**
 * About-related TypeScript types
 */

import type { SanityImage, BlockContent, SanityDocument } from './common'

/**
 * Social media platform options
 */
export type SocialPlatform = 'LinkedIn' | 'GitHub' | 'Twitter'

/**
 * Skill category object
 * Groups skills by category (e.g., "Frontend", "Backend")
 */
export interface SkillCategory {
  category: string
  items: string[]
}

/**
 * Social link object
 * Represents a social media or professional profile link
 */
export interface SocialLink {
  platform: SocialPlatform
  url: string
  display: boolean
}

/**
 * About content entity (singleton)
 * Represents Julien's professional information and branding
 */
export interface AboutContent extends SanityDocument {
  _type: 'aboutContent'
  bio: BlockContent
  profilePhoto: SanityImage
  location: string
  skills?: SkillCategory[]
  experience?: BlockContent
  approach?: BlockContent
  email: string
  phone?: string
  socialLinks?: SocialLink[]
}
