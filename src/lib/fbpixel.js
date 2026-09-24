// Meta (Facebook) Pixel helper.
// fbq layout.js ke Pixel script se global window pe available hota hai.
// Ye helper safely event fire karta hai — agar pixel load na ho ya SSR ho to chup-chaap skip.

export function fbqTrack(event, params) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  try {
    if (params) {
      window.fbq("track", event, params);
    } else {
      window.fbq("track", event);
    }
  } catch (err) {
    // Pixel errors ko silently ignore karo — kabhi app na toote
    console.error("Meta Pixel track error:", err);
  }
}
