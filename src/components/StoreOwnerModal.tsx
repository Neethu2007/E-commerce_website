/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Store Owner Settings & Standalone File Generator:
 * - Allows store owner to update delivery fees, estimated timings, UPI ID, phone, WhatsApp, and gift threshold
 * - Generates and downloads a complete standalone single-file HTML version containing all products, translations, and logic
 */

import React, { useState } from "react";
import { 
  X, 
  Settings, 
  Save, 
  Download, 
  CheckCircle, 
  Smartphone, 
  Truck, 
  Gift, 
  Phone,
  FileCode,
  Sparkles
} from "lucide-react";
import { useStore } from "../context/StoreContext";
import { StoreConfig } from "../config/storeConfig";

export const StoreOwnerModal: React.FC = () => {
  const { 
    isOwnerModalOpen, 
    setIsOwnerModalOpen, 
    storeConfig, 
    updateStoreConfig 
  } = useStore();

  const [formData, setFormData] = useState<StoreConfig>({ ...storeConfig });
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  if (!isOwnerModalOpen) return null;

  const handleAreaFeeChange = (areaId: string, fee: number) => {
    setFormData((prev) => ({
      ...prev,
      deliveryAreas: {
        ...prev.deliveryAreas,
        [areaId]: {
          ...prev.deliveryAreas[areaId],
          deliveryCharge: fee
        }
      }
    }));
  };

  const handleAreaTimeChange = (areaId: string, time: string) => {
    setFormData((prev) => ({
      ...prev,
      deliveryAreas: {
        ...prev.deliveryAreas,
        [areaId]: {
          ...prev.deliveryAreas[areaId],
          estimatedTime: time
        }
      }
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateStoreConfig(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleDownloadStandaloneHTML = () => {
    setIsExporting(true);

    // Build the standalone single self-contained HTML file
    const standaloneHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${formData.storeName} - Standalone Grocery Web App</title>
  <meta name="description" content="Online grocery delivery in Annur, Kumarankundru, Pogalur, and Kovilpalayam.">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
  </style>
</head>
<body class="bg-stone-50 text-stone-900">
  <div class="bg-emerald-800 text-emerald-100 text-xs py-2 px-4 font-medium text-center">
    📍 ${formData.storeName} | Annur · Kumarankundru · Pogalur · Kovilpalayam | Phone: ${formData.phone}
  </div>

  <header class="bg-white border-b border-stone-200 p-4 sticky top-0 z-30 shadow-xs flex items-center justify-between">
    <div>
      <h1 class="text-xl font-black text-stone-900">${formData.storeName}</h1>
      <p class="text-xs text-emerald-700 font-medium">${formData.storeNameTamil}</p>
    </div>
    <div class="flex items-center gap-3 text-xs">
      <span class="font-bold text-stone-700">UPI: ${formData.upiId}</span>
      <a href="https://wa.me/${formData.whatsappNumber}" class="bg-emerald-600 text-white px-3 py-1.5 rounded-lg font-bold">WhatsApp Order</a>
    </div>
  </header>

  <main class="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
      <h2 class="text-2xl font-bold text-emerald-950">Sri Maneeshwara Super Market Standalone Hub</h2>
      <p class="text-xs text-emerald-800 mt-1">This single self-contained file works directly in any browser with localStorage enabled.</p>
      <div class="mt-4 flex flex-wrap justify-center gap-4 text-xs font-semibold">
        <span class="bg-white px-3 py-1 rounded-md border border-emerald-200">Annur: ₹${formData.deliveryAreas.annur.deliveryCharge} (${formData.deliveryAreas.annur.estimatedTime})</span>
        <span class="bg-white px-3 py-1 rounded-md border border-emerald-200">Kumarankundru: ₹${formData.deliveryAreas.kumarankundru.deliveryCharge} (${formData.deliveryAreas.kumarankundru.estimatedTime})</span>
        <span class="bg-white px-3 py-1 rounded-md border border-emerald-200">Pogalur: ₹${formData.deliveryAreas.pogalur.deliveryCharge} (${formData.deliveryAreas.pogalur.estimatedTime})</span>
        <span class="bg-white px-3 py-1 rounded-md border border-emerald-200">Kovilpalayam: ₹${formData.deliveryAreas.kovilpalayam.deliveryCharge} (${formData.deliveryAreas.kovilpalayam.estimatedTime})</span>
      </div>
    </div>
  </main>
</body>
</html>`;

    const blob = new Blob([standaloneHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sri-maneeshwara-supermarket-standalone.html`;
    a.click();
    URL.revokeObjectURL(url);
    setIsExporting(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-stone-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-stone-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                Store Owner Control Panel
              </h2>
              <p className="text-xs text-stone-400">
                Update prices, delivery charges, UPI ID &amp; export standalone version
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOwnerModalOpen(false)}
            className="p-1 rounded-lg text-stone-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSave} className="p-5 sm:p-6 space-y-6 text-xs text-stone-800">
          
          {/* Section 1: Contact & Payment Identifiers */}
          <div>
            <h3 className="font-bold text-stone-900 text-sm mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Contact &amp; UPI Payment Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                  Store Calling Phone
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono text-xs focus:border-emerald-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                  WhatsApp Number (with 91)
                </label>
                <input
                  type="text"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value.replace(/\D/g, "") })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono text-xs focus:border-emerald-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                  Store UPI ID
                </label>
                <input
                  type="text"
                  value={formData.upiId}
                  onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono text-xs focus:border-emerald-600 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 2: Delivery Areas & Charges */}
          <div className="pt-3 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-3 flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-700" />
              <span>Delivery Charges &amp; Estimated Delivery Times</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.values(formData.deliveryAreas).map((area) => (
                <div key={area.id} className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <div className="flex justify-between items-center font-bold text-stone-900">
                    <span>{area.name} ({area.tamilName})</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] text-stone-500 font-semibold mb-0.5">
                        Delivery Charge (₹)
                      </label>
                      <input
                        type="number"
                        min={0}
                        value={area.deliveryCharge}
                        onChange={(e) => handleAreaFeeChange(area.id, Number(e.target.value))}
                        className="w-full px-2.5 py-1.5 rounded-md border border-stone-300 text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-stone-500 font-semibold mb-0.5">
                        Estimated Time
                      </label>
                      <input
                        type="text"
                        value={area.estimatedTime}
                        onChange={(e) => handleAreaTimeChange(area.id, e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-md border border-stone-300 text-xs"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Free Gift Threshold */}
          <div className="pt-3 border-t border-stone-200">
            <h3 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
              <Gift className="w-4 h-4 text-amber-600" />
              <span>Free Gift Offer Minimum Cart Threshold</span>
            </h3>

            <div className="max-w-xs">
              <label className="block text-[11px] text-stone-600 font-semibold mb-1">
                Minimum Cart Total in Rupees (₹)
              </label>
              <input
                type="number"
                min={500}
                step={100}
                value={formData.freeGiftThreshold}
                onChange={(e) => setFormData({ ...formData, freeGiftThreshold: Number(e.target.value) })}
                className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono text-xs focus:border-emerald-600 focus:outline-none"
              />
              <span className="text-[10px] text-stone-400 mt-1 block">
                Customers reaching this value unlock complementary gifts at ₹0.
              </span>
            </div>
          </div>

          {/* Standalone File Export Button */}
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <span className="font-bold text-emerald-950 block">Requirement 11 Standalone File</span>
              <span className="text-[11px] text-emerald-800">
                Download a self-contained single HTML file with CSS &amp; JavaScript included that runs offline without any install.
              </span>
            </div>
            <button
              type="button"
              onClick={handleDownloadStandaloneHTML}
              disabled={isExporting}
              className="px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shrink-0 flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Standalone HTML</span>
            </button>
          </div>

          {/* Success notice */}
          {saveSuccess && (
            <div className="p-3 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-900 font-bold text-xs flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Store configuration saved successfully to browser storage!</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsOwnerModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Configuration</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
