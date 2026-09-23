"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { useAuth } from "@/components/AuthProvider";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import SignOutButton from "@/components/SignOutButton";

export default function SignInCard() {
  const { user, loading } = useAuth();

  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center text-center">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-xl font-bold text-white">
          S
        </span>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">
          Welcome to {site.name}
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          {user
            ? "Aap successfully sign in ho chuke hain."
            : "Sign in karo apni progress save karne aur premium unlock karne ke liye."}
        </p>
      </div>

      <div className="mt-8">
        {loading ? (
          <div className="flex h-12 items-center justify-center text-sm text-slate-400">
            Checking status...
          </div>
        ) : user ? (
          <div className="space-y-4 text-center">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
              <p className="font-semibold">{user.displayName || user.email}</p>
              {user.email && user.displayName && (
                <p className="mt-0.5 text-xs text-emerald-600">{user.email}</p>
              )}
              <p className="mt-2 text-xs font-medium text-emerald-700">
                ✓ Signed in with Google
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Link
                href="/exams"
                className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                Go to Exams
              </Link>
              <SignOutButton />
            </div>
          </div>
        ) : (
          <GoogleSignInButton />
        )}
      </div>

      <p className="mt-6 text-center text-xs text-slate-400">
        Sign in karke aap hamari{" "}
        <Link href="/" className="text-brand-600 hover:underline">
          Terms
        </Link>{" "}
        aur{" "}
        <Link href="/" className="text-brand-600 hover:underline">
          Privacy Policy
        </Link>{" "}
        se sahmat hote hain.
      </p>

      {!user && (
        <div className="mt-8 rounded-xl bg-slate-50 p-4 text-center text-sm text-slate-500">
          Naye ho? Google se sign in karte hi aapka account automatically ban jayega.
        </div>
      )}
    </div>
  );
}
