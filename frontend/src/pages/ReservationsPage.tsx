import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, Form, Input, DatePicker, Select, Button, Card, Row, Col, InputNumber, message } from 'antd'
import { CalendarOutlined, UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'
import { useLocations, usePageContent, useCreateReservation } from '../hooks/useServiceData'
import { TwoColumnContainer, TextCard, ReservationConfirmation } from '../components'
import type { CreateReservationRequest } from '../services/types'

const { Title, Paragraph } = Typography
const { TextArea } = Input
const { Option } = Select

const ReservationsPage = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [showConfirmation, setShowConfirmation] = useState(false)

  const { data: pageContent } = usePageContent('reservations')
  const { data: locations, loading: locationsLoading, error: locationsError } = useLocations()
  const { data: reservation, loading: reservationLoading, error: reservationError, mutate: createReservation, reset } = useCreateReservation()

  // Show error message if locations fail to load
  if (locationsError && !locationsLoading) {
    message.error('Failed to load locations. Please refresh the page.')
  }

  // Show error message if reservation creation fails
  if (reservationError) {
    message.error(reservationError)
  }

  // Switch to confirmation view when reservation is successful
  if (reservation && !showConfirmation) {
    setShowConfirmation(true)
  }

  const handleSubmit = async (values: any) => {
    try {
      // Transform form values to CreateReservationRequest
      const reservationDate = values.reservationDate.toISOString().split('T')[0]
      const reservationTime = values.reservationTime
      const reservationDateTime = `${reservationDate}T${reservationTime}:00`

      const request: CreateReservationRequest = {
        customerName: values.customerName,
        customerEmail: values.customerEmail,
        customerPhone: values.customerPhone,
        reservationDateTime,
        partySize: values.partySize,
        locationId: values.locationId,
        specialRequests: values.specialRequests
      }

      await createReservation(request)
    } catch (error) {
      console.error('Error submitting reservation:', error)
    }
  }

  const handleMakeAnotherReservation = () => {
    setShowConfirmation(false)
    form.resetFields()
    reset()
  }

  const handleBackToHome = () => {
    navigate('/')
  }

  // Find the selected location for the confirmation page
  const selectedLocation = reservation ? locations?.find(loc => loc.id === reservation.locationId) : null

  // Show confirmation page if reservation was successful
  if (showConfirmation && reservation) {
    return (
      <ReservationConfirmation
        reservation={reservation}
        location={selectedLocation}
        onMakeAnother={handleMakeAnotherReservation}
        onBackToHome={handleBackToHome}
      />
    )
  }

  const disabledDate = (current: any) => {
    // Disable dates before today
    return current && current.isBefore(new Date(), 'day')
  }

  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 11; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        const displayTime = hour > 12
          ? `${(hour - 12).toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} PM`
          : hour === 12
          ? `${hour}:${minute.toString().padStart(2, '0')} PM`
          : `${hour}:${minute.toString().padStart(2, '0')} AM`

        slots.push(
          <Option key={time} value={time}>
            {displayTime}
          </Option>
        )
      }
    }
    return slots
  }

  return (
    <div style={{ padding: '0 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <Title level={1} style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
        {pageContent?.title || 'Reservations'}
      </Title>
      <Paragraph style={{
        fontSize: 'clamp(14px, 2vw, 16px)',
        marginBottom: '2rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 2rem auto'
      }}>
        {pageContent?.subtitle || 'Reserve your table for an unforgettable Mexican dining experience. We\'ll confirm your reservation within 24 hours.'}
      </Paragraph>

      <TwoColumnContainer
        leftSpan={14}
        rightSpan={10}
      >
        <Card style={{
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          marginBottom: '1.5rem'
        }}>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              requiredMark={false}
            >
              <Row gutter={[16, 0]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="customerName"
                    label="Full Name"
                    rules={[{ required: true, message: 'Please enter your full name' }]}
                  >
                    <Input
                      prefix={<UserOutlined />}
                      placeholder="Enter your full name"
                      size="large"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="customerEmail"
                    label="Email Address"
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' }
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined />}
                      placeholder="Enter your email"
                      size="large"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 0]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="customerPhone"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please enter your phone number' }]}
                  >
                    <Input
                      prefix={<PhoneOutlined />}
                      placeholder="(555) 123-4567"
                      size="large"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="partySize"
                    label="Party Size"
                    rules={[{ required: true, message: 'Please select party size' }]}
                  >
                    <InputNumber
                      min={1}
                      max={20}
                      placeholder="Number of guests"
                      size="large"
                      style={{ width: '100%' }}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 0]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="reservationDate"
                    label="Preferred Date"
                    rules={[{ required: true, message: 'Please select a date' }]}
                  >
                    <DatePicker
                      size="large"
                      style={{ width: '100%' }}
                      disabledDate={disabledDate}
                      placeholder="Select date"
                      suffixIcon={<CalendarOutlined />}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="reservationTime"
                    label="Preferred Time"
                    rules={[{ required: true, message: 'Please select a time' }]}
                  >
                    <Select
                      placeholder="Select time"
                      size="large"
                    >
                      {generateTimeSlots()}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="locationId"
                label="Location"
                rules={[{ required: true, message: 'Please select a location' }]}
              >
                <Select
                  placeholder="Select location"
                  size="large"
                  loading={locationsLoading}
                >
                  {locations?.map(location => (
                    <Option key={location.id} value={location.id}>
                      {location.name} - {location.address}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="specialRequests"
                label="Special Requests (Optional)"
              >
                <TextArea
                  rows={4}
                  placeholder="Any special dietary requirements, occasion details, seating preferences, etc."
                />
              </Form.Item>

              <Form.Item style={{ marginTop: '2rem' }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={reservationLoading}
                  style={{ minWidth: '200px' }}
                >
                  Submit Reservation
                </Button>
              </Form.Item>
            </Form>
          </Card>
        <div>
          <TextCard
            title="Reservation Information"
            style={{
              marginBottom: '1.5rem'
            }}
            content={
              <div style={{ lineHeight: '2' }}>
                <Typography.Paragraph style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
                  <strong>Confirmation:</strong> We'll contact you within 24 hours to confirm your reservation.
                </Typography.Paragraph>
                <Typography.Paragraph style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
                  <strong>Cancellation:</strong> Please call us at least 2 hours in advance to cancel or modify your reservation.
                </Typography.Paragraph>
                <Typography.Paragraph style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
                  <strong>Large Parties:</strong> For parties of 8 or more, please call us directly at (555) 123-4567.
                </Typography.Paragraph>
                <Typography.Paragraph style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
                  <strong>Special Occasions:</strong> Let us know if you're celebrating something special - we'd love to make it memorable!
                </Typography.Paragraph>
              </div>
            }
          />

          <TextCard
            title="Contact Us"
            content={
              <div>
                <Typography.Paragraph style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
                  <strong>Centro Location</strong><br />
                  123 Main Street<br />
                  (555) 123-4567
                </Typography.Paragraph>
                <Typography.Paragraph style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
                  <strong>Mercado Location</strong><br />
                  456 Harbor Boulevard<br />
                  (555) 987-6543
                </Typography.Paragraph>
              </div>
            }
          />
        </div>
      </TwoColumnContainer>
    </div>
  )
}

export default ReservationsPage
