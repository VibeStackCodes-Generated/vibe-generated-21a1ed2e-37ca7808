/**
 * Central export point for all static sample data fixtures
 * Provides unified access to products, suppliers, and batches
 */

export * from './types'
export { products } from './products'
export { suppliers } from './suppliers'
export { batches } from './batches'

import type { Product, Batch, Supplier } from './types'
import { products } from './products'
import { suppliers } from './suppliers'
import { batches } from './batches'

/**
 * Utility function to get a product by SKU
 */
export function getProductBySku(sku: string): Product | undefined {
  return products.find((p) => p.sku === sku)
}

/**
 * Utility function to get all products in a category
 */
export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

/**
 * Utility function to get a batch by ID
 */
export function getBatchById(batchId: string): Batch | undefined {
  return batches.find((b) => b.batchId === batchId)
}

/**
 * Utility function to get batches by product SKU
 */
export function getBatchesByProduct(sku: string): Batch[] {
  const product = getProductBySku(sku)
  if (!product) return []
  return batches.filter((b) => product.batchIds.includes(b.batchId))
}

/**
 * Utility function to get a supplier by ID
 */
export function getSupplierById(supplierId: string): Supplier | undefined {
  return suppliers.find((s) => s.supplierId === supplierId)
}

/**
 * Utility function to get all suppliers by country
 */
export function getSuppliersByCountry(country: string): Supplier[] {
  return suppliers.filter((s) => s.country === country)
}

/**
 * Utility function to get suppliers involved in a batch
 */
export function getSuppliersByBatch(batchId: string): Supplier[] {
  const batch = getBatchById(batchId)
  if (!batch) return []
  const supplierIds = new Set(batch.provenanceStages.map((s) => s.supplierId))
  return Array.from(supplierIds)
    .map((id) => getSupplierById(id))
    .filter((s): s is Supplier => s !== undefined)
}

/**
 * Utility function to calculate total carbon footprint by category
 */
export function getCarbonFootprintByCategory(category: string): number {
  return getProductsByCategory(category).reduce(
    (total, product) => total + product.totalCo2Grams,
    0
  )
}

/**
 * Utility function to get products with specific certification
 */
export function getProductsByCertification(
  certType: keyof typeof products[0]['certifications']
): Product[] {
  return products.filter((p) => p.certifications[certType])
}

/**
 * Utility function to search products by title or description
 */
export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.materials.some((m) => m.toLowerCase().includes(lowerQuery))
  )
}

/**
 * Export all data as a single object for easier access
 */
export const allData = {
  products,
  suppliers,
  batches,
}
