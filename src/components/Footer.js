import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container-page grid gap-8 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-sm font-bold text-white">
              S
            </span>
            <span className="font-bold text-slate-900">{site.name}</span>
          </div>
          <p className="mt-3 text-sm text-slate-500">{site.tagline}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Exams</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li><Link href="/exams/ssc-cgl" className="hover:text-brand-600">SSC CGL</Link></li>
            <li><Link href="/exams/rrb-ntpc" className="hover:text-brand-600">RRB NTPC</Link></li>
            <li><Link href="/exams/ibps-po" className="hover:text-brand-600">IBPS PO</Link></li>
            <li><Link href="/exams" className="hover:text-brand-600">All Exams</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li><Link href="/premium" className="hover:text-brand-600">Premium</Link></li>
            <li><a href={`mailto:${site.supportEmail}`} className="hover:text-brand-600">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Stay updated</h4>
          <p className="mt-3 text-sm text-slate-500">
            Naye notifications aur free material ke liye join karo.
          </p>
          <a
            href={site.telegram}
            className="mt-3 inline-block rounded-lg bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-100"
          >
            Join Telegram
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6">
        <p className="container-page text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {site.name} ({site.domain}). All rights reserved.
        </p>
      </div>
    </footer>
  );
}
