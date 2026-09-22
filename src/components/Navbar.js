import Link from "next/link";
import { site } from "@/lib/site";
import { auth } from "@/auth";
import GoogleSignInButton from "./GoogleSignInButton";
import SignOutButton from "./SignOutButton";

export default async function Navbar() {
  let session = null;
  try {
    session = await auth();
  } catch (error) {
    // Graceful fallback during build or when auth is unconfigured
    session = null;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-600 text-lg font-bold text-white">
            S
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            {site.name}
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/exams" className="text-sm font-medium text-slate-600 hover:text-brand-600">
            All Exams
          </Link>
          <Link href="/#categories" className="text-sm font-medium text-slate-600 hover:text-brand-600">
            Categories
          </Link>
          <Link href="/premium" className="text-sm font-medium text-slate-600 hover:text-brand-600">
            Premium
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {session?.user ? (
            <div className="flex items-center gap-3">
              <span className="hidden text-sm font-medium text-slate-700 sm:inline-block">
                {session.user.name || session.user.email}
              </span>
              <SignOutButton />
            </div>
          ) : (
            <GoogleSignInButton compact />
          )}
        </div>
      </nav>
    </header>
  );
}
