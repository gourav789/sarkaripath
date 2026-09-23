import { site } from "@/lib/site";
import Link from "next/link";

export const metadata = {
  title: "Shipping & Delivery Policy — Sarkari Path",
  description:
    "Review Sarkari Path digital delivery and fulfillment terms. All exam preparation modules are delivered electronically upon payment.",
};

export default function ShippingPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            Fulfillment Information
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Shipping & Delivery Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: September 2026
          </p>
        </div>

        {/* Content */}
        <div className="mt-8 space-y-8 text-slate-700 leading-relaxed text-sm">
          <section>
            <h2 className="text-base font-bold text-slate-900">1. Digital Products Only (No Physical Shipping)</h2>
            <p className="mt-2">
              <strong>Sarkari Path</strong> operates exclusively as a digital online education and test-preparation platform. All products, question banks, study guides, and test series offered on our website are <strong>100% digital goods and web-based services</strong>.
            </p>
            <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
              <strong>Important:</strong> We do NOT ship physical books, printed question sets, CDs, or hardware to any physical postal address. Therefore, physical shipping fees and postal courier delivery times do not apply to purchases on this platform.
            </div>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">2. Electronic Delivery Method & Timeline</h2>
            <p className="mt-2">
              Delivery is fulfilled electronically and automatically through our cloud infrastructure:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                <strong>Instant Access:</strong> Upon successful completion of payment via Razorpay, your account is immediately upgraded to unlock all premium question sets and materials.
              </li>
              <li>
                <strong>Delivery Timeframe:</strong> Access is provisioned within <strong>0 to 5 minutes</strong> of transaction confirmation.
              </li>
              <li>
                <strong>Access Location:</strong> You can access all your unlocked content directly by logging into your registered account on{" "}
                <Link href="/" className="font-semibold text-brand-600 hover:underline">
                  {site.domain}
                </Link>{" "}
                from any modern web browser on mobile, tablet, or PC.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">3. Confirmation & Receipt</h2>
            <p className="mt-2">
              Upon successful payment, an automated payment confirmation containing your <strong>Razorpay Payment ID</strong> and transaction summary will be sent to the email address you provided during checkout.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">4. Delivery Issues & Troubleshooting</h2>
            <p className="mt-2">
              If you have completed your transaction but cannot access the premium modules within 10 minutes:
            </p>
            <ol className="mt-2 list-decimal space-y-1 pl-5">
              <li>Log out and log back into your account on Sarkari Path to refresh your session token.</li>
              <li>Verify that you are logged in with the exact same email address used during checkout.</li>
              <li>Check your internet connection and reload the page.</li>
            </ol>
            <p className="mt-3">
              If the issue persists, please email our support team immediately at{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="font-semibold text-brand-600 hover:underline"
              >
                {site.supportEmail}
              </a>{" "}
              with your <strong>Payment ID</strong>. We will manually verify and unlock your access within 12–24 hours.
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-sm font-bold text-slate-900">5. Contact Information</h3>
            <p className="mt-1 text-xs text-slate-600">
              For any questions regarding digital delivery or fulfillment, please contact us:
            </p>
            <p className="mt-2 text-xs font-semibold text-slate-800">
              Sarkari Path<br />
              Location: Durgapur, West Bengal, India<br />
              Email:{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="text-brand-600 hover:underline"
              >
                {site.supportEmail}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
