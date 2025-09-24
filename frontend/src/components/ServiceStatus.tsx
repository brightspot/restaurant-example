/**
 * Service Status Component
 *
 * Displays the current service configuration in development mode.
 * Useful for debugging and understanding which services are being used.
 */

import { Card, Tag, Typography, Space } from 'antd'
import { ApiOutlined, DatabaseOutlined } from '@ant-design/icons'
import { config, getServiceType } from '../config/env'

const { Text } = Typography

const ServiceStatus: React.FC = () => {
  // Only show in development
  if (!config.isDevelopment) {
    return null
  }

  const serviceType = getServiceType()

  const getServiceIcon = () => {
    switch (serviceType) {
      case 'mock':
        return <DatabaseOutlined />
      case 'brightspot':
        return <ApiOutlined />
      default:
        return <ApiOutlined />
    }
  }

  const getServiceColor = () => {
    switch (serviceType) {
      case 'mock':
        return 'orange'
      case 'brightspot':
        return 'blue'
      default:
        return 'default'
    }
  }

  const getServiceDescription = () => {
    switch (serviceType) {
      case 'mock':
        return 'Using local mock data services'
      case 'brightspot':
        return `Using Brightspot GraphQL: ${config.graphqlEndpoint || 'Not configured'}`
      default:
        return 'Unknown service type'
    }
  }

  return (
    <Card
      size="small"
      style={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        maxWidth: 300,
        zIndex: 1000,
        opacity: 0.9
      }}
      title={
        <Space>
          {getServiceIcon()}
          <Text strong>Service Status</Text>
        </Space>
      }
    >
      <Space direction="vertical" size="small">
        <div>
          <Text strong>Type: </Text>
          <Tag color={getServiceColor()} icon={getServiceIcon()}>
            {serviceType.toUpperCase()}
          </Tag>
        </div>

        <Text type="secondary" style={{ fontSize: '12px' }}>
          {getServiceDescription()}
        </Text>

        {config.enableServiceCaching && (
          <Text type="secondary" style={{ fontSize: '11px' }}>
            Caching: Enabled ({config.cacheTimeout / 1000}s)
          </Text>
        )}

        <Text type="secondary" style={{ fontSize: '10px', fontStyle: 'italic' }}>
          Set VITE_SERVICE_TYPE to change
        </Text>
      </Space>
    </Card>
  )
}

export default ServiceStatus