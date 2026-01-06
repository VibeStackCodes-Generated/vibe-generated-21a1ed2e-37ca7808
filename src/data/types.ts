/**
 * Type definitions for EcoThread data structures
 * Covers products, suppliers, batches, and provenance tracking
 */

/**
 * Geographic coordinates for supply chain mapping
 */
export interface GeoLocation {
  latitude: number
  longitude: number
  address: string
  country: string
}

/**
 * Certification flags for sustainability verification
 */
export interface CertificationFlags {
  organic: boolean
  fairtrade: boolean
  gots: boolean // Global Organic Textile Standard
  gri: boolean // Global Recycled Standard
  bci: boolean // Better Cotton Initiative
  leed: boolean
  carbontrust: boolean
}

/**
 * Individual stage in the supply chain with environmental impact
 */
export interface ProvenanceStage {
  stageName: string
  stageDescription: string
  supplierId: string
  geoLocation: GeoLocation
  timestamp: string // ISO 8601 format
  certifications: CertificationFlags
  co2Grams: number // CO2 emissions for this stage
  mediaUrls: string[] // Images/videos of this stage
}

/**
 * Batch represents a collection of SKUs from the same production run
 */
export interface Batch {
  batchId: string
  batchName: string
  productionDate: string // ISO 8601 format
  quantity: number
  provenanceStages: ProvenanceStage[]
  totalCo2Grams: number
  verificationToken?: string // Optional tamper-evident token link
}

/**
 * Supplier information for provenance
 */
export interface Supplier {
  supplierId: string
  supplierName: string
  country: string
  certifications: CertificationFlags
  geoLocation: GeoLocation
  description: string
  contactEmail: string
  website?: string
}

/**
 * Product SKU with all e-commerce and provenance data
 */
export interface Product {
  sku: string
  title: string
  description: string
  price: number // In USD cents
  image: string // Primary product image URL
  additionalImages: string[]
  videos: string[] // Video URLs
  materials: string[] // Material composition
  category: string
  sizes: string[]
  colors: string[]
  inStock: boolean
  batchIds: string[] // References to Batch objects
  certifications: CertificationFlags
  totalCo2Grams: number
  createdAt: string // ISO 8601 format
  updatedAt: string // ISO 8601 format
}
