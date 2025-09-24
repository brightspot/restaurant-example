import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout, Menu, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { HomeOutlined, InfoCircleOutlined, EnvironmentOutlined, MenuOutlined, SearchOutlined, CalendarOutlined } from '@ant-design/icons'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LocationsPage from './pages/LocationsPage'
import MenuPage from './pages/MenuPage'
import SearchPage from './pages/SearchPage'
import ReservationsPage from './pages/ReservationsPage'
import ServiceStatus from './components/ServiceStatus'
import {getContentService, getRestaurantService} from './services'
import type { PageContent } from './models/page-content'
import type { Restaurant } from './types'

const { Header, Content, Footer } = Layout
const { Title } = Typography

const menuItems = [
  {
    key: '/',
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: '/about',
    icon: <InfoCircleOutlined />,
    label: <Link to="/about">About</Link>,
  },
  {
    key: '/locations',
    icon: <EnvironmentOutlined />,
    label: <Link to="/locations">Locations</Link>,
  },
  {
    key: '/menu',
    icon: <MenuOutlined />,
    label: <Link to="/menu">Menu</Link>,
  },
  {
    key: '/search',
    icon: <SearchOutlined />,
    label: <Link to="/search">Search</Link>,
  },
  {
    key: '/reservations',
    icon: <CalendarOutlined />,
    label: <Link to="/reservations">Reservations</Link>,
  },
]

function App() {
  const [pageContent, setPageContent] = useState<PageContent | null>(null)
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const location = useLocation()

  useEffect(() => {
    const loadPageContent = async () => {
      try {
        const contentService = getContentService()
        const pageContentResponse = await contentService.getPageContent()
        if (pageContentResponse.success) {
          setPageContent(pageContentResponse.data)
        }

        const restaurantService = getRestaurantService()
        const restaurantResponse = await restaurantService.getRestaurantInfo()
        if (restaurantResponse.success) {
          setRestaurant(restaurantResponse.data)
        }

      } catch (err) {
        console.error('Error loading page content:', err)
      }
    }

    loadPageContent()
  }, [])

  if (!pageContent) {
    return (
      <Layout style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>Loading...</div>
      </Layout>
    )
  }
  return (
    <Layout
      className="layout"
      style={{
        minHeight: '100vh',
        ...(pageContent?.theme?.backgroundImage && {
          backgroundImage: `url(${pageContent.theme.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        })
      }}
    >
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ color: 'white', marginRight: '2rem' }}>
          <Title level={3} style={{ color: 'white', margin: 0 }}>
            {restaurant?.name}
          </Title>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          selectedKeys={[location.pathname]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{
          background: 'var(--color-overlay-light)',
          minHeight: 280,
          padding: 'var(--spacing-lg)',
          backdropFilter: 'blur(2px)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
          </Routes>
        </div>
      </Content>
      <Footer style={{
        textAlign: 'center',
        background: 'var(--color-overlay-dark)',
        color: 'var(--color-white)'
      }}>
        {pageContent?.footer?.copyright || 'Restaurant Demo - Brightspot CMS'}
      </Footer>
      <ServiceStatus />
    </Layout>
  )
}

export default App
