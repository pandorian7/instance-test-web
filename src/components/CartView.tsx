import type { CartItem } from '../types.ts'

interface CartViewProps {
  items: CartItem[]
  onUpdateQty: (productId: string, delta: number) => void
  onRemoveItem: (productId: string) => void
  onBackToShop: () => void
  onCheckout: () => void
}

export default function CartView({
  items,
  onUpdateQty,
  onRemoveItem,
  onBackToShop,
  onCheckout,
}: CartViewProps) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = items.length > 0 ? 9.99 : 0
  const total = subtotal + shipping

  return (
    <section className="cart-container">
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <button type="button" className="shop-link-btn" onClick={onBackToShop}>
          ← Continue Shopping
        </button>
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <div className="empty-cart-icon">🛒</div>
          <p>Your shopping cart is currently empty.</p>
          <button type="button" className="btn-primary" onClick={onBackToShop}>
            Browse Products
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-list">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="cart-item-row">
                <div className="cart-item-info">
                  <h4>{product.title}</h4>
                  <span className="cart-item-price">${product.price.toFixed(2)} each</span>
                </div>

                <div className="cart-item-actions">
                  <div className="qty-controls">
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => onUpdateQty(product.id, -1)}
                      disabled={quantity <= 1}
                    >
                      −
                    </button>
                    <span className="qty-number">{quantity}</span>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => onUpdateQty(product.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <span className="cart-item-total">
                    ${(product.price * quantity).toFixed(2)}
                  </span>

                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => onRemoveItem(product.id)}
                    title="Remove item"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary-box">
            <h3>Order Summary</h3>
            <div className="summary-line">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Standard Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="summary-line summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button type="button" className="btn-checkout" onClick={onCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
