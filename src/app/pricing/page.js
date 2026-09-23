import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Pricing & Plans — Sarkari Path",
  description:
    "Transparent pricing for Sarkari Path: Get one-time lifetime access to SSC CGL 2026 practice questions and study material for ₹299.",
};

export default function PricingPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6 text-center">
          <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            Simple & Transparent Pricing
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Plans & Pricing
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: September 2026
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mt-10 overflow-hidden rounded-3xl border-2 border-brand-500 bg-white shadow-lg">
          <div className="bg-brand-600 px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-white">
            Most Popular — Lifetime Value
          </div>

          <div className="p-8 sm:p-10">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Lifetime Access Plan
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Full online preparation & practice suite for SSC CGL 2026
                </p>
              </div>

              <div className="text-center sm:text-right">
                <div className="flex items-baseline justify-center gap-1 sm:justify-end">
                  <span className="text-4xl font-extrabold text-slate-900">₹299</span>
                  <span className="text-sm font-medium text-slate-500">/ one-time</span>
                </div>
                <span className="mt-1 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                  Zero recurring fees
                </span>
              </div>
            </div>

            <hr className="my-6 border-slate-100" />

            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              What&apos;s Included:
            </h3>

            <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-600">✓</span>
                <span>All Subject Question Banks (Quant, Reasoning, English, GA)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-600">✓</span>
                <span>Full detailed bilingual explanations (English & Hindi)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-600">✓</span>
                <span>Non-Verbal & Verbal interactive visual reasoning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-600">✓</span>
                <span>GK Capsules, History, Polity & Science modules</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-600">✓</span>
                <span>All future practice sets and updates included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-600">✓</span>
                <span>Instant digital access on mobile, tablet, and desktop</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col items-center gap-4">
              <Link
                href="/premium"
                className="w-full rounded-xl bg-brand-600 py-3.5 text-center text-base font-bold text-white shadow-md transition hover:bg-brand-700 sm:w-auto sm:px-12"
              >
                Get Lifetime Access for ₹299
              </Link>
              <p className="text-xs text-slate-400">
                🔒 100% Secure Checkout powered by Razorpay
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Policies Breakdown */}
        <div className="mt-12 space-y-6 text-sm text-slate-700 leading-relaxed">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-bold text-slate-900">Payment & Pricing Guarantees</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <strong>One-Time Payment:</strong> Pay ₹299 once and enjoy lifetime access. There are no monthly recurring subscriptions or auto-debits.
              </li>
              <li>
                <strong>No Hidden Charges:</strong> What you see is what you pay. Goods and Services Tax (GST) is calculated transparently where applicable.
              </li>
              <li>
                <strong>Accepted Payment Methods:</strong> UPI (Google Pay, PhonePe, Paytm, BHIM), Debit/Credit Cards (Visa, MasterCard, RuPay), Netbanking, and Wallets.
              </li>
              <li>
                <strong>Instant Electronic Delivery:</strong> Upon successful checkout, access to all premium modules is activated immediately on your registered account.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-bold text-slate-900">Have Billing Questions?</h3>
            <p className="mt-2">
              If you have any questions before purchasing, please contact us at{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="font-semibold text-brand-600 hover:underline"
              >
                {site.supportEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
