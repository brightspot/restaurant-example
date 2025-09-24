import { Typography } from 'antd'
import { CalendarOutlined, MenuOutlined } from '@ant-design/icons'
import { usePageContent, useRestaurantInfo, useLocations } from '../hooks/useServiceData'
import { ResponsiveContainer, TwoColumnContainer, ImageCard, CTACard, TextCard } from '../components'
import RestaurantInfo from '../components/RestaurantInfo'

const { Title } = Typography

const HomePage = () => {
  const { data: pageContent, loading: contentLoading, error: contentError } = usePageContent('homepage')
  const { data: restaurant, loading: restaurantLoading, error: restaurantError } = useRestaurantInfo()
  const { data: locations, loading: locationsLoading, error: locationsError } = useLocations()

  const loading = contentLoading || restaurantLoading || locationsLoading
  const error = contentError || restaurantError || locationsError

  // Find the main location
  const mainLocation = locations?.find(location => location.isMainLocation)

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <div>Loading...</div>
      </div>
    )
  }

  if (error || !pageContent) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{ color: 'red' }}>Error: {error || 'Failed to load page content'}</div>
      </div>
    )
  }

  return (
    <div style={{ padding: '0 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '1rem' }}>
        <Title
          level={1}
          style={{
            fontSize: 'var(--font-size-hero)',
            marginBottom: '1.5rem',
            color: 'var(--color-primary-text)',
            lineHeight: 'var(--line-height-tight)'
          }}
        >
          {restaurant?.name ? `Welcome to ${restaurant.name}` : 'Welcome'}
        </Title>
        <Typography.Paragraph style={{
          fontSize: 'var(--font-size-large)',
          maxWidth: '900px',
          margin: '0 auto',
          lineHeight: 'var(--line-height-loose)',
          color: 'var(--color-secondary-text)',
          fontWeight: 'var(--font-weight-light)',
          padding: '0 1rem'
        }}>
          {restaurant?.description || ''}
        </Typography.Paragraph>
      </div>

      {pageContent?.heroImages && pageContent.heroImages.length > 0 && (
        <ResponsiveContainer
          maxColumns={4}
          style={{ marginBottom: '4rem' }}
        >
          {pageContent.heroImages.map((imageUrl: string, index: number) => (
            <ImageCard
              key={index}
              imageUrl={imageUrl}
              alt={`Restaurant Image ${index + 1}`}
              height={250}
            />
          ))}
        </ResponsiveContainer>
      )}

      <ResponsiveContainer maxColumns={3} style={{ marginTop: '2rem' }}>
        {pageContent?.sections?.menu && (
          <CTACard
            title={pageContent.sections.menu.title}
            description={pageContent.sections.menu.description}
            image={pageContent.sections.menu.image}
            imageAlt="Featured Menu"
            buttonText={pageContent.sections.menu.buttonText || 'View Menu'}
            buttonIcon={<MenuOutlined />}
            linkTo="/menu"
          />
        )}

        {pageContent?.sections?.reservations && (
          <CTACard
            title={pageContent.sections.reservations.title}
            description={pageContent.sections.reservations.description}
            image={pageContent.sections.reservations.image}
            imageAlt="Make Reservation"
            buttonText={pageContent.sections.reservations.buttonText || 'Make Reservation'}
            buttonIcon={<CalendarOutlined />}
            linkTo="/reservations"
          />
        )}

        {pageContent?.sections?.locations && (
          <CTACard
            title={pageContent.sections.locations.title}
            description={pageContent.sections.locations.description}
            image={pageContent.sections.locations.image}
            imageAlt="Our Locations"
            buttonText={pageContent.sections.locations.buttonText || 'Find Us'}
            linkTo="/locations"
          />
        )}
      </ResponsiveContainer>

      {restaurant && (
        <TwoColumnContainer
          leftSpan={8}
          rightSpan={16}
          style={{ marginTop: '4rem' }}
        >
          <RestaurantInfo restaurant={restaurant} mainLocation={mainLocation} showTitle={true} />
          <TextCard
            title="Visit Us Today"
            content={
              <>
                <Typography.Paragraph style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-loose)', marginBottom: '1.5rem' }}>
                  Come experience the authentic flavors of Mexico in a warm, welcoming atmosphere.
                  Whether you're joining us for lunch, dinner, or a special celebration, we're here to make your dining experience memorable.
                </Typography.Paragraph>
                <Typography.Paragraph style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-loose)' }}>
                  <strong>Walk-ins welcome!</strong> For guaranteed seating, especially during peak hours and weekends,
                  we recommend making a reservation in advance.
                </Typography.Paragraph>
              </>
            }
          />
        </TwoColumnContainer>
      )}
    </div>
  )
}

export default HomePage
