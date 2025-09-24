import { Row, Col } from 'antd'
import { ReactNode } from 'react'

interface ResponsiveContainerProps {
  children: ReactNode | ReactNode[]
  maxColumns?: number
  gutter?: [number, number]
  style?: React.CSSProperties
}

const ResponsiveContainer = ({ children, maxColumns = 4, gutter = [16, 24], style = {} }: ResponsiveContainerProps) => {
  const getColumnSpan = (totalItems: number, maxCols: number) => {
    const effectiveColumns = Math.min(totalItems, maxCols)
    return 24 / effectiveColumns
  }

  const childArray = Array.isArray(children) ? children : [children]
  const colSpan = getColumnSpan(childArray.length, maxColumns)

  return (
    <Row gutter={gutter} style={style}>
      {childArray.map((child, index) => (
        <Col
          key={index}
          xs={24}
          sm={childArray.length === 1 ? 24 : 12}
          md={colSpan}
          lg={colSpan}
          xl={colSpan}
        >
          {child}
        </Col>
      ))}
    </Row>
  )
}

export default ResponsiveContainer