/**
 * Debug State Management Store
 *
 * Manages debug state using RxJS observables for real-time updates.
 */

import { BehaviorSubject, Observable } from 'rxjs'
import type { DebugState, DebugQueryResult, ProfilerResult } from './types'

class DebugStore {
  private static instance: DebugStore
  private state = new BehaviorSubject<DebugState>({
    enabled: this.getStoredEnabled(),
    queries: [],
    selectedQueryId: null
  })

  private constructor() {}

  static getInstance(): DebugStore {
    if (!DebugStore.instance) {
      DebugStore.instance = new DebugStore()
    }
    return DebugStore.instance
  }

  private getStoredEnabled(): boolean {
    try {
      return localStorage.getItem('graphql-debug-enabled') === 'true'
    } catch {
      return false
    }
  }

  private setStoredEnabled(enabled: boolean): void {
    try {
      localStorage.setItem('graphql-debug-enabled', enabled.toString())
    } catch {
      // Ignore localStorage errors
    }
  }

  getState$(): Observable<DebugState> {
    return this.state.asObservable()
  }

  getCurrentState(): DebugState {
    return this.state.value
  }

  setEnabled(enabled: boolean): void {
    this.setStoredEnabled(enabled)
    this.updateState({ enabled })
  }

  addDebugResult(
    operationName: string | null,
    query: string,
    profilerResult: ProfilerResult,
    variables?: Record<string, any>,
    duration?: number
  ): void {
    if (!this.state.value.enabled) {
      return
    }

    const debugResult: DebugQueryResult = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      operationName,
      query,
      timestamp: new Date(),
      profilerResult,
      variables,
      duration
    }

    const currentQueries = this.state.value.queries
    const updatedQueries = [debugResult, ...currentQueries].slice(0, 50) // Keep last 50 queries

    this.updateState({
      queries: updatedQueries,
      selectedQueryId: this.state.value.selectedQueryId || debugResult.id
    })
  }

  selectQuery(queryId: string | null): void {
    this.updateState({ selectedQueryId: queryId })
  }

  clearAll(): void {
    this.updateState({
      queries: [],
      selectedQueryId: null
    })
  }

  exportDebugData(): string {
    return JSON.stringify(this.state.value.queries, null, 2)
  }

  exportSelectedQuery(): string | null {
    const selected = this.getSelectedQuery()
    return selected ? JSON.stringify(selected, null, 2) : null
  }

  getSelectedQuery(): DebugQueryResult | null {
    const { queries, selectedQueryId } = this.state.value
    return queries.find(q => q.id === selectedQueryId) || null
  }

  private updateState(updates: Partial<DebugState>): void {
    this.state.next({
      ...this.state.value,
      ...updates
    })
  }
}

export const debugStore = DebugStore.getInstance()
export default debugStore