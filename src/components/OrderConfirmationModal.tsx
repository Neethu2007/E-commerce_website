/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Order Confirmation Modal:
 * Displays order number, estimated delivery time, WhatsApp order dispatch button,
 * invoice generator trigger, and live order tracking link.
 */

import React, { useState } from "react";
import { 
  CheckCircle, 
  Clock, 
  MapPin, 
  MessageCircle, 
  FileText, 
  ArrowRight, 
  X,
  PackageCheck,
  Sparkles
} from "lucide-react";
import { useStore } from "../context/StoreContext";
import { InvoiceModal } from "./InvoiceModal";

export const OrderConfirmationModal: React.FC = () => {
  const {
    lastPlacedOrder,
    setLastPlacedOrder,
    storeConfig,
    setCurrentView,
    t
  } = useStore();

  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);

  if (!lastPlacedOrder) return null;

  // Construct WhatsApp prefilled message
  const handleSendWhatsAppOrder = () => {
    const lines = [
      `*Sri Maneeshwara Super Market - New Order*`,
      `📦 *Order ID:* ${lastPlacedOrder.orderId}`,
      `👤 *Customer:* ${lastPlacedOrder.customerName}`,
      `📞 *Phone:* ${lastPlacedOrder.customerPhone}`,
      `📍 *Delivery Area:* ${lastPlacedOrder.areaName} (${lastPlacedOrder.pincode})`,
      `🏠 *Address:* ${lastPlacedOrder.addressLine}${lastPlacedOrder.landmark ? ` (Near ${lastPlacedOrder.landmark})` : ""}`,
      `⏰ *Delivery Slot:* ${lastPlacedOrder.deliverySlot}`,
      `💳 *Payment Method:* ${lastPlacedOrder.paymentMethod.toUpperCase()}`,
      ...(lastPlacedOrder.paymentDetails?.bankDetails ? [
        `🏦 *Bank Name:* ${lastPlacedOrder.paymentDetails.bankDetails.bankName}`,
        `👤 *A/C Holder:* ${lastPlacedOrder.paymentDetails.bankDetails.accountHolderName}`,
        `🔢 *Debited A/C:* ${lastPlacedOrder.paymentDetails.bankDetails.accountNumberMasked} (${lastPlacedOrder.paymentDetails.bankDetails.accountType.toUpperCase()})`,
        `🏢 *IFSC Code:* ${lastPlacedOrder.paymentDetails.bankDetails.ifscCode}`,
        `🔖 *Bank Txn Ref:* ${lastPlacedOrder.paymentDetails.transactionId}`,
        `✅ *Status:* PAID & VERIFIED ONLINE`
      ] : []),
      ...(lastPlacedOrder.paymentDetails?.cardDetails ? [
        `💳 *Card:* ${lastPlacedOrder.paymentDetails.cardDetails.cardNetwork} (${lastPlacedOrder.paymentDetails.cardDetails.cardNumberMasked})`,
        `🏦 *Issuing Bank:* ${lastPlacedOrder.paymentDetails.cardDetails.bankName}`,
        `🔖 *Auth Code:* ${lastPlacedOrder.paymentDetails.cardDetails.authCode}`,
        `✅ *Status:* PAID ONLINE`
      ] : []),
      ...(lastPlacedOrder.paymentDetails?.upiDetails ? [
        ...(lastPlacedOrder.paymentDetails.upiDetails.customerUpiId ? [`📱 *UPI ID:* ${lastPlacedOrder.paymentDetails.upiDetails.customerUpiId}`] : []),
        `🔖 *UPI UTR / Ref:* ${lastPlacedOrder.paymentDetails.upiDetails.utrRefNumber}`,
        `✅ *Status:* PAID ONLINE`
      ] : []),
      ``,
      `*Items Ordered:*`
    ];

    lastPlacedOrder.items.forEach((item, idx) => {
      lines.push(`${idx + 1}. ${item.title} (${item.variantLabel}) x ${item.quantity} = ₹${item.total}`);
    });

    if (lastPlacedOrder.freeGiftName) {
      lines.push(`🎁 *Free Gift:* ${lastPlacedOrder.freeGiftName} (₹0)`);
    }

    lines.push(``);
    lines.push(`💰 *Item Subtotal:* ₹${lastPlacedOrder.subtotal}`);
    lines.push(`🚚 *Delivery Fee:* ${lastPlacedOrder.deliveryFee === 0 ? "FREE" : `₹${lastPlacedOrder.deliveryFee}`}`);
    if (lastPlacedOrder.discount > 0) {
      lines.push(`🏷️ *Discount Saved:* -₹${lastPlacedOrder.discount}`);
    }
    lines.push(`*GRAND TOTAL: ₹${lastPlacedOrder.grandTotal}*`);
    if (lastPlacedOrder.deliveryNotes) {
      lines.push(`📝 *Note:* ${lastPlacedOrder.deliveryNotes}`);
    }

    const encoded = encodeURIComponent(lines.join("\n"));
    const waUrl = `https://wa.me/${storeConfig.whatsappNumber}?text=${encoded}`;
    window.open(waUrl, "_blank");
  };

  const handleTrackOrder = () => {
    setLastPlacedOrder(null);
    setCurrentView("track");
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
        <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-stone-200 my-6">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-white p-6 text-center relative">
            <button
              type="button"
              onClick={() => setLastPlacedOrder(null)}
              className="absolute right-4 top-4 p-1 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-600/50"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-full bg-emerald-500/30 border-2 border-emerald-300 flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-xl sm:text-2xl font-black tracking-tight">
              {t.orderSuccessTitle}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 mt-1">
              Your grocery order has been received by Sri Maneeshwara Annur Store.
            </p>
          </div>

          {/* Details Card */}
          <div className="p-5 sm:p-6 space-y-4">
            
            {/* Key Order Info Grid */}
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs">
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                  {t.orderNumber}
                </span>
                <span className="font-extrabold text-sm text-stone-900 font-mono">
                  {lastPlacedOrder.orderId}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                  {t.estimatedDelivery}
                </span>
                <span className="font-bold text-xs text-emerald-700 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{lastPlacedOrder.estimatedDeliveryText}</span>
                </span>
              </div>

              <div className="col-span-2 pt-2 border-t border-stone-200/60">
                <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                  {t.deliveryTo}
                </span>
                <span className="font-medium text-stone-700 flex items-start gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                  <span>
                    {lastPlacedOrder.customerName}, {lastPlacedOrder.addressLine}, {lastPlacedOrder.areaName} ({lastPlacedOrder.pincode})
                  </span>
                </span>
              </div>
            </div>

            {/* Customer Bank Payment Verification Card */}
            {lastPlacedOrder.paymentDetails?.bankDetails && (
              <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl text-xs space-y-1.5 text-blue-950">
                <div className="flex items-center justify-between font-bold border-b border-blue-200 pb-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Customer Bank Payment Verified</span>
                  </span>
                  <span className="font-mono text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded-xs">
                    PAID ONLINE
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-0.5 text-[11px]">
                  <div>
                    <span className="text-blue-700 block">Bank Name:</span>
                    <strong className="text-stone-900">{lastPlacedOrder.paymentDetails.bankDetails.bankName}</strong>
                  </div>
                  <div>
                    <span className="text-blue-700 block">Account Holder:</span>
                    <strong className="text-stone-900">{lastPlacedOrder.paymentDetails.bankDetails.accountHolderName}</strong>
                  </div>
                  <div>
                    <span className="text-blue-700 block">Debited Account:</span>
                    <span className="font-mono font-bold text-stone-900">{lastPlacedOrder.paymentDetails.bankDetails.accountNumberMasked}</span>
                  </div>
                  <div>
                    <span className="text-blue-700 block">IFSC Code:</span>
                    <span className="font-mono font-bold text-stone-900">{lastPlacedOrder.paymentDetails.bankDetails.ifscCode}</span>
                  </div>
                </div>
                <div className="pt-1 border-t border-blue-200 flex items-center justify-between text-[11px]">
                  <span className="text-blue-700">Bank Txn Ref ID:</span>
                  <span className="font-mono font-bold text-emerald-800">{lastPlacedOrder.paymentDetails.transactionId}</span>
                </div>
              </div>
            )}

            {/* Card Payment Details Card */}
            {lastPlacedOrder.paymentDetails?.cardDetails && (
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1 text-stone-800">
                <div className="flex items-center justify-between font-bold border-b border-stone-200 pb-1">
                  <span>Card Payment Authorized</span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded-xs">PAID</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Card:</span>
                  <span className="font-mono font-bold">{lastPlacedOrder.paymentDetails.cardDetails.cardNetwork} ({lastPlacedOrder.paymentDetails.cardDetails.cardNumberMasked})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Auth Code:</span>
                  <span className="font-mono font-bold text-emerald-800">{lastPlacedOrder.paymentDetails.cardDetails.authCode}</span>
                </div>
              </div>
            )}

            {/* UPI Details Card */}
            {lastPlacedOrder.paymentDetails?.upiDetails && (
              <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1 text-stone-800">
                <div className="flex items-center justify-between font-bold border-b border-stone-200 pb-1">
                  <span>UPI Payment Details</span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded-xs">PAID</span>
                </div>
                {lastPlacedOrder.paymentDetails.upiDetails.customerUpiId && (
                  <div className="flex justify-between">
                    <span className="text-stone-500">Customer UPI ID:</span>
                    <span className="font-mono font-semibold">{lastPlacedOrder.paymentDetails.upiDetails.customerUpiId}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-stone-500">UPI Ref / UTR:</span>
                  <span className="font-mono font-bold text-emerald-800">{lastPlacedOrder.paymentDetails.upiDetails.utrRefNumber}</span>
                </div>
              </div>
            )}

            {/* Free Gift callout in confirmation */}
            {lastPlacedOrder.freeGiftName && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-2 text-xs text-amber-900">
                <span className="text-base">🎁</span>
                <div>
                  <span className="font-bold">Free Gift Included:</span> {lastPlacedOrder.freeGiftName} (₹0)
                </div>
              </div>
            )}

            {/* Primary Action Buttons */}
            <div className="space-y-2.5 pt-2">
              {/* WhatsApp Button */}
              <button
                type="button"
                onClick={handleSendWhatsAppOrder}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.whatsappOrderButton}</span>
              </button>

              {/* Download / Print Invoice Button */}
              <button
                type="button"
                onClick={() => setIsInvoiceOpen(true)}
                className="w-full py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-stone-300 transition-colors"
              >
                <FileText className="w-4 h-4 text-stone-600" />
                <span>{t.downloadInvoice}</span>
              </button>

              {/* Track Order Button */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleTrackOrder}
                  className="py-2.5 px-3 rounded-xl border border-emerald-300 hover:bg-emerald-50 text-emerald-800 font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                >
                  <PackageCheck className="w-3.5 h-3.5" />
                  <span>{t.trackThisOrder}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLastPlacedOrder(null)}
                  className="py-2.5 px-3 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-700 font-medium text-xs flex items-center justify-center gap-1 transition-colors"
                >
                  <span>{t.continueShopping}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Print Modal */}
      {isInvoiceOpen && (
        <InvoiceModal
          order={lastPlacedOrder}
          storeConfig={storeConfig}
          isOpen={isInvoiceOpen}
          onClose={() => setIsInvoiceOpen(false)}
        />
      )}
    </>
  );
};
