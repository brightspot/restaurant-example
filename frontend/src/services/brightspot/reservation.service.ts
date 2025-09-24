/**
 * Brightspot Reservation Service
 *
 * Provides reservation functionality through Brightspot CMS integration.
 */

import type { ReservationService, ServiceResponse, CreateReservationRequest } from '../types'
import type { Reservation } from '../../types'
import {
  MakeReservationDocument,
  MakeReservationMutation,
  MakeReservationMutationVariables,
  ReservationStatus
} from "../../generated/graphql.ts";
import gca from "./gca.ts";

export class BrightspotReservationService implements ReservationService {
  private async delay(ms: number = 100): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async createReservation(request: CreateReservationRequest): Promise<ServiceResponse<Reservation>> {

    // Helper function to generate confirmation numbers (same as mock service)
    function generateConfirmationNumber(): string {
      const timestamp = Date.now().toString().slice(-6)
      const random = Math.random().toString(36).substring(2, 5).toUpperCase()
      return `RES-${timestamp}-${random}`
    }

    try {
      // Generate confirmation number on client side
      const confirmationNumber = generateConfirmationNumber()

      // Parse reservationDateTime into separate date and time
      const reservationDate = new Date(request.reservationDateTime)
      const dateString = reservationDate.toISOString().split('T')[0] // "2024-01-15"
      const timeString = reservationDate.toTimeString().substring(0, 5) // "19:30"

      // Prepare GraphQL mutation variables
      const variables: MakeReservationMutationVariables = {
        args: {
          main: {
            ReservationDiff: {
              customerName: request.customerName,
              customerEmail: request.customerEmail,
              customerPhone: request.customerPhone,
              reservationDate: dateString,
              reservationTime: timeString,
              partySize: request.partySize,
              location: { _id: request.locationId },
              specialRequests: request.specialRequests || null,
              status: ReservationStatus.Pending,
              confirmationNumber: confirmationNumber,
              createdDate: Date.now()
            }
          }
        }
      }

      // Execute GraphQL mutation
      const { data } = await gca.mutate<MakeReservationMutation>({
        mutation: MakeReservationDocument,
        variables
      })

      // Extract reservation data from response
      const reservationData = data?.Content?.Action?.Save?.Record?.state

      if (reservationData && reservationData.__typename === 'Reservation') {
        // Transform GraphQL response back to Reservation interface
        const reservation: Reservation = {
          id: reservationData._id || '',
          customerName: reservationData.customerName || request.customerName,
          customerEmail: reservationData.customerEmail || request.customerEmail,
          customerPhone: reservationData.customerPhone || request.customerPhone,
          reservationDateTime: request.reservationDateTime, // Keep original format for consistency
          partySize: reservationData.partySize || request.partySize,
          locationId: reservationData.location?._id || request.locationId,
          specialRequests: reservationData.specialRequests || request.specialRequests,
          status: (reservationData.status as any) || 'PENDING',
          createdDate: reservationData.createdDate || new Date().toISOString(),
          confirmationNumber: reservationData.confirmationNumber || confirmationNumber
        }

        return {
          data: reservation,
          success: true,
          timestamp: new Date()
        }
      } else {
        return {
          data: {} as Reservation,
          success: false,
          error: 'Invalid response from server',
          timestamp: new Date()
        }
      }

    } catch (error: any) {
      // Handle GraphQL errors
      if (error.graphQLErrors && error.graphQLErrors.length > 0) {
        const errorMessage = error.graphQLErrors[0].message
        return {
          data: {} as Reservation,
          success: false,
          error: `Reservation creation failed: ${errorMessage}`,
          timestamp: new Date()
        }
      }

      // Handle network errors
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      return {
        data: {} as Reservation,
        success: false,
        error: `Failed to create reservation: ${errorMessage}`,
        timestamp: new Date()
      }
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
