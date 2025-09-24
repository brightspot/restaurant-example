/**
 * Mock Reservation Service
 *
 * Provides reservation functionality for the application.
 * In a real application, this would integrate with a booking system API.
 */

import type { ReservationService, ServiceResponse, CreateReservationRequest } from '../types'
import type { Reservation } from '../../types'

// =============================================================================
// LocalStorage Management
// =============================================================================

const STORAGE_KEY = 'casa_mexicana_reservations'

function getStoredReservations(): Reservation[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Error reading reservations from localStorage:', error)
    return []
  }
}

function saveReservations(reservations: Reservation[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations))
  } catch (error) {
    console.error('Error saving reservations to localStorage:', error)
  }
}

function generateConfirmationNumber(): string {
  const timestamp = Date.now().toString().slice(-6)
  const random = Math.random().toString(36).substring(2, 5).toUpperCase()
  return `RES-${timestamp}-${random}`
}

export class MockReservationService implements ReservationService {
  private async delay(ms: number = 1000): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async createReservation(request: CreateReservationRequest): Promise<ServiceResponse<Reservation>> {
    await this.delay(1000)

    const reservations = getStoredReservations()
    const newReservation: Reservation = {
      ...request,
      id: Math.random().toString(36).substring(2, 11),
      status: 'PENDING',
      createdDate: new Date().toISOString(),
      confirmationNumber: generateConfirmationNumber()
    }

    reservations.push(newReservation)
    saveReservations(reservations)

    return {
      data: newReservation,
      success: true,
      timestamp: new Date()
    }
  }

  async getReservation(confirmationNumber: string): Promise<ServiceResponse<Reservation>> {
    await this.delay(300)

    const reservations = getStoredReservations()
    const reservation = reservations.find(res => res.confirmationNumber === confirmationNumber)

    if (!reservation) {
      return {
        data: {} as Reservation,
        success: false,
        error: `Reservation not found with confirmation number: ${confirmationNumber}`,
        timestamp: new Date()
      }
    }

    return {
      data: reservation,
      success: true,
      timestamp: new Date()
    }
  }

  async getAvailableTimeSlots(_date: string, _locationId: string): Promise<ServiceResponse<string[]>> {
    await this.delay(400)

    // Mock time slots - in real app this would check actual availability
    const timeSlots = [
      '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
      '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
      '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
      '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
      '9:00 PM', '9:30 PM'
    ]

    // Simulate some slots being unavailable
    const availableSlots = timeSlots.filter(() => Math.random() > 0.3)

    return {
      data: availableSlots,
      success: true,
      timestamp: new Date()
    }
  }
}