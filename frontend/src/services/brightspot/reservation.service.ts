/**
 * Brightspot Reservation Service
 *
 * Provides reservation functionality through Brightspot CMS integration.
 */

import type { ReservationService, ServiceResponse, CreateReservationRequest } from '../types'
import type { Reservation } from '../../types'

export class BrightspotReservationService implements ReservationService {
  private async delay(ms: number = 100): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async createReservation(_request: CreateReservationRequest): Promise<ServiceResponse<Reservation>> {
    await this.delay()

    return {
      data: { id: 'brightspot-data' } as Reservation,
      success: true,
      timestamp: new Date()
    }
  }

  async getReservation(_confirmationNumber: string): Promise<ServiceResponse<Reservation>> {
    await this.delay()

    return {
      data: { id: 'brightspot-data' } as Reservation,
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