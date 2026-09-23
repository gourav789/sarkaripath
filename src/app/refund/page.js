import { site } from "@/lib/site";
import Link from "next/link";

export const metadata = {
  title: "Refund & Cancellation Policy — Sarkari Path",
  description:
    "Review Sarkari Path Refund and Cancellation Policy for our one-time lifetime access digital practice materials.",
};

export default function RefundPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            Consumer Information
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Refund & Cancellation Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: September 2026
          </p>
        </div>

        {/* Content */}
        <div className="mt-8 space-y-8 text-slate-700 leading-relaxed text-sm">
          <section>
            <h2 className="text-base font-bold text-slate-900">1. Digital Nature of Products</h2>
            <p className="mt-2">
              <strong>Sarkari Path</strong> provides instant, web-based digital educational content and practice question sets for competitive exams. Because access is granted immediately upon successful completion of payment, <strong>sales are generally considered final</strong>. We encourage all users to explore our free practice questions and syllabus guides before making a purchase.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">2. Refund Eligibility & Technical Issue Policy</h2>
            <p className="mt-2">
              We stand behind the quality of our content and want every aspirant to have a smooth experience. You are eligible to request a refund under the following conditions:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Access Failure:</strong> You completed payment but the system failed to unlock premium modules, and our technical support team is unable to resolve the issue within 48 hours.
              </li>
              <li>
                <strong>Duplicate Charges:</strong> You were accidentally charged more than once for the same plan due to a payment gateway glitch.
              </li>
            </ul>
            <p className="mt-3">
              To request a refund under these conditions, you must email us within <strong>7 days of purchase</strong> at{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="font-semibold text-brand-600 hover:underline"
              >
                {site.supportEmail}
              </a>{" "}
              with your registered email address and the <strong>Razorpay Payment ID</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">3. Non-Refundable Scenarios</h2>
            <p className="mt-2">
              Refunds will not be issued in the following circumstances:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Change of mind after accessing and reviewing premium questions.</li>
              <li>Failure in or dissatisfaction with actual government examination scores.</li>
              <li>Account suspension or termination due to violation of our Terms (such as account sharing or content scraping).</li>
              <li>Requests submitted after 7 days from the transaction date.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">4. Cancellation Policy</h2>
            <p className="mt-2">
              Our plan is offered as a <strong>one-time payment of ₹299 for Lifetime Access</strong>. 
            </p>
            <p className="mt-2">
              <strong>There are NO recurring monthly or annual billing cycles.</strong> Consequently, there is no recurring subscription that requires cancellation. Once you pay ₹299, you will never be charged again for that plan.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">5. Refund Processing Timeline</h2>
            <p className="mt-2">
              Once your refund request is verified and approved by our support team:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>The refund will be initiated via the original payment method (Credit/Debit Card, UPI, Netbanking, or Wallet) via Razorpay.</li>
              <li>Refunds typically reflect in your bank account or payment method within <strong>5 to 7 business days</strong>, depending on your bank&apos;s processing times.</li>
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-sm font-bold text-slate-900">6. Need Help with a Payment?</h3>
            <p className="mt-1 text-xs text-slate-600">
              If you have any questions or require assistance regarding a transaction, please contact us:
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
