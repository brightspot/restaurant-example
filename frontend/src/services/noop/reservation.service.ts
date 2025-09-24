/**
 * No-Op Reservation Service
 *
 * Returns empty/null data for all methods to test graceful degradation.
 * Useful for validating that the frontend handles missing data correctly.
 */

import type { ReservationService, ServiceResponse, CreateReservationRequest } from '../types'
import type { Reservation } from '../../types'

export class NoOpReservationService implements ReservationService {
  private async delay(ms: number = 100): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async createReservation(_request: CreateReservationRequest): Promise<ServiceResponse<Reservation>> {
    await this.delay()

    return {
      data: { id: 'no-data' } as Reservation,
      success: true,
      timestamp: new Date()
    }
  }

  async getReservation(_confirmationNumber: string): Promise<ServiceResponse<Reservation>> {
    await this.delay()

    return {
      data: { id: 'no-data' } as Reservation,
      success: true,
      timestamp: new Date()
    }
  }

  async getAvailableTimeSlots(_date: string, _locationId: string): Promise<ServiceResponse<string[]>> {
    await this.delay()

    return {
      data: [],
      success: true,
      timestamp: new Date()
    }
  }
}