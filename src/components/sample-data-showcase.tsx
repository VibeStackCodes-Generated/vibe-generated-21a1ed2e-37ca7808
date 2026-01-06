/**
 * Sample data showcase component
 * Demonstrates how to use the static product, supplier, and batch data
 * This component can be used to preview and verify the sample data is properly structured
 */

import {
  products,
  suppliers,
  batches,
  getProductBySku,
  getBatchesByProduct,
  getSuppliersByBatch,
} from '@/data'
import { ProductGrid } from './product-grid'

/**
 * SupplierCard component - displays supplier information
 */
function SupplierCard({ supplierId }: { supplierId: string }) {
  const supplier = suppliers.find((s) => s.supplierId === supplierId)
  if (!supplier) return null

  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h4 className="font-semibold text-gray-900">{supplier.supplierName}</h4>
      <p className="text-sm text-gray-600">{supplier.country}</p>
      <p className="text-xs text-gray-500 mt-2">{supplier.description}</p>
      <div className="flex gap-2 mt-3 flex-wrap">
        {supplier.certifications.organic && (
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
            Organic
          </span>
        )}
        {supplier.certifications.fairtrade && (
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            Fair Trade
          </span>
        )}
        {supplier.certifications.carbontrust && (
          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
            Carbon Trust
          </span>
        )}
      </div>
    </div>
  )
}

/**
 * ProvenanceTimeline component - shows the supply chain journey
 */
function ProvenanceTimeline({ batchId }: { batchId: string }) {
  const batch = batches.find((b) => b.batchId === batchId)
  if (!batch) return null

  const stages = batch.provenanceStages

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-gray-900">Supply Chain</h4>
        <p className="text-sm text-gray-600">Total CO₂: {batch.totalCo2Grams}g</p>
      </div>
      <div className="space-y-3">
        {stages.map((stage, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>
              {index < stages.length - 1 && (
                <div className="w-0.5 h-12 bg-gray-300 mt-2" />
              )}
            </div>
            <div className="flex-1 pb-4">
              <h5 className="font-semibold text-gray-900">{stage.stageName}</h5>
              <p className="text-sm text-gray-600">
                {stage.geoLocation.address}, {stage.geoLocation.country}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(stage.timestamp).toLocaleDateString()}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                CO₂: {stage.co2Grams}g
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * ProductProvenanceDetail component - shows complete product-to-batch-to-supplier journey
 */
function ProductProvenanceDetail({ sku }: { sku: string }) {
  const product = getProductBySku(sku)
  if (!product) return null

  const batchList = getBatchesByProduct(sku)

  return (
    <div className="space-y-6">
      {product && <ProductGrid products={[product]} />}

      {batchList.map((batch) => (
        <div key={batch.batchId} className="rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {batch.batchName}
          </h3>
          <ProvenanceTimeline batchId={batch.batchId} />

          <div className="mt-6 border-t pt-4">
            <h4 className="font-semibold text-gray-900 mb-3">
              Suppliers Involved
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {getSuppliersByBatch(batch.batchId).map((supplier) => (
                <SupplierCard key={supplier.supplierId} supplierId={supplier.supplierId} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/**
 * SampleDataShowcase component - displays all available products and their provenance
 */
export function SampleDataShowcase() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Product Grid */}
        <ProductGrid
          products={products}
          title="EcoThread Collection"
          description="Sustainable fashion with verifiable supply chain provenance"
          columns={{ mobile: 1, tablet: 2, desktop: 3 }}
        />

        {/* Detailed Provenance Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-10">
            Supply Chain Details
          </h2>
          <div className="space-y-12 sm:space-y-16">
            {products.map((product) => (
              <ProductProvenanceDetail key={product.sku} sku={product.sku} />
            ))}
          </div>
        </div>

        {/* Suppliers Section */}
        <div className="mt-16 sm:mt-20 lg:mt-24 border-t pt-12 sm:pt-16 lg:pt-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-10">
            Supplier Network
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suppliers.map((supplier) => (
              <SupplierCard key={supplier.supplierId} supplierId={supplier.supplierId} />
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 sm:mt-20 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 p-8 sm:p-10 lg:p-12">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Ecosystem Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                Total Products
              </p>
              <p className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                {products.length}
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                Suppliers
              </p>
              <p className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                {suppliers.length}
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                Batches
              </p>
              <p className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                {batches.length}
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                Total CO₂
              </p>
              <p className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                {products.reduce((sum, p) => sum + p.totalCo2Grams, 0)}g
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
