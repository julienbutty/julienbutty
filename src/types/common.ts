/**
 * Common TypeScript types shared across the application
 */

/**
 * Sanity image type with asset reference and optional alt text
 */
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

/**
 * Sanity block content (rich text) type
 * Used for long-form content like descriptions, bios, etc.
 */
export type BlockContent = Array<{
  _type: 'block'
  children: Array<{
    _type: string
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _key: string
    _type: string
    [key: string]: any
  }>
  style?: string
  listItem?: string
  level?: number
}>

/**
 * Sanity slug type
 */
export interface Slug {
  current: string
  _type?: 'slug'
}

/**
 * Base Sanity document fields
 */
export interface SanityDocument {
  _id: string
  _type: string
  _createdAt?: string
  _updatedAt?: string
  _rev?: string
}
