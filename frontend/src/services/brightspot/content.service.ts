/**
 * Brightspot Content Service
 *
 * Manages content delivery from Brightspot CMS.
 * Delegates to MockContentService for unimplemented methods.
 */

import type { ContentService, ServiceResponse } from '../types'
import type { PageContent } from '../../models/page-content'
import { MockContentService } from '../mock/content.service'

export class BrightspotContentService implements ContentService {
  private mockService = new MockContentService()

  // TODO: Implement with actual Brightspot CMS integration
  async getPageContent(): Promise<ServiceResponse<PageContent>> {
    // For now, delegate to mock service
    return this.mockService.getPageContent()
  }

  // TODO: Implement with actual Brightspot CMS integration
  async getPageContentByKey(pageKey: keyof PageContent): Promise<ServiceResponse<PageContent[keyof PageContent]>> {
    // For now, delegate to mock service
    return this.mockService.getPageContentByKey(pageKey)
  }
}