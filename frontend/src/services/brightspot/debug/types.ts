/**
 * Debug Data Types
 *
 * TypeScript interfaces for GraphQL debug profiler results structure.
 */

export interface DebugEvent {
  event: string
  count: number
  ownTotal: number
  ownAverage: number
}

export interface DebugTimelineNode {
  name: string
  index: number
  start: number
  totalDuration: number
  ownDuration: number
  objects: string
  children?: DebugTimelineNode[]
}

export interface ProfilerResult {
  totalCount: number
  totalOwnTotal: number
  events: DebugEvent[]
  timeline: DebugTimelineNode[]
}

export interface DebugQueryResult {
  id: string
  operationName: string | null
  query: string
  timestamp: Date
  duration?: number
  profilerResult: ProfilerResult
  variables?: Record<string, any>
}

export interface DebugState {
  enabled: boolean
  queries: DebugQueryResult[]
  selectedQueryId: string | null
}