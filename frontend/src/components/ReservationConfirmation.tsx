import { Typography, Card, Button, Row, Col, Divider, Tag } from 'antd'
import { CheckCircleOutlined, CalendarOutlined, UserOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons'
import type { Reservation, Location } from '../types'

const { Title, Paragraph, Text } = Typography

interface ReservationConfirmationProps {
  reservation: Reservation
  location?: Location | null
  onMakeAnother?: () => void
  onBackToHome?: () => void
}

const ReservationConfirmation = ({
  reservation,
  location,
  onMakeAnother,
  onBackToHome
}: ReservationConfirmationProps) => {
  const formatDate = (dateTimeString: string) => {
    const date = new Date(dateTimeString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString)
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      {/* Success Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <CheckCircleOutlined
          style={{
            fontSize: '64px',
            color: '#52c41a',
            marginBottom: '1rem'
          }}
        />
        <Title level={1} style={{ color: '#52c41a', marginBottom: '0.5rem' }}>
          Reservation Confirmed!
        </Title>
        <Paragraph style={{ fontSize: '18px', color: '#666' }}>
          Thank you for choosing Casa Mexicana. We're excited to host you!
        </Paragraph>
      </div>

      {/* Confirmation Details Card */}
      <Card
        style={{
          marginBottom: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Title level={2} style={{ color: '#1890ff', marginBottom: '0.5rem' }}>
            Confirmation #{reservation.confirmationNumber}
          </Title>
          <Text type="secondary">
            Please save this confirmation number for your records
          </Text>
        </div>

        <Divider />

        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12}>
            <div style={{ marginBottom: '1.5rem' }}>
              <Title level={4} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CalendarOutlined /> Date & Time
              </Title>
              <Text style={{ fontSize: '16px', display: 'block', textAlign: 'left' }}>
                {formatDate(reservation.reservationDateTime || '')}
              </Text>
              <Text style={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'left', display: 'block' }}>
                {formatTime(reservation.reservationDateTime || '')}
              </Text>
            </div>
          </Col>

          <Col xs={24} sm={12}>
            <div style={{ marginBottom: '1.5rem' }}>
              <Title level={4} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <UserOutlined /> Party Details
              </Title>
              <Text style={{ fontSize: '16px', display: 'block', textAlign: 'left' }}>
                {reservation.partySize} {reservation.partySize === 1 ? 'Guest' : 'Guests'}
              </Text>
              <Text style={{ fontSize: '16px', textAlign: 'left', display: 'block' }}>
                {reservation.customerName}
              </Text>
            </div>
          </Col>

          <Col xs={24} sm={12}>
            <div style={{ marginBottom: '1.5rem' }}>
              <Title level={4} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <EnvironmentOutlined /> Location
              </Title>
              <Text style={{ fontSize: '16px', display: 'block', textAlign: 'left' }}>
                {location?.name || 'Restaurant Location'}
              </Text>
              {location?.address && (
                <Text style={{ fontSize: '14px', color: '#666', textAlign: 'left', display: 'block' }}>
                  {location.address}
                </Text>
              )}
            </div>
          </Col>

          <Col xs={24} sm={12}>
            <div style={{ marginBottom: '1.5rem' }}>
              <Title level={4} style={{ marginBottom: '0.5rem' }}>
                Contact Info
              </Title>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <MailOutlined />
                <Text style={{ fontSize: '14px', textAlign: 'left' }}>{reservation.customerEmail}</Text>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <PhoneOutlined />
                <Text style={{ fontSize: '14px', textAlign: 'left' }}>{reservation.customerPhone}</Text>
              </div>
            </div>
          </Col>
        </Row>

        {reservation.specialRequests && (
          <>
            <Divider />
            <div style={{ marginBottom: '1rem' }}>
              <Title level={4} style={{ marginBottom: '0.5rem' }}>
                Special Requests
              </Title>
              <Text style={{ fontSize: '16px', textAlign: 'left' }}>
                {reservation.specialRequests}
              </Text>
            </div>
          </>
        )}

        <Divider />

        <div style={{ textAlign: 'center' }}>
          <Tag color="orange" style={{ fontSize: '14px', padding: '4px 12px' }}>
            Status: {reservation.status}
          </Tag>
        </div>
      </Card>

      {/* Important Information Card */}
      <Card
        title="Important Information"
        style={{
          marginBottom: '2rem',
          borderRadius: '12px'
        }}
      >
        <Row gutter={[24, 16]}>
          <Col xs={24} md={12}>
            <Title level={5}>Confirmation</Title>
            <Paragraph style={{ marginBottom: '1rem' }}>
              We'll contact you within 24 hours to confirm your reservation and provide any additional details.
            </Paragraph>
          </Col>

          <Col xs={24} md={12}>
            <Title level={5}>Cancellation Policy</Title>
            <Paragraph style={{ marginBottom: '1rem' }}>
              Please call us at least 2 hours in advance to cancel or modify your reservation.
            </Paragraph>
          </Col>

          <Col xs={24} md={12}>
            <Title level={5}>Contact Us</Title>
            <Paragraph style={{ marginBottom: '1rem' }}>
              Questions? Call us at{' '}
              <Text strong>{location?.phone || '(555) 123-4567'}</Text>
            </Paragraph>
          </Col>

          <Col xs={24} md={12}>
            <Title level={5}>Arrival</Title>
            <Paragraph style={{ marginBottom: '1rem' }}>
              Please arrive 10-15 minutes early to ensure prompt seating.
            </Paragraph>
          </Col>
        </Row>
      </Card>

      {/* Action Buttons */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Row gutter={16} justify="center">
          <Col>
            <Button
              type="primary"
              size="large"
              onClick={onMakeAnother}
              style={{ minWidth: '160px' }}
            >
              Make Another Reservation
            </Button>
          </Col>
          <Col>
            <Button
              size="large"
              onClick={onBackToHome}
              style={{ minWidth: '160px' }}
            >
              Back to Home
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ReservationConfirmation
