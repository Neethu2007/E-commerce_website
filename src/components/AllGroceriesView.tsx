/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * All Groceries View Component:
 * - Brand checkboxes in sidebar (collapsible drawer on mobile)
 * - Category filter tabs
 * - Price range filter
 * - Discount filter
 * - In-Stock only filter
 * - Sorting by price low-high, high-low, biggest discount, and name A-Z
 * - Dynamic product count and clear filter options
 */

import React, { useState, useMemo } from "react";
import { 
  Filter, 
  X, 
  ArrowUpDown, 
  SlidersHorizontal, 
  RotateCcw, 
  Check, 
  Search,
  CheckSquare,
  Square
} from "lucide-react";
import { useStore } from "../context/StoreContext";
import { PRODUCTS, CATEGORIES, Product } from "../data/products";
import { ProductCard } from "./ProductCard";

export const AllGroceriesView: React.FC = () => {
  const { 
    selectedCategoryFilter, 
    setSelectedCategoryFilter, 
    searchQuery, 
    setSearchQuery,
    t 
  } = useStore();

  // Filter States
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [minDiscount, setMinDiscount] = useState<number>(0);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<"price_asc" | "price_desc" | "discount" | "name">("price_asc");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Extract all unique brands for sidebar filter
  const allAvailableBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    PRODUCTS.forEach((p) => brandsSet.add(p.brand));
    return Array.from(brandsSet).sort();
  }, []);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleResetFilters = () => {
    setSelectedBrands([]);
    setMaxPrice(2000);
    setMinDiscount(0);
    setInStockOnly(false);
    setSelectedCategoryFilter(null);
    setSearchQuery("");
    setSortBy("price_asc");
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Category
      if (selectedCategoryFilter && product.categoryId !== selectedCategoryFilter) {
        return false;
      }

      // 2. Search query (matches baseName, tamilName, brand, or packName)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = product.baseName.toLowerCase().includes(query);
        const matchesTamil = product.tamilName.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesVariant = product.variants.some((v) =>
          v.packName.toLowerCase().includes(query)
        );
        if (!matchesName && !matchesTamil && !matchesBrand && !matchesVariant) {
          return false;
        }
      }

      // 3. Brand
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      // 4. Price range (at least one variant must be <= maxPrice)
      const minProductPrice = Math.min(...product.variants.map((v) => v.price));
      if (minProductPrice > maxPrice) {
        return false;
      }

      // 5. Discount filter
      const maxProductDiscount = Math.max(...product.variants.map((v) => v.discountPercent));
      if (maxProductDiscount < minDiscount) {
        return false;
      }

      // 6. In-Stock only
      if (inStockOnly) {
        const hasStock = product.variants.some((v) => v.inStock);
        if (!hasStock) return false;
      }

      return true;
    }).sort((a, b) => {
      const aMinPrice = Math.min(...a.variants.map((v) => v.price));
      const bMinPrice = Math.min(...b.variants.map((v) => v.price));
      const aMaxDiscount = Math.max(...a.variants.map((v) => v.discountPercent));
      const bMaxDiscount = Math.max(...b.variants.map((v) => v.discountPercent));

      if (sortBy === "price_asc") {
        return aMinPrice - bMinPrice;
      }
      if (sortBy === "price_desc") {
        return bMinPrice - aMinPrice;
      }
      if (sortBy === "discount") {
        return bMaxDiscount - aMaxDiscount;
      }
      if (sortBy === "name") {
        return a.baseName.localeCompare(b.baseName);
      }
      return 0;
    });
  }, [
    selectedCategoryFilter,
    searchQuery,
    selectedBrands,
    maxPrice,
    minDiscount,
    inStockOnly,
    sortBy
  ]);

  // Sidebar Filter Form Component
  const FilterContent = (
    <div className="space-y-6 text-stone-800">
      
      {/* Category Filter */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5">
          {t.allCategories}
        </label>
        <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
          <button
            type="button"
            onClick={() => setSelectedCategoryFilter(null)}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
              selectedCategoryFilter === null
                ? "bg-emerald-50 text-emerald-800 font-bold"
                : "text-stone-700 hover:bg-stone-100"
            }`}
          >
            <span>All Departments</span>
            <span className="text-[10px] text-stone-400 font-normal">({PRODUCTS.length})</span>
          </button>

          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter((p) => p.categoryId === cat.id).length;
            const isSelected = selectedCategoryFilter === cat.id;
            const categoryLabel = (t as any)[cat.nameKey] || cat.defaultName;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategoryFilter(cat.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                  isSelected
                    ? "bg-emerald-50 text-emerald-800 font-bold"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                <span className="truncate pr-2">{cat.icon} {categoryLabel}</span>
                <span className="text-[10px] text-stone-400 font-normal shrink-0">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Brand Checkboxes */}
      <div className="pt-4 border-t border-stone-200">
        <div className="flex items-center justify-between mb-2.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-500">
            {t.allBrands}
          </label>
          {selectedBrands.length > 0 && (
            <button
              type="button"
              onClick={() => setSelectedBrands([])}
              className="text-[10px] text-emerald-700 hover:underline font-semibold"
            >
              Clear ({selectedBrands.length})
            </button>
          )}
        </div>

        <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
          {allAvailableBrands.map((brand) => {
            const isChecked = selectedBrands.includes(brand);
            const count = PRODUCTS.filter((p) => p.brand === brand).length;

            return (
              <label
                key={brand}
                className="flex items-center justify-between px-2 py-1 rounded-md text-xs hover:bg-stone-100 cursor-pointer text-stone-700"
              >
                <div className="flex items-center gap-2 truncate">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleBrandToggle(brand)}
                    className="accent-emerald-600 rounded-sm"
                  />
                  <span className={`truncate ${isChecked ? "font-bold text-emerald-900" : ""}`}>
                    {brand}
                  </span>
                </div>
                <span className="text-[10px] text-stone-400 shrink-0">({count})</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="pt-4 border-t border-stone-200">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-500">
            {t.priceRange}
          </label>
          <span className="text-xs font-bold text-stone-900 font-mono">
            Up to ₹{maxPrice}
          </span>
        </div>
        <input
          type="range"
          min={20}
          max={2000}
          step={20}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-emerald-600 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-stone-400 mt-1">
          <span>₹20</span>
          <span>₹1000</span>
          <span>₹2000</span>
        </div>
      </div>

      {/* Minimum Discount Filter */}
      <div className="pt-4 border-t border-stone-200">
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
          {t.minDiscount}
        </label>
        <div className="grid grid-cols-4 gap-1.5 text-xs">
          {[0, 10, 15, 20].map((disc) => (
            <button
              key={disc}
              type="button"
              onClick={() => setMinDiscount(disc)}
              className={`py-1.5 px-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                minDiscount === disc
                  ? "bg-emerald-600 text-white border-emerald-600 font-bold"
                  : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
              }`}
            >
              {disc === 0 ? "All" : `${disc}%+`}
            </button>
          ))}
        </div>
      </div>

      {/* Availability Toggle */}
      <div className="pt-4 border-t border-stone-200">
        <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-stone-700">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="accent-emerald-600 rounded-sm"
          />
          <span>{t.inStockOnly}</span>
        </label>
      </div>

      {/* Reset All */}
      <div className="pt-4 border-t border-stone-200">
        <button
          type="button"
          onClick={handleResetFilters}
          className="w-full py-2 px-3 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.resetFilters}</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="pb-16">
      
      {/* Top Header Bar with active count & Mobile Filter Toggle */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
        <div>
          <h1 className="text-2xl font-black text-stone-900 tracking-tight">
            {selectedCategoryFilter
              ? (CATEGORIES.find((c) => c.id === selectedCategoryFilter)?.defaultName || "Groceries")
              : "All Grocery Departments"}
          </h1>
          <p className="text-xs text-stone-500 mt-0.5">
            {t.showingProducts}: <span className="font-bold text-stone-800">{filteredProducts.length}</span> items
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Action Controls: Sort + Mobile Filter button */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Mobile Filter Trigger */}
          <button
            type="button"
            onClick={() => setIsMobileFiltersOpen(true)}
            className="lg:hidden px-3 py-2 rounded-xl border border-stone-200 bg-white text-xs font-bold text-stone-700 flex items-center gap-1.5 shadow-2xs hover:bg-stone-50"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-stone-500" />
            <span>{t.filters}</span>
            {(selectedBrands.length > 0 || minDiscount > 0 || inStockOnly) && (
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
            )}
          </button>

          {/* Sort Selector */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-stone-400 hidden sm:inline">{t.sortBy}:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 rounded-xl border border-stone-200 bg-white text-xs font-semibold text-stone-800 focus:border-emerald-600 focus:outline-none shadow-2xs"
            >
              <option value="price_asc">{t.sortPriceAsc}</option>
              <option value="price_desc">{t.sortPriceDesc}</option>
              <option value="discount">{t.sortDiscount}</option>
              <option value="name">{t.sortName}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content Layout: Sidebar + Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Desktop Sticky Sidebar */}
        <aside className="hidden lg:block lg:col-span-3 bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs sticky top-24">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
            <div className="flex items-center gap-1.5 text-stone-900 font-bold text-sm">
              <Filter className="w-4 h-4 text-emerald-600" />
              <span>{t.filters}</span>
            </div>
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-[11px] text-stone-400 hover:text-stone-700 font-medium"
            >
              Reset
            </button>
          </div>
          {FilterContent}
        </aside>

        {/* Product Grid Area */}
        <main className="lg:col-span-9">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center text-stone-500">
              <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-stone-900 mb-1">
                {t.noProductsFound}
              </h3>
              <p className="text-xs text-stone-500 max-w-sm mx-auto mb-4">
                Try widening your price range, choosing another brand, or resetting the filters.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
              >
                {t.resetFilters}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filters Slide-over Modal */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs"
            onClick={() => setIsMobileFiltersOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xs bg-white shadow-2xl flex flex-col">
              <div className="p-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
                <div className="flex items-center gap-2 font-bold text-sm text-stone-900">
                  <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
                  <span>Filter Products</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="p-1 rounded-lg text-stone-400 hover:text-stone-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 overflow-y-auto flex-1">
                {FilterContent}
              </div>

              <div className="p-4 border-t border-stone-200 bg-stone-50">
                <button
                  type="button"
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                >
                  Apply &amp; View {filteredProducts.length} Items
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
