export interface Product {
  id: string
  title: string
  price: number
  category: string
  rating: number
  description: string
  badge?: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  date: string
  total: number
  status: 'Delivered' | 'In Transit' | 'Processing'
  items: string[]
}
