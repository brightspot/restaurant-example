/**
 * Service Layer Types
 *
 * These interfaces define the contracts for different data services.
 * Services can be implemented as mock services, GraphQL services, REST APIs, etc.
 */

import type {
  Restaurant,
  Location,
  MenuCategory,
  MenuItem,
  Reservation
} from '../types'
import type { PageContent } from '../models/page-content'

// =============================================================================
// Service Response Types
// =============================================================================

export interface ServiceResponse<T> {
  data: T
  success: boolean
  error?: string
  timestamp: Date
}

export interface ServiceError {
  code: string
  message: string
  details?: any
}

// =============================================================================
// Content Service Interface
// =============================================================================

/**
 * Content Service - Handles static page content (labels, text, images)
 * This would typically fetch from a CMS or content management system
 */
export interface ContentService {
  /**
   * Get all page content for the application
   */
  getPageContent(): Promise<ServiceResponse<PageContent>>

  /**
   * Get content for a specific page
   */
  getPageContentByKey(pageKey: keyof PageContent): Promise<ServiceResponse<PageContent[keyof PageContent]>>
}

// =============================================================================
// Restaurant Data Service Interface
// =============================================================================

/**
 * Restaurant Data Service - Handles business data (restaurant info, menu, locations)
 * This would typically fetch from GraphQL, REST API, or database
 */
export interface RestaurantDataService {
  /**
   * Get restaurant profile information
   */
  getRestaurantInfo(): Promise<ServiceResponse<Restaurant>>

  /**
   * Get all restaurant locations
   */
  getLocations(): Promise<ServiceResponse<Location[]>>

  /**
   * Get location by ID
   */
  getLocationById(id: string): Promise<ServiceResponse<Location>>

  /**
   * Get all menu categories with items
   */
  getMenuCategories(): Promise<ServiceResponse<MenuCategory[]>>

  /**
   * Get menu category by ID with items
   */
  getMenuCategoryById(id: string): Promise<ServiceResponse<MenuCategory>>

  /**
   * Search menu items by query
   */
  searchMenuItems(query: string): Promise<ServiceResponse<MenuItem[]>>

  /**
   * Get featured menu items
   */
  getFeaturedMenuItems(): Promise<ServiceResponse<MenuItem[]>>
}

// =============================================================================
// Reservation Service Interface
// =============================================================================

export interface CreateReservationRequest {
  customerName: string
  customerEmail: string
  customerPhone: string
  reservationDateTime: string
  partySize: number
  locationId: string
  specialRequests?: string
}

/**
 * Reservation Service - Handles reservation operations
 */
export interface ReservationService {
  /**
   * Create a new reservation
   */
  createReservation(request: CreateReservationRequest): Promise<ServiceResponse<Reservation>>

  /**
   * Get reservation by confirmation number
   */
  getReservation(confirmationNumber: string): Promise<ServiceResponse<Reservation>>

  /**
   * Get available time slots for a specific date and location
   */
  getAvailableTimeSlots(date: string, locationId: string): Promise<ServiceResponse<string[]>>
}

// =============================================================================
// Master Service Interface
// =============================================================================

/**
 * Main service interface that aggregates all service types
 * This is what the application will use to access all data
 */
export interface AppServices {
  content: ContentService
  restaurant: RestaurantDataService
  reservations: ReservationService
}

// =============================================================================
// Service Configuration
// =============================================================================

export interface ServiceConfig {
  baseUrl?: string
  apiKey?: string
  timeout?: number
  retries?: number
  enableCaching?: boolean
  cacheTimeout?: number
}

export type ServiceType = 'mock' | 'brightspot' | 'noop'