/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Central Store State Context:
 * - Cart management with localStorage persistence
 * - Language selection with translations
 * - Delivery area enforcement (Annur, Kumarankundru, Pogalur, Kovilpalayam)
 * - Free gift unlocking (orders >= ₹2000)
 * - Free delivery (orders >= ₹500)
 * - Order placement, tracking & invoice generation
 */

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { 
  StoreConfig, 
  getStoredStoreConfig, 
  saveStoreConfig, 
  DeliveryAreaConfig 
} from "../config/storeConfig";
import { 
  LanguageCode, 
  TranslationDictionary, 
  TRANSLATIONS, 
  getStoredLanguage, 
  saveStoredLanguage 
} from "../data/translations";
import { Product, ProductVariant, PRODUCTS } from "../data/products";

export interface CartItem {
  productId: string;
  variantId: string;
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface CustomerBankDetails {
  bankName: string;
  accountHolderName: string;
  accountNumberMasked: string;
  ifscCode: string;
  accountType: "savings" | "current";
  transactionRef: string;
  transactionDate: string;
}

export interface CustomerCardDetails {
  cardholderName: string;
  cardNumberMasked: string;
  cardNetwork: "RuPay" | "Visa" | "Mastercard";
  bankName: string;
  authCode: string;
}

export interface CustomerUpiDetails {
  customerUpiId?: string;
  utrRefNumber: string;
}

export interface PaymentDetails {
  method: "netbanking" | "card" | "upi" | "cod";
  status: "paid" | "pending";
  amount: number;
  transactionId: string;
  timestamp: string;
  bankDetails?: CustomerBankDetails;
  cardDetails?: CustomerCardDetails;
  upiDetails?: CustomerUpiDetails;
}

export interface PlacedOrder {
  orderId: string;
  createdAt: string;
  customerName: string;
  customerPhone: string;
  addressLine: string;
  landmark: string;
  areaId: string;
  areaName: string;
  pincode: string;
  deliverySlot: string;
  deliveryNotes?: string;
  items: {
    title: string;
    tamilTitle: string;
    variantLabel: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  freeGiftName?: string;
  grandTotal: number;
  paymentMethod: "upi" | "cod" | "card" | "netbanking";
  paymentStatus: "paid" | "pending";
  paymentDetails?: PaymentDetails;
  orderStatus: "placed" | "packed" | "out_for_delivery" | "delivered";
  estimatedDeliveryText: string;
}

export interface UserLocation {
  areaId: string; // 'annur' | 'kumarankundru' | 'pogalur' | 'kovilpalayam'
  pincode: string;
  street: string;
  landmark: string;
}

interface StoreContextType {
  // Store Config
  storeConfig: StoreConfig;
  updateStoreConfig: (newConfig: StoreConfig) => void;

  // Language
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationDictionary;

