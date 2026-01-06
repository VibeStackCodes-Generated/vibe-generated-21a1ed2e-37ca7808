import React from 'react'
import type { Product } from '@/data/types'
import { ProductGrid } from './product-grid'
import { useProductFilters } from '@/hooks'

interface HomeProps {
  products: Product[]
}

/**
 * Home component with search, filtering, and sorting
 * Displays products with client-side controls for filtering and sorting
 */
export function Home({ products }: HomeProps) {
  const {
    filters,
    filteredAndSortedProducts,
    allCountries,
    activeFilterCount,
    handleSearchChange,
    handleCertificationChange,
    handleCountryChange,
    handleSortChange,
    handleResetFilters,
  } = useProductFilters(products)

  const certificationLabels = {
    organic: 'Organic',
    fairtrade: 'Fair Trade',
    gots: 'GOTS',
    gri: 'Recycled',
    bci: 'BCI',
    carbontrust: 'Carbon Trust',
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            EcoThread Collection
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Sustainable fashion with verifiable supply chain provenance
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products by name, material, or category..."
              value={filters.searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full px-4 py-3 pl-12 text-base rounded-lg border border-gray-300 bg-white placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-white dark:focus:ring-white"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Filter Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Filters
                </h2>
                {activeFilterCount > 0 && (
                  <button
                    onClick={handleResetFilters}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Reset ({activeFilterCount})
                  </button>
                )}
              </div>

              {/* Sort Section */}
              <div className="border-t border-gray-200 pt-4 dark:border-gray-800">
                <label className="block text-sm font-medium text-gray-900 mb-3 dark:text-white">
                  Sort By
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleSortChange(e.target.value as 'newest' | 'price-low' | 'price-high')}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-white dark:focus:ring-white"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Certifications Filter */}
              <div className="border-t border-gray-200 pt-4 dark:border-gray-800">
                <label className="block text-sm font-medium text-gray-900 mb-3 dark:text-white">
                  Certifications
                </label>
                <div className="space-y-3">
                  {Object.entries(certificationLabels).map(([key, label]) => (
                    <label key={key} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.certifications[key as keyof typeof filters.certifications]}
                        onChange={() => handleCertificationChange(key as keyof typeof filters.certifications)}
                        className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:ring-white"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Countries Filter */}
              <div className="border-t border-gray-200 pt-4 dark:border-gray-800">
                <label className="block text-sm font-medium text-gray-900 mb-3 dark:text-white">
                  Origin Country
                </label>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {allCountries.map(country => (
                    <label key={country} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.countries.has(country)}
                        onChange={() => handleCountryChange(country)}
                        className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:ring-white"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{country}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Products */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredAndSortedProducts.length}</span> of{' '}
                <span className="font-semibold text-gray-900 dark:text-white">{products.length}</span> products
              </p>
            </div>

            {/* Products Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <ProductGrid
                products={filteredAndSortedProducts}
                columns={{ mobile: 1, tablet: 2, desktop: 2 }}
              />
            ) : (
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
                    No products match your filters
                  </p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Try adjusting your search or filter criteria
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="mt-4 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
