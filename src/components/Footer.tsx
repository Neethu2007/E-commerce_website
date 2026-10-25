/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Footer Component:
 * Store contact info, Annur & Coimbatore delivery areas, quick navigation,
 * store timings, payment methods, and store owner settings button.
 */

import React from "react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  Settings,
  Sparkles
} from "lucide-react";
import { useStore } from "../context/StoreContext";
import { CATEGORIES } from "../data/products";

export const Footer: React.FC = () => {
  const { 
    storeConfig, 
    setCurrentView, 
    setSelectedCategoryFilter, 
    setIsOwnerModalOpen,
    setIsLocationModalOpen,
    t 
  } = useStore();

  const handleCategoryClick = (catId: string) => {
    setSelectedCategoryFilter(catId);
    setCurrentView("groceries");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-stone-800">
          
          {/* Column 1: Store Branding & About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-lg">
                M
              </div>
              <div>
                <h3 className="font-extrabold text-base text-white leading-tight">
                  {storeConfig.storeName}
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  {storeConfig.storeNameTamil}
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Your trusted local neighborhood grocery store delivering fresh staples, dairy, spices, and daily household rations across Coimbatore district.
            </p>

            <div className="space-y-1.5 text-xs text-stone-400 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{storeConfig.address.line1}, {storeConfig.address.city} – {storeConfig.address.pincode}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Open 7 Days: 6:30 AM – 10:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${storeConfig.phone}`} className="hover:text-white font-mono">
                  {storeConfig.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: 4 Delivery Localities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Guaranteed Delivery Areas
            </h4>
            <p className="text-xs text-stone-400">
              Direct doorstep delivery within 30–60 minutes to:
            </p>

            <div className="space-y-2 text-xs">
              {Object.values(storeConfig.deliveryAreas).map((area) => (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setIsLocationModalOpen(true)}
                  className="w-full text-left p-2 rounded-lg bg-stone-800/60 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors flex items-center justify-between"
                >
                  <div>
                    <span className="font-bold text-white block">{area.name}</span>
                    <span className="text-[10px] text-emerald-400">{area.tamilName}</span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-300">
                    ₹{area.deliveryCharge} ({area.estimatedTime})
                  </span>
                </button>
              ))}
            </div>

            <span className="text-[11px] text-stone-400 block pt-1">
              ✨ Free delivery applies automatically for cart value above ₹500.
            </span>
          </div>

          {/* Column 3: Popular Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Popular Categories
            </h4>

            <ul className="space-y-1.5 text-xs">
              {CATEGORIES.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(cat.id)}
                    className="hover:text-emerald-400 transition-colors text-stone-300 flex items-center gap-1.5"
                  >
                    <span>{cat.icon}</span>
                    <span>{(t as any)[cat.nameKey] || cat.defaultName}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Customer Care & Quick WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Help &amp; Direct Ordering
            </h4>

            <p className="text-xs text-stone-400 leading-relaxed">
              Prefer to order via WhatsApp list or need help with a delivery?
            </p>

            <a
              href={`https://wa.me/${storeConfig.whatsappNumber}?text=Hello%20Sri%20Maneeshwara%20Super%20Market!`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors w-full justify-center"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>

            <div className="pt-2 border-t border-stone-800 space-y-1 text-[11px] text-stone-400">
              <div className="flex items-center justify-between">
                <span>Store UPI ID:</span>
                <span className="font-mono text-white font-semibold">{storeConfig.upiId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Payment:</span>
                <span className="text-stone-300">UPI, Cash, Card, NetBanking</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsOwnerModalOpen(true)}
                className="w-full py-1.5 px-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Settings className="w-3 h-3 text-stone-400" />
                <span>{t.ownerSettings}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} {storeConfig.storeName}. All rights reserved. Annur, Tamil Nadu.
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              type="button"
              onClick={() => {
                setCurrentView("about");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-stone-300 transition-colors"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => {
                setCurrentView("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-stone-300 transition-colors"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => {
                setCurrentView("track");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-stone-300 transition-colors"
            >
              Track Order
            </button>
            <button
              type="button"
              onClick={() => setIsOwnerModalOpen(true)}
              className="text-emerald-400 hover:underline"
            >
              Owner Admin
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
