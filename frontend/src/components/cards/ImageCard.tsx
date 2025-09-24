import { Image } from 'antd'

interface ImageCardProps {
  imageUrl: string
  alt: string
  height?: number
  borderRadius?: string
  boxShadow?: string
}

const ImageCard = ({ imageUrl, alt, height = 250, borderRadius = 'var(--border-radius-md)', boxShadow = 'var(--shadow-md)' }: ImageCardProps) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Image
        width="100%"
        height={height}
        src={imageUrl}
        alt={alt}
        style={{
          objectFit: 'cover',
          borderRadius,
          boxShadow
        }}
      />
    </div>
  )
}

export default ImageCard