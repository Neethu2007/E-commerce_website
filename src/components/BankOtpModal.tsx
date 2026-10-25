/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Bank 3D-Secure 2.0 / OTP Verification Modal
 * Simulates genuine Indian banking authorization (SBI, Canara, HDFC, ICICI, etc.)
 * with live OTP entry, countdown timer, auto-fill demo button, and bank-grade encryption badge.
 */

import React, { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  Lock, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Building2, 
  Sparkles,
  ArrowRight
} from "lucide-react";

interface BankOtpModalProps {
  isOpen: boolean;
  bankName: string;
  accountOrCardMasked: string;
  amount: number;
  customerPhone: string;
  onSuccess: (transactionId: string) => void;
  onCancel: () => void;
}

export const BankOtpModal: React.FC<BankOtpModalProps> = ({
  isOpen,
  bankName,
  accountOrCardMasked,
  amount,
  customerPhone,
  onSuccess,
  onCancel
}) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isResent, setIsResent] = useState(false);

  // Countdown timer
  useEffect(() => {
    if (!isOpen) return;
    setTimer(60);
    setError(null);
    setIsProcessing(false);
    setOtp(["", "", "", "", "", ""]);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOtpChange = (index: number, value: string) => {
    const clean = value.replace(/\D/g, "");
    if (!clean && value !== "") return;

    const newOtp = [...otp];
    newOtp[index] = clean.slice(-1);
    setOtp(newOtp);
    setError(null);

    // Auto-focus next input
    if (clean && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleAutoFillDemoOtp = () => {
    setOtp(["4", "8", "2", "9", "1", "0"]);
    setError(null);
  };

  const handleResend = () => {
    setTimer(60);
    setIsResent(true);
    setError(null);
    setTimeout(() => setIsResent(false), 3000);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      setError("Please enter the complete 6-digit OTP received on your mobile.");
      return;
    }

    setIsProcessing(true);
    setError(null);

    setTimeout(() => {
      // Simulate authentic bank authorization approval
      const bankCode = bankName.slice(0, 3).toUpperCase().replace(/[^A-Z]/g, "BNK");
      const randomSuffix = Math.floor(10000000 + Math.random() * 90000000);
      const generatedTxnId = `TXN-${bankCode}-${randomSuffix}`;
      
      setIsProcessing(false);
      onSuccess(generatedTxnId);
    }, 1200);
  };

  const maskedPhone = customerPhone.length >= 4 
    ? `••••••${customerPhone.slice(-4)}`
    : "••••••8920";

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-stone-200">
        
        {/* Bank Header Bar */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
              <Building2 className="w-5 h-5 text-blue-200" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-blue-200 tracking-wider block">
                RBI 3D-Secure 2.0 Gateway
              </span>
              <h3 className="text-base font-bold text-white leading-tight">
                {bankName}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onCancel}
            disabled={isProcessing}
            className="p-1 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Security Trust Strip */}
        <div className="bg-blue-50/80 px-5 py-2 border-b border-blue-100 flex items-center justify-between text-[11px] text-blue-900 font-medium">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3 text-blue-700" />
            <span>256-Bit Encrypted Session</span>
          </span>
          <span className="font-semibold text-emerald-700 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Merchant</span>
          </span>
        </div>

        {/* Form Body */}
        <form onSubmit={handleVerifyOtp} className="p-5 sm:p-6 space-y-4">
          
          {/* Transaction Metadata */}
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
            <div className="flex justify-between items-center text-stone-600">
              <span>Merchant:</span>
              <span className="font-bold text-stone-900">Sri Maneeshwara Super Market</span>
            </div>
            <div className="flex justify-between items-center text-stone-600">
              <span>Debiting Account:</span>
              <span className="font-mono font-bold text-stone-900">{accountOrCardMasked}</span>
            </div>
            <div className="flex justify-between items-center text-stone-600 pt-1 border-t border-stone-200">
              <span className="font-bold text-stone-800">Total Transaction Amount:</span>
              <span className="text-sm font-extrabold text-emerald-800 font-mono">₹{amount}</span>
            </div>
          </div>

          {/* OTP instructions */}
          <div className="text-center pt-1">
            <p className="text-xs text-stone-600">
              Enter the 6-digit One Time Password (OTP) sent to your registered mobile number ending with{" "}
              <strong className="text-stone-900 font-mono">{maskedPhone}</strong>
            </p>
          </div>

          {/* 6-Digit OTP Inputs */}
          <div>
            <div className="flex justify-center gap-2 sm:gap-2.5 my-2">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  id={`otp-input-${idx}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  disabled={isProcessing}
                  className="w-10 h-12 text-center text-lg font-bold font-mono rounded-xl border border-stone-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-all"
                  autoFocus={idx === 0}
                />
              ))}
            </div>

            {/* Auto-fill demo helper */}
            <div className="flex items-center justify-between text-[11px] text-stone-500 mt-2 px-1">
              <button
                type="button"
                onClick={handleAutoFillDemoOtp}
                className="text-blue-700 hover:text-blue-900 font-semibold underline flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>Auto-fill Demo OTP (482910)</span>
              </button>

              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-stone-400" />
                {timer > 0 ? (
                  <span>Expires in <strong>00:{timer < 10 ? `0${timer}` : timer}</strong></span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="text-blue-700 font-bold hover:underline"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </div>

            {isResent && (
              <p className="text-[11px] text-emerald-700 font-semibold text-center mt-1">
                ✓ New OTP sent to {maskedPhone}
              </p>
            )}
          </div>

          {/* Error notice */}
          {error && (
            <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isProcessing || otp.join("").length !== 6}
              className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md transition-all flex items-center justify-center gap-2 ${
                isProcessing || otp.join("").length !== 6
                  ? "bg-stone-300 text-stone-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
              }`}
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Authorizing with {bankName}...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authorize &amp; Pay ₹{amount}</span>
                </>
              )}
            </button>
          </div>

          <div className="text-[10px] text-stone-400 text-center flex items-center justify-center gap-1 pt-1">
            <Lock className="w-2.5 h-2.5" />
            <span>Do not refresh or click back during authentication.</span>
          </div>

        </form>
      </div>
    </div>
  );
};
