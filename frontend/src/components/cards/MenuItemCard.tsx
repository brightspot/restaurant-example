import { Card, Typography, Tag, Badge, Image } from 'antd'
import { FireOutlined } from '@ant-design/icons'
import type { MenuItem } from '../../types'

const { Title, Paragraph, Text } = Typography

interface MenuItemCardProps {
  item: MenuItem
  showChefSpecialBadge?: boolean
  chefSpecialText?: string
  unavailableText?: string
}

const MenuItemCard = ({
  item,
  showChefSpecialBadge = true,
  chefSpecialText = "Chef's Special",
  unavailableText = "Currently Unavailable"
}: MenuItemCardProps) => {
  const renderDietaryTags = () => {
    const tags = []
    if (item?.isVegetarian) tags.push(<Tag key="vegetarian" color="green">Vegetarian</Tag>)
    if (item?.isVegan) tags.push(<Tag key="vegan" color="green">Vegan</Tag>)
    if (item?.isGlutenFree) tags.push(<Tag key="gluten-free" color="blue">Gluten Free</Tag>)
    if (item?.spiceLevel && item.spiceLevel > 2) {
      tags.push(
        <Tag key="spicy" color="red" icon={<FireOutlined />}>
          Spicy {item.spiceLevel}/5
        </Tag>
      )
    }
    if (item?.isSpecial) tags.push(<Tag key="special" color="gold">{chefSpecialText}</Tag>)
    return tags
  }

  const cardContent = (
    <Card
      style={{
        height: '100%',
        borderRadius: 'var(--border-radius-md)',
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden'
      }}
      cover={
        item.itemImage && (
          <Image
            alt={item.name}
            src={item.itemImage}
            height={200}
            style={{ objectFit: 'cover' }}
            preview={false}
          />
        )
      }
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1rem',
        gap: '12px'
      }}>
        <Title level={4} style={{
          margin: 0,
          flex: 1,
          fontSize: 'var(--font-size-h4)',
          lineHeight: '1.3',
          wordWrap: 'break-word',
          minWidth: 0
        }}>
          {item.name}
        </Title>
        <Text strong style={{
          fontSize: 'var(--font-size-price)',
          color: 'var(--color-primary)',
          whiteSpace: 'nowrap',
          alignSelf: 'flex-start'
        }}>
          ${item.price}
        </Text>
      </div>

      {item.description && (
        <Paragraph style={{
          marginBottom: '1rem',
          color: 'var(--color-text-muted)',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-relaxed)'
        }}>
          {item.description}
        </Paragraph>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1rem' }}>
        {renderDietaryTags()}
      </div>

      {!item.isAvailable && (
        <div style={{ marginTop: '1rem' }}>
          <Tag color="red">{unavailableText}</Tag>
        </div>
      )}
    </Card>
  )

  if (showChefSpecialBadge && item.isSpecial) {
    return (
      <Badge.Ribbon
        text={chefSpecialText}
        color="gold"
      >
        {cardContent}
      </Badge.Ribbon>
    )
  }

  return cardContent
}

export default MenuItemCard