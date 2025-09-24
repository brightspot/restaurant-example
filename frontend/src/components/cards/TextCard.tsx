import { Card, Typography } from 'antd'
import { ReactNode } from 'react'

const { Paragraph } = Typography

interface TextCardProps {
  title?: string
  content: string | ReactNode
  bordered?: boolean
  style?: React.CSSProperties
}

const TextCard = ({ title, content, bordered = true, style = {} }: TextCardProps) => {
  const cardStyle = {
    borderRadius: 'var(--border-radius-md)',
    boxShadow: 'var(--shadow-md)',
    height: '100%',
    ...(bordered ? {} : { border: 'none', boxShadow: 'none' }),
    ...style
  }

  return (
    <Card
      title={title}
      style={cardStyle}
    >
      {typeof content === 'string' ? (
        <Paragraph style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-loose)', marginBottom: 0 }}>
          {content}
        </Paragraph>
      ) : (
        content
      )}
    </Card>
  )
}

export default TextCard