/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Offers & Deals View Component
 */

import React from "react";
import { Gift, Truck, Percent, Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import { useStore } from "../context/StoreContext";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "./ProductCard";

export const OffersView: React.FC = () => {
  const { storeConfig, setCurrentView, setSelectedCategoryFilter, t } = useStore();

  const discountedItems = PRODUCTS.filter((p) =>
    p.variants.some((v) => v.discountPercent >= 15)
  ).slice(0, 12);

  return (
    <div className="space-y-8 sm:space-y-10 pb-16">
      
      {/* Title */}
      <div className="text-center max-w-xl mx-auto">
        <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block mb-1">
          Special Promotions
        </span>
        <h1 className="text-3xl font-black text-stone-900 tracking-tight">
          Super Market Deals &amp; Free Gifts
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          Save on daily groceries with unlocked rewards for Annur &amp; Coimbatore shoppers
        </p>
      </div>

      {/* Featured Big Cards: Free Gift + Free Delivery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Free Gift Card */}
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-extrabold uppercase tracking-wider text-amber-100">
                Milestone Reward
              </span>
              <Gift className="w-6 h-6 text-amber-200" />
            </div>

            <h2 className="text-2xl font-black tracking-tight leading-snug">
              Spend ₹2000 &amp; Get a Free Gift
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 mt-2 leading-relaxed">
              When your cart reaches ₹2000, unlock one complementary product at ₹0:
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-medium">
              {storeConfig.freeGiftOptions.map((g) => (
                <div key={g.id} className="bg-white/15 p-2 rounded-xl backdrop-blur-xs flex items-center gap-1.5">
                  <span>🎁</span>
                  <span className="truncate">{g.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <button
              type="button"
              onClick={() => {
                setSelectedCategoryFilter(null);
                setCurrentView("groceries");
              }}
              className="w-full py-3 px-4 rounded-xl bg-white text-stone-900 font-bold text-xs hover:bg-amber-50 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Build Cart to ₹2000</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Free Delivery Card */}
        <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-extrabold uppercase tracking-wider text-emerald-200">
                Local Fast Delivery
              </span>
              <Truck className="w-6 h-6 text-emerald-300" />
            </div>

            <h2 className="text-2xl font-black tracking-tight leading-snug">
              Free Delivery on Orders &gt; ₹500
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 mt-2 leading-relaxed">
              Enjoy 100% free doorstep delivery across all 4 designated zones:
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-semibold">
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                <span>📍 Annur (30-45m)</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                <span>📍 Kumarankundru (45-60m)</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                <span>📍 Pogalur (45-60m)</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                <span>📍 Kovilpalayam (45-60m)</span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="button"
              onClick={() => {
                setSelectedCategoryFilter(null);
                setCurrentView("groceries");
              }}
              className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Shop Eligible Items</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Discounted Products Grid */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Percent className="w-5 h-5 text-orange-600" />
          <h2 className="text-xl font-bold text-stone-900">
            Top Value Discounts (15% to 20% OFF)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {discountedItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  );
};
