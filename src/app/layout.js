import "./globals.css";
import Script from "next/script";
import { site } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";

// Meta (Facebook) Pixel ID
const META_PIXEL_ID = "2376608636415859";

export const dynamic = "force-dynamic";

export const metadata = {
  title: `${site.name} — ${site.tagline}`,
  description:
    "SSC CGL, Railways, IBPS aur sabhi government exams ki taiyari — syllabus, notes, mock tests aur premium study material ek hi jagah.",
  keywords: [
    "SSC CGL",
    "Railway exam",
    "IBPS",
    "government exam preparation",
    "sarkari naukri",
    "mock test",
    "syllabus",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        <AuthProvider>
          <Navbar />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
