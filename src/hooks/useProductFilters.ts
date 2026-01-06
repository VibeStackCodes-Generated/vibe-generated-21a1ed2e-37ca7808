import { useMemo, useState } from 'react'
import type { Product } from '@/data/types'
import { getBatchesByProduct } from '@/data'

export interface FilterState {
  searchQuery: string
  certifications: {
    organic: boolean
    fairtrade: boolean
    gots: boolean
    gri: boolean
    bci: boolean
    carbontrust: boolean
  }
  countries: Set<string>
  sortBy: 'newest' | 'price-low' | 'price-high'
}

/**
 * Custom hook for managing product filtering, sorting, and search
 * Provides utilities for extracting available filter options and filtering products
 */
export function useProductFilters(products: Product[]) {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    certifications: {
      organic: false,
      fairtrade: false,
      gots: false,
      gri: false,
      bci: false,
      carbontrust: false,
    },
    countries: new Set(),
    sortBy: 'newest',
  })

  /**
   * Extract all unique countries from product batches
   */
  const allCountries = useMemo(() => {
    const countries = new Set<string>()
    products.forEach(product => {
      const batches = getBatchesByProduct(product.sku)
      batches.forEach(batch => {
        batch.provenanceStages.forEach(stage => {
          countries.add(stage.geoLocation.country)
        })
      })
    })
    return Array.from(countries).sort()
  }, [products])

  /**
   * Filter products based on all active filters
   */
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products]

    // Text search filter
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase()
      result = result.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.materials.some(m => m.toLowerCase().includes(query))
      )
    }

    // Certification filters
    const activeCertifications = Object.entries(filters.certifications)
      .filter(([_, isActive]) => isActive)
      .map(([cert]) => cert as keyof typeof filters.certifications)

    if (activeCertifications.length > 0) {
      result = result.filter(product =>
        activeCertifications.every(cert => product.certifications[cert])
      )
    }

    // Country filter - filter by origin countries in batches
    if (filters.countries.size > 0) {
      result = result.filter(product => {
        const batches = getBatchesByProduct(product.sku)
        const productCountries = new Set<string>()
        batches.forEach(batch => {
          batch.provenanceStages.forEach(stage => {
            productCountries.add(stage.geoLocation.country)
          })
        })
        // Include product if any of its origin countries match selected filters
        return Array.from(filters.countries).some(country => productCountries.has(country))
      })
    }

    // Sorting
    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
      default:
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        break
    }

    return result
  }, [products, filters])

  /**
   * Handle search input change
   */
  const handleSearchChange = (searchQuery: string) => {
    setFilters(prev => ({
      ...prev,
      searchQuery,
    }))
  }

  /**
   * Handle certification checkbox change
   */
  const handleCertificationChange = (cert: keyof typeof filters.certifications) => {
    setFilters(prev => ({
      ...prev,
      certifications: {
        ...prev.certifications,
        [cert]: !prev.certifications[cert],
      },
    }))
  }

  /**
   * Handle country checkbox change
   */
  const handleCountryChange = (country: string) => {
    setFilters(prev => {
      const newCountries = new Set(prev.countries)
      if (newCountries.has(country)) {
        newCountries.delete(country)
      } else {
        newCountries.add(country)
      }
      return {
        ...prev,
        countries: newCountries,
      }
    })
  }

  /**
   * Handle sort change
   */
  const handleSortChange = (sortBy: FilterState['sortBy']) => {
    setFilters(prev => ({
      ...prev,
      sortBy,
    }))
  }

  /**
   * Reset all filters
   */
  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      certifications: {
        organic: false,
        fairtrade: false,
        gots: false,
        gri: false,
        bci: false,
        carbontrust: false,
      },
      countries: new Set(),
      sortBy: 'newest',
    })
  }

  /**
   * Count active filters
   */
  const activeFilterCount = useMemo(() => {
    let count = 0
    if (filters.searchQuery.trim()) count++
    if (Object.values(filters.certifications).some(v => v)) count++
    if (filters.countries.size > 0) count++
    if (filters.sortBy !== 'newest') count++
    return count
  }, [filters])

  return {
    filters,
    filteredAndSortedProducts,
    allCountries,
    activeFilterCount,
    handleSearchChange,
    handleCertificationChange,
    handleCountryChange,
    handleSortChange,
    handleResetFilters,
  }
}
