/**
 * Environment Configuration
 *
 * Centralizes all environment variable access and provides type-safe configuration.
 * Uses Vite's import.meta.env for environment variable access.
 */

import type { ServiceType, ServiceConfig } from '../services/types'

// =============================================================================
// Environment Variable Validation
// =============================================================================

const validateServiceType = (value: string | undefined): ServiceType => {
  const validTypes: ServiceType[] = ['mock', 'brightspot', 'noop']

  if (!value) {
    console.warn('VITE_SERVICE_TYPE not set, defaulting to "mock"')
    return 'mock'
  }

  if (validTypes.includes(value as ServiceType)) {
    return value as ServiceType
  }

  console.warn(`Invalid VITE_SERVICE_TYPE "${value}", defaulting to "mock". Valid options: ${validTypes.join(', ')}`)
  return 'mock'
}

const validateNumber = (value: string | undefined, defaultValue: number, name: string): number => {
  if (!value) {
    return defaultValue
  }

  const parsed = parseInt(value, 10)
  if (isNaN(parsed) || parsed <= 0) {
    console.warn(`Invalid ${name} "${value}", using default: ${defaultValue}`)
    return defaultValue
  }

  return parsed
}

const validateBoolean = (value: string | undefined, defaultValue: boolean): boolean => {
  if (!value) {
    return defaultValue
  }

  return value.toLowerCase() === 'true'
}

const validateUrl = (value: string | undefined, name: string): string | undefined => {
  if (!value) {
    return undefined
  }

  try {
    new URL(value)
    return value
  } catch {
    console.warn(`Invalid ${name} URL "${value}", ignoring`)
    return undefined
  }
}

// =============================================================================
// Configuration Object
// =============================================================================

export interface AppConfig {
  // Service Configuration
  serviceType: ServiceType
  serviceConfig: ServiceConfig

  // Development
  isDevelopment: boolean
  isProduction: boolean

  // Brightspot URLs
  graphqlEndpoint?: string

  // Feature Flags
  enableServiceCaching: boolean
  forceGlobalServiceType: boolean

  // Timeouts
  apiTimeout: number
  cacheTimeout: number
}

// =============================================================================
// Environment Configuration
// =============================================================================

const createConfig = (): AppConfig => {
  const mode = import.meta.env.MODE
  const isDevelopment = mode === 'development'
  const isProduction = mode === 'production'

  // Service configuration
  const serviceType = validateServiceType(import.meta.env.VITE_SERVICE_TYPE)

  // URL configuration
  const graphqlEndpoint = validateUrl(import.meta.env.VITE_GRAPHQL_ENDPOINT, 'VITE_GRAPHQL_ENDPOINT')

  // Timeout configuration
  const apiTimeout = validateNumber(import.meta.env.VITE_API_TIMEOUT, 5000, 'VITE_API_TIMEOUT')
  const cacheTimeout = validateNumber(import.meta.env.VITE_CACHE_TIMEOUT, 300000, 'VITE_CACHE_TIMEOUT')

  // Feature flags
  const enableServiceCaching = validateBoolean(import.meta.env.VITE_ENABLE_SERVICE_CACHING, true)
  const forceGlobalServiceType = validateBoolean(import.meta.env.VITE_FORCE_GLOBAL_SERVICE_TYPE, false)

  // Service-specific configuration
  const serviceConfig: ServiceConfig = {
    baseUrl: undefined,
    timeout: apiTimeout,
    enableCaching: enableServiceCaching,
    cacheTimeout: cacheTimeout
  }

  // Add service-specific URLs
  if (serviceType === 'brightspot' && graphqlEndpoint) {
    serviceConfig.baseUrl = graphqlEndpoint
  }

  return {
    serviceType,
    serviceConfig,
    isDevelopment,
    isProduction,
    graphqlEndpoint,
    enableServiceCaching,
    forceGlobalServiceType,
    apiTimeout,
    cacheTimeout
  }
}

// =============================================================================
// Exported Configuration
// =============================================================================

export const config = createConfig()

// Development logging
if (config.isDevelopment) {
  console.log('🔧 Service Configuration:', {
    serviceType: config.serviceType,
    graphqlEndpoint: config.graphqlEndpoint,
    timeout: config.apiTimeout,
    caching: config.enableServiceCaching ? `enabled (${config.cacheTimeout}ms)` : 'disabled'
  })
}

// =============================================================================
// Configuration Getters
// =============================================================================

export const getServiceType = (): ServiceType => config.serviceType
export const getServiceConfig = (): ServiceConfig => config.serviceConfig
export const getForceGlobalServiceType = (): boolean => config.forceGlobalServiceType
export const isDevelopment = (): boolean => config.isDevelopment
export const isProduction = (): boolean => config.isProduction

// =============================================================================
// Runtime Configuration Updates
// =============================================================================

/**
 * Update service configuration at runtime
 * Useful for testing or dynamic configuration changes
 */
export const updateServiceConfig = (updates: Partial<ServiceConfig>): void => {
  Object.assign(config.serviceConfig, updates)

  if (config.isDevelopment) {
    console.log('🔄 Service configuration updated:', updates)
  }
}