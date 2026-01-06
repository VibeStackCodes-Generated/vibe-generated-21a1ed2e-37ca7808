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

/**
 * ProductCard component - displays a single product with summary
 */
function ProductCard({ sku }: { sku: string }) {
  const product = getProductBySku(sku)
  if (!product) return null

  return (
    <div className="rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex gap-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{product.sku}</p>
          <p className="text-xl font-bold text-gray-900 mt-2">
            ${(product.price / 100).toFixed(2)}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Materials: {product.materials.join(', ')}
          </p>
          <div className="flex gap-2 mt-3">
            {product.certifications.organic && (
              <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                Organic
              </span>
            )}
            {product.certifications.fairtrade && (
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                Fair Trade
              </span>
            )}
            {product.certifications.gri && (
              <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                Recycled
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            CO₂: {product.totalCo2Grams}g
          </p>
        </div>
      </div>
    </div>
  )
}

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
      <ProductCard sku={sku} />

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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            EcoThread Sample Data
          </h1>
          <p className="text-lg text-gray-600">
            Complete product catalog with verifiable supply chain provenance
          </p>
        </div>

        <div className="space-y-12">
          {products.map((product) => (
            <ProductProvenanceDetail key={product.sku} sku={product.sku} />
          ))}
        </div>

        <div className="mt-16 border-t pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Supply Chain Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suppliers.map((supplier) => (
              <SupplierCard key={supplier.supplierId} supplierId={supplier.supplierId} />
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-blue-50 border border-blue-200 p-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Data Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-blue-600">Total Products</p>
              <p className="text-2xl font-bold text-blue-900">{products.length}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Total Suppliers</p>
              <p className="text-2xl font-bold text-blue-900">
                {suppliers.length}
              </p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Total Batches</p>
              <p className="text-2xl font-bold text-blue-900">{batches.length}</p>
            </div>
            <div>
              <p className="text-sm text-blue-600">Total CO₂</p>
              <p className="text-2xl font-bold text-blue-900">
                {products.reduce((sum, p) => sum + p.totalCo2Grams, 0)}g
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
