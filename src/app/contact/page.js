import { site } from "@/lib/site";
import Link from "next/link";

export const metadata = {
  title: "Contact Us — Sarkari Path",
  description:
    "Get in touch with Sarkari Path support for queries related to practice questions, account access, or payments.",
};

export default function ContactPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            Support & Inquiries
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Contact Us
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: September 2026
          </p>
        </div>

        {/* Introduction */}
        <p className="mt-6 text-slate-700 leading-relaxed">
          We are here to assist you with any questions regarding your preparation material, account login, lifetime access, or transaction status. Please reach out to us using the details below.
        </p>

        {/* Contact Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {/* Email Support Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="mt-4 text-lg font-bold text-slate-900">Email Support</h2>
            <p className="mt-1 text-sm text-slate-500">
              For general inquiries, access issues, and technical support.
            </p>
            <p className="mt-3">
              <a
                href={`mailto:${site.supportEmail}`}
                className="text-sm font-semibold text-brand-600 hover:underline"
              >
                {site.supportEmail}
              </a>
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Response time: We usually reply within 24–48 hours on business days.
            </p>
          </div>

          {/* Business Location Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="mt-4 text-lg font-bold text-slate-900">Business Location</h2>
            <p className="mt-1 text-sm text-slate-500">
              Our registered operational location:
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-800">
              Sarkari Path
            </p>
            <p className="text-sm text-slate-600">
              Durgapur, West Bengal, India
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Note: We provide 100% digital products; no in-person physical store visits.
            </p>
          </div>
        </div>

        {/* Payment & Refund Query Notice */}
        <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
          <h3 className="text-base font-bold text-slate-900">Payment or Refund Inquiries</h3>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">
            For payment confirmation, invoice receipts, or refund queries related to Razorpay transactions, please email us directly at{" "}
            <a
              href={`mailto:${site.supportEmail}`}
              className="font-semibold text-brand-600 hover:underline"
            >
              {site.supportEmail}
            </a>{" "}
            with your <strong>Payment ID</strong> and registered email address.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/refund"
              className="text-xs font-semibold text-brand-700 hover:underline"
            >
              → Read Refund Policy
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/terms"
              className="text-xs font-semibold text-brand-700 hover:underline"
            >
              → Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
