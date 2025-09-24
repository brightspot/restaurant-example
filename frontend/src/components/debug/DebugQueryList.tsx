/**
 * Debug Query List Component
 *
 * Displays a compact list of GraphQL queries with summary stats.
 */

import React from 'react'
import { List, Typography, Tag, Space, Button } from 'antd'
import { ClockCircleOutlined, DatabaseOutlined, EyeOutlined } from '@ant-design/icons'
import type { DebugQueryResult } from '../../services/brightspot/debug'

const { Text } = Typography

interface DebugQueryListProps {
  queries: DebugQueryResult[]
  selectedQueryId: string | null
  onSelectQuery: (queryId: string) => void
  onClearAll: () => void
}

const DebugQueryList: React.FC<DebugQueryListProps> = ({
  queries,
  selectedQueryId,
  onSelectQuery,
  onClearAll
}) => {
  const formatRelativeTime = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const seconds = Math.floor(diff / 1000)

    if (seconds < 60) return `${seconds}s ago`
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    return `${hours}h ago`
  }

  return (
    <div>
      <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text strong>Query History ({queries.length})</Text>
        {queries.length > 0 && (
          <Button size="small" onClick={onClearAll} type="text">
            Clear All
          </Button>
        )}
      </div>

      <List
        size="small"
        dataSource={queries}
        renderItem={(query) => (
          <List.Item
            key={query.id}
            style={{
              padding: '8px 12px',
              cursor: 'pointer',
              backgroundColor: selectedQueryId === query.id ? '#f6ffed' : undefined,
              border: selectedQueryId === query.id ? '1px solid #52c41a' : '1px solid #d9d9d9',
              borderRadius: 4,
              marginBottom: 4
            }}
            onClick={() => onSelectQuery(query.id)}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', width: '100%' }}>
              {/* Icon */}
              <DatabaseOutlined style={{ color: '#1890ff', marginTop: '2px' }} />

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Title row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <Text strong style={{ fontSize: '13px' }}>
                    {query.operationName || 'Unnamed Query'}
                  </Text>
                  {selectedQueryId === query.id && (
                    <Tag color="green" style={{ fontSize: '10px', padding: '1px 6px' }}>
                      <EyeOutlined /> Selected
                    </Tag>
                  )}
                </div>

                {/* Stats in a more organized layout */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px' }}>
                    <Space size="small">
                      <ClockCircleOutlined style={{ color: '#1890ff' }} />
                      <Text type="secondary">
                        {query.duration ? `${query.duration}ms` : 'N/A'} total
                      </Text>
                    </Space>
                    <Text type="secondary" style={{ fontSize: '10px' }}>
                      {formatRelativeTime(query.timestamp)}
                    </Text>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                    <Text type="secondary">
                      {query.profilerResult.totalCount} events
                    </Text>
                    <Text type="secondary">
                      {query.profilerResult.totalOwnTotal.toFixed(1)}ms backend
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List.Item>
        )}
        locale={{
          emptyText: 'No debug queries captured yet. Enable debugging and make some GraphQL requests.'
        }}
      />
    </div>
  )
}

export default DebugQueryList