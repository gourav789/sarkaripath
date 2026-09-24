import Link from "next/link";
import { site } from "@/lib/site";
import { exams } from "@/lib/exams";
import { PLAN_PRICE_RUPEES } from "@/lib/plans";
import BuyButton from "@/components/BuyButton";

export const metadata = {
  title: "Pricing & Plans — Sarkari Path",
  description: `Transparent pricing for Sarkari Path: Get one-time lifetime access to all government exam practice questions and study material for ₹${PLAN_PRICE_RUPEES}.`,
};

const CURRENT_SETS = [
  {
    icon: "🧠",
    title: "Verbal Reasoning",
    count: "200 questions + answer key",
  },
  {
    icon: "🧩",
    title: "Non-Verbal Reasoning",
    count: "80 questions + figures + answer key",
  },
  {
    icon: "🔢",
    title: "Quantitative Aptitude",
    count: "200 questions + answer key",
  },
  {
    icon: "📖",
    title: "English Comprehension",
    count: "200 questions + answer key",
  },
  {
    icon: "🏛️",
    title: "History (GK)",
    count: "350 questions + answer key",
  },
  {
    icon: "⚖️",
    title: "Polity (GK)",
    count: "100 questions + answer key",
  },
  {
    icon: "🌍",
    title: "Geography (GK)",
    count: "100 questions + answer key",
  },
  {
    icon: "🔬",
    title: "General Science (GK)",
    count: "100 questions + answer key",
  },
  {
    icon: "📈",
    title: "Economics (GK)",
    count: "100 questions + answer key",
  },
  {
    icon: "🎭",
    title: "Art & Culture (GK)",
    count: "100 questions + answer key",
  },
];

const FUTURE_BENEFITS = [
  {
    icon: "📲",
    text: "Free WhatsApp Channel access",
  },
  {
    icon: "📰",
    text: "Daily Current Affairs updates on WhatsApp",
  },
  {
    icon: "📅",
    text: "Monthly Current Affairs PDF",
  },
  {
    icon: "📝",
    text: "Daily 100 new SSC CGL practice questions (added regularly)",
  },
  {
    icon: "🚀",
    text: "New exams added over time (SSC CHSL, MTS, IBPS, SBI, RRB, and more) — unlocked automatically",
  },
  {
    icon: "🔄",
    text: "All future practice sets & updates included at no extra cost",
  },
];

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
            Most Popular — Lifetime All-Access
          </div>

          <div className="p-8 sm:p-10">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Lifetime Access Plan
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Covers all exams on Sarkari Path — current and future (SSC, Banking, Railway, and more)
                </p>
              </div>

              <div className="text-center sm:text-right">
                <div className="flex items-baseline justify-center gap-1 sm:justify-end">
                  <span className="text-4xl font-extrabold text-slate-900">₹{PLAN_PRICE_RUPEES}</span>
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
                <span>GK Capsules, History, Polity, Geography & Science modules</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-600">✓</span>
                <span>All future exams & practice sets included at no extra cost</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-brand-600">✓</span>
                <span>Instant digital access on mobile, tablet, and PC</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="w-full sm:w-auto">
                <BuyButton
                  planId="premium"
                  planName="Lifetime All-Access"
                  amount={PLAN_PRICE_RUPEES}
                  className="bg-brand-600 text-white hover:bg-brand-700 shadow-md text-base font-bold py-3.5 px-8"
                />
              </div>
              <p className="text-xs text-slate-400">
                🔒 100% Secure Checkout powered by Razorpay
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 1: What You Get Right Now */}
        <div className="mt-14">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Instant Access
            </span>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              What You Get Right Now
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Available instantly after purchase
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {CURRENT_SETS.map((set, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:border-brand-300 hover:shadow"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-2xl">
                  {set.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    {set.title}
                  </h3>
                  <p className="text-xs font-medium text-brand-700 sm:text-sm">
                    {set.count}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-brand-200 bg-brand-50/70 p-4 text-center text-xs sm:text-sm font-bold text-brand-900 shadow-xs">
            Total: 1,530+ exam-level bilingual (Hindi + English) practice questions with detailed answer keys.
          </div>
        </div>

        {/* SECTION 2: What You'll Also Get (Ongoing & Future) */}
        <div className="mt-14">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Ongoing Value &amp; Roadmap
            </span>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              What You&apos;ll Also Get (Ongoing &amp; Future)
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Included free with your one-time ₹{PLAN_PRICE_RUPEES} — no extra cost
            </p>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <ul className="grid gap-3.5 sm:grid-cols-2">
              {FUTURE_BENEFITS.map((benefit, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3.5 transition hover:bg-slate-50 hover:border-slate-200"
                >
                  <span className="text-xl shrink-0 leading-tight">{benefit.icon}</span>
                  <span className="text-sm font-medium text-slate-800 leading-snug">
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 text-center text-xs sm:text-sm font-semibold text-emerald-900">
              Buy once, keep getting more — your ₹{PLAN_PRICE_RUPEES} unlocks everything we add later.
            </div>
          </div>
        </div>

        {/* Exams Covered Section */}
        <div className="mt-14">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Multi-Exam Platform
            </span>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Exams Covered
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              One purchase unlocks all current content and all future exam releases.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {exams.map((exam) => {
              const isAvailable = exam.slug === "ssc-cgl";
              return isAvailable ? (
                <Link
                  key={exam.slug}
                  href={`/exams/${exam.slug}`}
                  className="flex items-center justify-between rounded-2xl border border-emerald-200 bg-white p-4 shadow-sm transition hover:border-emerald-400 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{exam.icon}</span>
                    <div>
                      <h3 className="font-bold text-slate-900">{exam.name}</h3>
                      <p className="text-xs text-slate-500">{exam.fullName}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                    Available
                  </span>
                </Link>
              ) : (
                <div
                  key={exam.slug}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-4 opacity-75"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl grayscale">{exam.icon}</span>
                    <div>
                      <h3 className="font-semibold text-slate-700">{exam.name}</h3>
                      <p className="text-xs text-slate-400">{exam.fullName}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                    Coming Soon
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50/60 p-4 text-center text-xs text-brand-900">
            💡 <strong>Note:</strong> New exams are added regularly. Buy once, unlock everything — including exams we launch later, at no extra cost.
          </div>
        </div>

        {/* Pricing Policies Breakdown */}
        <div className="mt-12 space-y-6 text-sm text-slate-700 leading-relaxed">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-bold text-slate-900">Payment & Pricing Guarantees</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <strong>One-Time Payment:</strong> Pay ₹{PLAN_PRICE_RUPEES} once and enjoy lifetime access. There are no monthly recurring subscriptions or auto-debits.
              </li>
              <li>
                <strong>No Hidden Charges:</strong> What you see is what you pay. Goods and Services Tax (GST) is calculated transparently where applicable.
              </li>
              <li>
                <strong>Accepted Payment Methods:</strong> UPI (Google Pay, PhonePe, Paytm, BHIM), Debit/Credit Cards (Visa, MasterCard, RuPay), Netbanking, and Wallets.
              </li>
              <li>
                <strong>Instant Electronic Delivery:</strong> Upon successful checkout, access to all practice modules is activated immediately on your registered account.
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
