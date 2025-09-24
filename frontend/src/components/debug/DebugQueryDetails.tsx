/**
 * Debug Query Details Component
 *
 * Displays detailed debug information for a selected GraphQL query.
 */

import React, { useState } from 'react'
import { Card, Descriptions, Table, Tree, Typography, Tag, Space } from 'antd'
import { ClockCircleOutlined, DatabaseOutlined } from '@ant-design/icons'
import type { DebugQueryResult, DebugEvent, DebugTimelineNode } from '../../services/brightspot/debug'
import type { ColumnsType } from 'antd/es/table'
import type { DataNode } from 'antd/es/tree'
import ObjectDetailsModal from './ObjectDetailsModal'

const { Text, Paragraph } = Typography

// Performance threshold constants (easily adjustable)
const PERFORMANCE_THRESHOLDS = {
  GOOD: 50,      // ≤ 50ms = green
  MODERATE: 200  // 51-200ms = yellow, >200ms = red
} as const

// Utility function to get performance color based on duration
const getPerformanceColor = (duration: number): string => {
  if (duration <= PERFORMANCE_THRESHOLDS.GOOD) return '#52c41a' // green
  if (duration <= PERFORMANCE_THRESHOLDS.MODERATE) return '#faad14' // yellow
  return '#f5222d' // red
}

interface DebugQueryDetailsProps {
  query: DebugQueryResult
}

