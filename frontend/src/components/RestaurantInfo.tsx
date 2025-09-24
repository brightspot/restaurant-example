import { Card, Typography, Space } from 'antd'
import { useState, useEffect } from 'react'
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  ClockCircleOutlined
} from '@ant-design/icons'
import type { Restaurant, Location } from '../types'
import { getContentService } from '../services'
import type { RestaurantInfoContent } from '../models/page-content'

const { Text, Link } = Typography

interface RestaurantInfoProps {
  restaurant: Restaurant
  mainLocation?: Location
  showTitle?: boolean
  compact?: boolean
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({
  restaurant,
  mainLocation,
  showTitle = true,
  compact = false
}) => {
  const [pageContent, setPageContent] = useState<RestaurantInfoContent | null>(null)

  useEffect(() => {
    const loadContent = async () => {
      try {
        const contentService = getContentService()
        const response = await contentService.getPageContentByKey('restaurantInfo')
        if (response.success) {
          setPageContent(response.data as RestaurantInfoContent)
        }
      } catch (err) {
        console.error('Error loading restaurant info content:', err)
      }
    }

    loadContent()
  }, [])

  if (!pageContent) {
    return null // or a loading spinner
  }

  const InfoItem: React.FC<{
    icon: React.ReactNode
    label: string
    value: string | React.ReactNode
  }> = ({ icon, label, value }) => (
    <div style={{
      display: 'flex',
      alignItems: compact ? 'center' : 'flex-start',
      gap: '12px',
      marginBottom: compact ? '8px' : '16px'
    }}>
      <div style={{
        color: 'var(--color-primary)',
        fontSize: '16px',
        marginTop: compact ? '0' : '2px',
        minWidth: '20px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        {!compact && (
          <Text strong style={{
            display: 'block',
            fontSize: 'var(--font-size-base)',
            marginBottom: '4px'
          }}>
            {label}:
          </Text>
        )}
        <Text style={{
          fontSize: 'var(--font-size-base)',
          lineHeight: compact ? 'var(--line-height-normal)' : 'var(--line-height-loose)'
        }}>
          {value}
        </Text>
      </div>
    </div>
  )

  const content = (
    <Space direction="vertical" style={{ width: '100%' }}>
      <InfoItem
        icon={<EnvironmentOutlined />}
        label={pageContent?.labels?.address || 'Address'}
        value={mainLocation?.address || ''}
      />

      <InfoItem
        icon={<PhoneOutlined />}
        label={pageContent?.labels?.phone || 'Phone'}
        value={mainLocation?.phone || ''}
      />

      <InfoItem
        icon={<MailOutlined />}
        label={pageContent?.labels?.email || 'Email'}
        value={
          <Link href={`mailto:${restaurant?.email}`} target="_blank">
            {restaurant?.email}
          </Link>
        }
      />

      <InfoItem
        icon={<GlobalOutlined />}
        label={pageContent?.labels?.website || 'Website'}
        value={
          <Link href={restaurant?.website} target="_blank" rel="noopener noreferrer">
            {restaurant?.website}
          </Link>
        }
      />

      <InfoItem
        icon={<ClockCircleOutlined />}
        label={pageContent?.labels?.hours || 'Hours'}
        value={mainLocation?.hours || ''}
      />
    </Space>
  )

  if (compact) {
    return <div style={{ padding: compact ? '8px' : '16px' }}>{content}</div>
  }

  return (
    <Card
      title={showTitle ? (pageContent?.title || 'Restaurant Information') : undefined}
      style={{
        borderRadius: 'var(--border-radius-md)',
        boxShadow: 'var(--shadow-md)',
        height: '100%'
      }}
      styles={{ body: { padding: 'var(--spacing-lg)' } }}
    >
      {content}
    </Card>
  )
}

export default RestaurantInfo
