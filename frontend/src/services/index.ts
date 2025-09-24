/**
 * Service Layer Entry Point
 *
 * This file provides the main interface for accessing all application services.
 * It implements the factory pattern to allow easy switching between different
 * service implementations (mock, GraphQL, REST, etc.).
 *
 * Service selection is controlled by the VITE_SERVICE_TYPE environment variable.
 */

import type { AppServices, ServiceConfig, ServiceType } from './types'
import { MockContentService, MockRestaurantDataService, MockReservationService } from './mock'
import { BrightspotContentService, BrightspotRestaurantDataService, BrightspotReservationService } from './brightspot'
import { NoOpContentService, NoOpRestaurantDataService, NoOpReservationService } from './noop'
import { config, getServiceType, getServiceConfig, getForceGlobalServiceType } from '../config/env'

// =============================================================================
// Service Factory
// =============================================================================

class ServiceFactory {
  private static instance: ServiceFactory
  private services: AppServices | null = null
  private config: ServiceConfig = {}

  private constructor() {}

  static getInstance(): ServiceFactory {
    if (!ServiceFactory.instance) {
      ServiceFactory.instance = new ServiceFactory()
    }
    return ServiceFactory.instance
  }

  configure(config: ServiceConfig): void {
    this.config = { ...this.config, ...config }
  }

  createServices(type?: ServiceType): AppServices {
    // Use environment config if type not explicitly provided
    const serviceType = type || getServiceType()
    switch (serviceType) {
      case 'mock':
        return {
          content: new MockContentService(),
          restaurant: new MockRestaurantDataService(),
          reservations: new MockReservationService()
        }

      case 'brightspot':
        return {
          content: new BrightspotContentService(),
          restaurant: new BrightspotRestaurantDataService(),
          reservations: new BrightspotReservationService()
        }

      case 'noop':
        return {
          content: new NoOpContentService(),
          restaurant: new NoOpRestaurantDataService(),
          reservations: new NoOpReservationService()
        }

      default:
        throw new Error(`Unknown service type: ${serviceType}. Valid types: mock, brightspot, noop`)
    }
  }

  getServices(): AppServices {
    if (!this.services) {
      // Use environment configuration to determine service type
      const serviceConfig = getServiceConfig()
      this.configure(serviceConfig)
      this.services = this.createServices()
    }
    return this.services
  }

  setServices(services: AppServices): void {
    this.services = services
  }
}

// =============================================================================
// Service Provider Hook (for future React Context usage)
// =============================================================================

let globalServices: AppServices | null = null

export function initializeServices(type?: ServiceType, serviceConfig?: ServiceConfig): AppServices {
  const factory = ServiceFactory.getInstance()

  // Use provided config or fall back to environment config
  const configToUse = serviceConfig || getServiceConfig()
  factory.configure(configToUse)

  globalServices = factory.createServices(type)
  factory.setServices(globalServices)

  if (config.isDevelopment) {
    console.log(`🚀 Services initialized with type: ${type || getServiceType()}`)
  }

  return globalServices
}

export function getServices(): AppServices {
  if (!globalServices) {
    globalServices = initializeServices()
  }
  return globalServices
}

// =============================================================================
// Convenience Functions
// =============================================================================

/**
 * Get the content service instance
 * @param serviceType - Optional service type to override global default
 */
export function getContentService(serviceType?: ServiceType) {
  if (serviceType && serviceType !== getServiceType() && !getForceGlobalServiceType()) {
    // Create a temporary service instance for this specific type
    const factory = ServiceFactory.getInstance()
    const tempServices = factory.createServices(serviceType)
    return tempServices.content
  }
  return getServices().content
}

/**
 * Get the restaurant data service instance
 * @param serviceType - Optional service type to override global default
 */
export function getRestaurantService(serviceType?: ServiceType) {
  if (serviceType && serviceType !== getServiceType() && !getForceGlobalServiceType()) {
    // Create a temporary service instance for this specific type
    const factory = ServiceFactory.getInstance()
    const tempServices = factory.createServices(serviceType)
    return tempServices.restaurant
  }
  return getServices().restaurant
}

/**
 * Get the reservation service instance
 * @param serviceType - Optional service type to override global default
 */
export function getReservationService(serviceType?: ServiceType) {
  if (serviceType && serviceType !== getServiceType() && !getForceGlobalServiceType()) {
    // Create a temporary service instance for this specific type
    const factory = ServiceFactory.getInstance()
    const tempServices = factory.createServices(serviceType)
    return tempServices.reservations
  }
  return getServices().reservations
}

// =============================================================================
// Types Export
// =============================================================================

export type { AppServices, ServiceConfig, ServiceType } from './types'
export type { PageContent } from '../models/page-content'
