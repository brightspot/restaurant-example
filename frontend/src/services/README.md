# Services Directory Structure

This directory contains the service layer implementation for the Casa Mexicana frontend application, organized by service type.

## Directory Structure

```
services/
├── index.ts                 # Main service factory and exports
├── types.ts                 # Service interfaces and types
├── mock/                    # Mock services for development
│   ├── index.ts            # Mock services exports
│   ├── content.service.ts  # Mock content service (labels, text)
│   ├── restaurant.service.ts # Mock restaurant data service
│   └── reservation.service.ts # Mock reservation service
└── brightspot/             # Brightspot CMS services
    ├── index.ts            # Brightspot services exports
    ├── content.service.ts  # Brightspot content service (GraphQL)
    ├── restaurant.service.ts # Brightspot restaurant data service
    └── reservation.service.ts # Brightspot reservation service
```

## Service Types

### Mock Services (`mock/`)
- **Purpose**: Local development and testing
- **Implementation**: Fully functional with static mock data
- **Usage**: Default service type, no configuration required
- **Files**:
  - `content.service.ts` - Static page content (labels, text, UI strings)
  - `restaurant.service.ts` - Business data (restaurant info, menu, locations)
  - `reservation.service.ts` - Reservation functionality with mock data

### Brightspot Services (`brightspot/`)
- **Purpose**: Production integration with Brightspot CMS
- **Implementation**: Placeholder with GraphQL endpoint configuration
- **Usage**: Set `VITE_SERVICE_TYPE=brightspot` and `VITE_GRAPHQL_ENDPOINT`
- **Status**: Not yet implemented - will throw helpful error messages
- **Files**:
  - `content.service.ts` - Fetch page content via Brightspot GraphQL API
  - `restaurant.service.ts` - Fetch business data from Brightspot content types
  - `reservation.service.ts` - Reservation integration (could use external systems)

## Usage

### Service Factory
The main service factory (`index.ts`) automatically selects services based on environment configuration:

```typescript
import { getContentService, getRestaurantService } from '../services'

// Automatically uses the configured service type (mock or brightspot)
const contentService = getContentService()
const restaurantService = getRestaurantService()
```

### Environment Configuration
Services are selected via the `VITE_SERVICE_TYPE` environment variable:

```bash
# Use mock services (default)
VITE_SERVICE_TYPE=mock

# Use Brightspot services
VITE_SERVICE_TYPE=brightspot
VITE_GRAPHQL_ENDPOINT=http://localhost:8080/graphql
```

### Service Interfaces
All services implement consistent interfaces defined in `types.ts`:

```typescript
interface ContentService {
  getPageContent(): Promise<ServiceResponse<PageContent>>
  getPageContentByKey(key: keyof PageContent): Promise<ServiceResponse<PageContent[keyof PageContent]>>
}

interface RestaurantDataService {
  getRestaurantInfo(): Promise<ServiceResponse<Restaurant>>
  getLocations(): Promise<ServiceResponse<Location[]>>
  getMenuCategories(): Promise<ServiceResponse<MenuCategory[]>>
  // ... other methods
}

interface ReservationService {
  createReservation(request: CreateReservationRequest): Promise<ServiceResponse<Reservation>>
  getReservation(confirmationNumber: string): Promise<ServiceResponse<Reservation>>
  getAvailableTimeSlots(date: string, locationId: string): Promise<ServiceResponse<string[]>>
}
```

## Adding New Service Types

1. **Create Service Directory**:
   ```bash
   mkdir src/services/custom
   ```

2. **Implement Service Classes**:
   ```typescript
   // src/services/custom/content.service.ts
   export class CustomContentService implements ContentService {
     // Implementation
   }
   ```

3. **Create Index File**:
   ```typescript
   // src/services/custom/index.ts
   export { CustomContentService } from './content.service'
   // ... other exports
   ```

4. **Update Service Factory**:
   ```typescript
   // src/services/index.ts
   import { CustomContentService, CustomRestaurantDataService, CustomReservationService } from './custom'

   // In createServices method:
   case 'custom':
     return {
       content: new CustomContentService(this.config),
       restaurant: new CustomRestaurantDataService(this.config),
       reservations: new CustomReservationService(this.config)
     }
   ```

5. **Update Types**:
   ```typescript
   // src/services/types.ts
   export type ServiceType = 'mock' | 'brightspot' | 'custom'
   ```

## Development Notes

### Mock Services
- Fully implemented and functional
- Use realistic delays to simulate API calls
- Include comprehensive test data
- Support all frontend functionality

### Brightspot Services
- Placeholder implementations with helpful error messages
- Configured to use GraphQL endpoints
- Ready for implementation with actual Brightspot GraphQL queries
- Include TODO comments with implementation guidance

### Service Responses
All services return a consistent `ServiceResponse<T>` structure:

```typescript
interface ServiceResponse<T> {
  data: T
  success: boolean
  error?: string
  timestamp: Date
}
```

This allows components to handle success/error cases consistently regardless of service type.

## Implementation Status

| Service | Mock | Brightspot |
|---------|------|------------|
| Content Service | ✅ Complete | 🚧 Placeholder |
| Restaurant Service | ✅ Complete | 🚧 Placeholder |
| Reservation Service | ✅ Complete | 🚧 Placeholder |

## Next Steps

1. **Implement Brightspot GraphQL Queries**: Replace placeholder implementations with actual GraphQL queries for Brightspot CMS
2. **Add Authentication**: Implement API authentication for Brightspot services
3. **Add Error Handling**: Improve error handling and retry logic
4. **Add Caching**: Implement intelligent caching for production services
5. **Add Monitoring**: Add service health monitoring and metrics