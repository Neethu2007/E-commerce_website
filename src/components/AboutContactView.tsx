/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * About Us and Contact View Component:
 * - Highlights local heritage in Annur, Kovai district
 * - Confirms guaranteed delivery coverage in Annur, Kumarankundru, Pogalur, and Kovilpalayam
 * - Store address, phone number, operating timings (6:30 AM to 10:00 PM)
 * - Direct WhatsApp Order button
 */

import React from "react";
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Truck, 
  ShieldCheck, 
  HeartHandshake, 
  Store,
  Sparkles
} from "lucide-react";
import { useStore } from "../context/StoreContext";

export const AboutContactView: React.FC = () => {
  const { storeConfig, setIsLocationModalOpen, t } = useStore();

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      "Hello Sri Maneeshwara Super Market! I would like to place a grocery order or inquire about daily delivery."
    );
    window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-16">
      
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
          <Store className="w-3.5 h-3.5" />
          <span>Annur, Coimbatore District, Tamil Nadu</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
          {storeConfig.storeName}
        </h1>
        <p className="text-sm font-semibold text-emerald-700 mt-1">
          {storeConfig.storeNameTamil}
        </p>
        <p className="text-xs sm:text-sm text-stone-500 mt-3 leading-relaxed">
          Your neighborhood grocery store delivering fresh regional produce, authentic Tamil Nadu spices, pure Aavin dairy, and essential staples right to your door.
        </p>
      </div>

      {/* 4 Regions Delivery Commitment Banner */}
      <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Truck className="w-64 h-64" />
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <Sparkles className="w-4 h-4" />
            Dedicated Delivery Service Zones
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
            Exclusively Serving 4 Key Localities
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 mb-6 leading-relaxed">
            Unlike distant centralized warehouses, Sri Maneeshwara delivers straight from our Annur store location with our own local delivery team. We proudly guarantee fast delivery to:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Object.values(storeConfig.deliveryAreas).map((area) => (
              <div
                key={area.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/20 text-left"
              >
                <div className="font-extrabold text-sm text-white">{area.name}</div>
                <div className="text-xs text-emerald-200">{area.tamilName}</div>
                <div className="text-[11px] text-amber-300 font-semibold mt-1">
                  ₹{area.deliveryCharge} · {area.estimatedTime}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 text-xs text-emerald-200 flex items-center gap-2">
            <span className="text-base">🎉</span>
            <span>Free delivery applies to all four areas for orders above ₹500!</span>
          </div>
        </div>
      </div>

      {/* Store Location & Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Address Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-2xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>

          <div>
            <h3 className="text-base font-bold text-stone-900">Store Address</h3>
            <p className="text-xs text-stone-500 mt-0.5">Visit our physical supermarket counter</p>
          </div>

          <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-1 bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <p className="font-bold text-stone-900">{storeConfig.storeName}</p>
            <p>{storeConfig.address.line1}</p>
            <p>{storeConfig.address.line2}</p>
            <p>{storeConfig.address.city}, {storeConfig.address.district}</p>
            <p>{storeConfig.address.state} – {storeConfig.address.pincode}</p>
          </div>

          <div className="pt-2 text-xs text-stone-500 flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-700" />
            <span>Store Hours: <strong>{storeConfig.openingHours}</strong></span>
          </div>
        </div>

        {/* Contact & WhatsApp Order */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-2xs space-y-4 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>

            <h3 className="text-base font-bold text-stone-900">Call &amp; WhatsApp Orders</h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Speak directly with our store manager or send grocery list on WhatsApp
            </p>

            <div className="mt-4 space-y-3">
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">Phone Support</span>
                  <a href={`tel:${storeConfig.phone}`} className="font-bold text-sm text-stone-900 font-mono hover:text-emerald-700">
                    {storeConfig.phone}
                  </a>
                </div>
                <a
                  href={`tel:${storeConfig.phone}`}
                  className="px-3 py-1.5 rounded-xl bg-white border border-stone-300 text-stone-800 text-xs font-semibold hover:bg-stone-100 transition-colors"
                >
                  Call Now
                </a>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-700 block">Store WhatsApp</span>
                  <span className="font-bold text-sm text-emerald-950 font-mono">
                    +91 {storeConfig.whatsappNumber.replace(/^91/, "")}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleWhatsAppChat}
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center gap-1 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Chat</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100">
            <button
              type="button"
              onClick={handleWhatsAppChat}
              className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send Grocery List on WhatsApp</span>
            </button>
          </div>
        </div>

      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200">
        <h3 className="text-lg font-bold text-stone-900 mb-4">
          Frequently Asked Questions
        </h3>

        <div className="space-y-3 text-xs sm:text-sm text-stone-700">
          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">
              Do you deliver beyond Annur, Kumarankundru, Pogalur, and Kovilpalayam?
            </span>
            <p className="text-stone-600">
              Currently we prioritize exceptional 30–60 minute service solely within these 4 designated localities in Coimbatore district. For bulk or special temple/function orders outside these areas, please contact our manager on {storeConfig.phone}.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">
              What are the payment options accepted?
            </span>
            <p className="text-stone-600">
              We accept instant UPI payments (Google Pay, PhonePe, Paytm, BHIM), Cash on Delivery, Debit/Credit cards on delivery via mobile POS, and Net Banking.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">
              How does the Free Gift offer work?
            </span>
            <p className="text-stone-600">
              Whenever your cart subtotal reaches ₹2000 or above, you are automatically invited to select a complementary grocery gift (such as 1 kg Sugar pack, 500 ml Cooking Oil, Steel Container set, or heavy canvas bag) which is added to your parcel at ₹0.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
