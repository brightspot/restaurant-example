/**
 * Brightspot Restaurant Data Service
 *
 * Provides restaurant business data from Brightspot CMS via GraphQL.
 */

import type { RestaurantDataService, ServiceResponse } from '../types'
import type { Restaurant, Location, MenuCategory, MenuItem } from '../../types'
import {
  GetLocationsDocument,
  GetLocationsQuery,
  GetMenuDocument,
  GetMenuQuery,
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
    const { data } = await gca.query<GetLocationsQuery>({
      query: GetLocationsDocument
    })

    const locations = data?.Query?.Records?.items?.map(item => {
      if (item?.__typename === 'RestaurantLocation') {
        const location: Location = {
          id: item._id || '',
          name: item.name || '',
          address: item.address || '',
          phone: item.phoneNumber || '',
          hours: item.openHours || '',
          parkingInfo: item.parkingInfo || '',
          accessibilityInfo: item.accessibilityInfo || '',
          isMainLocation: item.isMainLocation || false,
          locationImage: item.image?.publicUrl || ''
        }
        return location
      }
      return null
    }).filter(Boolean) as Location[] || []

    return {
      data: locations,
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
    const { data } = await gca.query<GetMenuQuery>({
      query: GetMenuDocument
    })

    const categories = data?.Get?.Singleton?.Menu?.State?.categories?.map(category => {
      if (!category) return null

      const menuCategory: MenuCategory = {
        id: category._id || '',
        name: category.name || '',
        description: category.description || '',
        menuItems: category.menuItems?.map(item => {
          if (!item) return null

          return {
            id: item._id || '',
            name: item.name || '',
            description: item.description || '',
            price: item.price || 0,
            itemImage: item.image?.publicUrl || '',
            isSpecial: item.isSpecial || false,
            isVegetarian: item.isVegetarian || false,
            isVegan: item.isVegan || false,
            isGlutenFree: item.isGlutenFree || false,
            isAvailable: !item.isUnavailable
          }
        }).filter(Boolean) as MenuItem[] || []
      }
      return menuCategory
    }).filter(Boolean) as MenuCategory[] || []

    return {
      data: categories,
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
