/**
 * Sample product data fixtures
 * Complete SKU data with pricing, images, and provenance references
 */

import type { Product } from './types'

export const products: Product[] = [
  {
    sku: 'ECO-ORG-TSHIRT-001',
    title: 'Signature Organic Cotton T-Shirt',
    description:
      'Premium organic cotton t-shirt featuring our iconic minimalist design. Ethically sourced from Indian cooperative farms and processed through our global network of certified sustainable suppliers. Perfect for everyday wear with a lasting impression.',
    price: 9900, // $99.00 in cents
    image:
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1521572163474-6864f9cf17ab&w=800',
    additionalImages: [
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1492329671046-e7eb4c66e2a3&w=800',
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1556821552-eb2c6c6a5125&w=800',
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1521572163474-6864f9cf17ab&w=800',
    ],
    videos: [
      'https://videos.unsplash.com/video-static-1581092162/your-video.mp4',
    ],
    materials: ['100% Organic Cotton'],
    category: 'Basics',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Natural White', 'Stone Gray', 'Forest Green', 'Navy Blue'],
    inStock: true,
    batchIds: ['BATCH-2024-001'],
    certifications: {
      organic: true,
      fairtrade: true,
      gots: true,
      gri: false,
      bci: true,
      leed: false,
      carbontrust: false,
    },
    totalCo2Grams: 1160,
    createdAt: '2024-02-15T10:30:00Z',
    updatedAt: '2024-02-15T10:30:00Z',
  },
  {
    sku: 'ECO-REC-JACKET-001',
    title: 'Urban Recycled Polyester Jacket',
    description:
      'Contemporary casual jacket crafted from 100% recycled polyester fibers. Features innovative fabric technology from our Amsterdam processing facility, water-resistant finish, and seamless integration of sustainable materials without compromising on style. Perfect for eco-conscious urbanites.',
    price: 18900, // $189.00 in cents
    image:
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1551028719-00167b16ebc5&w=800',
    additionalImages: [
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1552374196-1ab2748f5c66&w=800',
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1539533057592-4d14fc9d4a91&w=800',
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1520591645100-9f2c6df059c7&w=800',
    ],
    videos: [],
    materials: ['100% Recycled Polyester'],
    category: 'Outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Charcoal Black', 'Deep Navy', 'Olive Green', 'Graphite Gray'],
    inStock: true,
    batchIds: ['BATCH-2024-002'],
    certifications: {
      organic: false,
      fairtrade: false,
      gots: false,
      gri: true,
      bci: false,
      leed: true,
      carbontrust: true,
    },
    totalCo2Grams: 715,
    createdAt: '2024-02-20T14:00:00Z',
    updatedAt: '2024-02-20T14:00:00Z',
  },
  {
    sku: 'ECO-LIN-SHIRT-002',
    title: 'Luxury Linen Summer Shirt',
    description:
      'Exquisite Belgian linen shirt showcasing the finest sustainable craftsmanship. Lightweight and breathable, perfect for warm weather. Each garment traces back to certified organic flax farms and ethically-produced through our Portugal and Vietnam network. A timeless luxury piece.',
    price: 24500, // $245.00 in cents
    image:
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1547439759-d2db57d25c3f&w=800',
    additionalImages: [
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1596755094514-f87e34085b2c&w=800',
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1592078615290-033ee584e267&w=800',
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1604695573706-e8ac294c05b0&w=800',
    ],
    videos: [
      'https://videos.unsplash.com/video-static-1581092162/linen-video.mp4',
    ],
    materials: ['100% Belgian Linen'],
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Soft Beige', 'Sky Blue', 'Sage Green'],
    inStock: true,
    batchIds: ['BATCH-2024-003'],
    certifications: {
      organic: true,
      fairtrade: true,
      gots: false,
      gri: false,
      bci: false,
      leed: true,
      carbontrust: true,
    },
    totalCo2Grams: 850,
    createdAt: '2024-03-01T09:00:00Z',
    updatedAt: '2024-03-01T09:00:00Z',
  },
  {
    sku: 'ECO-MIX-PANTS-001',
    title: 'Blended Sustainable Trousers',
    description:
      'Sophisticated trousers blending organic cotton with recycled polyester for durability and comfort. The perfect sustainable basics piece with a refined silhouette. Sourced from our curated network of ethical manufacturers across three continents.',
    price: 16900, // $169.00 in cents
    image:
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1542272604-787c62d465d1&w=800',
    additionalImages: [
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1594938298603-c8148c4dae35&w=800',
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1591195853828-11db59a44f6b&w=800',
    ],
    videos: [],
    materials: ['70% Organic Cotton', '30% Recycled Polyester'],
    category: 'Bottoms',
    sizes: ['24', '26', '28', '30', '32', '34', '36'],
    colors: ['Classic Black', 'Stone Gray', 'Navy Blue', 'Khaki Beige'],
    inStock: true,
    batchIds: ['BATCH-2024-001', 'BATCH-2024-002'],
    certifications: {
      organic: true,
      fairtrade: true,
      gots: true,
      gri: true,
      bci: true,
      leed: false,
      carbontrust: true,
    },
    totalCo2Grams: 1450,
    createdAt: '2024-02-25T11:15:00Z',
    updatedAt: '2024-02-25T11:15:00Z',
  },
  {
    sku: 'ECO-NTL-DRESS-001',
    title: 'Artisanal Natural-Dyed Dress',
    description:
      'Statement piece featuring hand-dyed organic cotton using natural plant-based dyes. Collaboratively produced by our Japanese artisan dyers and Vietnamese assembly team. Limited edition with unique colorations due to natural dyeing process. Each piece is truly one-of-a-kind.',
    price: 29900, // $299.00 in cents
    image:
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1595777707802-41f3cab1c69f&w=800',
    additionalImages: [
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1612336307429-8a88e8d08eae&w=800',
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1595929685881-0e4ea314b471&w=800',
      'https://vibestack.codes/api/assets/proxy?src=unsplash&id=1617372213727-d2e59417bfab&w=800',
    ],
    videos: [
      'https://videos.unsplash.com/video-static-1581092162/dress-video.mp4',
    ],
    materials: ['100% Organic Cotton'],
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      'Indigo Blue',
      'Rust Orange',
      'Deep Purple',
      'Forest Green',
    ],
    inStock: true,
    batchIds: ['BATCH-2024-001'],
    certifications: {
      organic: true,
      fairtrade: true,
      gots: true,
      gri: false,
      bci: true,
      leed: false,
      carbontrust: true,
    },
    totalCo2Grams: 1160,
    createdAt: '2024-02-15T10:30:00Z',
    updatedAt: '2024-02-15T10:30:00Z',
  },
]
