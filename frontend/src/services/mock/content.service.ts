/**
 * Mock Content Service
 *
 * Provides static page content for the application.
 * In a real application, this would fetch from a CMS or content management system.
 */

import type { ContentService, ServiceResponse } from '../types'
import type { PageContent } from '../../models/page-content'

const mockPageContent: PageContent = {
  // HomePage content
  homepage: {
    title: 'Welcome to Casa Mexicana',
    subtitle: 'Experience authentic Mexican cuisine with vibrant flavors and traditional recipes. Our chef-crafted dishes use the finest fresh ingredients and time-honored techniques to bring you the true taste of Mexico.',
    heroImages: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600',
    ],
    sections: {
      menu: {
        title: 'Our Menu',
        description: 'Discover our authentic Mexican dishes featuring fresh tacos, enchiladas, and traditional specialties.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
        buttonText: 'View Menu'
      },
      reservations: {
        title: 'Reserve a Table',
        description: 'Book your table online for an unforgettable Mexican dining experience with family and friends.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
        buttonText: 'Make Reservation'
      },
      locations: {
        title: 'Our Locations',
        description: 'Visit us at any of our convenient locations throughout the city.',
        image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400',
        buttonText: 'Find Us'
      }
    }
  },

  // AboutPage content
  about: {
    title: 'About Casa Mexicana',
    heroImage: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600',
    story: {
      title: 'Our Story',
      paragraphs: [
        'Founded in 1985 by the Hernández family, Casa Mexicana has been bringing the authentic flavors of Mexico to our community for nearly four decades. What started as a small family taqueria has grown into a beloved institution, serving generations of families with traditional recipes passed down from Guadalajara.',
        'Our commitment to using only the freshest ingredients, combined with time-honored Mexican cooking techniques, ensures that every dish captures the vibrant spirit and authentic taste of Mexico.'
      ]
    },
    timeline: {
      title: 'Our Journey',
      events: [
        {
          year: '1985',
          title: 'The Beginning',
          description: 'Carlos and Maria Hernández open the first Casa Mexicana in downtown, with just 8 tables and authentic family recipes.'
        },
        {
          year: '1995',
          title: 'Recognition',
          description: 'Awarded "Best Mexican Restaurant" by the City Food Critics Association for our authentic cuisine.'
        },
        {
          year: '2008',
          title: 'Expansion',
          description: 'Opened our second location, bringing the taste of Mexico to more neighborhoods.'
        },
        {
          year: '2020',
          title: 'New Generation',
          description: 'The Hernández children join the business, adding modern touches while preserving traditional Mexican recipes.'
        }
      ]
    },
    values: {
      mission: {
        title: 'Our Mission',
        description: 'To share the warmth and tradition of Mexican hospitality through authentic cuisine and exceptional service.'
      },
      values: {
        title: 'Our Values',
        description: 'Fresh ingredients, authentic Mexican recipes, and treating every guest like familia.'
      },
      team: {
        title: 'Our Team',
        description: 'A passionate team of Mexican chefs and staff dedicated to sharing our culinary heritage.'
      }
    }
  },

  // MenuPage content
  menu: {
    title: 'Our Menu',
    subtitle: 'Discover our authentic Mexican dishes, prepared with the freshest ingredients and traditional techniques.',
    labels: {
      chefSpecial: "Chef's Special",
      vegetarian: 'Vegetarian',
      vegan: 'Vegan',
      glutenFree: 'Gluten Free',
      spicy: 'Spicy',
      prepTime: 'Preparation time',
      unavailable: 'Currently Unavailable'
    }
  },

  // LocationsPage content
  locations: {
    title: 'Our Locations',
    subtitle: 'Visit us at any of our convenient locations to experience authentic Mexican dining.',
    labels: {
      mainLocation: 'Main Location',
      hours: 'Hours:',
      parking: 'Parking:',
      accessibility: 'Accessibility:'
    }
  },

  // ReservationsPage content
  reservations: {
    title: 'Make a Reservation',
    subtitle: "Reserve your table for an unforgettable Mexican dining experience. We'll confirm your reservation within 24 hours.",
    form: {
      labels: {
        fullName: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        partySize: 'Party Size',
        preferredDate: 'Preferred Date',
        preferredTime: 'Preferred Time',
        location: 'Location',
        specialRequests: 'Special Requests (Optional)'
      },
      placeholders: {
        fullName: 'Enter your full name',
        email: 'Enter your email',
        phone: '(555) 123-4567',
        partySize: 'Number of guests',
        date: 'Select date',
        time: 'Select time',
        location: 'Select location',
        specialRequests: 'Any special dietary requirements, occasion details, seating preferences, etc.'
      },
      buttonText: 'Submit Reservation',
      successMessage: 'Reservation submitted successfully! We will contact you shortly to confirm.'
    },
    info: {
      title: 'Reservation Information',
      details: [
        {
          label: 'Confirmation:',
          text: "We'll contact you within 24 hours to confirm your reservation."
        },
        {
          label: 'Cancellation:',
          text: 'Please call us at least 2 hours in advance to cancel or modify your reservation.'
        },
        {
          label: 'Large Parties:',
          text: 'For parties of 8 or more, please call us directly at (555) 123-4567.'
        },
        {
          label: 'Special Occasions:',
          text: "Let us know if you're celebrating something special - we'd love to make it memorable!"
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      locations: [
        {
          name: 'Centro Location',
          address: '123 Main Street',
          phone: '(555) 123-4567'
        },
        {
          name: 'Mercado Location',
          address: '456 Harbor Boulevard',
          phone: '(555) 987-6543'
        }
      ]
    }
  },

  // SearchPage content
  search: {
    title: 'Search Menu',
    subtitle: 'Find your favorite dishes or discover something new from our menu.',
    placeholder: 'Search for dishes, ingredients, or dietary preferences...',
    loadingText: 'Loading menu...',
    noResultsText: 'No dishes found matching your search',
    resultsText: 'Search Results',
    emptyState: {
      title: 'Start typing to search our menu',
      subtitle: 'Search by dish name, ingredients, or dietary preferences like "vegetarian" or "gluten free"'
    }
  },

  // Restaurant info content
  restaurantInfo: {
    title: 'Restaurant Information',
    labels: {
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      website: 'Website',
      hours: 'Hours of Operation'
    }
  },

  // Site theme and styling
  theme: {
    backgroundImage: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=1920',
    backgroundAlt: 'Subtle Mexican tile pattern background'
  },

  // Footer content
  footer: {
    copyright: 'Casa Mexicana ©2025 - Powered by Brightspot CMS'
  },

  // Common labels and messages
  common: {
    loading: {
      menu: 'Loading menu...',
      locations: 'Loading locations...'
    },
    errors: {
      menuLoad: 'Failed to load menu data',
      locationLoad: 'Failed to load location data',
      menuLoadTitle: 'Error Loading Menu',
      locationLoadTitle: 'Error Loading Locations'
    }
  }
}

export class MockContentService implements ContentService {
  private async delay(ms: number = 100): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async getPageContent(): Promise<ServiceResponse<PageContent>> {
    await this.delay(100)

    return {
      data: mockPageContent,
      success: true,
      timestamp: new Date()
    }
  }

  async getPageContentByKey(pageKey: keyof PageContent): Promise<ServiceResponse<PageContent[keyof PageContent]>> {
    await this.delay(50)

    const content = mockPageContent[pageKey]
    if (!content) {
      return {
        data: {} as PageContent[keyof PageContent],
        success: false,
        error: `Content not found for key: ${String(pageKey)}`,
        timestamp: new Date()
      }
    }

    return {
      data: content,
      success: true,
      timestamp: new Date()
    }
  }
}
