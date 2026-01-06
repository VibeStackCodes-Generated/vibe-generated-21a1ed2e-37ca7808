/**
 * QUICK REFERENCE: Sample Data Usage Examples
 * ============================================
 *
 * This file contains copy-paste ready code examples for using the sample data.
 */

// ===== EXAMPLE 1: Get a product and display it =====
// import { getProductBySku } from '@/data'
//
// const product = getProductBySku('ECO-ORG-TSHIRT-001')
// if (product) {
//   console.log(product.title)           // "Signature Organic Cotton T-Shirt"
//   console.log(product.price)           // 9900 (means $99.00)
//   console.log(product.materials)       // ["100% Organic Cotton"]
//   console.log(product.colors)          // ["Natural White", "Stone Gray", ...]
//   console.log(product.totalCo2Grams)   // 1160
// }

// ===== EXAMPLE 2: Get all products in a category =====
// import { getProductsByCategory } from '@/data'
//
// const topProducts = getProductsByCategory('Tops')
// topProducts.forEach(p => {
//   console.log(p.title, `$${(p.price / 100).toFixed(2)}`)
// })

// ===== EXAMPLE 3: Get complete supply chain for a product =====
// import { getBatchesByProduct, getSuppliersByBatch } from '@/data'
//
// const batches = getBatchesByProduct('ECO-ORG-TSHIRT-001')
// batches.forEach(batch => {
//   console.log(`Batch: ${batch.batchName}`)
//   batch.provenanceStages.forEach(stage => {
//     console.log(`  - ${stage.stageName}`)
//     console.log(`    Location: ${stage.geoLocation.address}`)
//     console.log(`    CO2: ${stage.co2Grams}g`)
//   })
// })

// ===== EXAMPLE 4: Find suppliers by batch =====
// import { getSuppliersByBatch } from '@/data'
//
// const suppliers = getSuppliersByBatch('BATCH-2024-001')
// suppliers.forEach(supplier => {
//   console.log(supplier.supplierName)
//   console.log(supplier.country)
//   if (supplier.certifications.organic) {
//     console.log('  ✓ Certified Organic')
//   }
// })

// ===== EXAMPLE 5: Search for products =====
// import { searchProducts } from '@/data'
//
// const results = searchProducts('organic cotton')
// results.forEach(product => {
//   console.log(product.title)
// })

// ===== EXAMPLE 6: Get carbon footprint by category =====
// import { getCarbonFootprintByCategory } from '@/data'
//
// const basicsCarbon = getCarbonFootprintByCategory('Basics')
// console.log(`Total CO2 for Basics category: ${basicsCarbon}g`)

// ===== EXAMPLE 7: Filter by certifications =====
// import { getProductsByCertification } from '@/data'
//
// const organicProducts = getProductsByCertification('organic')
// console.log(`${organicProducts.length} organic products`)
//
// const fairtrade = getProductsByCertification('fairtrade')
// console.log(`${fairtrade.length} fair trade products`)

// ===== EXAMPLE 8: Import all data at once =====
// import { products, suppliers, batches, allData } from '@/data'
//
// console.log(`Total products: ${products.length}`)
// console.log(`Total suppliers: ${suppliers.length}`)
// console.log(`Total batches: ${batches.length}`)

// ===== EXAMPLE 9: Type-safe product usage =====
// import type { Product } from '@/data'
// import { getProductBySku } from '@/data'
//
// const displayProduct = (sku: string) => {
//   const product = getProductBySku(sku) as Product | undefined
//   if (!product) return
//
//   // TypeScript knows product has these properties:
//   return {
//     name: product.title,
//     price: `$${(product.price / 100).toFixed(2)}`,
//     inStock: product.inStock,
//     certifications: Object.entries(product.certifications)
//       .filter(([_, value]) => value)
//       .map(([key]) => key)
//   }
// }

// ===== EXAMPLE 10: Build a product grid =====
// import { products } from '@/data'
//
// const ProductGrid = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {products.map(product => (
//         <div key={product.sku} className="border rounded-lg p-4">
//           <img src={product.image} alt={product.title} />
//           <h3>{product.title}</h3>
//           <p>${(product.price / 100).toFixed(2)}</p>
//           <p>{product.materials.join(', ')}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// ===== SAMPLE DATA OVERVIEW =====
//
// PRODUCTS:
// - ECO-ORG-TSHIRT-001: Organic Cotton T-Shirt | $99 | Batch: BATCH-2024-001
// - ECO-REC-JACKET-001: Recycled Jacket | $189 | Batch: BATCH-2024-002
// - ECO-LIN-SHIRT-002: Linen Shirt | $245 | Batch: BATCH-2024-003
// - ECO-MIX-PANTS-001: Blended Trousers | $169 | Batches: 001 + 002
// - ECO-NTL-DRESS-001: Natural-Dyed Dress | $299 | Batch: BATCH-2024-001
//
// SUPPLIERS:
// - SUPP-001: Organic Cotton Farmers (India)
// - SUPP-002: EcoTextile Processors (Portugal)
// - SUPP-003: Global Recycled Fibers (Netherlands)
// - SUPP-004: Premium Garment Manufacturing (Vietnam)
// - SUPP-005: Natural Dye Works (Japan)
//
// BATCHES:
// - BATCH-2024-001: Spring Organic Cotton (4 stages, 1160g CO2)
// - BATCH-2024-002: Recycled Polyester (4 stages, 715g CO2)
// - BATCH-2024-003: Luxury Linen (4 stages, 850g CO2)
//
// CATEGORIES:
// - Basics
// - Outerwear
// - Tops
// - Bottoms
// - Dresses
//
// VIEW SHOWCASE: Visit /sample-data in your browser to see interactive demo

export {}