  // Location
  location: UserLocation | null;
  setLocation: (loc: UserLocation) => void;
  isLocationModalOpen: boolean;
  setIsLocationModalOpen: (open: boolean) => void;
  currentAreaConfig: DeliveryAreaConfig | null;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, variant: ProductVariant, qty?: number) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  removeFromCart: (productId: string, variantId: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  cartTotalDiscount: number;
  deliveryFee: number;
  isFreeDelivery: boolean;
  freeDeliveryRemaining: number;
  freeGiftRemaining: number;
  isFreeGiftUnlocked: boolean;
  selectedFreeGiftId: string | null;
  setSelectedFreeGiftId: (giftId: string) => void;
  cartGrandTotal: number;
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;

  // Checkout & Orders
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  lastPlacedOrder: PlacedOrder | null;
  setLastPlacedOrder: (order: PlacedOrder | null) => void;
  placeOrder: (orderData: Omit<PlacedOrder, "orderId" | "createdAt" | "orderStatus">) => PlacedOrder;
  ordersHistory: PlacedOrder[];
  findOrderById: (orderId: string) => PlacedOrder | undefined;

  // Active Navigation Tab
  currentView: "home" | "groceries" | "dairy" | "deals" | "offers" | "track" | "about" | "contact";
  setCurrentView: (view: "home" | "groceries" | "dairy" | "deals" | "offers" | "track" | "about" | "contact") => void;
  selectedCategoryFilter: string | null;
  setSelectedCategoryFilter: (cat: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Shop Owner Settings Modal
  isOwnerModalOpen: boolean;
  setIsOwnerModalOpen: (open: boolean) => void;
}

const StoreContext = createContext<StoreContextType | null>(null);

const CART_STORAGE_KEY = "sms_cart_items_v1";
const LOCATION_STORAGE_KEY = "sms_user_delivery_location_v1";
const ORDERS_STORAGE_KEY = "sms_orders_history_v1";
const FREE_GIFT_STORAGE_KEY = "sms_selected_free_gift_v1";

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [storeConfig, setStoreConfigState] = useState<StoreConfig>(getStoredStoreConfig);
  const [language, setLanguageState] = useState<LanguageCode>(getStoredLanguage);

  // User delivery location
  const [location, setLocationState] = useState<UserLocation | null>(() => {
    try {
      const raw = localStorage.getItem(LOCATION_STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  // Modal open states
  const [isLocationModalOpen, setIsLocationModalOpen] = useState<boolean>(() => {
    // If no location has been selected yet, show on first visit
    try {
      const raw = localStorage.getItem(LOCATION_STORAGE_KEY);
      return !raw;
    } catch {
      return true;
    }
  });

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);

  // Active view & search
  const [currentView, setCurrentView] = useState<
    "home" | "groceries" | "dairy" | "deals" | "offers" | "track" | "about" | "contact"
  >("home");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // Hydrate product and variant if needed or use stored
        return parsed.map((item: any) => {
          const matchedProd = PRODUCTS.find(p => p.id === item.productId);
          if (matchedProd) {
            const matchedVar = matchedProd.variants.find(v => v.id === item.variantId) || matchedProd.variants[0];
            return {
              ...item,
              product: matchedProd,
              variant: matchedVar
            };
          }
          return item;
        });
      }
    } catch (e) {
      console.error("Failed to load cart", e);
    }
    return [];
  });

  // Selected Free Gift
  const [selectedFreeGiftId, setSelectedFreeGiftIdState] = useState<string | null>(() => {
    try {
      return localStorage.getItem(FREE_GIFT_STORAGE_KEY) || null;
    } catch {
      return null;
    }
  });

  // Orders History
  const [ordersHistory, setOrdersHistory] = useState<PlacedOrder[]>(() => {
    try {
      const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [lastPlacedOrder, setLastPlacedOrder] = useState<PlacedOrder | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error("Cart save error", e);
    }
  }, [cart]);

  // Sync language
  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    saveStoredLanguage(lang);
  };

