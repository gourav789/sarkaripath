import { site } from "@/lib/site";
import { plans } from "@/lib/plans";
import BuyButton from "@/components/BuyButton";

export const metadata = {
  title: "Premium Plans — SarkariPath",
  description:
    "Poora syllabus, expert notes aur full mock tests unlock karo. One-time payment, lifetime access.",
};

export default function PremiumPage() {
  return (
    <div className="container-page py-16">
      <div className="text-center">
        <span className="inline-block rounded-full bg-accent-500/10 px-4 py-1 text-sm font-medium text-accent-600">
          Premium
        </span>
        <h1 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
          Poori taiyari unlock karo
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Free content se shuru karo, phir premium se saara syllabus, notes aur mock tests paao.
          One-time payment — koi monthly jhanjhat nahi.
        </p>
      </div>

      {/* Plans */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={
              "flex flex-col rounded-2xl border bg-white p-6 shadow-sm " +
              (plan.highlighted
                ? "border-brand-500 ring-2 ring-brand-500/20"
                : "border-slate-200")
            }
          >
            {plan.highlighted && (
              <span className="mb-3 inline-block w-fit rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
            <p className="text-sm text-slate-500">{plan.tagline}</p>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-extrabold text-slate-900">₹{plan.price}</span>
              <span className="mb-1 text-sm text-slate-500">/ {plan.period}</span>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="mt-0.5 text-brand-600">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <BuyButton
                planId={plan.id}
                planName={plan.name}
                amount={plan.price}
                className={
                  plan.highlighted
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }
              />
            </div>
          </div>
        ))}
      </div>

      {/* Trust / payment note */}
      <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="font-bold text-slate-900">Payment kaise hoga?</h3>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• Secure Razorpay checkout — UPI, card, netbanking sab supported.</li>
          <li>• Payment server-side verify hota hai, phir access unlock hota hai.</li>
          <li>
            • Koi dikkat ho to{" "}
            <a href={`mailto:${site.supportEmail}`} className="text-brand-600 hover:underline">
              {site.supportEmail}
            </a>{" "}
            par contact karo.
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="mx-auto mt-10 max-w-2xl">
        <h3 className="text-lg font-bold text-slate-900">FAQ</h3>
        <div className="mt-4 space-y-3">
          {[
            {
              q: "Ye one-time payment hai ya monthly?",
              a: "One-time. Ek baar payment, lifetime access (All-Access me future updates bhi).",
            },
            {
              q: "Payment ke baad content kaise milega?",
              a: "Payment confirm hote hi download link mil jaata hai. All-Access me sabhi exams unlock ho jaate hain.",
            },
            {
              q: "Refund milega?",
              a: "Digital product hone ki wajah se refund nahi milta, isliye pehle free content zaroor dekho.",
            },
          ].map((item) => (
            <div key={item.q} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-800">{item.q}</p>
              <p className="mt-1 text-sm text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
