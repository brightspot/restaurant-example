export interface Restaurant {
  id: string;
  name?: string;
  description?: string;
  email?: string;
  website?: string;
  heroImage?: string;
  galleryImages?: string[];
  aboutText?: string;
  acceptsReservations?: boolean;
  locations?: Location[];
  menuCategories?: MenuCategory[];
}

export interface Location {
  id: string;
  name?: string;
  address?: string;
  phone?: string;
  latitude?: number;
  longitude?: number;
  hours?: string;
  parkingInfo?: string;
  accessibilityInfo?: string;
  isMainLocation?: boolean;
  locationImage?: string;
}

export interface MenuCategory {
  id: string;
  name?: string;
  description?: string;
  sortOrder?: number;
  categoryImage?: string;
  isAvailable?: boolean;
  availabilityHours?: string;
  menuItems?: MenuItem[];
}

export interface MenuItem {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  sortOrder?: number;
  itemImage?: string;
  dietaryInfo?: string[];
  spiceLevel?: number;
  calories?: number;
  ingredients?: string;
  isAvailable?: boolean;
  prepTime?: number;
  isSpecial?: boolean;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
}

export interface Reservation {
  id: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  reservationDateTime?: string;
  partySize?: number;
  locationId?: string;
  specialRequests?: string;
  status?: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED' | 'NO_SHOW';
  createdDate?: string;
  confirmationNumber?: string;
}
