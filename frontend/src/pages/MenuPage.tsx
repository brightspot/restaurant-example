import { Typography, Divider, Spin, Alert } from 'antd'
import { usePageContent, useMenuCategories } from '../hooks/useServiceData'
import { ResponsiveContainer, MenuItemCard } from '../components'

const { Title, Paragraph } = Typography

const MenuPage = () => {
  const { data: pageContent, loading: contentLoading, error: contentError } = usePageContent('menu')
  const { data: menuData, loading: menuLoading, error: menuError } = useMenuCategories()

  const loading = contentLoading || menuLoading
  const error = contentError || menuError


  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Spin size="large" />
        <div style={{ marginTop: '1rem' }}>{pageContent?.labels?.prepTime || 'Loading menu...'}</div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ padding: '2rem' }}>
        <Alert
          message="Error Loading Menu"
          description={error || 'Failed to load page content'}
          type="error"
          showIcon
        />
      </div>
    )
  }

  return (
    <div style={{ padding: '0 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <Title level={1} style={{ textAlign: 'center', fontSize: 'var(--font-size-h1)', marginBottom: '1rem' }}>
        {pageContent?.title || 'Menu'}
      </Title>
      <Paragraph style={{
        fontSize: 'var(--font-size-base)',
        marginBottom: '2rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 2rem auto'
      }}>
        {pageContent?.subtitle}
      </Paragraph>

      {menuData?.map((category) => (
        <div key={category.id} style={{ marginBottom: '3rem' }}>
          <Title level={2} style={{ fontSize: 'var(--font-size-h2)', textAlign: 'center', marginBottom: '1rem' }}>
            {category.name}
          </Title>
          {category.description && (
            <Paragraph style={{
              fontSize: 'var(--font-size-base)',
              marginBottom: '1.5rem',
              color: '#666',
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto 1.5rem auto'
            }}>
              {category.description}
            </Paragraph>
          )}

          <ResponsiveContainer maxColumns={2}>
            {category.menuItems?.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                chefSpecialText={pageContent?.labels?.chefSpecial}
                unavailableText={pageContent?.labels?.unavailable}
              />
            ))}
          </ResponsiveContainer>

          <Divider style={{ margin: '2rem 0' }} />
        </div>
      ))}
    </div>
  )
}

export default MenuPage
