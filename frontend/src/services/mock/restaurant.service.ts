/**
 * Mock Restaurant Data Service
 *
 * Provides restaurant business data (restaurant info, locations, menu, etc.)
 * In a real application, this would fetch from GraphQL API, REST API, or database.
 */

import type { RestaurantDataService, ServiceResponse } from '../types'
import type { Restaurant, Location, MenuCategory, MenuItem } from '../../types'

// =============================================================================
// Mock Data
// =============================================================================

const mockRestaurant: Restaurant = {
  id: '1',
  name: 'Casa Mexicana',
  description: 'Authentic Mexican cuisine with vibrant flavors and traditional recipes',
  email: 'info@casamexicana.com',
  website: 'https://casamexicana.com',
  heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
  galleryImages: [
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600'
  ],
  aboutText: `
    <p>Founded in 1985 by the Hernández family, Casa Mexicana has been bringing the authentic flavors of Mexico to our community for nearly four decades. What started as a small family taqueria has grown into a beloved institution, serving generations of families with traditional recipes passed down from Guadalajara.</p>

    <p>Our commitment to using only the freshest ingredients, combined with time-honored Mexican cooking techniques, ensures that every dish captures the vibrant spirit and authentic taste of Mexico.</p>
  `,
  acceptsReservations: true,
  locations: [], // Will be populated below
  menuCategories: [] // Will be populated below
}

const mockLocations: Location[] = [
  {
    id: '1',
    name: 'Centro Location',
    address: '123 Main Street, Downtown, CA 90210',
    phone: '(555) 123-4567',
    latitude: 34.0522,
    longitude: -118.2437,
    hours: 'Mon-Thu: 11AM-10PM, Fri-Sat: 11AM-11PM, Sun: 12PM-9PM',
    parkingInfo: 'Valet parking available, Street parking after 6PM',
    accessibilityInfo: 'Wheelchair accessible, Elevator available',
    isMainLocation: true,
    locationImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400'
  },
  {
    id: '2',
    name: 'Mercado Location',
    address: '456 Harbor Boulevard, Marina, CA 90211',
    phone: '(555) 987-6543',
    latitude: 34.0000,
    longitude: -118.5000,
    hours: 'Daily: 5PM-10PM',
    parkingInfo: 'Free parking garage adjacent to restaurant',
    accessibilityInfo: 'Fully accessible, Ground floor location',
    isMainLocation: false,
    locationImage: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400'
  }
]

const mockMenuItems: MenuItem[] = [
  // Appetizers
  {
    id: '1',
    name: 'Guacamole Fresco',
    description: 'Fresh avocados mashed with lime, cilantro, onions, and jalapeños, served with crispy tortilla chips',
    price: 12.95,
    itemImage: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400',
    isAvailable: true,
    isSpecial: false,
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true
  },
  {
    id: '2',
    name: 'Queso Fundido',
    description: 'Melted Oaxaca cheese with chorizo, poblano peppers, and warm flour tortillas',
    price: 14.95,
    itemImage: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400',
    isAvailable: true,
    isSpecial: true,
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false
  },
  {
    id: '3',
    name: 'Elote Mexicano',
    description: 'Grilled corn on the cob with mayo, cotija cheese, chili powder, and lime',
    price: 8.95,
    itemImage: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400',
    isAvailable: true,
    isSpecial: false,
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true
  },
  // Tacos
  {
    id: '4',
    name: 'Tacos al Pastor',
    description: 'Marinated pork with pineapple, onions, and cilantro on corn tortillas',
    price: 16.95,
    itemImage: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400',
    spiceLevel: 2,
    isAvailable: true,
    isSpecial: true,
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true
  },
  {
    id: '5',
    name: 'Tacos de Carnitas',
    description: 'Slow-cooked pork shoulder with pickled onions and salsa verde',
    price: 15.95,
    itemImage: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=400',
    spiceLevel: 1,
    isAvailable: true,
    isSpecial: false,
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true
  },
  {
    id: '6',
    name: 'Tacos de Pescado',
    description: 'Beer-battered fish with cabbage slaw and chipotle mayo',
    price: 17.95,
    itemImage: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400',
    isAvailable: true,
    isSpecial: false,
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false
  },
  // Main Courses
  {
    id: '7',
    name: 'Carne Asada',
    description: 'Grilled skirt steak with rice, beans, guacamole, and warm tortillas',
    price: 28.95,
    itemImage: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=400',
    prepTime: 20,
    isAvailable: true,
    isSpecial: true,
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true
  },
  {
    id: '8',
    name: 'Enchiladas Verdes',
    description: 'Corn tortillas filled with chicken, topped with green salsa and crema',
    price: 19.95,
    itemImage: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400',
    prepTime: 15,
    isAvailable: true,
    isSpecial: false,
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true
  },
  {
    id: '9',
    name: 'Chile en Nogada',
    description: 'Poblano pepper stuffed with picadillo, topped with walnut cream sauce',
    price: 24.95,
    itemImage: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400',
    prepTime: 25,
    isAvailable: true,
    isSpecial: true,
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true
  }
]

