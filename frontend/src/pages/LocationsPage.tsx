import { Typography, Spin, Alert } from 'antd'
import { useLocations, usePageContent } from '../hooks/useServiceData'
import { ResponsiveContainer, LocationCard } from '../components'

const { Title, Paragraph } = Typography

const LocationsPage = () => {
  const { data: pageContent } = usePageContent('locations')
  const { data: locations, loading, error } = useLocations()

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Spin size="large" />
        <div style={{ marginTop: '1rem' }}>Loading locations...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ padding: '2rem' }}>
        <Alert
          message="Error Loading Locations"
          description={error}
          type="error"
          showIcon
        />
      </div>
    )
  }

  return (
    <div style={{ padding: '0 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <Title level={1} style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
        {pageContent?.title || 'Locations'}
      </Title>
      <Paragraph style={{
        fontSize: 'clamp(14px, 2vw, 16px)',
        marginBottom: '2rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 2rem auto'
      }}>
        {pageContent?.subtitle || 'Visit us at any of our convenient locations to experience authentic Mexican dining.'}
      </Paragraph>

      <ResponsiveContainer maxColumns={2}>
        {locations?.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </ResponsiveContainer>
    </div>
  )
}

export default LocationsPage