const DebugQueryDetails: React.FC<DebugQueryDetailsProps> = ({ query }) => {
  const [modalNode, setModalNode] = useState<DebugTimelineNode | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleNodeClick = (node: DebugTimelineNode) => {
    setModalNode(node)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setModalNode(null)
    setIsModalOpen(false)
  }
  const eventsColumns: ColumnsType<DebugEvent> = [
    {
      title: 'Event',
      dataIndex: 'event',
      key: 'event',
      render: (event: string) => (
        <Text code style={{ fontSize: '12px' }}>
          {event}
        </Text>
      )
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
      width: 80,
      align: 'right',
      render: (count: number) => (
        <Tag color="blue" style={{ margin: 0 }}>
          {count}
        </Tag>
      )
    },
    {
      title: 'Total (ms)',
      dataIndex: 'ownTotal',
      key: 'ownTotal',
      width: 100,
      align: 'right',
      render: (total: number) => (
        <Text strong style={{ color: '#1890ff' }}>
          {total.toFixed(2)}
        </Text>
      )
    },
    {
      title: 'Average (ms)',
      dataIndex: 'ownAverage',
      key: 'ownAverage',
      width: 120,
      align: 'right',
      render: (avg: number) => (
        <Text type="secondary">
          {avg.toFixed(2)}
        </Text>
      )
    }
  ]

  const formatTimelineNodes = (nodes: DebugTimelineNode[], depth: number = 0): DataNode[] => {
    return nodes.map(node => {
      // Create object preview (truncated with ellipsis)
      const maxPreviewChars = 250
      const objectPreview = node.objects && node.objects.length > maxPreviewChars
        ? `${node.objects.substring(0, maxPreviewChars)}...`
        : node.objects || ''

      // Get performance colors
      const totalColor = getPerformanceColor(node.totalDuration)
      const ownColor = getPerformanceColor(node.ownDuration)

      return {
        title: (
          <div
            data-depth={depth}
            style={{
              position: 'relative',
              cursor: 'pointer',
              padding: '2px 0',
              fontSize: '12px',
              width: '100%',
              maxWidth: '100%'
            }}
            onClick={(e) => {
              e.stopPropagation()
              handleNodeClick(node)
            }}
          >
            {/* Event name and object preview */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              overflow: 'hidden'
            }}>
              <Text strong style={{
                flexShrink: 0
              }}>
                {node.name === 'DataFetch' ? 'DataFetch' : node.name}
              </Text>
              {objectPreview && (
                <span style={{
                  fontSize: '10px',
                  color: '#666',
                  fontWeight: 'normal',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  minWidth: 0
                }}>
                  {node.name === 'DataFetch' ?
                    objectPreview.replace(/^DataFetch\s*→\s*/, '') : // Remove "DataFetch → " prefix for cleaner display
                    objectPreview
                  }
                </span>
              )}
            </div>

            {/* Duration values positioned absolutely */}
            <div style={{
              position: 'absolute',
              right: '0px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '10px',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '0 4px'
            }}>
              <span style={{ color: totalColor }}>
                {node.totalDuration.toFixed(1)}ms
              </span>
              <span style={{ color: '#ccc' }}>|</span>
              <span style={{ color: ownColor }}>
                {node.ownDuration.toFixed(1)}ms
              </span>
            </div>
          </div>
        ),
        key: `${node.index}-${node.name}`,
        children: node.children ? formatTimelineNodes(node.children, depth + 1) : undefined
      }
    })
  }

  const formatDuration = (ms?: number) => {
    if (!ms) return 'N/A'
    return `${ms}ms`
  }

  return (
    <Card
      size="small"
      title={
        <Space>
          <DatabaseOutlined />
          <Text strong>{query.operationName || 'Unnamed Query'}</Text>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            {query.timestamp.toLocaleTimeString()}
          </Text>
        </Space>
      }
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        {/* Summary Information */}
        <Descriptions size="small" column={3} bordered>
          <Descriptions.Item label="Operation" span={1}>
            <Text code style={{ fontSize: '11px' }}>
              {query.operationName || 'Anonymous'}
            </Text>
          </Descriptions.Item>
          <Descriptions.Item label="Duration" span={1}>
            <Space size="small">
              <ClockCircleOutlined />
              <Text strong>{formatDuration(query.duration)}</Text>
            </Space>
          </Descriptions.Item>
          <Descriptions.Item label="Events" span={1}>
            <Text strong>{query.profilerResult.totalCount}</Text>
          </Descriptions.Item>
          <Descriptions.Item label="Total Backend Time" span={3}>
            <Text strong style={{ color: '#1890ff' }}>
              {query.profilerResult.totalOwnTotal.toFixed(2)}ms
            </Text>
          </Descriptions.Item>
        </Descriptions>

        {/* Events Table */}
        <div>
          <Text strong style={{ marginBottom: 8, display: 'block' }}>
            Performance Events
          </Text>
          <Table
            columns={eventsColumns}
            dataSource={query.profilerResult.events}
            size="small"
            pagination={false}
            rowKey="event"
            style={{ marginBottom: 16 }}
          />
        </div>

        {/* Timeline Tree */}
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8
          }}>
            <Text strong>Execution Timeline</Text>
            <Text strong style={{ fontSize: '11px', color: '#666', fontFamily: 'monospace', paddingRight: '23px' }}>
              Total | Own
            </Text>
          </div>
          <div style={{ maxHeight: 300, overflow: 'auto' }}>
            <style dangerouslySetInnerHTML={{
              __html: `
                .debug-timeline-tree {
                  position: relative !important;
                }
                .debug-timeline-tree .ant-tree-treenode {
                  position: relative !important;
                  width: 100% !important;
                }
                .debug-timeline-tree .ant-tree-node-content-wrapper {
                  display: flex !important;
                  width: 100% !important;
                }
                .debug-timeline-tree .ant-tree-title {
                  overflow: hidden !important;
                  width: 100% !important;
                  max-width: 100% !important;
                }
                /* Dynamic max-width using data attributes for different depths */
                .debug-timeline-tree .ant-tree-node-content-wrapper:has([data-depth="0"]) { max-width: calc(100% - 28px) !important; }
                .debug-timeline-tree .ant-tree-node-content-wrapper:has([data-depth="1"]) { max-width: calc(100% - 52px) !important; }
                .debug-timeline-tree .ant-tree-node-content-wrapper:has([data-depth="2"]) { max-width: calc(100% - 76px) !important; }
                .debug-timeline-tree .ant-tree-node-content-wrapper:has([data-depth="3"]) { max-width: calc(100% - 100px) !important; }
                .debug-timeline-tree .ant-tree-node-content-wrapper:has([data-depth="4"]) { max-width: calc(100% - 124px) !important; }
                .debug-timeline-tree .ant-tree-node-content-wrapper:has([data-depth="5"]) { max-width: calc(100% - 148px) !important; }
                .debug-timeline-tree .ant-tree-node-content-wrapper:has([data-depth="6"]) { max-width: calc(100% - 172px) !important; }
                .debug-timeline-tree .ant-tree-node-content-wrapper:has([data-depth="7"]) { max-width: calc(100% - 196px) !important; }
                .debug-timeline-tree .ant-tree-node-content-wrapper:has([data-depth="8"]) { max-width: calc(100% - 220px) !important; }
                .debug-timeline-tree .ant-tree-node-content-wrapper:has([data-depth="9"]) { max-width: calc(100% - 244px) !important; }
              `
            }} />
            <Tree
              treeData={formatTimelineNodes(query.profilerResult.timeline)}
              defaultExpandAll
              showLine
              style={{
                width: '100%'
              }}
              className="debug-timeline-tree"
            />
          </div>
        </div>

        {/* Variables (if present) */}
        {query.variables && Object.keys(query.variables).length > 0 && (
          <div>
            <Text strong style={{ marginBottom: 8, display: 'block' }}>
              Variables
            </Text>
            <Paragraph>
              <pre style={{ fontSize: '11px', margin: 0, textAlign: 'left' }}>
                {JSON.stringify(query.variables, null, 2)}
              </pre>
            </Paragraph>
          </div>
        )}
      </Space>

      {/* Object Details Modal */}
      <ObjectDetailsModal
        open={isModalOpen}
        node={modalNode}
        onClose={handleModalClose}
      />
    </Card>
  )
}

export default DebugQueryDetails
