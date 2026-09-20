import Razorpay from "razorpay";
import { plans } from "@/lib/plans";

// Node runtime chahiye Razorpay SDK ke liye.
export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { planId } = await request.json();

    // Server-side pe plan aur amount validate karo (client ko trust mat karo)
    const plan = plans.find((p) => p.id === planId);
    if (!plan) {
      return Response.json({ error: "Invalid plan" }, { status: 400 });
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) {
      return Response.json(
        { error: "Payment not configured. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET." },
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });

    const order = await razorpay.orders.create({
      amount: plan.price * 100, // paise me
      currency: "INR",
      receipt: `rcpt_${plan.id}_${Date.now()}`,
      notes: { planId: plan.id, planName: plan.name },
    });

    return Response.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId, // public key id — frontend checkout ke liye chahiye
      planName: plan.name,
    });
  } catch (err) {
    console.error("create-order error:", err);
    return Response.json({ error: "Could not create order" }, { status: 500 });
  }
}
