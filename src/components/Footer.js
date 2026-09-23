import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand & About Column */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-sm font-bold text-white">
              S
            </span>
            <span className="font-bold text-slate-900">{site.name}</span>
          </div>
          <p className="text-sm text-slate-500">
            {site.tagline}. Affordable and comprehensive prep material for government exams (SSC, Banking, Railway, and more).
          </p>
          <div className="text-xs text-slate-400 space-y-1">
            <p>📍 Durgapur, West Bengal, India</p>
            <p>
              ✉️{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="hover:text-brand-600 hover:underline"
              >
                {site.supportEmail}
              </a>
            </p>
          </div>
        </div>

        {/* Exams Column */}
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Exam Preparation</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li>
              <Link href="/exams/ssc-cgl" className="hover:text-brand-600">
                SSC CGL 2026
              </Link>
            </li>
            <li>
              <Link href="/exams/ssc-cgl/quantitative-aptitude" className="hover:text-brand-600">
                Quantitative Aptitude
              </Link>
            </li>
            <li>
              <Link href="/exams/ssc-cgl/verbal-reasoning" className="hover:text-brand-600">
                Reasoning Tests
              </Link>
            </li>
            <li>
              <Link href="/exams/ssc-cgl/history" className="hover:text-brand-600">
                General Awareness & GK
              </Link>
            </li>
            <li>
              <Link href="/exams" className="hover:text-brand-600 font-medium text-brand-600">
                All Subjects &rarr;
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Company & Plans</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li>
              <Link href="/about" className="hover:text-brand-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-brand-600">
                Pricing & Plans
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-brand-600">
                Lifetime Access (₹299)
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-600">
                Contact Us
              </Link>
            </li>
            <li>
              <a
                href={site.telegram}
                className="hover:text-brand-600 inline-flex items-center gap-1"
              >
                Telegram Channel
              </a>
            </li>
          </ul>
        </div>

        {/* Legal & Policies Column */}
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Legal & Policies</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li>
              <Link href="/terms" className="hover:text-brand-600">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-brand-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/refund" className="hover:text-brand-600">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-brand-600">
                Shipping & Delivery
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-200 py-6">
        <p className="container-page text-center text-xs text-slate-400">
          © 2026 Sarkari Path. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
