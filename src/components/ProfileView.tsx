import { useState } from 'react'
import { MOCK_ORDERS } from '../data/mockData.ts'

interface ProfileViewProps {
  onBackToShop: () => void
}

export default function ProfileView({ onBackToShop }: ProfileViewProps) {
  const [copied, setCopied] = useState(false)

  // Flag injected from build arg FLAG via VITE_FLAG
  const flag = import.meta.env.VITE_FLAG || 'FLAG{dummy_local_development_flag_1337}'

  const handleCopyFlag = async () => {
    try {
      await navigator.clipboard.writeText(flag)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <section className="profile-container">
      {/* Auto-signin banner */}
      <div className="auth-status-banner">
        <span className="auth-pulse" />
        <span>Active Session: Automatically signed in as <strong>Alex Mercer</strong> (UID: #88210)</span>
      </div>

      <div className="profile-grid">
        {/* User Card */}
        <div className="profile-card user-overview-card">
          <div className="profile-avatar-large">AM</div>
          <div className="user-details">
            <div className="user-name-row">
              <h2>Alex Mercer</h2>
              <span className="verified-badge">✓ Verified</span>
            </div>
            <p className="user-email">alex.mercer@apexstore.internal</p>
            <div className="user-tags">
              <span className="tag">VIP Tier 3</span>
              <span className="tag tag-admin">CTF Challenger</span>
            </div>
          </div>
          <div className="user-stats">
            <div className="stat-item">
              <span className="stat-label">Orders</span>
              <span className="stat-value">12</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Points</span>
              <span className="stat-value">4,520</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Security</span>
              <span className="stat-value text-success">Level 4</span>
            </div>
          </div>
        </div>

        {/* CTF Flag Box */}
        <div className="profile-card ctf-flag-card">
          <div className="ctf-card-header">
            <div className="ctf-title-group">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <h3 className="ctf-card-title">CTF Challenge Flag</h3>
            </div>
            <span className="ctf-label-badge">SECRET_BUILD_FLAG</span>
          </div>

          <p className="ctf-description">
            This flag is injected during the Docker build process via the <code>FLAG</code> build argument.
          </p>

          <div className="flag-terminal">
            <span className="terminal-prefix">$ cat /var/secrets/flag.txt</span>
            <div className="flag-value-display">
              <code>{flag}</code>
              <button
                type="button"
                className={`copy-flag-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopyFlag}
              >
                {copied ? '✓ Copied!' : 'Copy Flag'}
              </button>
            </div>
          </div>
        </div>

        {/* Account Details & Shipping */}
        <div className="profile-card account-details-card">
          <h3>Account Information</h3>
          <div className="info-list">
            <div className="info-row">
              <span className="info-key">Membership Status</span>
              <span className="info-val">Active (Auto-Renewing)</span>
            </div>
            <div className="info-row">
              <span className="info-key">Default Currency</span>
              <span className="info-val">USD ($)</span>
            </div>
            <div className="info-row">
              <span className="info-key">Shipping Address</span>
              <span className="info-val">742 Evergreen Terrace, Sector 7G</span>
            </div>
            <div className="info-row">
              <span className="info-key">Two-Factor Auth</span>
              <span className="info-val text-success">Enabled (Hardware Key)</span>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="profile-card orders-card">
          <div className="orders-header">
            <h3>Recent Orders</h3>
            <button
              type="button"
              className="shop-link-btn"
              onClick={onBackToShop}
            >
              Continue Shopping →
            </button>
          </div>
          <div className="order-items-list">
            {MOCK_ORDERS.map((order) => (
              <div key={order.id} className="order-row">
                <div className="order-meta">
                  <span className="order-id">{order.id}</span>
                  <span className="order-date">{order.date}</span>
                </div>
                <div className="order-summary">
                  <p className="order-names">{order.items.join(', ')}</p>
                  <span className="order-status">{order.status}</span>
                </div>
                <div className="order-price">${order.total.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
