/**
 * Site settings and configuration types
 */

import type { SanityImage, BlockContent, SanityDocument } from './common'

/**
 * Site settings entity (singleton)
 * Global site configuration and content
 */
export interface SiteSettings extends SanityDocument {
  _type: 'siteSettings'
  siteTitle: string
  siteDescription: string
  seoKeywords?: string[]
  ogImage?: SanityImage
  footerText?: BlockContent
  legalNotice?: BlockContent
  privacyPolicy?: BlockContent
  copyrightText?: string
}
