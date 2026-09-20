"use client";

import { site } from "@/lib/site";

// Payment button. 3 modes:
// 1. Agar site.paymentLink set hai (Razorpay payment link) -> wahi kholo (sabse easy)
// 2. Warna UPI intent try karo
// 3. Razorpay Checkout (advanced) ke liye README me steps diye hain
export default function BuyButton({ planName, amount, className = "" }) {
  function handleBuy() {
    // Option 1: Razorpay Payment Link (recommended, sabse simple)
    if (site.paymentLink && site.paymentLink !== "#") {
      window.open(site.paymentLink, "_blank");
      return;
    }

    // Option 2: UPI fallback
    if (site.upiId) {
      const upiUrl = `upi://pay?pa=${encodeURIComponent(
        site.upiId
      )}&pn=${encodeURIComponent(site.name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(
        planName + " plan"
      )}`;
      // Mobile pe UPI app khulega; desktop pe instructions dikhao
      const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = upiUrl;
      } else {
        alert(
          `Payment ke liye is UPI ID par ₹${amount} bhejo:\n\n${site.upiId}\n\nPayment ke baad screenshot ${site.supportEmail} par bhejo — download link mil jayega.`
        );
      }
      return;
    }

    alert("Payment setup abhi baaki hai. README me steps diye hain.");
  }

  return (
    <button
      onClick={handleBuy}
      className={
        "w-full rounded-lg px-5 py-3 font-semibold transition " + className
      }
    >
      Buy {planName} — ₹{amount}
    </button>
  );
}
