"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// Razorpay Checkout script ko ek baar load karo
function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function BuyButton({ planId, planName, amount, className = "" }) {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  async function handleBuy() {
    try {
      setStatus("loading");
      setMessage("");

      // 1. Razorpay script load karo
      const ok = await loadRazorpayScript();
      if (!ok) {
        setStatus("error");
        setMessage("Payment ki script load nahi hui. Internet check karo.");
        return;
      }

      // 2. Server pe order banao
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });
      const order = await orderRes.json();

      if (!orderRes.ok) {
        setStatus("error");
        setMessage(order.error || "Order create nahi hua.");
        return;
      }

      // 3. Razorpay Checkout kholo
      const rzp = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: site.name,
        description: `${order.planName} Plan`,
        order_id: order.orderId,
        theme: { color: "#2563eb" },
        handler: async function (response) {
          // 4. Payment ke baad server pe verify karo
          setStatus("loading");
          setMessage("Payment verify ho raha hai...");
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });
          const verify = await verifyRes.json();

          if (verify.verified) {
            setStatus("success");
            setMessage("Payment successful! Aapka access unlock ho gaya.");
          } else {
            setStatus("error");
            setMessage("Payment verify nahi hui. Support se contact karo.");
          }
        },
        modal: {
          ondismiss: function () {
            setStatus("idle");
            setMessage("Payment cancel ho gaya.");
          },
        },
      });

      rzp.on("payment.failed", function () {
        setStatus("error");
        setMessage("Payment fail ho gaya. Dobara try karo.");
      });

      rzp.open();
      setStatus("idle");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Kuch galat ho gaya. Dobara try karo.");
    }
  }

  if (status === "success") {
    return (
      <div className={"w-full rounded-lg bg-green-50 px-5 py-3 text-center text-sm font-semibold text-green-700 " + className}>
        ✓ {message}
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={handleBuy}
        disabled={status === "loading"}
        className={
          "w-full rounded-lg px-5 py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-70 " +
          className
        }
      >
        {status === "loading" ? "Please wait..." : `Buy ${planName} — ₹${amount}`}
      </button>
      {status === "error" && message && (
        <p className="mt-2 text-center text-xs text-red-600">{message}</p>
      )}
    </div>
  );
}
