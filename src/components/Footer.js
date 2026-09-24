import Link from "next/link";
import { site } from "@/lib/site";
import { PLAN_PRICE_RUPEES } from "@/lib/plans";

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

          {/* Social links — sabke liye visible */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-brand-600 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
              </svg>
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-brand-600 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.52.01-4.76.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.19-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.61-.07-4.76-.07zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92zm0 1.62a3.84 3.84 0 1 0 0 7.68 3.84 3.84 0 0 0 0-7.68zm5.65-.9a1.28 1.28 0 1 1-2.56 0 1.28 1.28 0 0 1 2.56 0z" />
              </svg>
            </a>
            <a
              href={site.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Channel"
              className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-[#25D366] hover:text-white"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M16.004 0h-.008C7.174 0 .001 7.173.001 16c0 3.5 1.13 6.744 3.05 9.38L1.05 31.5l6.28-2.006A15.9 15.9 0 0 0 16.004 32C24.83 32 32 24.826 32 16S24.83 0 16.004 0zm9.31 22.6c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.036-.226-.312-1.9-2.53-1.9-4.826 0-2.296 1.204-3.424 1.63-3.89.386-.42.842-.512 1.122-.512.14 0 .266.007.38.012.34.014.51.034.734.568.278.66.95 2.286 1.03 2.452.082.166.14.36.028.572-.104.212-.196.34-.36.522-.166.182-.316.322-.482.516-.15.166-.318.346-.14.66.178.312.79 1.302 1.696 2.11 1.166 1.04 2.148 1.362 2.5 1.506.264.108.578.082.788-.14.266-.28.594-.744.928-1.204.234-.324.53-.364.842-.246.318.11 2.006.946 2.35 1.118.344.172.572.256.656.398.082.142.082.828-.304 1.916z" />
              </svg>
            </a>
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
              <Link href="/current-affairs" className="hover:text-brand-600">
                Current Affairs (Free)
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
                Lifetime Access (₹{PLAN_PRICE_RUPEES})
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-600">
                Contact Us
              </Link>
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
