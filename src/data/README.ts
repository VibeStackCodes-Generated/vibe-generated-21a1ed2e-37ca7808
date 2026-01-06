/**
 * EcoThread Static Sample Data Documentation
 *
 * This module contains comprehensive sample data fixtures for the EcoThread e-commerce platform,
 * designed to support the minimalist luxury sustainable fashion experience with verifiable supply chain
 * provenance tracking.
 *
 * STRUCTURE OVERVIEW:
 * ==================
 *
 * 1. PRODUCTS (src/data/products.ts)
 *    - SKU-based product catalog with premium pricing
 *    - Each product includes:
 *      • Basic info: SKU, title, description, price (in cents)
 *      • Media: primary image, additional images, videos
 *      • Variants: sizes, colors, materials composition
 *      • Inventory: stock status
 *      • Provenance: references to batch IDs
 *      • Certifications: flags for organic, fairtrade, GOTS, GRI, BCI, LEED, Carbon Trust
 *      • Sustainability metrics: total CO2 emissions in grams
 *      • Timestamps: created and last updated
 *
 * 2. SUPPLIERS (src/data/suppliers.ts)
 *    - Global network of ethical and sustainable suppliers
 *    - Each supplier includes:
 *      • Profile: name, country, contact email, website
 *      • Location: geographic coordinates for supply chain mapping
 *      • Certifications: validation of sustainable practices
 *      • Description: specialization and capabilities
 *
 *    Current suppliers:
 *    - SUPP-001: Organic Cotton Farmers Cooperative (India) - Raw materials
 *    - SUPP-002: EcoTextile Processors (Portugal) - Processing & dyeing
 *    - SUPP-003: Global Recycled Fibers (Netherlands) - Recycled materials
 *    - SUPP-004: Premium Garment Manufacturing (Vietnam) - Assembly
 *    - SUPP-005: Natural Dye Works (Japan) - Artisanal dyeing
 *
 * 3. BATCHES (src/data/batches.ts)
 *    - Production batches with complete supply chain traceability
 *    - Each batch includes:
 *      • Batch metadata: ID, name, production date, quantity
 *      • Provenance stages: multi-step supply chain with:
 *        - Stage name and description
 *        - Supplier involved
 *        - Geographic location of operation
 *        - ISO 8601 timestamp
 *        - Certification flags applicable to this stage
 *        - CO2 emissions for this specific stage
 *        - Media URLs (images/videos of the stage)
 *      • Total CO2 calculation across all stages
 *      • Optional verification token for tamper-evident links
 *
 *    Current batches:
 *    - BATCH-2024-001: Spring 2024 Organic Cotton (India → Portugal → Japan → Vietnam)
 *    - BATCH-2024-002: Recycled Polyester Limited (Netherlands → Vietnam)
 *    - BATCH-2024-003: Luxury Linen Summer (Belgium → Portugal → Vietnam)
 *
 * SAMPLE PRODUCTS:
 * ================
 *
 * 1. ECO-ORG-TSHIRT-001 - Signature Organic Cotton T-Shirt ($99)
 *    - 100% organic cotton
 *    - Available in 4 colors and 6 sizes
 *    - Batch: BATCH-2024-001
 *    - Certifications: Organic, Fair Trade, GOTS, BCI
 *    - Carbon: 1160g CO2
 *
 * 2. ECO-REC-JACKET-001 - Urban Recycled Polyester Jacket ($189)
 *    - 100% recycled polyester
 *    - Available in 4 colors and 5 sizes
 *    - Batch: BATCH-2024-002
 *    - Certifications: GRI (Global Recycled Standard), LEED, Carbon Trust
 *    - Carbon: 715g CO2
 *
 * 3. ECO-LIN-SHIRT-002 - Luxury Linen Summer Shirt ($245)
 *    - 100% Belgian linen
 *    - Available in 4 colors and 5 sizes
 *    - Batch: BATCH-2024-003
 *    - Certifications: Organic, Fair Trade, LEED, Carbon Trust
 *    - Carbon: 850g CO2
 *
 * 4. ECO-MIX-PANTS-001 - Blended Sustainable Trousers ($169)
 *    - 70% organic cotton + 30% recycled polyester
 *    - Available in 4 colors and 7 sizes (waist measurements)
 *    - Batches: BATCH-2024-001, BATCH-2024-002
 *    - Certifications: Organic, Fair Trade, GOTS, GRI, BCI, Carbon Trust
 *    - Carbon: 1450g CO2
 *
 * 5. ECO-NTL-DRESS-001 - Artisanal Natural-Dyed Dress ($299)
 *    - 100% organic cotton, hand-dyed with natural plant-based dyes
 *    - Available in 4 colors and 5 sizes
 *    - Batch: BATCH-2024-001
 *    - Certifications: Organic, Fair Trade, GOTS, BCI, Carbon Trust
 *    - Carbon: 1160g CO2
 *
 * SUPPLY CHAIN MAPPING:
 * ====================
 *
 * Key geographic locations:
 * - India (Mumbai): Raw organic cotton sourcing
 * - Portugal (Porto): Textile processing and weaving
 * - Japan (Tokyo): Natural dyeing and artisanal finishing
 * - Vietnam (Hanoi): Garment assembly and quality control
 * - Netherlands (Amsterdam): Recycled fiber processing
 * - Belgium (Brussels): Linen flax farming
 *
 * Carbon tracking across stages:
 * - Raw material sourcing: 280-450g per batch
 * - Processing/dyeing: 150-320g per batch
 * - Assembly: 130-210g per batch
 * - Quality/packaging: 95-190g per batch
 *
 * USAGE EXAMPLES:
 * ===============
 *
 * // Import all data
 * import { products, suppliers, batches } from '@/data'
 *
 * // Get a specific product
 * import { getProductBySku } from '@/data'
 * const tshirt = getProductBySku('ECO-ORG-TSHIRT-001')
 *
 * // Get all products in a category
 * import { getProductsByCategory } from '@/data'
 * const topProducts = getProductsByCategory('Tops')
 *
 * // Get batches for a product (complete provenance)
 * import { getBatchesByProduct } from '@/data'
 * const productBatches = getBatchesByProduct('ECO-ORG-TSHIRT-001')
 *
 * // Get suppliers involved in production
 * import { getSuppliersByBatch } from '@/data'
 * const suppliers = getSuppliersByBatch('BATCH-2024-001')
 *
 * // Search products
 * import { searchProducts } from '@/data'
 * const results = searchProducts('organic cotton')
 *
 * // Get carbon footprint by category
 * import { getCarbonFootprintByCategory } from '@/data'
 * const carbonBasics = getCarbonFootprintByCategory('Basics')
 *
 * CERTIFICATION REFERENCE:
 * ========================
 *
 * - organic: Global certification for organic farming practices
 * - fairtrade: Fair trade certified production with ethical wages
 * - gots: Global Organic Textile Standard - ensures organic throughout supply chain
 * - gri: Global Recycled Standard - verification of recycled material content
 * - bci: Better Cotton Initiative - sustainable cotton farming
 * - leed: LEED Building certification for facilities
 * - carbontrust: Carbon Trust certification for verified emissions reduction
 *
 * DATA FEATURES FOR UI IMPLEMENTATION:
 * ====================================
 *
 * ✓ SKU Provenance & Storytelling
 *   - Per-SKU supply-chain summary with geographic data
 *   - Tappable interactive map showing origin → processing → finishing → shipping
 *   - Supplier profiles with certifications
 *   - Media galleries (images/videos) for each stage
 *   - CO2 per stage with total calculation
 *
 * ✓ Verifiable Data Model
 *   - SKU → batch → supplier nodes with timestamps
 *   - Geo-coordinates for all locations
 *   - Certification flags for compliance verification
 *   - Optional tamper-evident verification tokens
 *
 * ✓ Premium E-Commerce Fields
 *   - Detailed product variants (sizes, colors, materials)
 *   - Multiple media per product and per supply stage
 *   - Premium pricing structure
 *   - Inventory status
 *   - Category organization
 *
 * ✓ Environmental Impact Data
 *   - CO2 tracking per stage and product
 *   - Material composition transparency
 *   - Certification alignment with sustainability claims
 */

// This file serves as documentation and is not imported elsewhere
export {}
