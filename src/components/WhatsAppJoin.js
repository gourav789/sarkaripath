"use client";

import { useAuth } from "@/components/AuthProvider";
import { site } from "@/lib/site";

/**
 * WhatsApp channel join banner.
 * Sirf PAID users ko dikhta hai (useAuth().paid === true).
 * Non-paid ya logged-out users ko kuch nahi dikhega.
 *
 * Props:
 *  - variant: "banner" (default) ya "compact"
 */
export default function WhatsAppJoin({ variant = "banner" }) {
  const { paid, loading } = useAuth();

  // Loading ke waqt ya non-paid user ko kuch mat dikhao
  if (loading || !paid) return null;

  const WhatsAppIcon = (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6 shrink-0 fill-current"
      aria-hidden="true"
    >
      <path d="M16.004 0h-.008C7.174 0 .001 7.173.001 16c0 3.5 1.13 6.744 3.05 9.38L1.05 31.5l6.28-2.006A15.9 15.9 0 0 0 16.004 32C24.83 32 32 24.826 32 16S24.83 0 16.004 0zm9.31 22.6c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.036-.226-.312-1.9-2.53-1.9-4.826 0-2.296 1.204-3.424 1.63-3.89.386-.42.842-.512 1.122-.512.14 0 .266.007.38.012.34.014.51.034.734.568.278.66.95 2.286 1.03 2.452.082.166.14.36.028.572-.104.212-.196.34-.36.522-.166.182-.316.322-.482.516-.15.166-.318.346-.14.66.178.312.79 1.302 1.696 2.11 1.166 1.04 2.148 1.362 2.5 1.506.264.108.578.082.788-.14.266-.28.594-.744.928-1.204.234-.324.53-.364.842-.246.318.11 2.006.946 2.35 1.118.344.172.572.256.656.398.082.142.082.828-.304 1.916z" />
    </svg>
  );

  if (variant === "compact") {
    return (
      <a
        href={site.whatsappChannel}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#1ebe57]"
      >
        {WhatsAppIcon}
        Join WhatsApp Channel
      </a>
    );
  }

  return (
    <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 sm:flex-row">
      <div className="flex items-center gap-3 text-center sm:text-left">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white">
          {WhatsAppIcon}
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Join our WhatsApp Channel
          </h3>
          <p className="text-sm text-slate-600">
            Daily Current Affairs, daily 100 SSC CGL questions & monthly CA PDF — free for members.
          </p>
        </div>
      </div>
      <a
        href={site.whatsappChannel}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#1ebe57]"
      >
        {WhatsAppIcon}
        Join Now
      </a>
    </div>
  );
}
