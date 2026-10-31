interface NavbarProps {
  activeView: 'shop' | 'profile' | 'cart'
  onNavigate: (view: 'shop' | 'profile' | 'cart') => void
  cartCount: number
}

export default function Navbar({ activeView, onNavigate, cartCount }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="nav-container">
        <button
          type="button"
          className="brand-btn"
          onClick={() => onNavigate('shop')}
        >
          <span className="brand-icon">⚡</span>
          <span className="brand-text">ApexStore</span>
        </button>

        <nav className="nav-links">
          <button
            type="button"
            className={`nav-btn ${activeView === 'shop' ? 'active' : ''}`}
            onClick={() => onNavigate('shop')}
          >
            Products
          </button>

          <button
            type="button"
            className={`nav-btn ${activeView === 'cart' ? 'active' : ''}`}
            onClick={() => onNavigate('cart')}
          >
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button
            type="button"
            className={`nav-btn profile-nav-btn ${activeView === 'profile' ? 'active' : ''}`}
            onClick={() => onNavigate('profile')}
            title="Auto-signed in as Alex Mercer"
          >
            <span className="user-avatar-mini">AM</span>
            <span className="user-name-mini">Alex Mercer</span>
            <span className="online-indicator" />
          </button>
        </nav>
      </div>
    </header>
  )
}
