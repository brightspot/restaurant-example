/**
 * Debug Panel Component
 *
 * Main collapsible debug panel with query list and detailed view.
 */

import React, { useState, useEffect } from 'react'
import { Card, Space, Switch, Button, Typography, Row, Col, Divider } from 'antd'
import { BugOutlined, DownloadOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { debugStore } from '../../services/brightspot/debug'
import type { DebugState } from '../../services/brightspot/debug'
import DebugQueryList from './DebugQueryList'
import DebugQueryDetails from './DebugQueryDetails'
import { config } from '../../config/env'

const { Text } = Typography

const DebugPanel: React.FC = () => {
  const [debugState, setDebugState] = useState<DebugState>(debugStore.getCurrentState())
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const subscription = debugStore.getState$().subscribe(setDebugState)
    return () => subscription.unsubscribe()
  }, [])

  // Only show in development
  if (!config.isDevelopment) {
    return null
  }

  const handleToggleDebug = (enabled: boolean) => {
    debugStore.setEnabled(enabled)
  }

  const handleSelectQuery = (queryId: string) => {
    debugStore.selectQuery(queryId)
  }

  const handleClearAll = () => {
    debugStore.clearAll()
  }

  const handleExportAll = () => {
    const data = debugStore.exportDebugData()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `graphql-debug-${new Date().toISOString()}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handleExportSelected = () => {
    const data = debugStore.exportSelectedQuery()
    if (!data) return

    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `graphql-debug-query-${new Date().toISOString()}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const selectedQuery = debugState.queries.find(q => q.id === debugState.selectedQueryId)

  return (
    <Card
      size="small"
      style={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        width: isExpanded ? '90vw' : 300,
        maxWidth: isExpanded ? '90vw' : 400,
        maxHeight: isExpanded ? '80vh' : 'auto',
        zIndex: 1000,
        opacity: 0.95,
        transition: 'all 0.3s ease'
      }}
      title={
        <Space>
          <BugOutlined />
          <Text strong>GraphQL Debug</Text>
          <Button
            type="text"
            size="small"
            icon={isExpanded ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ marginLeft: 'auto' }}
          />
        </Space>
      }
      extra={
        <Space size="small">
          <Switch
            size="small"
            checked={debugState.enabled}
            onChange={handleToggleDebug}
            checkedChildren="ON"
            unCheckedChildren="OFF"
          />
        </Space>
      }
    >
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        {/* Status Info */}
        <div>
          <Text type="secondary" style={{ fontSize: '11px' }}>
            Status: {debugState.enabled ? (
              <Text type="success">Capturing debug data</Text>
            ) : (
              <Text type="warning">Debug mode disabled</Text>
            )}
          </Text>
        </div>

        {isExpanded && (
          <>
            <Divider style={{ margin: '8px 0' }} />

            {/* Controls */}
            <Row gutter={8}>
              <Col flex="1">
                <Space size="small">
                  <Button
                    size="small"
                    icon={<DownloadOutlined />}
                    onClick={handleExportAll}
                    disabled={debugState.queries.length === 0}
                  >
                    Export All
                  </Button>
                  <Button
                    size="small"
                    icon={<DownloadOutlined />}
                    onClick={handleExportSelected}
                    disabled={!selectedQuery}
                  >
                    Export Selected
                  </Button>
                </Space>
              </Col>
            </Row>

            <Divider style={{ margin: '8px 0' }} />

            {/* Content */}
            <div style={{
              display: 'flex',
              gap: 16,
              height: isExpanded ? '50vh' : 'auto',
              overflow: 'hidden'
            }}>
              {/* Query List */}
              <div style={{
                flex: '0 0 300px',
                overflowY: 'auto',
                paddingRight: 8
              }}>
                <DebugQueryList
                  queries={debugState.queries}
                  selectedQueryId={debugState.selectedQueryId}
                  onSelectQuery={handleSelectQuery}
                  onClearAll={handleClearAll}
                />
              </div>

              {/* Query Details */}
              <div style={{
                flex: 1,
                overflowY: 'auto',
                paddingLeft: 8
              }}>
                {selectedQuery ? (
                  <DebugQueryDetails query={selectedQuery} />
                ) : (
                  <div style={{
                    textAlign: 'center',
                    color: '#999',
                    padding: 40
                  }}>
                    <Text type="secondary">
                      Select a query from the list to view details
                    </Text>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </Space>
    </Card>
  )
}

export default DebugPanel