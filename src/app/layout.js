import "./globals.css";
import { site } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

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
        <Providers>
          <Navbar />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
