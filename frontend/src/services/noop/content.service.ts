/**
 * No-Op Content Service
 *
 * Returns empty/null data for all methods to test graceful degradation.
 * Useful for validating that the frontend handles missing data correctly.
 */

import type { ContentService, ServiceResponse } from '../types'
import type { PageContent } from '../../models/page-content'

export class NoOpContentService implements ContentService {
  private async delay(ms: number = 100): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async getPageContent(): Promise<ServiceResponse<PageContent>> {
    await this.delay()

    return {
      data: {} as PageContent,
      success: true,
      timestamp: new Date()
    }
  }

  async getPageContentByKey(_pageKey: keyof PageContent): Promise<ServiceResponse<PageContent[keyof PageContent]>> {
    await this.delay()

    return {
      data: null as any,
      success: true,
      timestamp: new Date()
    }
  }
}