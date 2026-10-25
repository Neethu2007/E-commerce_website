/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Home View Component:
 * - Promotional banners with Coimbatore regional context & free delivery
 * - "Shop by Category" interactive tiles
 * - "Today's Deals" highlighting top discount grocery items
 * - "Fresh Dairy & Milk" dedicated section (Aavin, Heritage, Milky Mist, Amul)
 * - "Popular Regional Brands" showcase
 * - Free gift unlocking milestone callout
 */

import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  Truck, 
  Gift, 
  ShieldCheck, 
  Clock, 
  Milk, 
  Percent, 
  ChevronRight,
  MapPin
} from "lucide-react";
import { useStore } from "../context/StoreContext";
import { CATEGORIES, PRODUCTS, POPULAR_BRANDS } from "../data/products";
import { ProductCard } from "./ProductCard";

export const HomeView: React.FC = () => {
  const { 
    setCurrentView, 
    setSelectedCategoryFilter, 
    storeConfig, 
    currentAreaConfig,
    setIsLocationModalOpen,
    t 
  } = useStore();

  // Top deals: items with highest discount percentages
  const topDeals = PRODUCTS.filter((p) =>
    p.variants.some((v) => v.discountPercent >= 16)
  ).slice(0, 8);

  // Fresh dairy items
  const dairyProducts = PRODUCTS.filter(
    (p) => p.categoryId === "dairy_products" || p.isDairyFresh
  ).slice(0, 8);

  // Popular staples
  const popularStaples = PRODUCTS.filter((p) => p.isPopular).slice(0, 8);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryFilter(categoryId);
    setCurrentView("groceries");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8 sm:space-y-12 pb-12">
      
      {/* 1. Hero Promotional Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent opacity-70" />
        
        <div className="max-w-7xl mx-auto px-6 py-10 sm:py-14 sm:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Annur · Kumarankundru · Pogalur · Kovilpalayam</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
              Fresh Daily Groceries, <br className="hidden sm:inline" />
              <span className="text-amber-400">Delivered in 30–60 Mins.</span>
            </h1>

            <p className="text-sm sm:text-base text-emerald-100 max-w-xl font-normal leading-relaxed">
              Serving Coimbatore homes with authentic regional staples: fresh Aavin milk, Sri Lalitha Ponni rice, Sakthi spices, cold-pressed oils, and daily essentials.
            </p>

            {/* Delivery Locality Pill */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategoryFilter(null);
                  setCurrentView("groceries");
                }}
                className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-sm shadow-lg hover:shadow-orange-600/30 transition-all flex items-center gap-2 group"
              >
                <span>{t.shopNow}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => setIsLocationModalOpen(true)}
                className="px-4 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-semibold text-xs sm:text-sm border border-white/20 transition-colors flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-amber-300" />
                <span>
                  {currentAreaConfig ? `Delivering to ${currentAreaConfig.name}` : "Check Delivery Time"}
                </span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/15 text-xs text-emerald-200">
              <div>
                <span className="font-extrabold text-white text-base sm:text-lg block">₹500+</span>
                <span className="text-[11px] text-emerald-300">Free Delivery</span>
              </div>
              <div>
                <span className="font-extrabold text-white text-base sm:text-lg block">₹2000+</span>
                <span className="text-[11px] text-emerald-300">Free Gift Unlocked</span>
              </div>
              <div>
                <span className="font-extrabold text-white text-base sm:text-lg block">100%</span>
                <span className="text-[11px] text-emerald-300">Fresh &amp; Genuine</span>
              </div>
            </div>
          </div>

          {/* Right Hero Feature Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Gift className="w-4 h-4" />
                  Free Gift Milestone
                </span>
                <span className="text-xs font-mono text-emerald-200">Sri Maneeshwara</span>
              </div>

              <h3 className="text-lg font-bold leading-snug">
                Spend ₹2000 &amp; Choose a Free Grocery Gift
              </h3>

              <div className="space-y-2 text-xs text-emerald-100">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>1 kg Premium Crystal Sugar Pack</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>500 ml Refined Cooking Oil Pouch</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Stainless Steel Food Container Set</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Eco-friendly Heavy Cotton Canvas Bag</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentView("offers")}
                  className="w-full py-2.5 rounded-xl bg-white text-emerald-950 font-bold text-xs hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View All Store Offers</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Shop by Category Tiles */}
      <section>
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div>
            <h2 className="text-lg sm:text-2xl font-black text-stone-900 tracking-tight">
              {t.allCategories}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              Browse 15 curated departments from staples to personal care
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedCategoryFilter(null);
              setCurrentView("groceries");
            }}
            className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 hover:underline"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter((p) => p.categoryId === cat.id).length;
            const categoryLabel = (t as any)[cat.nameKey] || cat.defaultName;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategorySelect(cat.id)}
                className="group p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-500 hover:shadow-md transition-all text-left flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 group-hover:bg-emerald-50 flex items-center justify-center text-2xl mb-3 transition-colors">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
                    {categoryLabel}
                  </h3>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    {count} items
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Today's Deals Section (Highest Discounts) */}
      <section className="bg-amber-50/50 rounded-3xl p-5 sm:p-8 border border-amber-200/60">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange-600 text-white flex items-center justify-center">
              <Percent className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-2xl font-black text-stone-900 tracking-tight">
                {t.todaysDeals}
              </h2>
              <p className="text-xs sm:text-sm text-amber-900 font-medium">
                Save up to 20% on everyday kitchen staples and household favorites
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setSelectedCategoryFilter(null);
              setCurrentView("groceries");
            }}
            className="hidden sm:flex items-center gap-1 text-xs font-bold text-orange-700 hover:text-orange-800"
          >
            <span>See more deals</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topDeals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Fresh Dairy Section */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center">
              <Milk className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-2xl font-black text-stone-900 tracking-tight">
                Fresh Dairy &amp; Milk Counter
              </h2>
              <p className="text-xs sm:text-sm text-stone-500">
                Aavin fresh milk, curd, butter, paneer, and sweets delivered cool
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleCategorySelect("dairy_products")}
            className="text-xs sm:text-sm font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1 hover:underline"
          >
            <span>View All Dairy</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dairyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. Popular Coimbatore Brands Banner */}
      <section className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-200">
        <div className="text-center max-w-xl mx-auto mb-6">
          <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
            Trusted Quality &amp; Heritage
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Popular Brands Available at Sri Maneeshwara
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            We stock only original, fresh manufacturer batches from regional Tamil Nadu and national trusted brands.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {POPULAR_BRANDS.map((brand) => (
            <button
              key={brand}
              type="button"
              onClick={() => {
                setSelectedCategoryFilter(null);
                setCurrentView("groceries");
              }}
              className="px-3.5 py-2 rounded-xl bg-white border border-stone-200 hover:border-emerald-500 text-xs font-bold text-stone-800 hover:text-emerald-700 shadow-2xs hover:shadow-xs transition-all"
            >
              {brand}
            </button>
          ))}
        </div>
      </section>

      {/* 6. Popular Staples Section */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg sm:text-2xl font-black text-stone-900 tracking-tight">
              Essential Household Staples
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              Rice, Atta, Dals, and Cooking Oils most purchased in Annur
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setSelectedCategoryFilter(null);
              setCurrentView("groceries");
            }}
            className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 hover:underline"
          >
            <span>Explore All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {popularStaples.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 7. Local Service Guarantee */}
      <section className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-stone-800">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-stone-900">Doorstep Delivery</h3>
              <p className="text-xs text-stone-600 mt-0.5">
                Annur (30-45m), Kumarankundru, Pogalur &amp; Kovilpalayam.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-stone-900">100% Genuine Brands</h3>
              <p className="text-xs text-stone-600 mt-0.5">
                Authentic spices, fresh Aavin dairy, and premium rice bags.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-stone-900">Open 7 Days a Week</h3>
              <p className="text-xs text-stone-600 mt-0.5">
                6:30 AM to 10:00 PM for morning milk &amp; evening rations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-stone-900">Free Gift Offers</h3>
              <p className="text-xs text-stone-600 mt-0.5">
                Unlock complimentary gifts on every grocery order over ₹2000.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
