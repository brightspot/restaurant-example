/**
 * Frontend Data Models for Casa Mexicana Restaurant
 *
 * These types represent the logical frontend data models decoupled from the CMS backend.
 * They are designed around user experience and page requirements rather than CMS structure.
 */

// =============================================================================
// Base Types and Utilities
// =============================================================================

export interface BaseEntity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ImageAsset {
  url: string;
  alt?: string;
  title?: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
}

export interface ContentPiece {
  id: string;
  type: 'text' | 'rich-text' | 'image' | 'video' | 'timeline-event' | 'team-member';
  title?: string;
  content: string;
  image?: ImageAsset;
  metadata?: Record<string, any>;
  sortOrder?: number;
}

// =============================================================================
// Core Content Models
// =============================================================================

/**
 * Restaurant Profile - Core restaurant information and branding
 * Used by: HomePage, AboutPage, global navigation
 */
export interface RestaurantProfile extends BaseEntity {
  name: string;
  tagline?: string;
  description: string;

  // Contact Information
  primaryPhone?: string;
  primaryEmail?: string;
  website?: string;

  // Branding & Media
  logo?: ImageAsset;
  heroImage?: ImageAsset;
  brandColors?: {
    primary: string;
    secondary?: string;
    accent?: string;
  };

  // Business Information
  establishedYear?: number;
  ownerFamily?: string;
  cuisineType: string[];

  // Policies
  acceptsReservations: boolean;
  acceptsWalkIns: boolean;
  deliveryAvailable?: boolean;

  // Social Media
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    yelp?: string;
  };
}

/**
 * Menu Catalog - Complete menu structure with categories and items
 * Used by: HomePage (featured), MenuPage (full), SearchPage (searchable)
 */
export interface MenuCatalog extends BaseEntity {
  name: string;
  description?: string;
  effectiveDate?: Date;
  categories: MenuCategory[];

  // Computed properties for frontend use
  totalItems: number;
  availableItems: number;
  specialItems: MenuItem[];
  featuredItems: MenuItem[];
}

export interface MenuCategory extends BaseEntity {
  name: string;
  description?: string;
  image?: ImageAsset;
  sortOrder: number;

  // Availability
  isAvailable: boolean;
  availabilitySchedule?: {
    days: string[];
    startTime?: string;
    endTime?: string;
    notes?: string;
  };

  // Items
  items: MenuItem[];

  // Computed properties
  availableItemsCount: number;
}

export interface MenuItem extends BaseEntity {
  name: string;
  description?: string;
  shortDescription?: string; // For cards/previews
  image?: ImageAsset;

  // Pricing
  price: number;
  originalPrice?: number; // For sale items
  isOnSale?: boolean;

  // Organization
  category: string; // Category name for reference
  sortOrder?: number;

  // Dietary & Health Information
  dietary: {
    isVegetarian: boolean;
    isVegan: boolean;
    isGlutenFree: boolean;
    isDairyFree?: boolean;
    isKeto?: boolean;
    isSpicy: boolean;
    spiceLevel?: number; // 1-5
  };

  allergens?: string[];

  // Nutritional Info (optional)
  nutrition?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };

  // Preparation
  ingredients?: string;
  preparationTime?: number; // in minutes

  // Availability & Status
  isAvailable: boolean;
  isSpecial: boolean; // Chef's special
  isFeatured: boolean; // Homepage feature
  isSignature: boolean; // Restaurant signature item
  isNew?: boolean;
  isLimitedTime?: boolean;

  // Additional Info
  portionSize?: string;
  servingStyle?: string;
  customizations?: string[];

  // SEO & Search
  searchKeywords?: string[];
}

/**
 * Location Directory - All restaurant locations and details
 * Used by: HomePage (featured), LocationsPage (full), ReservationsPage (booking)
 */
export interface LocationDirectory extends BaseEntity {
  locations: Location[];

  // Computed properties
  mainLocation?: Location;
  totalLocations: number;
}

export interface Location extends BaseEntity {
  name: string;
  displayName?: string; // For UI (e.g., "Downtown Location")

  // Address
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country?: string;
    fullAddress: string; // Computed for display
  };

  // Contact
  phone?: string;
  email?: string;

  // Geography
  coordinates?: {
    latitude: number;
    longitude: number;
  };

  // Operations
  hours: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
    notes?: string;
  };

  // Status & Classification
  isMainLocation: boolean;
  isActive: boolean;
  acceptsReservations: boolean;

  // Amenities & Information
  parkingInfo?: string;
  accessibilityInfo?: string;
  seatingCapacity?: number;
  hasOutdoorSeating?: boolean;
  hasTakeout?: boolean;
  hasDelivery?: boolean;

  // Media
  image?: ImageAsset;
  galleryImages?: ImageAsset[];

  // Special Features
  specialFeatures?: string[];
  nearbyLandmarks?: string[];
}

/**
 * Content Library - Flexible content for stories, timelines, team info
 * Used by: AboutPage, HomePage (hero content)
 */
export interface ContentLibrary extends BaseEntity {
  sections: ContentSection[];
}

export interface ContentSection extends BaseEntity {
  type: 'story' | 'timeline' | 'team' | 'awards' | 'gallery' | 'values';
  title: string;
  subtitle?: string;
  description?: string;
  sortOrder: number;
  isVisible: boolean;