const mockMenuCategories: MenuCategory[] = [
  {
    id: '1',
    name: 'Appetizers',
    description: 'Start your meal with our traditional Mexican starters',
    sortOrder: 1,
    isAvailable: true,
    menuItems: mockMenuItems.slice(0, 3)
  },
  {
    id: '2',
    name: 'Tacos',
    description: 'Authentic tacos made with fresh corn tortillas',
    sortOrder: 2,
    isAvailable: true,
    menuItems: mockMenuItems.slice(3, 6)
  },
  {
    id: '3',
    name: 'Main Courses',
    description: 'Traditional Mexican entrees and house specialties',
    sortOrder: 3,
    isAvailable: true,
    menuItems: mockMenuItems.slice(6, 9)
  }
]

// Update the restaurant with complete data
mockRestaurant.locations = mockLocations
mockRestaurant.menuCategories = mockMenuCategories

export class MockRestaurantDataService implements RestaurantDataService {
  private async delay(ms: number = 300): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async getRestaurantInfo(): Promise<ServiceResponse<Restaurant>> {
    await this.delay(300)

    return {
      data: mockRestaurant,
      success: true,
      timestamp: new Date()
    }
  }

  async getLocations(): Promise<ServiceResponse<Location[]>> {
    await this.delay(300)

    return {
      data: mockLocations,
      success: true,
      timestamp: new Date()
    }
  }

  async getLocationById(id: string): Promise<ServiceResponse<Location>> {
    await this.delay(200)

    const location = mockLocations.find(loc => loc.id === id)
    if (!location) {
      return {
        data: {} as Location,
        success: false,
        error: `Location not found with id: ${id}`,
        timestamp: new Date()
      }
    }

    return {
      data: location,
      success: true,
      timestamp: new Date()
    }
  }

  async getMenuCategories(): Promise<ServiceResponse<MenuCategory[]>> {
    await this.delay(300)

    return {
      data: mockMenuCategories,
      success: true,
      timestamp: new Date()
    }
  }

  async getMenuCategoryById(id: string): Promise<ServiceResponse<MenuCategory>> {
    await this.delay(200)

    const category = mockMenuCategories.find(cat => cat.id === id)
    if (!category) {
      return {
        data: {} as MenuCategory,
        success: false,
        error: `Menu category not found with id: ${id}`,
        timestamp: new Date()
      }
    }

    return {
      data: category,
      success: true,
      timestamp: new Date()
    }
  }

  async searchMenuItems(query: string): Promise<ServiceResponse<MenuItem[]>> {
    await this.delay(500)

    if (!query.trim()) {
      return {
        data: [],
        success: true,
        timestamp: new Date()
      }
    }

    const filteredItems = mockMenuItems.filter(item =>
      item.name?.toLowerCase().includes(query.toLowerCase()) ||
      item.description?.toLowerCase().includes(query.toLowerCase()) ||
      (query.toLowerCase().includes('vegetarian') && item.isVegetarian) ||
      (query.toLowerCase().includes('vegan') && item.isVegan) ||
      (query.toLowerCase().includes('gluten') && item.isGlutenFree) ||
      (query.toLowerCase().includes('spicy') && item.spiceLevel && item.spiceLevel > 2)
    )

    return {
      data: filteredItems,
      success: true,
      timestamp: new Date()
    }
  }

  async getFeaturedMenuItems(): Promise<ServiceResponse<MenuItem[]>> {
    await this.delay(200)

    const featuredItems = mockMenuItems.filter(item => item.isSpecial)

    return {
      data: featuredItems,
      success: true,
      timestamp: new Date()
    }
  }
}
