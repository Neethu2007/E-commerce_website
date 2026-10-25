/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  ShoppingBag, 
  MapPin, 
  Search, 
  Globe, 
  ChevronDown, 
  Phone, 
  Clock, 
  Sparkles, 
  X,
  Menu
} from "lucide-react";
import { useStore } from "../context/StoreContext";
import { SUPPORTED_LANGUAGES, LanguageCode } from "../data/translations";

export const Header: React.FC = () => {
  const {
    storeConfig,
    language,
    setLanguage,
    t,
    location,
    setIsLocationModalOpen,
    currentAreaConfig,
    cartCount,
    cartSubtotal,
    setIsCartDrawerOpen,
    currentView,
    setCurrentView,
    searchQuery,
    setSearchQuery,
    setSelectedCategoryFilter,
    isFreeDelivery
  } = useStore();

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentView("groceries");
      setSelectedCategoryFilter(null);
    }
  };

  const navItems = [
    { id: "home", label: t.home },
    { id: "groceries", label: t.allGroceries },
    { id: "dairy", label: t.freshDairy },
    { id: "deals", label: t.todaysDeals },
    { id: "offers", label: "Special Offers" },
    { id: "track", label: t.trackOrder },
    { id: "about", label: t.aboutUs },
    { id: "contact", label: t.contact }
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Top Banner Ticker */}
      <div className="bg-emerald-800 text-emerald-50 text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Annur · Kumarankundru · Pogalur · Kovilpalayam</span>
            </span>
            <span className="hidden sm:inline text-emerald-400">|</span>
            <span className="hidden sm:inline text-emerald-100">
              {t.freeDeliveryOver} &amp; {t.freeGiftOver}
            </span>
          </div>

          <div className="flex items-center gap-4 text-emerald-200">
            <span className="hidden md:inline-flex items-center gap-1">
              <Clock className="w-3 h-3 text-emerald-300" />
              <span>6:30 AM – 10:00 PM</span>
            </span>
            <a 
              href={`tel:${storeConfig.phone}`} 
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              <span className="font-semibold">{storeConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-3.5">
        <div className="flex items-center justify-between gap-3 md:gap-6">
          
          {/* Logo & Store Identity */}
          <div 
            onClick={() => {
              setCurrentView("home");
              setSelectedCategoryFilter(null);
            }} 
            className="flex items-center gap-2.5 cursor-pointer shrink-0 group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-emerald-500 text-white flex items-center justify-center font-extrabold text-xl shadow-sm shadow-emerald-900/10 group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-base sm:text-lg font-bold tracking-tight text-stone-900 leading-tight">
                  Sri Maneeshwara
                </h1>
                <span className="hidden lg:inline text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">
                  Super Market
                </span>
              </div>
              <p className="text-xs text-emerald-700 font-medium truncate max-w-[200px] sm:max-w-none">
                {storeConfig.storeNameTamil}
              </p>
            </div>
          </div>

          {/* Delivery Location Trigger */}
          <button
            type="button"
            onClick={() => setIsLocationModalOpen(true)}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-stone-200 hover:border-emerald-500 bg-stone-50/80 hover:bg-emerald-50/60 transition-all text-left shrink-0 max-w-[210px]"
          >
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <div className="min-w-0">
              <span className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                {t.deliveringTo}
              </span>
              <span className="block text-xs font-semibold text-stone-800 truncate">
                {currentAreaConfig ? `${currentAreaConfig.name} (${currentAreaConfig.estimatedTime})` : t.selectLocation}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400 shrink-0 ml-auto" />
          </button>

          {/* Search Bar */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="hidden sm:flex flex-1 max-w-lg relative"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-stone-100 hover:bg-stone-50 focus:bg-white text-sm text-stone-900 placeholder-stone-500 border border-transparent focus:border-emerald-600 focus:outline-none transition-all shadow-inner"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </form>

          {/* Right Action Cluster: Language, Location (mobile), Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Mobile Location button */}
            <button
              type="button"
              onClick={() => setIsLocationModalOpen(true)}
              className="md:hidden p-2 rounded-lg text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors"
              title={t.deliveringTo}
            >
              <MapPin className="w-4 h-4" />
            </button>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-stone-200 hover:border-stone-300 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 transition-colors"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-stone-500" />
                <span className="hidden sm:inline">
                  {SUPPORTED_LANGUAGES.find(l => l.code === language)?.nativeLabel || "English"}
                </span>
                <span className="sm:hidden uppercase">{language}</span>
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </button>

              {isLangDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-50" 
                    onClick={() => setIsLangDropdownOpen(false)} 
                  />
                  <div className="absolute right-0 mt-1.5 w-48 bg-white border border-stone-200 rounded-xl shadow-lg z-50 py-1.5 animate-in fade-in zoom-in-95 duration-100">
                    <div className="px-3 py-1 text-[11px] font-bold text-stone-400 uppercase tracking-wider border-b border-stone-100 mb-1">
                      Select Language
                    </div>
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-1.5 text-xs flex items-center justify-between transition-colors ${
                          language === lang.code 
                            ? "bg-emerald-50 text-emerald-800 font-bold" 
                            : "text-stone-700 hover:bg-stone-50"
                        }`}
                      >
                        <span>{lang.nativeLabel}</span>
                        <span className="text-[10px] text-stone-400 font-normal">({lang.label})</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Cart Trigger Button */}
            <button
              type="button"
              onClick={() => setIsCartDrawerOpen(true)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow transition-all group shrink-0"
              aria-label="View Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white animate-pulse">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-bold">
                {cartCount > 0 ? `₹${cartSubtotal}` : t.cart}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <form 
          onSubmit={handleSearchSubmit} 
          className="mt-2.5 sm:hidden relative"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-stone-100 focus:bg-white text-xs text-stone-900 placeholder-stone-500 border border-transparent focus:border-emerald-600 focus:outline-none transition-all shadow-inner"
          />
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </form>
      </div>

      {/* Primary Category & Page Navigation Bar */}
      <nav className="bg-stone-50 border-t border-stone-200 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-semibold text-stone-600">
          <div className="flex items-center gap-1 overflow-x-auto py-1.5 scrollbar-none">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id as any);
                    if (item.id === "dairy") {
                      setSelectedCategoryFilter("dairy_products");
                    } else if (item.id === "groceries" || item.id === "home") {
                      setSelectedCategoryFilter(null);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-emerald-600 text-white font-bold shadow-xs"
                      : "text-stone-700 hover:text-emerald-700 hover:bg-stone-200/60"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center gap-3 text-stone-500 text-[11px] font-normal">
            <span className="text-emerald-700 font-semibold">
              {currentAreaConfig ? `📍 ${currentAreaConfig.name} Hub` : "📍 Coimbatore Zone"}
            </span>
            <span className="text-stone-300">·</span>
            <span>{isFreeDelivery ? "✨ Free Delivery Qualified" : "Min ₹500 for Free Delivery"}</span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 py-3 shadow-lg animate-in slide-in-from-top duration-150">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id as any);
                  setIsMobileMenuOpen(false);
                  if (item.id === "dairy") {
                    setSelectedCategoryFilter("dairy_products");
                  }
                }}
                className={`p-2.5 text-left rounded-lg transition-colors ${
                  currentView === item.id 
                    ? "bg-emerald-50 text-emerald-800 font-bold border border-emerald-200" 
                    : "bg-stone-50 text-stone-700 hover:bg-stone-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsLocationModalOpen(true);
              }}
              className="text-emerald-700 font-semibold flex items-center gap-1"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{currentAreaConfig ? currentAreaConfig.name : "Select Location"}</span>
            </button>
            <span className="text-stone-400">Sri Maneeshwara</span>
          </div>
        </div>
      )}
    </header>
  );
};
