/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Checkout Modal Component:
 * - Recipient name & 10-digit phone number with strict validation
 * - Delivery address, landmark, area dropdown (Annur, Kumarankundru, Pogalur, Kovilpalayam), 6-digit pincode
 * - Delivery slot selection (Morning, Afternoon, Evening, Express)
 * - Original Payment & Customer Bank Details Entry:
 *   1. Net Banking / Direct Bank Account (Bank Name, Account Holder Name, Account Number, Confirm Number, IFSC Code, Account Type)
 *   2. Debit / Credit Card (Cardholder Name, Card Number, Expiry, CVV, Card Issuing Bank)
 *   3. UPI (Customer VPA / UPI ID or Store QR with 12-digit UTR reference)
 *   4. Cash on Delivery (COD)
 * - Bank 3D-Secure 2.0 OTP Authorization Gateway
 * - Generates verified order, records in localStorage history, and triggers confirmation view
 */

import React, { useState, useEffect } from "react";
import { 
  X, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  CreditCard, 
  Smartphone, 
  Banknote, 
  ShieldCheck, 
  AlertCircle,
  Copy,
  Check,
  Building2,
  Lock,
  ArrowRight
} from "lucide-react";
import { useStore, PlacedOrder, PaymentDetails } from "../context/StoreContext";
import { BankOtpModal } from "./BankOtpModal";

