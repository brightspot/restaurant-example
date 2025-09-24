/**
 * Page Content Models
 *
 * These models define the structure for static page content (labels, text, etc.)
 * separate from business data. This content would typically come from a CMS
 * or content management system.
 */

// =============================================================================
// Base Content Types
// =============================================================================

export interface LocalizedContent {
  [key: string]: string
}

export interface ButtonConfig {
  text: string
  type?: 'primary' | 'secondary' | 'default'
  size?: 'small' | 'middle' | 'large'
}

export interface SectionContent {
  title?: string
  description?: string
  image?: string
  buttonText?: string
}

export interface FormFieldConfig {
  label: string
  placeholder: string
  required?: boolean
  type?: 'text' | 'email' | 'tel' | 'number' | 'select' | 'textarea'
}

// =============================================================================
// Page-Specific Content Models
// =============================================================================

export interface HomePageContent {
  title?: string
  subtitle?: string
  heroImages?: string[]
  sections?: {
    menu?: SectionContent
    reservations?: SectionContent
    locations?: SectionContent
  }
}

export interface AboutPageContent {
  title?: string
  heroImage?: string
  story?: {
    title?: string
    paragraphs?: string[]
  }
  timeline?: {
    title?: string
    events?: Array<{
      year?: string
      title?: string
      description?: string
    }>
  }
  values?: {
    mission?: {
      title?: string
      description?: string
    }
    values?: {
      title?: string
      description?: string
    }
    team?: {
      title?: string
      description?: string
    }
  }
}

export interface MenuPageContent {
  title?: string
  subtitle?: string
  labels?: {
    chefSpecial?: string
    vegetarian?: string
    vegan?: string
    glutenFree?: string
    spicy?: string
    prepTime?: string
    unavailable?: string
  }
}

export interface LocationsPageContent {
  title?: string
  subtitle?: string
  labels?: {
    mainLocation?: string
    hours?: string
    parking?: string
    accessibility?: string
  }
}

export interface ReservationsPageContent {
  title: string
  subtitle: string
  form: {
    labels: Record<string, string>
    placeholders: Record<string, string>
    buttonText: string
    successMessage: string
  }
  info: {
    title: string
    details: Array<{
      label: string
      text: string
    }>
  }
  contact: {
    title: string
    locations: Array<{
      name: string
      address: string
      phone: string
    }>
  }
}

export interface SearchPageContent {
  title?: string
  subtitle?: string
  placeholder?: string
  loadingText?: string
  noResultsText?: string
  resultsText?: string
  emptyState?: {
    title?: string
    subtitle?: string
  }
}

export interface RestaurantInfoContent {
  title?: string
  labels?: {
    address?: string
    phone?: string
    email?: string
    website?: string
    hours?: string
  }
}

export interface CommonContent {
  loading: {
    menu: string
    locations: string
  }
  errors: {
    menuLoad: string
    locationLoad: string
    menuLoadTitle: string
    locationLoadTitle: string
  }
}

export interface ThemeContent {
  backgroundImage: string
  backgroundAlt: string
}

export interface FooterContent {
  copyright: string
}

// =============================================================================
// Master Page Content Model
// =============================================================================

export interface PageContent {
  homepage: HomePageContent
  about: AboutPageContent
  menu: MenuPageContent
  locations: LocationsPageContent
  reservations: ReservationsPageContent
  search: SearchPageContent
  restaurantInfo: RestaurantInfoContent
  theme: ThemeContent
  footer: FooterContent
  common: CommonContent
}