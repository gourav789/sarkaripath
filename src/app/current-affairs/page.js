import Link from "next/link";

export const metadata = {
  title: "Current Affairs — Free PDFs (2025, July & August 2026) | Sarkari Path",
  description:
    "Free Current Affairs PDFs for SSC, Banking, Railway & all government exams — Top 250 Current Affairs 2025, July 2026 and August 2026 with 200+ MCQs each. Bilingual, no signup required.",
};

const CURRENT_AFFAIRS = [
  {
    title: "Current Affairs — August 2026",
    desc: "Monthly current affairs of August 2026 with 200 practice MCQs. Perfect for SSC, Banking & Railway exams.",
    tag: "Latest",
    tagColor: "bg-emerald-100 text-emerald-800",
    icon: "🗓️",
    file: "/current-affairs/current-affairs-august-2026.pdf",
    meta: "200 MCQs • Monthly",
  },
  {
    title: "Current Affairs — July 2026",
    desc: "Monthly current affairs of July 2026 with 200 practice MCQs. Covers national, international, sports, awards & more.",
    tag: "Monthly",
    tagColor: "bg-brand-100 text-brand-800",
    icon: "🗓️",
    file: "/current-affairs/current-affairs-july-2026.pdf",
    meta: "200 MCQs • Monthly",
  },
  {
    title: "Top 250 Current Affairs — 2025",
    desc: "The most important 250 current affairs of the year 2025 — a complete revision capsule for upcoming exams.",
    tag: "Yearly",
    tagColor: "bg-amber-100 text-amber-800",
    icon: "📚",
    file: "/current-affairs/current-affairs-2025.pdf",
    meta: "Top 250 • Yearly Capsule",
  },
];

export default function CurrentAffairsPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            100% Free • No Signup Required
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Current Affairs PDFs
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Free monthly & yearly current affairs capsules for SSC, Banking, Railway aur sabhi government exams.
            Har PDF ke saath practice MCQs — bilingual (Hindi + English). Bina login ke download karo.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {CURRENT_AFFAIRS.map((ca) => (
            <div
              key={ca.file}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-slate-50 text-2xl">
                  {ca.icon}
                </span>
                <span className={"rounded-full px-3 py-1 text-xs font-semibold " + ca.tagColor}>
                  {ca.tag}
                </span>
              </div>

              <h2 className="mt-4 text-lg font-bold text-slate-900">{ca.title}</h2>
              <p className="mt-1 text-xs font-semibold text-brand-700">{ca.meta}</p>
              <p className="mt-2 flex-1 text-sm text-slate-600">{ca.desc}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={ca.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700"
                >
                  📖 View PDF
                </a>
                <a
                  href={ca.file}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  ⬇️ Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to WhatsApp / premium */}
        <div className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 text-center">
          <h3 className="text-lg font-bold text-slate-900">
            Roz current affairs chahiye?
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Premium members ko WhatsApp channel par <strong>daily current affairs</strong> aur
            har mahine ka <strong>monthly PDF</strong> free milta hai — plus 2000+ practice questions.
          </p>
          <Link
            href="/pricing"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-brand-700"
          >
            View Lifetime Access — ₹299 →
          </Link>
        </div>
      </div>
    </div>
  );
}
