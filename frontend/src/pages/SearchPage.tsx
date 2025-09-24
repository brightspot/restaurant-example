import { useState } from 'react'
import { Typography, Input, Empty, Spin, Row, Col } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { usePageContent, useMenuSearch } from '../hooks/useServiceData'
import { MenuItemCard } from '../components'

const { Title, Paragraph } = Typography
const { Search } = Input

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const { data: pageContent, loading: contentLoading } = usePageContent('search')
  const { data: results, loading: searchLoading } = useMenuSearch(searchTerm)

  const handleSearch = (value: string) => {
    setSearchTerm(value.trim())
  }


  if (contentLoading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Spin size="large" />
        <div style={{ marginTop: '1rem' }}>Loading...</div>
      </div>
    )
  }

  return (
    <div>
      <Title level={1}>{pageContent?.title || 'Search'}</Title>
      <Paragraph style={{ fontSize: '16px', marginBottom: '2rem' }}>
        {pageContent?.subtitle || 'Search our menu'}
      </Paragraph>

      <div style={{ marginBottom: '2rem', maxWidth: '600px' }}>
        <Search
          placeholder={pageContent?.placeholder || 'Search menu items...'}
          allowClear
          enterButton={<SearchOutlined />}
          size="large"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSearch={handleSearch}
          style={{ width: '100%' }}
        />
      </div>

      {searchLoading && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <Spin size="large" />
        </div>
      )}

      {!searchLoading && searchTerm && results?.length === 0 && (
        <Empty
          description={pageContent?.noResultsText || 'No results found'}
          style={{ margin: '2rem 0' }}
        />
      )}

      {!searchLoading && results && results.length > 0 && (
        <div>
          <Title level={3} style={{ marginBottom: '1.5rem' }}>
            {pageContent?.resultsText || 'Search Results'} ({results.length} {results.length === 1 ? 'dish' : 'dishes'} found)
          </Title>

          <Row gutter={[16, 24]}>
            {results.map((item) => (
              <Col
                key={item.id}
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={8}
              >
                <MenuItemCard
                  item={item}
                  showChefSpecialBadge={false}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}

      {!searchTerm && (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-text-muted)' }}>
          <SearchOutlined style={{ fontSize: '48px', marginBottom: '1rem' }} />
          <Title level={3} type="secondary">
            {pageContent?.emptyState?.title || 'Start Searching'}
          </Title>
          <Paragraph type="secondary">
            {pageContent?.emptyState?.subtitle || 'Enter a search term to find menu items'}
          </Paragraph>
        </div>
      )}
    </div>
  )
}

export default SearchPage