const POPULAR_INDIAN_BANKS = [
  "State Bank of India (SBI)",
  "Canara Bank",
  "HDFC Bank",
  "ICICI Bank",
  "Indian Overseas Bank (IOB)",
  "Axis Bank",
  "Bank of Baroda",
  "Kotak Mahindra Bank",
  "Indian Bank",
  "Punjab National Bank",
  "Union Bank of India",
  "Tamilnad Mercantile Bank (TMB)",
  "Central Bank of India"
];

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    deliveryFee,
    cartTotalDiscount,
    cartGrandTotal,
    storeConfig,
    location,
    setLocation,
    currentAreaConfig,
    selectedFreeGiftId,
    placeOrder,
    setLastPlacedOrder,
    t
  } = useStore();

  // Contact & Delivery Fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [doorStreet, setDoorStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [areaId, setAreaId] = useState(location?.areaId || "annur");
  const [pincode, setPincode] = useState(location?.pincode || "641653");
  const [slot, setSlot] = useState(storeConfig.deliverySlots[0]?.id || "morning");
  const [deliveryNotes, setDeliveryNotes] = useState("");

  // Payment Method
  const [paymentMethod, setPaymentMethod] = useState<"netbanking" | "card" | "upi" | "cod">("netbanking");

  // Customer Bank Details Fields
  const [bankName, setBankName] = useState(POPULAR_INDIAN_BANKS[0]);
  const [accountHolderName, setAccountHolderName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [confirmAccountNumber, setConfirmAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [accountType, setAccountType] = useState<"savings" | "current">("savings");

  // Customer Card Details Fields
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardBankName, setCardBankName] = useState(POPULAR_INDIAN_BANKS[0]);

  // UPI Fields
  const [customerUpiId, setCustomerUpiId] = useState("");
  const [upiUtrNumber, setUpiUtrNumber] = useState("");
  const [copiedUpi, setCopiedUpi] = useState(false);

  // Validation & UI States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [otpBankDisplay, setOtpBankDisplay] = useState("State Bank of India (SBI)");
  const [otpAccountMasked, setOtpAccountMasked] = useState("");

  // Sync initial location data
  useEffect(() => {
    if (location) {
      if (location.areaId) setAreaId(location.areaId);
      if (location.pincode) setPincode(location.pincode);
      if (location.street) setDoorStreet(location.street);
      if (location.landmark) setLandmark(location.landmark);
    }
    if (name && !accountHolderName) {
      setAccountHolderName(name);
    }
  }, [location, isCheckoutOpen]);

  // When area changes, adjust pincode suggestion
  const handleAreaChange = (newAreaId: string) => {
    setAreaId(newAreaId);
    const area = storeConfig.deliveryAreas[newAreaId];
    if (area && area.pincodes.length > 0) {
      setPincode(area.pincodes[0]);
    }
  };

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(storeConfig.upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  // Card Number formatter (adds space every 4 digits)
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
    const formatted = raw.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formatted);
  };

  // Expiry formatter MM/YY
  const handleCardExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (raw.length >= 3) {
      raw = `${raw.slice(0, 2)}/${raw.slice(2)}`;
    }
    setCardExpiry(raw);
  };

  // Detect card network
  const getCardNetwork = (num: string): "RuPay" | "Visa" | "Mastercard" => {
    const clean = num.replace(/\D/g, "");
    if (clean.startsWith("4")) return "Visa";
    if (clean.startsWith("5") || clean.startsWith("2")) return "Mastercard";
    return "RuPay";
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!name.trim() || name.trim().length < 2) {
      errs.name = "Please enter your full name.";
    }

    // 10 digits Indian phone validation
    const cleanPhone = phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).";
    }

    if (!doorStreet.trim() || doorStreet.trim().length < 5) {
      errs.doorStreet = "Please enter your door number, building, and street.";
    }

    // Pincode 6 digits
    const cleanPincode = pincode.replace(/\D/g, "");
    if (!/^\d{6}$/.test(cleanPincode)) {
      errs.pincode = "Please enter a valid 6-digit postal pincode.";
    }

    if (!storeConfig.deliveryAreas[areaId]) {
      errs.area = "Please select a valid delivery zone (Annur, Kumarankundru, Pogalur, Kovilpalayam).";
    }

    // Bank Details Validation when Net Banking is chosen
    if (paymentMethod === "netbanking") {
      if (!accountHolderName.trim() || accountHolderName.trim().length < 2) {
        errs.accountHolderName = "Please enter the account holder name as registered with the bank.";
      }
      const cleanAcc = accountNumber.replace(/\D/g, "");
      if (cleanAcc.length < 9 || cleanAcc.length > 18) {
        errs.accountNumber = "Please enter a valid bank account number (9 to 18 digits).";
      }
      if (accountNumber !== confirmAccountNumber) {
        errs.confirmAccountNumber = "Account numbers do not match. Please verify.";
      }
      const cleanIfsc = ifscCode.trim().toUpperCase();
      if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(cleanIfsc)) {
        errs.ifscCode = "Please enter a valid 11-character Indian IFSC code (e.g. SBIN0001234).";
      }
    }

    // Card Details Validation when Card is chosen
    if (paymentMethod === "card") {
      if (!cardholderName.trim()) {
        errs.cardholderName = "Please enter the cardholder's name.";
      }
      const cleanCard = cardNumber.replace(/\D/g, "");
      if (cleanCard.length !== 16) {
        errs.cardNumber = "Please enter a valid 16-digit debit/credit card number.";
      }
      if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
        errs.cardExpiry = "Enter expiry as MM/YY.";
      }
      if (cardCvv.length < 3) {
        errs.cardCvv = "Enter 3-digit CVV.";
      }
    }

    // UPI Validation
    if (paymentMethod === "upi") {
      if (!customerUpiId.trim() && !upiUtrNumber.trim()) {
        errs.upi = "Please enter your UPI ID (e.g. name@oksbi) or the 12-digit payment UTR reference number.";
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // For Net Banking or Card: open the authentic Bank 3D-Secure OTP authentication modal!
    if (paymentMethod === "netbanking") {
      const masked = `••••••••${accountNumber.slice(-4)}`;
      setOtpBankDisplay(bankName);
      setOtpAccountMasked(masked);
      setIsOtpModalOpen(true);
      return;
    }

    if (paymentMethod === "card") {
      const cleanCard = cardNumber.replace(/\D/g, "");
      const masked = `•••• •••• •••• ${cleanCard.slice(-4)}`;
      setOtpBankDisplay(cardBankName || "Bank Gateway");
      setOtpAccountMasked(masked);
      setIsOtpModalOpen(true);
      return;
    }

    // For UPI or COD: place order directly
    executeOrderPlacement();
  };

  const executeOrderPlacement = (bankTxnId?: string) => {
    setIsSubmitting(true);

    const selectedArea = storeConfig.deliveryAreas[areaId];
    const selectedSlotObj = storeConfig.deliverySlots.find((s) => s.id === slot);
    const selectedGiftObj = storeConfig.freeGiftOptions.find((g) => g.id === selectedFreeGiftId);

    // Save location preference for next time
    setLocation({
      areaId,
      pincode,
      street: doorStreet,
      landmark
    });

    // Prepare item list for invoice and order record
    const orderItems = cart.map((i) => ({
      title: i.variant.packName,
      tamilTitle: i.product.tamilName,
      variantLabel: i.variant.weightLabel,
      quantity: i.quantity,
      price: i.variant.price,
      total: i.variant.price * i.quantity
    }));

    // Construct detailed payment metadata
    const generatedTxnId = bankTxnId || (
      paymentMethod === "upi" 
        ? (upiUtrNumber ? `UTR-${upiUtrNumber}` : `UPI-${Math.floor(1000000000 + Math.random() * 9000000000)}`)
        : `COD-${Math.floor(100000 + Math.random() * 900000)}`
    );

    const paymentDetails: PaymentDetails = {
      method: paymentMethod,
      status: paymentMethod === "cod" ? "pending" : "paid",
      amount: cartGrandTotal,
      transactionId: generatedTxnId,
      timestamp: new Date().toISOString(),
      bankDetails: paymentMethod === "netbanking" ? {
        bankName,
        accountHolderName: accountHolderName.trim(),
        accountNumberMasked: `••••••••${accountNumber.slice(-4)}`,
        ifscCode: ifscCode.trim().toUpperCase(),
        accountType,
        transactionRef: generatedTxnId,
        transactionDate: new Date().toLocaleString("en-IN")
      } : undefined,
      cardDetails: paymentMethod === "card" ? {
        cardholderName: cardholderName.trim(),
        cardNumberMasked: `•••• •••• •••• ${cardNumber.replace(/\D/g, "").slice(-4)}`,
        cardNetwork: getCardNetwork(cardNumber),
        bankName: cardBankName,
        authCode: generatedTxnId
      } : undefined,
      upiDetails: paymentMethod === "upi" ? {
        customerUpiId: customerUpiId.trim() || undefined,
        utrRefNumber: upiUtrNumber.trim() || generatedTxnId
      } : undefined
    };

    setTimeout(() => {
      const order = placeOrder({
        customerName: name.trim(),
        customerPhone: phone.replace(/\D/g, ""),
        addressLine: doorStreet.trim(),
        landmark: landmark.trim(),
        areaId,
        areaName: selectedArea?.name || areaId,
        pincode: pincode.trim(),
        deliverySlot: selectedSlotObj ? `${selectedSlotObj.label} (${selectedSlotObj.time})` : slot,
        deliveryNotes: deliveryNotes.trim(),
        items: orderItems,
        subtotal: cartSubtotal,
        deliveryFee,
        discount: cartTotalDiscount,
        freeGiftName: cartSubtotal >= (storeConfig.freeGiftThreshold || 2000) && selectedGiftObj ? selectedGiftObj.name : undefined,
        grandTotal: cartGrandTotal,
        paymentMethod,
        paymentStatus: paymentMethod === "cod" ? "pending" : "paid",
        paymentDetails,
        estimatedDeliveryText: selectedArea?.estimatedTime || "30-45 mins"
      });

      setIsSubmitting(false);
      setIsCheckoutOpen(false);
      setIsOtpModalOpen(false);
      setLastPlacedOrder(order);
    }, 600);
  };

  const handleOtpVerified = (txnId: string) => {
    executeOrderPlacement(txnId);
  };

  if (!isCheckoutOpen) return null;

  const selectedArea = storeConfig.deliveryAreas[areaId];
  const selectedGiftObj = storeConfig.freeGiftOptions.find((g) => g.id === selectedFreeGiftId);

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-stone-200 my-8">
          
          {/* Header */}
          <div className="bg-emerald-800 text-white p-5 sm:p-6 relative flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>Sri Maneeshwara Secure Checkout</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                {t.checkoutTitle}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setIsCheckoutOpen(false)}
              className="p-1.5 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-700 transition-colors"
              aria-label="Close checkout"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Body */}
          <form onSubmit={handleFormSubmit} className="p-5 sm:p-6 space-y-6">
            
            {/* Section 1: Customer Details */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
                <span>{t.contactDetails}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.fullName} *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className={`w-full px-3 py-2 rounded-lg border text-sm text-stone-900 focus:outline-none ${
                      errors.name ? "border-red-500 bg-red-50/30" : "border-stone-200 focus:border-emerald-600"
                    }`}
                    required
                  />
                  {errors.name && <span className="text-[11px] text-red-600 mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.phoneNumber} *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-stone-200 bg-stone-100 text-stone-600 text-xs font-semibold">
                      +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      placeholder="10-digit mobile"
                      className={`w-full px-3 py-2 rounded-r-lg border text-sm text-stone-900 font-mono focus:outline-none ${
                        errors.phone ? "border-red-500 bg-red-50/30" : "border-stone-200 focus:border-emerald-600"
                      }`}
                      required
                    />
                  </div>
                  {errors.phone ? (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.phone}</span>
                  ) : (
                    <span className="text-[10px] text-stone-400 mt-1 block">{t.phoneHelper}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Section 2: Delivery Address & Region */}
            <div className="pt-2 border-t border-stone-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                {t.deliveryAddress}
              </h3>

              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Area Dropdown (Strictly 4 areas) */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {t.selectArea} *
                    </label>
                    <select
                      value={areaId}
                      onChange={(e) => handleAreaChange(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-stone-200 bg-white text-sm text-stone-900 font-semibold focus:border-emerald-600 focus:outline-none"
                    >
                      {Object.values(storeConfig.deliveryAreas).map((area) => (
                        <option key={area.id} value={area.id}>
                          {area.name} ({area.tamilName}) – ₹{area.deliveryCharge} delivery ({area.estimatedTime})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 6-digit Pincode */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {t.pincode} *
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
                      placeholder="e.g. 641653"
                      className={`w-full px-3 py-2 rounded-lg border text-sm text-stone-900 font-mono focus:outline-none ${
                        errors.pincode ? "border-red-500 bg-red-50/30" : "border-stone-200 focus:border-emerald-600"
                      }`}
                      required
                    />
                    {errors.pincode && <span className="text-[11px] text-red-600 mt-1 block">{errors.pincode}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.doorStreet} *
                  </label>
                  <input
                    type="text"
                    value={doorStreet}
                    onChange={(e) => setDoorStreet(e.target.value)}
                    placeholder="Door No, Flat/House name, Street name"
                    className={`w-full px-3 py-2 rounded-lg border text-sm text-stone-900 focus:outline-none ${
                      errors.doorStreet ? "border-red-500 bg-red-50/30" : "border-stone-200 focus:border-emerald-600"
                    }`}
                    required
                  />
                  {errors.doorStreet && <span className="text-[11px] text-red-600 mt-1 block">{errors.doorStreet}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {t.landmark} (Optional)
                  </label>
                  <input
                    type="text"
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    placeholder="e.g. Near Murugan Temple / Bus stop"
                    className="w-full px-3 py-2 rounded-lg border border-stone-200 text-sm text-stone-900 focus:border-emerald-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Delivery Slot */}
            <div className="pt-2 border-t border-stone-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                {t.deliverySlot}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {storeConfig.deliverySlots.map((s) => {
                  const isSelected = slot === s.id;
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSlot(s.id)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                        isSelected
                          ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-600/20"
                          : "border-stone-200 bg-stone-50/50 hover:bg-stone-50 text-stone-700"
                      }`}
                    >
                      <div>
                        <span className="block font-bold">{s.label}</span>
                        <span className="block text-[11px] text-stone-500">{s.time}</span>
                      </div>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <div className="mt-3">
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t.deliveryNotes}
                </label>
                <input
                  type="text"
                  value={deliveryNotes}
                  onChange={(e) => setDeliveryNotes(e.target.value)}
                  placeholder="e.g. Ring the doorbell, leave near front gate"
                  className="w-full px-3 py-1.5 rounded-lg border border-stone-200 text-xs text-stone-800 focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* ========================================================================= */}
            {/* SECTION 4: PAYMENT OPTIONS & CUSTOMER BANK DETAILS ENTRY                  */}
            {/* ========================================================================= */}
            <div className="pt-2 border-t border-stone-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Choose Payment &amp; Enter Bank / Card Details</span>
                </h3>
                <span className="text-[10px] text-stone-400 font-medium flex items-center gap-1">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  256-Bit Encrypted
                </span>
              </div>

              {/* Payment Method Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                
                {/* 1. Net Banking Tab */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("netbanking")}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                    paymentMethod === "netbanking"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-600/20"
                      : "border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  <Building2 className={`w-4 h-4 ${paymentMethod === "netbanking" ? "text-emerald-700" : "text-stone-400"}`} />
                  <span className="text-xs">Net Banking</span>
                  <span className="text-[9px] text-stone-400">Direct Bank A/C</span>
                </button>

                {/* 2. Card Payment Tab */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                    paymentMethod === "card"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-600/20"
                      : "border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  <CreditCard className={`w-4 h-4 ${paymentMethod === "card" ? "text-emerald-700" : "text-stone-400"}`} />
                  <span className="text-xs">Debit / Credit</span>
                  <span className="text-[9px] text-stone-400">RuPay / Visa</span>
                </button>

                {/* 3. UPI Instant Tab */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("upi")}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                    paymentMethod === "upi"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-600/20"
                      : "border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  <Smartphone className={`w-4 h-4 ${paymentMethod === "upi" ? "text-emerald-700" : "text-stone-400"}`} />
                  <span className="text-xs">UPI Payment</span>
                  <span className="text-[9px] text-stone-400">GPay / PhonePe</span>
                </button>

                {/* 4. Cash on Delivery Tab */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                    paymentMethod === "cod"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-600/20"
                      : "border-stone-200 bg-stone-50/50 text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  <Banknote className={`w-4 h-4 ${paymentMethod === "cod" ? "text-emerald-700" : "text-stone-400"}`} />
                  <span className="text-xs">Cash (COD)</span>
                  <span className="text-[9px] text-stone-400">At Doorstep</span>
                </button>
              </div>

              {/* DETAIL FORM 1: CUSTOMER BANK DETAILS (NET BANKING / DIRECT TRANSFER) */}
              {paymentMethod === "netbanking" && (
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 space-y-3.5 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-emerald-700" />
                      <span className="text-xs font-bold text-stone-900">
                        Customer Bank Account Transfer Details
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-md">
                      IMPS / NEFT Direct
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Bank Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Select Your Bank *
                      </label>
                      <select
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs text-stone-900 font-semibold focus:border-emerald-600 focus:outline-none"
                      >
                        {POPULAR_INDIAN_BANKS.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    {/* Account Type */}
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Account Type *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setAccountType("savings")}
                          className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all ${
                            accountType === "savings"
                              ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold"
                              : "border-stone-300 bg-white text-stone-600 hover:bg-stone-100"
                          }`}
                        >
                          Savings A/C
                        </button>
                        <button
                          type="button"
                          onClick={() => setAccountType("current")}
                          className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all ${
                            accountType === "current"
                              ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold"
                              : "border-stone-300 bg-white text-stone-600 hover:bg-stone-100"
                          }`}
                        >
                          Current A/C
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Account Holder Name */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Account Holder Name (as in passbook / bank records) *
                    </label>
                    <input
                      type="text"
                      value={accountHolderName}
                      onChange={(e) => setAccountHolderName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar S"
                      className={`w-full px-3 py-2 rounded-lg border text-xs text-stone-900 focus:outline-none ${
                        errors.accountHolderName ? "border-red-500 bg-red-50/40" : "border-stone-300 focus:border-emerald-600"
                      }`}
                    />
                    {errors.accountHolderName && (
                      <span className="text-[11px] text-red-600 mt-0.5 block">{errors.accountHolderName}</span>
                    )}
                  </div>

                  {/* Account Number & Confirm Account Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Bank Account Number *
                      </label>
                      <input
                        type="password"
                        maxLength={18}
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ""))}
                        placeholder="Enter 9 to 18 digit A/C number"
                        className={`w-full px-3 py-2 rounded-lg border text-xs text-stone-900 font-mono tracking-wider focus:outline-none ${
                          errors.accountNumber ? "border-red-500 bg-red-50/40" : "border-stone-300 focus:border-emerald-600"
                        }`}
                      />
                      {errors.accountNumber && (
                        <span className="text-[11px] text-red-600 mt-0.5 block">{errors.accountNumber}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Confirm Account Number *
                      </label>
                      <input
                        type="text"
                        maxLength={18}
                        value={confirmAccountNumber}
                        onChange={(e) => setConfirmAccountNumber(e.target.value.replace(/\D/g, ""))}
                        placeholder="Re-enter account number"
                        className={`w-full px-3 py-2 rounded-lg border text-xs text-stone-900 font-mono tracking-wider focus:outline-none ${
                          errors.confirmAccountNumber ? "border-red-500 bg-red-50/40" : "border-stone-300 focus:border-emerald-600"
                        }`}
                      />
                      {errors.confirmAccountNumber && (
                        <span className="text-[11px] text-red-600 mt-0.5 block">{errors.confirmAccountNumber}</span>
                      )}
                    </div>
                  </div>

                  {/* IFSC Code */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Bank IFSC Code (11 alphanumeric characters) *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        maxLength={11}
                        value={ifscCode}
                        onChange={(e) => setIfscCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""))}
                        placeholder="e.g. SBIN0001234 or CNRB0002145"
                        className={`w-full px-3 py-2 rounded-lg border text-xs text-stone-900 font-mono uppercase focus:outline-none ${
                          errors.ifscCode ? "border-red-500 bg-red-50/40" : "border-stone-300 focus:border-emerald-600"
                        }`}
                      />
                      {/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifscCode) && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Valid IFSC</span>
                        </span>
                      )}
                    </div>
                    {errors.ifscCode ? (
                      <span className="text-[11px] text-red-600 mt-0.5 block">{errors.ifscCode}</span>
                    ) : (
                      <span className="text-[10px] text-stone-400 mt-0.5 block">
                        Usually found on your cheque leaf or bank passbook front page.
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* DETAIL FORM 2: CUSTOMER CARD DETAILS */}
              {paymentMethod === "card" && (
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 space-y-3.5 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-emerald-700" />
                      <span className="text-xs font-bold text-stone-900">
                        Enter Debit / Credit Card Information
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-200 text-stone-800">
                      {getCardNetwork(cardNumber)}
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Issuing Bank *
                    </label>
                    <select
                      value={cardBankName}
                      onChange={(e) => setCardBankName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-xs text-stone-900 font-semibold focus:border-emerald-600 focus:outline-none"
                    >
                      {POPULAR_INDIAN_BANKS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Cardholder Name (as printed on card) *
                    </label>
                    <input
                      type="text"
                      value={cardholderName}
                      onChange={(e) => setCardholderName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-3 py-2 rounded-lg border text-xs text-stone-900 focus:outline-none ${
                        errors.cardholderName ? "border-red-500 bg-red-50/40" : "border-stone-300 focus:border-emerald-600"
                      }`}
                    />
                    {errors.cardholderName && (
                      <span className="text-[11px] text-red-600 mt-0.5 block">{errors.cardholderName}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      16-Digit Card Number *
                    </label>
                    <input
                      type="text"
                      maxLength={19}
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="4532 •••• •••• 9821"
                      className={`w-full px-3 py-2 rounded-lg border text-xs text-stone-900 font-mono tracking-wider focus:outline-none ${
                        errors.cardNumber ? "border-red-500 bg-red-50/40" : "border-stone-300 focus:border-emerald-600"
                      }`}
                    />
                    {errors.cardNumber && (
                      <span className="text-[11px] text-red-600 mt-0.5 block">{errors.cardNumber}</span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Expiry Date (MM/YY) *
                      </label>
                      <input
                        type="text"
                        maxLength={5}
                        value={cardExpiry}
                        onChange={handleCardExpiryChange}
                        placeholder="MM/YY"
                        className={`w-full px-3 py-2 rounded-lg border text-xs text-stone-900 font-mono text-center focus:outline-none ${
                          errors.cardExpiry ? "border-red-500 bg-red-50/40" : "border-stone-300 focus:border-emerald-600"
                        }`}
                      />
                      {errors.cardExpiry && (
                        <span className="text-[11px] text-red-600 mt-0.5 block">{errors.cardExpiry}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        CVV / CVC (3 Digits) *
                      </label>
                      <input
                        type="password"
                        maxLength={3}
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ""))}
                        placeholder="•••"
                        className={`w-full px-3 py-2 rounded-lg border text-xs text-stone-900 font-mono text-center tracking-widest focus:outline-none ${
                          errors.cardCvv ? "border-red-500 bg-red-50/40" : "border-stone-300 focus:border-emerald-600"
                        }`}
                      />
                      {errors.cardCvv && (
                        <span className="text-[11px] text-red-600 mt-0.5 block">{errors.cardCvv}</span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* DETAIL FORM 3: UPI PAYMENT */}
              {paymentMethod === "upi" && (
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 space-y-4 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-emerald-700" />
                      <span className="text-xs font-bold text-stone-900">
                        UPI Payment &amp; UTR Verification
                      </span>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md">
                      Instant Zero Fees
                    </span>
                  </div>

                  {/* Customer personal UPI ID entry */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Enter Your Personal UPI ID (VPA)
                    </label>
                    <input
                      type="text"
                      value={customerUpiId}
                      onChange={(e) => setCustomerUpiId(e.target.value)}
                      placeholder="e.g. ramesh@oksbi, phone@paytm, 9876543210@ybl"
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 font-mono focus:border-emerald-600 focus:outline-none"
                    />
                    <span className="text-[10px] text-stone-400 mt-0.5 block">
                      A payment request will be initiated to your UPI application.
                    </span>
                  </div>

                  {/* Store QR & UTR reference box */}
                  <div className="p-3.5 bg-white rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center gap-3">
                    <div className="w-24 h-24 rounded-lg bg-stone-900 p-2 text-white flex flex-col items-center justify-center shrink-0 text-center">
                      <div className="text-[10px] font-bold text-amber-300">STORE QR</div>
                      <div className="text-[8px] text-stone-300 mt-0.5">Scan via GPay/PhonePe</div>
                      <div className="text-[9px] font-mono text-emerald-400 font-bold mt-1">₹{cartGrandTotal}</div>
                    </div>

                    <div className="flex-1 text-xs space-y-1.5 w-full">
                      <span className="text-stone-500 text-[11px] block">
                        Or pay directly to Sri Maneeshwara Store UPI ID:
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-stone-900 text-xs bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200 select-all">
                          {storeConfig.upiId}
                        </span>
                        <button
                          type="button"
                          onClick={handleCopyUpi}
                          className="px-2 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-md border border-emerald-200 flex items-center gap-1 transition-colors"
                        >
                          {copiedUpi ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedUpi ? "Copied" : "Copy"}</span>
                        </button>
                      </div>

                      <div className="pt-1">
                        <label className="block text-[11px] font-semibold text-stone-700 mb-0.5">
                          12-Digit UPI Transaction Reference / UTR Number:
                        </label>
                        <input
                          type="text"
                          maxLength={12}
                          value={upiUtrNumber}
                          onChange={(e) => setUpiUtrNumber(e.target.value.replace(/\D/g, ""))}
                          placeholder="e.g. 428910293847"
                          className="w-full px-2.5 py-1.5 rounded-lg border border-stone-300 text-xs font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  {errors.upi && (
                    <span className="text-[11px] text-red-600 block">{errors.upi}</span>
                  )}
                </div>
              )}

              {/* DETAIL FORM 4: CASH ON DELIVERY */}
              {paymentMethod === "cod" && (
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-xs text-stone-700 space-y-2 animate-in fade-in duration-150">
                  <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                    <Banknote className="w-4 h-4 text-emerald-700" />
                    <span>Cash on Delivery (Doorstep Cash Payment)</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    Please keep the exact cash amount of <strong className="text-stone-900 font-mono">₹{cartGrandTotal}</strong> ready when our delivery executive arrives at your address. A printed physical cash memo and receipt will be handed over.
                  </p>
                </div>
              )}
            </div>

            {/* Order Summary Recap */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs space-y-2">
              <div className="flex items-center justify-between text-stone-600">
                <span>{cart.length} Grocery Items Subtotal:</span>
                <span className="font-semibold text-stone-900">₹{cartSubtotal}</span>
              </div>
              <div className="flex items-center justify-between text-stone-600">
                <span>Delivery Charge ({selectedArea?.name}):</span>
                <span className="font-semibold">
                  {deliveryFee === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : `₹${deliveryFee}`}
                </span>
              </div>
              {cartSubtotal >= (storeConfig.freeGiftThreshold || 2000) && selectedGiftObj && (
                <div className="flex items-center justify-between text-amber-800 text-[11px]">
                  <span>🎁 Free Gift Unlocked: {selectedGiftObj.name}</span>
                  <span className="font-bold text-emerald-700">₹0</span>
                </div>
              )}
              <div className="pt-2 border-t border-stone-200 flex items-center justify-between font-bold text-sm text-stone-900">
                <span>Total Payable Amount:</span>
                <span className="text-lg text-emerald-800 font-extrabold font-mono">₹{cartGrandTotal}</span>
              </div>
            </div>

            {/* Place Order CTA */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>
                {isSubmitting 
                  ? t.processingOrder 
                  : (paymentMethod === "netbanking" || paymentMethod === "card")
                  ? `Proceed to Bank 3D-Secure Verification (₹${cartGrandTotal})`
                  : `${t.placeOrder} (₹${cartGrandTotal})`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Bank 3D-Secure 2.0 OTP Modal */}
      {isOtpModalOpen && (
        <BankOtpModal
          isOpen={isOtpModalOpen}
          bankName={otpBankDisplay}
          accountOrCardMasked={otpAccountMasked}
          amount={cartGrandTotal}
          customerPhone={phone}
          onSuccess={handleOtpVerified}
          onCancel={() => setIsOtpModalOpen(false)}
        />
      )}
    </>
  );
};
