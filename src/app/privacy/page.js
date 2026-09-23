import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy — Sarkari Path",
  description:
    "Learn how Sarkari Path collects, uses, and safeguards your personal information when you use our educational website.",
};

export default function PrivacyPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            Privacy & Trust
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: September 2026
          </p>
        </div>

        {/* Content */}
        <div className="mt-8 space-y-8 text-slate-700 leading-relaxed text-sm">
          <section>
            <h2 className="text-base font-bold text-slate-900">1. Introduction</h2>
            <p className="mt-2">
              At <strong>Sarkari Path</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we value your trust and are committed to protecting your privacy. This Privacy Policy explains what personal data we collect when you visit <strong>{site.domain}</strong>, how we use it, and the security measures we employ.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">2. Information We Collect</h2>
            <p className="mt-2">
              We collect minimal information necessary to deliver our online exam preparation services:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Account Information:</strong> When you register using email/password or Google Sign-In, we receive your name and email address.
              </li>
              <li>
                <strong>Transaction Metadata:</strong> When you make a purchase on our platform, we receive transaction identifiers (such as Razorpay Order ID, Payment ID, timestamp, and amount).
              </li>
              <li>
                <strong>Technical & Usage Data:</strong> Standard server logs, browser type, and device information to ensure platform security and optimal performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">3. Payment Information & Security</h2>
            <p className="mt-2">
              All payment transactions on Sarkari Path are processed securely through <strong>Razorpay</strong>, a RBI-authorized and PCI-DSS compliant payment gateway.
            </p>
            <p className="mt-2">
              <strong>We do NOT collect, process, or store your credit/debit card numbers, CVV, bank account credentials, or UPI PINs on our servers.</strong> All payment data is entered directly on Razorpay&apos;s encrypted interface.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">4. How We Use Your Information</h2>
            <p className="mt-2">
              The information collected is used solely for:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Creating and authenticating your user account.</li>
              <li>Granting lifetime access to premium practice questions and study material.</li>
              <li>Responding to support tickets, inquiries, and billing requests.</li>
              <li>Preventing fraudulent activity and ensuring platform stability.</li>
            </ul>
            <p className="mt-2 font-medium text-slate-900">
              We never sell, rent, or trade your personal information to third-party advertisers or telemarketers.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">5. Cookies and Authentication Storage</h2>
            <p className="mt-2">
              We use standard browser cookies and local storage tokens strictly for session authentication (powered by Google Firebase Authentication) to keep you logged in across pages. You can control cookie preferences in your browser settings, though disabling them may prevent sign-in functionality.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">6. Third-Party Service Providers</h2>
            <p className="mt-2">
              We partner with trusted service providers to run our platform:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li><strong>Google Firebase:</strong> For secure client-side user authentication.</li>
              <li><strong>Razorpay:</strong> For secure online payment processing.</li>
              <li><strong>Cloudflare:</strong> For web application firewall, CDN, and edge hosting infrastructure.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">7. Data Security</h2>
            <p className="mt-2">
              We implement industry-standard security protocols, including HTTPS (SSL/TLS encryption) across all web traffic and token-based access controls to safeguard your data against unauthorized access, loss, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">8. User Rights and Data Deletion</h2>
            <p className="mt-2">
              You have the right to access, update, or request the deletion of your account and personal data from our systems. If you wish to delete your account, simply email us at{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="font-semibold text-brand-600 hover:underline"
              >
                {site.supportEmail}
              </a>
              . We will process your request within 7 business days.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">9. Children&apos;s Privacy</h2>
            <p className="mt-2">
              Our website is designed for competitive exam candidates. We do not knowingly collect personal data from individuals under 13 years of age.
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-sm font-bold text-slate-900">10. Contact Information</h3>
            <p className="mt-1 text-xs text-slate-600">
              If you have any questions or concerns regarding this Privacy Policy, please contact our Data Grievance representative at:
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
