import type { Order, Product } from '../types.ts'

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    title: 'CyberDeck Wireless Keyboard',
    price: 129.99,
    category: 'Hardware',
    rating: 4.8,
    description: 'Ultra-low latency mechanical switches with RGB backlighting.',
    badge: 'Popular',
  },
  {
    id: 'prod-2',
    title: 'Precision Sensor Gaming Mouse',
    price: 69.5,
    category: 'Peripherals',
    rating: 4.7,
    description: '26,000 DPI optical sensor with customizable weight distribution.',
  },
  {
    id: 'prod-3',
    title: 'Noise-Cancelling Studio Headset',
    price: 189.0,
    category: 'Audio',
    rating: 4.9,
    description: 'High-fidelity audio driver with adaptive hybrid noise cancellation.',
    badge: 'Best Seller',
  },
  {
    id: 'prod-4',
    title: 'Magnetic USB-C Security Dongle',
    price: 34.99,
    category: 'Security',
    rating: 4.6,
    description: 'Hardware authentication token for multi-factor cryptographic security.',
  },
  {
    id: 'prod-5',
    title: 'Matte Desk Mat & Mousepad XL',
    price: 24.99,
    category: 'Accessories',
    rating: 4.5,
    description: 'Water-resistant micro-woven surface with anti-slip rubber base.',
  },
  {
    id: 'prod-6',
    title: 'UltraWide Curved 34" Monitor',
    price: 499.99,
    category: 'Displays',
    rating: 4.9,
    description: '144Hz WQHD quantum dot panel with HDR400 certification.',
    badge: 'New',
  },
]

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-8942-X',
    date: 'Oct 28, 2026',
    total: 214.5,
    status: 'Delivered',
    items: ['CyberDeck Wireless Keyboard', 'Magnetic USB-C Security Dongle'],
  },
  {
    id: 'ORD-7719-B',
    date: 'Sep 14, 2026',
    total: 189.0,
    status: 'Delivered',
    items: ['Noise-Cancelling Studio Headset'],
  },
]
