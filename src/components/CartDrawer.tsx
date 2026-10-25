/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Cart Drawer Component:
 * - Slide-out drawer with item names, pack sizes, weight, quantity steppers, item removal
 * - Free Delivery progress bar (₹500 threshold)
 * - Free Gift Offer progress bar (₹2000 threshold)
 * - Interactive Free Gift selector when cart total >= ₹2000 (adds to cart at ₹0)
 * - Clear breakdown: Subtotal, Delivery Charge, Total Discount, Grand Total
 * - Direct "Proceed to Checkout" action
 */

import React from "react";
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Gift, 
  Truck, 
  CheckCircle2, 
  ShoppingBag, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useStore } from "../context/StoreContext";

export const CartDrawer: React.FC = () => {
  const {
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartSubtotal,
    cartTotalDiscount,
    deliveryFee,
    isFreeDelivery,
    freeDeliveryRemaining,
    isFreeGiftUnlocked,
    freeGiftRemaining,
    selectedFreeGiftId,
    setSelectedFreeGiftId,
    storeConfig,
    currentAreaConfig,
    cartGrandTotal,
    setIsCheckoutOpen,
    setIsLocationModalOpen,
    t
  } = useStore();

  if (!isCartDrawerOpen) return null;

  const handleCheckoutClick = () => {
    setIsCartDrawerOpen(false);
    setIsCheckoutOpen(true);
  };

  const giftThreshold = storeConfig.freeGiftThreshold || 2000;
  const deliveryThreshold = currentAreaConfig?.freeDeliveryThreshold || 500;

  // Percentage progress for bars
  const deliveryProgress = Math.min(100, Math.round((cartSubtotal / deliveryThreshold) * 100));
  const giftProgress = Math.min(100, Math.round((cartSubtotal / giftThreshold) * 100));

  const selectedGiftObj = storeConfig.freeGiftOptions.find((g) => g.id === selectedFreeGiftId);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={() => setIsCartDrawerOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-stone-200 animate-in slide-in-from-right duration-250">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-bold text-stone-900 leading-tight">
                  {t.shoppingCart}
                </h2>
                <p className="text-xs text-stone-500">
                  {cart.length} {cart.length === 1 ? "item" : "items"} from Sri Maneeshwara
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-stone-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-stone-200/50 transition-colors"
                  title={t.clearCart}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsCartDrawerOpen(false)}
                className="text-stone-400 hover:text-stone-700 p-1.5 rounded-lg hover:bg-stone-200/50 transition-colors"
                aria-label="Close cart drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Alerts: Free Delivery + Free Gift */}
          {cart.length > 0 && (
            <div className="p-3.5 bg-emerald-50/70 border-b border-emerald-100 space-y-2.5">
              
              {/* 1. Free Delivery Progress */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-emerald-950 mb-1">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-emerald-700" />
                    {isFreeDelivery ? (
                      <span className="text-emerald-700 font-bold">✓ {t.freeDeliveryApplied}</span>
                    ) : (
                      <span>{t.addMoreForFreeDelivery.replace("{amount}", freeDeliveryRemaining.toString())}</span>
                    )}
                  </span>
                  <span className="text-[11px] text-stone-500 font-normal">
                    {deliveryProgress}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-emerald-200/70 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 transition-all duration-300 rounded-full"
                    style={{ width: `${deliveryProgress}%` }}
                  />
                </div>
              </div>

              {/* 2. Free Gift Progress (₹2000 threshold) */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-stone-800 mb-1">
                  <span className="flex items-center gap-1.5">
                    <Gift className={`w-3.5 h-3.5 ${isFreeGiftUnlocked ? "text-amber-500" : "text-stone-400"}`} />
                    {isFreeGiftUnlocked ? (
                      <span className="text-amber-700 font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        {t.freeGiftUnlocked}
                      </span>
                    ) : (
                      <span>{t.addMoreForFreeGift.replace("{amount}", freeGiftRemaining.toString())}</span>
                    )}
                  </span>
                  <span className="text-[11px] text-stone-500 font-normal">
                    {giftProgress}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 rounded-full ${
                      isFreeGiftUnlocked ? "bg-amber-500" : "bg-emerald-500"
                    }`}
                    style={{ width: `${giftProgress}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 divide-y divide-stone-100">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-3">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-stone-900 text-base mb-1">
                  {t.emptyCartTitle}
                </h3>
                <p className="text-xs text-stone-500 max-w-xs mb-4">
                  {t.emptyCartDesc}
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  {t.startShopping}
                </button>
              </div>
            ) : (
              <>
                {cart.map((item) => {
                  const lineTotal = item.variant.price * item.quantity;
                  const lineSaving = Math.max(0, item.variant.mrp - item.variant.price) * item.quantity;

                  return (
                    <div 
                      key={`${item.productId}-${item.variantId}`} 
                      className="pt-3.5 first:pt-0 flex gap-3 items-center"
                    >
                      {/* Product Thumbnail */}
                      <div className="w-16 h-16 rounded-xl bg-stone-50 border border-stone-200 p-1.5 shrink-0 flex items-center justify-center overflow-hidden">
                        <img
                          src={item.product.image}
                          alt={item.variant.packName}
                          className="w-full h-full object-contain mix-blend-multiply"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=150&q=80";
                          }}
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-stone-900 leading-snug line-clamp-1">
                          {item.variant.packName}
                        </h4>
                        <p className="text-[11px] text-stone-500 font-medium">
                          {item.product.tamilName}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-extrabold text-stone-900">
                            ₹{item.variant.price}
                          </span>
                          {item.variant.mrp > item.variant.price && (
                            <span className="text-[11px] text-stone-400 line-through">
                              ₹{item.variant.mrp}
                            </span>
                          )}
                          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-sm">
                            {item.variant.weightLabel}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Stepper & Remove */}
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-200"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-stone-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-200"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-xs font-bold text-stone-800">
                          ₹{lineTotal}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Free Gift Section (When >= ₹2000) */}
                {isFreeGiftUnlocked && (
                  <div className="pt-4 mt-2">
                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1.5">
                        <Gift className="w-4 h-4 text-amber-600" />
                        <span>{t.chooseFreeGift} (₹0 Complementary)</span>
                      </div>
                      <p className="text-[11px] text-amber-800 mb-2.5">
                        Because your cart is over ₹2000, select 1 free gift to be included in your package:
                      </p>

                      <div className="grid grid-cols-1 gap-2">
                        {storeConfig.freeGiftOptions.map((gift) => {
                          const isSelected = selectedFreeGiftId === gift.id;
                          return (
                            <button
                              key={gift.id}
                              type="button"
                              onClick={() => setSelectedFreeGiftId(gift.id)}
                              className={`p-2 rounded-lg border text-left flex items-center justify-between text-xs transition-all ${
                                isSelected
                                  ? "bg-white border-amber-500 shadow-xs ring-1 ring-amber-400"
                                  : "bg-white/60 border-amber-100 hover:bg-white"
                              }`}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="text-base">🎁</span>
                                <div>
                                  <span className="font-bold text-stone-900 block truncate">
                                    {gift.name}
                                  </span>
                                  <span className="text-[10px] text-emerald-800 font-medium block">
                                    {gift.tamilName}
                                  </span>
                                </div>
                              </div>
                              <span className="text-[11px] font-bold text-emerald-700 shrink-0 ml-2">
                                {isSelected ? "✓ Selected (FREE)" : "Select"}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer & Order Calculation */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-3">
              {/* Delivery area line */}
              <div className="flex items-center justify-between text-xs text-stone-600">
                <span className="flex items-center gap-1 text-stone-500">
                  <Truck className="w-3.5 h-3.5 text-stone-400" />
                  <span>Delivery to:</span>
                </span>
                <button
                  type="button"
                  onClick={() => setIsLocationModalOpen(true)}
                  className="font-bold text-emerald-700 hover:underline"
                >
                  {currentAreaConfig ? currentAreaConfig.name : "Select Area"}
                </button>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-stone-600">
                  <span>{t.subtotal}</span>
                  <span className="font-semibold text-stone-900">₹{cartSubtotal}</span>
                </div>

                <div className="flex items-center justify-between text-stone-600">
                  <span>{t.deliveryCharge}</span>
                  <span>
                    {isFreeDelivery ? (
                      <span className="font-bold text-emerald-700">FREE</span>
                    ) : (
                      <span className="font-semibold text-stone-900">₹{deliveryFee}</span>
                    )}
                  </span>
                </div>

                {cartTotalDiscount > 0 && (
                  <div className="flex items-center justify-between text-emerald-700 font-medium">
                    <span>{t.totalDiscount}</span>
                    <span className="font-bold">-₹{cartTotalDiscount}</span>
                  </div>
                )}

                {isFreeGiftUnlocked && selectedGiftObj && (
                  <div className="flex items-center justify-between text-amber-800 text-[11px]">
                    <span className="truncate pr-2">Free Gift: {selectedGiftObj.name}</span>
                    <span className="font-bold text-emerald-700">₹0 FREE</span>
                  </div>
                )}

                <div className="pt-2 border-t border-stone-200 flex items-baseline justify-between">
                  <div>
                    <span className="text-sm font-bold text-stone-900">{t.grandTotal}</span>
                    <span className="text-[10px] text-stone-500 block">Inclusive of all taxes</span>
                  </div>
                  <span className="text-xl font-extrabold text-stone-900">
                    ₹{cartGrandTotal}
                  </span>
                </div>
              </div>

              {/* Checkout Action Button */}
              <button
                type="button"
                onClick={handleCheckoutClick}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>{t.proceedToCheckout}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
