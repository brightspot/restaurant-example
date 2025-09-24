import { Row, Col, Typography } from 'antd'
import { ReactNode } from 'react'

const { Title } = Typography

interface TwoColumnContainerProps {
  children: [ReactNode, ReactNode]
  leftSpan?: number
  rightSpan?: number
  gutter?: [number, number]
  style?: React.CSSProperties
  title?: string
  titleStyle?: React.CSSProperties
}

const TwoColumnContainer = ({
  children,
  leftSpan = 12,
  rightSpan = 12,
  gutter = [24, 32],
  style = {},
  title,
  titleStyle = {}
}: TwoColumnContainerProps) => {
  if (leftSpan + rightSpan !== 24) {
    console.warn('TwoColumnContainer: leftSpan + rightSpan should equal 24')
  }

  const [leftChild, rightChild] = children

  return (
    <div style={style}>
      {title && (
        <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem', ...titleStyle }}>
          {title}
        </Title>
      )}
      <Row gutter={gutter}>
        <Col xs={24} sm={24} md={leftSpan} lg={leftSpan} xl={leftSpan}>
          {leftChild}
        </Col>
        <Col xs={24} sm={24} md={rightSpan} lg={rightSpan} xl={rightSpan}>
          {rightChild}
        </Col>
      </Row>
    </div>
  )
}

export default TwoColumnContainer