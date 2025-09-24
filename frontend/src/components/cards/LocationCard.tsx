import { Card, Typography, Tag, Divider } from 'antd'
import { PhoneOutlined, EnvironmentOutlined, ClockCircleOutlined, CarOutlined, InfoCircleOutlined } from '@ant-design/icons'
import type { Location } from '../../types'

const { Title, Text } = Typography

interface LocationCardProps {
  location: Location
}

const LocationCard = ({ location }: LocationCardProps) => {
  return (
    <Card
      cover={
        <img
          alt={location.name}
          src={location.locationImage}
          style={{
            height: 200,
            objectFit: 'cover'
          }}
        />
      }
      style={{
        height: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 6px 16px rgba(0,0,0,0.1)'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <Title level={3} style={{
          margin: 0,
          flex: 1,
          fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
          minWidth: '200px'
        }}>
          {location.name}
        </Title>
        {location.isMainLocation && (
          <Tag color="gold">Main Location</Tag>
        )}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem', gap: '8px' }}>
          <EnvironmentOutlined style={{ color: 'var(--color-primary)', marginTop: '5px', flexShrink: 0 }} />
          <div style={{ textAlign: 'left' }}>
            <Text style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.4', textAlign: 'left' }}>
              {location.address}
            </Text>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem', gap: '8px' }}>
          <PhoneOutlined style={{ color: 'var(--color-primary)', marginTop: '5px', flexShrink: 0 }} />
          <div style={{ textAlign: 'left' }}>
            <Text style={{ fontSize: 'clamp(14px, 2vw, 16px)', textAlign: 'left' }}>{location.phone}</Text>
          </div>
        </div>
      </div>

      <Divider />

      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem', gap: '8px' }}>
          <ClockCircleOutlined style={{ color: 'var(--color-success)', marginTop: '5px', flexShrink: 0 }} />
          <div style={{ textAlign: 'left' }}>
            <Text strong style={{ fontSize: 'clamp(14px, 2vw, 16px)', textAlign: 'left' }}>Hours:</Text>
            <br />
            <Text style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.4', textAlign: 'left' }}>{location.hours}</Text>
          </div>
        </div>
      </div>

      <Divider />

      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem', gap: '8px' }}>
          <CarOutlined style={{ color: 'var(--color-info)', marginTop: '5px', flexShrink: 0 }} />
          <div style={{ textAlign: 'left' }}>
            <Text strong style={{ fontSize: 'clamp(14px, 2vw, 16px)', textAlign: 'left' }}>Parking:</Text>
            <br />
            <Text style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.4', textAlign: 'left' }}>{location.parkingInfo}</Text>
          </div>
        </div>
      </div>

      {location.accessibilityInfo && (
        <>
          <Divider />
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem', gap: '8px' }}>
              <InfoCircleOutlined style={{ color: 'var(--color-warning)', marginTop: '5px', flexShrink: 0 }} />
              <div style={{ textAlign: 'left' }}>
                <Text strong style={{ fontSize: 'clamp(14px, 2vw, 16px)', textAlign: 'left' }}>Accessibility:</Text>
                <br />
                <Text style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.4', textAlign: 'left' }}>{location.accessibilityInfo}</Text>
              </div>
            </div>
          </div>
        </>
      )}
    </Card>
  )
}

export default LocationCard
