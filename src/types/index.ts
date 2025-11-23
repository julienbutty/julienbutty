/**
 * Central export point for all TypeScript types
 */

// Common types
export type {
  SanityImage,
  BlockContent,
  Slug,
  SanityDocument,
} from './common'

// Portfolio types
export type {
  Category,
  PortfolioProject,
  Testimonial,
  ClientType,
} from './portfolio'

// Service types
export type { Service } from './service'

// About types
export type {
  AboutContent,
  SkillCategory,
  SocialLink,
  SocialPlatform,
} from './about'

// Contact types
export type {
  ContactInquiry,
  ContactFormData,
  ContactFormErrors,
  InquiryStatus,
} from './contact'

// Site settings types
export type { SiteSettings } from './site'
