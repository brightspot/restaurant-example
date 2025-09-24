import { Typography } from 'antd'
import { ReactNode } from 'react'

const { Title, Paragraph } = Typography

interface IconCardProps {
  icon: ReactNode
  title: string
  description: string
  iconColor?: string
  centered?: boolean
}

const IconCard = ({ icon, title, description, iconColor = 'var(--color-primary)', centered = true }: IconCardProps) => {
  return (
    <div style={{ textAlign: centered ? 'center' : 'left', padding: '1rem' }}>
      <div style={{ fontSize: 'var(--font-size-icon-large)', color: iconColor, marginBottom: '1rem' }}>
        {icon}
      </div>
      <Title level={3} style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)' }}>
        {title}
      </Title>
      <Paragraph style={{ fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '1.6' }}>
        {description}
      </Paragraph>
    </div>
  )
}

export default IconCard