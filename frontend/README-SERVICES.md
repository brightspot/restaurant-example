# Service Configuration System

The Casa Mexicana frontend now includes a flexible service layer that can be configured via environment variables to use different data sources.

## Quick Start

### Default Configuration (Mock Services)
```bash
yarn dev
# or
yarn build
```

### Using Brightspot Services
```bash
VITE_SERVICE_TYPE=brightspot VITE_GRAPHQL_ENDPOINT=http://localhost:8080/graphql yarn dev
```

## Environment Configuration

### Setting Up Environment Files

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local` with your preferred settings:**
   ```bash
   # Use Brightspot services
   VITE_SERVICE_TYPE=brightspot
   VITE_GRAPHQL_ENDPOINT=http://localhost:8080/graphql
   VITE_API_TIMEOUT=10000
   ```

3. **Run the application:**
   ```bash
   yarn dev
   ```

### Available Environment Variables

| Variable | Options | Default | Description |
|----------|---------|---------|-------------|
| `VITE_SERVICE_TYPE` | `mock`, `brightspot` | `mock` | Service implementation to use |
| `VITE_GRAPHQL_ENDPOINT` | URL string | - | Brightspot GraphQL endpoint URL |
| `VITE_API_TIMEOUT` | Number (ms) | `5000` | Request timeout |
| `VITE_ENABLE_SERVICE_CACHING` | `true`, `false` | `true` | Enable response caching |
| `VITE_CACHE_TIMEOUT` | Number (ms) | `300000` | Cache expiry time |

## Service Types

### 1. Mock Services (Default)
- **Purpose**: Local development and testing
- **Data**: Static mock data from service files
- **Setup**: No additional configuration required

### 2. Brightspot Services
- **Purpose**: Production with Brightspot CMS GraphQL API
- **Data**: Brightspot CMS GraphQL endpoint
- **Setup**: Set `VITE_SERVICE_TYPE=brightspot` and `VITE_GRAPHQL_ENDPOINT`

## Development Features

### Service Status Indicator
In development mode, a status card appears in the bottom-right corner showing:
- Current service type (Mock, Brightspot)
- Configuration details
- Caching status

### Console Logging
Development builds include helpful logging:
```
🔧 Service Configuration: {
  serviceType: 'mock',
  apiBaseUrl: undefined,
  graphqlEndpoint: undefined,
  timeout: 5000,
  caching: 'enabled (60000ms)'
}

🚀 Services initialized with type: mock
```

## Examples

### Local Development with Mock Data
```bash
# .env.local
VITE_SERVICE_TYPE=mock
VITE_ENABLE_SERVICE_CACHING=true
VITE_CACHE_TIMEOUT=60000
```

### Staging Environment with Brightspot
```bash
# .env.staging
VITE_SERVICE_TYPE=brightspot
VITE_GRAPHQL_ENDPOINT=https://staging-cms.casamexicana.com/graphql
VITE_API_TIMEOUT=8000
VITE_ENABLE_SERVICE_CACHING=true
VITE_CACHE_TIMEOUT=300000
```

## Architecture Benefits

### Easy Service Switching
Switch between mock data and Brightspot CMS without changing any component code:

```typescript
// Components remain the same regardless of service type
const HomePage = () => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)

  useEffect(() => {
    const loadData = async () => {
      const restaurantService = getRestaurantService() // Automatically uses configured service
      const response = await restaurantService.getRestaurantInfo()
      if (response.success) {
        setRestaurant(response.data)
      }
    }
    loadData()
  }, [])

  // ... rest of component
}
```

### Consistent Interface
All services implement the same interfaces:

```typescript
interface RestaurantDataService {
  getRestaurantInfo(): Promise<ServiceResponse<Restaurant>>
  getLocations(): Promise<ServiceResponse<Location[]>>
  getMenuCategories(): Promise<ServiceResponse<MenuCategory[]>>
  // ... other methods
}
```

### Future Extensibility
Easy to add new service types:

```typescript
// Add new service type to config
const validTypes: ServiceType[] = ['mock', 'brightspot', 'custom']

// Implement new service classes
export class CustomRestaurantService implements RestaurantDataService {
  // ... implementation
}

// Update service factory
case 'custom':
  return {
    content: new CustomContentService(),
    restaurant: new CustomRestaurantService(),
    reservations: new CustomReservationService()
  }
```

## Testing Configuration

Run the configuration test script to validate all service types build correctly:

```bash
node scripts/test-config.mjs
```

This will test building with:
- Mock services (default)
- Brightspot services

## Troubleshooting

### Service Type Not Recognized
```
Invalid VITE_SERVICE_TYPE "typo", defaulting to "mock"
```
**Solution**: Check environment variable spelling and use valid options: `mock`, `brightspot`

### Environment Variables Not Loading
```
Configuration using defaults despite .env.local file
```
**Solutions**:
- Ensure `.env.local` is in the project root
- Restart development server after changing environment files
- Check that variables start with `VITE_`

### Brightspot Services Not Implemented
```
Brightspot services not yet implemented
```
**Note**: Currently only mock services are fully implemented. Brightspot services will throw helpful error messages until implemented.

## Next Steps

1. **Implement Brightspot Services**: Create service classes that integrate with Brightspot GraphQL API
2. **Add Authentication**: Extend service config to handle Brightspot API authentication
3. **Add Caching Layer**: Implement intelligent caching for production services
4. **Add Error Handling**: Improve error handling and retry logic
5. **Add Monitoring**: Implement service health monitoring and error reporting

For detailed implementation guidance, see `docs/SERVICE_CONFIGURATION.md`.