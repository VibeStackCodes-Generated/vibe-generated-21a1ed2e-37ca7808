import React, { useMemo } from 'react'
import type { Product } from '@/data/types'
import { ProductCard } from './product-card'

interface ProductGridProps {
  products: Product[]
  title?: string
  description?: string
  columns?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
}

/**
 * ProductGrid Component
 * Responsive grid layout for displaying multiple products
 * Adapts to mobile (1-2 cols), tablet (2-3 cols), and desktop (3-4 cols)
 */
export function ProductGrid({
  products,
  title,
  description,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
}: ProductGridProps) {
  // Determine grid columns based on breakpoints
  const getGridClasses = useMemo(() => {
    const colsMap = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
    }

    const mobileClass = colsMap[columns.mobile as keyof typeof colsMap] || 'grid-cols-1'
    const tabletClass = `md:${colsMap[columns.tablet as keyof typeof colsMap] || 'grid-cols-2'}`
    const desktopClass = `lg:${colsMap[columns.desktop as keyof typeof colsMap] || 'grid-cols-3'}`

    return `${mobileClass} ${tabletClass} ${desktopClass}`
  }, [columns])

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 p-12 dark:border-gray-700 dark:bg-gray-900">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20 7l-8-4m0 0L4 7m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0L12 3m0 0L4 7"
            />
          </svg>
          <p className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
            No products available
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Please check back soon for new items.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Header Section */}
      {(title || description) && (
        <div className="mb-8 sm:mb-10">
          {title && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Products Grid */}
      <div className={`grid ${getGridClasses} gap-4 sm:gap-6 lg:gap-8`}>
        {products.map(product => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </div>

      {/* Footer Stats */}
      <div className="mt-12 sm:mt-16">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 sm:p-8 dark:border-gray-800 dark:bg-gray-900">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Products</p>
              <p className="mt-1 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                {products.length}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">In Stock</p>
              <p className="mt-1 text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">
                {products.filter(p => p.inStock).length}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Price Range</p>
              <p className="mt-1 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                ${Math.min(...products.map(p => p.price / 100)).toFixed(0)} - $
                {Math.max(...products.map(p => p.price / 100)).toFixed(0)}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total CO₂</p>
              <p className="mt-1 text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                {products.reduce((sum, p) => sum + p.totalCo2Grams, 0)}g
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
