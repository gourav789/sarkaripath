import { site } from "@/lib/site";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions — Sarkari Path",
  description:
    "Review the Terms & Conditions governing your access and use of Sarkari Path digital preparation materials and services.",
};

export default function TermsPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            Legal & Policy
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: September 2026
          </p>
        </div>

        {/* Terms Content */}
        <div className="mt-8 space-y-8 text-slate-700 leading-relaxed text-sm">
          <section>
            <h2 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p className="mt-2">
              Welcome to <strong>Sarkari Path</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), available at{" "}
              <strong>{site.domain}</strong>. By accessing or using our website, creating an account, or purchasing any access plan, you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree with any part of these Terms, you must discontinue use of the platform immediately.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">2. Description of Service</h2>
            <p className="mt-2">
              Sarkari Path provides online digital educational content, including bilingual practice questions, topic-wise assessments, syllabus breakdowns, and preparation materials for Indian competitive exams (such as SSC CGL 2026).
            </p>
            <p className="mt-2">
              All services provided are purely digital and delivered over the internet. <strong>We do not sell, ship, or deliver any physical textbooks, CDs, or printed materials.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">3. User Accounts and Registration</h2>
            <p className="mt-2">
              To access practice tests and premium content, you may be required to register using your email or Google account. You agree to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Provide accurate and complete information during registration.</li>
              <li>Maintain the security and confidentiality of your login credentials.</li>
              <li>Notify us immediately if you suspect unauthorized access to your account.</li>
              <li>Accept responsibility for all activities occurring under your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">4. Plans, Pricing, and Payment Terms</h2>
            <p className="mt-2">
              Sarkari Path offers a <strong>Lifetime Access Plan for a one-time payment of ₹299 (INR)</strong>. 
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>This is a one-time purchase with no recurring monthly subscriptions or hidden charges.</li>
              <li>All payments are securely processed through authorized payment gateway partners (such as Razorpay). We do not collect or store your credit/debit card numbers or UPI PINs on our servers.</li>
              <li>Prices are subject to revision at our sole discretion; however, price changes will not affect users who have already purchased lifetime access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">5. Acceptable Use and Restrictions</h2>
            <p className="mt-2">
              Your access to Sarkari Path is personal, non-exclusive, non-transferable, and revocable. You strictly agree NOT to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Share, sell, rent, sublicense, or redistribute your account credentials to third parties.</li>
              <li>Scrape, download in bulk, republish, or commercialize any question banks, graphics, or content found on Sarkari Path.</li>
              <li>Attempt to reverse-engineer, bypass authentication mechanisms, or disrupt the server infrastructure.</li>
            </ul>
            <p className="mt-2">
              Violation of these rules will result in immediate termination of your account without eligibility for any refund.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">6. Intellectual Property Rights</h2>
            <p className="mt-2">
              All content on this website—including but not limited to practice questions, curated answer explanations, website design, UI components, code, graphics, and logos—is the exclusive intellectual property of Sarkari Path and protected under applicable copyright and intellectual property laws of India.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">7. Educational Disclaimer</h2>
            <p className="mt-2">
              Sarkari Path is an independent educational preparatory platform and is <strong>NOT affiliated with, endorsed by, or associated with the Staff Selection Commission (SSC), the Government of India, or any state examination authority</strong>.
            </p>
            <p className="mt-2">
              While we strive to provide high-quality and up-to-date practice material, we do not guarantee exam selection, specific ranks, scores, or employment outcomes. Success in competitive exams depends on individual effort and official examination standards.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">8. Limitation of Liability</h2>
            <p className="mt-2">
              To the maximum extent permitted by applicable law, Sarkari Path and its operators shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our digital materials, server downtime, or unforeseen internet outages. In any event, our total liability shall not exceed the amount actually paid by you (₹299).
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">9. Modifications to Terms</h2>
            <p className="mt-2">
              We reserve the right to amend or update these Terms & Conditions at any time. The updated date at the top of this page reflects the latest revision. Continued use of the platform after updates constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">10. Governing Law and Jurisdiction</h2>
            <p className="mt-2">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms or your use of the website shall be subject to the exclusive jurisdiction of the competent courts in <strong>West Bengal, India</strong>.
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-sm font-bold text-slate-900">11. Contact Us</h3>
            <p className="mt-1 text-xs text-slate-600">
              For any questions regarding these Terms & Conditions, please contact us at:
            </p>
            <p className="mt-2 text-xs font-semibold text-slate-800">
              Sarkari Path<br />
              Location: Durgapur, West Bengal, India<br />
              Email:{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="text-brand-600 hover:underline"
              >
                {site.supportEmail}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
