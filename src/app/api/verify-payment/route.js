import { getAdminAuth, getAdminDb } from "@/lib/firebase-admin";

export const runtime = "nodejs";

// HMAC-SHA256 signature verify — Web Crypto se (portable, Node + edge dono pe chalta hai).
async function hmacSha256Hex(secret, message) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Constant-time string compare (timing attacks se bachne ke liye)
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export async function POST(request) {
  try {
    const authHeader = request.headers.get("authorization") || "";
    const idToken = authHeader.startsWith("Bearer ")
      ? authHeader.substring(7)
      : null;

    if (!idToken) {
      return Response.json(
        { verified: false, error: "Unauthorized: Missing auth token" },
        { status: 401 }
      );
    }

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = await request.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return Response.json(
        { verified: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      return Response.json(
        { verified: false, error: "Payment not configured" },
        { status: 500 }
      );
    }

    // 1. Verify Razorpay HMAC-SHA256 signature
    const expected = await hmacSha256Hex(
      keySecret,
      `${razorpay_order_id}|${razorpay_payment_id}`
    );

    const verified = safeEqual(expected, razorpay_signature);
    if (!verified) {
      return Response.json(
        { verified: false, error: "Invalid payment signature" },
        { status: 400 }
      );
    }

    // 2. Verify Firebase ID Token to get uid
    let uid;
    try {
      const adminAuth = getAdminAuth();
      const decodedToken = await adminAuth.verifyIdToken(idToken);
      uid = decodedToken.uid;
    } catch (authErr) {
      console.error("Token verification failed:", authErr);
      return Response.json(
        { verified: false, error: "Invalid auth token" },
        { status: 401 }
      );
    }

    // 3. Write/merge paid status into Firestore users/{uid}
    const adminDb = getAdminDb();
    await adminDb.collection("users").doc(uid).set(
      {
        paid: true,
        paidAt: new Date().toISOString(),
        paymentId: razorpay_payment_id,
      },
      { merge: true }
    );

    return Response.json({
      verified: true,
      paymentId: razorpay_payment_id,
      uid,
    });
  } catch (err) {
    console.error("verify-payment error:", err);
    return Response.json(
      { verified: false, error: "Verification failed" },
      { status: 500 }
    );
  }
}

