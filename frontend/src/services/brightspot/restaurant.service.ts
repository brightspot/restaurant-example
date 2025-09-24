/**
 * Brightspot Restaurant Data Service
 *
 * Provides restaurant business data from Brightspot CMS via GraphQL.
 */

import type { RestaurantDataService, ServiceResponse } from '../types'
import type { Restaurant, Location, MenuCategory, MenuItem } from '../../types'
import {
  GetRestaurantDocument,
  GetRestaurantQuery
} from "../../generated/graphql.ts";
import gca from "./gca.ts";

export class BrightspotRestaurantDataService implements RestaurantDataService {
  private async delay(ms: number = 100): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async getRestaurantInfo(): Promise<ServiceResponse<Restaurant>> {
    const { data } = await gca.query<GetRestaurantQuery>({
      query: GetRestaurantDocument
    })

    const content = data?.Get?.Singleton?.Restaurant?.State

    if (content) {
      const restaurant: Restaurant = {
        id: content._id || '',
        name: content.name || '',
        description: content.description || '',
        email: content.email || '',
        website: content.website || ''
      }

      return {
        data: restaurant,
        success: true,
        timestamp: new Date()
      }
    }

    return {
      data: { id: 'brightspot-data' } as Restaurant,
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
      data: { id: 'brightspot-data' } as Location,
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
      data: { id: 'brightspot-data' } as MenuCategory,
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
