import { Card, Button, Image } from 'antd'
import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

interface CTACardProps {
  title?: string
  description?: string
  image?: string
  imageAlt?: string
  buttonText?: string
  buttonIcon?: ReactNode
  linkTo?: string
  onButtonClick?: () => void
  imageHeight?: number
}

const CTACard = ({
  title,
  description,
  image,
  imageAlt = '',
  buttonText = 'Learn More',
  buttonIcon,
  linkTo,
  onButtonClick,
  imageHeight = 180
}: CTACardProps) => {
  const button = (
    <Button
      type="primary"
      icon={buttonIcon}
      size="large"
      block
      onClick={onButtonClick}
    >
      {buttonText}
    </Button>
  )

  return (
    <Card
      hoverable
      style={{
        borderRadius: 'var(--border-radius-md)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      styles={{
        body: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: 'var(--spacing-md)'
        }
      }}
      cover={
        image && (
          <Image
            alt={imageAlt}
            src={image}
            height={imageHeight}
            style={{ objectFit: 'cover' }}
          />
        )
      }
      actions={[
        linkTo ? (
          <Link to={linkTo} key="button">
            {button}
          </Link>
        ) : (
          button
        )
      ]}
    >
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {title && (
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
              {title}
            </span>
          </div>
        )}
        {description && (
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-muted)', lineHeight: 'var(--line-height-relaxed)' }}>
              {description}
            </span>
          </div>
        )}
      </div>
    </Card>
  )
}

export default CTACard