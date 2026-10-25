/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Order Tracking View Component:
 * Look up order status by order ID (e.g. SMS-847291)
 * Shows animated step timeline, item summary, delivery address, and store support.
 */

import React, { useState } from "react";
import { 
  Search, 
  Package, 
  Truck, 
  CheckCircle, 
  Clock, 
  Phone, 
  MapPin, 
  AlertCircle,
  FileText,
  MessageCircle
} from "lucide-react";
import { useStore, PlacedOrder } from "../context/StoreContext";
import { InvoiceModal } from "./InvoiceModal";

export const OrderTrackingView: React.FC = () => {
  const { 
    ordersHistory, 
    findOrderById, 
    storeConfig,
    t 
  } = useStore();

  const [inputOrderId, setInputOrderId] = useState<string>(
    ordersHistory.length > 0 ? ordersHistory[0].orderId : ""
  );
  const [searchedOrder, setSearchedOrder] = useState<PlacedOrder | null>(
    ordersHistory.length > 0 ? ordersHistory[0] : null
  );
  const [searchError, setSearchError] = useState<string | null>(null);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputOrderId.trim()) return;

    const matched = findOrderById(inputOrderId);
    if (matched) {
      setSearchedOrder(matched);
      setSearchError(null);
    } else {
      setSearchedOrder(null);
      setSearchError(`No order found matching "${inputOrderId}". Please check your receipt or order confirmation SMS.`);
    }
  };

  // Status timeline steps
  const steps = [
    { id: "placed", title: t.statusPlaced, desc: "Order verified by Annur store desk", icon: Package },
    { id: "packed", title: t.statusPacked, desc: "Picked & packed fresh with quality seal", icon: CheckCircle },
    { id: "out_for_delivery", title: t.statusOutForDelivery, desc: "Out on delivery vehicle in your area", icon: Truck },
    { id: "delivered", title: t.statusDelivered, desc: "Delivered to customer doorstep", icon: Clock }
  ];

  // Map order status to numeric step index
  const getStepIndex = (status: PlacedOrder["orderStatus"]) => {
    switch (status) {
      case "placed": return 1;
      case "packed": return 2;
      case "out_for_delivery": return 3;
      case "delivered": return 4;
      default: return 1;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      
      {/* Title */}
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          {t.trackOrderTitle}
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mt-1">
          {t.trackOrderSubtitle}
        </p>
      </div>

      {/* Search Input Box */}
      <form onSubmit={handleSearch} className="max-w-md mx-auto">
        <div className="flex rounded-2xl border border-stone-300 bg-white shadow-xs overflow-hidden p-1 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20">
          <input
            type="text"
            value={inputOrderId}
            onChange={(e) => setInputOrderId(e.target.value)}
            placeholder="e.g. SMS-847291"
            className="flex-1 px-4 py-2.5 text-xs sm:text-sm text-stone-900 font-mono uppercase placeholder:normal-case placeholder:font-sans focus:outline-none"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <Search className="w-3.5 h-3.5" />
            <span>{t.checkStatus}</span>
          </button>
        </div>

        {/* Recent orders quick chips */}
        {ordersHistory.length > 0 && (
          <div className="mt-3 flex items-center justify-center gap-2 flex-wrap text-[11px] text-stone-500">
            <span>Recent orders:</span>
            {ordersHistory.slice(0, 3).map((o) => (
              <button
                key={o.orderId}
                type="button"
                onClick={() => {
                  setInputOrderId(o.orderId);
                  setSearchedOrder(o);
                  setSearchError(null);
                }}
                className="px-2 py-0.5 rounded-md bg-stone-100 hover:bg-emerald-50 text-emerald-800 font-mono font-semibold border border-stone-200 transition-colors"
              >
                {o.orderId}
              </button>
            ))}
          </div>
        )}
      </form>

      {/* Error Notice */}
      {searchError && (
        <div className="max-w-md mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-amber-900 animate-in fade-in">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">{searchError}</p>
            <p className="text-[11px] text-amber-700 mt-1">
              Need assistance? Call our Annur store directly at {storeConfig.phone}.
            </p>
          </div>
        </div>
      )}

      {/* Searched Order Details */}
      {searchedOrder && (
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          
          {/* Top Banner */}
          <div className="bg-emerald-800 text-white p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-emerald-200 text-[10px] font-bold uppercase tracking-wider block">
                Order Tracking Details
              </span>
              <div className="text-lg sm:text-xl font-black font-mono mt-0.5">
                #{searchedOrder.orderId}
              </div>
              <div className="text-xs text-emerald-100 mt-0.5">
                Placed on {new Date(searchedOrder.createdAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsInvoiceOpen(true)}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Invoice</span>
              </button>
            </div>
          </div>

          {/* Progress Timeline */}
          <div className="p-6 sm:p-8 border-b border-stone-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-6">
              Live Delivery Pipeline: {searchedOrder.areaName}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {steps.map((step, idx) => {
                const stepNum = idx + 1;
                const activeIndex = getStepIndex(searchedOrder.orderStatus);
                const isCompleted = stepNum <= activeIndex;
                const isCurrent = stepNum === activeIndex;

                const StepIcon = step.icon;

                return (
                  <div
                    key={step.id}
                    className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                      isCurrent
                        ? "border-emerald-600 bg-emerald-50/70 shadow-xs ring-2 ring-emerald-600/20"
                        : isCompleted
                        ? "border-emerald-200 bg-emerald-50/30 text-stone-700"
                        : "border-stone-200 bg-stone-50/50 text-stone-400 opacity-60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isCompleted ? "bg-emerald-600 text-white" : "bg-stone-200 text-stone-500"
                      }`}>
                        <StepIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold">0{stepNum}</span>
                    </div>

                    <div>
                      <h4 className={`text-xs font-bold ${isCurrent ? "text-emerald-950" : "text-stone-900"}`}>
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Delivery & Items Summary */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-stone-50/50 text-xs">
            <div>
              <h4 className="font-bold text-stone-400 uppercase tracking-wider text-[10px] mb-2">
                Recipient &amp; Delivery Slot
              </h4>
              <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-1.5 text-stone-700">
                <div className="font-bold text-stone-900 text-sm">{searchedOrder.customerName}</div>
                <div className="font-mono text-stone-600">+91 {searchedOrder.customerPhone}</div>
                <div className="text-stone-600 leading-relaxed pt-1">
                  {searchedOrder.addressLine}
                  {searchedOrder.landmark && <span>, Near {searchedOrder.landmark}</span>}
                  <br />
                  <span className="font-semibold text-emerald-800">{searchedOrder.areaName}</span> – {searchedOrder.pincode}
                </div>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-stone-600">
                  <span>Delivery Slot:</span>
                  <span className="font-bold text-stone-900">{searchedOrder.deliverySlot}</span>
                </div>
                {searchedOrder.paymentDetails?.bankDetails && (
                  <div className="pt-2 border-t border-stone-100 text-[11px] space-y-1">
                    <div className="flex justify-between items-center text-blue-900 font-bold">
                      <span>Bank Payment:</span>
                      <span className="font-mono text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded-xs">
                        {searchedOrder.paymentDetails.bankDetails.bankName}
                      </span>
                    </div>
                    <div className="flex justify-between text-stone-500">
                      <span>Debited A/C:</span>
                      <span className="font-mono">{searchedOrder.paymentDetails.bankDetails.accountNumberMasked}</span>
                    </div>
                    <div className="flex justify-between text-stone-500">
                      <span>Txn Ref:</span>
                      <span className="font-mono font-bold text-emerald-800">{searchedOrder.paymentDetails.transactionId}</span>
                    </div>
                  </div>
                )}
                {searchedOrder.paymentDetails?.cardDetails && (
                  <div className="pt-2 border-t border-stone-100 text-[11px] flex justify-between">
                    <span className="text-stone-500">Card Payment:</span>
                    <span className="font-mono font-bold">{searchedOrder.paymentDetails.cardDetails.cardNumberMasked} ({searchedOrder.paymentDetails.cardDetails.cardNetwork})</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-stone-400 uppercase tracking-wider text-[10px] mb-2">
                Order Items ({searchedOrder.items.length})
              </h4>
              <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2 max-h-48 overflow-y-auto">
                {searchedOrder.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <div className="truncate pr-2">
                      <span className="font-bold text-stone-900">{item.title}</span>
                      <span className="text-[10px] text-stone-400 block">{item.variantLabel} x {item.quantity}</span>
                    </div>
                    <span className="font-bold text-stone-800 font-mono">₹{item.total}</span>
                  </div>
                ))}
                {searchedOrder.freeGiftName && (
                  <div className="flex justify-between items-center text-xs text-amber-900 pt-1 border-t border-amber-100">
                    <span className="font-bold">🎁 Free Gift: {searchedOrder.freeGiftName}</span>
                    <span className="font-bold text-emerald-700">₹0</span>
                  </div>
                )}
                <div className="pt-2 border-t border-stone-100 flex justify-between font-extrabold text-sm text-stone-900">
                  <span>Grand Total:</span>
                  <span className="text-emerald-800 font-mono">₹{searchedOrder.grandTotal}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Store Support Hotline */}
          <div className="p-4 bg-stone-100 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>{t.needHelp} <strong className="text-stone-900">{storeConfig.phone}</strong></span>
            </div>

            <a
              href={`https://wa.me/${storeConfig.whatsappNumber}?text=Hello%20Sri%20Maneeshwara,%20checking%20status%20for%20order%20${searchedOrder.orderId}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-emerald-800 hover:text-emerald-950"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-700 text-emerald-700" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Invoice Modal */}
      {searchedOrder && isInvoiceOpen && (
        <InvoiceModal
          order={searchedOrder}
          storeConfig={storeConfig}
          isOpen={isInvoiceOpen}
          onClose={() => setIsInvoiceOpen(false)}
        />
      )}
    </div>
  );
};
