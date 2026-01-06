import React, { useState } from 'react'
import type { Product } from '@/data/types'

interface ProductCardProps {
  product: Product
}

/**
 * ProductCard Component
 * Displays a single product with image, title, price, certifications, and favorite toggle
 * Optimized for responsive grid layouts
 */
export function ProductCard({ product }: ProductCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  /**
   * Get certification badges to display
   */
  const getActiveCertifications = () => {
    const certs: Array<{ key: string; label: string; color: string }> = []

    if (product.certifications.organic) {
      certs.push({ key: 'organic', label: 'Organic', color: 'bg-green-100 text-green-800' })
    }
    if (product.certifications.fairtrade) {
      certs.push({ key: 'fairtrade', label: 'Fair Trade', color: 'bg-blue-100 text-blue-800' })
    }
    if (product.certifications.gri) {
      certs.push({ key: 'gri', label: 'Recycled', color: 'bg-purple-100 text-purple-800' })
    }
    if (product.certifications.gots) {
      certs.push({ key: 'gots', label: 'GOTS', color: 'bg-emerald-100 text-emerald-800' })
    }
    if (product.certifications.bci) {
      certs.push({ key: 'bci', label: 'BCI', color: 'bg-amber-100 text-amber-800' })
    }
    if (product.certifications.carbontrust) {
      certs.push({
        key: 'carbontrust',
        label: 'Carbon Trust',
        color: 'bg-orange-100 text-orange-800',
      })
    }

    return certs
  }

  const activeCerts = getActiveCertifications()
  const formattedPrice = (product.price / 100).toFixed(2)
  const primaryMaterial = product.materials[0] || 'Mixed Materials'

  return (
    <div className="group relative flex flex-col h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-t-xl bg-gray-100 dark:bg-gray-800">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Stock Badge */}
        <div className="absolute top-3 left-3">
          {product.inStock ? (
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
              In Stock
            </span>
          ) : (
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-200 text-gray-700 rounded-full">
              Out of Stock
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-white dark:bg-gray-900/80 dark:hover:bg-gray-900"
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg
            className={`h-5 w-5 transition-colors duration-200 ${
              isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-400'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* CO2 Badge */}
        <div className="absolute bottom-3 right-3">
          <div className="flex items-center gap-1 px-2 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full">
            <span className="text-xs font-medium text-white">CO₂: {product.totalCo2Grams}g</span>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Category */}
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide dark:text-gray-400">
          {product.category}
        </p>

        {/* Title */}
        <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-900 line-clamp-2 dark:text-white">
          {product.title}
        </h3>

        {/* Price */}
        <p className="mt-2 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
          ${formattedPrice}
        </p>

        {/* Primary Material / Provenance Summary */}
        <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          {primaryMaterial}
        </p>

        {/* Certification Badges */}
        <div className="mt-3 flex flex-wrap gap-2">
          {activeCerts.slice(0, 3).map(cert => (
            <span
              key={cert.key}
              className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${cert.color}`}
            >
              {cert.label}
            </span>
          ))}

          {activeCerts.length > 3 && (
            <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              +{activeCerts.length - 3} more
            </span>
          )}
        </div>

        {/* SKU for reference */}
        <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">{product.sku}</p>
      </div>

      {/* Footer - Add to Cart Button */}
      <div className="border-t border-gray-200 p-4 sm:p-5 dark:border-gray-800">
        <button
          disabled={!product.inStock}
          className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
            product.inStock
              ? 'bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
              : 'bg-gray-100 text-gray-500 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600'
          }`}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  )
}
