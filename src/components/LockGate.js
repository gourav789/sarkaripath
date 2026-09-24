"use client";

import Link from "next/link";
import { useAuth } from "./AuthProvider";

export default function LockGate({ children }) {
  const { user, loading, paid } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-8">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
          <p className="text-xs font-medium text-slate-500">Checking access...</p>
        </div>
      </div>
    );
  }

  // Not signed in
  if (!user) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-b from-white to-brand-50/40 p-8 text-center shadow-sm">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-2xl text-brand-600 shadow-sm border border-brand-100">
          🔒
        </div>
        <h3 className="mt-4 text-xl font-bold text-slate-900">
          Sign In to Access Practice Content
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
          Please sign in to your account to view questions, explanations, and track your practice progress.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/signin"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition hover:bg-brand-700"
          >
            Sign In Now →
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            View Pricing (₹299 Lifetime)
          </Link>
        </div>
      </div>
    );
  }

  // Signed in but not paid
  if (!paid) {
    return (
      <div className="relative overflow-hidden rounded-2xl border-2 border-brand-500 bg-white p-8 shadow-lg md:p-10">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-3xl text-brand-600 border border-brand-100">
            👑
          </div>
          <span className="mt-4 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
            Premium Content
          </span>
          <h3 className="mt-2 text-2xl font-extrabold text-slate-900 md:text-3xl">
            This content is for premium members
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Get instant lifetime access to all practice questions, detailed bilingual explanations, answer keys, and future exam updates.
          </p>

          {/* Benefit list */}
          <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50/80 p-4 text-left">
            <ul className="grid gap-2.5 text-xs text-slate-700 sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="font-bold text-brand-600">✓</span>
                <span>Full bilingual question banks</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-brand-600">✓</span>
                <span>Step-by-step solutions &amp; tricks</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-brand-600">✓</span>
                <span>Non-Verbal visual reasoning figures</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-brand-600">✓</span>
                <span>One-time ₹299 — zero subscriptions</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="w-full rounded-xl bg-brand-600 px-7 py-3 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 sm:w-auto"
            >
              Unlock for ₹299
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Instant digital unlock upon payment • 100% secure checkout
          </p>
        </div>
      </div>
    );
  }

  // User is signed in and has paid
  return <>{children}</>;
}
