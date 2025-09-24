/**
 * Service Data Hook
 *
 * Abstracts the common pattern of loading data from services with loading states,
 * error handling, and automatic retries. Makes components more declarative about
 * their data requirements.
 */

import { useState, useEffect, useCallback } from 'react'
import type { ServiceResponse, ServiceType, CreateReservationRequest } from '../services/types'
import { getContentService, getRestaurantService, getReservationService } from '../services'

// =============================================================================
// Hook Types
// =============================================================================

export interface DataState<T> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => void
}

export type ServiceCall<T> = () => Promise<ServiceResponse<T>>

export interface UseServiceDataOptions {
  /** Skip automatic loading on mount */
  skip?: boolean
  /** Retry failed requests automatically */
  retries?: number
  /** Retry delay in milliseconds */
  retryDelay?: number
  /** Custom error message prefix */
  errorPrefix?: string
  /** Override global service type for this hook */
  serviceType?: ServiceType
}

// =============================================================================
// Single Service Data Hook
// =============================================================================

/**
 * Load data from a single service call
 */
export function useServiceData<T>(
  serviceCall: ServiceCall<T>,
  options: UseServiceDataOptions = {}
): DataState<T> {
  const {
    skip = false,
    retries = 0,
    retryDelay = 1000,
    errorPrefix = 'Failed to load data'
  } = options

  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(!skip)
  const [error, setError] = useState<string | null>(null)

  const loadData = useCallback(async (attemptCount = 0) => {
    try {
      setLoading(true)
      setError(null)

      const response = await serviceCall()

      if (response.success) {
        setData(response.data)
      } else {
        const errorMessage = response.error || 'Unknown error occurred'

        // Retry logic
        if (attemptCount < retries) {
          setTimeout(() => loadData(attemptCount + 1), retryDelay)
          return
        }

        setError(`${errorPrefix}: ${errorMessage}`)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'

      // Retry logic for network errors
      if (attemptCount < retries) {
        setTimeout(() => loadData(attemptCount + 1), retryDelay)
        return
      }

      setError(`${errorPrefix}: ${errorMessage}`)
      console.error('Service data loading error:', err)
    } finally {
      setLoading(false)
    }
  }, [serviceCall, retries, retryDelay, errorPrefix])

  const refetch = useCallback(() => {
    loadData()
  }, [loadData])

  useEffect(() => {
    if (!skip) {
      loadData()
    }
  }, [loadData, skip])

  return { data, loading, error, refetch }
}

// =============================================================================
// Multiple Service Data Hook
// =============================================================================

export type ServiceCallMap = Record<string, ServiceCall<any>>
export type ServiceDataMap<T extends ServiceCallMap> = {
  [K in keyof T]: T[K] extends ServiceCall<infer U> ? U | null : never
}

export interface MultiDataState<T extends ServiceCallMap> {
  data: ServiceDataMap<T>
  loading: boolean
  error: string | null
  refetch: () => void
  refetchOne: (key: keyof T) => void
}

/**
 * Load data from multiple service calls concurrently
 */
export function useMultiServiceData<T extends ServiceCallMap>(
  serviceCalls: T,
  options: UseServiceDataOptions = {}
): MultiDataState<T> {
  const {
    skip = false,
    retries = 0,
    retryDelay = 1000,
    errorPrefix = 'Failed to load data'
  } = options

  const [data, setData] = useState<ServiceDataMap<T>>(() =>
    Object.keys(serviceCalls).reduce((acc, key) => {
      acc[key as keyof T] = null as any
      return acc
    }, {} as ServiceDataMap<T>)
  )
  const [loading, setLoading] = useState(!skip)
  const [error, setError] = useState<string | null>(null)

  const loadData = useCallback(async (attemptCount = 0) => {
    try {
      setLoading(true)
      setError(null)

      const promises = Object.entries(serviceCalls).map(async ([key, serviceCall]) => {
        const response = await serviceCall()
        return { key, response }
      })

      const results = await Promise.all(promises)
      const newData = { ...data }
      const errors: string[] = []

      results.forEach(({ key, response }) => {
        if (response.success) {
          newData[key as keyof T] = response.data
        } else {
          errors.push(`${key}: ${response.error || 'Unknown error'}`)
        }
      })

      if (errors.length > 0) {
        // Retry logic
        if (attemptCount < retries) {
          setTimeout(() => loadData(attemptCount + 1), retryDelay)
          return
        }

        setError(`${errorPrefix}: ${errors.join(', ')}`)
      } else {
        setData(newData)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'

      // Retry logic for network errors
      if (attemptCount < retries) {
        setTimeout(() => loadData(attemptCount + 1), retryDelay)
        return
      }

      setError(`${errorPrefix}: ${errorMessage}`)
      console.error('Multi-service data loading error:', err)
    } finally {
      setLoading(false)
    }
  }, [serviceCalls, data, retries, retryDelay, errorPrefix])

  const loadSingleData = useCallback(async (key: keyof T) => {
    const serviceCall = serviceCalls[key]
    if (!serviceCall) return

    try {
      const response = await serviceCall()
      if (response.success) {
        setData(prev => ({ ...prev, [key]: response.data }))
      } else {
        setError(`Failed to load ${String(key)}: ${response.error || 'Unknown error'}`)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      setError(`Failed to load ${String(key)}: ${errorMessage}`)
      console.error(`Service data loading error for ${String(key)}:`, err)
    }
  }, [serviceCalls])

  const refetch = useCallback(() => {
    loadData()
  }, [loadData])

  const refetchOne = useCallback((key: keyof T) => {
    loadSingleData(key)
  }, [loadSingleData])

  useEffect(() => {
    if (!skip) {
      loadData()
    }
  }, [loadData, skip])

  return { data, loading, error, refetch, refetchOne }
}

// =============================================================================
// Specialized Service Hooks
// =============================================================================

/**
 * Load page content by key
 */
export function usePageContent<K extends keyof import('../models/page-content').PageContent>(
  pageKey: K,
  options?: UseServiceDataOptions
): DataState<any> {
  const serviceCall = useCallback(() => {
    return getContentService(options?.serviceType).getPageContentByKey(pageKey)
  }, [pageKey, options?.serviceType])

  return useServiceData(
    serviceCall,
    {
      errorPrefix: `Failed to load ${String(pageKey)} content`,
      ...options
    }
  )
}

/**
 * Load restaurant info
 */
export function useRestaurantInfo(options?: UseServiceDataOptions): DataState<import('../types').Restaurant> {
  const serviceCall = useCallback(() => {
    return getRestaurantService(options?.serviceType).getRestaurantInfo()
  }, [options?.serviceType])

  return useServiceData(
    serviceCall,
    {
      errorPrefix: 'Failed to load restaurant information',
      ...options
    }
  )
}

/**
 * Load restaurant locations
 */
export function useLocations(options?: UseServiceDataOptions): DataState<import('../types').Location[]> {
  const serviceCall = useCallback(() => {
    return getRestaurantService(options?.serviceType).getLocations()
  }, [options?.serviceType])

  return useServiceData(
    serviceCall,
    {
      errorPrefix: 'Failed to load locations',
      ...options
    }
  )
}

/**
 * Load menu categories
 */
export function useMenuCategories(options?: UseServiceDataOptions): DataState<import('../types').MenuCategory[]> {
  const serviceCall = useCallback(() => {
    return getRestaurantService(options?.serviceType).getMenuCategories()
  }, [options?.serviceType])

  return useServiceData(
    serviceCall,
    {
      errorPrefix: 'Failed to load menu data',
      ...options
    }
  )
}

/**
 * Search menu items
 */
export function useMenuSearch(query: string, options?: UseServiceDataOptions): DataState<import('../types').MenuItem[]> {
  const serviceCall = useCallback(() => {
    return getRestaurantService(options?.serviceType).searchMenuItems(query)
  }, [query, options?.serviceType])

  return useServiceData(
    serviceCall,
    {
      errorPrefix: 'Failed to search menu items',
      ...options
    }
  )
}

// =============================================================================
// Mutation Hooks (for write operations)
// =============================================================================

export interface MutationState<T> {
  data: T | null
  loading: boolean
  error: string | null
  mutate: (input: any) => Promise<void>
  reset: () => void
}

/**
 * Create a reservation
 */
export function useCreateReservation(options?: UseServiceDataOptions): MutationState<import('../types').Reservation> {
  const [data, setData] = useState<import('../types').Reservation | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const mutate = useCallback(async (request: CreateReservationRequest) => {
    try {
      setLoading(true)
      setError(null)
      setData(null)

      const response = await getReservationService(options?.serviceType).createReservation(request)

      if (response.success) {
        setData(response.data)
      } else {
        setError(response.error || 'Failed to create reservation')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      setError(`Failed to create reservation: ${errorMessage}`)
      console.error('Reservation creation error:', err)
    } finally {
      setLoading(false)
    }
  }, [options?.serviceType])

  const reset = useCallback(() => {
    setData(null)
    setError(null)
    setLoading(false)
  }, [])

  return { data, loading, error, mutate, reset }
}