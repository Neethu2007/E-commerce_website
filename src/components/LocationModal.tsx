/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Delivery Location Modal:
 * Enforces delivery strictly to Annur, Kumarankundru, Pogalur, and Kovilpalayam.
 * Allows entering pincode & street/landmark, alerts for unserved zones,
 * and remembers the customer's choice in localStorage.
 */

import React, { useState, useEffect } from "react";
import { 
  MapPin, 
  Clock, 
  Truck, 
  CheckCircle2, 
  AlertCircle, 
  X,
  Sparkles
} from "lucide-react";
import { useStore, UserLocation } from "../context/StoreContext";

export const LocationModal: React.FC = () => {
  const { 
    isLocationModalOpen, 
    setIsLocationModalOpen, 
    storeConfig, 
    location, 
    setLocation,
    t 
  } = useStore();

  const [selectedAreaId, setSelectedAreaId] = useState<string>("annur");
  const [street, setStreet] = useState<string>("");
  const [landmark, setLandmark] = useState<string>("");
  const [pincode, setPincode] = useState<string>("641653");
  const [unservedAreaInput, setUnservedAreaInput] = useState<string>("");
  const [unservedError, setUnservedError] = useState<string | null>(null);

  // Sync with current location if already set
  useEffect(() => {
    if (location) {
      setSelectedAreaId(location.areaId);
      setStreet(location.street || "");
      setLandmark(location.landmark || "");
      setPincode(location.pincode || "641653");
    }
  }, [location, isLocationModalOpen]);

  // When selected area changes, suggest default pincode
  const handleAreaChange = (areaId: string) => {
    setSelectedAreaId(areaId);
    setUnservedError(null);
    const area = storeConfig.deliveryAreas[areaId];
    if (area && area.pincodes.length > 0) {
      setPincode(area.pincodes[0]);
    }
  };

  const handleCustomAreaCheck = (otherText: string) => {
    setUnservedAreaInput(otherText);
    if (!otherText.trim()) {
      setUnservedError(null);
      return;
    }
    const lower = otherText.trim().toLowerCase();
    const matchesAny = Object.values(storeConfig.deliveryAreas).some(
      (a) => a.name.toLowerCase().includes(lower) || a.id.toLowerCase().includes(lower)
    );
    if (!matchesAny) {
      setUnservedError(t.areaNotServedAlert);
    } else {
      setUnservedError(null);
    }
  };

  const handleConfirmLocation = (e: React.FormEvent) => {
    e.preventDefault();

    // Check pincode against allowed areas
    const area = storeConfig.deliveryAreas[selectedAreaId];
    if (!area) {
      setUnservedError(t.areaNotServedAlert);
      return;
    }

    const cleanPincode = pincode.trim();
    if (cleanPincode.length !== 6 || !/^\d{6}$/.test(cleanPincode)) {
      setUnservedError("Please enter a valid 6-digit Indian Postal Pincode (e.g. 641653).");
      return;
    }

    // Save location to context and localStorage
    const newLoc: UserLocation = {
      areaId: selectedAreaId,
      pincode: cleanPincode,
      street: street.trim(),
      landmark: landmark.trim()
    };

    setLocation(newLoc);
    setIsLocationModalOpen(false);
  };

  if (!isLocationModalOpen) return null;

  const currentArea = storeConfig.deliveryAreas[selectedAreaId];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-stone-200 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="location-modal-title"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-white p-5 sm:p-6 relative">
          {location && (
            <button
              type="button"
              onClick={() => setIsLocationModalOpen(false)}
              className="absolute right-4 top-4 p-1 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-600/50 transition-colors"
              aria-label="Close location modal"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          <div className="flex items-center gap-2 text-emerald-200 text-xs font-semibold mb-1">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Coimbatore Local Grocery Delivery Hub</span>
          </div>

          <h2 id="location-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight">
            {t.locationModalTitle}
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 mt-1 leading-relaxed">
            {t.locationModalSubtitle}
          </p>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleConfirmLocation} className="p-5 sm:p-6 space-y-5">
          
          {/* 4 Allowed Delivery Localities */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2.5">
              {t.chooseArea} <span className="text-emerald-600 font-normal">(4 Designated Regions)</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.values(storeConfig.deliveryAreas).map((area) => {
                const isSelected = selectedAreaId === area.id;
                return (
                  <button
                    type="button"
                    key={area.id}
                    onClick={() => handleAreaChange(area.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all relative ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-600/20 shadow-xs"
                        : "border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-bold text-sm text-stone-900 block">
                          {area.name}
                        </span>
                        <span className="text-xs text-emerald-700 font-medium block">
                          {area.tamilName}
                        </span>
                      </div>
                      {isSelected ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-stone-300 shrink-0" />
                      )}
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-600">
                      <span className="flex items-center gap-1">
                        <Truck className="w-3 h-3 text-stone-400" />
                        <span className="font-semibold text-stone-800">₹{area.deliveryCharge}</span>
                      </span>
                      <span className="flex items-center gap-1 text-stone-500">
                        <Clock className="w-3 h-3 text-stone-400" />
                        <span>{area.estimatedTime}</span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Delivery perk callout */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center gap-2.5 text-xs text-amber-900">
            <span className="text-base">🎉</span>
            <div>
              <span className="font-bold">Free Delivery:</span> Orders above ₹500 get completely free delivery in Annur, Kumarankundru, Pogalur, and Kovilpalayam!
            </div>
          </div>

          {/* Address & Pincode input */}
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t.enterPincode}
                </label>
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    setPincode(val);
                  }}
                  placeholder="e.g. 641653"
                  className="w-full px-3 py-2 rounded-lg border border-stone-200 focus:border-emerald-600 focus:outline-none text-sm text-stone-900 font-mono"
                  required
                />
                <span className="text-[10px] text-stone-400 mt-0.5 block">
                  Applicable: {currentArea?.pincodes.join(", ")}
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t.landmark} (Optional)
                </label>
                <input
                  type="text"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  placeholder="e.g. Near Bus Stand / Temple"
                  className="w-full px-3 py-2 rounded-lg border border-stone-200 focus:border-emerald-600 focus:outline-none text-sm text-stone-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Street / Door Number (Optional for now, required at checkout)
              </label>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="e.g. 14, Sathy Main Road"
                className="w-full px-3 py-2 rounded-lg border border-stone-200 focus:border-emerald-600 focus:outline-none text-sm text-stone-900"
              />
            </div>

            {/* Check other location search to test unserved zone validation */}
            <div>
              <label className="block text-[11px] font-medium text-stone-500 mb-1">
                Searching another town/village in Coimbatore?
              </label>
              <input
                type="text"
                value={unservedAreaInput}
                onChange={(e) => handleCustomAreaCheck(e.target.value)}
                placeholder="Type other locality to check coverage..."
                className="w-full px-3 py-1.5 rounded-lg border border-stone-200 text-xs text-stone-800 focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Unserved alert */}
          {unservedError && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-start gap-2 text-xs text-red-800 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{unservedError}</p>
                <p className="text-[11px] text-red-700 mt-1">
                  We are rapidly expanding to other parts of Coimbatore. Please choose from our 4 active regions to proceed.
                </p>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              <span>{t.verifyAndContinue}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
