/**
 * Sample supplier data fixtures
 * Represents various suppliers in the EcoThread supply chain
 */

import type { Supplier } from './types'

export const suppliers: Supplier[] = [
  {
    supplierId: 'SUPP-001',
    supplierName: 'Organic Cotton Farmers Cooperative',
    country: 'India',
    certifications: {
      organic: true,
      fairtrade: true,
      gots: true,
      gri: false,
      bci: true,
      leed: false,
      carbontrust: false,
    },
    geoLocation: {
      latitude: 19.0760,
      longitude: 72.8777,
      address: 'Mumbai, Maharashtra',
      country: 'India',
    },
    description: 'Leading supplier of certified organic cotton with fair trade practices',
    contactEmail: 'contact@organiccottonindian.com',
    website: 'https://organiccottonindian.com',
  },
  {
    supplierId: 'SUPP-002',
    supplierName: 'EcoTextile Processors',
    country: 'Portugal',
    certifications: {
      organic: true,
      fairtrade: false,
      gots: true,
      gri: true,
      bci: false,
      leed: true,
      carbontrust: true,
    },
    geoLocation: {
      latitude: 40.7128,
      longitude: -8.2226,
      address: 'Porto, Portugal',
      country: 'Portugal',
    },
    description:
      'Sustainable textile processing with advanced water recycling and carbon-neutral operations',
    contactEmail: 'info@ecotextile-processors.eu',
    website: 'https://ecotextile-processors.eu',
  },
  {
    supplierId: 'SUPP-003',
    supplierName: 'Global Recycled Fibers',
    country: 'Netherlands',
    certifications: {
      organic: false,
      fairtrade: false,
      gots: false,
      gri: true,
      bci: false,
      leed: true,
      carbontrust: true,
    },
    geoLocation: {
      latitude: 52.3676,
      longitude: 4.9041,
      address: 'Amsterdam, Netherlands',
      country: 'Netherlands',
    },
    description: 'Specializes in recycled synthetic and natural fiber processing with zero-waste initiatives',
    contactEmail: 'supply@globalrecycledfibers.com',
    website: 'https://globalrecycledfibers.com',
  },
  {
    supplierId: 'SUPP-004',
    supplierName: 'Premium Garment Manufacturing',
    country: 'Vietnam',
    certifications: {
      organic: false,
      fairtrade: true,
      gots: false,
      gri: false,
      bci: true,
      leed: false,
      carbontrust: false,
    },
    geoLocation: {
      latitude: 21.0285,
      longitude: 105.8542,
      address: 'Hanoi, Vietnam',
      country: 'Vietnam',
    },
    description: 'Fair trade certified garment manufacturer with ethical labor practices and quality craftsmanship',
    contactEmail: 'hello@premiumgarments.vn',
    website: 'https://premiumgarments.vn',
  },
  {
    supplierId: 'SUPP-005',
    supplierName: 'Natural Dye Works',
    country: 'Japan',
    certifications: {
      organic: true,
      fairtrade: true,
      gots: true,
      gri: false,
      bci: false,
      leed: false,
      carbontrust: true,
    },
    geoLocation: {
      latitude: 35.6762,
      longitude: 139.6503,
      address: 'Tokyo, Japan',
      country: 'Japan',
    },
    description: 'Artisanal natural dye production using traditional methods and organic plant-based materials',
    contactEmail: 'studio@naturaldyeworks.jp',
    website: 'https://naturaldyeworks.jp',
  },
]
