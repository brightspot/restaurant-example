import { Typography, Timeline, Spin } from 'antd'
import { TrophyOutlined, HeartOutlined, TeamOutlined } from '@ant-design/icons'
import { usePageContent, useRestaurantInfo } from '../hooks/useServiceData'
import { TwoColumnContainer, ResponsiveContainer, ImageCard, IconCard } from '../components'
import RestaurantInfo from '../components/RestaurantInfo'

const { Title } = Typography

const AboutPage = () => {
  const { data: pageContent, loading: contentLoading, error: contentError } = usePageContent('about')
  const { data: restaurant, loading: restaurantLoading, error: restaurantError } = useRestaurantInfo()

  const loading = contentLoading || restaurantLoading
  const error = contentError || restaurantError

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Spin size="large" />
        <div style={{ marginTop: '1rem' }}>Loading...</div>
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
      <Title level={1} style={{ textAlign: 'center', fontSize: 'var(--font-size-h1)', marginBottom: '2rem' }}>
        {pageContent?.title || 'About'}
      </Title>

      <TwoColumnContainer
        leftSpan={12}
        rightSpan={12}
        style={{ marginBottom: '3rem' }}
      >
        <ImageCard
          imageUrl={pageContent.heroImage}
          alt="Chef in kitchen"
          borderRadius="12px"
          boxShadow="0 4px 12px rgba(0,0,0,0.1)"
        />
        <div style={{ padding: '1rem' }}>
          {pageContent?.story?.title && (
            <Title level={2} style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>{pageContent.story.title}</Title>
          )}
          {pageContent?.story?.paragraphs?.map((paragraph: string, index: number) => (
            <Typography.Paragraph
              key={index}
              style={{
                fontSize: 'clamp(14px, 2vw, 16px)',
                lineHeight: '1.6',
                marginBottom: index === pageContent.story.paragraphs.length - 1 ? '0' : '1rem'
              }}
            >
              {paragraph}
            </Typography.Paragraph>
          ))}
        </div>
      </TwoColumnContainer>

      {pageContent?.timeline?.title && (
        <Title level={2} style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', textAlign: 'center', marginBottom: '2rem' }}>{pageContent.timeline.title}</Title>
      )}
      <Timeline
        items={pageContent?.timeline?.events?.map((event: any, index: number) => ({
          dot: index % 2 === 0 ? <HeartOutlined style={{ fontSize: '16px' }} /> : <TrophyOutlined style={{ fontSize: '16px' }} />,
          color: ['red', 'gold', 'blue', 'green'][index],
          children: (
            <div>
              <Title level={4}>{event.year} - {event.title}</Title>
              <Typography.Paragraph>{event.description}</Typography.Paragraph>
            </div>
          ),
        }))}
        style={{ marginTop: '2rem', marginBottom: '3rem' }}
      />

      <ResponsiveContainer maxColumns={3}>
        <IconCard
          icon={<HeartOutlined />}
          title={pageContent.values.mission.title}
          description={pageContent.values.mission.description}
          iconColor="var(--color-error)"
        />
        <IconCard
          icon={<TrophyOutlined />}
          title={pageContent.values.values.title}
          description={pageContent.values.values.description}
          iconColor="var(--color-warning)"
        />
        <IconCard
          icon={<TeamOutlined />}
          title={pageContent.values.team.title}
          description={pageContent.values.team.description}
          iconColor="var(--color-success)"
        />
      </ResponsiveContainer>

      {restaurant && (
        <>
          <Title level={2} style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', textAlign: 'center', marginBottom: '2rem', marginTop: '4rem' }}>
            Visit Us
          </Title>
          <TwoColumnContainer
            leftSpan={12}
            rightSpan={12}
            style={{ marginBottom: '2rem' }}
          >
            <RestaurantInfo restaurant={restaurant} showTitle={false} />
            <ImageCard
              imageUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600"
              alt="Restaurant exterior"
              borderRadius="12px"
              boxShadow="0 4px 12px rgba(0,0,0,0.1)"
            />
          </TwoColumnContainer>
        </>
      )}
    </div>
  )
}

export default AboutPage
