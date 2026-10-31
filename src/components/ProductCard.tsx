import type { Product } from '../types.ts'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-img-box">
        <div className="product-category-tag">{product.category}</div>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <div className="product-placeholder-art">
          <span>📦</span>
        </div>
      </div>

      <div className="product-info">
        <div className="product-header">
          <h3 className="product-title">{product.title}</h3>
          <span className="product-rating">★ {product.rating.toFixed(1)}</span>
        </div>
        <p className="product-desc">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button
            type="button"
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
