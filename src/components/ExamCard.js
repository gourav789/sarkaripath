import Link from "next/link";

export default function ExamCard({ exam }) {
  return (
    <Link
      href={`/exams/${exam.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <span className="text-3xl">{exam.icon}</span>
        {exam.hasPremium && (
          <span className="rounded-full bg-accent-500/10 px-2 py-1 text-xs font-semibold text-accent-600">
            Premium
          </span>
        )}
      </div>
      <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-brand-600">
        {exam.name}
      </h3>
      <p className="text-sm text-slate-500">{exam.fullName}</p>
      <p className="mt-2 line-clamp-2 text-sm text-slate-600">{exam.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
          {exam.level}
        </span>
        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
          {exam.applicants}
        </span>
      </div>
      <span className="mt-4 text-sm font-semibold text-brand-600">
        View syllabus &amp; details →
      </span>
    </Link>
  );
}