  content: ContentPiece[];

  // Section-specific metadata
  metadata?: {
    timeline?: {
      startYear?: number;
      endYear?: number;
    };
    team?: {
      department?: string;
    };
    gallery?: {
      layout: 'grid' | 'carousel' | 'masonry';
    };
  };
}

// =============================================================================
// Specialized Models
// =============================================================================

/**
 * Search Index - Optimized searchable content extracted from menu
 * Used by: SearchPage
 */
export interface SearchIndex extends BaseEntity {
  items: SearchableMenuItem[];

  // Search configuration
  searchableFields: string[];
  filters: SearchFilter[];

  // Computed properties
  totalSearchableItems: number;
}

export interface SearchableMenuItem {
  id: string;
  name: string;
  description?: string;
  category: string;
  price: number;

  // Flattened search content
  searchContent: string; // Combined searchable text
  searchKeywords: string[];

  // Quick filter fields
  dietary: {
    isVegetarian: boolean;
    isVegan: boolean;
    isGlutenFree: boolean;
    isSpicy: boolean;
  };

  isAvailable: boolean;
  isSpecial: boolean;
}

export interface SearchFilter {
  id: string;
  name: string;
  type: 'boolean' | 'range' | 'select';
  options?: string[];
  field: string;
}

/**
 * Reservation System - Booking-specific data and configurations
 * Used by: ReservationsPage
 */
export interface ReservationSystem extends BaseEntity {
  config: ReservationConfig;
  availableLocations: Location[];
}

export interface ReservationConfig {
  isEnabled: boolean;

  // Booking Rules
  maxPartySize: number;
  minPartySize: number;
  advanceBookingDays: number;

  // Time Slots
  timeSlots: {
    interval: number; // minutes
    openTime: string;
    closeTime: string;
  };

  // Availability
  unavailableDates: string[];
  specialHours?: {
    date: string;
    openTime?: string;
    closeTime?: string;
    isCllosed?: boolean;
  }[];

  // Form Configuration
  requiredFields: string[];
  optionalFields: string[];

  // Messaging
  messages: {
    success: string;
    confirmationEmailSubject: string;
    confirmationEmailTemplate: string;
  };
}

/**
 * Featured Content - Curated content for homepage
 * Used by: HomePage
 */
export interface FeaturedContent extends BaseEntity {
  heroSection: {
    title: string;
    subtitle?: string;
    backgroundImage?: ImageAsset;
    ctaButtons?: {
      text: string;
      link: string;
      type: 'primary' | 'secondary';
    }[];
  };

  featuredMenuItems: MenuItem[];
  featuredLocations: Location[];

  galleryImages: ImageAsset[];

  testimonials?: {
    id: string;
    text: string;
    author: string;
    rating?: number;
    source?: string;
  }[];

  quickStats?: {
    label: string;
    value: string;
    icon?: string;
  }[];
}

// =============================================================================
// Page-Specific Composite Models
// =============================================================================

/**
 * Page data models - Combination of core models for specific page needs
 */
export interface HomePageData {
  restaurant: RestaurantProfile;
  featured: FeaturedContent;
  menuPreview: {
    categories: MenuCategory[];
    featuredItems: MenuItem[];
  };
  locationsPreview: Location[];
}

export interface AboutPageData {
  restaurant: RestaurantProfile;
  content: ContentLibrary;
}

export interface MenuPageData {
  restaurant: RestaurantProfile;
  menu: MenuCatalog;
}

export interface LocationsPageData {
  restaurant: RestaurantProfile;
  locations: LocationDirectory;
}

export interface SearchPageData {
  restaurant: RestaurantProfile;
  searchIndex: SearchIndex;
  menu: MenuCatalog; // For context
}

export interface ReservationsPageData {
  restaurant: RestaurantProfile;
  reservationSystem: ReservationSystem;
}

// =============================================================================
// API Response Types
// =============================================================================

/**
 * Standard API response wrapper
 */
export interface ApiResponse<T> {
  data: T;
  meta?: {
    timestamp: Date;
    version: string;
    cached: boolean;
    cacheExpiry?: Date;
  };
  errors?: {
    code: string;
    message: string;
    field?: string;
  }[];
}

/**
 * Pagination support for lists
 */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasMore: boolean;
  };
}

// =============================================================================
// Form Types (for reservations, contact, etc.)
// =============================================================================

export interface ReservationFormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  reservationDate: string;
  reservationTime: string;
  partySize: number;
  locationId: string;
  specialRequests?: string;
}

export interface ReservationConfirmation {
  confirmationNumber: string;
  status: 'pending' | 'confirmed' | 'waitlisted';
  reservationDetails: ReservationFormData & {
    id: string;
    createdAt: Date;
  };
  location: Location;
  estimatedWaitTime?: number;
  instructions?: string;
}

// =============================================================================
// Error Types
// =============================================================================

export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: Date;
}

export interface ValidationError extends AppError {
  field: string;
  value?: any;
}

// =============================================================================
// Utility Types
// =============================================================================

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface DataState<T> {
  data?: T;
  loading: LoadingState;
  error?: AppError;
  lastUpdated?: Date;
}