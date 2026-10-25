/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Printable Retail Tax Invoice Component for Sri Maneeshwara Super Market
 */

import React from "react";
import { X, Printer, Download, CheckCircle } from "lucide-react";
import { PlacedOrder } from "../context/StoreContext";
import { StoreConfig } from "../config/storeConfig";

interface InvoiceModalProps {
  order: PlacedOrder;
  storeConfig: StoreConfig;
  isOpen: boolean;
  onClose: () => void;
}

export const InvoiceModal: React.FC<InvoiceModalProps> = ({
  order,
  storeConfig,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadInvoiceHTML = () => {
    const invoiceContent = document.getElementById("printable-invoice-content")?.innerHTML;
    if (!invoiceContent) return;

    const fullHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Invoice ${order.orderId} - Sri Maneeshwara Super Market</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1c1917; padding: 24px; max-width: 800px; margin: auto; }
    table { width: 100%; border-collapse: collapse; margin-top: 16px; margin-bottom: 16px; }
    th, td { border: 1px solid #e7e5e4; padding: 8px 12px; text-align: left; font-size: 13px; }
    th { background: #f5f5f4; }
    .text-right { text-align: right; }
    .header { border-bottom: 2px solid #15803d; padding-bottom: 12px; margin-bottom: 16px; }
    .title { font-size: 22px; font-weight: bold; color: #15803d; }
  </style>
</head>
<body>
  ${invoiceContent}
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Invoice-${order.orderId}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-stone-200 overflow-hidden my-6">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="bg-stone-100 px-4 py-3 border-b border-stone-200 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2 text-stone-700 text-xs font-semibold">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Tax Invoice: {order.orderId}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadInvoiceHTML}
              className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download HTML</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Invoice Container */}
        <div id="printable-invoice-content" className="p-6 sm:p-8 text-stone-900 bg-white">
          
          {/* Invoice Header */}
          <div className="border-b-2 border-emerald-700 pb-5 mb-5 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <div className="text-xl sm:text-2xl font-black text-emerald-800 tracking-tight">
                {storeConfig.storeName}
              </div>
              <div className="text-xs font-medium text-emerald-700">
                {storeConfig.storeNameTamil}
              </div>
              <div className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                {storeConfig.address.line1}, {storeConfig.address.line2}<br />
                {storeConfig.address.city}, {storeConfig.address.district} – {storeConfig.address.pincode}<br />
                Phone: {storeConfig.phone} | Timings: 6:30 AM – 10:00 PM
              </div>
            </div>

            <div className="sm:text-right shrink-0">
              <span className="inline-block px-2.5 py-0.5 rounded-sm bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-1">
                Retail Tax Invoice
              </span>
              <div className="text-sm font-extrabold text-stone-900 font-mono">
                #{order.orderId}
              </div>
              <div className="text-xs text-stone-500 mt-0.5">
                Date: {new Date(order.createdAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </div>
              <div className="text-xs text-stone-500 font-mono mt-0.5">
                GSTIN: 33AAAFS0912K1Z8 (Regd.)
              </div>
            </div>
          </div>

          {/* Customer & Delivery Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-5 border-b border-stone-200 text-xs">
            <div>
              <span className="font-bold uppercase tracking-wider text-stone-400 text-[10px] block mb-1">
                Billed &amp; Delivered To:
              </span>
              <div className="font-bold text-stone-900 text-sm">{order.customerName}</div>
              <div className="text-stone-700 font-mono mt-0.5">+91 {order.customerPhone}</div>
              <div className="text-stone-600 mt-1 leading-relaxed">
                {order.addressLine}
                {order.landmark && <span> (Near {order.landmark})</span>}
                <br />
                {order.areaName}, Coimbatore – {order.pincode}
              </div>
            </div>

            <div className="sm:text-right">
              <span className="font-bold uppercase tracking-wider text-stone-400 text-[10px] block mb-1">
                Delivery &amp; Payment:
              </span>
              <div className="text-stone-700">
                <span className="font-semibold">Delivery Slot:</span> {order.deliverySlot}
              </div>
              <div className="text-stone-700 mt-0.5">
                <span className="font-semibold">Estimated Delivery:</span> {order.estimatedDeliveryText}
              </div>
              <div className="text-stone-700 mt-0.5">
                <span className="font-semibold">Payment Mode:</span>{" "}
                <span className="uppercase font-bold text-emerald-800">{order.paymentMethod}</span>
              </div>
              <div className="text-stone-700 mt-0.5">
                <span className="font-semibold">Status:</span>{" "}
                <span className="capitalize font-medium text-emerald-700">{order.paymentStatus}</span>
              </div>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-left text-xs border border-stone-200">
              <thead className="bg-stone-100 text-stone-700 font-bold uppercase text-[10px] tracking-wider border-b border-stone-200">
                <tr>
                  <th className="py-2.5 px-3">#</th>
                  <th className="py-2.5 px-3">Item Description</th>
                  <th className="py-2.5 px-3">Pack</th>
                  <th className="py-2.5 px-3 text-center">Qty</th>
                  <th className="py-2.5 px-3 text-right">Rate</th>
                  <th className="py-2.5 px-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-800">
                {order.items.map((item, index) => (
                  <tr key={index} className="hover:bg-stone-50">
                    <td className="py-2 px-3 text-stone-400 font-mono">{index + 1}</td>
                    <td className="py-2 px-3">
                      <span className="font-bold block text-stone-900">{item.title}</span>
                      <span className="text-[10px] text-stone-500">{item.tamilTitle}</span>
                    </td>
                    <td className="py-2 px-3 font-medium text-stone-600">{item.variantLabel}</td>
                    <td className="py-2 px-3 text-center font-bold">{item.quantity}</td>
                    <td className="py-2 px-3 text-right font-mono">₹{item.price}</td>
                    <td className="py-2 px-3 text-right font-bold font-mono">₹{item.total}</td>
                  </tr>
                ))}

                {/* Free Gift row if eligible */}
                {order.freeGiftName && (
                  <tr className="bg-amber-50/60 font-semibold text-amber-900">
                    <td className="py-2 px-3 text-amber-600">🎁</td>
                    <td className="py-2 px-3" colSpan={2}>
                      <span className="font-bold text-amber-950">FREE GIFT: {order.freeGiftName}</span>
                      <span className="block text-[10px] text-amber-700">Unlocked with order value &gt; ₹2000</span>
                    </td>
                    <td className="py-2 px-3 text-center">1</td>
                    <td className="py-2 px-3 text-right">₹0</td>
                    <td className="py-2 px-3 text-right text-emerald-700 font-bold">FREE (₹0)</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Totals & Bank Payment Details Summary */}
          <div className="mt-4 pt-3 flex flex-col sm:flex-row justify-between items-start gap-4">
            
            {/* Customer Note & Bank Payment Verification Details */}
            <div className="text-xs text-stone-600 max-w-sm space-y-2 flex-1">
              {order.paymentDetails?.bankDetails && (
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl space-y-1">
                  <div className="flex items-center justify-between font-bold text-stone-900 border-b border-stone-200 pb-1">
                    <span>Customer Bank Payment Details</span>
                    <span className="text-[10px] text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded-xs font-mono">
                      AUTHENTICATED
                    </span>
                  </div>
                  <div><span className="text-stone-500">Bank Name:</span> <strong className="text-stone-800">{order.paymentDetails.bankDetails.bankName}</strong></div>
                  <div><span className="text-stone-500">A/C Holder:</span> <span className="font-semibold">{order.paymentDetails.bankDetails.accountHolderName}</span></div>
                  <div><span className="text-stone-500">Debited A/C:</span> <span className="font-mono">{order.paymentDetails.bankDetails.accountNumberMasked}</span> ({order.paymentDetails.bankDetails.accountType.toUpperCase()})</div>
                  <div><span className="text-stone-500">IFSC Code:</span> <span className="font-mono font-bold text-stone-900">{order.paymentDetails.bankDetails.ifscCode}</span></div>
                  <div><span className="text-stone-500">Txn / Ref No:</span> <span className="font-mono text-emerald-800 font-bold">{order.paymentDetails.transactionId}</span></div>
                </div>
              )}

              {order.paymentDetails?.cardDetails && (
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl space-y-1">
                  <div className="flex items-center justify-between font-bold text-stone-900 border-b border-stone-200 pb-1">
                    <span>Card Payment Authorization</span>
                    <span className="text-[10px] text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded-xs">
                      {order.paymentDetails.cardDetails.cardNetwork}
                    </span>
                  </div>
                  <div><span className="text-stone-500">Cardholder:</span> <span className="font-semibold">{order.paymentDetails.cardDetails.cardholderName}</span></div>
                  <div><span className="text-stone-500">Card Number:</span> <span className="font-mono">{order.paymentDetails.cardDetails.cardNumberMasked}</span></div>
                  <div><span className="text-stone-500">Bank / Auth Code:</span> <span className="font-mono font-bold">{order.paymentDetails.cardDetails.authCode}</span></div>
                </div>
              )}

              {order.paymentDetails?.upiDetails && (
                <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl space-y-1">
                  <div className="font-bold text-stone-900 border-b border-stone-200 pb-1">
                    UPI Payment Details
                  </div>
                  {order.paymentDetails.upiDetails.customerUpiId && (
                    <div><span className="text-stone-500">Customer UPI ID:</span> <span className="font-mono font-semibold">{order.paymentDetails.upiDetails.customerUpiId}</span></div>
                  )}
                  <div><span className="text-stone-500">UPI Ref / UTR:</span> <span className="font-mono font-bold text-emerald-800">{order.paymentDetails.upiDetails.utrRefNumber}</span></div>
                </div>
              )}

              <div className="text-[11px] text-stone-500 pt-1">
                <span className="font-bold text-stone-700">Customer Note:</span>{" "}
                <span className="italic">{order.deliveryNotes || "Thank you for shopping local with Sri Maneeshwara Super Market!"}</span>
              </div>
            </div>

            <div className="w-full sm:w-64 space-y-1.5 text-xs text-stone-700 border-t sm:border-t-0 sm:border-l sm:pl-4 border-stone-200">
              <div className="flex justify-between">
                <span>Items Subtotal:</span>
                <span className="font-semibold text-stone-900">₹{order.subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge ({order.areaName}):</span>
                <span className="font-semibold">
                  {order.deliveryFee === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : `₹${order.deliveryFee}`}
                </span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Total Discount Saved:</span>
                  <span>-₹{order.discount}</span>
                </div>
              )}
              <div className="pt-2 border-t-2 border-stone-800 flex justify-between font-extrabold text-sm text-stone-900">
                <span>Grand Total:</span>
                <span className="text-base text-emerald-800 font-mono">₹{order.grandTotal}</span>
              </div>
            </div>
          </div>

          {/* Footer declaration */}
          <div className="mt-8 pt-4 border-t border-stone-200 text-[10px] text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              Computer generated tax invoice. Goods once sold can be exchanged within 24 hours at Annur counter.
            </div>
            <div className="font-semibold text-stone-600">
              For Sri Maneeshwara Super Market
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