  // Sync location
  const setLocation = (loc: UserLocation) => {
    setLocationState(loc);
    try {
      localStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(loc));
    } catch (e) {
      console.error("Location save error", e);
    }
  };

  const setSelectedFreeGiftId = (giftId: string) => {
    setSelectedFreeGiftIdState(giftId);
    try {
      localStorage.setItem(FREE_GIFT_STORAGE_KEY, giftId);
    } catch (e) {
      console.error("Gift save error", e);
    }
  };

  const updateStoreConfig = (newConfig: StoreConfig) => {
    setStoreConfigState(newConfig);
    saveStoreConfig(newConfig);
  };

  // Current area config
  const currentAreaConfig = useMemo(() => {
    if (!location || !location.areaId) return null;
    return storeConfig.deliveryAreas[location.areaId] || null;
  }, [location, storeConfig]);

  // Cart totals
  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.variant.price * item.quantity, 0);
  }, [cart]);

  const cartTotalDiscount = useMemo(() => {
    return cart.reduce((sum, item) => {
      const savingPerUnit = Math.max(0, item.variant.mrp - item.variant.price);
      return sum + savingPerUnit * item.quantity;
    }, 0);
  }, [cart]);

  // Free delivery logic: free above ₹500 in all 4 areas
  const freeDeliveryThreshold = currentAreaConfig?.freeDeliveryThreshold ?? 500;
  const isFreeDelivery = cartSubtotal >= freeDeliveryThreshold;
  const freeDeliveryRemaining = Math.max(0, freeDeliveryThreshold - cartSubtotal);

  // Delivery fee
  const deliveryFee = useMemo(() => {
    if (cart.length === 0) return 0;
    if (isFreeDelivery) return 0;
    if (currentAreaConfig) return currentAreaConfig.deliveryCharge;
    return 20; // Default Annur
  }, [cart.length, isFreeDelivery, currentAreaConfig]);

  // Free gift logic: threshold ₹2000
  const freeGiftThreshold = storeConfig.freeGiftThreshold || 2000;
  const isFreeGiftUnlocked = cartSubtotal >= freeGiftThreshold;
  const freeGiftRemaining = Math.max(0, freeGiftThreshold - cartSubtotal);

  // Default gift selection if unlocked but not chosen
  useEffect(() => {
    if (isFreeGiftUnlocked && !selectedFreeGiftId && storeConfig.freeGiftOptions.length > 0) {
      setSelectedFreeGiftId(storeConfig.freeGiftOptions[0].id);
    }
  }, [isFreeGiftUnlocked, selectedFreeGiftId, storeConfig.freeGiftOptions]);

  const cartGrandTotal = cartSubtotal + deliveryFee;

  // Cart operations
  const addToCart = (product: Product, variant: ProductVariant, qty: number = 1) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.productId === product.id && i.variantId === variant.id
      );
      if (existingIdx >= 0) {
        const next = [...prev];
        next[existingIdx] = {
          ...next[existingIdx],
          quantity: next[existingIdx].quantity + qty
        };
        return next;
      }
      return [...prev, { productId: product.id, variantId: variant.id, product, variant, quantity: qty }];
    });
  };

  const updateQuantity = (productId: string, variantId: string, quantity: number) => {
    setCart((prev) => {
      if (quantity <= 0) {
        return prev.filter((i) => !(i.productId === productId && i.variantId === variantId));
      }
      return prev.map((item) => {
        if (item.productId === productId && item.variantId === variantId) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  const removeFromCart = (productId: string, variantId: string) => {
    setCart((prev) => prev.filter((i) => !(i.productId === productId && i.variantId === variantId)));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Place Order
  const placeOrder = (
    orderData: Omit<PlacedOrder, "orderId" | "createdAt" | "orderStatus">
  ): PlacedOrder => {
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const orderId = `SMS-${randomSuffix}`;
    const newOrder: PlacedOrder = {
      ...orderData,
      orderId,
      createdAt: new Date().toISOString(),
      orderStatus: "placed"
    };

    const updatedHistory = [newOrder, ...ordersHistory];
    setOrdersHistory(updatedHistory);
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(updatedHistory));
    } catch (e) {
      console.error("Order save error", e);
    }

    setLastPlacedOrder(newOrder);
    clearCart();
    return newOrder;
  };

  const findOrderById = (orderId: string): PlacedOrder | undefined => {
    const cleanId = orderId.trim().toUpperCase();
    return ordersHistory.find(
      (o) => o.orderId.toUpperCase() === cleanId || o.orderId.replace("#", "").toUpperCase() === cleanId
    );
  };

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <StoreContext.Provider
      value={{
        storeConfig,
        updateStoreConfig,
        language,
        setLanguage,
        t,
        location,
        setLocation,
        isLocationModalOpen,
        setIsLocationModalOpen,
        currentAreaConfig,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartSubtotal,
        cartTotalDiscount,
        deliveryFee,
        isFreeDelivery,
        freeDeliveryRemaining,
        freeGiftRemaining,
        isFreeGiftUnlocked,
        selectedFreeGiftId,
        setSelectedFreeGiftId,
        cartGrandTotal,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        lastPlacedOrder,
        setLastPlacedOrder,
        placeOrder,
        ordersHistory,
        findOrderById,
        currentView,
        setCurrentView,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        searchQuery,
        setSearchQuery,
        isOwnerModalOpen,
        setIsOwnerModalOpen
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
