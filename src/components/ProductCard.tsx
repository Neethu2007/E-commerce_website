/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Product Card Component:
 * - Brand badge, Full pack-style name, Tamil name below
 * - Interactive weight/size selector (- automatically switches price, MRP, and discount)
 * - Quantity stepper (- 1 +)
 * - In Stock / Low stock status
 * - Instant Add to Cart button with feedback
 */

import React, { useState } from "react";
import { Plus, Minus, Check, ShoppingCart, Tag } from "lucide-react";
import { Product, ProductVariant } from "../data/products";
import { useStore } from "../context/StoreContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, t, cart } = useStore();

  // Selected variant state
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0] || {
      id: `${product.id}-v1`,
      weightLabel: "1 unit",
      mrp: 100,
      price: 90,
      discountPercent: 10,
      packName: `${product.brand} ${product.baseName}`,
      inStock: true
    }
  );

  // Stepper quantity for card
  const [quantity, setQuantity] = useState<number>(1);
  const [showAddedNotice, setShowAddedNotice] = useState<boolean>(false);

  // Check if item is already in cart
  const cartItem = cart.find(
    (i) => i.productId === product.id && i.variantId === selectedVariant.id
  );

  const handleVariantChange = (variant: ProductVariant) => {
    setSelectedVariant(variant);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setShowAddedNotice(true);
    setTimeout(() => {
      setShowAddedNotice(false);
    }, 1500);
  };

  const savings = Math.max(0, selectedVariant.mrp - selectedVariant.price);

  return (
    <div className="group bg-white rounded-2xl border border-stone-200 hover:border-emerald-500/50 hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden relative">
      
      {/* Top badges: Discount & Dairy freshness */}
      <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start">
        {selectedVariant.discountPercent > 0 && (
          <span className="inline-flex items-center gap-0.5 bg-orange-600 text-white font-extrabold text-[10px] sm:text-xs px-2 py-0.5 rounded-md shadow-xs">
            <Tag className="w-3 h-3" />
            <span>{selectedVariant.discountPercent}% {t.off}</span>
          </span>
        )}
        {product.isDairyFresh && (
          <span className="bg-sky-600 text-white font-bold text-[10px] px-1.5 py-0.5 rounded-md">
            Dairy Fresh
          </span>
        )}
      </div>

      {/* Product Image Area */}
      <div className="w-full h-44 sm:h-48 bg-stone-50 overflow-hidden relative flex items-center justify-center p-3">
        <img
          src={product.image}
          alt={selectedVariant.packName}
          loading="lazy"
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback placeholder image if network issue
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80";
          }}
        />

        {/* Stock status indicator */}
        <div className="absolute bottom-2 right-2">
          {selectedVariant.inStock ? (
            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50/90 border border-emerald-200 px-1.5 py-0.5 rounded-sm">
              ✓ {t.inStock}
            </span>
          ) : (
            <span className="text-[10px] font-semibold text-red-600 bg-red-50/90 border border-red-200 px-1.5 py-0.5 rounded-sm">
              {t.outOfStock}
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Category hint */}
          <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1">
            <span className="font-bold text-emerald-800 tracking-wide uppercase text-[10px]">
              {product.brand}
            </span>
            <span className="text-[10px] text-stone-400">
              {product.categoryName}
            </span>
          </div>

          {/* Full Pack-style Name */}
          <h3 className="font-bold text-sm text-stone-900 leading-snug line-clamp-2 min-h-[2.5rem]">
            {selectedVariant.packName}
          </h3>

          {/* Tamil Name shown below */}
          <p className="text-xs text-stone-600 font-medium mt-1 mb-3 line-clamp-1">
            {product.tamilName}
          </p>

          {/* Weight / Size Variants Selector */}
          <div className="mb-3">
            <label className="block text-[10px] uppercase font-bold text-stone-400 mb-1 tracking-wider">
              {t.packSize}:
            </label>
            <div className="flex flex-wrap gap-1.5">
              {product.variants.map((variant) => {
                const isActive = selectedVariant.id === variant.id;
                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => handleVariantChange(variant)}
                    className={`px-2 py-1 text-xs rounded-lg font-semibold transition-all ${
                      isActive
                        ? "bg-emerald-700 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200"
                    }`}
                  >
                    {variant.weightLabel}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Price, Savings and Cart Action */}
        <div className="pt-2 border-t border-stone-100">
          <div className="flex items-baseline justify-between mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-extrabold text-stone-900 tracking-tight">
                ₹{selectedVariant.price}
              </span>
              {selectedVariant.mrp > selectedVariant.price && (
                <span className="text-xs text-stone-400 line-through">
                  ₹{selectedVariant.mrp}
                </span>
              )}
            </div>

            {savings > 0 && (
              <span className="text-[11px] font-bold text-emerald-700">
                {t.save} ₹{savings}
              </span>
            )}
          </div>

          {/* Stepper + Add to Cart Button */}
          <div className="flex items-center gap-2">
            {/* Quantity Stepper */}
            <div className="flex items-center border border-stone-200 rounded-xl bg-stone-50 overflow-hidden shrink-0">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-8 flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-7 text-center font-bold text-xs text-stone-900">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 h-8 flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>

            {/* Add to Cart button */}
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!selectedVariant.inStock}
              className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs ${
                !selectedVariant.inStock
                  ? "bg-stone-200 text-stone-400 cursor-not-allowed"
                  : showAddedNotice
                  ? "bg-emerald-800 text-white"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow"
              }`}
            >
              {showAddedNotice ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{t.addedToCart}</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>{cartItem ? `Add +${quantity}` : t.addToCart}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
