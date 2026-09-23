import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Us — Sarkari Path",
  description:
    "Learn about Sarkari Path, our mission to provide affordable and comprehensive exam preparation material for government exams (SSC, Banking, Railway, and more).",
};

export default function AboutPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            About Sarkari Path
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            About Us
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: September 2026
          </p>
        </div>

        {/* Content */}
        <div className="mt-8 space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900">Who We Are</h2>
            <p className="mt-3">
              <strong>Sarkari Path</strong> is an online educational platform designed to empower candidates preparing for government competitive examinations in India, covering <strong>SSC, Banking, Railway, and other premier exams</strong>. Operating from <strong>Durgapur, West Bengal, India</strong>, we are committed to making top-tier exam preparation accessible, streamlined, and affordable for every aspirant.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
            <p className="mt-3">
              Our mission is to eliminate barriers in competitive exam preparation by offering high-yield, structured, and exam-relevant practice content at an affordable, one-time price. We believe that quality preparation should not be locked behind expensive recurring subscriptions or cluttered resources.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">What We Offer</h2>
            <p className="mt-3">
              Sarkari Path provides carefully curated digital practice modules and subject-wise question banks with comprehensive explanations:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
              <li>
                <strong>Quantitative Aptitude:</strong> Arithmetic, Advanced Mathematics, Geometry, Algebra, and Data Interpretation.
              </li>
              <li>
                <strong>Reasoning:</strong> Verbal & Non-Verbal Reasoning with interactive pattern recognition tests.
              </li>
              <li>
                <strong>English Comprehension:</strong> Grammar rules, Vocabulary, Idioms & Phrases, Cloze Test, and Reading Comprehension.
              </li>
              <li>
                <strong>General Awareness & GK:</strong> Complete coverage of Indian History, Polity & Constitution, Geography, Economics, General Science, and Art & Culture.
              </li>
              <li>
                <strong>Bilingual Questions:</strong> Content designed in English and Hindi for maximum conceptual clarity.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">Who It Is For</h2>
            <p className="mt-3">
              Our platform is tailored for serious aspirants targeting <strong>SSC (CGL, CHSL, MTS), Banking (IBPS PO/Clerk, SBI PO), Railway (RRB NTPC, Group D)</strong>, and State PSC examinations who require structured revision and subject-wise testing.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-base font-bold text-slate-900">Get in Touch</h3>
            <p className="mt-2 text-sm text-slate-600">
              Have questions, feedback, or need assistance? Reach out to our support team at{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="font-semibold text-brand-600 hover:underline"
              >
                {site.supportEmail}
              </a>
              .
            </p>
            <div className="mt-4">
              <Link
                href="/pricing"
                className="inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                View Plans & Pricing
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
