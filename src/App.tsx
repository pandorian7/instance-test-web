import { useEffect, useState } from 'react'
import CartView from './components/CartView.tsx'
import Navbar from './components/Navbar.tsx'
import ProductCard from './components/ProductCard.tsx'
import ProfileView from './components/ProfileView.tsx'
import { MOCK_PRODUCTS } from './data/mockData.ts'
import type { CartItem, Product } from './types.ts'

export default function App() {
  const [activeView, setActiveView] = useState<'shop' | 'profile' | 'cart'>('shop')
  const [cart, setCart] = useState<CartItem[]>([])
  const [notification, setNotification] = useState<string | null>(null)

  // Listen to hash changes for deep linking (e.g. /#profile)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'profile' || hash === 'cart' || hash === 'shop') {
        setActiveView(hash)
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigateTo = (view: 'shop' | 'profile' | 'cart') => {
    setActiveView(view)
    window.location.hash = view
  }

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...prev, { product, quantity: 1 }]
    })

    setNotification(`Added "${product.title}" to cart!`)
    setTimeout(() => setNotification(null), 2500)
  }

  const handleUpdateQty = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta
            return newQty > 0 ? { ...item, quantity: newQty } : null
          }
          return item
        })
        .filter((item): item is CartItem => item !== null),
    )
  }

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId))
  }

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="app-wrapper">
      <Navbar
        activeView={activeView}
        onNavigate={navigateTo}
        cartCount={totalCartCount}
      />

      {notification && (
        <div className="toast-notification">
          <span>{notification}</span>
        </div>
      )}

      <main className="main-content">
        {activeView === 'shop' && (
          <section className="shop-section">
            <div className="shop-hero">
              <div className="hero-content">
                <h1>High-Performance Tech & Security Hardware</h1>
                <p>
                  Explore cutting-edge gear tailored for engineers, security researchers, and enthusiasts.
                </p>
              </div>
            </div>

            <div className="catalog-header">
              <h2>Featured Products</h2>
              <span className="product-count">{MOCK_PRODUCTS.length} items available</span>
            </div>

            <div className="product-grid">
              {MOCK_PRODUCTS.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </section>
        )}

        {activeView === 'profile' && (
          <ProfileView onBackToShop={() => navigateTo('shop')} />
        )}

        {activeView === 'cart' && (
          <CartView
            items={cart}
            onUpdateQty={handleUpdateQty}
            onRemoveItem={handleRemoveItem}
            onBackToShop={() => navigateTo('shop')}
            onCheckout={() => {
              alert('Order placed successfully! (Demo Mode)')
              setCart([])
            }}
          />
        )}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 ApexStore E-Commerce UI. All rights reserved.</p>
          <div className="footer-links">
            <button
              type="button"
              className="text-link-btn"
              onClick={() => navigateTo('profile')}
            >
              My Profile (Auto-Logged In)
            </button>
            <button
              type="button"
              className="text-link-btn"
              onClick={() => navigateTo('shop')}
            >
              Catalog
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
