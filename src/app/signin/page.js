import Link from "next/link";
import { site } from "@/lib/site";
import GoogleSignInButton from "@/components/GoogleSignInButton";

export const metadata = {
  title: "Sign In — SarkariPath",
  description: "Google se sign in karke apni taiyari track karo.",
};

export default function SignInPage() {
  return (
    <div className="container-page flex min-h-[70vh] items-center justify-center py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-xl font-bold text-white">
            S
          </span>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">
            Welcome to {site.name}
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Sign in karo apni progress save karne aur premium unlock karne ke liye.
          </p>
        </div>

        <div className="mt-8">
          <GoogleSignInButton />
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

        <div className="mt-8 rounded-xl bg-slate-50 p-4 text-center text-sm text-slate-500">
          Naye ho? Google se sign in karte hi aapka account automatically ban jayega.
        </div>
      </div>
    </div>
  );
}
