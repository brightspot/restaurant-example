/**
 * Object Details Modal Component
 *
 * Modal overlay for displaying detailed object information from debug timeline events.
 */

import React from 'react'
import { Modal, Typography, Button, Space } from 'antd'
import { CopyOutlined, CloseOutlined } from '@ant-design/icons'
import type { DebugTimelineNode } from '../../services/brightspot/debug'

const { Text, Paragraph } = Typography

interface ObjectDetailsModalProps {
  open: boolean
  node: DebugTimelineNode | null
  onClose: () => void
}

const ObjectDetailsModal: React.FC<ObjectDetailsModalProps> = ({ open, node, onClose }) => {
  const handleCopyToClipboard = () => {
    if (node?.objects) {
      navigator.clipboard.writeText(node.objects)
    }
  }

  if (!node) return null

  return (
    <Modal
      title={
        <Space>
          <Text strong>{node.name}</Text>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            Index: {node.index} • Duration: {node.totalDuration.toFixed(2)}ms
          </Text>
        </Space>
      }
      open={open}
      onCancel={onClose}
      width={800}
      footer={[
        <Button key="copy" icon={<CopyOutlined />} onClick={handleCopyToClipboard}>
          Copy to Clipboard
        </Button>,
        <Button key="close" type="primary" icon={<CloseOutlined />} onClick={onClose}>
          Close
        </Button>
      ]}
    >
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        {/* Summary Information */}
        <div>
          <Text strong>Event Details:</Text>
          <div style={{ marginTop: 8 }}>
            <Text type="secondary">Start Time: </Text>
            <Text code>{node.start.toFixed(3)}ms</Text>
            <br />
            <Text type="secondary">Total Duration: </Text>
            <Text code>{node.totalDuration.toFixed(3)}ms</Text>
            <br />
            <Text type="secondary">Own Duration: </Text>
            <Text code>{node.ownDuration.toFixed(3)}ms</Text>
          </div>
        </div>

        {/* Object Details */}
        <div>
          <Text strong style={{ display: 'block', marginBottom: 8 }}>
            Object Information:
          </Text>
          <Paragraph>
            <pre style={{
              fontSize: '11px',
              margin: 0,
              textAlign: 'left',
              backgroundColor: '#f5f5f5',
              padding: 12,
              borderRadius: 4,
              border: '1px solid #d9d9d9',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              maxHeight: '400px',
              overflow: 'auto'
            }}>
              {node.objects}
            </pre>
          </Paragraph>
        </div>

        {/* Child Count Info */}
        {node.children && node.children.length > 0 && (
          <div>
            <Text type="secondary">
              This event has {node.children.length} child event{node.children.length === 1 ? '' : 's'}
            </Text>
          </div>
        )}
      </Space>
    </Modal>
  )
}

export default ObjectDetailsModal