import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="text-6xl">🔍</span>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">Page nahi mila</h1>
      <p className="mt-2 text-slate-500">
        Jo aap dhoondh rahe ho woh yahan nahi hai. Home pe wapas chalo.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700"
      >
        Go Home
      </Link>
    </div>
  );
}
