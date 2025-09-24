/**
 * No-Op Restaurant Data Service
 *
 * Returns empty/null data for all methods to test graceful degradation.
 * Useful for validating that the frontend handles missing data correctly.
 */

import type { RestaurantDataService, ServiceResponse } from '../types'
import type { Restaurant, Location, MenuCategory, MenuItem } from '../../types'

export class NoOpRestaurantDataService implements RestaurantDataService {
  private async delay(ms: number = 100): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async getRestaurantInfo(): Promise<ServiceResponse<Restaurant>> {
    await this.delay()

    return {
      data: { id: 'no-data' } as Restaurant,
      success: true,
      timestamp: new Date()
    }
  }

  async getLocations(): Promise<ServiceResponse<Location[]>> {
    await this.delay()

    return {
      data: [],
      success: true,
      timestamp: new Date()
    }
  }

  async getLocationById(_id: string): Promise<ServiceResponse<Location>> {
    await this.delay()

    return {
      data: { id: 'no-data' } as Location,
      success: true,
      timestamp: new Date()
    }
  }

  async getMenuCategories(): Promise<ServiceResponse<MenuCategory[]>> {
    await this.delay()

    return {
      data: [],
      success: true,
      timestamp: new Date()
    }
  }

  async getMenuCategoryById(_id: string): Promise<ServiceResponse<MenuCategory>> {
    await this.delay()

    return {
      data: { id: 'no-data' } as MenuCategory,
      success: true,
      timestamp: new Date()
    }
  }

  async searchMenuItems(_query: string): Promise<ServiceResponse<MenuItem[]>> {
    await this.delay()

    return {
      data: [],
      success: true,
      timestamp: new Date()
    }
  }

  async getFeaturedMenuItems(): Promise<ServiceResponse<MenuItem[]>> {
    await this.delay()

    return {
      data: [],
      success: true,
      timestamp: new Date()
    }
  }
}