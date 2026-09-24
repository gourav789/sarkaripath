"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { site } from "@/lib/site";
import { useAuth } from "./AuthProvider";
import { fbqTrack } from "@/lib/fbpixel";

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
  const { user, paid, refreshPaidStatus } = useAuth();
  const router = useRouter();
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  async function handleBuy() {
    try {
      // 1. Ensure user is logged in before buying
      if (!user) {
        router.push("/signin?redirect=/pricing");
        return;
      }

      setStatus("loading");
      setMessage("");

      // Meta Pixel — user ne checkout shuru kiya
      fbqTrack("InitiateCheckout", {
        content_name: planName,
        content_category: "subscription",
        value: amount,
        currency: "INR",
      });

      // 2. Razorpay script load karo
      const ok = await loadRazorpayScript();
      if (!ok) {
        setStatus("error");
        setMessage("Payment gateway script load nahi hui. Please check internet connection.");
        return;
      }

      // 3. Server pe order banao
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

      // 4. Get Firebase ID token to associate payment
      const idToken = await user.getIdToken();

      // 5. Razorpay Checkout kholo
      const rzp = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: site.name,
        description: `${order.planName} Plan`,
        order_id: order.orderId,
        prefill: {
          name: user.displayName || "",
          email: user.email || "",
        },
        theme: { color: "#2563eb" },
        handler: async function (response) {
          try {
            // 6. Payment ke baad server pe verify karo with Firebase ID token
            setStatus("loading");
            setMessage("Payment verify aur account unlock ho raha hai...");

            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${idToken}`,
              },
              body: JSON.stringify(response),
            });

            const verify = await verifyRes.json();

            if (verifyRes.ok && verify.verified) {
              // Meta Pixel — successful purchase (sabse important conversion event)
              fbqTrack("Purchase", {
                content_name: planName,
                content_category: "subscription",
                value: amount,
                currency: "INR",
              });

              await refreshPaidStatus();
              setStatus("success");
              setMessage("Payment successful! Lifetime access unlock ho gaya.");
            } else {
              setStatus("error");
              setMessage(
                verify.error ||
                  "Payment verify nahi hui. Support se contact karo."
              );
            }
          } catch (vErr) {
            console.error("Verification call error:", vErr);
            setStatus("error");
            setMessage("Payment verification failed. Support team se contact karo.");
          }
        },
        modal: {
          ondismiss: function () {
            setStatus("idle");
            setMessage("");
          },
        },
      });

      rzp.on("payment.failed", function (resp) {
        setStatus("error");
        setMessage(resp.error?.description || "Payment fail ho gaya. Dobara try karo.");
      });

      rzp.open();
      setStatus("idle");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Kuch galat ho gaya. Dobara try karo.");
    }
  }

  if (paid) {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="w-full rounded-xl border border-emerald-300 bg-emerald-50 px-6 py-3.5 text-center text-sm font-bold text-emerald-800 shadow-sm">
          ✓ Lifetime Premium Unlocked
        </div>
        <Link
          href="/exams/ssc-cgl"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-600/20 transition hover:bg-brand-700"
        >
          Go to SSC CGL Practice Questions →
        </Link>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="w-full rounded-xl border border-green-300 bg-green-50 px-6 py-4 text-center text-sm font-bold text-green-800 shadow-md">
          🎉 {message}
        </div>
        <Link
          href="/exams/ssc-cgl"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-3 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
        >
          Go to SSC CGL Practice Questions →
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <button
        onClick={handleBuy}
        disabled={status === "loading"}
        className={
          "w-full rounded-xl px-6 py-3.5 font-bold transition disabled:cursor-not-allowed disabled:opacity-70 " +
          className
        }
      >
        {status === "loading"
          ? "Processing..."
          : !user
          ? "Sign in to Buy — ₹" + amount
          : `Unlock Lifetime Access — ₹${amount}`}
      </button>
      {status === "error" && message && (
        <p className="mt-2 text-center text-xs font-semibold text-red-600">{message}</p>
      )}
    </div>
  );
}
