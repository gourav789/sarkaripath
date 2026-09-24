"use client";

import { useEffect } from "react";
import { fbqTrack } from "@/lib/fbpixel";

/**
 * Client-side tracker: mount hone par Meta Pixel "ViewContent" fire karta hai.
 * Server components (jaise pricing page) mein isse render karke use karo.
 *
 * Props:
 *  - contentName: kaunsa content dekha (e.g. "Lifetime All-Access")
 *  - value: price (optional)
 */
export default function PixelViewContent({ contentName, value }) {
  useEffect(() => {
    fbqTrack("ViewContent", {
      content_name: contentName,
      content_category: "subscription",
      ...(value ? { value, currency: "INR" } : {}),
    });
  }, [contentName, value]);

  return null;
}
