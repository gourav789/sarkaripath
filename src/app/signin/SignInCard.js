"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { site } from "@/lib/site";
import { useAuth } from "@/components/AuthProvider";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import SignOutButton from "@/components/SignOutButton";

function getFriendlyErrorMessage(error) {
  if (!error) return "";
  const code = error.code || "";
  switch (code) {
    case "auth/email-already-in-use":
      return "This email is already registered. Please login.";
    case "auth/invalid-email":
      return "Enter a valid email address.";
    case "auth/weak-password":
      return "Password must be at least 6 characters.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Incorrect email or password.";
    case "auth/too-many-requests":
      return "Too many attempts. Please try again later.";
    default:
      return error.message || "An unexpected error occurred. Please try again.";
  }
}

export default function SignInCard() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams?.get("redirect") || "/exams";

  const {
    user,
    loading,
    signInWithEmail,
    signUpWithEmail,
    resetPassword,
  } = useAuth();

  const [mode, setMode] = useState("login"); // "login" | "signup" | "forgot"
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [resetSuccess, setResetSuccess] = useState("");

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup form state
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  // Forgot password form state
  const [forgotEmail, setForgotEmail] = useState("");

  const switchMode = (newMode) => {
    setMode(newMode);
    setError("");
    setResetSuccess("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await signInWithEmail(loginEmail, loginPassword);
    } catch (err) {
      console.error("Login error:", err);
      setError(getFriendlyErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (signupPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (signupPassword !== signupConfirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    try {
      await signUpWithEmail(signupEmail, signupPassword, signupName);
    } catch (err) {
      console.error("Sign up error:", err);
      setError(getFriendlyErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError("");
    setResetSuccess("");

    if (!forgotEmail || !forgotEmail.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      await resetPassword(forgotEmail);
      setResetSuccess(
        "Password reset link sent to your email. Check your inbox."
      );
    } catch (err) {
      console.error("Reset password error:", err);
      setError(getFriendlyErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      {/* Header */}
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
            : mode === "forgot"
            ? "Apna password reset karne ke liye email enter karein."
            : mode === "signup"
            ? "Naya account banayein aur apni taiyari shuru karein."
            : "Sign in karo apni progress save karne aur premium access paane ke liye."}
        </p>
      </div>

      <div className="mt-6">
        {loading ? (
          <div className="flex h-20 items-center justify-center text-sm text-slate-400">
            <svg
              className="h-5 w-5 animate-spin text-brand-600 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
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
                ✓ Logged in
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Link
                href={redirectUrl}
                className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                {redirectUrl.startsWith("/pricing")
                  ? "Continue to Checkout →"
                  : "Go to Exams"}
              </Link>
              <SignOutButton />
            </div>
          </div>
        ) : (
          <div>
            {/* Tabs for Login / Sign up (hidden when in forgot password view) */}
            {mode !== "forgot" && (
              <div className="mb-6 grid grid-cols-2 rounded-xl bg-slate-100 p-1 text-sm font-medium text-slate-600">
                <button
                  type="button"
                  onClick={() => switchMode("login")}
                  className={`rounded-lg py-2 transition ${
                    mode === "login"
                      ? "bg-white font-semibold text-slate-900 shadow-sm"
                      : "hover:text-slate-900"
                  }`}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => switchMode("signup")}
                  className={`rounded-lg py-2 transition ${
                    mode === "signup"
                      ? "bg-white font-semibold text-slate-900 shadow-sm"
                      : "hover:text-slate-900"
                  }`}
                >
                  Sign up
                </button>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-4 rounded-lg bg-rose-50 p-3 text-xs font-medium text-rose-700 border border-rose-200">
                {error}
              </div>
            )}

            {/* Success Message for Password Reset */}
            {resetSuccess && (
              <div className="mb-4 rounded-lg bg-emerald-50 p-3 text-xs font-medium text-emerald-700 border border-emerald-200">
                {resetSuccess}
              </div>
            )}

            {/* Mode: Forgot Password Form */}
            {mode === "forgot" ? (
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div>
                  <label
                    htmlFor="forgot-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Email Address
                  </label>
                  <input
                    id="forgot-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-brand-600 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:opacity-60"
                >
                  {submitting ? "Sending link..." : "Send reset link"}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => switchMode("login")}
                    className="text-xs font-medium text-brand-600 hover:underline"
                  >
                    ← Back to Login
                  </button>
                </div>
              </form>
            ) : mode === "login" ? (
              /* Mode: Login Form */
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label
                    htmlFor="login-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Email Address
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="login-password"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => switchMode("forgot")}
                      className="text-xs font-medium text-brand-600 hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <input
                    id="login-password"
                    type="password"
                    required
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-brand-600 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:opacity-60"
                >
                  {submitting ? "Signing in..." : "Sign in with Email"}
                </button>
              </form>
            ) : (
              /* Mode: Sign Up Form */
              <form onSubmit={handleSignUp} className="space-y-4">
                <div>
                  <label
                    htmlFor="signup-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Full Name
                  </label>
                  <input
                    id="signup-name"
                    type="text"
                    required
                    placeholder="Aman Sharma"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="signup-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Email Address
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="signup-password"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Password (min. 6 chars)
                  </label>
                  <input
                    id="signup-password"
                    type="password"
                    required
                    minLength={6}
                    placeholder="••••••••"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="signup-confirm-password"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="signup-confirm-password"
                    type="password"
                    required
                    minLength={6}
                    placeholder="••••••••"
                    value={signupConfirmPassword}
                    onChange={(e) => setSignupConfirmPassword(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-brand-600 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:opacity-60"
                >
                  {submitting ? "Creating account..." : "Create Account"}
                </button>
              </form>
            )}

            {/* Divider and Google Sign In */}
            {mode !== "forgot" && (
              <>
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-slate-400 font-medium">
                      Or continue with
                    </span>
                  </div>
                </div>

                <GoogleSignInButton />
              </>
            )}
          </div>
        )}
      </div>

      <p className="mt-6 text-center text-xs text-slate-400">
        Sign in karke aap hamari{" "}
        <Link href="/terms" className="text-brand-600 hover:underline">
          Terms &amp; Conditions
        </Link>{" "}
        aur{" "}
        <Link href="/privacy" className="text-brand-600 hover:underline">
          Privacy Policy
        </Link>{" "}
        se sahmat hote hain.
      </p>
    </div>
  );
}
